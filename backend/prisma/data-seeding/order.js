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
    user_id: 1,
    date: new Date(),
    amount: 300,
    status: "pending",
  },
  {
    user_id: 2,
    date: new Date(),
    amount: 400,
    status: "pending",
  },
  {
    user_id: 2,
    date: new Date(),
    amount: 500,
    status: "pending",
  },
];

export const seedOrders = async () => {
  for (const o of orderData) {
    const order = await prisma.order.create({
      data: {
        user: {
          connect: {
            id: o.user_id,
          },
        },
        date: o.date,
        amount: o.amount,
        status: o.status,
      },
    });
    console.log(`Created order with id: ${order.id}`);
  }
};
