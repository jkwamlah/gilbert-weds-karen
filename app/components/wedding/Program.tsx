import { SectionHeading } from "./SectionHeading";
import { program, functionaries } from "./data";

export function Program() {
  return (
    <section id="program" className="section-padding bg-ivory">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Wedding Program"
          title="The order of our day"
          description="A gentle flow from afternoon vows to evening celebration."
        />

        <ol className="mx-auto mt-16 max-w-3xl">
          {program.map((item, i) => (
            <li key={item.title} className="relative grid grid-cols-[auto_1fr] gap-6 pb-12 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-burnt/30 bg-blush-soft/50 font-serif text-burnt">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {i < program.length - 1 && (
                  <span className="mt-2 flex-1 w-px bg-gradient-to-b from-burnt/40 to-transparent" />
                )}
              </div>
              <div className="soft-card -mt-1 p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl text-charcoal">{item.title}</h3>
                  <span className="text-sm uppercase tracking-[0.2em] text-burnt">{item.time}</span>
                </div>
                
                <p className="mt-3 text-base leading-relaxed text-charcoal/75">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <div className="text-center">
            <p className="eyebrow">Functionaries</p>
            <h3 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
              The hands that hold the day
            </h3>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {functionaries.map((f) => (
              <div
                key={f.role}
                className="rounded-2xl border border-sage/25 bg-ivory px-6 py-5 transition hover:border-burnt/40 hover:shadow-[0_20px_50px_-30px_rgba(60,40,30,0.3)]"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-burnt">{f.role}</p>
                <p className="mt-2 font-serif text-xl text-charcoal">{f.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
