import { Link } from "react-router-dom";
import { homeOccasions, occasionLabels } from "../../data/cakes";

const notes: Record<(typeof homeOccasions)[number], string> = {
  birthday: "A cake with a name, an age, or a colour you love.",
  engagement: "For an engagement, a wedding, or a day you want to remember.",
  kids: "A theme, a character, or something playful for a little one.",
  simple: "A quiet cake for home, with the words you want on top.",
};

export function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24" aria-labelledby="occasion-heading">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto h-px w-10 bg-blush" />
        <h2 id="occasion-heading" className="mt-5 font-display text-4xl text-chocolate sm:text-5xl">
          What are we celebrating?
        </h2>
      </div>
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {homeOccasions.map((occasion) => (
          <div key={occasion} className="border-t border-stone pt-6">
            <h3 className="font-display text-3xl text-chocolate">{occasionLabels[occasion]}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cocoa">{notes[occasion]}</p>
            <Link
              to={`/plan?occasion=${encodeURIComponent(occasionLabels[occasion])}`}
              className="mt-4 inline-block text-sm text-chocolate"
            >
              Plan this cake
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
