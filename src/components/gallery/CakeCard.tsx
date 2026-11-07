import { Link } from "react-router-dom";
import { studio } from "../../copy/studio";
import type { Cake } from "../../data/cakes";
import { occasionLabels } from "../../data/cakes";
import { CakeImage } from "../CakeImage";

export function planHref(cake: Cake) {
  const params = new URLSearchParams({
    occasion: occasionLabels[cake.occasion],
    inspiration: cake.id,
  });
  return `/plan?${params.toString()}`;
}

export function CakeCard({ cake }: { cake: Cake }) {
  return (
    <article className="group">
      <Link to={planHref(cake)} className="block" aria-label={cake.title}>
        <div className="editorial-image aspect-[4/5]">
          <CakeImage
            src={cake.image}
            alt={cake.imageAlt}
            fallbackLabel={cake.title}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <h3 className="mt-5 font-display text-xl leading-tight text-chocolate sm:text-2xl">{cake.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cocoa">{cake.description}</p>
      <Link to={planHref(cake)} className="mt-4 inline-block text-sm tracking-wide text-chocolate hover:underline">
        {studio.plan.enquireLink}
      </Link>
    </article>
  );
}
