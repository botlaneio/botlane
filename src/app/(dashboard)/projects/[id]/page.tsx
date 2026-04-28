import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { Card } from "@/components/ui/card";
import { requireAuth } from "@/lib/auth/session";
import { getProjectForUser } from "@/lib/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const session = await requireAuth();
  const { id } = await params;
  const project = await getProjectForUser(session.user.id, id);

  if (!project) {
    notFound();
  }

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={["Dashboard", "Projects", project.name]} />
      <h1 className="text-3xl font-semibold text-white">{project.name}</h1>
      <Card className="p-5">
        <dl className="grid gap-4 text-sm md:grid-cols-2">
          <div>
            <dt className="font-medium text-zinc-500">Status</dt>
            <dd className="mt-1 text-white">{project.status}</dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-500">Updated</dt>
            <dd className="mt-1 text-white">{project.updatedAt.toLocaleDateString()}</dd>
          </div>
          {project.description ? (
            <div className="md:col-span-2">
              <dt className="font-medium text-zinc-500">Description</dt>
              <dd className="mt-1 text-white">{project.description}</dd>
            </div>
          ) : null}
        </dl>
      </Card>
    </div>
  );
}
