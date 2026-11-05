import { CakeCard } from "../components/gallery/CakeCard";
import { cakes } from "../data/cakes";
import { usePageTitle } from "../lib/usePageTitle";

export function GalleryPage() {
  usePageTitle("Her cakes");

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-5xl text-chocolate sm:text-6xl">Find a little inspiration from my cakes</h1>
        <p className="mt-5 text-base leading-relaxed text-cocoa">
          Each of these was made for someone else’s celebration. If one of them feels close, tell me what you’d like instead.
        </p>
      </div>
      <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
    </section>
  );
}
