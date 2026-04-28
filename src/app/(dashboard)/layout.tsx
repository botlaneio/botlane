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
      <div className="pointer-events-none fixed inset-4 z-0 border border-white/8" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.14),transparent_38%)]" />
      <div className="relative z-10 flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Topbar session={session} />
          <main className="px-4 py-6 md:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
