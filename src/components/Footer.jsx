import { Link } from "react-router-dom";
import { AtSign, Camera, Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "The Party",
    links: [
      { label: "About FNP", to: "/about" },
      { label: "Leadership", to: "/about/leadership" },
      { label: "Party Structure", to: "/about/structure" },
      { label: "Constitution & Ideology", to: "/about/constitution" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Join FNP", to: "/join" },
      { label: "Volunteer", to: "/volunteer" },
      { label: "Donate", to: "/donate" },
      { label: "Events", to: "/events" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Manifesto", to: "/manifesto" },
      { label: "News", to: "/news" },
      { label: "Transparency Hub", to: "/transparency" },
      { label: "FAQ", to: "/faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-ink-100">
      <div className="mx-auto max-w-[1920px] px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-white">
              <img src="/favicon.svg" alt="" width={32} height={32} aria-hidden="true" />
              Forward Nigeria Party
            </Link>
            <p className="mt-3 max-w-sm text-sm text-ink-100/70">
              People First, Nigeria Forward. A grassroots-built party organized from the ward up,
              registered in accordance with the Electoral Act 2022 and INEC guidelines.
            </p>
            <div className="mt-4 flex gap-3">
              <Link to="/contact" aria-label="Contact us" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <AtSign size={16} />
              </Link>
              <Link to="/gallery" aria-label="Photo gallery" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <Camera size={16} />
              </Link>
              <a href="mailto:info@forwardnigeriaparty.ng" aria-label="Email us" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-ink-100/70 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-100/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                Plot 14, Unity Crescent, Central Business District, Abuja, FCT
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} aria-hidden="true" />
                <a href="tel:+2348000000000" className="hover:text-white">+234 800 000 0000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" />
                <a href="mailto:info@forwardnigeriaparty.ng" className="hover:text-white">
                  info@forwardnigeriaparty.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Forward Nigeria Party. Demo platform — fictional party for
            design purposes only, not a real INEC-registered entity.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
