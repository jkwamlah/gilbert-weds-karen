import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { venues } from "./data";
import { CarIcon, MapPinIcon, PhoneIcon } from "./Icons";

const venueImages = [
  "/assets/images/kingdom-hall.png",
  "/assets/images/event-center.png",
];

export function Venue() {
  return (
    <section id="venue" className="section-padding bg-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Venue & Directions"
          title="Where we'll celebrate"
          description="Two settings, one celebration — please plan to arrive a little early."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {venues.map((v, idx) => (
            <article key={v.label} className="soft-card overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={venueImages[idx]}
                  alt={v.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-ivory/90 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-burnt backdrop-blur">
                  {v.label}
                </div>
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="font-serif text-2xl text-charcoal sm:text-3xl">{v.name}</h3>
                <ul className="mt-5 space-y-3 text-sm text-charcoal/80">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                    <span>{v.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CarIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                    <span>{v.parking}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                    <a href={`tel:${v.contact.replace(/[^0-9+]/g, "")}`} className="hover:text-burnt">{v.contact}</a>
                  </li>
                </ul>
                {v.directionsUrl && (
                  <a
                    href={v.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-burnt/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-burnt transition hover:bg-burnt hover:text-ivory"
                  >
                    Get Directions
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
