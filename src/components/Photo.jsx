import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";

export default function Photo({
  src,
  alt = "",
  className = "",
  fallbackClassName = "bg-brand-100",
  iconSize = 32,
  ...props
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center ${fallbackClassName} ${className}`}
      >
        <ImageIcon
          size={iconSize}
          aria-hidden="true"
          className="text-white/60"
        />
      </div>
    );
  }

  return <img src={src} alt={alt} onError={() => setFailed(true)} className={className} {...props} />;
}