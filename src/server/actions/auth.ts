"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

import { signIn, signOut } from "@/auth";
import { hashPassword } from "@/lib/auth/password";
import { db } from "@/lib/db";
import { signInSchema, signUpSchema } from "@/lib/validations/auth";

export type AuthActionState = {
  error?: string;
};

export const signInAction = async (
  _state: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> => {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: "Enter a valid email and password." };
  }

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Invalid email or password." };
    }

    throw error;
  }

  return {};
};

export const signInWithGoogleAction = async (): Promise<void> => {
  await signIn("google", { redirectTo: "/dashboard" });
};

export const signUpAction = async (
  _state: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> => {
  const parsed = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { error: "Enter your name, email, and a password with at least 8 characters." };
  }

  const existingUser = await db.user.findUnique({
    where: { email: parsed.data.email },
    select: { id: true },
  });

  if (existingUser) {
    return { error: "An account already exists for that email." };
  }

  const passwordHash = await hashPassword(parsed.data.password);

  await db.user.create({
    data: {
      email: parsed.data.email,
      name: parsed.data.name,
      passwordHash,
    },
  });

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      redirect("/sign-in");
    }

    throw error;
  }

  return {};
};

export const signOutAction = async (): Promise<void> => {
  await signOut({ redirectTo: "/sign-in" });
};
