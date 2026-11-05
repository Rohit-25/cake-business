import { site } from "../../config/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-16 sm:px-8 lg:pb-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto h-px w-10 bg-blush" />
        <h2 id="about-heading" className="mt-5 font-display text-4xl text-chocolate sm:text-5xl">
          I’m {site.baker}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-cocoa sm:text-lg">
          I bake from home in {site.town}. I make custom birthday and wedding cakes, tres leches,
          buttercream cakes, plum cakes, tea cakes, banana cake, carrot and dates cake, and brownies.
          The bakery is FSSAI registered.
        </p>
        <p className="mt-4 text-base leading-relaxed text-cocoa sm:text-lg">{site.advanceNote}</p>
      </div>
    </section>
  );
}
