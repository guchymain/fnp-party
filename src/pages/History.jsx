import PageHeader from "../components/PageHeader.jsx";
import SubNav from "../components/SubNav.jsx";
import Timeline from "../components/Timeline.jsx";
import { aboutSubNav } from "../components/navConfig.js";
import { partyHistory } from "../data/leadership.js";

export default function History() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Our History" description="From founding convention to a nationwide grassroots structure." />
      <SubNav items={aboutSubNav} />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Timeline items={partyHistory} />
      </section>
    </>
  );
}
