import { useState } from "react";
import { Navigate } from "react-router-dom";
import { CalendarCheck, HandCoins, HeartHandshake, IdCard, LogOut } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Tabs from "../components/Tabs.jsx";
import Avatar from "../components/Avatar.jsx";
import Button from "../components/Button.jsx";
import EmptyState from "../components/EmptyState.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { formatDate, formatNaira } from "../utils/formatters.js";
import { events } from "../data/events.js";

export default function MemberDashboard() {
  const { member, logout } = useAuth();
  const [tab, setTab] = useState("profile");

  if (!member) return <Navigate to="/login" replace />;

  const rsvpedEvents = events.filter((e) => member.rsvps?.includes(e.slug));

  return (
    <>
      <PageHeader eyebrow="Member Portal" title={`Welcome back, ${member.firstName}`} />
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <Tabs
          tabs={[
            { value: "profile", label: "Profile & ID" },
            { value: "events", label: "My Events" },
            { value: "volunteering", label: "Volunteering" },
            { value: "donations", label: "My Donations" },
          ]}
          active={tab}
          onChange={setTab}
        />

        <div className="mt-6">
          {tab === "profile" && (
            <div className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="flex items-center gap-4">
                <Avatar name={`${member.firstName} ${member.lastName}`} size={64} />
                <div>
                  <h2 className="font-display text-lg font-bold text-ink-900">{member.firstName} {member.lastName}</h2>
                  <p className="text-sm text-ink-500">{member.email}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-brand-50 p-4">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-500">
                    <IdCard size={14} aria-hidden="true" /> Membership Number
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-brand-700">{member.membershipNumber}</p>
                  <p className="text-xs text-brand-600">Member since {formatDate(member.joinedOn)}</p>
                </div>
                <div className="rounded-xl bg-ink-100 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-600">My Ward</p>
                  <p className="mt-1 font-display text-lg font-bold text-ink-900">{member.ward}</p>
                  <p className="text-xs text-ink-500">{member.lga} LGA, {member.state} State</p>
                </div>
              </div>
              <Button variant="outline" className="mt-6" onClick={logout}>
                <LogOut size={16} aria-hidden="true" /> Log out
              </Button>
            </div>
          )}

          {tab === "events" && (
            <div className="space-y-3">
              {rsvpedEvents.length > 0 ? (
                rsvpedEvents.map((event) => (
                  <div key={event.slug} className="flex items-center justify-between rounded-xl border border-ink-100 bg-white p-4">
                    <div>
                      <p className="font-semibold text-ink-900">{event.title}</p>
                      <p className="text-sm text-ink-500">{formatDate(event.date)} · {event.location}</p>
                    </div>
                  </div>
                ))
              ) : (
                <EmptyState
                  icon={CalendarCheck}
                  title="No RSVPs yet"
                  description="Browse the events calendar and RSVP to see them here."
                  action={<Button to="/events" variant="primary" className="mt-2">Browse events</Button>}
                />
              )}
            </div>
          )}

          {tab === "volunteering" && (
            <div className="space-y-4">
              <div className="rounded-xl bg-brand-50 p-4 text-center">
                <p className="font-display text-2xl font-extrabold text-brand-700">{member.volunteerHours ?? 0} hrs</p>
                <p className="text-sm text-brand-600">Estimated volunteer hours logged</p>
              </div>
              {member.volunteering?.length > 0 ? (
                member.volunteering.map((entry, i) => (
                  <div key={i} className="rounded-xl border border-ink-100 bg-white p-4 text-sm text-ink-700">
                    Signed up for: {entry.interests?.join(", ")}
                  </div>
                ))
              ) : (
                <EmptyState
                  icon={HeartHandshake}
                  title="No volunteer sign-ups yet"
                  description="Find a role that matches your skills and schedule."
                  action={<Button to="/volunteer/opportunities" variant="primary" className="mt-2">View opportunities</Button>}
                />
              )}
            </div>
          )}

          {tab === "donations" && (
            <div className="space-y-3">
              {member.donations?.length > 0 ? (
                member.donations.map((donation) => (
                  <div key={donation.receiptId} className="flex items-center justify-between rounded-xl border border-ink-100 bg-white p-4">
                    <div>
                      <p className="font-semibold text-ink-900">{formatNaira(donation.amount)}</p>
                      <p className="text-xs text-ink-500">Receipt #{donation.receiptId} · {formatDate(donation.date)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <EmptyState
                  icon={HandCoins}
                  title="No donations yet"
                  description="Every contribution funds ward-level organizing directly."
                  action={<Button to="/donate" variant="primary" className="mt-2">Donate</Button>}
                />
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
