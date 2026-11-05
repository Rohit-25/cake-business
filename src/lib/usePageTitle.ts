import { useEffect } from "react";
import { site } from "../config/site";

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} · ${site.name}` : site.name;
  }, [page]);
}
