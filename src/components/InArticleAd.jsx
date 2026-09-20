"use client";

import { useEffect, useRef } from "react";

export default function InArticleAd() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const ad = container.querySelector(".adsbygoogle");
    if (!ad || ad.dataset.initialized) return undefined;

    const pushAd = () => {
      if (container.offsetWidth === 0 || ad.dataset.initialized) return;

      ad.dataset.initialized = "true";
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      observer.disconnect();
    };

    const observer = new ResizeObserver(pushAd);
    observer.observe(container);
    requestAnimationFrame(pushAd);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex h-[400px] min-w-0 w-full items-center justify-center overflow-hidden"
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          maxHeight: "400px",
          overflow: "hidden",
          textAlign: "center",
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3189112748745866"
        data-ad-slot="5183996108"
      />
    </div>
  );
}