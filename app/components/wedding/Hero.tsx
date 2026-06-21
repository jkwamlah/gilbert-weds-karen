import Image from "next/image";
import { couple } from "./data";
import { Countdown } from "./Countdown";

const heroImage = "/assets/images/hand-in-hand.jpeg";

interface HeroProps {
  onCopyZoomDetails: () => void;
  onGift: () => void;
  onJoinZoom: () => void;
  zoomActive: boolean;
}

export function Hero({ onCopyZoomDetails, onGift, onJoinZoom, zoomActive }: HeroProps) {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <Image
        src={heroImage}
        alt="Soft watercolor florals framing the page"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-ivory/70 via-ivory/40 to-ivory" />

      <div className="container-narrow flex min-h-svh flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <p className="eyebrow animate-fade-up">Together with our families</p>

        <h1
          className="mt-6 font-serif text-5xl leading-[1.05] text-charcoal sm:text-7xl md:text-[5.5rem] animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          {couple.groom}
          <span className="mx-3 inline-block text-burnt italic font-light">&amp;</span>
          {couple.bride}
        </h1>

        <div
          className="mt-7 flex items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <span className="h-px w-10 bg-burnt/60" />
          <span className="text-sm uppercase tracking-[0.35em] text-charcoal/80">
            {couple.date}
          </span>
          <span className="h-px w-10 bg-burnt/60" />
        </div>

        <p
          className="mt-7 max-w-xl text-base leading-relaxed text-charcoal/75 sm:text-lg animate-fade-up"
          style={{ animationDelay: "280ms" }}
        >
          {couple.welcome}
        </p>

        <div
          className="mt-10 w-full max-w-xl animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <Countdown iso={couple.dateISO} />
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "440ms" }}
        >
          <button
            onClick={onJoinZoom}
            disabled={!zoomActive}
            className="rounded-full bg-burnt px-7 py-3 text-xs uppercase tracking-[0.25em] text-ivory shadow-sm transition enabled:hover:-translate-y-0.5 enabled:hover:bg-burnt/90 disabled:cursor-not-allowed disabled:opacity-50 lg:hidden"
          >
            Join on Zoom
          </button>
          <button
            onClick={onCopyZoomDetails}
            className="hidden rounded-full bg-burnt px-7 py-3 text-xs uppercase tracking-[0.25em] text-ivory shadow-sm transition hover:-translate-y-0.5 hover:bg-burnt/90 lg:inline-flex"
          >
            Copy Zoom Details
          </button>
          <a
            href="#program"
            className="rounded-full border border-charcoal/25 bg-ivory/60 px-7 py-3 text-xs uppercase tracking-[0.25em] text-charcoal backdrop-blur transition hover:border-burnt hover:text-burnt"
          >
            View Program
          </a>
          <button
            onClick={onGift}
            className="rounded-full border border-sage/40 bg-sage-soft/40 px-7 py-3 text-xs uppercase tracking-[0.25em] text-charcoal transition hover:border-sage hover:bg-sage-soft/70"
          >
            Send Gift
          </button>
        </div>
      </div>
    </section>
  );
}
