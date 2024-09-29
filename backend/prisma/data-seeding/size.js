import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const sizeData = [
  { name: "XS" },
  { name: "S" },
  { name: "M" },
  { name: "L" },
  { name: "XL" },
  { name: "XXL" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
];

export const seedSizes = async () => {
  for (const s of sizeData) {
    const size = await prisma.size.create({
      data: s,
    });
    console.log(`Created size with id: ${size.id}`);
  }
};
