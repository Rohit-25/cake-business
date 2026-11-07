import { client as kcakesClient } from "../../tenants/kcakes-dublin/client";
import { client as ssruthiClient } from "../../tenants/ssruthi/client";
import { cakes as kcakesCakes } from "../../tenants/kcakes-dublin/cakes";
import { cakes as ssruthiCakes } from "../../tenants/ssruthi/cakes";

const tenant = import.meta.env.VITE_TENANT === "kcakes-dublin" ? "kcakes-dublin" : "ssruthi";

export const site = tenant === "kcakes-dublin" ? kcakesClient : ssruthiClient;

export const deliveryPlaces = site.deliveryPlaces;

export type DeliveryPlace = (typeof deliveryPlaces)[number];

export const cakes = tenant === "kcakes-dublin" ? kcakesCakes : ssruthiCakes;

export function hasWhatsAppContact(): boolean {
  return site.whatsappNumber.replace(/\D/g, "").length >= 8;
}
