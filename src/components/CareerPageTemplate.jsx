import React from 'react';

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