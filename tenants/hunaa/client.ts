import type { ClientConfig } from "../../src/config/types";

const base = "/tenants/hunaa/images";

export const client: ClientConfig = {
  name: "Hunaa.cake",
  baker: "Hunaa",
  instagramUrl: "https://www.instagram.com/hunaa.cake/",
  whatsappNumber: "62895402498803",
  town: "Serang",
  region: "Banten",
  advanceNote: "Pre-order only—no ready stock. Please allow time for custom designs.",
  freeDelivery: ["Serang"],
  smallChargeDelivery: ["Griya Permata Asri area", "Greater Serang"],
  deliveryPlaces: [
    "Serang",
    "Griya Permata Asri",
    "Banten",
    "Jakarta area",
    "Pick-up",
    "Somewhere else",
  ],
  heroHeadline: ["Start with sweetness.", "Custom cakes in Serang."],
  heroBody: [
    "Custom cakes, bento cakes, and cupcakes for birthdays, weddings, and celebrations—made to order by Hunaa.cake.",
    "Based in Serang, Banten. Pre-order (PO) only.",
  ],
  aboutBody: [
    "We’re Hunaa.cake—custom cake service in Serang. From buttercream florals and vintage piping to kids’ themes and illustrated toppers, every cake is made to your brief.",
    "Share your date, design ideas, and guest count on WhatsApp. We’ll confirm timing and price before anything is final.",
  ],
  locationsExtra:
    "Pick-up at Griya Permata Asri, Serang, or ask about delivery when you send your enquiry.",
  footerTagline: "Custom cakes and cupcakes from Serang—start with sweetness.",
  logoUrl: `${base}/logo.png`,
  heroFeature: {
    src: `${base}/mandas-birthday.png`,
    alt: "Vintage piped birthday cake by Hunaa.cake.",
    fallbackLabel: "Birthday cake",
  },
  heroImages: {
    mobile: {
      src: `${base}/mandas-birthday.png`,
      alt: "Vintage piped birthday cake by Hunaa.cake.",
      fallbackLabel: "Birthday cake",
    },
    left: {
      src: `${base}/cupcake-bouquet.png`,
      alt: "Cupcake flower bouquet by Hunaa.cake.",
      fallbackLabel: "Cupcake bouquet",
    },
    right: {
      src: `${base}/blue-engagement.png`,
      alt: "Pastel engagement cake by Hunaa.cake.",
      fallbackLabel: "Engagement cake",
    },
    bottom: {
      src: `${base}/jungle-azka.png`,
      alt: "Jungle safari kids cake by Hunaa.cake.",
      fallbackLabel: "Kids cake",
    },
  },
  customizationLines: [
    "Custom cake, bento cake, and cupcakes for your occasion.",
    "Date, theme, and how many you’re serving.",
    "Vintage piping, florals, kids’ themes, or illustrated designs.",
    "Pre-order only—we confirm design and price on WhatsApp.",
  ],
  signatureCakeIds: ["mandas-birthday", "cupcake-bouquet", "blue-engagement"],
  homeGalleryCakeIds: ["strawberry-dilla", "jungle-azka", "anime-ara", "flower-bouquet-board"],
  galleryLinkLabel: "See the cakes",
  planGalleryLink: "Browse the gallery again",
  galleryPageTitle: "Creations",
  shareTitle: "Hunaa.cake · Custom Cake Serang",
  shareDescription:
    "Custom cakes, bento cakes, and cupcakes in Serang. Pre-order your celebration cake—start with sweetness.",
  shareImage: `${base}/mandas-birthday.png`,
  favicon: "/favicon.svg",
};
