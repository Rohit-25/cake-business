import type { Cake } from "../../src/data/cakeTypes";

const base = "/tenants/kcakes-dublin/images";

export const cakes: Cake[] = [
  {
    id: "pistachio-drip",
    title: "Pistachio drip celebration cake",
    description: "Pale pistachio buttercream with a white drip, rosettes, and gold leaf.",
    occasion: "birthday",
    image: `${base}/pistachio-drip.png`,
    imageAlt: "Pistachio drip cake with buttercream rosettes, by K.Cakes Dublin.",
  },
  {
    id: "bluey-birthday",
    title: "Bluey kids birthday cake",
    description: "A tall two-tier cake with rainbows and name personalisation.",
    occasion: "kids",
    image: `${base}/bluey-birthday.png`,
    imageAlt: "Bluey themed kids birthday cake, by K.Cakes Dublin.",
  },
  {
    id: "heart-birthday-amy",
    title: "Vintage heart birthday cake",
    description: "Dusty mauve heart cake with piped details and butterflies.",
    occasion: "birthday",
    image: `${base}/heart-birthday-amy.png`,
    imageAlt: "Vintage heart-shaped birthday cake, by K.Cakes Dublin.",
  },
  {
    id: "red-floral-luxury",
    title: "Red floral luxury cake",
    description: "Velvet-finish red cake with a sculpted sugar flower and gold centre.",
    occasion: "engagement",
    image: `${base}/red-floral-luxury.png`,
    imageAlt: "Red luxury floral cake, by K.Cakes Dublin.",
  },
  {
    id: "bunny-carrot",
    title: "Bunny and carrot kids cake",
    description: "Clean white finish with a hand-painted bunny and carrot toppers.",
    occasion: "kids",
    image: `${base}/bunny-carrot.png`,
    imageAlt: "Bunny and carrot kids cake, by K.Cakes Dublin.",
  },
  {
    id: "pink-tiara",
    title: "Pink tiara birthday cake",
    description: "Bubblegum pink velvet finish with a crystal tiara topper.",
    occasion: "birthday",
    image: `${base}/pink-tiara.png`,
    imageAlt: "Pink tiara birthday cake, by K.Cakes Dublin.",
  },
  {
    id: "purple-hearts",
    title: "Purple heart celebration cake",
    description: "Deep purple velvet cake with heart details and silver pearls.",
    occasion: "anniversary",
    image: `${base}/purple-hearts.png`,
    imageAlt: "Purple heart celebration cake, by K.Cakes Dublin.",
  },
  {
    id: "green-crown",
    title: "Green gold crown cake",
    description: "Forest green finish with a gold crown and framed edible art.",
    occasion: "simple",
    image: `${base}/green-crown.png`,
    imageAlt: "Green and gold crown cake, by K.Cakes Dublin.",
  },
];
