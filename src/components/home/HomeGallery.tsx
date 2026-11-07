import { Link } from "react-router-dom";
import { studio } from "../../copy/studio";
import { getHomeGalleryCakes } from "../../data/cakes";
import { planHref } from "../gallery/CakeCard";
import { CakeImage } from "../CakeImage";
import { SectionIntro } from "./SectionIntro";

export function HomeGallery() {
  const gallery = getHomeGalleryCakes();
  if (gallery.length === 0) return null;

  return (
    <section className="border-t border-stone/60 bg-card/40 section-pad" aria-labelledby="studio-gallery-heading">
      <div className="mx-auto max-w-content">
        <SectionIntro
          id="studio-gallery-heading"
          title={studio.sections.homeGallery}
          lead={studio.sections.homeGalleryLead}
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {gallery.map((cake) => (
            <Link key={cake.id} to={planHref(cake)} className="group block">
              <div className="editorial-image aspect-[3/4]">
                <CakeImage
                  src={cake.image}
                  alt={cake.imageAlt}
                  fallbackLabel={cake.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 font-display text-base leading-snug text-chocolate sm:text-lg">{cake.title}</p>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center">
          <Link to="/gallery" className="btn-secondary">
            {studio.sections.viewGallery}
          </Link>
        </p>
      </div>
    </section>
  );
}
