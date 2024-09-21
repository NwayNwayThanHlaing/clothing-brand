import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const orderData = [
  {
    user_id: 1,
    date: new Date(),
    amount: 100,
    status: "pending",
  },
  {
    user_id: 2,
    date: new Date(),
    amount: 200,
    status: "pending",
  },
  {
    user_id: 3,
    date: new Date(),
    amount: 300,
    status: "pending",
  },
  {
    user_id: 4,
    date: new Date(),
    amount: 400,
    status: "pending",
  },
  {
    user_id: 5,
    date: new Date(),
    amount: 500,
    status: "pending",
  },
];

export const seedOrders = async () => {
  for (const o of orderData) {
    const order = await prisma.order.create({
      data: o,
    });
    console.log(`Created order with id: ${order.id}`);
  }
};
