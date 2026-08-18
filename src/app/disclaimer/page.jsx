export const metadata = {
  title: 'Disclaimer | Zero2Career',
  description:
    'Zero2Career disclaimer for educational career content, changing eligibility rules, and official verification of critical career decisions.',
  alternates: {
    canonical: 'https://zero2career.in/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 pt-28 text-slate-800">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Disclaimer
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Disclaimer</h1>

        <div className="mt-8 space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">1. Educational information only</h2>
            <p className="mt-3 leading-relaxed">
              The information on Zero2Career is provided for educational and informational purposes only. It is meant to help users explore career opportunities, understand possible pathways, and compare options more confidently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">2. Information may change</h2>
            <p className="mt-3 leading-relaxed">
              Salary figures, job descriptions, academic requirements, admission rules, exam patterns, eligibility criteria, and government notifications may change over time. Users must understand that such information can become outdated or vary by institution, state, year, or category.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">3. Official sources should be checked</h2>
            <p className="mt-3 leading-relaxed">
              Important decisions related to education, jobs, public exams, admissions, training, or financial planning should be verified using official government notices, institution websites, recognized universities, and authorized exam authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">4. No guarantee of outcomes</h2>
            <p className="mt-3 leading-relaxed">
              Zero2Career does not guarantee employment, exam success, admission, salary, growth, career outcomes, or any other result based on reading our content. Career outcomes depend on multiple factors, including skills, preparation, opportunities, and individual circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">5. Third-party content</h2>
            <p className="mt-3 leading-relaxed">
              We may reference or link to external sources for additional information. We do not endorse or guarantee the accuracy, completeness, or reliability of such third-party content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">6. User responsibility</h2>
            <p className="mt-3 leading-relaxed">
              Users must exercise their own judgment before acting on any career advice, educational recommendation, or information provided by the site. We encourage independent verification before enrolling, applying, paying fees, or making major life decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">7. Contact</h2>
            <p className="mt-3 leading-relaxed">
              For any clarification related to this Disclaimer, please contact <a href="mailto:zero2careerofficial@gmail.com" className="font-semibold text-blue-600 underline">zero2careerofficial@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
