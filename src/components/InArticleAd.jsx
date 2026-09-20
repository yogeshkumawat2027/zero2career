"use client";

import { useEffect, useRef, useState } from "react";

export default function InArticleAd() {
  const containerRef = useRef(null);
  const [hasAd, setHasAd] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const ad = container.querySelector(".adsbygoogle");
    if (!ad || ad.dataset.initialized) return undefined;

    const updateAdVisibility = () => {
      setHasAd(ad.getAttribute("data-ad-status") === "filled");
    };

    const adObserver = new MutationObserver(updateAdVisibility);
    adObserver.observe(ad, { attributes: true });

    const pushAd = () => {
      if (container.offsetWidth === 0 || ad.dataset.initialized) return;

      ad.dataset.initialized = "true";
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        ad.dataset.initialized = "";
      }
      observer.disconnect();
    };

    const observer = new ResizeObserver(pushAd);
    observer.observe(container);
    requestAnimationFrame(pushAd);

    return () => {
      observer.disconnect();
      adObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`min-w-0 w-full overflow-hidden ${hasAd ? "relative col-span-full h-auto" : "absolute left-0 top-0 z-0 h-0"}`}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3189112748745866"
        data-ad-slot="5183996108"
        data-full-width-responsive="true"
      />
    </div>
  );
}