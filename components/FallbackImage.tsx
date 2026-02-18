"use client";

import { useState } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackContent: React.ReactNode;
}

export default function FallbackImage({
  src,
  alt,
  className,
  fallbackContent,
}: FallbackImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <>{fallbackContent}</>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
