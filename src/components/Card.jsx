export default function Card({ children, className = "", as: As = "div", flush = false, ...props }) {
  return (
    <As
      className={`rounded-2xl border border-ink-100 bg-white shadow-sm ${flush ? "" : "p-6"} ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}
