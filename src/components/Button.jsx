import { Link } from "react-router-dom";

const variants = {
  primary: "bg-brand-500 text-white hover:bg-brand-600 focus-visible:bg-brand-600",
  gold: "bg-gold-300 text-ink-900 hover:bg-gold-400",
  outline: "border-2 border-brand-500 text-brand-500 hover:bg-brand-50",
  ghost: "text-brand-500 hover:bg-brand-50",
  white: "bg-white text-brand-600 hover:bg-brand-50",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export default function Button({
  as = "button",
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
