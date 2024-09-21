import express from "express";
import prisma from "./lib/prisma.js";

const app = express();
const port = 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/admins", async (req, res) => {
  const admins = await prisma.admin.findMany();
  res.json({ admins });
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

app.get("/categories", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json({ categories });
});

app.get("/sub_categories", async (req, res) => {
  const subCategories = await prisma.subCategory.findMany();
  res.json({ subCategories });
});

app.get();
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
