import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { Card } from "@/components/ui/card";

export default function AdminAuditPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={["Dashboard", "Admin", "Audit"]} />
      <h1 className="text-3xl font-semibold text-white">Audit log</h1>
      <Card className="p-5">
        <p className="text-sm text-zinc-400">Audit log data is ready for Phase 7.</p>
      </Card>
    </div>
  );
}
