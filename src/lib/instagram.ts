import { site } from "../config/site";

export function getInstagramHandle(instagramUrl: string): string | null {
  try {
    const pathname = new URL(instagramUrl).pathname.replace(/\/+$/, "");
    const handle = pathname.split("/").filter(Boolean)[0];
    return handle ?? null;
  } catch {
    return null;
  }
}

/**
 * Opens a message thread in the Instagram app on mobile (ig.me).
 * Instagram does not support prefilled DM text on the web; pair with clipboard copy.
 */
export function getInstagramDmUrl(): string {
  const handle = getInstagramHandle(site.instagramUrl);
  if (handle) return `https://ig.me/m/${encodeURIComponent(handle)}`;
  return site.instagramUrl;
}
