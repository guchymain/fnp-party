export default function Timeline({ items }) {
  return (
    <ol className="relative border-l-2 border-brand-100 pl-6">
      {items.map((item) => (
        <li key={item.year} className="mb-8 last:mb-0">
          <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-white" />
          <p className="font-display text-sm font-bold text-brand-500">{item.year}</p>
          <h3 className="mt-1 font-semibold text-ink-900">{item.title}</h3>
          <p className="mt-1 text-sm text-ink-600">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
