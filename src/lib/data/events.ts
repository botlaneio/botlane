import { db } from "@/lib/db";

export const getEventsForUser = async (userId: string) => {
  return db.event.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 25,
  });
};

export const getEventCountsForUser = async (userId: string) => {
  const total = await db.event.count({
    where: { userId },
  });

  return { total };
};
