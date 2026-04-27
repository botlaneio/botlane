"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/track-event";

type LeadCaptureFormProps = {
  sourcePage: "contact" | "book-call";
};

type FormState = {
  name: string;
  email: string;
  company: string;
  monthlyTarget: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  monthlyTarget: "",
  message: "",
  website: "",
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
        },
      ) => string;
    };
  }
}

export function LeadCaptureForm({ sourcePage }: LeadCaptureFormProps) {
  const startedAtRef = useRef<number>(0);
  const widgetRenderedRef = useRef(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (!turnstileSiteKey || widgetRenderedRef.current) {
      return;
    }

    const containerId = `turnstile-${sourcePage}`;
    const renderWidget = () => {
      if (!window.turnstile) {
        return;
      }
      window.turnstile.render(`#${containerId}`, {
        sitekey: turnstileSiteKey,
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
      });
      widgetRenderedRef.current = true;
    };

    const existingScript = document.getElementById("turnstile-script");
    if (existingScript) {
      renderWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = "turnstile-script";
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = renderWidget;
    document.head.appendChild(script);
  }, [sourcePage, turnstileSiteKey]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSuccess(false);
    setIsSubmitting(true);
    trackEvent("lead_form_submit_attempt", { sourcePage });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          monthlyTarget: form.monthlyTarget,
          message: form.message,
          website: form.website,
          elapsedMs: Date.now() - startedAtRef.current,
          turnstileToken,
          sourcePage,
        }),
      });

      const data = (await response.json()) as { error?: string; leadId?: string };
      if (!response.ok) {
        setError(data.error ?? "Submission failed. Please try again.");
        trackEvent("lead_form_submit_error", {
          sourcePage,
          status: response.status,
        });
        return;
      }

      trackEvent("lead_form_submit_success", {
        sourcePage,
        leadId: data.leadId ?? "none",
      });
      setIsSuccess(true);
      setForm(initialState);
      startedAtRef.current = Date.now();
    } catch {
      setError("Network error. Please try again.");
      trackEvent("lead_form_submit_error", { sourcePage, status: "network_error" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="border border-white/12 bg-white/[0.01] p-7 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 font-mono text-[10px] text-white/45 uppercase tracking-widest">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="h-11 border border-white/20 bg-black px-3 text-sm text-white/90 normal-case"
            placeholder="Jane Doe"
          />
        </label>
        <label className="flex flex-col gap-2 font-mono text-[10px] text-white/45 uppercase tracking-widest">
          Work Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="h-11 border border-white/20 bg-black px-3 text-sm text-white/90 normal-case"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2 font-mono text-[10px] text-white/45 uppercase tracking-widest">
          Company
          <input
            required
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="h-11 border border-white/20 bg-black px-3 text-sm text-white/90 normal-case"
            placeholder="Acme IT Services"
          />
        </label>
        <label className="flex flex-col gap-2 font-mono text-[10px] text-white/45 uppercase tracking-widest">
          Monthly Meeting Target
          <input
            required
            value={form.monthlyTarget}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, monthlyTarget: event.target.value }))
            }
            className="h-11 border border-white/20 bg-black px-3 text-sm text-white/90 normal-case"
            placeholder="e.g. 15 qualified calls"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 font-mono text-[10px] text-white/45 uppercase tracking-widest">
        What should we know before the call?
        <textarea
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          rows={4}
          className="border border-white/20 bg-black px-3 py-2 text-sm text-white/90 normal-case resize-y"
          placeholder="Share your current outbound setup, challenges, or goals."
        />
      </label>

      {/* Honeypot field for bot detection. Keep hidden from users. */}
      <input
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
        className="hidden"
        aria-hidden="true"
      />

      {turnstileSiteKey && (
        <div
          id={`turnstile-${sourcePage}`}
          className="min-h-[65px] border border-white/10 p-3 bg-black/20"
        />
      )}

      <button
        type="submit"
        disabled={isSubmitting || (Boolean(turnstileSiteKey) && !turnstileToken)}
        className="w-full md:w-auto px-7 py-3 border border-white/45 text-white font-mono text-xs uppercase tracking-widest cta-glow disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Request strategy call"}
      </button>

      {isSuccess && (
        <p className="font-mono text-xs text-emerald-300">
          Thanks, request received. We will get back to you at your work email.
        </p>
      )}

      {error && <p className="font-mono text-xs text-red-300">{error}</p>}
    </form>
  );
}
