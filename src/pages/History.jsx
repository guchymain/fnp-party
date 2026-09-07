import PageHeader from "../components/PageHeader.jsx";
import SubNav from "../components/SubNav.jsx";
import Timeline from "../components/Timeline.jsx";
import Photo from "../components/Photo.jsx";
import { aboutSubNav } from "../components/navConfig.js";
import { partyHistory } from "../data/leadership.js";
import { imagePool } from "../data/images.js";

export default function History() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Our History" description="From founding convention to a nationwide grassroots structure." />
      <SubNav items={aboutSubNav} />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl bg-ink-100">
          <Photo
            src={imagePool.crowdFlags}
            alt="Supporters at a gathering"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <Timeline items={partyHistory} />
      </section>
    </>
  );
}
