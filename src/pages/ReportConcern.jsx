import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import SubNav from "../components/SubNav.jsx";
import Button from "../components/Button.jsx";
import { TextField, TextareaField, SelectField, CheckboxField } from "../components/FormField.jsx";
import { isRequired, runValidation } from "../utils/validators.js";
import { appendToLocalStorageList } from "../hooks/useLocalStorage.js";

const transparencySubNav = [
  { label: "Transparency Hub", to: "/transparency" },
  { label: "Report a Concern", to: "/report-concern", end: true },
];

const categories = [
  "Financial misconduct",
  "Candidate selection concern",
  "Code of conduct violation",
  "Harassment or discrimination",
  "Other",
];

export default function ReportConcern() {
  const [form, setForm] = useState({ category: "", details: "", contact: "", anonymous: false });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const rules = {
      category: [[isRequired, "Select a category"]],
      details: [[isRequired, "Please describe the concern"]],
    };
    const stepErrors = runValidation(form, rules);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    appendToLocalStorageList("fnp_report_concerns", { ...form, submittedAt: new Date().toISOString() });
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader eyebrow="Transparency & Accountability" title="Report a Concern" description="A confidential channel to raise ethics, conduct, or financial concerns." />
      <SubNav items={transparencySubNav} />
      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        {submitted ? (
          <div className="rounded-2xl border border-ink-100 bg-white p-6 text-center">
            <ShieldCheck className="mx-auto mb-3 text-brand-500" size={36} aria-hidden="true" />
            <h2 className="font-display text-lg font-bold text-ink-900">Report received</h2>
            <p className="mt-2 text-sm text-ink-600">
              The party's ethics committee will review this confidentially. If you provided contact
              details, you may be contacted for follow-up.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-ink-100 bg-white p-6">
            <SelectField id="rc-category" label="Category" required placeholder="Select a category" options={categories} value={form.category} error={errors.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} />
            <TextareaField id="rc-details" label="Details" required hint="Share what happened, when, and who was involved, if known." value={form.details} error={errors.details} onChange={(e) => setForm((f) => ({ ...f, details: e.target.value }))} />
            <CheckboxField
              id="rc-anonymous"
              label="Submit anonymously"
              checked={form.anonymous}
              onChange={(e) => setForm((f) => ({ ...f, anonymous: e.target.checked, contact: e.target.checked ? "" : f.contact }))}
            />
            {!form.anonymous && (
              <TextField id="rc-contact" label="Your contact (optional)" hint="Email or phone, only if you're open to follow-up." value={form.contact} onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))} />
            )}
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Submit report
            </Button>
          </form>
        )}
      </section>
    </>
  );
}
