import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const productSizeData = [
  {
    productId: 1,
    sizeId: 1,
  },
  {
    productId: 1,
    sizeId: 2,
  },
  {
    productId: 1,
    sizeId: 3,
  },
  {
    productId: 1,
    sizeId: 4,
  },
  {
    productId: 1,
    sizeId: 5,
  },
  {
    productId: 2,
    sizeId: 1,
  },
  {
    productId: 2,
    sizeId: 2,
  },
  {
    productId: 2,
    sizeId: 3,
  },
  {
    productId: 2,
    sizeId: 4,
  },
  {
    productId: 2,
    sizeId: 5,
  },
  {
    productId: 3,
    sizeId: 1,
  },
  {
    productId: 3,
    sizeId: 2,
  },
  {
    productId: 3,
    sizeId: 3,
  },
  {
    productId: 3,
    sizeId: 4,
  },
  {
    productId: 3,
    sizeId: 5,
  },
  {
    productId: 4,
    sizeId: 1,
  },
  {
    productId: 4,
    sizeId: 2,
  },
  {
    productId: 4,
    sizeId: 3,
  },
  {
    productId: 4,
    sizeId: 4,
  },
  {
    productId: 5,
    sizeId: 5,
  },
  {
    productId: 6,
    sizeId: 1,
  },
  {
    productId: 6,
    sizeId: 2,
  },
  {
    productId: 6,
    sizeId: 3,
  },
  {
    productId: 6,
    sizeId: 4,
  },
  {
    productId: 6,
    sizeId: 5,
  },
  {
    productId: 7,
    sizeId: 1,
  },
  {
    productId: 7,
    sizeId: 2,
  },
  {
    productId: 8,
    sizeId: 3,
  },
  {
    productId: 9,
    sizeId: 4,
  },
  {
    productId: 10,
    sizeId: 5,
  },
  {
    productId: 11,
    sizeId: 1,
  },
  {
    productId: 12,
    sizeId: 2,
  },
  {
    productId: 13,
    sizeId: 3,
  },
  {
    productId: 14,
    sizeId: 4,
  },
  {
    productId: 15,
    sizeId: 5,
  },
  {
    productId: 16,
    sizeId: 1,
  },
  {
    productId: 17,
    sizeId: 2,
  },
  {
    productId: 18,
    sizeId: 3,
  },
];

export const seedProductSizes = async () => {
  for (const ps of productSizeData) {
    const productSize = await prisma.productSize.create({
      data: {
        product: {
          connect: {
            id: ps.productId,
          },
        },
        size: {
          connect: {
            id: ps.sizeId,
          },
        },
      },
    });
    console.log(`Created product size with id: ${productSize.id}`);
  }
};
