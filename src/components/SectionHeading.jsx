export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-500">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-ink-600">{description}</p>}
    </div>
  );
}
