import { Download, FileText } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import SubNav from "../components/SubNav.jsx";
import Button from "../components/Button.jsx";
import Accordion from "../components/Accordion.jsx";
import { aboutSubNav } from "../components/navConfig.js";
import { coreValues } from "../data/leadership.js";

const constitutionSections = coreValues.map((value) => ({
  question: value.title,
  answer: value.text,
}));

export default function Constitution() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Constitution & Ideology"
        description="The governing document submitted to INEC as part of our registration, and the ideology it encodes."
      />
      <SubNav items={aboutSubNav} />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-center justify-between rounded-2xl border border-ink-100 bg-white p-6">
          <div className="flex items-center gap-3">
            <FileText className="text-brand-500" size={28} aria-hidden="true" />
            <div>
              <p className="font-display font-bold text-ink-900">FNP Constitution (2026 edition)</p>
              <p className="text-sm text-ink-500">PDF · as filed with INEC</p>
            </div>
          </div>
          <Button variant="outline" size="md" disabled title="Document publishing pending official launch">
            <Download size={16} aria-hidden="true" /> Download
          </Button>
        </div>
        <p className="-mt-4 mb-8 text-xs text-ink-400">
          Full document available for download once the party formally publishes at launch.
        </p>

        <p className="text-ink-600">
          Our constitution sets out how members, wards, LGAs, states, and national organs relate
          to one another, how congresses and conventions are run, and how candidates emerge from
          the grassroots up. The values below are the ideological core that every clause is
          written to protect.
        </p>

        <div className="mt-8">
          <Accordion items={constitutionSections} />
        </div>
      </section>
    </>
  );
}
