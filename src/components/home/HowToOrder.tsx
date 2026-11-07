import { studio } from "../../copy/studio";
import { SectionIntro } from "./SectionIntro";

const steps = [
  {
    number: "01",
    title: "Tell me the occasion",
    body: "A birthday, a wedding, a child’s party, or a cake just for home.",
  },
  {
    number: "02",
    title: "Send the date and the place",
    body: "Add how many people, and anything you already picture — colours, words, or a cake of mine you liked.",
  },
  {
    number: "03",
    title: "I’ll take it from there",
    body: "I’ll confirm the design, delivery, and price. A message does not place the order.",
  },
];

export function HowToOrder() {
  return (
    <section id="order" className="scroll-mt-24 section-pad" aria-labelledby="planning-heading">
      <div className="mx-auto max-w-content">
        <SectionIntro
          id="planning-heading"
          title={studio.sections.howToOrder}
          lead="You tell me about the celebration. I’ll get back to you to confirm the details."
        />

        <ol className="mt-14 grid gap-0 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="border-t border-stone px-0 py-8 md:border-l md:border-t-0 md:px-8 md:first:border-l-0">
              <p className="font-display text-3xl text-blush">{step.number}</p>
              <h3 className="mt-4 font-display text-xl text-chocolate sm:text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cocoa">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
