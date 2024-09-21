import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// array containing user data to be seeded into database
const adminData = [
  {
    name: "admin1",
    password: "admin1",
    email: "admin1@gmail.com",
    createdAt: new Date(),
  },
  {
    name: "admin2",
    password: "admin2",
    email: "admin2@gmail.com",
    createdAt: new Date(),
  },
];

// function to seed admins into the database
export const seedAdmins = async () => {
  // iterate over adminData array and create admins
  for (const a of adminData) {
    // update user object
    const admin = await prisma.admin.create({
      data: a,
    });
    // log creation of users
    console.log(`Created admin with id: ${admin.id}`);
  }
};
