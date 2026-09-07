export default function StatCard({ value, label, icon: Icon }) {
  return (
    <div className="rounded-2xl bg-white/10 px-6 py-5 text-center backdrop-blur-sm">
      {Icon && (
        <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-gold-300">
          <Icon size={18} aria-hidden="true" />
        </div>
      )}
      <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-medium text-brand-100">{label}</p>
    </div>
  );
}