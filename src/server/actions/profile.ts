"use server";

import { revalidatePath } from "next/cache";

import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { requireAuth } from "@/lib/auth/session";
import { db } from "@/lib/db";
import {
  changePasswordSchema,
  updateProfileSchema,
} from "@/lib/validations/profile";

export type ProfileActionState = {
  error?: string;
  success?: string;
};

export const updateProfileAction = async (
  _state: ProfileActionState,
  formData: FormData,
): Promise<ProfileActionState> => {
  const session = await requireAuth();
  const parsed = updateProfileSchema.safeParse({
    name: formData.get("name"),
  });

  if (!parsed.success) {
    return { error: "Enter a valid name." };
  }

  await db.user.update({
    where: { id: session.user.id },
    data: { name: parsed.data.name },
  });

  revalidatePath("/settings/profile");
  revalidatePath("/dashboard");

  return { success: "Profile updated." };
};

export const changePasswordAction = async (
  _state: ProfileActionState,
  formData: FormData,
): Promise<ProfileActionState> => {
  const session = await requireAuth();
  const parsed = changePasswordSchema.safeParse({
    currentPassword: formData.get("currentPassword"),
    newPassword: formData.get("newPassword"),
  });

  if (!parsed.success) {
    return { error: "Enter both passwords with at least 8 characters." };
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { passwordHash: true },
  });

  if (!user?.passwordHash) {
    return { error: "Password changes are unavailable for this account." };
  }

  const isValidPassword = await verifyPassword(
    parsed.data.currentPassword,
    user.passwordHash,
  );

  if (!isValidPassword) {
    return { error: "Current password is incorrect." };
  }

  await db.user.update({
    where: { id: session.user.id },
    data: { passwordHash: await hashPassword(parsed.data.newPassword) },
  });

  return { success: "Password updated." };
};
