import { NextResponse } from "next/server";

import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { requireAuth } from "@/lib/auth/session";
import { db } from "@/lib/db";
import { changePasswordSchema } from "@/lib/validations/profile";

export async function POST(request: Request) {
  const session = await requireAuth();
  const body: unknown = await request.json();
  const parsed = changePasswordSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid password payload" }, { status: 400 });
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { passwordHash: true },
  });

  if (!user?.passwordHash) {
    return NextResponse.json(
      { error: "Password changes are unavailable for this account" },
      { status: 400 },
    );
  }

  const isValidPassword = await verifyPassword(
    parsed.data.currentPassword,
    user.passwordHash,
  );

  if (!isValidPassword) {
    return NextResponse.json(
      { error: "Current password is incorrect" },
      { status: 400 },
    );
  }

  await db.user.update({
    where: { id: session.user.id },
    data: { passwordHash: await hashPassword(parsed.data.newPassword) },
  });

  return NextResponse.json({ success: true });
}
