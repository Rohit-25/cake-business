import { Link } from "react-router-dom";
import { studio } from "../../copy/studio";
import { site } from "../../config/site";
import { CakeImage } from "../CakeImage";

export function Hero() {
  const feature = site.heroFeature ?? site.heroImages.mobile;

  return (
    <section className="border-b border-stone/60 bg-ivory">
      <div className="mx-auto max-w-content section-pad pb-16 pt-6 lg:pb-24 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cocoa">{site.town}</p>
            <h1 className="mt-4 font-display text-[2.5rem] leading-[1.08] tracking-tight text-chocolate sm:text-6xl lg:text-[3.75rem]">
              {site.heroHeadline[0]}
              <span className="mt-2 block">{site.heroHeadline[1]}</span>
            </h1>
            {site.heroBody.map((paragraph) => (
              <p key={paragraph.slice(0, 28)} className="mt-5 text-base leading-relaxed text-cocoa sm:text-lg">
                {paragraph}
              </p>
            ))}
            <p className="mt-3 text-sm leading-relaxed text-cocoa">{site.advanceNote}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/plan" className="btn-primary">
                {studio.heroPrimary}
              </Link>
              <Link to="/gallery" className="btn-secondary">
                {studio.heroSecondary}
              </Link>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cocoa">{studio.ctaReassurance}</p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="editorial-image aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
              <CakeImage
                src={feature.src}
                alt={feature.alt}
                fallbackLabel={feature.fallbackLabel}
                eager
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
