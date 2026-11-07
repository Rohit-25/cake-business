export type HeroImage = {
  src: string;
  alt: string;
  fallbackLabel: string;
};

export type ClientConfig = {
  name: string;
  baker: string;
  instagramUrl: string;
  /** Digits only, with country code. Empty → Plan uses Instagram. */
  whatsappNumber: string;
  town: string;
  region: string;
  advanceNote: string;
  freeDelivery: string[];
  smallChargeDelivery: string[];
  deliveryPlaces: readonly string[];
  heroHeadline: [string, string];
  heroBody: string[];
  aboutBody: string[];
  locationsExtra: string;
  footerTagline: string;
  heroImages: {
    left?: HeroImage;
    right?: HeroImage;
    mobile: HeroImage;
    bottom?: HeroImage;
  };
  /** Dominant homepage hero image; falls back to heroImages.mobile */
  heroFeature?: HeroImage;
  customizationLines: string[];
  signatureCakeIds?: string[];
  /** Distinct set for homepage gallery strip; falls back to later cakes in catalogue */
  homeGalleryCakeIds?: string[];
  galleryLinkLabel: string;
  planGalleryLink: string;
  galleryPageTitle: string;
};
