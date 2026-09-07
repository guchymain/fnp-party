import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";
import { formatShortDate } from "../utils/formatters.js";
import Card from "./Card.jsx";
import Photo from "./Photo.jsx";

export default function EventCard({ event }) {
  const { day, month } = formatShortDate(event.date);
  return (
    <Card as="article" flush className="group flex flex-col gap-0 overflow-hidden sm:flex-row">
      <div className="relative aspect-[16/9] shrink-0 overflow-hidden bg-ink-100 sm:aspect-auto sm:w-56">
        <Photo
          src={event.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-4 p-5">
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
      </div>
    </Card>
  );
}