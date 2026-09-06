export default function Card({ children, className = "", as: As = "div", ...props }) {
  return (
    <As
      className={`rounded-2xl border border-ink-100 bg-white p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}
