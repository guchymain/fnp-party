import { Link, useParams } from "react-router-dom";
import { CheckCircle2, Target } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import DynamicIcon from "../components/DynamicIcon.jsx";
import Button from "../components/Button.jsx";
import NotFound from "./NotFound.jsx";
import { manifestoPillars } from "../data/manifesto.js";

export default function ManifestoPillar() {
  const { slug } = useParams();
  const pillar = manifestoPillars.find((p) => p.slug === slug);

  if (!pillar) return <NotFound />;

  return (
    <>
      <PageHeader eyebrow="Manifesto Pillar" title={pillar.title} description={pillar.summary} />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <DynamicIcon name={pillar.icon} size={28} aria-hidden="true" />
        </div>

        <h2 className="font-display text-xl font-bold text-ink-900">Why it matters</h2>
        <p className="mt-3 text-ink-600">{pillar.whyItMatters}</p>

        <h2 className="mt-10 font-display text-xl font-bold text-ink-900">Our goals</h2>
        <ul className="mt-4 space-y-3">
          {pillar.goals.map((goal) => (
            <li key={goal} className="flex items-start gap-3 text-ink-700">
              <Target className="mt-0.5 shrink-0 text-brand-500" size={18} aria-hidden="true" />
              {goal}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-display text-xl font-bold text-ink-900">Public commitments</h2>
        <ul className="mt-4 space-y-3">
          {pillar.commitments.map((commitment) => (
            <li key={commitment} className="flex items-start gap-3 text-ink-700">
              <CheckCircle2 className="mt-0.5 shrink-0 text-gold-400" size={18} aria-hidden="true" />
              {commitment}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button to="/manifesto" variant="outline">All manifesto pillars</Button>
          <Button to="/join" variant="primary">Support this pillar — Join FNP</Button>
        </div>
        <p className="mt-6 text-sm text-ink-400">
          <Link to="/transparency" className="underline">See how we report progress on our commitments →</Link>
        </p>
      </section>
    </>
  );
}
