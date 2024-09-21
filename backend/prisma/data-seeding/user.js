import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// array containing user data to be seeded into database
const userData = [
  {
    name: "user1",
    password: "user1",
    email: "user1@gmail.com",
    createdAt: new Date(),
  },
  {
    name: "user2",
    password: "user2",
    email: "user2@gmail.com",
    createdAt: new Date(),
  },
];

// function to seed users into the database
export const seedUsers = async () => {
  // iterate over userData array and create admins
  for (const u of userData) {
    // update user object
    const user = await prisma.user.create({
      data: u,
    });
    // log creation of users
    console.log(`Created user with id: ${user.id}`);
  }
};
