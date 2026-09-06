import PageHeader from "../components/PageHeader.jsx";
import CandidateCard from "../components/CandidateCard.jsx";
import { electedOfficials } from "../data/candidates.js";

export default function ElectedOfficials() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Elected Officials"
        description="FNP members currently holding office — an accountability record of who represents which seat."
      />
      <section className="mx-auto max-w-[1920px] px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {electedOfficials.map((official) => (
            <CandidateCard key={official.id} {...official} verified />
          ))}
        </div>
      </section>
    </>
  );
}
