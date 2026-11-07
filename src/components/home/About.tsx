import { studio } from "../../copy/studio";
import { site } from "../../config/site";
import { CakeImage } from "../CakeImage";
import { SectionIntro } from "./SectionIntro";

function StoryCopy({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-display text-3xl text-chocolate sm:text-4xl">I’m {site.baker}</p>
      {site.aboutBody.map((paragraph) => (
        <p key={paragraph.slice(0, 32)} className="mt-6 text-base leading-relaxed text-cocoa sm:text-lg">
          {paragraph}
        </p>
      ))}
      <p className="mt-6 text-sm leading-relaxed text-cocoa">{site.advanceNote}</p>
    </div>
  );
}

export function About() {
  const portrait = site.bakerPortrait;

  return (
    <section
      id="story"
      className="scroll-mt-24 border-t border-stone/60 bg-card/30 section-pad"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-content">
        <SectionIntro id="about-heading" title={studio.sections.story} />

        {portrait ? (
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="editorial-image mx-auto aspect-[4/5] w-full max-w-sm lg:mx-0 lg:max-w-none">
              <CakeImage
                src={portrait.src}
                alt={portrait.alt}
                fallbackLabel={portrait.fallbackLabel}
                className="h-full w-full object-cover"
              />
            </div>
            <StoryCopy className="text-center lg:text-left" />
          </div>
        ) : (
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <StoryCopy />
          </div>
        )}
      </div>
    </section>
  );
}
