import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { Card } from "@/components/ui/card";

export default function AdminUsersPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={["Dashboard", "Admin", "Users"]} />
      <h1 className="text-3xl font-semibold text-white">Users</h1>
      <Card className="p-5">
        <p className="text-sm text-zinc-400">Admin user management is ready for Phase 7.</p>
      </Card>
    </div>
  );
}
