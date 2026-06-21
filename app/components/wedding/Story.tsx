import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { story } from "./data";

const images = [
  "/assets/images/white-old-school.jpeg",
  "/assets/images/dark-interesting.jpeg",
  "/assets/images/hand-in-hand.jpeg",
];

export function Story() {
  return (
    <section id="story" className="section-padding bg-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Our Story"
          title="A quiet beginning, a forever in bloom"
          description="Every love story is beautiful. Ours is our favorite — written slowly, across seasons."
        />

        <div className="mt-20 space-y-20 md:space-y-28">
          {story.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={item.year}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-sage/20 shadow-[0_30px_80px_-40px_rgba(60,40,30,0.35)]">
                    <Image
                      src={images[i]}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] hover:scale-105"
                    />
                    <div className="absolute left-5 top-5 rounded-full bg-ivory/85 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-burnt backdrop-blur">
                      {item.year}
                    </div>
                  </div>
                </div>

                <div className={reverse ? "md:order-1 md:pr-6" : "md:pl-6"}>
                  <p className="eyebrow">Chapter {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
                    {item.title}
                  </h3>
                  <div className="mt-5 max-w-md space-y-4 text-base leading-relaxed text-charcoal/75">
                    {item.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
