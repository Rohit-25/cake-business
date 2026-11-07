import type { Cake } from "../../src/data/cakeTypes";

const base = "/tenants/sugarpop-usa/images";

export const cakes: Cake[] = [
  {
    id: "wedding-vintage",
    title: "Vintage wedding cake",
    description: "Three tiers with piped swags, bows, and ivory buttercream.",
    occasion: "engagement",
    image: `${base}/wedding-vintage.png`,
    imageAlt: "Vintage wedding cake by Sugar Pop.",
  },
  {
    id: "lemon-piped",
    title: "Lemon piped celebration cake",
    description: "Lemon toppers with blue ruffles and pearl details.",
    occasion: "birthday",
    image: `${base}/lemon-piped.png`,
    imageAlt: "Lemon piped cake by Sugar Pop.",
  },
  {
    id: "elsa-doll",
    title: "Elsa doll cake",
    description: "A rosette skirt cake with an Elsa doll topper.",
    occasion: "kids",
    image: `${base}/elsa-doll.png`,
    imageAlt: "Elsa doll cake by Sugar Pop.",
  },
  {
    id: "frozen-ciara",
    title: "Frozen kids cake",
    description: "Cool blue ombre with snowflakes and a personalised name.",
    occasion: "kids",
    image: `${base}/frozen-ciara.png`,
    imageAlt: "Frozen themed cake by Sugar Pop.",
  },
  {
    id: "camila-kpop",
    title: "Character birthday cake",
    description: "Pink and purple tiers with character toppers and disco accents.",
    occasion: "kids",
    image: `${base}/camila-kpop.png`,
    imageAlt: "Character birthday cake by Sugar Pop.",
  },
  {
    id: "stitch-birthday",
    title: "Stitch birthday cake",
    description: "Pink buttercream with Stitch and heart details.",
    occasion: "kids",
    image: `${base}/stitch-birthday.png`,
    imageAlt: "Stitch birthday cake by Sugar Pop.",
  },
  {
    id: "astronaut-space",
    title: "Astronaut space cake",
    description: "Blue buttercream with astronauts and cloud piping.",
    occasion: "kids",
    image: `${base}/astronaut-space.png`,
    imageAlt: "Space themed cake by Sugar Pop.",
  },
  {
    id: "pearl-ribbon",
    title: "Pearl and ribbon cake",
    description: "Ivory finish with pearls and a black satin ribbon.",
    occasion: "anniversary",
    image: `${base}/pearl-ribbon.png`,
    imageAlt: "Pearl and ribbon cake by Sugar Pop.",
  },
  {
    id: "black-gold-birthday",
    title: "Black and gold birthday cake",
    description: "Matte black tiers with a gold script topper.",
    occasion: "birthday",
    image: `${base}/black-gold-birthday.png`,
    imageAlt: "Black and gold birthday cake by Sugar Pop.",
  },
];
