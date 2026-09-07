import { useState } from "react";
import { initials } from "../utils/formatters.js";

export default function Avatar({ name, size = 56, tone = "brand", src }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const tones = {
    brand: "bg-brand-500 text-white",
    gold: "bg-gold-300 text-ink-900",
  };

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full font-display font-bold ${tones[tone]}`}
      style={{ width: size, height: size }}
      aria-hidden={src ? undefined : "true"}
      role={src ? "img" : undefined}
      aria-label={src ? name : undefined}
    >
      {src && !failed && (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${loaded ? "" : "opacity-0"}`}
        />
      )}
      {(failed || !src) && (
        <span style={{ fontSize: size * 0.36 }}>{initials(name)}</span>
      )}
    </div>
  );
}