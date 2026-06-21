import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-burnt/20 bg-ivory/90 text-burnt shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-burnt hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
