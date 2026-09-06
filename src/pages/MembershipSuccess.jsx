import { Navigate } from "react-router-dom";
import { PartyPopper } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import Avatar from "../components/Avatar.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { formatDate } from "../utils/formatters.js";

export default function MembershipSuccess() {
  const { member } = useAuth();

  if (!member) return <Navigate to="/join" replace />;

  return (
    <>
      <PageHeader eyebrow="Welcome" title="You're now part of Forward Nigeria Party" />
      <section className="mx-auto max-w-md px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-ink-100 bg-white p-6 text-center">
          <PartyPopper className="mx-auto mb-3 text-gold-400" size={32} aria-hidden="true" />
          <Avatar name={`${member.firstName} ${member.lastName}`} size={64} />
          <h2 className="mt-3 font-display text-lg font-bold text-ink-900">
            {member.firstName} {member.lastName}
          </h2>
          <p className="text-sm text-ink-500">{member.ward}, {member.lga} LGA, {member.state}</p>

          <div className="mt-6 rounded-xl bg-brand-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">Digital Membership Card</p>
            <p className="mt-1 font-display text-xl font-bold text-brand-700">{member.membershipNumber}</p>
            <p className="mt-1 text-xs text-brand-600">Member since {formatDate(member.joinedOn)}</p>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Button to="/dashboard" variant="primary">Go to my dashboard</Button>
            <Button to="/volunteer" variant="outline">Sign up to volunteer</Button>
          </div>
        </div>
      </section>
    </>
  );
}
