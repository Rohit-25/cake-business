import { useEffect } from "react";
import { site } from "../config/site";

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attr, value);
}

/** Keeps document title/description in sync after client navigation (social crawlers use build-time HTML). */
export function ShareMeta() {
  useEffect(() => {
    const title = site.shareTitle ?? site.name;
    document.title = title;
    setMeta('meta[name="description"]', "content", site.shareDescription);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", site.shareDescription);
    setMeta('meta[property="og:image"]', "content", site.shareImage);
    setMeta('meta[name="twitter:description"]', "content", site.shareDescription);
    setMeta('meta[name="twitter:title"]', "content", title);
  }, []);

  return null;
}
