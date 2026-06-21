import { useState, type FormEvent } from "react";
import { ResponsiveModal } from "./ResponsiveModal";
import { showToast } from "./Toast";
import type { ContactRecipient } from "./Contact";

const inputCls =
  "w-full rounded-xl border border-sage/30 bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-burnt focus:outline-none focus:ring-2 focus:ring-burnt/20 transition";
const labelCls = "block text-[11px] uppercase tracking-[0.22em] text-charcoal/70 mb-2";
const btnCls =
  "w-full rounded-full bg-burnt px-6 py-3 text-xs uppercase tracking-[0.25em] text-ivory transition hover:bg-burnt/90";

interface ModalProps {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}

interface ContactModalProps extends ModalProps {
  recipient: ContactRecipient | null;
}

export function ContactModal({ open, onOpenChange, recipient }: ContactModalProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("access_key", "267617d40fb04d7fb79890d3dc19c69a");
    data.set(
      "subject",
      recipient
        ? `New contact form submission for ${recipient.role}: ${recipient.name}`
        : "New contact form submission",
    );
    if (recipient) {
      data.set("recipient_name", recipient.name);
      data.set("recipient_role", recipient.role);
    }

    try {
      const res = await fetch("https://splitforms.com/api/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const json = (await res.json()) as { success?: boolean };

      if (!res.ok || !json.success) {
        throw new Error("Splitforms submission failed");
      }
    } catch {
      setStatus("error");
      showToast("Something went wrong. Try again.");
      return;
    }

    setStatus("sent");
    showToast("Message sent. We'll be in touch shortly.");
    form.reset();
    onOpenChange(false);
  };

  return (
    <ResponsiveModal
      open={open}
      onOpenChange={onOpenChange}
      title="Send a Message"
      description="Questions, well-wishes — we read every note."
    >
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className={labelCls}>Your Name</label>
          <input name="name" required className={inputCls} placeholder="Full name" />
        </div>
        <div>
          <label className={labelCls}>Email or Phone</label>
          <input name="contact" required className={inputCls} placeholder="How can we reach you?" />
        </div>
        <div>
          <label className={labelCls}>Message</label>
          <textarea
            name="message"
            required
            rows={4}
            className={inputCls}
            placeholder="Write your message..."
          />
        </div>
        <button type="submit" className={btnCls} disabled={status === "sending"}>Send Message</button>
      </form>
    </ResponsiveModal>
  );
}

export function GiftMessageModal({ open, onOpenChange }: ModalProps) {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    showToast("Thank you for your generous blessing.");
    onOpenChange(false);
  };
  return (
    <ResponsiveModal
      open={open}
      onOpenChange={onOpenChange}
      title="A Note With Your Gift"
      description="Let us know who to thank — and any words you'd like to share."
    >
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className={labelCls}>Your Name</label>
          <input required className={inputCls} placeholder="Full name" />
        </div>
        <div>
          <label className={labelCls}>Message (optional)</label>
          <textarea rows={4} className={inputCls} placeholder="A blessing for our new home..." />
        </div>
        <button type="submit" className={btnCls}>Send Gift Note</button>
      </form>
    </ResponsiveModal>
  );
}
