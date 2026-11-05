import { Link } from "react-router-dom";
import { usePageTitle } from "../lib/usePageTitle";

export function NotFoundPage() {
  usePageTitle("Page not found");

  return (
    <section className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
      <h1 className="font-display text-5xl text-chocolate">This page isn’t here</h1>
      <p className="mt-4 text-base leading-relaxed text-cocoa">
        You can look through my cakes, or tell me about the celebration you have in mind.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/plan"
          className="inline-flex items-center justify-center rounded-full bg-chocolate px-6 py-3 text-sm text-ivory"
        >
          Plan your cake
        </Link>
        <Link to="/gallery" className="text-sm text-chocolate">
          See her cakes
        </Link>
      </div>
    </section>
  );
}
