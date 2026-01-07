import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Zero2Career - India's Most Trusted Career Guidance Platform",
    template: "%s | Zero2Career"
  },
  description: "Explore 100+ career options after 10th & 12th. Get expert guidance on IAS, Pilot, Engineer, Doctor, Advocate, and more careers with salary, eligibility & complete roadmaps.",
  keywords: "career guidance, career options after 12th, career counseling India, IAS preparation, pilot training, engineering careers, medical careers, government jobs, career planning",
  authors: [{ name: "Zero2Career Team" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zero2career.in",
    siteName: "Zero2Career",
    title: "Zero2Career - India's Most Trusted Career Guidance Platform",
    description: "Explore 100+ career options after 10th & 12th. Get expert guidance on careers with salary, eligibility & complete roadmaps.",
    images: [
      {
        url: "https://zero2career.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zero2Career - Career Guidance Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero2Career - India's Most Trusted Career Guidance Platform",
    description: "Explore 100+ career options after 10th & 12th. Get expert guidance on careers with salary, eligibility & complete roadmaps.",
    images: ["https://zero2career.in/og-image.jpg"],
  },
  alternates: {
    canonical: "https://zero2career.in"
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="canonical" href="https://zero2career.in" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5CHCMH3RKE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5CHCMH3RKE');
          `}
        </Script>

        <Navbar  />
        {children}
        {/* Vercel Analytics */}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
