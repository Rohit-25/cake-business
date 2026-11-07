import type { ClientConfig } from "../../src/config/types";

const base = "/tenants/sugarpop-usa/images";

export const client: ClientConfig = {
  name: "Sugar Pop",
  baker: "Kimberly",
  instagramUrl: "https://www.instagram.com/sugarpop_usa/",
  whatsappNumber: "",
  whatsappWaMePath: "message/U57YUTEENQU6B1",
  town: "Orlando",
  region: "Florida",
  advanceNote: "Please allow time for custom designs—we’ll confirm details on WhatsApp.",
  freeDelivery: ["Orlando"],
  smallChargeDelivery: ["Greater Orlando", "Central Florida"],
  deliveryPlaces: [
    "Orlando",
    "Greater Orlando",
    "Central Florida",
    "Pick-up in Orlando",
    "Somewhere else",
  ],
  heroHeadline: ["Custom cakes.", "Made in Orlando."],
  heroBody: [
    "Custom cakes and desserts for celebrations that matter—from birthdays and weddings to bespoke themes.",
    "DM or message on WhatsApp to order.",
  ],
  aboutBody: [
    "I’m Kimberly—custom cakes and desserts in Orlando, Florida. From buttercream finishes to sculpted designs, each cake is made for your celebration.",
  ],
  locationsExtra:
    "Share your venue or pick-up preference when you plan your cake. We’ll confirm delivery details when we reply.",
  footerTagline: "Custom cakes and desserts from Orlando, made for your celebration.",
  heroFeature: {
    src: `${base}/lemon-piped.png`,
    alt: "Lemon piped celebration cake by Sugar Pop.",
    fallbackLabel: "Lemon cake",
  },
  heroImages: {
    mobile: {
      src: `${base}/lemon-piped.png`,
      alt: "Lemon piped celebration cake by Sugar Pop.",
      fallbackLabel: "Lemon cake",
    },
    left: {
      src: `${base}/wedding-vintage.png`,
      alt: "Vintage wedding cake by Sugar Pop.",
      fallbackLabel: "Wedding cake",
    },
    right: {
      src: `${base}/frozen-ciara.png`,
      alt: "Frozen themed kids cake by Sugar Pop.",
      fallbackLabel: "Kids cake",
    },
    bottom: {
      src: `${base}/black-gold-birthday.png`,
      alt: "Black and gold birthday cake by Sugar Pop.",
      fallbackLabel: "Birthday cake",
    },
  },
  customizationLines: [
    "Occasion, date, and guest count for your celebration.",
    "Themes, colours, and toppers you already have in mind.",
    "Buttercream, sculpted, and character cakes for kids and adults.",
    "We confirm design, timing, and price before anything is final.",
  ],
  signatureCakeIds: ["wedding-vintage", "elsa-doll", "frozen-ciara"],
  homeGalleryCakeIds: ["camila-kpop", "stitch-birthday", "astronaut-space", "pearl-ribbon"],
  galleryLinkLabel: "See the cakes",
  planGalleryLink: "Look at the gallery again",
  galleryPageTitle: "The cakes",
  shareTitle: "Sugar Pop · Custom Cakes Orlando",
  shareDescription:
    "Custom cakes by Kimberly in Orlando. Custom cakes and desserts—plan your cake and message on WhatsApp.",
  shareImage: `${base}/logo.png`,
  favicon: `${base}/logo.png`,
  logoUrl: `${base}/logo.png`,
};
