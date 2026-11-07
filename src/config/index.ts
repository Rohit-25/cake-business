import { resolveClient, resolveTenantId, type TenantId } from "../../tenants/resolve";
import { cakes as bamCakes } from "../../tenants/customcakesbybam/cakes";
import { cakes as kcakesCakes } from "../../tenants/kcakes-dublin/cakes";
import { cakes as sugarpopCakes } from "../../tenants/sugarpop-usa/cakes";
import { cakes as hunaaCakes } from "../../tenants/hunaa/cakes";
import { cakes as sonalikaCakes } from "../../tenants/sonalika/cakes";
import { cakes as ssruthiCakes } from "../../tenants/ssruthi/cakes";

const tenant: TenantId = resolveTenantId(import.meta.env.VITE_TENANT);

export const site = resolveClient(tenant);

export const deliveryPlaces = site.deliveryPlaces;

export type DeliveryPlace = (typeof deliveryPlaces)[number];

const cakesByTenant = {
  ssruthi: ssruthiCakes,
  "kcakes-dublin": kcakesCakes,
  customcakesbybam: bamCakes,
  "sugarpop-usa": sugarpopCakes,
  sonalika: sonalikaCakes,
  hunaa: hunaaCakes,
} as const;

export const cakes = cakesByTenant[tenant];

export function hasWhatsAppContact(): boolean {
  if (site.whatsappWaMePath) return true;
  return site.whatsappNumber.replace(/\D/g, "").length >= 8;
}
