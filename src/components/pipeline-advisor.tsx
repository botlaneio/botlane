"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { TrackedLink } from "@/components/tracked-link";

type ClientSource = "Referrals" | "Outbound" | "None";

function estimateRange(source: ClientSource, offer: string, location: string) {
  let min = 12;
  let max = 28;

  if (source === "Referrals") {
    min += 1;
    max += 2;
  } else if (source === "None") {
    min -= 2;
    max -= 3;
  }

  if (offer.toLowerCase().includes("saas")) {
    min += 1;
    max += 2;
  }
  if (location.toLowerCase().includes("usa") || location.toLowerCase().includes("uk")) {
    max += 1;
  }

  return `${Math.max(8, min)}-${Math.max(min + 4, max)}`;
}

export function PipelineAdvisor() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [offer, setOffer] = useState("");
  const [location, setLocation] = useState("");
  const [source, setSource] = useState<ClientSource | "">("");

  const range = useMemo(
    () => estimateRange(source || "Outbound", offer || "IT services", location || "USA"),
    [source, offer, location],
  );

  useEffect(() => {
    if (!open) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function goNext() {
    setIsTransitioning(true);
    window.setTimeout(() => {
      setStep((prev) => Math.min(prev + 1, 4));
      setIsTransitioning(false);
    }, 260);
  }

  function resetFlow() {
    setStep(0);
    setOffer("");
    setLocation("");
    setSource("");
    setIsTransitioning(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-6 z-[85] px-4 py-3 border border-white/35 bg-black/85 text-white font-mono text-xs uppercase tracking-widest cta-glow"
      >
        Estimate Pipeline →
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[86] bg-black/55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 bottom-0 z-[87] w-full max-w-[410px] border-l border-white/15 bg-black p-5 md:p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="font-mono text-[10px] text-white/45 uppercase tracking-widest">
                    BOTLANE // PIPELINE ADVISOR
                  </p>
                  <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mt-1">
                    System Online
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/45 transition-colors"
                  aria-label="Close advisor"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <motion.div
                  className={`border p-4 transition-opacity ${step >= 0 ? "border-white/25 opacity-100" : "border-white/10 opacity-30"}`}
                  animate={{ opacity: step >= 0 ? 1 : 0.3 }}
                >
                  <p className="font-mono text-xs text-white/80 mb-3">Want me to estimate your pipeline?</p>
                  {step === 0 && (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={isTransitioning}
                      className="px-3 py-2 border border-white/40 text-white font-mono text-[11px] uppercase tracking-widest cta-glow disabled:opacity-50"
                    >
                      Start →
                    </button>
                  )}
                </motion.div>

                <motion.div
                  className={`border p-4 transition-opacity ${step >= 1 ? "border-white/25 opacity-100" : "border-white/10 opacity-30"}`}
                  animate={{ opacity: step >= 1 ? 1 : 0.3 }}
                >
                  <p className="font-mono text-xs text-white/80 mb-2">What do you sell?</p>
                  <input
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    placeholder="IT services, MSP, SaaS"
                    className="h-10 w-full border border-white/20 bg-black px-3 text-sm text-white/90"
                    disabled={step < 1}
                  />
                  {step === 1 && (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={isTransitioning || !offer.trim()}
                      className="mt-3 px-3 py-2 border border-white/40 text-white font-mono text-[11px] uppercase tracking-widest cta-glow disabled:opacity-50"
                    >
                      Continue →
                    </button>
                  )}
                </motion.div>

                <motion.div
                  className={`border p-4 transition-opacity ${step >= 2 ? "border-white/25 opacity-100" : "border-white/10 opacity-30"}`}
                  animate={{ opacity: step >= 2 ? 1 : 0.3 }}
                >
                  <p className="font-mono text-xs text-white/80 mb-2">Where do you operate?</p>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="USA, UK, India"
                    className="h-10 w-full border border-white/20 bg-black px-3 text-sm text-white/90"
                    disabled={step < 2}
                  />
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={isTransitioning || !location.trim()}
                      className="mt-3 px-3 py-2 border border-white/40 text-white font-mono text-[11px] uppercase tracking-widest cta-glow disabled:opacity-50"
                    >
                      Continue →
                    </button>
                  )}
                </motion.div>

                <motion.div
                  className={`border p-4 transition-opacity ${step >= 3 ? "border-white/25 opacity-100" : "border-white/10 opacity-30"}`}
                  animate={{ opacity: step >= 3 ? 1 : 0.3 }}
                >
                  <p className="font-mono text-xs text-white/80 mb-3">How do you currently get clients?</p>
                  <div className="flex flex-wrap gap-2">
                    {(["Referrals", "Outbound", "None"] as ClientSource[]).map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSource(item)}
                        disabled={step < 3}
                        className={`px-3 py-2 border font-mono text-[11px] uppercase tracking-widest ${
                          source === item ? "border-white/55 text-white" : "border-white/20 text-white/65"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  {step === 3 && (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={isTransitioning || !source}
                      className="mt-3 px-3 py-2 border border-white/40 text-white font-mono text-[11px] uppercase tracking-widest cta-glow disabled:opacity-50"
                    >
                      Estimate →
                    </button>
                  )}
                </motion.div>

                <AnimatePresence>
                  {step >= 4 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="border border-cyan-300/40 bg-cyan-500/5 p-4 space-y-4"
                    >
                      <p className="font-mono text-[10px] text-cyan-100/80 uppercase tracking-widest">Estimated Pipeline</p>
                      <p className="text-2xl font-bold text-white">{range} qualified meetings/month</p>
                      <p className="font-mono text-xs text-white/75 leading-relaxed">
                        We handle:
                        <br />• targeting
                        <br />• outreach
                        <br />• follow-ups
                        <br />
                        <br />
                        You close deals.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <TrackedLink
                          href="/book-call"
                          eventName="cta_click"
                          eventMeta={{ location: "pipeline_advisor", target: "/book-call" }}
                          className="px-3 py-2 border border-white/45 text-white font-mono text-[11px] uppercase tracking-widest cta-glow"
                        >
                          Book a Call →
                        </TrackedLink>
                        <button
                          type="button"
                          onClick={resetFlow}
                          className="px-3 py-2 border border-white/25 text-white/75 font-mono text-[11px] uppercase tracking-widest"
                        >
                          Run Again
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
