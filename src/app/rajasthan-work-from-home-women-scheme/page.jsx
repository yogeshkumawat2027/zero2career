import Link from "next/link";
import StructuredData from "@/components/structured-data";
import InArticleAd from "@/components/InArticleAd";

const pageUrl = "https://zero2career.in/rajasthan-work-from-home-women-scheme";

export const metadata = {
  title:
    "Rajasthan Work From Home Scheme for Women 2026 | Apply Online | Zero2Career",
  description:
    "Rajasthan Mukhyamantri Work From Home - Job Work Yojana 2026. Check eligibility, current work from home opportunities, application process and official links.",
  keywords: [
    "Rajasthan work from home scheme 2026",
    "Rajasthan work from home jobs for women",
    "Mukhyamantri Work From Home Job Work Yojana",
    "Rajasthan women work from home",
    "Rajasthan government work from home scheme",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    locale: "hi_IN",
    url: pageUrl,
    siteName: "Zero2Career",
    title: "Rajasthan Work From Home Scheme for Women 2026",
    description:
      "Eligibility, current opportunities, application process और official portal की जानकारी हिंदी में।",
  },
  twitter: {
    card: "summary",
    title: "Rajasthan Work From Home Scheme for Women 2026",
    description:
      "Rajasthan women work-from-home scheme की eligibility, jobs और apply process जानें।",
  },
};

const faqs = [
  {
    question: "क्या यह permanent government job है?",
    answer:
      "नहीं। यह scheme महिलाओं को work-from-home और job-work opportunities उपलब्ध कराने के लिए है। अलग-अलग opportunities अलग organizations या employers द्वारा दी जा सकती हैं।",
  },
  {
    question: "क्या सभी महिलाएं apply कर सकती हैं?",
    answer:
      "Registration Rajasthan की eligible women के लिए है, लेकिन हर available opportunity की qualification और अन्य conditions अलग हो सकती हैं।",
  },
  {
    question: "क्या घर से काम करना जरूरी है?",
    answer:
      "यह opportunity पर depend करता है। Apply करने से पहले संबंधित opportunity में work location और work mode जरूर check करें।",
  },
  {
    question: "क्या application के लिए पैसे देने होंगे?",
    answer:
      "किसी भी व्यक्ति को केवल job दिलाने के नाम पर पैसे न दें। Application और opportunity की information official Rajasthan portal से verify करें।",
  },
];

const opportunities = [
  {
    district: "Churu",
    work: "Telecaller",
    posts: "50",
    qualification: "Graduate + 1 year experience",
    lastDate: "30 September 2026",
  },
  {
    district: "Churu",
    work: "Accounting",
    posts: "4",
    qualification: "Graduate + 1 year experience",
    lastDate: "30 September 2026",
  },
  {
    district: "Jaipur",
    work: "Carpet Weaving – Work From Home",
    posts: "200",
    qualification: "Not Applicable",
    lastDate: "30 September 2026",
  },
  {
    district: "Jaipur",
    work: "Digital Shop Operator",
    posts: "240",
    qualification: "10th Pass",
    lastDate: "30 December 2026",
  },
  {
    district: "Sri Ganganagar",
    work: "Career Counselor",
    posts: "500",
    qualification: "12th Pass",
    lastDate: "30 December 2026",
  },
];

export default function RajasthanWorkFromHomePage() {
  const articleData = {
    title: metadata.title,
    description: metadata.description,
    url: pageUrl,
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    articleSection: "Government Schemes",
    inLanguage: "hi-IN",
  };

  return (
    <>
      <StructuredData type="Article" data={articleData} />
      <StructuredData type="FAQPage" data={faqs} />
      <StructuredData
        type="BreadcrumbList"
        data={[
          { name: "Home", url: "https://zero2career.in" },
          { name: "Rajasthan Work From Home Scheme", url: pageUrl },
        ]}
      />

      <main className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="border-b bg-orange-50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Rajasthan Women Work From Home Scheme 2026
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              राजस्थान की महिलाओं के लिए Work From Home के अवसर
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
              राजस्थान सरकार की{" "}
              <strong>
                मुख्यमंत्री Work From Home – Job Work Yojana
              </strong>{" "}
              के तहत महिलाओं को घर से काम करने के अवसर उपलब्ध कराए जाते हैं।
              यहां आप scheme की जानकारी, eligibility, current opportunities और
              apply करने का तरीका देख सकते हैं।
            </p>

            {/* <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://mahilawfh.rajasthan.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700"
              >
                Official Portal पर जाएं
              </a>

              <a
                href="#opportunities"
                className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Current Opportunities
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard
            title="किसके लिए?"
            text="राजस्थान की महिलाओं के लिए"
          />

          <InfoCard
            title="काम का प्रकार"
            text="Work From Home / Job Work"
          />

          <InfoCard
            title="Registration"
            text="Jan Aadhaar और Aadhaar की आवश्यकता"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Rajasthan Work From Home Scheme क्या है?
        </h2>

        <div className="mt-5 space-y-4 text-gray-600 leading-7">
          <p>
            राजस्थान सरकार की मुख्यमंत्री Work From Home – Job Work Yojana का
            उद्देश्य राजस्थान की महिलाओं को घर से काम करने के अवसर उपलब्ध
            कराना है।
          </p>

          <p>
            इस portal पर अलग-अलग government departments, organizations और
            employers द्वारा work-from-home या job-work opportunities उपलब्ध
            कराई जा सकती हैं।
          </p>

          <p>
            यह एक single permanent government job नहीं है। Portal पर उपलब्ध
            अलग-अलग opportunities की eligibility, काम, vacancies और last date
            अलग-अलग हो सकती है।
          </p>
        </div>
      </section>

      <InArticleAd />

      {/* CURRENT OPPORTUNITIES */}
      <section
        id="opportunities"
        className="mx-auto max-w-6xl px-5 py-10 md:px-8"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Current Work From Home Opportunities
          </h2>

          <p className="mt-2 text-gray-600">
            नीचे official portal पर उपलब्ध कुछ current opportunities दी गई
            हैं। Apply करने से पहले official portal पर details जरूर verify करें।
          </p>
        </div>

        <div className="mt-7 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[800px] text-left">
            <thead className="bg-gray-50">
              <tr className="border-b">
                <th className="px-5 py-4 text-sm font-semibold">
                  District
                </th>
                <th className="px-5 py-4 text-sm font-semibold">
                  Work
                </th>
                <th className="px-5 py-4 text-sm font-semibold">
                  Posts
                </th>
                <th className="px-5 py-4 text-sm font-semibold">
                  Qualification
                </th>
                <th className="px-5 py-4 text-sm font-semibold">
                  Last Date
                </th>
              </tr>
            </thead>

            <tbody>
              {opportunities.map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 hover:bg-orange-50"
                >
                  <td className="px-5 py-4">{item.district}</td>
                  <td className="px-5 py-4 font-medium text-gray-900">
                    {item.work}
                  </td>
                  <td className="px-5 py-4">{item.posts}</td>
                  <td className="px-5 py-4">{item.qualification}</td>
                  <td className="px-5 py-4">{item.lastDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Eligibility & Required Details
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <DetailCard
              title="Who Can Apply?"
              items={[
                "राजस्थान की महिलाएं",
                "Official portal पर registration करने वाली applicants",
                "हर opportunity की अलग eligibility हो सकती है",
              ]}
            />

            <DetailCard
              title="Registration के लिए"
              items={[
                "Jan Aadhaar",
                "Aadhaar",
                "Mobile number",
                "Basic personal details",
              ]}
            />
          </div>
        </div>
      </section>

      {/* APPLY PROCESS */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Rajasthan Work From Home Scheme में Apply कैसे करें?
        </h2>

        <div className="mt-7 space-y-5">
          <Step
            number="1"
            title="Official Portal खोलें"
            text="सबसे पहले Rajasthan Government के official Work From Home portal पर जाएं।"
          />

          <Step
            number="2"
            title="Registration करें"
            text="Portal पर उपलब्ध registration option से अपनी required details भरें। Jan Aadhaar और Aadhaar details की आवश्यकता हो सकती है।"
          />

          <Step
            number="3"
            title="Available Opportunities देखें"
            text="अपने district, qualification और interest के अनुसार available work-from-home opportunities check करें।"
          />

          <Step
            number="4"
            title="Opportunity की Details पढ़ें"
            text="Apply करने से पहले qualification, number of posts, work details और last date carefully check करें।"
          />

          <Step
            number="5"
            title="Apply करें"
            text="जिस opportunity के लिए आप eligible हैं, उसके लिए official portal पर दिए गए application process को follow करें।"
          />

          <Step
            number="6"
            title="Application Status Check करें"
            text="Application submit करने के बाद portal पर available status/update options के माध्यम से जानकारी check करते रहें।"
          />
        </div>
      </section>

      {/* IMPORTANT WARNING */}
      <section className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">
            ⚠️ Important
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>
              किसी भी व्यक्ति को केवल job दिलाने के नाम पर पैसे न दें।
            </li>
            <li>
              Application करने से पहले opportunity की details official portal
              पर verify करें।
            </li>
            <li>
              WhatsApp या social media पर मिले unverified job links पर personal
              documents share न करें।
            </li>
            <li>
              Last date और eligibility बदल सकती है, इसलिए official portal को
              final source मानें।
            </li>
          </ul>
        </div>
      </section>

      {/* OFFICIAL LINKS */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Official Links
          </h2>

          <div className="mt-6 space-y-3">
            <a
              href="https://mahilawfh.rajasthan.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-gray-200 bg-white p-4 font-semibold text-orange-600 hover:border-orange-300"
            >
              Official Portal पर जाएं
            </a>

            <a
              href="#opportunities"
              className="block rounded-lg border border-gray-200 bg-white p-4 font-semibold text-orange-600 hover:border-orange-300"
            >
              Current Opportunities
            </a>

            <a
              href="https://mahilawfh.rajasthan.gov.in/about/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-gray-200 bg-white p-4 font-semibold text-orange-600 hover:border-orange-300"
            >
              → Scheme के बारे में Official Information
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 space-y-5">
          {faqs.map((faq) => (
            <Faq key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-12 text-center md:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Latest Work From Home Opportunities देखें
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Current vacancies, eligibility और application dates के लिए
            Rajasthan Government के official portal को regularly check करें।
          </p>

          <a
            href="https://mahilawfh.rajasthan.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
          >
            Visit Official Portal
          </a>
        </div>
      </section>
      </main>
    </>
  );
}

/* COMPONENTS */

function InfoCard({ title, text }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}

function DetailCard({ title, items }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>

      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 text-gray-600">
            <span className="text-orange-600">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-600 font-bold text-white">
        {number}
      </div>

      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="mt-1 leading-7 text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function Faq({ question, answer }) {
  return (
    <details className="group rounded-xl border border-gray-200 bg-white p-5">
      <summary className="cursor-pointer list-none font-semibold text-gray-900">
        {question}
      </summary>

      <p className="mt-3 leading-7 text-gray-600">{answer}</p>
    </details>
  );
}