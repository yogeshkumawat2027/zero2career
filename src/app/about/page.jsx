import Link from 'next/link';

export const metadata = {
  title: 'About Zero2Career | Career Guidance for Students and Professionals',
  description:
    'Learn about Zero2Career, a career guidance platform helping students and professionals explore career paths, eligibility, exam guidance, and educational resources in India.',
  alternates: {
    canonical: 'https://zero2career.in/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 pt-28 text-slate-800">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 text-white shadow-2xl md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            About Zero2Career
          </p>
          <h1 className="text-3xl font-bold md:text-5xl">
            Career clarity for students, aspirants, and working professionals
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-blue-100">
            Zero2Career is an educational and informational platform created to make career guidance more accessible, practical, and easy to understand.
          </p>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Our purpose</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We aim to help people explore career options after 10th and 12th, understand eligibility requirements, compare job roles, and discover the right path for their skills, interests, and goals.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Who we serve</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Zero2Career is built for students, career seekers, parents, and professionals looking for informative guidance on career planning, competitive exams, industry roles, and education pathways in India.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">What you can find here</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            <li className="rounded-xl bg-slate-50 p-4 text-slate-700">Career guides for government, private, technical, creative, and medical paths</li>
            <li className="rounded-xl bg-slate-50 p-4 text-slate-700">Eligibility and preparation insights for competitive exams and admissions</li>
            <li className="rounded-xl bg-slate-50 p-4 text-slate-700">Career summaries, salary expectations, and roadmap information</li>
            <li className="rounded-xl bg-slate-50 p-4 text-slate-700">Job and exam updates for students and aspirants</li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-blue-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Important note</h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            The content on Zero2Career is intended for educational and informational purposes. Career choices, salary figures, eligibility rules, admissions, and government exam notifications may change over time. Users should verify critical information with official sources, institutions, and trusted government updates before making important decisions.
          </p>
        </section>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/careers" className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700">
            Explore careers
          </Link>
          <Link href="/contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
