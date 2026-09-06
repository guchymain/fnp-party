import { Laptop2, Megaphone, Users2 } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import { Badge } from "../components/Badge.jsx";
import Button from "../components/Button.jsx";

const opportunities = [
  {
    icon: Users2,
    title: "Ward Canvassing Team — Ikeja, Lagos",
    tag: "Canvassing",
    commitment: "4 hrs / weekend",
    description: "Join a small team knocking on doors to introduce neighbors to the manifesto and register new supporters.",
  },
  {
    icon: Megaphone,
    title: "Digital Advocacy Volunteers — Nationwide",
    tag: "Digital",
    commitment: "Flexible, remote",
    description: "Help share verified party updates and counter misinformation across social platforms.",
  },
  {
    icon: Laptop2,
    title: "Data & Tech Support — FCT",
    tag: "Tech",
    commitment: "6 hrs / week",
    description: "Support the ward finder tool, volunteer database hygiene, and event RSVP systems.",
  },
  {
    icon: Users2,
    title: "Event Support Crew — Port Harcourt",
    tag: "Events",
    commitment: "Per event",
    description: "Help set up, register attendees, and coordinate logistics at town halls and rallies.",
  },
];

export default function VolunteerOpportunities() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Volunteer Opportunities"
        description="Roles our chapters need filled right now — sign up and a local coordinator will match you."
      />
      <section className="mx-auto max-w-4xl space-y-4 px-4 py-14 sm:px-6">
        {opportunities.map((role) => (
          <Card key={role.title} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <role.icon size={22} aria-hidden="true" />
              </div>
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-bold text-ink-900">{role.title}</h3>
                  <Badge tone="gold">{role.tag}</Badge>
                </div>
                <p className="text-sm text-ink-600">{role.description}</p>
                <p className="mt-1 text-xs font-medium text-ink-400">{role.commitment}</p>
              </div>
            </div>
            <Button to="/volunteer" variant="outline" className="shrink-0">
              Sign up
            </Button>
          </Card>
        ))}
      </section>
    </>
  );
}
