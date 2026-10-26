import { productImage, productGallery } from "@/lib/images";

export type ProductCategory =
  | "Outerwear"
  | "Tailoring"
  | "Knitwear"
  | "Bottoms"
  | "Atelier"
  | "Shirts";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  gallery: string[];
  category: ProductCategory;
  description: string;
  story: string;
  fabric: string;
  sizes: string[];
  colors: string[];
};

// Local generated editorial images (see src/lib/images.ts). Deterministic by product index.
const img = (index: number) => productImage(index);

export const products: Product[] = [
  {
    id: "nordic-overcoat",
    title: "Nordic Overcoat",
    price: 24500,
    image: img(0),
    gallery: productGallery(0),
    category: "Outerwear",
    description:
      "A double-faced wool overcoat cut for silence. Architectural shoulders, a weightless drape, and a void-black finish that reads as sculpture in motion.",
    story:
      "Drafted in Copenhagen against a January wind, the Nordic Overcoat is the house's thesis on protection without bulk. The collar stands like a horizon line.",
    fabric: "Italian double-faced wool, horn buttons, unlined hem.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Void", "Ash"],
  },
  {
    id: "silhouette-blazer",
    title: "Silhouette Blazer",
    price: 18900,
    image: img(1),
    gallery: productGallery(1),
    category: "Tailoring",
    description:
      "Sharp shoulders, a fluid waist, midnight canvas. The blazer that holds a room without raising its voice.",
    story:
      "Cut on a half-canvas, the Silhouette Blazer borrows from Savile Row and then subtracts. What remains is line, light, and intention.",
    fabric: "Super 120s wool canvas, mother-of-pearl lining tape.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Ink", "Void"],
  },
  {
    id: "void-turtleneck",
    title: "Void Turtleneck",
    price: 8500,
    image: img(2),
    gallery: productGallery(2),
    category: "Knitwear",
    description:
      "Merino second-skin with a sculpted collar and a matte finish. Worn alone, it becomes the uniform.",
    story:
      "Knitted in a 18-gauge merino that refuses shine. The Void Turtleneck is designed to disappear into the wearer — and then define them.",
    fabric: "Extra-fine merino wool, fully fashioned seams.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Void", "Ash", "Chalk"],
  },
  {
    id: "aurora-trouser",
    title: "Aurora Trouser",
    price: 12200,
    image: img(3),
    gallery: productGallery(3),
    category: "Bottoms",
    description:
      "Wide-leg wool with a pressed crease and a weightless fall. Movement as choreography.",
    story:
      "Named for the light that never quite lands. The Aurora Trouser elongates the line from waist to floor, then lets air do the rest.",
    fabric: "Tropical wool, extended tab, unfinished hem on request.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ash", "Ink", "Void"],
  },
  {
    id: "eclipse-dress",
    title: "Eclipse Dress",
    price: 21000,
    image: img(4),
    gallery: productGallery(4),
    category: "Atelier",
    description:
      "A column silhouette in lunar black silk, bias-cut so the body writes the pattern.",
    story:
      "The Eclipse Dress is evening without ornament. It arrives as a single plane of silk and leaves as architecture.",
    fabric: "Sand-washed silk, invisible side zip, French seams.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Void", "Ink"],
  },
  {
    id: "frost-shirt",
    title: "Frost Shirt",
    price: 9800,
    image: img(10),
    gallery: productGallery(10),
    category: "Shirts",
    description:
      "Poplin architecture with a hidden placket and a chalk-white hand. Precision at the collar stand.",
    story:
      "Every Frost Shirt is pressed once at the atelier and never again in the same way. It is meant to soften — never slouch.",
    fabric: "Two-fold cotton poplin, mother-of-pearl buttons.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Chalk", "Ash"],
  },
  {
    id: "polar-parka",
    title: "Polar Parka",
    price: 27500,
    image: img(6),
    gallery: productGallery(6),
    category: "Outerwear",
    description:
      "A technical shell rendered in matte black. Storm flap, quiet hardware, a hood that frames rather than hides.",
    story:
      "Designed for cities that pretend they have no winter. The Polar Parka is warmth as a graphic decision.",
    fabric: "Recycled nylon shell, wool-blend lining, taped seams.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Void", "Ash"],
  },
  {
    id: "meridian-coat",
    title: "Meridian Coat",
    price: 32000,
    image: img(7),
    gallery: productGallery(7),
    category: "Outerwear",
    description:
      "Floor-grazing wool in sand and shadow. A single-breasted line that redraws the meridian of the body.",
    story:
      "The Meridian Coat is the longest piece in AW26 — a moving column for those who prefer their presence announced by silence.",
    fabric: "Brushed wool-cashmere, bound seams, hidden buttons.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Sand", "Void"],
  },
  {
    id: "obelisk-suit",
    title: "Obelisk Suit",
    price: 45000,
    image: img(8),
    gallery: productGallery(8),
    category: "Tailoring",
    description:
      "A two-piece monument. Peak lapel, high gorge, trousers that break once and no more.",
    story:
      "Named for standing stones. The Obelisk Suit is ceremonial without costume — black as a decision, not a default.",
    fabric: "Barathea wool, silk-blend lining, working cuff.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Ink", "Void"],
  },
  {
    id: "halo-knit",
    title: "Halo Knit",
    price: 11200,
    image: img(9),
    gallery: productGallery(9),
    category: "Knitwear",
    description:
      "A chalk-toned crew with a halo of light at the rib. Soft volume, exact proportions.",
    story:
      "Spun from undyed merino so the colour is the sheep's. The Halo Knit is warmth without narrative.",
    fabric: "Undyed merino, dropped shoulder, ribbed cuff.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Chalk", "Sand", "Ash"],
  },
  {
    id: "lunar-skirt",
    title: "Lunar Skirt",
    price: 13500,
    image: img(5),
    gallery: productGallery(5),
    category: "Bottoms",
    description:
      "A midi column with a single vent and a moonlit drape. Tailored, never pretty.",
    story:
      "The Lunar Skirt was drafted on a dress form at midnight — the only hour the atelier is quiet enough to hear silk fall.",
    fabric: "Wool crepe, concealed zip, full lining.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Void", "Ink", "Ash"],
  },
  {
    id: "noir-column",
    title: "Noir Column",
    price: 24000,
    image: img(11),
    gallery: productGallery(11),
    category: "Atelier",
    description:
      "Evening reduced to a vertical. Strapless black, a seam that climbs like a shadow at noon.",
    story:
      "The Noir Column is the house's most uncompromising piece: no print, no jewel, no apology. Only line.",
    fabric: "Duchess satin, boned bodice, silk lining.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Void"],
  },
];

export const categories: Array<ProductCategory | "All"> = [
  "All",
  "Outerwear",
  "Tailoring",
  "Knitwear",
  "Bottoms",
  "Atelier",
  "Shirts",
];

export const allSizes = ["XS", "S", "M", "L", "XL"];
export const allColors = ["Void", "Chalk", "Ash", "Ink", "Sand"];

export const featuredIds = [
  "nordic-overcoat",
  "eclipse-dress",
  "silhouette-blazer",
  "meridian-coat",
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return featuredIds
    .map((id) => getProductById(id))
    .filter((product): product is Product => Boolean(product));
}

export function getRelatedProducts(id: string, count = 3): Product[] {
  const current = getProductById(id);
  const rest = products.filter((product) => product.id !== id);
  const same = current
    ? rest.filter((product) => product.category === current.category)
    : [];
  const others = rest.filter((product) => product.category !== current?.category);
  return [...same, ...others].slice(0, count);
}

export function formatBdt(amount: number): string {
  return `৳ ${amount.toLocaleString("en-BD")}`;
}
