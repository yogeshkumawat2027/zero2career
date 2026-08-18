import React from 'react';
import Link from 'next/link';
import StructuredData from '@/components/structured-data';

export function CareerSectionCard({ icon: Icon, eyebrow, title, children, className = '' }) {
  return (
    <section className={`mb-16 ${className}`}>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6 flex items-center gap-3">
          {Icon ? <Icon className="text-2xl text-blue-600" /> : null}
          <div>
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</p>
            ) : null}
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export function CareerRoadmapList({ steps }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <li key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            {index + 1}
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function CareerFaqList({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => (
        <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-base font-semibold text-slate-900">{item.question}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

export function CareerGuideTemplate({ data }) {
  const responsibilities = data.responsibilities || [];
  const eligibility = data.eligibility || [];
  const roadmap = data.roadmap || [];
  const technicalSkills = data.skills?.technical || [];
  const softSkills = data.skills?.soft || [];
  const courses = data.courses || [];
  const exams = data.exams || [];
  const scope = data.scope || [];
  const pros = data.pros || [];
  const cons = data.cons || [];
  const faqs = data.faqs || [];
  const relatedCareers = data.relatedCareers || [];

  const breadcrumbData = [
    { name: 'Home', url: 'https://zero2career.in/' },
    { name: 'Careers', url: 'https://zero2career.in/careers' },
    { name: data.title, url: `https://zero2career.in/careers/${data.slug}` },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 pt-28 text-slate-800">
      <StructuredData type="BreadcrumbList" data={breadcrumbData} />
      {faqs.length ? <StructuredData type="FAQPage" data={faqs} /> : null}

      <div className="mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-blue-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/careers" className="hover:text-blue-700">Careers</Link></li>
            <li>/</li>
            <li className="font-medium text-slate-900">{data.title}</li>
          </ol>
        </nav>

        <section className="rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-8 text-white shadow-2xl md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Career Guide</p>
          <h1 className="text-3xl font-bold md:text-5xl">{data.title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-blue-100">{data.overview}</p>
        </section>

        <CareerSectionCard title="What does this professional do?">
          <ul className="grid gap-3 md:grid-cols-2">
            {responsibilities.map((item, index) => (
              <li key={index} className="rounded-xl bg-slate-50 p-4 text-slate-700">{item}</li>
            ))}
          </ul>
        </CareerSectionCard>

        <CareerSectionCard title="Eligibility">
          <ul className="grid gap-3 md:grid-cols-2">
            {eligibility.map((item, index) => (
              <li key={index} className="rounded-xl bg-slate-50 p-4 text-slate-700">{item}</li>
            ))}
          </ul>
        </CareerSectionCard>

        <CareerSectionCard title="Career roadmap">
          <CareerRoadmapList steps={roadmap} />
        </CareerSectionCard>

        <CareerSectionCard title="Required skills">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">Technical or domain skills</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                {technicalSkills.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">Soft skills</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                {softSkills.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CareerSectionCard>

        <CareerSectionCard title="Courses and degrees">
          <ul className="grid gap-3 md:grid-cols-2">
            {courses.map((item, index) => (
              <li key={index} className="rounded-xl bg-slate-50 p-4 text-slate-700">{item}</li>
            ))}
          </ul>
        </CareerSectionCard>

        <CareerSectionCard title="Entrance exams">
          <p className="mb-4 text-slate-600">Exam requirements vary by institution and recruitment year. Always verify from official notifications.</p>
          <ul className="grid gap-3 md:grid-cols-2">
            {exams.map((item, index) => (
              <li key={index} className="rounded-xl bg-slate-50 p-4 text-slate-700">{item}</li>
            ))}
          </ul>
        </CareerSectionCard>

        <CareerSectionCard title="Salary expectations">
          <p className="leading-relaxed text-slate-700">{data.salary}</p>
        </CareerSectionCard>

        <CareerSectionCard title="Career scope">
          <ul className="grid gap-3 md:grid-cols-2">
            {scope.map((item, index) => (
              <li key={index} className="rounded-xl bg-slate-50 p-4 text-slate-700">{item}</li>
            ))}
          </ul>
        </CareerSectionCard>

        <CareerSectionCard title="Pros and cons">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="font-semibold text-green-900">Pros</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-green-900">
                {pros.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-900">Cons</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-amber-900">
                {cons.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CareerSectionCard>

        <CareerSectionCard title="Who should choose this career?">
          <p className="leading-relaxed text-slate-700">{data.whoShouldChoose}</p>
        </CareerSectionCard>

        <CareerSectionCard title="FAQ">
          <CareerFaqList items={faqs} />
        </CareerSectionCard>

        <CareerSectionCard title="Related careers">
          <div className="flex flex-wrap gap-3">
            {relatedCareers.map((career, index) => (
              <Link
                key={index}
                href={career.href}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              >
                {career.title}
              </Link>
            ))}
          </div>
        </CareerSectionCard>
      </div>
    </main>
  );
}
