import PageHeader from "../components/PageHeader.jsx";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="mx-auto max-w-2xl space-y-5 px-4 py-14 text-sm text-ink-600 sm:px-6">
        <p>
          This is a demo platform. In this prototype, information you submit through forms (Join,
          Volunteer, Donate, Contact, Report a Concern) is stored only in your browser's local
          storage and is never transmitted to a server.
        </p>
        <p>
          A production deployment of this platform would process personal data — including names,
          contact details, National Identification Numbers, and location — in line with the
          Nigeria Data Protection Act (NDPA) 2023 and the Nigeria Data Protection Regulation
          (NDPR). Members would have the right to access, correct, and request deletion of their
          data, and the party would publish a full data-processing notice covering retention,
          storage location, and third parties (such as payment processors) that data is shared
          with.
        </p>
        <p>
          Sensitive identity documents submitted for membership verification would be encrypted at
          rest and access-limited to authorized party officials performing ward-level
          verification.
        </p>
      </section>
    </>
  );
}
