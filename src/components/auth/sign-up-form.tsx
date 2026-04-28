"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { AuthActionState } from "@/server/actions/auth";
import { signUpAction } from "@/server/actions/auth";

const initialState: AuthActionState = {};

export function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUpAction, initialState);

  return (
    <Card className="w-full max-w-md p-6">
      <form action={formAction} className="grid gap-5">
        <div className="grid gap-1">
          <h1 className="text-2xl font-semibold text-white">Create account</h1>
          <p className="text-sm text-zinc-400">Start your Botlane client dashboard.</p>
        </div>
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
        {state.error ? <p className="text-sm text-red-300">{state.error}</p> : null}
        <Button disabled={isPending} type="submit">
          {isPending ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </Card>
  );
}
