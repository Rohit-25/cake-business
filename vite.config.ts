import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { resolveClient, resolveTenantId } from "./tenants/resolve";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const tenant = resolveTenantId(env.VITE_TENANT);
  const site = resolveClient(tenant);
  const shareTitle = site.shareTitle ?? site.name;
  const publicBase = (env.VITE_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
  const shareImage = publicBase ? `${publicBase}${site.shareImage}` : site.shareImage;
  const favicon = site.favicon ?? "/favicon.svg";

  return {
    plugins: [
      react(),
      {
        name: "tenant-html-meta",
        transformIndexHtml(html) {
          let out = html
            .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(shareTitle)}</title>`)
            .replace(
              /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
              `<meta name="description" content="${escapeHtml(site.shareDescription)}" />`,
            )
            .replace(
              /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
              `<meta property="og:title" content="${escapeHtml(shareTitle)}" />`,
            )
            .replace(
              /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
              `<meta property="og:description" content="${escapeHtml(site.shareDescription)}" />`,
            )
            .replace(
              /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
              `<meta property="og:image" content="${escapeHtml(shareImage)}" />`,
            )
            .replace(
              /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/>/,
              `<meta property="og:image:alt" content="${escapeHtml(shareTitle)}" />`,
            )
            .replace(
              /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
              `<meta name="twitter:title" content="${escapeHtml(shareTitle)}" />`,
            )
            .replace(
              /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
              `<meta name="twitter:description" content="${escapeHtml(site.shareDescription)}" />`,
            )
            .replace(/<link rel="icon"[^>]*\/>/, `<link rel="icon" href="${favicon}" />`);
          return out;
        },
      },
    ],
  };
});
