import { Link } from "react-router-dom";
import { studio } from "../../copy/studio";
import { homeOccasions, occasionLabels } from "../../data/cakes";
import { SectionIntro } from "./SectionIntro";

const notes: Record<(typeof homeOccasions)[number], string> = {
  birthday: "A cake with a name, an age, or a colour you love.",
  engagement: "For an engagement, a wedding, or a day you want to remember.",
  kids: "A theme, a character, or something playful for a little one.",
  simple: "A quiet cake for home, with the words you want on top.",
};

export function Categories() {
  return (
    <section className="border-t border-stone/60 section-pad" aria-labelledby="occasion-heading">
      <div className="mx-auto max-w-content">
        <SectionIntro id="occasion-heading" title={studio.sections.occasions} />

        <div className="mt-14 grid gap-0 sm:grid-cols-2">
          {homeOccasions.map((occasion) => (
            <div key={occasion} className="border-t border-stone px-0 py-8 sm:px-6 lg:px-8">
              <h3 className="font-display text-2xl text-chocolate sm:text-3xl">{occasionLabels[occasion]}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cocoa">{notes[occasion]}</p>
              <Link
                to={`/plan?occasion=${encodeURIComponent(occasionLabels[occasion])}`}
                className="mt-5 inline-block text-sm tracking-wide text-chocolate hover:underline"
              >
                {studio.occasionCta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
