import type { Session } from "next-auth";

import { SignOutButton } from "@/components/auth/sign-out-button";

export function UserMenu({ session }: { session: Session }) {
  const label = session.user.name ?? session.user.email ?? "Account";

  return (
    <div className="flex items-center gap-3">
      <div className="hidden text-right sm:block">
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="text-xs text-zinc-500">{session.user.role}</p>
      </div>
      <SignOutButton />
    </div>
  );
}
