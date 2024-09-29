import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const orderProductData = [
  {
    orderId: 1,
    productId: 1,
    quantity: 1,
    size: "S",
  },
  {
    orderId: 1,
    productId: 2,
    quantity: 2,
    size: "M",
  },
  {
    orderId: 2,
    productId: 3,
    quantity: 3,
    size: "L",
  },
  {
    orderId: 2,
    productId: 4,
    quantity: 2,
    size: "XL",
  },
  {
    orderId: 3,
    productId: 5,
    quantity: 3,
    size: "S",
  },
];

export const seedOrderProducts = async () => {
  for (const op of orderProductData) {
    const orderProduct = await prisma.orderProduct.create({
      data: op,
    });
    console.log(`Created orderProduct with id: ${orderProduct.id}`);
  }
};
