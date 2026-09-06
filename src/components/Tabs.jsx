export default function Tabs({ tabs, active, onChange }) {
  return (
    <div role="tablist" className="inline-flex gap-1 rounded-full bg-ink-100 p-1">
      {tabs.map((tab) => {
        const isActive = tab.value === active;
        return (
          <button
            key={tab.value}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(tab.value)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              isActive ? "bg-white text-brand-600 shadow-sm" : "text-ink-600 hover:text-ink-900"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
