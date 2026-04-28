import Link from "next/link";

import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { Card } from "@/components/ui/card";
import { requireAuth } from "@/lib/auth/session";
import { getProjectsForUser } from "@/lib/data/projects";

export default async function ProjectsPage() {
  const session = await requireAuth();
  const projects = await getProjectsForUser(session.user.id);

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={["Dashboard", "Projects"]} />
      <h1 className="text-3xl font-semibold text-white">Projects</h1>
      {projects.length === 0 ? (
        <Card className="p-5">
          <p className="text-sm text-zinc-400">No projects have been created yet.</p>
        </Card>
      ) : (
        <div className="grid gap-3">
          {projects.map((project) => (
            <Card className="p-5" key={project.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link
                    className="text-base font-semibold text-white underline"
                    href={`/projects/${project.id}`}
                  >
                    {project.name}
                  </Link>
                  {project.description ? (
                    <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
                  ) : null}
                </div>
                <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-zinc-300">
                  {project.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
