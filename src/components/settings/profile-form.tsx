"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ProfileActionState } from "@/server/actions/profile";
import { updateProfileAction } from "@/server/actions/profile";

const initialState: ProfileActionState = {};

export function ProfileForm({ name }: { name: string }) {
  const [state, formAction, isPending] = useActionState(
    updateProfileAction,
    initialState,
  );

  return (
    <form action={formAction} className="grid gap-4">
      <Input defaultValue={name} label="Name" name="name" required type="text" />
      <div className="flex items-center gap-3">
        <Button disabled={isPending} type="submit">
          {isPending ? "Saving..." : "Save profile"}
        </Button>
        {state.error ? <p className="text-sm text-red-300">{state.error}</p> : null}
        {state.success ? (
          <p className="text-sm text-emerald-300">{state.success}</p>
        ) : null}
      </div>
    </form>
  );
}
