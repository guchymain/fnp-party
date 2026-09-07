import { imagePool } from "./images.js";

export const heroSlides = [
  {
    id: 1,
    image: imagePool.streetCrowd,
    alt: "Ward volunteers canvassing door-to-door in Lagos",
    fallbackClass: "bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800",
  },
  {
    id: 2,
    image: imagePool.conferenceHall,
    alt: "Community town hall meeting",
    fallbackClass: "bg-gradient-to-br from-brand-800 via-gold-600 to-brand-700",
  },
  {
    id: 3,
    image: imagePool.crowdFlags,
    alt: "National convention delegates from across Nigeria",
    fallbackClass: "bg-gradient-to-br from-ink-900 via-brand-700 to-brand-600",
  },
  {
    id: 4,
    image: imagePool.youthStudy,
    alt: "Youth volunteers at a membership registration drive",
    fallbackClass: "bg-gradient-to-br from-brand-600 via-brand-800 to-gold-600",
  },
];