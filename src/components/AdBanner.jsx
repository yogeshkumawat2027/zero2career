"use client";

import { useEffect } from "react";
import { useState } from "react";

export default function AdBanner({
  dataAdClient = "ca-pub-3189112748745866",
  dataAdSlot = "3753621711",
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  minHeight = 250,
  fallbackTitle = "Advertisement",
  fallbackDescription = "Ads may be blocked or unavailable right now.",
}) {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowFallback(true);
    }, 5000);

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error.message);
    }

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="my-8 px-4">
      {!showFallback ? (
        <div className="mx-auto flex min-h-[250px] max-w-4xl items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-4 shadow-sm">
          <ins
            className="adsbygoogle"
            style={{ display: "block", minWidth: "300px", minHeight: `${minHeight}px` }}
            data-ad-client={dataAdClient}
            data-ad-slot={dataAdSlot}
            data-ad-format={dataAdFormat}
            data-full-width-responsive={dataFullWidthResponsive}
          />
        </div>
      ) : (
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{fallbackTitle}</div>
          <p className="mt-2 text-sm text-slate-600">{fallbackDescription}</p>
        </div>
      )}
    </div>
  );
}