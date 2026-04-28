import { LeadStatus } from "@prisma/client";

import { Breadcrumbs } from "@/components/dashboard/breadcrumbs";
import { LeadCreateForm } from "@/components/leads/lead-create-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { requireAuth } from "@/lib/auth/session";
import { getLeadsForUser } from "@/lib/data/leads";
import { deleteLeadAction, updateLeadStatusAction } from "@/server/actions/leads";

const statuses = Object.values(LeadStatus);

export default async function LeadsPage() {
  const session = await requireAuth();
  const leads = await getLeadsForUser(session.user.id);

  return (
    <div className="grid gap-6">
      <Breadcrumbs items={["Dashboard", "Leads"]} />
      <h1 className="text-3xl font-semibold text-white">Leads</h1>
      <LeadCreateForm />
      {leads.length === 0 ? (
        <Card className="p-5">
          <p className="text-sm text-zinc-400">No leads have been captured yet.</p>
        </Card>
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-white/10 text-xs uppercase text-zinc-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Lead</th>
                  <th className="px-4 py-3 font-medium">Source</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Created</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr className="border-t border-white/10" key={lead.id}>
                    <td className="px-4 py-3">
                      <p className="font-medium text-white">{lead.name ?? lead.email}</p>
                      <p className="text-zinc-500">{lead.email}</p>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">{lead.source ?? "-"}</td>
                    <td className="px-4 py-3">
                      <form action={updateLeadStatusAction}>
                        <input name="leadId" type="hidden" value={lead.id} />
                        <select
                          className="h-9 rounded-md border border-white/15 bg-black px-2 text-sm text-white"
                          defaultValue={lead.status}
                          name="status"
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                        <Button className="ml-2 h-9 px-3" type="submit" variant="secondary">
                          Save
                        </Button>
                      </form>
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      {lead.createdAt.toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <form action={deleteLeadAction}>
                        <input name="leadId" type="hidden" value={lead.id} />
                        <Button type="submit" variant="ghost">
                          Delete
                        </Button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
