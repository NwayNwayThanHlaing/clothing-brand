import express from "express";
import prisma from "./lib/prisma.js";
import cors from "cors";

const app = express();
const port = 3333;
app.use(cors());
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

app.get("/sizes", async (req, res) => {
  const sizes = await prisma.size.findMany();
  res.json({ sizes });
});

app.get("/collections", async (req, res) => {
  const collections = await prisma.collection.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  });
  res.json({ collections });
});

app.get("/orders", async (req, res) => {
  const orders = await prisma.order.findMany();
  res.json({ orders });
});

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();

  const collection = req.query.collection;
  const category = req.query.category;

  if (collection && category == null) {
    const products = await prisma.product.findMany({
      where: {
        collectionId: parseInt(collection),
      },
    });
    return res.json({ products });
  } else if (collection && category) {
    const products = await prisma.product.findMany({
      where: {
        collectionId: parseInt(collection),
        categoryId: parseInt(category),
      },
    });
    return res.json({ products });
  }
  res.json({ products });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
