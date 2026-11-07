import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { studio } from "../../copy/studio";
import { site } from "../../config/site";

const hashLinks = [
  { label: "Story", to: "/#story" },
  { label: "Order", to: "/#order" },
];

function navClass(active: boolean) {
  return `text-sm tracking-wide ${active ? "text-chocolate" : "text-cocoa hover:text-chocolate"}`;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-ivory/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="flex min-w-0 flex-1 items-center gap-3 pr-2 lg:flex-initial"
          aria-label={site.name}
        >
          {site.logoUrl ? (
            <img
              src={site.logoUrl}
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 shrink-0 rounded-full border border-stone/80 bg-card object-contain p-1 sm:h-12 sm:w-12 sm:p-1.5"
            />
          ) : (
            <span className="font-display text-base leading-snug text-chocolate sm:text-[1.35rem] sm:leading-none">
              {site.name}
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => navClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => navClass(isActive)}>
            Creations
          </NavLink>
          {hashLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm tracking-wide text-cocoa hover:text-chocolate">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/plan"
            className="btn-primary hidden whitespace-nowrap px-4 py-2.5 text-sm sm:inline-flex sm:px-5"
            aria-label="Plan a cake — enquiry form"
          >
            {studio.headerCta}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-stone lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" hidden={!open} className="border-t border-stone px-5 py-4 lg:hidden" aria-label="Mobile">
        <div className="flex flex-col">
          <Link to="/plan" className="btn-primary w-full">
            {studio.headerCta}
          </Link>
          <NavLink to="/" end className="py-3 text-base">
            Home
          </NavLink>
          <NavLink to="/gallery" className="py-3 text-base">
            Creations
          </NavLink>
          {hashLinks.map((link) => (
            <Link key={link.to} to={link.to} className="py-3 text-base">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
