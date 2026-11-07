import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { studio } from "../../copy/studio";
import { site } from "../../config/site";

export function Footer() {
  return (
    <footer className="border-t border-stone">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-chocolate">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cocoa">{site.footerTagline}</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-chocolate">Delivery</p>
          <p className="mt-3 text-sm leading-relaxed text-cocoa">
            Free in {site.freeDelivery.join(" and ")}. A small charge for {site.smallChargeDelivery.join(", ")}.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cocoa">{site.advanceNote}</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-chocolate">Enquire</p>
          <Link to="/plan" className="btn-primary mt-3">
            {studio.primaryCta}
          </Link>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 text-sm text-chocolate"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-stone">
        <p className="mx-auto max-w-content px-5 py-5 text-sm leading-relaxed text-cocoa sm:px-8">
          I’ll get back to you to confirm the details. Sending a message does not place an order, and this page does not
          take payment.
        </p>
      </div>
    </footer>
  );
}
