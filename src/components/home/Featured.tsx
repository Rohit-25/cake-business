import { Link } from "react-router-dom";
import { cakes } from "../../data/cakes";
import { CakeCard } from "../gallery/CakeCard";

export function Featured() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-12" aria-labelledby="creations-heading">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto h-px w-10 bg-blush" />
        <h2 id="creations-heading" className="mt-5 font-display text-4xl text-chocolate sm:text-5xl">
          A few cakes I’ve made
        </h2>
        <p className="mt-4 text-base leading-relaxed text-cocoa">
          These were made for other celebrations. Yours can be different.
        </p>
      </div>
      <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {cakes.slice(0, 3).map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
      <p className="mt-12 text-center">
        <Link to="/gallery" className="text-sm text-chocolate">
          Find a little inspiration from my cakes
        </Link>
      </p>
    </section>
  );
}
