"use server";

import { revalidatePath } from "next/cache";

import { requireAuth } from "@/lib/auth/session";
import {
  createLeadForUser,
  deleteLeadForUser,
  updateLeadStatusForUser,
} from "@/lib/data/leads";
import {
  createLeadSchema,
  deleteLeadSchema,
  updateLeadStatusSchema,
} from "@/lib/validations/leads";

export type LeadActionState = {
  error?: string;
  success?: string;
};

export const createLeadAction = async (
  _state: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> => {
  const session = await requireAuth();
  const parsed = createLeadSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    phone: formData.get("phone"),
    source: formData.get("source"),
    notes: formData.get("notes"),
  });

  if (!parsed.success) {
    return { error: "Enter a valid lead email before saving." };
  }

  await createLeadForUser(session.user.id, parsed.data);
  revalidatePath("/leads");
  revalidatePath("/dashboard");

  return { success: "Lead created." };
};

export const updateLeadStatusAction = async (
  formData: FormData,
): Promise<void> => {
  const session = await requireAuth();
  const parsed = updateLeadStatusSchema.safeParse({
    leadId: formData.get("leadId"),
    status: formData.get("status"),
  });

  if (!parsed.success) {
    return;
  }

  await updateLeadStatusForUser(
    session.user.id,
    parsed.data.leadId,
    parsed.data.status,
  );
  revalidatePath("/leads");
  revalidatePath("/dashboard");
};

export const deleteLeadAction = async (formData: FormData): Promise<void> => {
  const session = await requireAuth();
  const parsed = deleteLeadSchema.safeParse({
    leadId: formData.get("leadId"),
  });

  if (!parsed.success) {
    return;
  }

  await deleteLeadForUser(session.user.id, parsed.data.leadId);
  revalidatePath("/leads");
  revalidatePath("/dashboard");
};
