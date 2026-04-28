import type { ReactNode } from "react";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { requireAuth } from "@/lib/auth/session";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await requireAuth();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Topbar session={session} />
          <main className="px-4 py-6 md:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
