import { Link } from "react-router-dom";
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
    <article>
      <div className="overflow-hidden rounded-2xl bg-[#EFE8DC]">
        <div className="aspect-[4/5]">
          <CakeImage
            src={cake.image}
            alt={cake.imageAlt}
            fallbackLabel={cake.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <h3 className="mt-5 font-display text-2xl leading-tight text-chocolate">{cake.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cocoa">{cake.description}</p>
      <Link to={planHref(cake)} className="mt-4 inline-block text-sm text-chocolate">
        I’d like something like this
      </Link>
    </article>
  );
}
