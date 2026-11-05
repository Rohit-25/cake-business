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
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:pb-24" aria-labelledby="planning-heading">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto h-px w-10 bg-blush" />
        <h2 id="planning-heading" className="mt-5 font-display text-4xl text-chocolate sm:text-5xl">
          How we plan your cake
        </h2>
        <p className="mt-4 text-base leading-relaxed text-cocoa">
          You tell me about the celebration. I’ll get back to you to confirm the details.
        </p>
      </div>
      <ol className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <li key={step.number} className="border-t border-stone pt-6">
            <p className="font-display text-3xl text-blush">{step.number}</p>
            <h3 className="mt-4 font-display text-2xl text-chocolate">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cocoa">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
