import Link from "next/link";

const formatDate = (date) => new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(date));

export default function ContentUpdateCard({ update, tech = false }) {
  const href = tech ? `/tech-updates/${update.slug}` : `/${update.type === "job" ? "jobs" : update.type === "admit-card" ? "admit-card" : "results"}/${update.slug}`;
  return <article className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
    <div className="flex items-center justify-between gap-3 text-xs"><span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">{update.category}</span><time dateTime={update.publishedAt} className="text-gray-500">{formatDate(update.publishedAt)}</time></div>
    <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 group-hover:text-blue-700"><Link href={href}>{update.title}</Link></h3>
    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{update.shortDescription}</p>
    <Link href={href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">View Details <span aria-hidden="true">→</span></Link>
  </article>;
}