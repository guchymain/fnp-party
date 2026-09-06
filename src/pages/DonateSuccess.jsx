import { Navigate, useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import { formatNaira, formatDate } from "../utils/formatters.js";

export default function DonateSuccess() {
  const { state: receipt } = useLocation();

  if (!receipt) return <Navigate to="/donate" replace />;

  return (
    <>
      <PageHeader eyebrow="Get Involved" title="Thank you for your donation" />
      <section className="mx-auto max-w-md px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-ink-100 bg-white p-6 text-center">
          <CheckCircle2 className="mx-auto mb-3 text-brand-500" size={40} aria-hidden="true" />
          <p className="font-display text-2xl font-extrabold text-ink-900">{formatNaira(receipt.amount)}</p>
          <p className="mt-1 text-sm text-ink-500">Receipt #{receipt.receiptId}</p>
          <p className="mt-1 text-xs text-ink-400">{formatDate(receipt.date)}</p>
          <p className="mt-4 text-sm text-ink-600">
            This contribution will appear, in aggregate, in our next Transparency Hub report.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <Button to="/transparency" variant="primary">View Transparency Hub</Button>
            <Button to="/" variant="outline">Back to home</Button>
          </div>
        </div>
      </section>
    </>
  );
}
