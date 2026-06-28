"use client";

import { useState } from "react";
import { BackToTop } from "@/app/components/wedding/BackToTop";
import { Contact, type ContactRecipient } from "@/app/components/wedding/Contact";
import {
  ContactModal,
  GiftMessageModal,
} from "@/app/components/wedding/Forms";
import { Gallery } from "@/app/components/wedding/Gallery";
import { Gift } from "@/app/components/wedding/Gift";
import { Hero } from "@/app/components/wedding/Hero";
import { Navbar } from "@/app/components/wedding/Navbar";
import { Program } from "@/app/components/wedding/Program";
import { Story } from "@/app/components/wedding/Story";
import { ToastViewport } from "@/app/components/wedding/Toast";
import { showToast } from "@/app/components/wedding/Toast";

const zoomUrl = "https://jworg.zoom.us/j/81179031326";
const zoomDetails = `Join Zoom Meeting
${zoomUrl}

Meeting ID: 811 7903 1326
Passcode: 030726`;

export default function Home() {
  const zoomActive = true;
  const [contactOpen, setContactOpen] = useState(false);
  const [contactRecipient, setContactRecipient] = useState<ContactRecipient | null>(null);
  const [giftOpen, setGiftOpen] = useState(false);

  const openContactForm = (recipient: ContactRecipient) => {
    setContactRecipient(recipient);
    setContactOpen(true);
  };

  const joinZoom = () => {
    window.open(zoomUrl, "_blank", "noopener,noreferrer");
  };

  const copyZoomDetails = async () => {
    try {
      await navigator.clipboard.writeText(zoomDetails);
      showToast("Zoom details copied.");
    } catch {
      showToast("Could not copy Zoom details.");
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Navbar
        onCopyZoomDetails={copyZoomDetails}
        onJoinZoom={joinZoom}
        zoomActive={zoomActive}
      />
      <main>
        <Hero
          onCopyZoomDetails={copyZoomDetails}
          onGift={() => setGiftOpen(true)}
          onJoinZoom={joinZoom}
          zoomActive={zoomActive}
        />
        <Story />
        <Program />
        <Gallery />
        <Gift onSendMessage={() => setGiftOpen(true)} />
        <Contact onOpenForm={openContactForm} />
      </main>

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
