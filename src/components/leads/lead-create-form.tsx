"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { LeadActionState } from "@/server/actions/leads";
import { createLeadAction } from "@/server/actions/leads";

const initialState: LeadActionState = {};

export function LeadCreateForm() {
  const [state, formAction, isPending] = useActionState(
    createLeadAction,
    initialState,
  );

  return (
    <Card className="p-5">
      <form action={formAction} className="grid gap-4 md:grid-cols-2">
        <Input label="Email" name="email" required type="email" />
        <Input label="Name" name="name" type="text" />
        <Input label="Phone" name="phone" type="tel" />
        <Input label="Source" name="source" type="text" />
        <label className="grid gap-2 text-sm font-medium text-zinc-200 md:col-span-2">
          Notes
          <textarea
            className="min-h-24 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-white/50 focus:ring-2 focus:ring-white/10"
            name="notes"
          />
        </label>
        <div className="flex items-center gap-3 md:col-span-2">
          <Button disabled={isPending} type="submit">
            {isPending ? "Saving..." : "Add lead"}
          </Button>
          {state.error ? <p className="text-sm text-red-300">{state.error}</p> : null}
          {state.success ? (
            <p className="text-sm text-emerald-300">{state.success}</p>
          ) : null}
        </div>
      </form>
    </Card>
  );
}
