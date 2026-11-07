import { cakes as tenantCakes } from "../config/index";
import { site } from "../config/site";
import type { Cake, Occasion } from "./cakeTypes";

export type { Cake, Occasion };

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

export const cakes = tenantCakes;

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

function cakesByIds(ids: string[]): Cake[] {
  return ids.map((id) => getCake(id)).filter((cake): cake is Cake => Boolean(cake));
}

export function getSignatureCakes(): Cake[] {
  if (site.signatureCakeIds?.length) return cakesByIds([...site.signatureCakeIds]);
  return cakes.slice(0, 3);
}

export function getHomeGalleryCakes(): Cake[] {
  if (site.homeGalleryCakeIds?.length) return cakesByIds([...site.homeGalleryCakeIds]);
  const exclude = new Set(getSignatureCakes().map((cake) => cake.id));
  return cakes.filter((cake) => !exclude.has(cake.id)).slice(0, 4);
}
