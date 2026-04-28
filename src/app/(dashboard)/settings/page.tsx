import Link from "next/link";

import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="grid gap-6">
      <Breadcrumbs items={["Dashboard", "Settings"]} />
      <h1 className="text-3xl font-semibold text-white">Settings</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-lg font-semibold text-white">Profile</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Update the name shown across your dashboard.
          </p>
          <Link
            className="mt-4 inline-flex text-sm font-medium text-white underline"
            href="/settings/profile"
          >
            Edit profile
          </Link>
        </Card>
        <Card className="p-5">
          <h2 className="text-lg font-semibold text-white">Security</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Change the password for credentials-based accounts.
          </p>
          <Link
            className="mt-4 inline-flex text-sm font-medium text-white underline"
            href="/settings/security"
          >
            Manage security
          </Link>
        </Card>
      </div>
    </div>
  );
}
