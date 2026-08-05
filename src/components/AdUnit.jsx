"use client";

import { useEffect } from "react";

export default function AdUnit({
  clientId = "ca-pub-3189112748745866",
  slotId = "3753621711",
  minHeight = 250,
}) {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="my-8 flex justify-center px-4">
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "300px", minHeight: `${minHeight}px` }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}