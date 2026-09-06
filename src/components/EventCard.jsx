import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";
import { formatShortDate } from "../utils/formatters.js";
import Card from "./Card.jsx";

export default function EventCard({ event }) {
  const { day, month } = formatShortDate(event.date);
  return (
    <Card as="article" className="flex gap-4">
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <span className="font-display text-xl font-extrabold leading-none">{day}</span>
        <span className="text-xs font-bold">{month}</span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display font-bold text-ink-900">
          <Link to={`/events/${event.slug}`} className="hover:text-brand-600">
            {event.title}
          </Link>
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-600">
          <Clock size={14} aria-hidden="true" /> {event.time}
        </p>
        <p className="mt-0.5 flex items-center gap-1.5 text-sm text-ink-600">
          <MapPin size={14} aria-hidden="true" /> {event.location}
        </p>
      </div>
    </Card>
  );
}
