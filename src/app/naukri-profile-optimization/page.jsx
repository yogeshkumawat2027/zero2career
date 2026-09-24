
import Link from "next/link";
import StructuredData from "@/components/structured-data";

export const metadata = {
  title: "How to Optimize Your Naukri Profile for More Interview Calls",
  description:
    "Use this practical Naukri profile optimization checklist to improve recruiter visibility, sharpen your resume, and increase your chances of interview calls.",
  keywords: [
    "Naukri profile optimization",
    "Naukri profile tips",
    "how to get interview calls from Naukri",
    "Naukri profile for freshers",
    "Naukri resume tips",
    "how to improve Naukri profile",
  ],
  alternates: {
    canonical: "https://zero2career.in/naukri-profile-optimization",
  },
  openGraph: {
    title: "How to Optimize Your Naukri Profile",
    description:
      "A practical guide to making your Naukri profile recruiter-friendly and easier to discover.",
    type: "article",
    url: "https://zero2career.in/naukri-profile-optimization",
    siteName: "Zero2Career",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "How to Optimize Your Naukri Profile",
    description:
      "A practical checklist for improving your Naukri profile and recruiter visibility.",
  },
};

const optimizationSteps = [
  {
    number: "01",
    title: "Profile Headline",
    icon: "✦",
    description:
      "Your headline is one of the first things recruiters notice. Make it specific and relevant to the role you want.",
    tips: [
      "Mention your target role",
      "Add your strongest relevant skills",
      "Mention experience level when useful",
      "Avoid generic lines like 'Looking for a job'",
    ],
    example:
      "Full Stack Developer | MERN | React | Node.js | MongoDB | REST APIs",
  },
  {
    number: "02",
    title: "Profile Summary",
    icon: "✎",
    description:
      "Write a short professional summary that tells recruiters who you are, what you can build and what role you're targeting.",
    tips: [
      "Keep it concise and professional",
      "Mention your core technologies",
      "Highlight relevant experience and projects",
      "Clearly mention your career direction",
    ],
  },
  {
    number: "03",
    title: "Key Skills",
    icon: "◆",
    description:
      "Add skills that are genuinely relevant to your target roles. Focus on skills recruiters are likely to search for.",
    tips: [
      "Prioritize relevant technical skills",
      "Use commonly recognized skill names",
      "Match skills with your target job descriptions",
      "Don't add unrelated skills just to increase the count",
    ],
  },
  {
    number: "04",
    title: "Resume",
    icon: "▤",
    description:
      "Your Naukri resume should support the story your profile tells. Keep it updated and focused on your target role.",
    tips: [
      "Use a clean ATS-friendly format",
      "Keep your resume updated",
      "Add measurable achievements where possible",
      "Keep resume skills aligned with your profile",
    ],
  },
  {
    number: "05",
    title: "Experience & Internships",
    icon: "◈",
    description:
      "Add relevant internships and work experience properly. Focus on what you actually built, improved or achieved.",
    tips: [
      "Add accurate company and role details",
      "Mention technologies used",
      "Describe your contribution",
      "Highlight measurable outcomes when possible",
    ],
  },
  {
    number: "06",
    title: "Projects",
    icon: "⌘",
    description:
      "Projects can demonstrate your practical skills, especially when you're a fresher or early-career developer.",
    tips: [
      "Add projects relevant to your target role",
      "Mention technologies used",
      "Explain what you built",
      "Add GitHub or live demo links when available",
    ],
  },
  {
    number: "07",
    title: "Education",
    icon: "◇",
    description:
      "Keep your academic information complete and accurate so recruiters can quickly understand your educational background.",
    tips: [
      "Add your degree and specialization",
      "Keep college information accurate",
      "Add relevant academic details",
      "Keep dates and percentages/CGPA accurate",
    ],
  },
  {
    number: "08",
    title: "Job Preferences",
    icon: "⌖",
    description:
      "Set your preferences according to the roles you actually want. This helps keep your job search focused.",
    tips: [
      "Choose relevant job roles",
      "Select suitable locations",
      "Set the appropriate experience level",
      "Keep preferences aligned with your career goals",
    ],
  },
  {
    number: "09",
    title: "Keep Your Profile Updated",
    icon: "↻",
    description:
      "Don't create your profile once and forget about it. Keep important information updated as your skills and experience grow.",
    tips: [
      "Update your skills when you learn relevant technologies",
      "Keep your resume current",
      "Update projects and internships",
      "Review your profile regularly",
    ],
  },
  {
    number: "10",
    title: "Use Relevant Keywords",
    icon: "⌕",
    description:
      "Recruiters often search profiles using job titles, technologies and skills. Use relevant keywords naturally where they genuinely apply to you.",
    tips: [
      "Study relevant job descriptions",
      "Identify commonly requested skills",
      "Use accurate job titles",
      "Never add skills you don't actually know",
    ],
  },
];

const checklist = [
  "Professional headline",
  "Strong profile summary",
  "Relevant key skills",
  "Updated resume",
  "Relevant internships / experience",
  "Relevant projects with links",
  "Correct job preferences",
  "Accurate education details",
  "Recently updated profile",
  "Keywords aligned with target role",
];

export default function NaukriProfileOptimizationPage() {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={[
          { name: "Home", url: "https://zero2career.in" },
          {
            name: "Naukri Profile Optimization",
            url: "https://zero2career.in/naukri-profile-optimization",
          },
        ]}
      />
      <StructuredData
        type="Article"
        data={{
          title: "How to Optimize Your Naukri Profile for More Interview Calls",
          description: metadata.description,
          image: "https://zero2career.in/z2clogo.png",
          url: "https://zero2career.in/naukri-profile-optimization",
          datePublished: "2026-09-24T00:00:00.000Z",
          dateModified: "2026-09-24T00:00:00.000Z",
        }}
      />
      <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Career Guide
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Optimize Your{" "}
              <span className="text-orange-500">Naukri Profile</span>
              <br className="hidden sm:block" />
              & Get More Interview Opportunities
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              A practical checklist to make your Naukri profile more
              recruiter-friendly and improve your chances of being discovered
              for relevant opportunities.
            </p>

          </div>
        </div>
      </section>

      {/* QUICK INTRO */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xl text-white">
              ✓
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Your profile is your first impression
              </h2>

              <p className="mt-2 max-w-3xl leading-7 text-gray-600">
                Recruiters may find candidates through profile information,
                skills, job titles and other relevant details. Keep your
                information accurate, relevant and aligned with the roles you
                actually want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Step-by-step
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            10 things to optimize
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Work through these sections one by one and make sure your profile
            represents your current skills and career direction.
          </p>
        </div>

        <div className="space-y-6">
          {optimizationSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-orange-200 hover:shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex shrink-0 items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl text-orange-500">
                    {step.icon}
                  </div>

                  <div className="sm:hidden">
                    <span className="text-xs font-bold tracking-widest text-orange-500">
                      {step.number}
                    </span>

                    <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="hidden sm:block">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-orange-500">
                        {step.number}
                      </span>

                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>

                  <p className="mt-3 leading-7 text-gray-600">
                    {step.description}
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {step.tips.map((tip) => (
                      <div
                        key={tip}
                        className="flex items-start gap-3 rounded-lg bg-gray-50 p-3"
                      >
                        <span className="mt-0.5 font-bold text-orange-500">
                          ✓
                        </span>

                        <span className="text-sm leading-6 text-gray-700">
                          {tip}
                        </span>
                      </div>
                    ))}
                  </div>

                  {step.example && (
                    <div className="mt-5 rounded-lg border border-orange-100 bg-orange-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                        Example
                      </p>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-800">
                        {step.example}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* KEYWORDS SECTION */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              One important rule
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Use keywords, but keep them genuine
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Look at job descriptions for the roles you're targeting. Notice
              the technologies, skills and job titles that are genuinely
              relevant to your experience. Use those terms naturally in your
              profile when they accurately describe your skills.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="text-2xl">01</div>
              <h3 className="mt-3 font-bold">Find relevant jobs</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Check multiple job descriptions for your target role.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="text-2xl">02</div>
              <h3 className="mt-3 font-bold">Identify common skills</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Notice the technologies and skills repeatedly requested.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="text-2xl">03</div>
              <h3 className="mt-3 font-bold">Update honestly</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Add only skills and keywords that genuinely apply to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Quick check
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Your 60-Second Naukri Checklist
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Before applying to your next job, quickly check these points.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-500 text-xs font-bold text-white">
                  ✓
                </div>

                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO CTA */}
     
      {/* FINAL CTA */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8">
          <h2 className="text-3xl font-bold">
            Profile optimized. Now make your resume stronger.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Your Naukri profile and resume should tell the same professional
            story. Keep both updated and focused on the roles you want.
          </p>

          {/* <Link
            href="/resume-builder"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Create Your Resume →
          </Link> */}
        </div>
      </section>
      </main>
    </>
  );
}
