export default function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/10 px-6 py-5 text-center backdrop-blur-sm">
      <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-medium text-brand-100">{label}</p>
    </div>
  );
}
