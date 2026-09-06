import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import { TextField, SelectField } from "../components/FormField.jsx";
import { statesLgas } from "../data/statesLgas.js";
import { isRequired, isEmail, runValidation } from "../utils/validators.js";
import { appendToLocalStorageList } from "../hooks/useLocalStorage.js";
import { useAuth } from "../context/AuthContext.jsx";

const interestOptions = [
  "Canvassing & Door-to-door",
  "Digital Advocacy & Social Media",
  "Event Support",
  "Tech & Data",
  "Media & Content",
  "Fundraising Support",
];

export default function Volunteer() {
  const { isAuthenticated, member, addVolunteerSignup } = useAuth();
  const [form, setForm] = useState({
    name: member ? `${member.firstName} ${member.lastName}` : "",
    email: member?.email ?? "",
    state: member?.state ?? "",
    interests: [],
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function toggleInterest(interest) {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const stepErrors = runValidation(form, {
      name: [[isRequired, "Name is required"]],
      email: [[isRequired, "Email is required"], [isEmail, "Enter a valid email"]],
      state: [[isRequired, "Select your state"]],
    });
    if (form.interests.length === 0) stepErrors.interests = "Pick at least one interest area";
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    const entry = { ...form, submittedAt: new Date().toISOString() };
    if (isAuthenticated) {
      addVolunteerSignup(entry);
    } else {
      appendToLocalStorageList("fnp_volunteer_signups", entry);
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <PageHeader eyebrow="Get Involved" title="Thanks for volunteering!" />
        <section className="mx-auto max-w-md px-4 py-14 text-center sm:px-6">
          <CheckCircle2 className="mx-auto mb-3 text-brand-500" size={40} aria-hidden="true" />
          <p className="text-ink-600">
            A local coordinator in {form.state} will reach out with next steps. In the meantime,
            browse open opportunities near you.
          </p>
          <Button to="/volunteer/opportunities" variant="primary" className="mt-6">
            View volunteer opportunities
          </Button>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Volunteer with FNP"
        description="Give your time and skills — no full membership required to get started."
      />
      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-ink-100 bg-white p-6" noValidate>
          <TextField id="v-name" label="Full name" required value={form.name} error={errors.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
          <TextField id="v-email" type="email" label="Email address" required value={form.email} error={errors.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
          <SelectField id="v-state" label="State" required placeholder="Select state" options={statesLgas.map((s) => s.state)} value={form.state} error={errors.state} onChange={(e) => setForm((f) => ({ ...f, state: e.target.value }))} />

          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-ink-900">What would you like to help with? *</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {interestOptions.map((interest) => (
                <label key={interest} className="flex items-center gap-2 rounded-xl border border-ink-100 px-3 py-2 text-sm text-ink-700">
                  <input
                    type="checkbox"
                    checked={form.interests.includes(interest)}
                    onChange={() => toggleInterest(interest)}
                    className="h-4 w-4 rounded border-ink-100 text-brand-500"
                  />
                  {interest}
                </label>
              ))}
            </div>
            {errors.interests && <p role="alert" className="mt-1 text-xs font-medium text-red-600">{errors.interests}</p>}
          </fieldset>

          <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
            Sign up to volunteer
          </Button>
        </form>
      </section>
    </>
  );
}
