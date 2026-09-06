import { initials } from "../utils/formatters.js";

export default function Avatar({ name, size = 56, tone = "brand" }) {
  const tones = {
    brand: "bg-brand-500 text-white",
    gold: "bg-gold-300 text-ink-900",
  };
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-display font-bold ${tones[tone]}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
}
