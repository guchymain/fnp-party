import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { SelectField } from "../components/FormField.jsx";
import Avatar from "../components/Avatar.jsx";
import { VerifiedBadge } from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import { candidates, offices } from "../data/candidates.js";
import { statesLgas } from "../data/statesLgas.js";

export default function Candidates() {
  const [office, setOffice] = useState("");
  const [state, setState] = useState("");

  const filtered = useMemo(
    () =>
      candidates.filter(
        (c) => (!office || c.office === office) && (!state || c.state === state)
      ),
    [office, state]
  );

  return (
    <>
      <PageHeader eyebrow="People" title="Candidates" description="Meet FNP's candidates standing for office across the country." />
      <section className="mx-auto max-w-[1920px] px-4 py-14 sm:px-6">
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <SelectField
            id="filter-office"
            label="Filter by office"
            placeholder="All offices"
            options={offices}
            value={office}
            onChange={(e) => setOffice(e.target.value)}
          />
          <SelectField
            id="filter-state"
            label="Filter by state"
            placeholder="All states"
            options={statesLgas.map((s) => s.state)}
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((candidate) => (
            <Link key={candidate.id} to={`/candidates/${candidate.id}`}>
              <Card className="flex flex-col items-start gap-3 hover:border-brand-300">
                <div className="flex w-full items-start justify-between gap-3">
                  <Avatar name={candidate.name} tone="gold" />
                  {candidate.verified && <VerifiedBadge />}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink-900">{candidate.name}</h3>
                  <p className="text-sm font-semibold text-brand-500">
                    {candidate.office} — {candidate.state}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-ink-600">No candidates match those filters yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
