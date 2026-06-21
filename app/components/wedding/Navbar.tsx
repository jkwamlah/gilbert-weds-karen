import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "./Icons";

const links = [
  { id: "story", label: "Our Story" },
  { id: "program", label: "Program" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Gallery" },
  { id: "gift", label: "Gift" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  onCopyZoomDetails: () => void;
  onJoinZoom: () => void;
  zoomActive: boolean;
}

const zoomButtonClassName = [
  "rounded-full bg-burnt px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] text-ivory transition",
  "enabled:hover:bg-burnt/90 disabled:cursor-not-allowed disabled:opacity-50",
].join(" ");

export function Navbar({ onCopyZoomDetails, onJoinZoom, zoomActive }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...links.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const headerClassName = [
    "fixed inset-x-0 top-0 z-40 transition-all duration-500",
    scrolled
      ? "border-b border-sage/20 bg-ivory/85 backdrop-blur-lg"
      : "bg-transparent",
  ].join(" ");

  return (
    <header
      className={headerClassName}
    >
      <div className="container-narrow flex items-center justify-between px-5 py-4 md:py-5">
        <button
          onClick={() => scrollTo("hero")}
          className="font-serif text-lg tracking-wide text-charcoal md:text-xl"
        >
          <span className="text-burnt">G</span>ILREN26
        </button>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={[
                "relative text-[13px] uppercase tracking-[0.18em] transition-colors",
                active === l.id
                  ? "text-burnt"
                  : "text-charcoal/70 hover:text-charcoal",
              ].join(" ")}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute -bottom-1.5 left-1/2 h-px w-6 -translate-x-1/2 bg-burnt" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={onJoinZoom}
            disabled={!zoomActive}
            className={zoomButtonClassName}
          >
            Join on Zoom
          </button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-full p-2 text-charcoal"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-sage/20 bg-ivory/95 backdrop-blur lg:hidden animate-fade-up">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="rounded-xl px-3 py-3 text-left text-sm uppercase tracking-[0.18em] text-charcoal/80 hover:bg-blush-soft/60"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onCopyZoomDetails();
              }}
              className="mt-2 rounded-full bg-burnt px-5 py-3 text-xs uppercase tracking-[0.2em] text-ivory"
            >
              Copy Zoom Details
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
