import PageHeader from "../components/PageHeader.jsx";
import SubNav from "../components/SubNav.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";
import { aboutSubNav } from "../components/navConfig.js";
import { coreValues } from "../data/leadership.js";
import { imagePool } from "../data/images.js";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A party built from the ward up"
        description="Forward Nigeria Party exists to make grassroots organizing, transparent finance, and accountable leadership the norm in Nigerian politics."
      />
      <SubNav items={aboutSubNav} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl bg-ink-100">
          <Photo
            src={imagePool.plazaGathering}
            alt="FNP supporters gathered at a grassroots event"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <SectionHeading eyebrow="Mission" title="Why we exist" />
        <p className="mt-4 text-ink-600">
          Nigeria's future is decided at the ward, not just at the top of the ticket. FNP was
          founded to organize political power the same way — starting with real membership
          registers at ward level, moving up through LGA and state structures, to a national
          leadership that answers to its base, not the other way around.
        </p>

        <div className="mt-10">
          <SectionHeading eyebrow="Vision" title="The Nigeria we're building toward" />
        </div>
        <p className="mt-4 text-ink-600">
          A Nigeria where any citizen, regardless of ethnicity, religion, or region, can build a
          political career on merit and service — and where every party discloses where its money
          comes from and where it goes.
        </p>

        <div className="mt-10">
          <SectionHeading eyebrow="Our Values" title="What guides every decision" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {coreValues.map((value) => (
              <Card key={value.title}>
                <h3 className="font-display font-bold text-ink-900">{value.title}</h3>
                <p className="mt-1 text-sm text-ink-600">{value.text}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-50 p-6">
          <h3 className="font-display font-bold text-brand-700">Federal character commitment</h3>
          <p className="mt-2 text-sm text-brand-700">
            In line with INEC registration requirements, FNP's national officers reflect the
            federal character of Nigeria, with leadership drawn from more than two-thirds of the
            country's states.
          </p>
        </div>
      </section>
    </>
  );
}
