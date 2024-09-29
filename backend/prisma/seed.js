import { PrismaClient } from "@prisma/client";
import { seedAdmins } from "./data-seeding/admin.js";
import { seedUsers } from "./data-seeding/user.js";
import { seedSizes } from "./data-seeding/size.js";
import { seedCategories } from "./data-seeding/category.js";
import { seedCollections } from "./data-seeding/collection.js";
import { seedOrders } from "./data-seeding/order.js";
import { seedProductSizes } from "./data-seeding/product_size.js";
import { seedProducts } from "./data-seeding/product.js";
import { seedOrderProducts } from "./data-seeding/order_product.js";
import { seedCollectionCategories } from "./data-seeding/collection_category.js";

// create new prisma client instance
const prisma = new PrismaClient();

// main function to seed data into database
async function main() {
  console.log(`Start seeding ...`);
  await seedAdmins();
  await seedUsers();
  await seedCollections();
  await seedCategories();
  await seedSizes();
  await seedOrders();
  await seedProducts();
  await seedProductSizes();
  await seedOrderProducts();
  await seedCollectionCategories();

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
