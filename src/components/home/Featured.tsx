import { Link } from "react-router-dom";
import { studio } from "../../copy/studio";
import { getSignatureCakes } from "../../data/cakes";
import { planHref } from "../gallery/CakeCard";
import { CakeImage } from "../CakeImage";
import { SectionIntro } from "./SectionIntro";

export function Featured() {
  const signature = getSignatureCakes();
  if (signature.length === 0) return null;

  const [hero, ...rest] = signature;

  return (
    <section className="section-pad" aria-labelledby="signature-heading">
      <div className="mx-auto max-w-content">
        <SectionIntro id="signature-heading" title={studio.sections.signature} lead={studio.sections.signatureLead} />
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-cocoa">
          {studio.sections.signatureDetail}
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Link
            to={planHref(hero)}
            className="group block lg:col-span-7"
            aria-label={`View ${hero.title}`}
          >
            <div className="editorial-image aspect-[4/5] lg:aspect-[5/6]">
              <CakeImage
                src={hero.image}
                alt={hero.imageAlt}
                fallbackLabel={hero.title}
                eager
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-5 font-display text-2xl text-chocolate sm:text-3xl">{hero.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-cocoa">{hero.description}</p>
          </Link>

          <div className="flex flex-col gap-8 lg:col-span-5 lg:justify-center">
            {rest.map((cake) => (
              <Link key={cake.id} to={planHref(cake)} className="group grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-5 border-t border-stone pt-8">
                <div className="editorial-image aspect-[3/4]">
                  <CakeImage
                    src={cake.image}
                    alt={cake.imageAlt}
                    fallbackLabel={cake.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-xl text-chocolate sm:text-2xl">{cake.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa">{cake.description}</p>
                  <span className="mt-3 text-sm text-chocolate group-hover:underline">{studio.plan.enquireLink}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
