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
  const productOrders = await prisma.productOrder.createMany({
    data: productOrderData,
  });
  console.log(`Created product orders`);
};
