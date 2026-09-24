import ContentListingPage from "@/components/ContentListingPage";
import { sortedCareerUpdates } from "@/data/careerUpdates";

export const metadata = {
  title: "Latest Jobs, Admit Cards and Results | Zero2Career",
  description: "Browse the latest government jobs, admit cards and exam results with official links and concise updates from Zero2Career.",
  alternates: { canonical: "https://zero2career.in/updates" }
};

export default function UpdatesPage() {
  return <ContentListingPage title="Latest Career Updates" subtitle="Government jobs, admit cards and exam results with clear details and official sources." updates={sortedCareerUpdates} />;
}