import { Landmark, MapPin, Milestone, Users } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import SubNav from "../components/SubNav.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import WardFinder from "../components/WardFinder.jsx";
import { aboutSubNav } from "../components/navConfig.js";

const tiers = [
  {
    icon: Users,
    title: "Ward",
    text: "The base unit. Each ward elects a chairman and secretary who jointly authenticate the ward's membership register — the same register INEC requires parties to maintain.",
  },
  {
    icon: MapPin,
    title: "Local Government Area (LGA)",
    text: "774 LGAs nationwide. LGA executive committees coordinate wards, organize congresses, and run local volunteer programs.",
  },
  {
    icon: Milestone,
    title: "State",
    text: "36 states plus the FCT. State chapters run state-level campaigns and feed candidates into national processes.",
  },
  {
    icon: Landmark,
    title: "National",
    text: "The National Working Committee, headquartered in the FCT as required for registration, sets national policy and manifesto direction.",
  },
];

export default function PartyStructure() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Party Structure"
        description="Organized Ward → LGA → State → National, the same structure INEC requires every registered party to maintain."
      />
      <SubNav items={aboutSubNav} />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {tiers.map((tier) => (
            <Card key={tier.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <tier.icon size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-bold text-ink-900">{tier.title}</h3>
                <p className="mt-1 text-sm text-ink-600">{tier.text}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Grassroots Participation" title="Find your ward" description="Select your state, LGA, and ward to find your local chapter contact." />
          <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-6">
            <WardFinder />
          </div>
        </div>
      </section>
    </>
  );
}
