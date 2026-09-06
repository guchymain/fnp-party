import { formatNaira } from "../utils/formatters.js";

export default function DonationTierCard({ amount, label, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(amount)}
      aria-pressed={selected}
      className={`rounded-2xl border-2 px-4 py-4 text-left transition-colors ${
        selected ? "border-brand-500 bg-brand-50" : "border-ink-100 bg-white hover:border-brand-200"
      }`}
    >
      <p className="font-display text-xl font-extrabold text-ink-900">{formatNaira(amount)}</p>
      <p className="text-sm text-ink-600">{label}</p>
    </button>
  );
}
