import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import ProgressSteps from "../components/ProgressSteps.jsx";
import Button from "../components/Button.jsx";
import { TextField, SelectField, CheckboxField } from "../components/FormField.jsx";
import { statesLgas } from "../data/statesLgas.js";
import { isRequired, isEmail, isNigerianPhone, isNIN, runValidation } from "../utils/validators.js";
import { useAuth } from "../context/AuthContext.jsx";

const steps = ["Personal Info", "Your Ward", "Verification", "Review"];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  state: "",
  lga: "",
  ward: "",
  nin: "",
  agreeConstitution: false,
  agreePrivacy: false,
};

export default function Join() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { registerMember } = useAuth();
  const navigate = useNavigate();

  const lgas = useMemo(
    () => statesLgas.find((s) => s.state === form.state)?.lgas ?? [],
    [form.state]
  );
  const wards = useMemo(
    () => lgas.find((l) => l.name === form.lga)?.wards ?? [],
    [lgas, form.lga]
  );

  function update(field, value) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "state") {
        next.lga = "";
        next.ward = "";
      }
      if (field === "lga") next.ward = "";
      return next;
    });
  }

  function validateStep() {
    let rules = {};
    if (step === 1) {
      rules = {
        firstName: [[isRequired, "First name is required"]],
        lastName: [[isRequired, "Last name is required"]],
        email: [[isRequired, "Email is required"], [isEmail, "Enter a valid email address"]],
        phone: [[isRequired, "Phone number is required"], [isNigerianPhone, "Enter a valid Nigerian phone number"]],
        dob: [[isRequired, "Date of birth is required"]],
      };
    } else if (step === 2) {
      rules = {
        state: [[isRequired, "Select your state"]],
        lga: [[isRequired, "Select your LGA"]],
        ward: [[isRequired, "Select your ward"]],
      };
    } else if (step === 3) {
      rules = {
        nin: [[isRequired, "NIN is required for verification"], [isNIN, "NIN must be 11 digits"]],
        agreeConstitution: [[(v) => v === true, "You must agree to the party constitution"]],
        agreePrivacy: [[(v) => v === true, "You must agree to the privacy policy"]],
      };
    }
    const stepErrors = runValidation(form, rules);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }

  function handleNext() {
    if (validateStep()) setStep((s) => Math.min(s + 1, steps.length));
  }

  function handleBack() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  }

  function handleSubmit() {
    registerMember(form);
    navigate("/join/success");
  }

  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Join Forward Nigeria Party"
        description="Membership is free. It takes about three minutes and registers you at your local ward, as required of every party under the Electoral Act."
      />
      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <ProgressSteps steps={steps} current={step} />

        <div className="mt-8 space-y-5 rounded-2xl border border-ink-100 bg-white p-6">
          {step === 1 && (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField id="firstName" label="First name" required value={form.firstName} error={errors.firstName} onChange={(e) => update("firstName", e.target.value)} />
                <TextField id="lastName" label="Last name" required value={form.lastName} error={errors.lastName} onChange={(e) => update("lastName", e.target.value)} />
              </div>
              <TextField id="email" type="email" label="Email address" required value={form.email} error={errors.email} onChange={(e) => update("email", e.target.value)} />
              <TextField id="phone" label="Phone number" placeholder="080..." required value={form.phone} error={errors.phone} onChange={(e) => update("phone", e.target.value)} />
              <TextField id="dob" type="date" label="Date of birth" required value={form.dob} error={errors.dob} onChange={(e) => update("dob", e.target.value)} />
            </>
          )}

          {step === 2 && (
            <>
              <p className="text-sm text-ink-600">
                Your ward is where your membership is officially registered and authenticated —
                the same requirement INEC places on every party's membership register.
              </p>
              <SelectField id="state" label="State" required placeholder="Select state" options={statesLgas.map((s) => s.state)} value={form.state} error={errors.state} onChange={(e) => update("state", e.target.value)} />
              <SelectField id="lga" label="LGA" required placeholder={form.state ? "Select LGA" : "Select a state first"} options={lgas.map((l) => l.name)} value={form.lga} error={errors.lga} onChange={(e) => update("lga", e.target.value)} disabled={!form.state} />
              <SelectField id="ward" label="Ward" required placeholder={form.lga ? "Select ward" : "Select an LGA first"} options={wards} value={form.ward} error={errors.ward} onChange={(e) => update("ward", e.target.value)} disabled={!form.lga} />
            </>
          )}

          {step === 3 && (
            <>
              <TextField
                id="nin"
                label="National Identification Number (NIN)"
                required
                hint="Used for identity verification only. In this demo, it is stored locally on your device, not transmitted anywhere."
                value={form.nin}
                error={errors.nin}
                onChange={(e) => update("nin", e.target.value)}
                maxLength={11}
              />
              <div>
                <label htmlFor="id-upload" className="mb-1.5 block text-sm font-semibold text-ink-900">
                  Voter's Card or valid ID (optional, demo only)
                </label>
                <input id="id-upload" type="file" className="block w-full text-sm text-ink-600" />
              </div>
              <CheckboxField
                id="agreeConstitution"
                label="I have read and agree to the FNP Constitution and Code of Conduct."
                checked={form.agreeConstitution}
                error={errors.agreeConstitution}
                onChange={(e) => update("agreeConstitution", e.target.checked)}
              />
              <CheckboxField
                id="agreePrivacy"
                label="I consent to FNP storing my information for membership purposes, in line with the Privacy Policy."
                checked={form.agreePrivacy}
                error={errors.agreePrivacy}
                onChange={(e) => update("agreePrivacy", e.target.checked)}
              />
            </>
          )}

          {step === 4 && (
            <div className="space-y-3 text-sm text-ink-700">
              <p><strong>Name:</strong> {form.firstName} {form.lastName}</p>
              <p><strong>Email:</strong> {form.email}</p>
              <p><strong>Phone:</strong> {form.phone}</p>
              <p><strong>Ward:</strong> {form.ward}, {form.lga} LGA, {form.state} State</p>
              <p className="rounded-xl bg-brand-50 p-4 text-brand-700">
                By submitting, a membership number will be generated and your details saved to
                your device for this demo. No data is sent to a server.
              </p>
            </div>
          )}

          <div className="flex justify-between pt-2">
            {step > 1 ? (
              <Button variant="outline" onClick={handleBack}>Back</Button>
            ) : (
              <span />
            )}
            {step < steps.length ? (
              <Button variant="primary" onClick={handleNext}>Continue</Button>
            ) : (
              <Button variant="primary" onClick={handleSubmit}>Submit application</Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
