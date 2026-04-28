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
    <Card className="w-full max-w-md p-6">
      <form action={formAction} className="grid gap-5">
        <div className="grid gap-1">
          <h1 className="text-2xl font-semibold text-white">Sign in</h1>
          <p className="text-sm text-zinc-400">Access your Botlane client workspace.</p>
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
        <Button disabled={isPending} type="submit">
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Card>
  );
}
