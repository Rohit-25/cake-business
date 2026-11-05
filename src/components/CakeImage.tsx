import { useState } from "react";

type CakeImageProps = {
  src: string;
  alt: string;
  fallbackLabel: string;
  className?: string;
  eager?: boolean;
};

export function CakeImage({ src, alt, fallbackLabel, className = "", eager = false }: CakeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-end bg-[#EFE8DC] p-4 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-lg leading-tight text-chocolate">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={1200}
      height={1500}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
