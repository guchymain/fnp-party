import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Flag,
  Grid2x2,
  HandHeart,
  HeartHandshake,
  Quote,
  UserPlus,
  Users,
} from "lucide-react";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import StatCard from "../components/StatCard.jsx";
import Card from "../components/Card.jsx";
import DynamicIcon from "../components/DynamicIcon.jsx";
import NewsCard from "../components/NewsCard.jsx";
import EventCard from "../components/EventCard.jsx";
import LeaderCard from "../components/LeaderCard.jsx";
import HeroSlideshow from "../components/HeroSlideshow.jsx";
import Photo from "../components/Photo.jsx";
import { manifestoPillars } from "../data/manifesto.js";
import { newsArticles } from "../data/news.js";
import { events } from "../data/events.js";
import { nationalOfficers } from "../data/leadership.js";
import { heroSlides } from "../data/heroSlides.js";
import { imagePool } from "../data/images.js";

const stats = [
  { value: "37", label: "State chapters incl. FCT", icon: Building2 },
  { value: "774", label: "LGAs organizing", icon: Grid2x2 },
  { value: "50k+", label: "Registered members", icon: Users },
  { value: "8", label: "Manifesto pillars", icon: Flag },
];

export default function Home() {
  const upcomingEvent = events.find((e) => !e.past);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-500">
        <HeroSlideshow slides={heroSlides} />
        <div className="relative z-[1] mx-auto grid max-w-[1920px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white">
              A grassroots movement, built ward by ward
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              People First, Nigeria Forward.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-brand-50">
              Forward Nigeria Party is organizing from the ward up — real people, real
              accountability, and a manifesto with commitments we report on publicly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/join" variant="gold" size="lg">
                <UserPlus size={18} aria-hidden="true" /> Join FNP
              </Button>
              <Button to="/manifesto" variant="white" size="lg">
                Read the Manifesto <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Our Manifesto"
          title="Eight pillars, one accountable plan"
          description="Plain-language commitments you can hold us to — not a PDF that disappears after election season."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {manifestoPillars.slice(0, 3).map((pillar) => (
            <Card key={pillar.slug} as={Link} to={`/manifesto/${pillar.slug}`} className="group hover:border-brand-300">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <DynamicIcon name={pillar.icon} size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900">{pillar.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{pillar.summary}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/manifesto" variant="outline">
            View all 8 pillars <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1920px] px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Newsroom" title="Latest news" />
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {newsArticles.slice(0, 2).map((article) => (
                  <NewsCard key={article.slug} article={article} />
                ))}
              </div>
              <Button to="/news" variant="ghost" className="mt-4">
                All news <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
            <div>
              <SectionHeading eyebrow="What's next" title="Upcoming event" />
              <div className="mt-6">
                {upcomingEvent ? (
                  <EventCard event={upcomingEvent} />
                ) : (
                  <p className="text-sm text-ink-600">Check back soon for new events.</p>
                )}
              </div>
              <Button to="/events" variant="ghost" className="mt-4">
                Full events calendar <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Photo
            src={imagePool.plazaGathering}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-white sm:px-6">
          <Quote className="mx-auto mb-4 text-gold-300" size={32} aria-hidden="true" />
          <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">
            Everything we do is built from the ward up — because the people who know their
            community best should be the ones deciding its future.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-100">
            Amina T. Balogun — National Chairman
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1920px] px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Leadership" title="Meet the National Working Committee" align="center" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nationalOfficers.slice(0, 4).map((officer) => (
            <LeaderCard key={officer.id} {...officer} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/about/leadership" variant="outline">
            View full leadership <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink-900 py-16">
        <div className="absolute inset-0" aria-hidden="true">
          <Photo
            src={imagePool.crowdFlags}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/85" />
        </div>
        <div className="relative mx-auto max-w-[1920px] px-4 sm:px-6">
          <SectionHeading
            eyebrow="Get Involved"
            title="Three ways to move the party forward"
            align="center"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-6 text-center text-white backdrop-blur-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-300/20 text-gold-300">
                <UserPlus size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold">Become a Member</h3>
              <p className="mt-2 text-sm text-white/70">Join your ward chapter in minutes.</p>
              <Button to="/join" variant="gold" className="mt-4">Join FNP</Button>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 text-center text-white backdrop-blur-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-300/20 text-gold-300">
                <HandHeart size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold">Volunteer</h3>
              <p className="mt-2 text-sm text-white/70">Give your skills and time locally.</p>
              <Button to="/volunteer" variant="outline" className="mt-4 border-white text-white hover:bg-white/10">
                Volunteer
              </Button>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 text-center text-white backdrop-blur-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-300/20 text-gold-300">
                <HeartHandshake size={24} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold">Donate</h3>
              <p className="mt-2 text-sm text-white/70">Fund grassroots organizing, transparently.</p>
              <Button to="/donate" variant="outline" className="mt-4 border-white text-white hover:bg-white/10">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}