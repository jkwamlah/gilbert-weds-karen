import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { XIcon } from "./Icons";

const items = [
  { src: "/assets/images/dark-onlooking.jpeg", span: "row-span-2", label: "Engagement" },
  { src: "/assets/images/white.jpeg", span: "", label: "Pre-wedding" },
  { src: "/assets/images/dark-kiss.jpeg", span: "", label: "Reception" },
  { src: "/assets/images/white-romantic.jpeg", span: "row-span-2", label: "Ceremony" },
  { src: "/assets/images/dark-comfort.jpeg", span: "", label: "First Dance" },
  { src: "/assets/images/white-funny.jpeg", span: "", label: "Sweet Details" },
  {
    src: "/assets/images/white-old-school.jpeg",
    span: "hidden md:block",
    label: "Old School",
  },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-ivory">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments along the way"
          description="A collection of frames from the chapters that brought us here."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[240px] sm:gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setActive(it.src)}
              className={`group relative overflow-hidden rounded-2xl border border-sage/15 ${it.span}`}
            >
              <Image
                src={it.src}
                alt={it.label}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.3em] text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {it.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm animate-fade-up"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full bg-ivory/15 p-2 text-ivory hover:bg-ivory/25"
            onClick={() => setActive(null)}
          >
            <XIcon className="h-5 w-5" />
          </button>
          <Image
            src={active}
            alt="Gallery preview"
            width={1400}
            height={1800}
            sizes="95vw"
            className="max-h-[88vh] max-w-[95vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
