import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "../../config/site";

const hashLinks = [
  { label: "About", to: "/#about" },
  { label: "Visit", to: "/#visit" },
];

function navClass(active: boolean) {
  return `text-sm ${active ? "text-chocolate" : "text-cocoa hover:text-chocolate"}`;
}

const planLink =
  "inline-flex items-center justify-center rounded-full bg-chocolate px-4 py-2 text-sm text-ivory hover:bg-[#3a2d22] sm:px-5";

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
    <header className="sticky top-0 z-40 border-b border-stone bg-ivory">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <Link to="/" className="font-display text-lg leading-none text-chocolate sm:text-[1.4rem]">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => navClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => navClass(isActive)}>
            Cakes
          </NavLink>
          {hashLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm text-cocoa hover:text-chocolate">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/plan" className={planLink}>
            Plan your cake
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone lg:hidden"
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
            Cakes
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
