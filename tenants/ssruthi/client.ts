import type { ClientConfig } from "../../src/config/types";

const base = "/images";

export const client: ClientConfig = {
  name: "Cakes by Ssruthi",
  baker: "Ssruthi",
  instagramUrl: "https://www.instagram.com/cakes_by_ssruthi/",
  whatsappNumber: "",
  town: "Gobichettipalayam",
  region: "Tamil Nadu",
  advanceNote: "Please allow me 1–2 days.",
  freeDelivery: ["Nambiyur", "Gobichettipalayam"],
  smallChargeDelivery: ["Sathyamangalam", "Puliyampatti", "Avinashi"],
  deliveryPlaces: [
    "Gobichettipalayam",
    "Nambiyur",
    "Sathyamangalam",
    "Puliyampatti",
    "Avinashi",
    "Somewhere else",
  ],
  heroHeadline: ["Custom cakes.", "Made to celebrate."],
  heroBody: [
    "Every celebration is different. I make homemade cakes inspired by your ideas, your occasions and the little details that make them special.",
    "I bake from home in Gobichettipalayam.",
  ],
  aboutBody: [
    "I bake from home in Gobichettipalayam. I make custom birthday and wedding cakes, tres leches, buttercream cakes, plum cakes, tea cakes, banana cake, carrot and dates cake, and brownies. The bakery is FSSAI registered.",
  ],
  locationsExtra:
    "For anywhere else, including further across Tamil Nadu or Bangalore, tell me the place. I confirm whether I can deliver that cake. Not every cake travels the same way.",
  footerTagline: "Homemade cakes from Gobichettipalayam, made for your celebration.",
  heroFeature: {
    src: `${base}/engagement-cake.png`,
    alt: "White and gold engagement cake with red roses, made by Ssruthi.",
    fallbackLabel: "Engagement cake",
  },
  heroImages: {
    left: {
      src: `${base}/engagement-cake.png`,
      alt: "White and gold engagement cake with red roses, made by Ssruthi.",
      fallbackLabel: "Engagement cake",
    },
    right: {
      src: `${base}/fairy-birthday.png`,
      alt: "Pink fairy birthday cake, made by Ssruthi.",
      fallbackLabel: "Fairy cake",
    },
    mobile: {
      src: `${base}/pink-white-birthday.png`,
      alt: "Pink and white birthday cake, made by Ssruthi.",
      fallbackLabel: "Birthday cake",
    },
    bottom: {
      src: `${base}/chocolate-birthday.png`,
      alt: "Chocolate birthday cake, made by Ssruthi.",
      fallbackLabel: "Chocolate cake",
    },
  },
  customizationLines: [
    "Occasion and date—birthdays, engagements, kids’ themes, or something simple for home.",
    "Size for your gathering, from a small cake to twenty guests or more.",
    "Colours, words on the cake, and ideas you already picture.",
    "Buttercream, tres leches, plum cake, and other styles I bake from home.",
  ],
  signatureCakeIds: ["engagement-cake", "pink-white-birthday", "peacock-birthday"],
  homeGalleryCakeIds: ["fairy-birthday", "two-tone-celebration", "chocolate-birthday", "jungle-birthday"],
  galleryLinkLabel: "See her cakes",
  planGalleryLink: "Look at her cakes again",
  galleryPageTitle: "Her cakes",
};
