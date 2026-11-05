export const site = {
  name: "Cakes by Ssruthi",
  baker: "Ssruthi",
  instagramUrl: "https://www.instagram.com/cakes_by_ssruthi/",
  /**
   * Digits only, with country code. Leave empty until a number is supplied.
   * Example: "91XXXXXXXXXX"
   */
  whatsappNumber: "",
  town: "Gobichettipalayam",
  region: "Tamil Nadu",
  advanceNote: "Please allow me 1–2 days.",
  freeDelivery: ["Nambiyur", "Gobichettipalayam"],
  smallChargeDelivery: ["Sathyamangalam", "Puliyampatti", "Avinashi"],
};

export const deliveryPlaces = [
  "Gobichettipalayam",
  "Nambiyur",
  "Sathyamangalam",
  "Puliyampatti",
  "Avinashi",
  "Somewhere else",
] as const;

export type DeliveryPlace = (typeof deliveryPlaces)[number];
