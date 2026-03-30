import React, { FC, useEffect, useMemo, useRef, useState } from "react";

interface ScreenshotPreviewProps {
  src: string;
  alt: string;
  durationMs?: number;
}

const ScreenshotPreview: FC<ScreenshotPreviewProps> = ({
  src,
  alt,
  durationMs = 7000,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

const imageRef = useRef<HTMLImageElement>(null);
const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = windowRef.current;
    if (!element || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const { width, height } = entry.contentRect;
      setWindowSize({ width, height });
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

useEffect(() => {
  if (
    !windowSize.width ||
    !windowSize.height ||
    !naturalSize.width ||
    !naturalSize.height
  ) {
    setScrollDistance(0);
    return;
  }

  const renderedHeight =
    (naturalSize.height / naturalSize.width) * windowSize.width;

  const distance = renderedHeight - windowSize.height;

  setScrollDistance(distance > 0 ? distance : 0);
}, [windowSize, naturalSize]);

useEffect(() => {
  if (!src) return;

  const img = new window.Image();

  img.onload = () => {
    setNaturalSize({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
  };

  img.src = src;
}, [src]);

  return (
    <div
      className="relative min-h-[260px] w-full overflow-hidden rounded-[20px] p-3 md:min-h-[380px] md:w-[55%] md:p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={windowRef}
        className="absolute inset-3 overflow-hidden rounded-[14px] md:inset-4"
        aria-label={alt}
      >
        <img
          src={src}
          alt={alt}
          ref={imageRef}
          draggable={false}
          className="block w-full max-w-none select-none rounded-[14px]"
          style={{
            height: "auto",
            transform: hovered
              ? `translate3d(0, -${scrollDistance}px, 0)`
              : "translate3d(0, 0, 0)",
            transition: `transform ${durationMs}ms linear`,
            willChange: "transform",
          }}
     
        />
        
      </div>
    </div>
  );
};

export default ScreenshotPreview;
