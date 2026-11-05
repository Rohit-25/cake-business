export type Occasion = "birthday" | "engagement" | "anniversary" | "kids" | "simple";

export const occasionLabels: Record<Occasion, string> = {
  birthday: "Birthday",
  engagement: "Engagement or wedding",
  anniversary: "Anniversary",
  kids: "Kids theme",
  simple: "Something simple",
};

export const occasions: Occasion[] = ["birthday", "engagement", "anniversary", "kids", "simple"];

export const homeOccasions = ["birthday", "engagement", "kids", "simple"] as const;

export const peopleOptions = [
  "A small cake",
  "About 10 people",
  "About 20 people",
  "More than 20 people",
  "Not sure yet",
] as const;

export type Cake = {
  id: string;
  title: string;
  description: string;
  occasion: Occasion;
  image: string;
  imageAlt: string;
};

export const cakes: Cake[] = [
  {
    id: "engagement-cake",
    title: "White and gold engagement cake",
    description: "A white and gold cake with red roses, made for an engagement.",
    occasion: "engagement",
    image: "/images/engagement-cake.png",
    imageAlt: "White and gold engagement cake with red roses, made by Ssruthi.",
  },
  {
    id: "pink-white-birthday",
    title: "Pink and white birthday cake",
    description: "A pink and white cake made for a 25th birthday.",
    occasion: "birthday",
    image: "/images/pink-white-birthday.png",
    imageAlt: "Pink and white birthday cake with a gold 25, made by Ssruthi.",
  },
  {
    id: "peacock-birthday",
    title: "First birthday cake with a peacock theme",
    description: "A first birthday cake with a peacock, gold spheres, and a little Krishna.",
    occasion: "kids",
    image: "/images/peacock-birthday.png",
    imageAlt: "White first birthday cake with peacock feathers, made by Ssruthi.",
  },
  {
    id: "fairy-birthday",
    title: "Pink fairy birthday cake",
    description: "A soft pink cake with fairies and butterflies, made for a birthday.",
    occasion: "kids",
    image: "/images/fairy-birthday.png",
    imageAlt: "Pink fairy birthday cake with butterflies, made by Ssruthi.",
  },
  {
    id: "two-tone-celebration",
    title: "Two-tone celebration cake",
    description: "A two-tone cake made for a birthday and an anniversary together.",
    occasion: "anniversary",
    image: "/images/two-tone-celebration.png",
    imageAlt: "Two-tone celebration cake in a box, made by Ssruthi.",
  },
  {
    id: "chocolate-birthday",
    title: "Chocolate birthday cake",
    description: "A chocolate birthday cake with a playful theme on top.",
    occasion: "birthday",
    image: "/images/chocolate-birthday.png",
    imageAlt: "Chocolate birthday cake with gold spheres, made by Ssruthi.",
  },
  {
    id: "yellow-buttercream",
    title: "Yellow buttercream cake",
    description: "A yellow buttercream cake made to mark a 26th birthday.",
    occasion: "birthday",
    image: "/images/yellow-buttercream.png",
    imageAlt: "Yellow buttercream birthday cake, made by Ssruthi.",
  },
  {
    id: "jungle-birthday",
    title: "Jungle-theme first birthday cake",
    description: "A pale green first birthday cake with a little jungle scene.",
    occasion: "kids",
    image: "/images/jungle-birthday.png",
    imageAlt: "Pale green jungle-theme first birthday cake, made by Ssruthi.",
  },
];

export function getCake(id: string | null) {
  if (!id) return undefined;
  return cakes.find((cake) => cake.id === id);
}

export function isOccasion(value: string | null): value is Occasion {
  return occasions.some((occasion) => occasion === value);
}

export function readOccasion(value: string | null): Occasion | "" {
  if (!value) return "";
  const normalized = value.trim().toLowerCase();
  if (normalized.startsWith("birth")) return "birthday";
  if (normalized.startsWith("engage") || normalized.startsWith("wedding")) return "engagement";
  if (normalized.startsWith("anniv")) return "anniversary";
  if (normalized.startsWith("kid")) return "kids";
  if (normalized.startsWith("simple") || normalized.startsWith("something")) return "simple";
  return isOccasion(normalized) ? normalized : "";
}

export function inspirationLine(cake: Cake) {
  return `Something like your ${cake.title.toLowerCase()}.`;
}
