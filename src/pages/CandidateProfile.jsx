import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import Avatar from "../components/Avatar.jsx";
import { VerifiedBadge } from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import { candidates } from "../data/candidates.js";
import { manifestoPillars } from "../data/manifesto.js";
import NotFound from "./NotFound.jsx";

export default function CandidateProfile() {
  const { id } = useParams();
  const candidate = candidates.find((c) => c.id === id);

  if (!candidate) return <NotFound />;

  const alignedPillars = manifestoPillars.slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Candidate" title={candidate.name} description={`${candidate.office} — ${candidate.state}`} />
      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <div className="flex items-center gap-4">
          <Avatar name={candidate.name} size={72} tone="gold" src={candidate.photo} />
          {candidate.verified && <VerifiedBadge label="Verified Candidate" />}
        </div>
        <p className="mt-6 text-ink-600">{candidate.bio}</p>

        <h2 className="mt-10 font-display text-lg font-bold text-ink-900">Manifesto alignment</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {alignedPillars.map((pillar) => (
            <li key={pillar.slug} className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-700">
              {pillar.title}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/candidates" variant="outline">All candidates</Button>
          <Button to="/volunteer" variant="primary">Volunteer for this campaign</Button>
        </div>
      </section>
    </>
  );
}
