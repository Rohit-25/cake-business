export type Occasion = "birthday" | "engagement" | "anniversary" | "kids" | "simple";

export type Cake = {
  id: string;
  title: string;
  description: string;
  occasion: Occasion;
  image: string;
  imageAlt: string;
};
