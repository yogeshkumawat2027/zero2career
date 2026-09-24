import ContentUpdateCard from "./ContentUpdateCard";

export default function ContentListingPage({ title, subtitle, updates, tech = false }) {
  return <main className="min-h-screen bg-gray-50 px-4 pb-16 pt-24"><div className="mx-auto max-w-6xl"><header className="mb-8 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Zero2Career Updates</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1><p className="mt-3 text-base leading-7 text-gray-600">{subtitle}</p></header><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{updates.map((update) => <ContentUpdateCard key={update.slug} update={update} tech={tech} />)}</div></div></main>;
}