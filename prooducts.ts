export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  materials: string[];
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Linen Shirt",
    category: "Tops",
    price: 89,
    image: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Breathable organic linen shirt with natural dye finish.",
    materials: ["100% Organic Linen", "Natural Dyes"],
    rating: 4.8,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Recycled Denim Jacket",
    category: "Outerwear",
    price: 145,
    image: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Classic denim jacket crafted from post-consumer recycled denim.",
    materials: ["Recycled Cotton", "Organic Thread"],
    rating: 4.9,
    isNew: true,
  },
  {
    id: 3,
    name: "Bamboo Cotton Tee",
    category: "Tops",
    price: 45,
    image: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Ultra-soft bamboo-cotton blend tee with minimal water footprint.",
    materials: ["70% Bamboo", "30% Organic Cotton"],
    rating: 4.7,
  },
  {
    id: 4,
    name: "Hemp Canvas Tote",
    category: "Accessories",
    price: 38,
    image: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Durable hemp canvas tote, perfect for everyday use.",
    materials: ["100% Hemp Canvas", "Natural Wax"],
    rating: 4.6,
    isNew: true,
  },
  {
    id: 5,
    name: "Tencel Wrap Dress",
    category: "Dresses",
    price: 120,
    image: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Elegant wrap dress in sustainably sourced Tencel lyocell.",
    materials: ["100% Tencel Lyocell"],
    rating: 4.9,
    isBestseller: true,
  },
  {
    id: 6,
    name: "Cork Sole Sandals",
    category: "Accessories",
    price: 75,
    image: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Handcrafted sandals with natural cork sole and vegetable-tanned leather.",
    materials: ["Cork", "Vegetable-Tanned Leather"],
    rating: 4.5,
  },
  {
    id: 7,
    name: "Organic Cotton Joggers",
    category: "Bottoms",
    price: 68,
    image: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Relaxed-fit joggers in GOTS-certified organic cotton fleece.",
    materials: ["GOTS Organic Cotton"],
    rating: 4.7,
  },
  {
    id: 8,
    name: "Upcycled Wool Scarf",
    category: "Accessories",
    price: 55,
    image: "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Cozy scarf woven from upcycled wool remnants in zero-waste process.",
    materials: ["Upcycled Wool", "Recycled Silk"],
    rating: 4.8,
    isNew: true,
  },
];

export const categories = ["All", "Tops", "Bottoms", "Dresses", "Outerwear", "Accessories"];