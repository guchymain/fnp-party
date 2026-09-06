import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import DonationTierCard from "../components/DonationTierCard.jsx";
import Button from "../components/Button.jsx";
import { TextField, TextareaField } from "../components/FormField.jsx";
import { formatNaira } from "../utils/formatters.js";
import { isRequired, isEmail, runValidation } from "../utils/validators.js";
import { appendToLocalStorageList } from "../hooks/useLocalStorage.js";
import { useAuth } from "../context/AuthContext.jsx";

const DONATION_CAP = 50_000_000;

const tiers = [
  { amount: 5000, label: "Fund a ward canvassing kit" },
  { amount: 20000, label: "Support a town hall" },
  { amount: 100000, label: "Sponsor volunteer training" },
  { amount: 500000, label: "Back an LGA organizing drive" },
];

export default function Donate() {
  const { isAuthenticated, member, addDonationRecord } = useAuth();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(tiers[1].amount);
  const [customAmount, setCustomAmount] = useState("");
  const [form, setForm] = useState({
    name: member ? `${member.firstName} ${member.lastName}` : "",
    email: member?.email ?? "",
    sourceOfFunds: "",
  });
  const [errors, setErrors] = useState({});

  const effectiveAmount = customAmount ? Number(customAmount) : amount;
  const exceedsCap = effectiveAmount > DONATION_CAP;
  const requiresDisclosure = effectiveAmount > DONATION_CAP * 0.2;

  function handleSubmit(e) {
    e.preventDefault();
    const rules = {
      name: [[isRequired, "Name is required"]],
      email: [[isRequired, "Email is required"], [isEmail, "Enter a valid email"]],
    };
    if (requiresDisclosure) {
      rules.sourceOfFunds = [[isRequired, "Please describe the source of funds for disclosure"]];
    }
    const stepErrors = runValidation(form, rules);
    if (!effectiveAmount || effectiveAmount <= 0) stepErrors.amount = "Enter a valid donation amount";
    if (exceedsCap) stepErrors.amount = `Single donations cannot exceed ${formatNaira(DONATION_CAP)} without prior INEC clearance`;
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    const receipt = {
      ...form,
      amount: effectiveAmount,
      receiptId: `FNP-DON-${Date.now().toString().slice(-8)}`,
      date: new Date().toISOString(),
    };
    appendToLocalStorageList("fnp_donations_ledger", receipt);
    if (isAuthenticated) addDonationRecord(receipt);
    navigate("/donate/success", { state: receipt });
  }

  return (
    <>
      <PageHeader eyebrow="Get Involved" title="Donate to FNP" description="Fund grassroots organizing — transparently, and within the law." />
      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex gap-3 rounded-2xl bg-gold-50 p-4 text-sm text-gold-600">
          <ShieldAlert size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">Legal limits, per the Electoral Act 2022</p>
            <ul className="mt-1 list-disc space-y-1 pl-4">
              <li>No single donation may exceed {formatNaira(DONATION_CAP)} without the source being disclosed to INEC (§90(3)).</li>
              <li>FNP cannot accept foreign donations or hold funds outside Nigeria.</li>
              <li>All donations are recorded and included in our quarterly Transparency Hub reports.</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-2xl border border-ink-100 bg-white p-6">
          <div>
            <p className="mb-3 text-sm font-semibold text-ink-900">Choose an amount</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {tiers.map((tier) => (
                <DonationTierCard
                  key={tier.amount}
                  amount={tier.amount}
                  label={tier.label}
                  selected={!customAmount && amount === tier.amount}
                  onSelect={(value) => {
                    setAmount(value);
                    setCustomAmount("");
                  }}
                />
              ))}
            </div>
            <div className="mt-3">
              <TextField
                id="custom-amount"
                label="Or enter a custom amount (₦)"
                type="number"
                min="100"
                value={customAmount}
                error={errors.amount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>
          </div>

          <TextField id="d-name" label="Full name" required value={form.name} error={errors.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
          <TextField id="d-email" type="email" label="Email address" required value={form.email} error={errors.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />

          {requiresDisclosure && (
            <TextareaField
              id="d-source"
              label="Source of funds (for INEC disclosure)"
              required
              hint="Required for larger donations under the party's disclosure obligations."
              value={form.sourceOfFunds}
              error={errors.sourceOfFunds}
              onChange={(e) => setForm((f) => ({ ...f, sourceOfFunds: e.target.value }))}
            />
          )}

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Donate {formatNaira(effectiveAmount || 0)} (demo — no real payment)
          </Button>
          <p className="text-center text-xs text-ink-400">
            This prototype does not process real payments. A production build integrates a licensed
            Nigerian payment gateway.
          </p>
        </form>
      </section>
    </>
  );
}
