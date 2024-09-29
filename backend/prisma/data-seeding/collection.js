import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const collectionData = [
  {
    name: "Mens",
  },
  {
    name: "Womens",
  },
  {
    name: "Kids",
  },
];

export const seedCollections = async () => {
  for (const c of collectionData) {
    const collection = await prisma.collection.create({
      data: c,
    });
    console.log(`Created collection with id: ${collection.id}`);
  }
};
