import { NavLink } from "react-router-dom";

export default function SubNav({ items }) {
  return (
    <nav aria-label="Section" className="border-b border-ink-100 bg-white">
      <div className="mx-auto flex max-w-[1920px] gap-1 overflow-x-auto px-4 py-2 sm:px-6">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${
                isActive ? "bg-brand-50 text-brand-700" : "text-ink-600 hover:bg-ink-50"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
