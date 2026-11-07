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
        <Link to="/" className="font-display text-lg leading-none text-chocolate sm:text-[1.35rem]">
          {site.name}
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

        <div className="flex items-center gap-2">
          <Link to="/plan" className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex">
            {studio.primaryCta}
          </Link>
          <Link to="/plan" className="btn-primary px-4 py-2.5 text-sm sm:hidden">
            Create
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-stone lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" hidden={!open} className="border-t border-stone px-5 py-2 lg:hidden" aria-label="Mobile">
        <div className="flex flex-col">
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
