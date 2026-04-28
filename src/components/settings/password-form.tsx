"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ProfileActionState } from "@/server/actions/profile";
import { changePasswordAction } from "@/server/actions/profile";

const initialState: ProfileActionState = {};

export function PasswordForm() {
  const [state, formAction, isPending] = useActionState(
    changePasswordAction,
    initialState,
  );

  return (
    <form action={formAction} className="grid gap-4">
      <Input
        autoComplete="current-password"
        label="Current password"
        name="currentPassword"
        required
        type="password"
      />
      <Input
        autoComplete="new-password"
        label="New password"
        minLength={8}
        name="newPassword"
        required
        type="password"
      />
      <div className="flex items-center gap-3">
        <Button disabled={isPending} type="submit">
          {isPending ? "Updating..." : "Update password"}
        </Button>
        {state.error ? <p className="text-sm text-red-300">{state.error}</p> : null}
        {state.success ? (
          <p className="text-sm text-emerald-300">{state.success}</p>
        ) : null}
      </div>
    </form>
  );
}
