import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { ProfileForm } from "@/components/settings/profile-form";
import { Card } from "@/components/ui/card";
import { requireAuth } from "@/lib/auth/session";
import { getUserById } from "@/lib/data/users";

export default async function ProfileSettingsPage() {
  const session = await requireAuth();
  const user = await getUserById(session.user.id);

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={["Dashboard", "Settings", "Profile"]} />
      <h1 className="text-3xl font-semibold text-white">Profile</h1>
      <Card className="p-5">
        <ProfileForm name={user?.name ?? ""} />
      </Card>
    </div>
  );
}
