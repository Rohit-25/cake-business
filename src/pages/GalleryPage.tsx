import { CakeCard } from "../components/gallery/CakeCard";
import { studio } from "../copy/studio";
import { usePageTitle } from "../lib/usePageTitle";
import { cakes } from "../data/cakes";

export function GalleryPage() {
  usePageTitle(studio.galleryPage.title);

  return (
    <section className="mx-auto max-w-content section-pad">
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-rule" aria-hidden="true" />
        <h1 className="section-title mt-6">{studio.galleryPage.title}</h1>
        <p className="mt-5 text-base leading-relaxed text-cocoa">{studio.galleryPage.lead}</p>
      </div>
      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
    </section>
  );
}
