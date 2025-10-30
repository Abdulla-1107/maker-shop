import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  difficulty: number;
  description: string;
  included: string[];
  needed: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Beginner Doll Kit",
    price: 24.99,
    image: product1,
    difficulty: 2,
    description: "Perfect for your first handmade doll. Includes everything you need to create a beautiful 12-inch doll.",
    included: [
      "Premium cotton fabric (beige, pink)",
      "Felt sheets for details",
      "Safety eyes and buttons",
      "Pre-cut patterns",
      "Stuffing material",
      "Step-by-step guidebook"
    ],
    needed: [
      "Sewing needle and thread",
      "Fabric scissors",
      "Fabric glue or glue gun"
    ]
  },
  {
    id: 2,
    name: "Miniature Wardrobe Kit",
    price: 19.99,
    image: product2,
    difficulty: 3,
    description: "Create adorable outfits for your dolls. Includes patterns for 5 different clothing pieces.",
    included: [
      "Assorted fabric swatches",
      "Tiny buttons and snaps",
      "Ribbon and lace trim",
      "5 clothing patterns",
      "Velcro fasteners",
      "Embroidery thread"
    ],
    needed: [
      "Fine sewing needle",
      "Fabric scissors",
      "Iron for pressing seams"
    ]
  },
  {
    id: 3,
    name: "Advanced Doll Set",
    price: 39.99,
    image: product3,
    difficulty: 4,
    description: "For experienced crafters. Premium materials and intricate patterns for a stunning 16-inch doll.",
    included: [
      "Premium linen and cotton fabric",
      "High-quality wool felt",
      "Glass eyes and detailed features",
      "Complex pattern templates",
      "Premium stuffing (wool blend)",
      "Advanced technique guidebook",
      "Embroidery materials"
    ],
    needed: [
      "Sewing machine (recommended)",
      "Hand-sewing needles",
      "Fabric scissors and pins",
      "Glue gun for details"
    ]
  },
  {
    id: 4,
    name: "Seasonal Accessories Pack",
    price: 14.99,
    image: product1,
    difficulty: 2,
    description: "Seasonal accessories including hats, scarves, and bags for your handmade dolls.",
    included: [
      "Miniature fabric pieces",
      "Tiny beads and buttons",
      "Pattern templates for accessories",
      "Elastic and ribbon",
      "Decorative elements"
    ],
    needed: [
      "Basic sewing supplies",
      "Fabric glue",
      "Small scissors"
    ]
  },
  {
    id: 5,
    name: "Family Doll Collection",
    price: 54.99,
    image: product2,
    difficulty: 3,
    description: "Create an entire doll family! Includes materials for 4 dolls in various sizes.",
    included: [
      "Multiple fabric colors and textures",
      "Assorted safety eyes (various sizes)",
      "4 sets of patterns (different sizes)",
      "Generous stuffing supply",
      "Family-themed guidebook",
      "Extra embellishments"
    ],
    needed: [
      "Sewing supplies",
      "Fabric scissors",
      "Glue gun",
      "Patience and creativity!"
    ]
  },
  {
    id: 6,
    name: "Fantasy Character Kit",
    price: 29.99,
    image: product3,
    difficulty: 4,
    description: "Bring magical characters to life with specialty fabrics and embellishments.",
    included: [
      "Specialty fabrics (shimmer, velvet)",
      "Metallic threads",
      "Fantasy-themed patterns",
      "Decorative gems and sequins",
      "Colored synthetic hair",
      "Magic-themed accessories",
      "Creative guidebook"
    ],
    needed: [
      "Advanced sewing skills",
      "Hot glue gun",
      "Fine detail scissors",
      "Creative imagination"
    ]
  },
];
