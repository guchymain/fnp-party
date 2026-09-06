import { useEffect, useRef, useState } from "react";

const AUTO_ADVANCE_MS = 6000;

export default function HeroSlideshow({ slides }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || slides.length <= 1) return undefined;

    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timerRef.current);
  }, [slides.length]);

  return (
    <>
      {/* Decorative background layer — the real hero heading/CTAs carry the meaning */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide.fallbackClass ?? "bg-brand-600"} ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={
              slide.image
                ? { backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }
                : undefined
            }
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-brand-900/70 to-brand-700/60" />
      </div>

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show background ${i + 1} of ${slides.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}
