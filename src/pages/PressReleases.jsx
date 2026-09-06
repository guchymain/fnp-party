import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import { formatDate } from "../utils/formatters.js";
import { pressReleases } from "../data/news.js";

export default function PressReleases() {
  return (
    <>
      <PageHeader
        eyebrow="News & Media"
        title="Press Releases"
        description="Formal statements from party leadership, distinct from editorial news coverage."
      />
      <section className="mx-auto max-w-3xl space-y-5 px-4 py-14 sm:px-6">
        {pressReleases.map((release) => (
          <Card key={release.slug}>
            <time dateTime={release.date} className="text-xs font-semibold uppercase tracking-wide text-brand-500">
              {formatDate(release.date)}
            </time>
            <h3 className="mt-1 font-display text-lg font-bold text-ink-900">{release.title}</h3>
            <p className="mt-2 text-sm text-ink-600">{release.body}</p>
          </Card>
        ))}
      </section>
    </>
  );
}
