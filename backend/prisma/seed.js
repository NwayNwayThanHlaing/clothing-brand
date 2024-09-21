import { PrismaClient } from "@prisma/client";
import { seedAdmins } from "./data-seeding/admin.js";
import { seedUsers } from "./data-seeding/user.js";
import { seedCategories, seedCollection } from "./data-seeding/collection.js";
import { seedSubCategories } from "./data-seeding/category.js";
import { seedColors } from "./data-seeding/color.js";
import { seedSizes } from "./data-seeding/size.js";

// create new prisma client instance
const prisma = new PrismaClient();

// main function to seed data into database
async function main() {
  console.log(`Start seeding ...`);
  await seedAdmins();
  await seedUsers();
  await seedCollection();
  await seedCategories();
  await seedSizes();

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
