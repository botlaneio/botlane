import { redirect } from "next/navigation";

import { auth } from "@/auth";
import type { Role } from "@/types/domain";

export const requireAuth = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return session;
};

export const requireRole = async (role: Role) => {
  const session = await requireAuth();

  if (session.user.role !== role) {
    redirect("/dashboard");
  }

  return session;
};
