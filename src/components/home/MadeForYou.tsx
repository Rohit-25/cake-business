import { Link } from "react-router-dom";
import { studio } from "../../copy/studio";
import { site } from "../../config/site";
import { SectionIntro } from "./SectionIntro";

export function MadeForYou() {
  return (
    <section className="section-pad" aria-labelledby="custom-heading">
      <div className="mx-auto max-w-content">
        <SectionIntro
          id="custom-heading"
          title={studio.sections.madeForYou}
          lead={studio.sections.madeForYouLead}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="border-l border-stone pl-8">
            <p className="font-display text-3xl leading-snug text-chocolate sm:text-4xl">
              Your celebration, your details—shaped in conversation.
            </p>
            <p className="mt-6 text-base leading-relaxed text-cocoa">
              When you create your cake, you’ll share the occasion, date, place, and guest count. Nothing is confirmed
              until we reply with design, delivery, and price.
            </p>
            <p className="mt-4 text-sm text-cocoa">{site.advanceNote}</p>
            <Link to="/plan" className="btn-primary mt-8">
              {studio.sectionPlan}
            </Link>
          </div>

          <ol className="divide-y divide-stone border border-stone">
            {site.customizationLines.map((line, index) => (
              <li key={line.slice(0, 24)} className="flex gap-6 px-6 py-7 sm:px-8">
                <span className="font-display text-3xl tabular-nums text-blush" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-base leading-relaxed text-cocoa">{line}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
