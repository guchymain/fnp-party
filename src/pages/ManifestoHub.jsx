import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import DynamicIcon from "../components/DynamicIcon.jsx";
import Button from "../components/Button.jsx";
import { manifestoPillars } from "../data/manifesto.js";

export default function ManifestoHub() {
  return (
    <>
      <PageHeader
        eyebrow="Manifesto & Policy"
        title="Eight pillars. Plain language. Public commitments."
        description="Not a PDF you download once and forget — a living set of commitments organized so anyone can find what matters to them."
      />

      <section className="mx-auto max-w-[1920px] px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {manifestoPillars.map((pillar) => (
            <Card key={pillar.slug} className="flex flex-col gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <DynamicIcon name={pillar.icon} size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900">{pillar.title}</h3>
              <p className="text-sm text-ink-600">{pillar.summary}</p>
              <Link
                to={`/manifesto/${pillar.slug}`}
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:underline"
              >
                Read commitments <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-brand-50 p-8 text-center">
          <h3 className="font-display text-lg font-bold text-brand-700">Want the full document?</h3>
          <p className="max-w-md text-sm text-brand-700">
            Download position papers and the complete manifesto from the Policy Library.
          </p>
          <Button to="/policy-library" variant="primary">
            Go to Policy Library
          </Button>
        </div>
      </section>
    </>
  );
}
