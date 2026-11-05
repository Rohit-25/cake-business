import { site } from "../../config/site";

export function Locations() {
  return (
    <section id="visit" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-16 sm:px-8 lg:pb-24" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto h-px w-10 bg-blush" />
        <h2 id="visit-heading" className="mt-5 font-display text-4xl text-chocolate sm:text-5xl">
          Where I can bring the cake
        </h2>
        <p className="mt-4 text-base leading-relaxed text-cocoa">
          I’ll confirm delivery for your cake and your place. These are the areas I already share.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-2">
        <div className="border-t border-stone pt-6">
          <h3 className="font-display text-2xl text-chocolate">Free delivery</h3>
          <p className="mt-3 text-sm leading-relaxed text-cocoa">{site.freeDelivery.join(" and ")}</p>
        </div>
        <div className="border-t border-stone pt-6">
          <h3 className="font-display text-2xl text-chocolate">A small delivery charge</h3>
          <p className="mt-3 text-sm leading-relaxed text-cocoa">{site.smallChargeDelivery.join(", ")}</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-cocoa">
        For anywhere else, including further across Tamil Nadu or Bangalore, tell me the place. I confirm
        whether I can deliver that cake. Not every cake travels the same way.
      </p>
    </section>
  );
}
