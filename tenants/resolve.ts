import type { ClientConfig } from "../src/config/types";
import { client as bamClient } from "./customcakesbybam/client";
import { client as hunaaClient } from "./hunaa/client";
import { client as kcakesClient } from "./kcakes-dublin/client";
import { client as sonalikaClient } from "./sonalika/client";
import { client as ssruthiClient } from "./ssruthi/client";
import { client as sugarpopClient } from "./sugarpop-usa/client";

export type TenantId = "ssruthi" | "kcakes-dublin" | "customcakesbybam" | "sugarpop-usa" | "sonalika" | "hunaa";

export function resolveTenantId(raw: string | undefined): TenantId {
  if (
    raw === "kcakes-dublin" ||
    raw === "customcakesbybam" ||
    raw === "sugarpop-usa" ||
    raw === "sonalika" ||
    raw === "hunaa"
  ) {
    return raw;
  }
  return "ssruthi";
}

export function resolveClient(tenantId: TenantId): ClientConfig {
  switch (tenantId) {
    case "kcakes-dublin":
      return kcakesClient;
    case "customcakesbybam":
      return bamClient;
    case "sugarpop-usa":
      return sugarpopClient;
    case "sonalika":
      return sonalikaClient;
    case "hunaa":
      return hunaaClient;
    default:
      return ssruthiClient;
  }
}
