"use client";

import { useEffect, useState } from "react";

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown({ iso }: { iso: string }) {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    const target = new Date(iso);
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [iso]);

  const items = [
    { label: "Days", value: t?.days ?? 0 },
    { label: "Hours", value: t?.hours ?? 0 },
    { label: "Minutes", shortLabel: "Min", value: t?.minutes ?? 0 },
    { label: "Seconds", shortLabel: "Sec", value: t?.seconds ?? 0 },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {items.map((i) => (
        <div
          key={i.label}
          className="rounded-2xl border border-sage/25 bg-ivory/80 px-2 py-4 text-center backdrop-blur-sm sm:px-5 sm:py-5"
        >
          <div
            className="font-serif text-3xl text-charcoal sm:text-5xl"
            suppressHydrationWarning
          >
            {t ? String(i.value).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-burnt sm:text-xs">
            {i.shortLabel ? (
              <>
                <span className="sm:hidden">{i.shortLabel}</span>
                <span className="hidden sm:inline">{i.label}</span>
              </>
            ) : (
              i.label
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
