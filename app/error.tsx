"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-6 text-center">
      <div>
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-4 font-serif text-5xl text-charcoal">
          This page did not load
        </h1>
        <p className="mt-3 text-sm text-charcoal/65">
          Please try again or return to the celebration.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-full bg-burnt px-6 py-3 text-xs uppercase tracking-[0.22em] text-ivory"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-charcoal/20 px-6 py-3 text-xs uppercase tracking-[0.22em] text-charcoal"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
