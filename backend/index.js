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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
