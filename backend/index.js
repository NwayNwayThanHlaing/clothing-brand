import express, { json } from "express";
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
  const sizes = await prisma.size.findMany({
    include: {
      products: true,
    },
    orderBy: {
      id: "asc",
    },
  });
  res.json({ sizes });
});

app.get("/collections", async (req, res) => {
  const collections = await prisma.collection.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });
  res.json({ collections });
});

// filtered products

// app.get("/filteredProducts", async (req, res) => {
//   const { minimum, maximum, size } = req.query;

//   const query = {
//     where: {},
//     include: {
//       sizes: true,
//     },
//   };

//   if (size) {
//     const sizeArray = Array.isArray(size) ? size.map(Number) : [Number(size)];
//     query.where.sizes = {
//       some: {
//         sizeId: parseInt(size),
//       },
//     };
//   }
//   if (minimum) {
//     query.where.price = {
//       ...query.where.price,
//       gte: Number(minimum),
//     };
//   }
//   if (maximum) {
//     query.where.price = {
//       ...query.where.price,
//       lte: Number(maximum),
//     };
//   }

//   const products = await prisma.product.findMany(query);
//   return res.json({ products });
// });

// products by (collection, category) or searched products

// app.get("/products", async (req, res) => {
//   const products = await prisma.product.findMany();
//   const collection = req.query.collection;
//   const category = req.query.category;
//   const search = req.query.search;

//   if (collection && category == null) {
//     const products = await prisma.product.findMany({
//       where: {
//         collectionId: parseInt(collection),
//       },
//     });
//     return res.json({ products });
//   } else if (collection && category) {
//     const products = await prisma.product.findMany({
//       where: {
//         collectionId: parseInt(collection),
//         categoryId: parseInt(category),
//       },
//     });
//     return res.json({ products });
//   } else if (search) {
//     const products = await prisma.product.findMany({
//       where: {
//         OR: [
//           {
//             name: {
//               contains: search,
//             },
//           },
//           {
//             description: {
//               contains: search,
//             },
//           },
//         ],
//       },
//     });
//     return res.json({ products });
//   }
//   res.json({ products });
// });

app.get("/products", async (req, res) => {
  const { minimum, maximum, size, search, collection, category } = req.query;

  // Initialize the query object
  const query = {
    where: {},
    include: {
      sizes: true, // Include size information
    },
  };

  // Filter by collection and category
  if (collection && category == null) {
    query.where.collectionId = Number(collection);
  } else if (collection && category) {
    query.where.collectionId = Number(collection);
    query.where.categoryId = Number(category);
  }

  // Filter by size
  if (size) {
    const sizeArray = Array.isArray(size) ? size.map(Number) : [Number(size)];
    query.where.sizes = {
      some: {
        sizeId: {
          in: sizeArray,
        },
      },
    };
  }

  // Filter by price
  if (minimum || maximum) {
    query.where.price = {}; // Initialize price filter object
    if (minimum) {
      query.where.price.gte = Number(minimum);
    }
    if (maximum) {
      query.where.price.lte = Number(maximum);
    }
  }

  // Search functionality
  if (search) {
    query.where.OR = [
      {
        name: {
          contains: search,
        },
      },
      {
        description: {
          contains: search,
        },
      },
    ];
  }

  // Fetch products based on the constructed query
  const products = await prisma.product.findMany(query);

  return res.json({ products });
});

app.get("/orders", async (req, res) => {
  const orders = await prisma.order.findMany();
  res.json({ orders });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
