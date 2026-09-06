import PageHeader from "../components/PageHeader.jsx";
import Accordion from "../components/Accordion.jsx";
import { faqs } from "../data/faqs.js";

export default function FAQ() {
  return (
    <>
      <PageHeader eyebrow="Support" title="Frequently Asked Questions" />
      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <Accordion items={faqs} />
      </section>
    </>
  );
}
