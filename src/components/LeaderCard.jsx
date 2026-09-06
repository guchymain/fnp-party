import Avatar from "./Avatar.jsx";
import { VerifiedBadge } from "./Badge.jsx";
import Card from "./Card.jsx";

export default function LeaderCard({ name, role, state, bio, verified }) {
  return (
    <Card className="flex flex-col items-start gap-3">
      <div className="flex w-full items-start justify-between gap-3">
        <Avatar name={name} />
        {verified && <VerifiedBadge />}
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-ink-900">{name}</h3>
        <p className="text-sm font-semibold text-brand-500">{role}</p>
        <p className="text-xs text-ink-400">{state} Chapter</p>
      </div>
      {bio && <p className="text-sm text-ink-600">{bio}</p>}
    </Card>
  );
}
