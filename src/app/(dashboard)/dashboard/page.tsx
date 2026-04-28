import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { Card } from "@/components/ui/card";
import { requireAuth } from "@/lib/auth/session";
import { getEventCountsForUser } from "@/lib/data/events";
import { getLeadCountsForUser } from "@/lib/data/leads";
import { getProjectCountsForUser } from "@/lib/data/projects";

export default async function DashboardPage() {
  const session = await requireAuth();
  const [projects, leads, events] = await Promise.all([
    getProjectCountsForUser(session.user.id),
    getLeadCountsForUser(session.user.id),
    getEventCountsForUser(session.user.id),
  ]);

  const metrics = [
    { label: "Active projects", value: projects.active.toString() },
    { label: "New leads", value: leads.new.toString() },
    { label: "Recent events", value: events.total.toString() },
  ];

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={["Dashboard"]} />
      <div className="grid gap-3 border border-white/10 bg-white/[0.015] p-6">
        <span className="w-fit border border-emerald-400/60 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
          System State // Online
        </span>
        <h1 className="text-3xl font-semibold uppercase tracking-wide text-white">Overview</h1>
        <p className="max-w-2xl font-mono text-xs uppercase tracking-widest text-zinc-400">
          Your client workspace is ready. Project, lead, and activity data is
          scoped to your account.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card className="border-white/15 bg-white/[0.02] p-5" key={metric.label}>
            <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
