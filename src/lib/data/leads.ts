import type { LeadStatus } from "@prisma/client";

import { db } from "@/lib/db";

export const getLeadsForUser = async (ownerId: string) => {
  return db.lead.findMany({
    where: { ownerId },
    orderBy: { createdAt: "desc" },
  });
};

export const getLeadCountsForUser = async (ownerId: string) => {
  const [total, newCount, qualified] = await Promise.all([
    db.lead.count({ where: { ownerId } }),
    db.lead.count({ where: { ownerId, status: "NEW" } }),
    db.lead.count({ where: { ownerId, status: "QUALIFIED" } }),
  ]);

  return { total, new: newCount, qualified };
};

export const createLeadForUser = async (
  ownerId: string,
  input: {
    email: string;
    name?: string;
    phone?: string;
    source?: string;
    notes?: string;
  },
) => {
  return db.lead.create({
    data: {
      ownerId,
      email: input.email,
      name: input.name,
      phone: input.phone,
      source: input.source,
      notes: input.notes,
    },
  });
};

export const updateLeadStatusForUser = async (
  ownerId: string,
  leadId: string,
  status: LeadStatus,
) => {
  return db.lead.update({
    where: {
      id: leadId,
      ownerId,
    },
    data: { status },
  });
};

export const deleteLeadForUser = async (ownerId: string, leadId: string) => {
  return db.lead.delete({
    where: {
      id: leadId,
      ownerId,
    },
  });
};
