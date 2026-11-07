import { site } from "../config/site";
import type { Occasion } from "../data/cakes";

type MessageInput = {
  occasion: Occasion | "";
  date: string;
  place: string;
  people: string;
  idea: string;
};

function cakePhrase(occasion: Occasion) {
  switch (occasion) {
    case "birthday":
      return "a birthday cake";
    case "engagement":
      return "an engagement or wedding cake";
    case "anniversary":
      return "an anniversary cake";
    case "kids":
      return "a kids-theme cake";
    case "simple":
      return "a simple cake";
  }
}

function peoplePhrase(people: string) {
  if (people === "A small cake") return { inline: "for a small celebration", extra: "" };
  if (people === "About 10 people") return { inline: "for about 10 people", extra: "" };
  if (people === "About 20 people") return { inline: "for about 20 people", extra: "" };
  if (people === "More than 20 people") return { inline: "for more than 20 people", extra: "" };
  if (people === "Not sure yet") return { inline: "", extra: "I'm not sure of the size yet." };
  return { inline: "", extra: "" };
}

export function formatCakeDate(iso: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function buildCakeMessage({ occasion, date, place, people, idea }: MessageInput) {
  const kind = occasion ? cakePhrase(occasion) : "a cake";
  let message = `Hi ${site.baker}! I'd love to plan ${kind}.`;
  const when = date ? formatCakeDate(date) : "";
  const where = place.trim();
  const size = peoplePhrase(people);
  const sizeInline = size.inline ? `, ${size.inline}` : "";

  if (when && where) message += ` I need it on ${when}, in ${where}${sizeInline}.`;
  else if (when) message += ` I need it on ${when}${sizeInline}.`;
  else if (where) message += ` The celebration is in ${where}${sizeInline}.`;
  else if (size.inline) message += ` ${size.inline.charAt(0).toUpperCase()}${size.inline.slice(1)}.`;

  if (size.extra) message += ` ${size.extra}`;

  const thought = idea.trim().replace(/[.!?]+$/, "");
  if (thought) {
    message += ` I'm imagining ${thought.charAt(0).toLowerCase()}${thought.slice(1)}.`;
  }

  message += " Please let me know if it's possible!";
  return message;
}
