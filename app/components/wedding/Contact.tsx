import { SectionHeading } from "./SectionHeading";
import { contacts, couple } from "./data";
import { MessageIcon, PhoneIcon } from "./Icons";

const whatsappMessage = encodeURIComponent(
  "Hello, I am reaching out from Gilbert and Karen's wedding website.",
);

export type ContactRecipient = {
  name: string;
  role: string;
};

interface Props {
  onOpenForm: (recipient: ContactRecipient) => void;
}

export function Contact({ onOpenForm }: Props) {
  return (
    <section id="contact" className="section-padding bg-ivory">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="We're here to help"
          description="Reach out for any questions about the day — we'd love to hear from you."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {contacts.map((c) => (
            <div
              key={c.role}
              className="rounded-2xl border border-sage/25 bg-cream px-6 py-7 transition hover:border-burnt/40"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-burnt">{c.role}</p>
              <p className="mt-3 font-serif text-xl text-charcoal">{c.name}</p>
              <div className="mt-6 flex flex-nowrap gap-2 lg:gap-3">
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-charcoal/25 px-2 py-3 text-[10px] uppercase tracking-[0.12em] text-charcoal transition hover:border-burnt hover:text-burnt lg:flex-none lg:gap-2 lg:px-5 lg:text-xs lg:tracking-[0.2em]"
                >
                  <PhoneIcon className="h-4 w-4" /> Call
                </a>
                <a
                  href={`https://wa.me/${c.whatsappPhone}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-sage px-2 py-3 text-[10px] uppercase tracking-[0.12em] text-ivory transition hover:-translate-y-0.5 lg:flex-none lg:gap-2 lg:px-5 lg:text-xs lg:tracking-[0.2em]"
                >
                  <MessageIcon className="h-4 w-4" /> Whatsapp
                </a>
                <button
                  onClick={() => onOpenForm({ name: c.name, role: c.role })}
                  className="flex-1 rounded-full border border-charcoal/25 px-2 py-3 text-[10px] uppercase tracking-[0.12em] text-charcoal transition hover:border-burnt hover:text-burnt lg:flex-none lg:px-5 lg:text-xs lg:tracking-[0.2em]"
                >
                  Email
                </button>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-24 border-t border-sage/20 pt-10 text-center">
          <p className="font-script text-3xl text-burnt">
            {couple.groom} &amp; {couple.bride}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-charcoal/60">
            {couple.date}
          </p>
        </footer>
      </div>
    </section>
  );
}
