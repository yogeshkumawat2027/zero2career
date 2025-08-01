import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zero2Career - Explore Career Options After 10th & 12th",
  description: "India's most trusted career guidance platform for students.",
   icons: {
    icon: "/favicon.ico",  // or "/custom-icon.ico"
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
         <Navbar  />
       

        {children}
        <Footer />
      </body>
    </html>
  );
}
