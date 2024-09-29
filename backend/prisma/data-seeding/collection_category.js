import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const collectionCategoryData = [
  {
    collectionId: 1,
    categoryId: 1,
  },
  {
    collectionId: 1,
    categoryId: 2,
  },
  {
    collectionId: 1,
    categoryId: 3,
  },
  {
    collectionId: 1,
    categoryId: 4,
  },
  {
    collectionId: 1,
    categoryId: 5,
  },
  {
    collectionId: 1,
    categoryId: 6,
  },
  {
    collectionId: 2,
    categoryId: 1,
  },
  {
    collectionId: 2,
    categoryId: 2,
  },
  {
    collectionId: 2,
    categoryId: 3,
  },
  {
    collectionId: 2,
    categoryId: 4,
  },
  {
    collectionId: 2,
    categoryId: 6,
  },
  {
    collectionId: 2,
    categoryId: 7,
  },
  {
    collectionId: 2,
    categoryId: 8,
  },
  {
    collectionId: 2,
    categoryId: 9,
  },
  {
    collectionId: 3,
    categoryId: 1,
  },
  {
    collectionId: 3,
    categoryId: 2,
  },
  {
    collectionId: 3,
    categoryId: 3,
  },
  {
    collectionId: 3,
    categoryId: 5,
  },
  {
    collectionId: 3,
    categoryId: 7,
  },
  {
    collectionId: 3,
    categoryId: 8,
  },
];

export const seedCollectionCategories = async () => {
  for (const cc of collectionCategoryData) {
    const collectionCategory = await prisma.collectionCategory.create({
      data: {
        collection: {
          connect: {
            id: cc.collectionId,
          },
        },
        category: {
          connect: {
            id: cc.categoryId,
          },
        },
      },
    });
    console.log(
      `Created collectionCategory with id: ${collectionCategory.id}, collectionId: ${collectionCategory.collectionId}, categoryId: ${collectionCategory.categoryId}`
    );
  }
};
