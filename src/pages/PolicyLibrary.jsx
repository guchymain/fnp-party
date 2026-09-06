import { FileText } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import { manifestoPillars } from "../data/manifesto.js";

export default function PolicyLibrary() {
  return (
    <>
      <PageHeader
        eyebrow="Manifesto & Policy"
        title="Policy & Position Paper Library"
        description="Downloadable references for press, researchers, and members who want the full detail behind each manifesto pillar."
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="mb-6 rounded-2xl border border-ink-100 bg-white p-6">
          <p className="font-display font-bold text-ink-900">Full National Manifesto</p>
          <p className="mt-1 text-sm text-ink-600">Complete document, all eight pillars — PDF</p>
          <Button variant="outline" size="md" className="mt-3" disabled title="Publishing pending official launch">
            <FileText size={16} aria-hidden="true" /> Download PDF
          </Button>
        </div>

        <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
          {manifestoPillars.map((pillar) => (
            <div key={pillar.slug} className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <FileText className="shrink-0 text-brand-500" size={20} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-ink-900">{pillar.title} — Position Paper</p>
                  <p className="text-xs text-ink-400">PDF · Policy detail & references</p>
                </div>
              </div>
              <Button variant="ghost" size="md" disabled title="Publishing pending official launch">
                Download
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
