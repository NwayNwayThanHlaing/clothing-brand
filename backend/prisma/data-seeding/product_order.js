import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const productOrderData = [
  {
    order_id: 1,
    product_id: 1,
    quantity: 1,
    price: 100,
  },
  {
    order_id: 1,
    product_id: 2,
    quantity: 2,
    price: 200,
  },
  {
    order_id: 2,
    product_id: 3,
    quantity: 3,
    price: 300,
  },
  {
    order_id: 2,
    product_id: 4,
    quantity: 2,
    price: 200,
  },
  {
    order_id: 3,
    product_id: 5,
    quantity: 3,
    price: 300,
  },
];

export const seedProductOrders = async () => {
  for (const po of productOrderData) {
    const productOrder = await prisma.productOrder.create({
      data: {
        order: {
          connect: {
            id: po.order_id,
          },
        },
        product: {
          connect: {
            id: po.product_id,
          },
        },
        quantity: po.quantity,
        price: po.price,
      },
    });
    console.log(`Created product order with id: ${productOrder.id}`);
  }
};
