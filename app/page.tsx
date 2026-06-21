"use client";

import { useState } from "react";
import { BackToTop } from "@/app/components/wedding/BackToTop";
import { Contact, type ContactRecipient } from "@/app/components/wedding/Contact";
import {
  ContactModal,
  GiftMessageModal,
  RsvpModal,
} from "@/app/components/wedding/Forms";
import { Gallery } from "@/app/components/wedding/Gallery";
import { Gift } from "@/app/components/wedding/Gift";
import { Hero } from "@/app/components/wedding/Hero";
import { Navbar } from "@/app/components/wedding/Navbar";
import { Program } from "@/app/components/wedding/Program";
import { Story } from "@/app/components/wedding/Story";
import { ToastViewport } from "@/app/components/wedding/Toast";
import { Venue } from "@/app/components/wedding/Venue";

export default function Home() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactRecipient, setContactRecipient] = useState<ContactRecipient | null>(null);
  const [giftOpen, setGiftOpen] = useState(false);

  const openContactForm = (recipient: ContactRecipient) => {
    setContactRecipient(recipient);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Navbar onRsvp={() => setRsvpOpen(true)} />
      <main>
        <Hero onRsvp={() => setRsvpOpen(true)} onGift={() => setGiftOpen(true)} />
        <Story />
        <Program />
        <Venue />
        <Gallery />
        <Gift onSendMessage={() => setGiftOpen(true)} />
        <Contact onOpenForm={openContactForm} />
      </main>

      <RsvpModal open={rsvpOpen} onOpenChange={setRsvpOpen} />
      <ContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
        recipient={contactRecipient}
      />
      <GiftMessageModal open={giftOpen} onOpenChange={setGiftOpen} />
      <ToastViewport />
      <BackToTop />
    </div>
  );
}
