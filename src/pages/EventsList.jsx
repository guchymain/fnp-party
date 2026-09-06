import { useState } from "react";
import { CalendarDays } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Tabs from "../components/Tabs.jsx";
import EventCard from "../components/EventCard.jsx";
import EmptyState from "../components/EmptyState.jsx";
import { events } from "../data/events.js";

export default function EventsList() {
  const [tab, setTab] = useState("upcoming");
  const filtered = events.filter((e) => (tab === "upcoming" ? !e.past : e.past));

  return (
    <>
      <PageHeader eyebrow="Events" title="Events Calendar" description="Town halls, orientations, and trainings happening across the country." />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <Tabs
          tabs={[
            { value: "upcoming", label: "Upcoming" },
            { value: "past", label: "Past" },
          ]}
          active={tab}
          onChange={setTab}
        />
        <div className="mt-6 space-y-4">
          {filtered.length > 0 ? (
            filtered.map((event) => <EventCard key={event.slug} event={event} />)
          ) : (
            <EmptyState
              icon={CalendarDays}
              title="Nothing scheduled here yet"
              description="Check back soon, or explore past events to see what your local chapter has been up to."
            />
          )}
        </div>
      </section>
    </>
  );
}
