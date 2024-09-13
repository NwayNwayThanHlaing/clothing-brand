import { PrismaClient } from "@prisma/client";
import { seedAdmins } from "./data-seeding/admin.js";

// create new prisma client instance
const prisma = new PrismaClient();

// main function to seed data into database
async function main() {
  console.log(`Start seeding ...`);
  await seedAdmins();
  console.log(`Seeding finished.`);
}

// execute the main function
main()
  .then(async () => {
    // disconnect from database after seeding
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // log any erros that occur during seeding and disconnect from database
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
