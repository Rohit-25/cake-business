import { site } from "../../config/site";
import { SectionIntro } from "./SectionIntro";

export function Locations() {
  return (
    <section id="visit" className="scroll-mt-24 section-pad" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-content">
        <SectionIntro
          id="visit-heading"
          title="Where I can bring the cake"
          lead="I’ll confirm delivery for your cake and your place. These are the areas I already share."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2">
          <div className="border-t border-stone pt-6">
            <h3 className="font-display text-2xl text-chocolate">Free delivery</h3>
            <p className="mt-3 text-sm leading-relaxed text-cocoa">{site.freeDelivery.join(" and ")}</p>
          </div>
          <div className="border-t border-stone pt-6">
            <h3 className="font-display text-2xl text-chocolate">A small delivery charge</h3>
            <p className="mt-3 text-sm leading-relaxed text-cocoa">{site.smallChargeDelivery.join(", ")}</p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-cocoa">{site.locationsExtra}</p>
      </div>
    </section>
  );
}
