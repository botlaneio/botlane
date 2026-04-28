import type { Session } from "next-auth";

import { UserMenu } from "@/components/dashboard/user-menu";

export function Topbar({ session }: { session: Session }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-white/[0.015] px-4 md:px-6">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          Client dashboard // workspace
        </p>
        <p className="text-sm font-semibold uppercase tracking-wide text-white">
          {session.user.name ?? session.user.email}
        </p>
      </div>
      <UserMenu session={session} />
    </header>
  );
}
