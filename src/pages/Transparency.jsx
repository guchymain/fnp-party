import { FileCheck2, FileText, ScaleIcon, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import SubNav from "../components/SubNav.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { formatNaira } from "../utils/formatters.js";

const transparencySubNav = [
  { label: "Transparency Hub", to: "/transparency", end: true },
  { label: "Report a Concern", to: "/report-concern" },
];

const quarterlySummary = {
  quarter: "Q2 2026",
  totalDonations: 184_500_000,
  totalSpend: 161_200_000,
  breakdown: [
    { category: "Ward & LGA organizing", amount: 62_000_000 },
    { category: "Events & town halls", amount: 34_500_000 },
    { category: "Volunteer programs", amount: 21_700_000 },
    { category: "Communications & media", amount: 28_000_000 },
    { category: "Administration", amount: 15_000_000 },
  ],
};

const filings = [
  { title: "Q2 2026 Financial Summary", type: "PDF" },
  { title: "2025 Annual Financial Report (submitted to INEC)", type: "PDF" },
  { title: "Party Constitution", type: "PDF" },
  { title: "Code of Conduct for Officials & Candidates", type: "PDF" },
];

export default function Transparency() {
  return (
    <>
      <PageHeader
        eyebrow="Transparency & Accountability"
        title="Where the money comes from, and where it goes"
        description="Published in line with our obligations under Section 90(4) of the Electoral Act 2022 to report to INEC and disclose large donations."
      />
      <SubNav items={transparencySubNav} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="text-center">
            <ShieldCheck className="mx-auto mb-2 text-brand-500" size={24} aria-hidden="true" />
            <p className="font-display text-xl font-extrabold text-ink-900">{formatNaira(quarterlySummary.totalDonations)}</p>
            <p className="text-sm text-ink-500">Total donations, {quarterlySummary.quarter}</p>
          </Card>
          <Card className="text-center">
            <ScaleIcon className="mx-auto mb-2 text-brand-500" size={24} aria-hidden="true" />
            <p className="font-display text-xl font-extrabold text-ink-900">{formatNaira(quarterlySummary.totalSpend)}</p>
            <p className="text-sm text-ink-500">Total spend, {quarterlySummary.quarter}</p>
          </Card>
          <Card className="text-center">
            <FileCheck2 className="mx-auto mb-2 text-brand-500" size={24} aria-hidden="true" />
            <p className="font-display text-xl font-extrabold text-ink-900">0</p>
            <p className="text-sm text-ink-500">Undisclosed donations over ₦50M</p>
          </Card>
        </div>

        <h2 className="mt-10 font-display text-lg font-bold text-ink-900">Spending by category</h2>
        <div className="mt-4 space-y-3">
          {quarterlySummary.breakdown.map((item) => {
            const pct = Math.round((item.amount / quarterlySummary.totalSpend) * 100);
            return (
              <div key={item.category}>
                <div className="flex justify-between text-sm text-ink-700">
                  <span>{item.category}</span>
                  <span className="font-semibold">{formatNaira(item.amount)}</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-ink-100">
                  <div className="h-2 rounded-full bg-brand-500" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="mt-10 font-display text-lg font-bold text-ink-900">Filings & documents</h2>
        <div className="mt-4 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
          {filings.map((filing) => (
            <div key={filing.title} className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <FileText className="text-brand-500" size={20} aria-hidden="true" />
                <p className="font-medium text-ink-900">{filing.title}</p>
              </div>
              <Button variant="ghost" size="md" disabled title="Publishing pending official launch">
                Download {filing.type}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-ink-900 p-6 text-center text-white">
          <h3 className="font-display text-lg font-bold">Seen something that doesn't add up?</h3>
          <p className="mt-2 text-sm text-white/70">
            Report a concern confidentially through our ethics channel.
          </p>
          <Button to="/report-concern" variant="gold" className="mt-4">Report a Concern</Button>
        </div>
      </section>
    </>
  );
}
