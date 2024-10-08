import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const categoryData = [
  { name: "Tops" },
  { name: "Outerwears" },
  { name: "Trousers" },
  { name: "Denims" },
  { name: "Shoes" },
  { name: "Belts" },
  { name: "Dresses" },
  { name: "Skirts" },
  { name: "Bags" },
  { name: "Wallets" },
  { name: "Jewelries" },
  { name: "Sunglasses" },
  { name: "Watches" },
  { name: "Hats" },
  { name: "Scarves" },
  { name: "Gloves" },
];

export const seedCategories = async () => {
  for (const c of categoryData) {
    const category = await prisma.category.create({
      data: c,
    });
    console.log(`Created category with id: ${category.id}`);
  }
};
