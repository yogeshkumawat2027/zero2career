export const metadata = {
  title: 'Terms and Conditions | Zero2Career',
  description:
    'Read the Zero2Career terms and conditions for using the website, educational content, external links, and career information services.',
  alternates: {
    canonical: 'https://zero2career.in/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 pt-28 text-slate-800">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Terms and Conditions
        </p>
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Terms and Conditions</h1>

        <div className="mt-8 space-y-8 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">1. Informational purpose</h2>
            <p className="mt-3 leading-relaxed">
              Zero2Career provides educational and informational content related to career options, exam preparation, job updates, and professional pathways. The website is not a substitute for professional counseling, academic advising, legal advice, or official institutional guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">2. Acceptable use</h2>
            <p className="mt-3 leading-relaxed">
              Users agree to use the website responsibly and not misuse content, interfere with website operations, attempt unauthorized access, or submit harmful, abusive, or unlawful material through contact or feedback forms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">3. Content accuracy</h2>
            <p className="mt-3 leading-relaxed">
              We strive to provide useful, up-to-date information, but career pathways, salaries, eligibility requirements, exam rules, deadlines, and institutional policies may change. Users should verify critical information from official government notifications, institutions, or recognized authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">4. Intellectual property</h2>
            <p className="mt-3 leading-relaxed">
              The website design, text, graphics, branding, and content are owned or licensed for use by Zero2Career unless otherwise stated. Users may not copy or republish content without prior written permission, except for brief quotations with attribution where allowed by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">5. External websites</h2>
            <p className="mt-3 leading-relaxed">
              Zero2Career may link to third-party websites, official portals, and educational resources. We do not control these websites and are not responsible for their content, accuracy, availability, or policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">6. User responsibility</h2>
            <p className="mt-3 leading-relaxed">
              Users are responsible for evaluating the suitability of career information for their personal goals, academic background, and circumstances. We do not guarantee admission, success in exams, employment, or career outcomes based on website content alone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">7. Limitation of liability</h2>
            <p className="mt-3 leading-relaxed">
              Zero2Career does not guarantee the availability, completeness, or accuracy of every page, article, or update. We are not liable for direct, indirect, incidental, or consequential losses arising from reliance on information provided by the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">8. Changes to terms</h2>
            <p className="mt-3 leading-relaxed">
              These terms may be updated periodically. Continued use of the website after updates indicates acceptance of the revised terms. Users should review this page regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">9. Contact</h2>
            <p className="mt-3 leading-relaxed">
              For questions regarding these terms, please contact <a href="mailto:zero2careerofficial@gmail.com" className="font-semibold text-blue-600 underline">zero2careerofficial@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
