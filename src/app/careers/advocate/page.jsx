import Link from 'next/link';
import React from 'react';
import {
  FaUniversity,
  FaGraduationCap,
  FaCalendarAlt,
  FaClipboardCheck,
  FaBookOpen,
  FaTrophy,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUsers,
  FaGavel,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaLandmark,
  FaBalanceScale,
  FaHandshake,
  FaUserTie,
  FaCrown,
  FaBalanceScaleLeft,
  FaBuilding,
  FaSitemap,
 FaLeaf
} from 'react-icons/fa';

export const metadata = {
  title: "Advocate/Lawyer Career Guide 2025 | Complete Law Training, Salary & Requirements | Zero2Career",
  description: "Comprehensive advocate career guide covering LLB education, Bar Council enrollment, AIBE examination, salary expectations, specializations, and legal career paths in India.",
  keywords: "advocate career, lawyer India, LLB degree, Bar Council enrollment, AIBE examination, legal career, law jobs, advocate salary, litigation lawyer, corporate lawyer",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/advocate"
  },
  openGraph: {
    title: "Become an Advocate/Lawyer - Complete Career Guide 2025",
    description: "Discover everything about advocate careers: LLB education, Bar Council enrollment, legal specializations, salary expectations, and career opportunities in Indian law.",
    url: "https://zero2career.in/careers/advocate",
    type: "article",
    images: [
      {
        url: "https://www.differencebetween.net/wp-content/uploads/2023/02/Difference-Between-Advocate-and-Barrister.png",
        width: 1200,
        height: 630,
        alt: "Advocate/Lawyer Career Guide - Zero2Career"
      }
    ],
    siteName: "Zero2Career"
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate/Lawyer Career Guide 2025 | Law Training, Salary & Requirements",
    description: "Complete guide to becoming an advocate in India. Learn about LLB education, Bar Council enrollment, AIBE exam and career opportunities in law.",
    images: ["https://www.differencebetween.net/wp-content/uploads/2023/02/Difference-Between-Advocate-and-Barrister.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function AdvocatePage() {

  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "LLB degree from a BCI-recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No upper age limit for Bar Council enrollment" },
    { icon: FaLandmark, title: "Enrollment", detail: "Enroll with a State Bar Council after LLB" }
  ];

  const examStructure = [
    {
      phase: "Integrated Law Course (after 12th)",
      duration: "5 Years",
      papers: "Varies by university",
      marks: "University Exams",
      nature: "Combination of Law & Arts/Commerce/Science",
      qualifying: "CLAT, AILET or other entrance exams"
    },
    {
      phase: "Bachelor of Laws (LLB) Course",
      duration: "3 Years",
      papers: "Varies by university",
      marks: "University Exams",
      nature: "Focus on core legal subjects",
      qualifying: "For graduates in any stream"
    },
    {
      phase: "All India Bar Examination (AIBE)",
      duration: "3.5 Hours",
      papers: "1 Paper (100 MCQs)",
      marks: "100 Marks",
      nature: "Objective Type (MCQ)",
      qualifying: "Mandatory for Certificate of Practice"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Advocate", years: "0-5 years", salary: "₹2.5 - ₹5 Lakhs/annum", level: "Entry Level" },
    { rank: "Mid-Level Advocate", years: "5-10 years", salary: "₹5 - ₹15 Lakhs/annum", level: "Intermediate" },
    { rank: "Senior Advocate (designated)", years: "10+ years", salary: "₹15 Lakhs+ to Crores/annum", level: "Apex Position" },
    { rank: "Partner (Law Firm)", years: "10+ years", salary: "₹20 Lakhs+ to Crores/annum", level: "Corporate Law" },
    { rank: "Judge (District/High Court)", years: "Varies", salary: "Varies, Government Scale", level: "Judiciary" },
    { rank: "Legal Advisor (Corporate)", years: "Varies", salary: "₹8 - ₹30 Lakhs+/annum", level: "In-house Counsel" },
    { rank: "Public Prosecutor", years: "Varies", salary: "Varies, Government Scale", level: "Public Service" }
  ];

  const keySubjects = [
    "Constitutional Law",
    "Indian Penal Code (IPC)",
    "Criminal Procedure Code (CrPC)",
    "Civil Procedure Code (CPC)",
    "Law of Evidence",
    "Family Law",
    "Law of Contracts",
    "Corporate Law",
    "Administrative Law",
    "Professional Ethics"
  ];

  const specializations = [
    "Criminal Law",
    "Civil Law",
    "Corporate Law",
    "Family Law",
    "Intellectual Property Law",
    "Cyber Law",
    "Environmental Law",
    "Tax Law",
    "Constitutional Law",
    "Human Rights Law"
  ];

  const advocateRoles = [
    { role: "Litigation Advocate", responsibility: "Representing clients in court and tribunals" },
    { role: "Corporate Lawyer", responsibility: "Advising businesses on legal matters and compliance" },
    { role: "Legal Consultant", responsibility: "Providing legal advice to individuals or organizations" },
    { role: "Public Prosecutor", responsibility: "Representing the state in criminal cases" },
    { role: "Judiciary", responsibility: "Serving as a judge or magistrate" },
    { role: "Legal Journalist", responsibility: "Reporting on legal developments and court cases" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaGavel className="mx-auto text-6xl mb-6 text-indigo-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete Guide to Becoming an
              <span className="text-indigo-300"> Advocate</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              A comprehensive roadmap to a career in law, from education to litigation and beyond in India
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What is an Advocate Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Advocate in India?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An advocate is a legal professional who has the authority to represent clients in a court of law. The term is often used interchangeably with "lawyer" in India, but an advocate is specifically a person who has enrolled with a State Bar Council and holds a valid Certificate of Practice.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Advocates are responsible for upholding the rule of law, providing legal counsel, drafting documents, and presenting cases before judges and tribunals. They serve as the pillars of the Indian judicial system.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Courtroom representation and litigation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Drafting legal documents and contracts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Providing legal consultation and advice
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Conducting legal research
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Adhering to professional ethics and duties
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria & Educational Path</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Education Options</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">5-year Integrated Course:</span> After 12th grade (e.g., BA LLB, BBA LLB)
                </div>
                <div className="text-black">
                  <span className="font-medium">3-year LLB Course:</span> After completing any bachelor's degree
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examination Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Legal Education & Bar Examination Structure</h2>
            </div>
            <div className="space-y-6">
              {examStructure.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{exam.marks}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{exam.nature}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{exam.qualifying}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Subjects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Legal Subjects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keySubjects.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBalanceScale className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Legal Specializations</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {specializations.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Advocate Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLeaf className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Paths for an Advocate</h2>
            </div>
            <div className="space-y-4">
              {advocateRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaCrown className="text-blue-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{role.role}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{role.responsibility}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Progression */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index === 2 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">{position.years}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{position.salary}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        position.level === 'Entry Level' ? 'bg-green-200 text-green-800' :
                        position.level === 'Apex Position' ? 'bg-purple-200 text-purple-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
                        {position.level}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Links</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Official Websites</h3>
                <div className="space-y-3">
                  <a href="https://www.barcouncilofindia.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-indigo-600 mr-3 group-hover:text-indigo-800" />
                    <div>
                      <div className="font-medium text-gray-800">Bar Council of India</div>
                      <div className="text-sm text-gray-600">The apex regulatory body for the legal profession</div>
                    </div>
                  </a>
                  <a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-teal-600 mr-3 group-hover:text-teal-800" />
                    <div>
                      <div className="font-medium text-gray-800">Supreme Court of India</div>
                      <div className="text-sm text-gray-600">Access judgments, case information, and court rules</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Preparation & Career Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Gain practical experience through internships and moot courts</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with current legal judgments and reforms</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong communication, research, and analytical skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with fellow advocates and legal professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            <Link href='/careers'> Back to Careers</Link>
          </button>
        </div>
      </div>
    </main>
  );
}