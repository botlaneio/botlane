import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { PasswordForm } from "@/components/settings/password-form";
import { Card } from "@/components/ui/card";

export default function SecuritySettingsPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={["Dashboard", "Settings", "Security"]} />
      <h1 className="text-3xl font-semibold text-white">Security</h1>
      <Card className="p-5">
        <PasswordForm />
      </Card>
    </div>
  );
}
