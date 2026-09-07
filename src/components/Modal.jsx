import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Modal({ title, onClose, children, size = "md" }) {
  const closeRef = useRef(null);
  const widths = { md: "max-w-lg", lg: "max-w-2xl" };

  useEffect(() => {
    closeRef.current?.focus();
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className={`max-h-[85vh] w-full overflow-y-auto rounded-2xl bg-white p-6 ${widths[size]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-ink-900">{title}</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-full p-1.5 text-ink-400 hover:bg-ink-100 hover:text-ink-900"
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
