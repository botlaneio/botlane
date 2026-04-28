import { db } from "@/lib/db";
import { toUserDTO } from "@/types/domain";

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: { id },
  });

  return user ? toUserDTO(user) : null;
};

export const getUsersForAdmin = async () => {
  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return users.map(toUserDTO);
};
