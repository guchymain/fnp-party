import { useState } from "react";
import { ImageIcon } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Modal from "../components/Modal.jsx";

const galleryItems = [
  { id: 1, caption: "Ward Congress — Ikeja, Lagos", tone: "bg-brand-400" },
  { id: 2, caption: "Volunteer Orientation — Abuja", tone: "bg-gold-300" },
  { id: 3, caption: "Town Hall — Port Harcourt", tone: "bg-brand-600" },
  { id: 4, caption: "Manifesto Launch — Abuja", tone: "bg-brand-300" },
  { id: 5, caption: "Youth Bootcamp — Kano", tone: "bg-gold-400" },
  { id: 6, caption: "Women's Mentorship Kickoff — Enugu", tone: "bg-brand-500" },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHeader eyebrow="News & Media" title="Media Gallery" description="Photos from grassroots activity across the country." />
      <section className="mx-auto max-w-[1920px] px-4 py-14 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              className={`group relative flex aspect-video items-center justify-center rounded-2xl ${item.tone} text-white`}
            >
              <ImageIcon size={32} aria-hidden="true" className="opacity-70" />
              <span className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-black/40 px-3 py-2 text-left text-sm font-medium">
                {item.caption}
              </span>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <Modal title={active.caption} onClose={() => setActive(null)}>
          <div className={`flex aspect-video items-center justify-center rounded-xl ${active.tone} text-white`}>
            <ImageIcon size={48} aria-hidden="true" className="opacity-70" />
          </div>
          <p className="mt-3 text-sm text-ink-600">{active.caption}</p>
        </Modal>
      )}
    </>
  );
}
