import PageHeader from "../components/PageHeader.jsx";
import SubNav from "../components/SubNav.jsx";
import LeaderCard from "../components/LeaderCard.jsx";
import { aboutSubNav } from "../components/navConfig.js";
import { nationalOfficers } from "../data/leadership.js";

export default function Leadership() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="National Working Committee"
        description="Verified officers elected under the party's constitution, reflecting Nigeria's federal character."
      />
      <SubNav items={aboutSubNav} />
      <section className="mx-auto max-w-[1920px] px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nationalOfficers.map((officer) => (
            <LeaderCard key={officer.id} {...officer} />
          ))}
        </div>
      </section>
    </>
  );
}
