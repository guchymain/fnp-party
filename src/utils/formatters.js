export function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(isoDate) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function formatShortDate(isoDate) {
  const d = new Date(isoDate);
  return {
    day: new Intl.DateTimeFormat("en-NG", { day: "2-digit" }).format(d),
    month: new Intl.DateTimeFormat("en-NG", { month: "short" }).format(d).toUpperCase(),
  };
}

export function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function generateMembershipNumber(state) {
  const stateCode = (state || "FCT").slice(0, 3).toUpperCase();
  const year = new Date().getFullYear();
  const rand = Math.floor(100000 + Math.random() * 900000);
  return `FNP-${stateCode}-${year}-${rand}`;
}
