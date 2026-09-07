import { useState } from "react";
import { useParams } from "react-router-dom";
import { CalendarCheck, Clock, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import Photo from "../components/Photo.jsx";
import { formatDate } from "../utils/formatters.js";
import { events } from "../data/events.js";
import { useAuth } from "../context/AuthContext.jsx";
import NotFound from "./NotFound.jsx";

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);
  const { isAuthenticated, member, addRsvp } = useAuth();
  const [rsvped, setRsvped] = useState(false);

  if (!event) return <NotFound />;

  const alreadyRsvped = rsvped || member?.rsvps?.includes(event.slug);

  function handleRsvp() {
    addRsvp(event.slug);
    setRsvped(true);
  }

  return (
    <>
      <PageHeader eyebrow={event.type} title={event.title} />
      <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
        <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-ink-100">
          <Photo
            src={event.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="space-y-3 rounded-2xl border border-ink-100 bg-white p-6">
          <p className="flex items-center gap-2 text-sm text-ink-700">
            <CalendarCheck size={16} className="text-brand-500" aria-hidden="true" /> {formatDate(event.date)}
          </p>
          <p className="flex items-center gap-2 text-sm text-ink-700">
            <Clock size={16} className="text-brand-500" aria-hidden="true" /> {event.time}
          </p>
          <p className="flex items-center gap-2 text-sm text-ink-700">
            <MapPin size={16} className="text-brand-500" aria-hidden="true" /> {event.location}
          </p>
        </div>

        <p className="mt-6 text-ink-600">{event.description}</p>

        {!event.past && (
          <div className="mt-8">
            {alreadyRsvped ? (
              <p className="rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
                You're on the list — see you there!
              </p>
            ) : isAuthenticated ? (
              <Button onClick={handleRsvp} variant="primary" size="lg">
                RSVP to this event
              </Button>
            ) : (
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-ink-600">Join FNP or log in to RSVP.</p>
                <Button to="/join" variant="primary">Join FNP</Button>
                <Button to="/login" variant="outline">Login</Button>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}
