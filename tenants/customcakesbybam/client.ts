import type { ClientConfig } from "../../src/config/types";

const base = "/tenants/customcakesbybam/images";

export const client: ClientConfig = {
  name: "Custom Cakes by Bam",
  baker: "Bam",
  instagramUrl: "https://www.instagram.com/customcakesbybam/",
  whatsappNumber: "",
  town: "Philippines",
  region: "Philippines",
  advanceNote: "Please allow time for custom designs—we’ll confirm details when you message.",
  freeDelivery: ["Metro Manila"],
  smallChargeDelivery: ["Greater Manila", "Nearby provinces"],
  deliveryPlaces: [
    "Metro Manila",
    "Greater Manila",
    "Luzon",
    "Visayas",
    "Mindanao",
    "Pick-up",
    "Somewhere else",
  ],
  heroHeadline: ["Your cake.", "From beginning to end."],
  heroBody: [
    "Meaningful celebration cakes, shaped by your style, your preferences, and how you want your day to feel.",
    "From the first idea to the final detail, everything we create is guided by you.",
  ],
  aboutBody: [
    "Custom Cakes by Bam is a bakery focused on bespoke celebration cakes. We also bake real sourdough breads—message on Instagram for cake and bread enquiries.",
  ],
  locationsExtra:
    "Tell us your city and venue when you plan your cake. We’ll confirm delivery or pick-up when we reply.",
  footerTagline: "Bespoke celebration cakes, made completely yours.",
  heroFeature: {
    src: `${base}/strawberry-gold.png`,
    alt: "White celebration cake with strawberries and gold candles, by Custom Cakes by Bam.",
    fallbackLabel: "Strawberry cake",
  },
  heroImages: {
    mobile: {
      src: `${base}/birthday-arlene.png`,
      alt: "Floral birthday cake with gold topper, by Custom Cakes by Bam.",
      fallbackLabel: "Celebration cake",
    },
    left: {
      src: `${base}/strawberry-gold.png`,
      alt: "White cake with strawberries and gold candles, by Custom Cakes by Bam.",
      fallbackLabel: "Strawberry cake",
    },
    right: {
      src: `${base}/birthday-regina.png`,
      alt: "Burgundy birthday cake with macaron tower, by Custom Cakes by Bam.",
      fallbackLabel: "Macaron tower cake",
    },
    bottom: {
      src: `${base}/birthday-tessa-60.png`,
      alt: "Floral milestone birthday cake, by Custom Cakes by Bam.",
      fallbackLabel: "Milestone cake",
    },
  },
  customizationLines: [
    "Your occasion, date, and how many guests you’re planning for.",
    "Themes, colours, and words on the cake—guided by your ideas.",
    "Celebration cakes from birthdays and milestones to corporate events.",
    "Every detail discussed before we confirm design and price.",
  ],
  signatureCakeIds: ["birthday-arlene", "birthday-regina", "celebration-em-sam"],
  homeGalleryCakeIds: ["kids-tati-train", "birthday-edward-gamer", "birthday-tessa-60", "corporate-westpoint"],
  galleryLinkLabel: "See the cakes",
  planGalleryLink: "Look at the gallery again",
  galleryPageTitle: "The cakes",
  shareTitle: "Custom Cakes by Bam",
  shareDescription:
    "Custom cakes by Bam. Bespoke celebration cakes in the Philippines—plan your cake and message us on Instagram.",
  shareImage: `${base}/logo.png`,
  favicon: `${base}/logo.png`,
  logoUrl: `${base}/logo.png`,
};
