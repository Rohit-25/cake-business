import type { ClientConfig } from "../../src/config/types";

const base = "/tenants/kcakes-dublin/images";

export const client: ClientConfig = {
  name: "K.Cakes Dublin",
  baker: "Karolina",
  instagramUrl: "https://www.instagram.com/k.cakes_dublin/",
  whatsappNumber: "",
  town: "Dublin",
  region: "Ireland",
  advanceNote: "Please allow a few days’ notice for custom designs.",
  freeDelivery: ["Dublin city centre", "Dublin southside"],
  smallChargeDelivery: ["Greater Dublin", "Wicklow", "Kildare"],
  deliveryPlaces: [
    "Dublin city centre",
    "Greater Dublin",
    "Wicklow",
    "Kildare",
    "Collection from me",
    "Somewhere else",
  ],
  heroHeadline: ["Custom cakes.", "Crafted in Dublin."],
  heroBody: [
    "Signature cream cheese cakes and bespoke designs for birthdays, weddings, and everything worth celebrating.",
    "Based in Dublin. HSE-registered home bakery.",
  ],
  aboutBody: [
    "I'm Karolina, and I create custom cakes in Dublin with a focus on cream cheese layers and careful, personal detail.",
    "The bakery is HSE registered. For cake courses and other enquiries, you're welcome to message me on Instagram.",
  ],
  locationsExtra:
    "For areas outside Dublin and the surrounding counties, tell me where the celebration is. I'll confirm delivery or collection when we chat.",
  footerTagline: "Custom cream cheese cakes from Dublin, made for your celebration.",
  heroFeature: {
    src: `${base}/purple-hearts.png`,
    alt: "Purple heart celebration cake, by K.Cakes Dublin.",
    fallbackLabel: "Heart cake",
  },
  heroImages: {
    left: {
      src: `${base}/pistachio-drip.png`,
      alt: "Pistachio drip cake with buttercream rosettes, by K.Cakes Dublin.",
      fallbackLabel: "Pistachio cake",
    },
    right: {
      src: `${base}/heart-birthday-amy.png`,
      alt: "Vintage heart-shaped birthday cake, by K.Cakes Dublin.",
      fallbackLabel: "Heart cake",
    },
    mobile: {
      src: `${base}/red-floral-luxury.png`,
      alt: "Red luxury floral cake, by K.Cakes Dublin.",
      fallbackLabel: "Floral cake",
    },
    bottom: {
      src: `${base}/bluey-birthday.png`,
      alt: "Bluey themed kids birthday cake, by K.Cakes Dublin.",
      fallbackLabel: "Kids cake",
    },
  },
  customizationLines: [
    "Cream cheese layers and bespoke finishes for your celebration.",
    "Occasion, date, and where the cake is needed in Dublin and nearby.",
    "Guest count—from an intimate cake to gatherings of twenty or more.",
    "Personalised colours, themes, and words on the cake.",
  ],
  signatureCakeIds: ["pistachio-drip", "red-floral-luxury", "green-crown"],
  homeGalleryCakeIds: ["bluey-birthday", "heart-birthday-amy", "bunny-carrot", "pink-tiara"],
  galleryLinkLabel: "See the cakes",
  planGalleryLink: "Look at the gallery again",
  galleryPageTitle: "The cakes",
  shareDescription:
    "Custom cakes by Karolina. Bespoke cream cheese cakes in Dublin—plan your celebration and message on Instagram.",
  shareImage: `${base}/logo.png`,
  favicon: `${base}/logo.png`,
  logoUrl: `${base}/logo.png`,
};
