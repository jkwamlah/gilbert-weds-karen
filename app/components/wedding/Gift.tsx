import { SectionHeading } from "./SectionHeading";
import { BuildingIcon, CopyIcon, HeartIcon, SmartphoneIcon } from "./Icons";
import { showToast } from "./Toast";

const mobileMoneyNumber = "0558216085";
const bankAccountNumber = "1004000006813";

async function copyToClipboard(value: string, label: string) {
  try {
    await navigator.clipboard.writeText(value);
    showToast(`${label} copied.`);
  } catch {
    showToast(`Could not copy ${label.toLowerCase()}.`);
  }
}

interface Props {
  onSendMessage: () => void;
}

export function Gift({ onSendMessage }: Props) {
  return (
    <section id="gift" className="section-padding bg-cream">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Gifts & Blessings"
          title="Your presence is our present"
          description="Should you wish to bless our new beginning, here are gentle ways to do so."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="soft-card group p-8 transition hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-burnt/10 text-burnt">
                <SmartphoneIcon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-2xl text-charcoal">Mobile Money</h3>
            </div>
            <p className="mt-4 text-sm text-charcoal/70">
              Send a gift directly through mobile money to:
            </p>
            <div className="mt-5 rounded-2xl border border-dashed border-burnt/30 bg-ivory px-5 py-4">
              <div className="mb-3 flex justify-between gap-4 text-sm">
                <span className="text-charcoal/60">Provider</span>
                <span className="font-medium text-charcoal">MTN</span>
              </div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <dt className="text-charcoal/60">Mobile Money No.</dt>
                <dd className="flex items-center gap-2 font-medium text-charcoal">
                  {mobileMoneyNumber}
                  <button
                      type="button"
                      aria-label="Copy mobile money account number"
                      onClick={() => copyToClipboard(mobileMoneyNumber, "Mobile money account number")}
                      className="rounded-full border border-sage/25 p-1.5 text-sage transition hover:border-sage hover:bg-sage/10"
                  >
                    <CopyIcon className="h-3.5 w-3.5" />
                  </button>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/60">Account Name</dt>
                <dd className="font-normal text-charcoal">Gilbert Kwaku Roberts</dd>
              </div>
            </div>
          </article>

          <article className="soft-card group p-8 transition hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 text-sage">
                <BuildingIcon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-2xl text-charcoal">Bank Transfer</h3>
            </div>
            <p className="mt-4 text-sm text-charcoal/70">For a transfer from your bank:</p>
            <dl className="mt-5 space-y-3 rounded-2xl border border-dashed border-sage/40 bg-ivory px-5 py-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/60">Bank</dt>
                <dd className="font-medium text-charcoal">Access Bank</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-charcoal/60">Account No.</dt>
                <dd className="flex items-center gap-2 font-medium text-charcoal">
                  {bankAccountNumber}
                  <button
                    type="button"
                    aria-label="Copy bank account number"
                    onClick={() => copyToClipboard(bankAccountNumber, "Bank account number")}
                    className="rounded-full border border-sage/25 p-1.5 text-sage transition hover:border-sage hover:bg-sage/10"
                  >
                    <CopyIcon className="h-3.5 w-3.5" />
                  </button>
                </dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/60">Account Name</dt>
                <dd className="font-medium text-charcoal">
                  Gilbert Kwaku Roberts
                </dd>
              </div>
            </dl>
          </article>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-burnt/20 bg-blush-soft/40 px-6 py-10 text-center">
          <HeartIcon className="h-6 w-6 text-burnt" />
          <p className="max-w-xl font-serif text-2xl italic text-charcoal sm:text-3xl">
            Thank you for being part of our love story.
          </p>
          <button
            onClick={onSendMessage}
            className="mt-2 rounded-full bg-burnt px-7 py-3 text-xs uppercase tracking-[0.25em] text-ivory transition hover:-translate-y-0.5 hover:bg-burnt/90"
          >
            Send a Gift Message
          </button>
        </div>
      </div>
    </section>
  );
}
