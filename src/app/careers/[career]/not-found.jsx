import Link from 'next/link';

export default function CareerNotFound() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 pt-28">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Not found
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          This career guide is not available
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          The page you requested may have moved, been removed, or not been published yet.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/careers" className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Browse all careers
          </Link>
          <Link href="/" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
