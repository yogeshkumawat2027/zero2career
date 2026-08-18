import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Career Guide Unavailable | Zero2Career',
  description:
    'This career guide is not published yet. Explore other complete career guides on Zero2Career.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CareerFallbackPage({ params }) {
  const slug = params?.career;

  if (!slug) {
    notFound();
  }

  const label = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 pt-28">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Career guide unavailable
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          {label} is not currently published
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          This page is not available yet, but you can browse our complete list of career guides and discover the right path for you.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/careers"
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore all careers
          </Link>
          <Link
            href="/"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
