import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const adminEmail = "admin@botlane.io";

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "Botlane Admin",
      role: Role.ADMIN,
    },
  });

  console.log(`Seeded admin user: ${adminEmail}`);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
