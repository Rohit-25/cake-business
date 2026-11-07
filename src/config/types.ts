export type HeroImage = {
  src: string;
  alt: string;
  fallbackLabel: string;
};

export type ClientConfig = {
  name: string;
  baker: string;
  instagramUrl: string;
  /** Digits only, with country code. Empty unless using whatsappWaMePath. */
  whatsappNumber: string;
  /** e.g. message/U57YUTEENQU6B1 for wa.me click-to-chat links from Instagram */
  whatsappWaMePath?: string;
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
  /** Optional portrait for the Story section */
  bakerPortrait?: HeroImage;
  customizationLines: string[];
  signatureCakeIds?: string[];
  homeGalleryCakeIds?: string[];
  galleryLinkLabel: string;
  planGalleryLink: string;
  galleryPageTitle: string;
  /** Link preview title (browser tab & social). Defaults to name in build if omitted. */
  shareTitle?: string;
  /** e.g. "Custom cakes by Bam. Plan your celebration cake." */
  shareDescription: string;
  /** Path under public/ for og:image and social preview */
  shareImage: string;
  favicon?: string;
  logoUrl?: string;
};
