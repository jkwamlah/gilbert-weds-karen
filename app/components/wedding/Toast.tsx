import { useEffect, useState } from "react";

const TOAST_EVENT = "wedding-toast";

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail: message }));
}

export function ToastViewport() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onToast = (event: Event) => {
      setMessage((event as CustomEvent<string>).detail);
      clearTimeout(timeout);
      timeout = setTimeout(() => setMessage(""), 4000);
    };

    window.addEventListener(TOAST_EVENT, onToast);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener(TOAST_EVENT, onToast);
    };
  }, []);

  if (!message) return null;

  return (
    <div
      role="status"
      className="fixed left-1/2 top-5 z-[70] -translate-x-1/2 rounded-full border border-sage/25 bg-ivory px-5 py-3 text-center text-sm text-charcoal shadow-xl animate-fade-up"
    >
      {message}
    </div>
  );
}
