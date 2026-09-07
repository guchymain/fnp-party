import { useState } from "react";
import { ZoomIn } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Modal from "../components/Modal.jsx";
import Photo from "../components/Photo.jsx";
import { imagePool } from "../data/images.js";

const galleryItems = [
  { id: 1, caption: "Ward Congress — Ikeja, Lagos", src: imagePool.auditorium },
  { id: 2, caption: "Volunteer Orientation — Abuja", src: imagePool.conferenceHall },
  { id: 3, caption: "Town Hall — Port Harcourt", src: imagePool.presentation },
  { id: 4, caption: "Manifesto Launch — Abuja", src: imagePool.seminarSpeaker },
  { id: 5, caption: "Youth Bootcamp — Kano", src: imagePool.studentsClass },
  { id: 6, caption: "Women's Mentorship Kickoff — Enugu", src: imagePool.womenLaptop },
  { id: 7, caption: "Rally in Support of Grassroots Movement", src: imagePool.crowdFlags },
  { id: 8, caption: "Volunteers on the Streets of Lagos", src: imagePool.streetCrowd },
  { id: 9, caption: "Farmers' Town Hall — Makurdi, Benue", src: imagePool.riceField },
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
              className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-ink-100"
            >
              <Photo
                src={item.src}
                alt={item.caption}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-ink-900/0 transition-colors duration-300 group-hover:bg-ink-900/30" />
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn size={16} aria-hidden="true" />
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-8 text-left text-sm font-medium text-white">
                {item.caption}
              </span>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <Modal title={active.caption} onClose={() => setActive(null)} size="lg">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-ink-100">
            <Photo
              src={active.src}
              alt={active.caption}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-ink-600">{active.caption}</p>
        </Modal>
      )}
    </>
  );
}