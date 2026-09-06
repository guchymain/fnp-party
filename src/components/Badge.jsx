import { BadgeCheck } from "lucide-react";

export function Badge({ children, tone = "brand" }) {
  const tones = {
    brand: "bg-brand-50 text-brand-700",
    gold: "bg-gold-50 text-gold-600",
    ink: "bg-ink-100 text-ink-600",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function VerifiedBadge({ label = "Verified" }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
      <BadgeCheck size={14} aria-hidden="true" />
      {label}
    </span>
  );
}
