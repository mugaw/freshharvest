export type Product = {
  slug: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  origin: string;
  metrics: {
    weight: { grams: number; kilograms: number };
    volume: { milliliters: number; liters: number };
    size: { centimeters: number; meters: number };
  };
};

export const categories = [
  {
    title: "Fresh Fruits",
    detail: "Seasonal picks and tropical favorites.",
    image: "/images/categories/fruits.jpg",
    key: "fruits",
  },
  {
    title: "Garden Vegetables",
    detail: "Crisp greens and daily harvests.",
    image: "/images/categories/vegetables.jpg",
    key: "vegetables",
  },
  {
    title: "Dairy & Eggs",
    detail: "Small-batch cheeses and pasture eggs.",
    image: "/images/categories/dairy.jpg",
    key: "dairy",
  },
  {
    title: "Pantry Staples",
    detail: "Sustainable pantry essentials.",
    image: "/images/categories/pantry.jpg",
    key: "pantry",
  },
  {
    title: "Seafood & Protein",
    detail: "Responsibly sourced proteins.",
    image: "/images/products/salmon.jpg",
    key: "protein",
  },
];

export const products: Product[] = [
  {
    slug: "hass-avocado",
    name: "Hass Avocado",
    price: "$2.99",
    image: "/images/products/avocado.jpg",
    category: "fruits",
    description:
      "Buttery avocados from coastal groves, packed at peak ripeness.",
    origin: "Santa Barbara, CA",
    metrics: {
      weight: { grams: 180, kilograms: 0.18 },
      volume: { milliliters: 250, liters: 0.25 },
      size: { centimeters: 12, meters: 0.12 },
    },
  },
  {
    slug: "blueberry-pack",
    name: "Blueberry Pack",
    price: "$4.50",
    image: "/images/products/blueberries.jpg",
    category: "fruits",
    description: "Juicy blueberries in a ready-to-snack reusable punnet.",
    origin: "Hammonton, NJ",
    metrics: {
      weight: { grams: 340, kilograms: 0.34 },
      volume: { milliliters: 500, liters: 0.5 },
      size: { centimeters: 18, meters: 0.18 },
    },
  },
  {
    slug: "organic-carrots",
    name: "Organic Carrots",
    price: "$3.20",
    image: "/images/products/carrots.jpg",
    category: "vegetables",
    description: "Sweet, crunchy carrots grown without synthetic inputs.",
    origin: "Yuma, AZ",
    metrics: {
      weight: { grams: 900, kilograms: 0.9 },
      volume: { milliliters: 1200, liters: 1.2 },
      size: { centimeters: 28, meters: 0.28 },
    },
  },
  {
    slug: "creamy-brie",
    name: "Creamy Brie",
    price: "$6.75",
    image: "/images/products/cheese.jpg",
    category: "dairy",
    description: "Double-cream brie aged for a silky, savory finish.",
    origin: "Petaluma, CA",
    metrics: {
      weight: { grams: 170, kilograms: 0.17 },
      volume: { milliliters: 200, liters: 0.2 },
      size: { centimeters: 10, meters: 0.1 },
    },
  },
  {
    slug: "free-range-eggs",
    name: "Free-Range Eggs",
    price: "$5.30",
    image: "/images/products/eggs.jpg",
    category: "dairy",
    description: "Golden-yolk eggs from pasture-raised hens.",
    origin: "Sonoma County, CA",
    metrics: {
      weight: { grams: 600, kilograms: 0.6 },
      volume: { milliliters: 850, liters: 0.85 },
      size: { centimeters: 16, meters: 0.16 },
    },
  },
  {
    slug: "wild-salmon",
    name: "Wild Salmon",
    price: "$12.90",
    image: "/images/products/salmon.jpg",
    category: "protein",
    description: "Line-caught salmon fillet, flash chilled for freshness.",
    origin: "Bristol Bay, AK",
    metrics: {
      weight: { grams: 340, kilograms: 0.34 },
      volume: { milliliters: 420, liters: 0.42 },
      size: { centimeters: 22, meters: 0.22 },
    },
  },
  {
    slug: "heirloom-tomatoes",
    name: "Heirloom Tomatoes",
    price: "$4.90",
    image: "/images/products/tomatoes.jpg",
    category: "vegetables",
    description: "Mixed heirloom tomatoes for salads and slow roasts.",
    origin: "Watsonville, CA",
    metrics: {
      weight: { grams: 700, kilograms: 0.7 },
      volume: { milliliters: 900, liters: 0.9 },
      size: { centimeters: 20, meters: 0.2 },
    },
  },
  {
    slug: "sourdough-loaf",
    name: "Artisan Sourdough",
    price: "$7.50",
    image: "/images/categories/bakery.jpg",
    category: "pantry",
    description: "Naturally leavened sourdough bread, baked fresh daily.",
    origin: "San Francisco, CA",
    metrics: {
      weight: { grams: 850, kilograms: 0.85 },
      volume: { milliliters: 2000, liters: 2.0 },
      size: { centimeters: 25, meters: 0.25 },
    },
  },
  {
    slug: "local-honey",
    name: "Raw Wildflower Honey",
    price: "$9.20",
    image: "/images/categories/pantry.jpg",
    category: "pantry",
    description: "Unfiltered raw honey harvested from local apiaries.",
    origin: "Ojai, CA",
    metrics: {
      weight: { grams: 454, kilograms: 0.454 },
      volume: { milliliters: 320, liters: 0.32 },
      size: { centimeters: 12, meters: 0.12 },
    },
  },
  {
    slug: "organic-spinach",
    name: "Baby Spinach",
    price: "$4.00",
    image: "/images/categories/vegetables.jpg",
    category: "vegetables",
    description: "Tender baby spinach leaves, pre-washed and ready to eat.",
    origin: "Salinas, CA",
    metrics: {
      weight: { grams: 250, kilograms: 0.25 },
      volume: { milliliters: 1500, liters: 1.5 },
      size: { centimeters: 30, meters: 0.3 },
    },
  },
  {
    slug: "grass-fed-butter",
    name: "Cultured Butter",
    price: "$6.50",
    image: "/images/categories/dairy.jpg",
    category: "dairy",
    description: "Rich, creamy butter made from grass-fed cows' milk.",
    origin: "Marin County, CA",
    metrics: {
      weight: { grams: 227, kilograms: 0.227 },
      volume: { milliliters: 240, liters: 0.24 },
      size: { centimeters: 15, meters: 0.15 },
    },
  },
  {
    slug: "fuji-apples",
    name: "Crisp Fuji Apples",
    price: "$5.80",
    image: "/images/categories/fruits.jpg",
    category: "fruits",
    description: "Sweet and crisp Fuji apples, perfect for snacking or baking.",
    origin: "Yakima Valley, WA",
    metrics: {
      weight: { grams: 1200, kilograms: 1.2 },
      volume: { milliliters: 2500, liters: 2.5 },
      size: { centimeters: 22, meters: 0.22 },
    },
  }
];
