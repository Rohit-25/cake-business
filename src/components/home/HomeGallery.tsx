import { Link } from "react-router-dom";
import { studio } from "../../copy/studio";
import { site } from "../../config/site";
import { getHomeGalleryCakes } from "../../data/cakes";
import { planHref } from "../gallery/CakeCard";
import { CakeImage } from "../CakeImage";
import { SectionIntro } from "./SectionIntro";

export function HomeGallery() {
  const gallery = getHomeGalleryCakes();
  if (gallery.length === 0) return null;

  return (
    <section className="border-t border-stone/60 bg-card/40 section-pad" aria-labelledby="studio-gallery-heading">
      <div className="mx-auto max-w-content overflow-hidden">
        <SectionIntro
          id="studio-gallery-heading"
          title={studio.sections.homeGallery}
          lead={studio.sections.homeGalleryLead}
        />

        <div
          className="mt-14 snap-x snap-mandatory overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:thin]"
          aria-label="Cake creations from the studio"
        >
          <ul className="flex w-max min-w-0 gap-3 pr-5 sm:gap-5 sm:pr-0">
            {gallery.map((cake) => (
              <li
                key={cake.id}
                className="w-[calc((100vw-2.5rem)*0.72)] max-w-[280px] shrink-0 snap-start sm:w-[280px]"
              >
                <Link to={planHref(cake)} className="group block">
                  <div className="editorial-image aspect-[3/4]">
                    <CakeImage
                      src={cake.image}
                      alt={cake.imageAlt}
                      fallbackLabel={cake.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa group-hover:text-chocolate">{cake.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-chocolate hover:underline"
          >
            {studio.sections.followOnInstagram}
          </a>
          <Link to="/gallery" className="btn-secondary">
            {studio.sections.viewGallery}
          </Link>
        </div>
      </div>
    </section>
  );
}
