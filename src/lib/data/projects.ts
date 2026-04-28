import { db } from "@/lib/db";

export const getProjectsForUser = async (ownerId: string) => {
  return db.project.findMany({
    where: { ownerId },
    orderBy: { updatedAt: "desc" },
  });
};

export const getProjectForUser = async (ownerId: string, projectId: string) => {
  return db.project.findFirst({
    where: {
      id: projectId,
      ownerId,
    },
  });
};

export const getProjectCountsForUser = async (ownerId: string) => {
  const [total, active, completed] = await Promise.all([
    db.project.count({ where: { ownerId } }),
    db.project.count({ where: { ownerId, status: "ACTIVE" } }),
    db.project.count({ where: { ownerId, status: "COMPLETED" } }),
  ]);

  return { total, active, completed };
};
