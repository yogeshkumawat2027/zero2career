import { notFound } from "next/navigation";
import Link from "next/link";
import StructuredData from "@/components/structured-data";
import { getTechUpdate, sortedTechUpdates, techUpdates } from "@/data/techUpdates";

export const dynamicParams = false;

export function generateStaticParams() {
  return techUpdates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }) {
  const update = getTechUpdate((await params).slug);
  if (!update) return {};

  const url = `https://zero2career.in/tech-updates/${update.slug}`;
  return {
    title: `${update.title} | Zero2Career`,
    description: update.shortDescription,
    keywords: [update.category, "technology updates", "India tech news", update.title],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: update.title,
      description: update.shortDescription,
      url,
      publishedTime: update.publishedAt,
      modifiedTime: update.publishedAt,
      section: update.category,
    },
    twitter: {
      card: "summary",
      title: update.title,
      description: update.shortDescription,
    },
  };
}

function Section({ title, children }) {
  return (
    <section className="mt-8 border-t border-gray-100 pt-7">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <div className="mt-3 text-sm leading-7 text-gray-600">{children}</div>
    </section>
  );
}

export default async function TechUpdateDetailPage({ params }) {
  const update = getTechUpdate((await params).slug);
  if (!update) notFound();

  const relatedUpdates = sortedTechUpdates
    .filter((item) => item.slug !== update.slug)
    .slice(0, 3);
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(update.publishedAt));

  return (
    <>
      <StructuredData
        type="Article"
        data={{
          title: update.title,
          description: update.shortDescription,
          url: `https://zero2career.in/tech-updates/${update.slug}`,
          datePublished: update.publishedAt,
          dateModified: update.publishedAt,
          articleSection: update.category,
        }}
      />
      <main className="min-h-screen bg-gray-50 px-4 pb-16 pt-24">
        <article className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
          <Link href="/tech-updates" className="text-sm font-semibold text-blue-700 hover:underline">
            ← Back to tech updates
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">{update.category}</span>
            <time dateTime={update.publishedAt} className="text-gray-500">Published {formattedDate}</time>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{update.title}</h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">{update.shortDescription}</p>

          <Section title="What Happened?">
            <p>{update.whatHappened}</p>
          </Section>

          <Section title="Why It Matters">
            <p>{update.whyItMatters}</p>
          </Section>

          <Section title="Practical Steps">
            <ol className="list-decimal space-y-2 pl-5">
              {update.practicalSteps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </Section>

          <Section title="Key Takeaways">
            <ul className="list-disc space-y-2 pl-5">
              {update.keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
          </Section>

          <Section title="Source">
            {update.sourceUrl ? (
              <a href={update.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">
                {update.sourceName} ↗
              </a>
            ) : (
              <p>{update.sourceName}. Verify current details with the original company, government or publication source before making decisions.</p>
            )}
          </Section>

          <section className="mt-10 border-t border-gray-100 pt-7">
            <h2 className="text-xl font-bold text-gray-900">Related Tech Updates</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {relatedUpdates.map((related) => (
                <Link key={related.slug} href={`/tech-updates/${related.slug}`} className="rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">{related.category}</span>
                  <h3 className="mt-2 text-sm font-semibold leading-6 text-gray-900">{related.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
