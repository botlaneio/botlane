import { LeadStatus } from "@prisma/client";
import { z } from "zod";

const optionalText = z
  .string()
  .trim()
  .transform((value) => (value.length > 0 ? value : undefined))
  .optional();

export const createLeadSchema = z.object({
  email: z.string().trim().email().toLowerCase(),
  name: optionalText,
  phone: optionalText,
  source: optionalText,
  notes: optionalText,
});

export const updateLeadStatusSchema = z.object({
  leadId: z.string().min(1),
  status: z.nativeEnum(LeadStatus),
});

export const deleteLeadSchema = z.object({
  leadId: z.string().min(1),
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;
