import type { Session } from "next-auth";

import { UserMenu } from "@/components/dashboard/user-menu";

export function Topbar({ session }: { session: Session }) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 bg-black px-4 md:px-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-normal text-zinc-500">
          Client dashboard
        </p>
        <p className="text-sm font-semibold text-white">
          {session.user.name ?? session.user.email}
        </p>
      </div>
      <UserMenu session={session} />
    </header>
  );
}
