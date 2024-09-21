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

app.get("/collections", async (req, res) => {
  const collections = await prisma.collection.findMany();
  res.json({ collections });
});

app.get("/orders", async (req, res) => {
  const orders = await prisma.order.findMany();
  res.json({ orders });
});

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json({ products });
});

app.get("/sizes", async (req, res) => {
  const sizes = await prisma.size.findMany();
  res.json({ sizes });
});

app.get("/product_sizes", async (req, res) => {
  const productSizes = await prisma.product_size.findMany();
  res.json({ productSizes });
});

app.get("/product_categories", async (req, res) => {
  const productCategories = await prisma.product_category.findMany();
  res.json({ productCategories });
});

app.get("/product_orders", async (req, res) => {
  const productOrders = await prisma.product_order.findMany();
  res.json({ productOrders });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
