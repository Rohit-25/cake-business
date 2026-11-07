import type { Cake } from "../../src/data/cakeTypes";

const base = "/tenants/customcakesbybam/images";

export const cakes: Cake[] = [
  {
    id: "celebration-em-sam",
    title: "Red and gold celebration cake",
    description: "A custom red celebration cake with gold details and personalised names.",
    occasion: "anniversary",
    image: `${base}/celebration-em-sam.png`,
    imageAlt: "Red and gold celebration cake by Custom Cakes by Bam.",
  },
  {
    id: "birthday-arlene",
    title: "Floral birthday cake",
    description: "A tall pink cake with garden florals and a gold script topper.",
    occasion: "birthday",
    image: `${base}/birthday-arlene.png`,
    imageAlt: "Floral birthday cake by Custom Cakes by Bam.",
  },
  {
    id: "birthday-regina",
    title: "Macaron tower birthday cake",
    description: "Burgundy tiers with a macaron tower and gold florals.",
    occasion: "birthday",
    image: `${base}/birthday-regina.png`,
    imageAlt: "Macaron tower birthday cake by Custom Cakes by Bam.",
  },
  {
    id: "kids-tati-train",
    title: "Animal train kids cake",
    description: "Pastel train and animal figures with a personalised name plaque.",
    occasion: "kids",
    image: `${base}/kids-tati-train.png`,
    imageAlt: "Kids animal train cake by Custom Cakes by Bam.",
  },
  {
    id: "birthday-edward-gamer",
    title: "Level 70 gamer cake",
    description: "A black and gold birthday cake with gaming-inspired details.",
    occasion: "birthday",
    image: `${base}/birthday-edward-gamer.png`,
    imageAlt: "Gamer themed birthday cake by Custom Cakes by Bam.",
  },
  {
    id: "birthday-tessa-60",
    title: "Milestone floral cake",
    description: "Warm terracotta textures with dried florals and fabric-style drapes.",
    occasion: "anniversary",
    image: `${base}/birthday-tessa-60.png`,
    imageAlt: "Milestone floral cake by Custom Cakes by Bam.",
  },
  {
    id: "corporate-westpoint",
    title: "Corporate celebration cake",
    description: "A bespoke cake designed around a company brand and colours.",
    occasion: "simple",
    image: `${base}/corporate-westpoint.png`,
    imageAlt: "Corporate celebration cake by Custom Cakes by Bam.",
  },
  {
    id: "strawberry-gold",
    title: "Strawberry celebration cake",
    description: "White textured finish with fresh strawberries and gold candles.",
    occasion: "simple",
    image: `${base}/strawberry-gold.png`,
    imageAlt: "Strawberry celebration cake by Custom Cakes by Bam.",
  },
];
