import type { ClientConfig } from "../../src/config/types";

const base = "/tenants/sonalika/images";

export const client: ClientConfig = {
  name: "Sonalika",
  baker: "Sonalika",
  instagramUrl: "https://www.instagram.com/_sonalika24_/",
  whatsappNumber: "",
  town: "Chhatrapati Sambhaji Nagar",
  region: "Maharashtra",
  advanceNote: "Please allow time for custom fondant and wedding designs.",
  freeDelivery: ["Chhatrapati Sambhaji Nagar"],
  smallChargeDelivery: ["Aurangabad area", "Nearby towns"],
  deliveryPlaces: [
    "Chhatrapati Sambhaji Nagar",
    "Aurangabad",
    "Nearby Maharashtra",
    "Pick-up",
    "Somewhere else",
  ],
  heroHeadline: ["Custom cakes.", "Crafted with care."],
  heroBody: [
    "Fondant and cream cakes for weddings, birthdays, and celebrations—specialised in custom wedding cakes and detailed fondant work.",
    "Based in Chhatrapati Sambhaji Nagar (Aurangabad).",
  ],
  aboutBody: [
    "I’m Sonalika, a cake artist specialising in custom cream cakes, wedding cakes, and fondant cakes in Chhatrapati Sambhaji Nagar.",
  ],
  locationsExtra:
    "Tell us your city when you plan your cake. We’ll confirm delivery or pick-up when we reply on Instagram.",
  footerTagline: "Custom fondant and wedding cakes from Chhatrapati Sambhaji Nagar.",
  heroFeature: {
    src: `${base}/chocolate-loaded.png`,
    alt: "Loaded chocolate birthday cake by Sonalika.",
    fallbackLabel: "Chocolate cake",
  },
  heroImages: {
    mobile: {
      src: `${base}/chocolate-loaded.png`,
      alt: "Loaded chocolate birthday cake by Sonalika.",
      fallbackLabel: "Chocolate cake",
    },
    left: {
      src: `${base}/wedding-floral.png`,
      alt: "Floral wedding cake by Sonalika.",
      fallbackLabel: "Wedding cake",
    },
    right: {
      src: `${base}/jungle-safari.png`,
      alt: "Jungle safari kids cake by Sonalika.",
      fallbackLabel: "Kids cake",
    },
    bottom: {
      src: `${base}/mermaid-theme.png`,
      alt: "Mermaid themed cake by Sonalika.",
      fallbackLabel: "Mermaid cake",
    },
  },
  customizationLines: [
    "Wedding, birthday, kids’ themes, and fondant figurines.",
    "Occasion, date, and guest count for your celebration.",
    "Cream cakes, wedding tiers, and sculpted fondant details.",
    "We confirm design, timing, and price before anything is final.",
  ],
  signatureCakeIds: ["wedding-floral", "rudra-number-two", "travel-mummy"],
  homeGalleryCakeIds: ["race-ved-vrish", "fairy-ruhie", "cricket-nihit", "mermaid-sonalika"],
  galleryLinkLabel: "See the cakes",
  planGalleryLink: "Look at the gallery again",
  galleryPageTitle: "The cakes",
  shareTitle: "Sonalika · Custom Cakes",
  shareDescription:
    "Custom cakes by Sonalika in Chhatrapati Sambhaji Nagar. Wedding cakes, fondant art, and celebration cakes—plan yours on Instagram.",
  shareImage: `${base}/wedding-floral.png`,
  favicon: "/favicon.svg",
};
