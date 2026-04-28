"use client";

import { useActionState } from "react";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { AuthActionState } from "@/server/actions/auth";
import { signInWithGoogleAction, signUpAction } from "@/server/actions/auth";

const initialState: AuthActionState = {};

function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
      <path
        d="M21.805 12.23c0-.79-.064-1.365-.2-1.962H12.2v3.715h5.52c-.11.923-.705 2.313-2.028 3.248l-.018.124 2.974 2.255.206.02c1.89-1.71 2.95-4.228 2.95-7.4z"
        fill="#4285F4"
      />
      <path
        d="M12.2 21.9c2.704 0 4.975-.873 6.633-2.37l-3.162-2.4c-.846.579-1.982.984-3.47.984-2.648 0-4.894-1.71-5.696-4.077l-.119.01-3.093 2.342-.04.111C4.9 19.705 8.295 21.9 12.2 21.9z"
        fill="#34A853"
      />
      <path
        d="M6.504 14.037A5.723 5.723 0 0 1 6.168 12c0-.708.121-1.396.334-2.037l-.005-.136-3.133-2.38-.103.048A9.761 9.761 0 0 0 2.2 12c0 1.607.393 3.127 1.061 4.505l3.243-2.468z"
        fill="#FBBC05"
      />
      <path
        d="M12.2 5.886c1.877 0 3.143.797 3.865 1.464l2.82-2.703C17.156 3.04 14.904 2.1 12.2 2.1c-3.905 0-7.3 2.194-8.938 5.395l3.24 2.47c.809-2.368 3.054-4.08 5.698-4.08z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUpAction, initialState);

  return (
    <Card className="w-full border-white/15 bg-white/[0.03] p-4 sm:p-5 lg:p-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-5 sm:p-6">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative z-10 grid gap-5">
            <span className="w-fit border border-emerald-400/65 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
              Provision Node // Auth
            </span>
            <div className="grid gap-3">
              <h1 className="text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">Activate workspace</h1>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                Get your Botlane workspace live in minutes.
              </p>
            </div>
            <ul className="grid gap-3 font-mono text-[11px] uppercase tracking-wider text-white/70">
              <li className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-indigo-200" />
                Brand-ready dashboard in minutes
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                Secure sign-in and protected client data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-white/80" />
                See your pipeline activity in one place
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 border border-white/10 bg-black/30 p-5 sm:p-6">
          <form action={formAction} className="grid gap-4">
            <Input autoComplete="name" label="Name" name="name" required type="text" />
            <Input autoComplete="email" label="Email" name="email" required type="email" />
            <Input
              autoComplete="new-password"
              label="Password"
              minLength={8}
              name="password"
              required
              type="password"
            />
            {state.error ? (
              <p className="border border-red-300/30 bg-red-400/10 px-3 py-2 text-xs font-medium text-red-200">{state.error}</p>
            ) : null}
            <Button className="mt-1 h-11 w-full font-mono text-xs uppercase tracking-widest" disabled={isPending} type="submit">
              {isPending ? "Creating account..." : "Create account"}
            </Button>
          </form>
          <div className="relative py-1">
            <div className="border-t border-white/10" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              or
            </span>
          </div>
          <form action={signInWithGoogleAction}>
            <Button className="h-11 w-full gap-2 border border-white/20 font-mono text-xs uppercase tracking-widest text-white" type="submit" variant="secondary">
              <GoogleIcon />
              Continue with Google
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
}
