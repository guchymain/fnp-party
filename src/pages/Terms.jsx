import PageHeader from "../components/PageHeader.jsx";

export default function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" />
      <section className="mx-auto max-w-2xl space-y-5 px-4 py-14 text-sm text-ink-600 sm:px-6">
        <p>
          Forward Nigeria Party (FNP) is a fictional demo party created to illustrate a modern
          political party digital platform. It is not a real INEC-registered political party.
        </p>
        <p>
          Membership, volunteering, and donation flows on this site are for demonstration purposes
          only: no real payments are processed, no real party membership is created, and
          information submitted is stored locally on your device only.
        </p>
        <p>
          Content referencing the Electoral Act 2022, INEC guidelines, or Nigerian law is provided
          for illustrative and educational purposes and should not be relied upon as legal advice.
        </p>
      </section>
    </>
  );
}
