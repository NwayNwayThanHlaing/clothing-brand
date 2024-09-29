import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const orderData = [
  {
    userId: 1,
    date: new Date(),
    status: "pending",
  },
  {
    userId: 2,
    date: new Date(),
    status: "pending",
  },
  {
    userId: 1,
    date: new Date(),
    status: "pending",
  },
  {
    userId: 2,
    date: new Date(),
    status: "pending",
  },
  {
    userId: 2,
    date: new Date(),
    status: "pending",
  },
];

export const seedOrders = async () => {
  for (const o of orderData) {
    const order = await prisma.order.create({
      data: {
        user: {
          connect: {
            id: o.userId,
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
