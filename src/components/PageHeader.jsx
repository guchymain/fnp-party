export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="bg-brand-500">
      <div className="mx-auto max-w-[1920px] px-4 py-12 sm:px-6">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-100">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-brand-50">{description}</p>}
      </div>
    </div>
  );
}
