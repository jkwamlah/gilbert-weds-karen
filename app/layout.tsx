import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karen & Gilbert | A Wedding Celebration",
  description:
    "Join us as we say forever. View our story, program, venue, and RSVP for our wedding day.",
  authors: [{ name: "GILREN" }],
  openGraph: {
    title: "Karen & Gilbert | A Wedding Celebration",
    description:
      "Together with our families, we joyfully invite you to celebrate our wedding day.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Karen & Gilbert | A Wedding Celebration",
    description:
      "Together with our families, we joyfully invite you to celebrate our wedding day.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
