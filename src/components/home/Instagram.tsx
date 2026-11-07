import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { studio } from "../../copy/studio";
import { site } from "../../config/site";

export function InstagramBlock() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-stone bg-card/50 section-pad"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-content px-2 text-center sm:px-8">
        <div className="section-rule" aria-hidden="true" />
        <h2 id="contact-heading" className="section-title mt-6">
          {studio.sections.finalCta}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cocoa">{studio.sections.finalCtaLead}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/plan" className="btn-primary">
            {studio.primaryCta}
          </Link>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary gap-2"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
