import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../../config/site";

export function InstagramBlock() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20 sm:px-8 lg:pb-28" aria-labelledby="contact-heading">
      <div className="px-2 py-4 text-center sm:px-8">
        <div className="mx-auto h-px w-10 bg-blush" />
        <h2 id="contact-heading" className="mt-5 font-display text-4xl text-chocolate sm:text-5xl">
          Tell me about your celebration
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cocoa">
          A few details are enough to start. I’ll get back to you to confirm the design, the date, and the price.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/plan"
            className="inline-flex items-center justify-center rounded-full bg-chocolate px-6 py-3 text-sm text-ivory hover:bg-[#3a2d22]"
          >
            Plan your cake
          </Link>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-stone bg-card px-6 py-3 text-sm text-chocolate hover:border-chocolate/40"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
