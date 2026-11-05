import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { deliveryPlaces, site } from "../config/site";
import {
  getCake,
  inspirationLine,
  occasionLabels,
  occasions,
  peopleOptions,
  readOccasion,
  type Occasion,
} from "../data/cakes";
import { buildCakeMessage } from "../lib/message";
import { usePageTitle } from "../lib/usePageTitle";
import { getWhatsAppUrl } from "../lib/whatsapp";

const fieldClass =
  "mt-3 w-full rounded-2xl border border-stone bg-card px-4 py-3 text-base text-chocolate outline-none";

export function PlanPage() {
  usePageTitle("Plan your cake");
  const [params] = useSearchParams();
  const occasionParam = params.get("occasion") ?? "";
  const inspirationId = params.get("inspiration") ?? "";
  const cake = getCake(inspirationId);

  const [occasion, setOccasion] = useState<Occasion | "">(readOccasion(occasionParam));
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [people, setPeople] = useState("");
  const [idea, setIdea] = useState(cake ? inspirationLine(cake) : "");
  const [copied, setCopied] = useState(false);
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    const nextOccasion = readOccasion(occasionParam);
    if (nextOccasion) setOccasion(nextOccasion);
    if (cake) setIdea(inspirationLine(cake));
  }, [occasionParam, inspirationId, cake]);

  const message = useMemo(
    () => buildCakeMessage({ occasion, date, place, people, idea }),
    [occasion, date, place, people, idea],
  );

  const ready = Boolean(occasion && date && place);
  const whatsappUrl = ready ? getWhatsAppUrl(message) : null;

  async function copyMessage() {
    if (!ready) {
      setAttempted(true);
      return;
    }
    await navigator.clipboard.writeText(message);
    setCopied(true);
  }

  function onSendClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!ready) {
      event.preventDefault();
      setAttempted(true);
    }
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:py-20">
      <div>
        <h1 className="font-display text-5xl leading-tight text-chocolate sm:text-6xl">Tell me about your celebration</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cocoa">
          A few details will help me understand the cake you have in mind.
        </p>

        <form className="mt-12 space-y-10" onSubmit={(event) => event.preventDefault()}>
          <fieldset>
            <legend className="font-display text-2xl text-chocolate">What are we celebrating?</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {occasions.map((item) => {
                const selected = occasion === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setOccasion(item)}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      selected ? "border-chocolate bg-chocolate text-ivory" : "border-stone bg-card text-chocolate"
                    }`}
                  >
                    {occasionLabels[item]}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="block">
            <span className="font-display text-2xl text-chocolate">When should I have it ready?</span>
            <input className={fieldClass} type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>

          <label className="block">
            <span className="font-display text-2xl text-chocolate">Where will the celebration be?</span>
            <select className={fieldClass} value={place} onChange={(event) => setPlace(event.target.value)}>
              <option value="">Choose a place</option>
              {deliveryPlaces.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <fieldset>
            <legend className="font-display text-2xl text-chocolate">How many people are you planning for?</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {peopleOptions.map((item) => {
                const selected = people === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setPeople(item)}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      selected ? "border-chocolate bg-chocolate text-ivory" : "border-stone bg-card text-chocolate"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="block">
            <span className="font-display text-2xl text-chocolate">Tell me what you have in mind</span>
            <span className="mt-1 block text-sm text-cocoa">Optional. Colours, words on the cake, or a cake of mine you liked.</span>
            <textarea
              className={`${fieldClass} min-h-32 resize-y`}
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
            />
          </label>
        </form>
      </div>

      <aside className="lg:pt-4">
        <div className="border-t border-stone pt-8 lg:sticky lg:top-28">
          <h2 className="font-display text-3xl text-chocolate">Your message to {site.baker}</h2>
          <p className="mt-6 text-base leading-relaxed text-chocolate">{message}</p>
          <p className="mt-6 text-sm leading-relaxed text-cocoa">
            I’ll get back to you to confirm the details. That includes availability, the design, delivery, and the price. Sending this message does not place the order.
          </p>

          {attempted && !ready && (
            <p className="mt-4 text-sm text-chocolate">Please add the occasion, the date, and the place.</p>
          )}

          <div className="mt-8 flex flex-col items-start gap-4">
            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onSendClick}
                className="inline-flex items-center justify-center rounded-full bg-chocolate px-6 py-3 text-sm text-ivory hover:bg-[#3a2d22]"
              >
                Send my cake idea to Ssruthi
              </a>
            ) : (
              <button
                type="button"
                onClick={() => void copyMessage()}
                className="inline-flex items-center justify-center rounded-full bg-chocolate px-6 py-3 text-sm text-ivory hover:bg-[#3a2d22]"
              >
                {copied ? "Copied" : "Copy message"}
              </button>
            )}
            <Link to="/gallery" className="text-sm text-chocolate">
              Look at her cakes again
            </Link>
          </div>
        </div>
      </aside>
    </section>
  );
}
