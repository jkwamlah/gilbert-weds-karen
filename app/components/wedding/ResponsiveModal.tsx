import { useEffect, useId, type ReactNode } from "react";
import { XIcon } from "./Icons";

interface ResponsiveModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
}

export function ResponsiveModal({
  open,
  onOpenChange,
  title,
  description,
  children,
}: ResponsiveModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onOpenChange(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-sage/30 bg-ivory px-6 pb-8 pt-7 shadow-2xl animate-fade-up sm:max-w-lg sm:rounded-3xl sm:p-8"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => onOpenChange(false)}
          className="absolute right-5 top-5 rounded-full p-2 text-charcoal/60 transition hover:bg-cream hover:text-charcoal"
        >
          <XIcon className="h-5 w-5" />
        </button>
        <div className="pr-10">
          <h2 id={titleId} className="font-serif text-3xl text-charcoal">
            {title}
          </h2>
          {description && (
            <p id={descriptionId} className="mt-2 text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
