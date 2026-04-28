"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { AuthActionState } from "@/server/actions/auth";
import { signInAction } from "@/server/actions/auth";

const initialState: AuthActionState = {};

export function SignInForm() {
  const [state, formAction, isPending] = useActionState(signInAction, initialState);

  return (
    <Card className="w-full max-w-md border-white/15 bg-white/[0.03] p-7">
      <form action={formAction} className="grid gap-5">
        <div className="grid gap-2">
          <span className="w-fit border border-emerald-400/65 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
            Access Node // Auth
          </span>
          <h1 className="text-2xl font-semibold uppercase tracking-wide text-white">Sign in</h1>
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            Access your Botlane client workspace.
          </p>
        </div>
        <Input autoComplete="email" label="Email" name="email" required type="email" />
        <Input
          autoComplete="current-password"
          label="Password"
          name="password"
          required
          type="password"
        />
        {state.error ? <p className="text-sm text-red-300">{state.error}</p> : null}
        <Button className="w-full" disabled={isPending} type="submit">
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Card>
  );
}
