import ContentListingPage from "@/components/ContentListingPage";
import { sortedTechUpdates } from "@/data/techUpdates";
export const metadata = {
	title: "Tech Updates: AI, Software, Startups & Cybersecurity",
	description: "Read concise tech updates on AI, software, startups, cloud, cybersecurity and developer trends for students and job seekers.",
	keywords: ["tech updates India", "AI news", "software industry news", "startup updates", "developer news", "cybersecurity updates"],
	alternates: { canonical: "https://zero2career.in/tech-updates" },
	openGraph: {
		type: "website",
		title: "Tech Updates: AI, Software, Startups & Cybersecurity",
		description: "Concise technology news and practical updates for developers, students and job seekers.",
		url: "https://zero2career.in/tech-updates",
	},
	twitter: {
		card: "summary",
		title: "Tech Updates | Zero2Career",
		description: "AI, software, startup, cloud and cybersecurity updates.",
	},
};
export default function TechUpdatesPage() { return <ContentListingPage title="Tech Updates" subtitle="Latest technology, AI, startup and software industry news." updates={sortedTechUpdates} tech />; }