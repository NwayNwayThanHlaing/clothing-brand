import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const productCategoryData = [
  {
    product_id: 1,
    collection_id: 1,
    category_id: 1,
  },
  {
    product_id: 2,
    collection_id: 2,
    category_id: 2,
  },
  {
    product_id: 3,
    collection_id: 3,
    category_id: 3,
  },
  {
    product_id: 4,
    collection_id: 4,
    category_id: 4,
  },
  {
    product_id: 5,
    collection_id: 3,
    category_id: 5,
  },
];

export const seedProductCategories = async () => {
  for (const pc of productCategoryData) {
    const productCategory = await prisma.productCategory.create({
      data: {
        product: {
          connect: {
            id: pc.product_id,
          },
        },
        collection: {
          connect: {
            id: pc.collection_id,
          },
        },
        category: {
          connect: {
            id: pc.category_id,
          },
        },
      },
    });
    console.log(`Created product category with id: ${productCategory.id}`);
  }
};
