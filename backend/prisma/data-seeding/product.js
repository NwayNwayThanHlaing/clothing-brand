import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const productData = [
  {
    name: "Cotton Crewneck T-Shirt",
    description:
      "Classic cotton crewneck T-shirt, soft and breathable for everyday comfort.",
    price: 19.99,
    collectionId: 1,
    categoryId: 1,
    image: "/men-top1.jpg",
  },
  {
    name: "Slim Fit Polo Shirt",
    description:
      "Slim-fit polo shirt with a ribbed collar and short sleeves, ideal for casual outings.",
    price: 29.99,
    collectionId: 1,
    categoryId: 1,
    image: "/men-top2.jpg",
  },
  {
    name: "V-Neck Sweater",
    description:
      "Classic V-neck sweater made from a soft cotton blend, great for layering over shirts.",
    price: 49.99,
    collectionId: 1,
    categoryId: 2,
    image: "/men-top3.avif",
  },
  {
    name: "Flannel Shirt",
    description:
      "Cozy flannel shirt with a relaxed fit, great for cooler weather.",
    price: 39.99,
    collectionId: 1,
    categoryId: 2,
    image: "/men-top4.jpg",
  },
  {
    name: "Classic Bomber Jacket",
    description:
      "Stylish bomber jacket with ribbed cuffs and hem, perfect for casual outfits.",
    price: 79.99,
    collectionId: 1,
    categoryId: 2,
    image: "/men-outerwear1.jpg",
  },
  {
    name: "Quilted Puffer Jacket",
    description:
      "Warm quilted puffer jacket with a high collar and zip closure, great for cold weather.",
    price: 99.99,
    collectionId: 1,
    categoryId: 2,
    image: "/men-outerwear2.jpg",
  },
  {
    name: "Wool Blend Overcoat",
    description:
      "Elegant wool blend overcoat with a button front and notched lapels.",
    price: 149.99,
    collectionId: 1,
    categoryId: 2,
    image: "/men-outerwear3.jpg",
  },
  {
    name: "Waterproof Windbreaker",
    description:
      "Lightweight waterproof windbreaker with a hood, perfect for rainy days.",
    price: 59.99,
    collectionId: 1,
    categoryId: 2,
    image: "/men-outerwear4.jpg",
  },
  {
    name: "Cargo Pants",
    description:
      "Durable cargo pants with multiple pockets, great for outdoor activities.",
    price: 44.99,
    collectionId: 1,
    categoryId: 3,
    image: "/men-trouser1.jpg",
  },
  {
    name: "Linen Blend Trousers",
    description:
      "Lightweight linen blend trousers, perfect for warm weather and casual outings.",
    price: 59.99,
    collectionId: 1,
    categoryId: 3,
    image: "/men-trouser2.webp",
  },
  {
    name: "Stretch Slim Fit Pants",
    description:
      "Slim fit pants with stretch for all-day comfort and a sleek silhouette.",
    price: 49.99,
    collectionId: 1,
    categoryId: 3,
    image: "/men-trouser3.avif",
  },
  {
    name: "Relaxed Fit Lounge Pants",
    description:
      "Relaxed fit lounge pants with an elastic waistband, great for weekend wear.",
    price: 34.99,
    collectionId: 1,
    categoryId: 3,
    image: "/men-trouser4.avif",
  },
  {
    name: "Straight Leg Jeans",
    description:
      "Classic straight-leg jeans with a mid-rise fit, perfect for casual wear.",
    price: 59.99,
    collectionId: 1,
    categoryId: 4,
    image: "/men-denim1.avif",
  },
  {
    name: "Slim Fit Jeans",
    description: "Slim fit jeans with a modern, streamlined silhouette.",
    price: 64.99,
    collectionId: 1,
    categoryId: 4,
    image: "/men-denim2.avif",
  },

  {
    name: "Tapered Fit Jeans",
    description: "Tapered fit jeans with a slight stretch for added comfort.",
    price: 54.99,
    collectionId: 1,
    categoryId: 4,
    image: "/men-denim3.jpeg",
  },
  {
    name: "Bootcut Jeans",
    description:
      "Bootcut jeans with a classic fit, great for pairing with boots.",
    price: 49.99,
    collectionId: 1,
    categoryId: 4,
    image: "/men-denim4.avif",
  },
  {
    name: "Leather Oxford Shoes",
    description:
      "Elegant leather Oxford shoes with a polished finish, ideal for formal events.",
    price: 119.99,
    collectionId: 1,
    categoryId: 5,
    image: "/men-shoes1.avif",
  },
  {
    name: "Casual Canvas Sneakers",
    description:
      "Lightweight canvas sneakers with rubber soles, perfect for casual wear.",
    price: 49.99,
    collectionId: 1,
    categoryId: 5,
    image: "/men-shoes2.avif",
  },
  {
    name: "Leather Loafers",
    description:
      "Comfortable leather loafers with a slip-on design, great for smart-casual outfits.",
    price: 89.99,
    collectionId: 1,
    categoryId: 5,
    image: "/men-shoes3.jpg",
  },
  {
    name: "Classic Leather Belt",
    description:
      "Genuine leather belt with a silver buckle, suitable for both casual and formal outfits.",
    price: 34.99,
    collectionId: 1,
    categoryId: 6,
    image: "/men-belt1.avif",
  },
  {
    name: "Reversible Leather Belt",
    description:
      "Reversible leather belt with both black and brown sides for versatility.",
    price: 39.99,
    collectionId: 1,
    categoryId: 6,
    image: "/men-belt2.jpg",
  },
  {
    name: "V-Neck Blouse",
    description:
      "Elegant V-neck blouse with a relaxed fit, perfect for both casual and workwear.",
    price: 29.99,
    collectionId: 2,
    categoryId: 1,
    image: "",
  },
  {
    name: "Floral Print Top",
    description:
      "Flowy floral print top with flutter sleeves, ideal for a feminine and breezy look.",
    price: 24.99,
    collectionId: 2,
    categoryId: 1,
    image: "",
  },
  {
    name: "Off-Shoulder Top",
    description:
      "Trendy off-shoulder top with elasticated sleeves for a chic, casual look.",
    price: 27.99,
    collectionId: 2,
    categoryId: 1,
    image: "",
  },
  {
    name: "Button-Front Shirt",
    description:
      "Classic button-front shirt with a tailored fit, ideal for a polished look.",
    price: 31.99,
    collectionId: 2,
    categoryId: 1,
    image: "",
  },
  {
    name: "Striped Long Sleeve Top",
    description:
      "Casual striped long-sleeve top with a relaxed fit, perfect for everyday wear.",
    price: 21.99,
    collectionId: 2,
    categoryId: 1,
    image: "",
  },
  {
    name: "Denim Jacket",
    description:
      "Classic denim jacket with a cropped fit and buttoned pockets, ideal for layering.",
    price: 59.99,
    collectionId: 2,
    categoryId: 4,
    image: "",
  },

  {
    name: "Trench Coat",
    description:
      "Timeless trench coat with a belted waist and water-resistant fabric, great for rainy days.",
    price: 129.99,
    collectionId: 2,
    categoryId: 2,
    image: "",
  },
  {
    name: "Puffer Vest",
    description:
      "Lightweight puffer vest with a quilted design, perfect for layering in cooler weather.",
    price: 69.99,
    collectionId: 2,
    categoryId: 2,
    image: "",
  },
  {
    name: "Floral Maxi Dress",
    description:
      "Flowy floral maxi dress with a wrap design, perfect for summer outings.",
    price: 49.99,
    collectionId: 2,
    categoryId: 7,
    image: "",
  },
  {
    name: "Bodycon Midi Dress",
    description:
      "Sleek bodycon midi dress with a figure-hugging fit, great for evening events.",
    price: 39.99,
    collectionId: 2,
    categoryId: 7,
    image: "",
  },

  {
    name: "Knit Sweater Dress",
    description:
      "Cozy knit sweater dress with a turtleneck, perfect for fall and winter.",
    price: 59.99,
    collectionId: 2,
    categoryId: 7,
    image: "",
  },
  {
    name: "High-Waist Wide Leg Trousers",
    description:
      "Elegant high-waisted wide-leg trousers with a flowing silhouette for a chic look.",
    price: 59.99,
    collectionId: 2,
    categoryId: 3,
    image: "",
  },

  {
    name: "High-Rise Tapered Pants",
    description:
      "Tapered high-rise pants with a sleek, flattering fit for any occasion.",
    price: 47.99,
    collectionId: 2,
    categoryId: 3,
    image: "",
  },
  {
    name: "Linen Blend Trousers",
    description:
      "Lightweight linen blend trousers with a drawstring waist, perfect for warm weather.",
    price: 39.99,
    collectionId: 2,
    categoryId: 3,
    image: "",
  },
  {
    name: "Leather Look Leggings",
    description:
      "Faux leather leggings with a high-waist fit, adding edge to any outfit.",
    price: 49.99,
    collectionId: 2,
    categoryId: 3,
    image: "",
  },
  {
    name: "Relaxed Fit Joggers",
    description:
      "Casual joggers with a relaxed fit and elastic waistband for laid-back days.",
    price: 34.99,
    collectionId: 2,
    categoryId: 3,
    image: "",
  },
  {
    name: "High-Waist Skinny Jeans",
    description:
      "High-waisted skinny jeans with stretch for a flattering, figure-hugging fit.",
    price: 69.99,
    collectionId: 2,
    categoryId: 4,
    image: "",
  },

  {
    name: "Flared Jeans",
    description:
      "Retro-inspired flared jeans with a high waist and classic denim wash.",
    price: 74.99,
    collectionId: 2,
    categoryId: 4,
    image: "",
  },
  {
    name: "Mom Jeans",
    description:
      "Comfortable mom jeans with a slightly tapered leg and high-rise fit.",
    price: 49.99,
    collectionId: 2,
    categoryId: 4,
    image: "",
  },
  {
    name: "Cropped Skinny Jeans",
    description:
      "Cropped skinny jeans with a mid-rise fit, great for pairing with heels or flats.",
    price: 64.99,
    collectionId: 2,
    categoryId: 4,
    image: "",
  },
  {
    name: "Pleated Midi Skirt",
    description:
      "Elegant pleated midi skirt with a flowy design, perfect for both casual and formal wear.",
    price: 49.99,
    collectionId: 2,
    categoryId: 8,
    image: "",
  },
  {
    name: "Denim A-Line Skirt",
    description:
      "Classic denim A-line skirt with a button-front detail for a vintage-inspired look.",
    price: 39.99,
    collectionId: 2,
    categoryId: 8,
    image: "",
  },
  {
    name: "Pointed Toe Pumps",
    description:
      "Elegant pointed-toe pumps with a sleek stiletto heel, perfect for formal events.",
    price: 89.99,
    collectionId: 2,
    categoryId: 5,
    image: "",
  },
  {
    name: "Leather Ankle Boots",
    description:
      "Stylish leather ankle boots with a side zipper and block heel.",
    price: 119.99,
    collectionId: 2,
    categoryId: 5,
    image: "",
  },
  {
    name: "Ballet Flats",
    description:
      "Classic ballet flats with a round toe and cushioned insole for everyday wear.",
    price: 49.99,
    collectionId: 2,
    categoryId: 5,
    image: "",
  },
  {
    name: "Sneakers",
    description:
      "Casual white sneakers with a minimalist design, perfect for everyday comfort.",
    price: 59.99,
    collectionId: 2,
    categoryId: 5,
    image: "",
  },
  {
    name: "Crossbody Bag",
    description:
      "Compact crossbody bag with a chic design, perfect for carrying essentials.",
    price: 79.99,
    collectionId: 2,
    categoryId: 9,
    image: "",
  },
  {
    name: "Bucket Bag",
    description:
      "Trendy bucket bag with a drawstring closure, great for casual outings.",
    price: 89.99,
    collectionId: 2,
    categoryId: 9,
    image: "",
  },
  {
    name: "Clutch Bag",
    description:
      "Sleek clutch bag with a detachable chain strap, perfect for evening events.",
    price: 59.99,
    collectionId: 2,
    categoryId: 9,
    image: "",
  },

  {
    name: "Shoulder Bag",
    description:
      "Classic shoulder bag with a minimalist design and gold-tone hardware.",
    price: 119.99,
    collectionId: 2,
    categoryId: 9,
    image: "",
  },
  {
    name: "Quilted Handbag",
    description:
      "Elegant quilted handbag with a chain strap, perfect for formal or casual wear.",
    price: 129.99,
    collectionId: 2,
    categoryId: 9,
    image: "",
  },

  {
    name: "Mini Crossbody Bag",
    description:
      "Cute mini crossbody bag with a structured design, ideal for a night out.",
    price: 69.99,
    collectionId: 2,
    categoryId: 9,
    image: "",
  },
  {
    name: "Wide Leather Belt",
    description:
      "Wide leather belt with a large buckle, perfect for cinching dresses or oversized tops.",
    price: 34.99,
    collectionId: 2,
    categoryId: 6,
    image: "",
  },
  {
    name: "Reversible Leather Belt",
    description:
      "Classic reversible leather belt with two color options for added versatility.",
    price: 39.99,
    collectionId: 2,
    categoryId: 6,
    image: "",
  },
  {
    name: "Graphic Print T-Shirt",
    description:
      "Soft cotton t-shirt with a fun graphic print, perfect for everyday wear.",
    price: 12.99,
    collectionId: 3,
    categoryId: 1,
    image: "",
  },
  {
    name: "Striped Long-Sleeve Tee",
    description: "Long-sleeve striped tee, ideal for layering on cooler days.",
    price: 14.99,
    collectionId: 3,
    categoryId: 1,
    image: "",
  },
  {
    name: "Polo Shirt",
    description:
      "Classic polo shirt with a collared design, great for casual or dressy occasions.",
    price: 19.99,
    collectionId: 3,
    categoryId: 1,
    image: "",
  },
  {
    name: "Denim Jacket",
    description:
      "Classic denim jacket with button-front closure, perfect for layering.",
    price: 29.99,
    collectionId: 3,
    categoryId: 2,
    image: "",
  },
  {
    name: "Puffer Vest",
    description:
      "Lightweight puffer vest with a zip-up design, great for transitional weather.",
    price: 34.99,
    collectionId: 3,
    categoryId: 2,
    image: "",
  },
  {
    name: "Fleece Zip-Up Hoodie",
    description:
      "Warm fleece hoodie with a full-zip closure, perfect for cold days.",
    price: 22.99,
    collectionId: 3,
    categoryId: 2,
    image: "",
  },

  {
    name: "Bomber Jacket",
    description:
      "Stylish bomber jacket with ribbed cuffs and collar for a cool, casual look.",
    price: 27.99,
    collectionId: 3,
    categoryId: 2,
    image: "",
  },
  {
    name: "Distressed Denim Shorts",
    description:
      "Casual distressed denim shorts, perfect for warm-weather play.",
    price: 14.99,
    collectionId: 3,
    categoryId: 3,
    image: "",
  },
  {
    name: "Bootcut Jeans",
    description:
      "Classic bootcut jeans with a durable construction, ideal for everyday wear.",
    price: 24.99,
    collectionId: 3,
    categoryId: 3,
    image: "",
  },
  {
    name: "Cargo Pants",
    description:
      "Durable cargo pants with multiple pockets, great for outdoor adventures.",
    price: 24.99,
    collectionId: 3,
    categoryId: 3,
    image: "",
  },

  {
    name: "Jogger Pants",
    description:
      "Comfortable jogger pants with an elastic waistband and cuffs.",
    price: 17.99,
    collectionId: 3,
    categoryId: 3,
    image: "",
  },
  {
    name: "Light-Up Sneakers",
    description:
      "Fun sneakers with light-up soles that kids will love, perfect for playtime.",
    price: 29.99,
    collectionId: 3,
    categoryId: 5,
    image: "",
  },

  {
    name: "Rain Boots",
    description:
      "Durable rain boots with a fun design, perfect for splashing in puddles.",
    price: 24.99,
    collectionId: 3,
    categoryId: 5,
    image: "",
  },
  {
    name: "Denim Skirt",
    description:
      "Classic denim skirt with a frayed hem and comfortable waistband.",
    price: 14.99,
    collectionId: 3,
    categoryId: 8,
    image: "",
  },
  {
    name: "Floral Print Skirt",
    description:
      "Floral print skirt with a soft, flowy design, ideal for summer days.",
    price: 19.99,
    collectionId: 3,
    categoryId: 8,
    image: "",
  },
  {
    name: "Ruffle Sleeve Dress",
    description:
      "Charming ruffle sleeve dress with a flowy silhouette and soft fabric.",
    price: 24.99,
    collectionId: 3,
    categoryId: 7,
    image: "",
  },
  {
    name: "Denim Overall Dress",
    description:
      "Trendy denim overall dress with adjustable straps and front pocket.",
    price: 27.99,
    collectionId: 3,
    categoryId: 7,
    image: "",
  },
  {
    name: "Polka Dot Party Dress",
    description:
      "Fun polka dot party dress with a full skirt, ideal for special occasions.",
    price: 29.99,
    collectionId: 3,
    categoryId: 7,
    image: "",
  },
];

export const seedProducts = async () => {
  for (const p of productData) {
    const product = await prisma.product.create({
      data: p,
    });
    console.log(`Created product with id: ${product.id}`);
  }
};
