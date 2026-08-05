import Script from "next/script";

export default function AdSense({ pId }) {
  if (!pId) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      async
      strategy="beforeInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
    />
  );
}