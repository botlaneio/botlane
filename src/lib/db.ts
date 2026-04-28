import { PrismaClient } from "@prisma/client";

import { env } from "@/lib/env";

declare global {
  var __prisma: PrismaClient | undefined;
}

const createPrismaClient = (): PrismaClient =>
  new PrismaClient({
    log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

export const db: PrismaClient = globalThis.__prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") {
  globalThis.__prisma = db;
}
