import { site } from "../config/site";

export function getWhatsAppUrl(message: string): string | null {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  if (digits.length < 8) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
