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
  FaLeaf,
  FaCalculator,
  FaChartBar,
  FaShieldAlt,
  FaDatabase
} from 'react-icons/fa';

export default function ActuarialScientistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship preferred for most positions" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in Mathematics, Statistics, Economics, or related field" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No upper age limit, but most start careers in early 20s" },
    { icon: FaLandmark, title: "Certification", detail: "Professional qualification from IAI or international bodies" }
  ];

  const examStructure = [
    {
      phase: "Institute of Actuaries of India (IAI) - Foundation",
      duration: "3 Hours per paper",
      papers: "CT1-CT8 (8 Core Technical Papers)",
      marks: "70% to pass each paper",
      nature: "Written examination",
      qualifying: "Bachelor's degree in any discipline"
    },
    {
      phase: "IAI - Associateship",
      duration: "3-4 Hours per paper",
      papers: "SA1-SA7 (Specialist Application Papers)",
      marks: "50% to pass each paper",
      nature: "Written examination + Professional Course",
      qualifying: "Complete Foundation level"
    },
    {
      phase: "IAI - Fellowship",
      duration: "3-4 Hours per paper",
      papers: "ST1-ST9 (Specialist Technical Papers)",
      marks: "50% to pass each paper",
      nature: "Written examination + Research Project",
      qualifying: "Complete Associateship level"
    }
  ];

  const careerHierarchy = [
    { rank: "Actuarial Trainee", years: "0-2 years", salary: "₹4 - ₹8 Lakhs/annum", level: "Entry Level" },
    { rank: "Actuarial Analyst", years: "2-4 years", salary: "₹8 - ₹15 Lakhs/annum", level: "Junior Level" },
    { rank: "Senior Actuarial Analyst", years: "4-7 years", salary: "₹15 - ₹25 Lakhs/annum", level: "Intermediate" },
    { rank: "Actuarial Manager", years: "7-10 years", salary: "₹25 - ₹40 Lakhs/annum", level: "Management" },
    { rank: "Principal Actuary", years: "10-15 years", salary: "₹40 - ₹70 Lakhs/annum", level: "Senior Management" },
    { rank: "Chief Actuary", years: "15+ years", salary: "₹70 Lakhs+ to 2+ Crores/annum", level: "Apex Position" },
    { rank: "Consulting Partner", years: "12+ years", salary: "₹1+ Crores/annum", level: "Partnership" }
  ];

  const keySubjects = [
    "Probability and Statistics",
    "Financial Mathematics",
    "Actuarial Mathematics",
    "Life Insurance",
    "General Insurance",
    "Pensions and Employee Benefits",
    "Investment and Asset Management",
    "Risk Management",
    "Economics",
    "Business Finance"
  ];

  const specializations = [
    "Life Insurance",
    "General Insurance",
    "Health Insurance",
    "Pensions & Retirement",
    "Investment Management",
    "Risk Management",
    "Enterprise Risk",
    "Reinsurance",
    "Banking",
    "Capital Modeling"
  ];

  const actuarialRoles = [
    { role: "Insurance Actuary", responsibility: "Calculating premiums, reserves, and assessing insurance risks" },
    { role: "Pension Actuary", responsibility: "Managing pension schemes and retirement benefit calculations" },
    { role: "Investment Actuary", responsibility: "Portfolio management and investment risk assessment" },
    { role: "Risk Management Specialist", responsibility: "Identifying and quantifying business risks across organizations" },
    { role: "Consulting Actuary", responsibility: "Providing actuarial services to multiple clients and organizations" },
    { role: "Regulatory Actuary", responsibility: "Ensuring compliance with insurance and financial regulations" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCalculator className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete Guide to Becoming an
              <span className="text-blue-300"> Actuarial Scientist</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Master the art and science of risk assessment, from mathematics to insurance and beyond in India
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What is an Actuarial Scientist Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Actuarial Scientist?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An actuarial scientist is a business professional who uses mathematics, statistics, and financial theory to assess risk and uncertainty in insurance, finance, and other industries. They are often called "the architects of insurance" and play a crucial role in determining premiums, reserves, and financial strategies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Actuarial scientists combine analytical skills with business acumen to help organizations make informed decisions about risk management, product pricing, and long-term financial planning. They are highly sought after in insurance companies, consulting firms, and financial institutions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Risk assessment and quantification
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Premium and pricing calculations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Financial modeling and forecasting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Regulatory compliance and reporting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Strategic business planning
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Preferred Academic Background</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Ideal Degrees:</span> Mathematics, Statistics, Economics, Finance, Engineering
                </div>
                <div className="text-black">
                  <span className="font-medium">Alternative Paths:</span> MBA (Finance), CA, CFA, FRM with strong quantitative background
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
              <h2 className="text-3xl font-bold text-gray-800">Actuarial Examination Structure (IAI)</h2>
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
            
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Note:</span> International certifications like SOA (Society of Actuaries) and CAS (Casualty Actuarial Society) from the US are also recognized and highly valued in India.
              </p>
            </div>
          </div>
        </section>

        {/* Key Subjects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Actuarial Subjects</h2>
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
              <FaShieldAlt className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Actuarial Specializations</h2>
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

        {/* Important Actuarial Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaDatabase className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Paths for Actuarial Scientists</h2>
            </div>
            <div className="space-y-4">
              {actuarialRoles.map((role, index) => (
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
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index >= 4 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
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
                        position.level === 'Apex Position' || position.level === 'Partnership' ? 'bg-purple-200 text-purple-800' :
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
                  <a href="https://www.actuariesindia.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Institute of Actuaries of India (IAI)</div>
                      <div className="text-sm text-gray-600">The premier actuarial body in India</div>
                    </div>
                  </a>
                  <a href="https://www.soa.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-teal-600 mr-3 group-hover:text-teal-800" />
                    <div>
                      <div className="font-medium text-gray-800">Society of Actuaries (SOA)</div>
                      <div className="text-sm text-gray-600">International actuarial qualification body</div>
                    </div>
                  </a>
                  <a href="https://www.casact.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-purple-600 mr-3 group-hover:text-purple-800" />
                    <div>
                      <div className="font-medium text-gray-800">Casualty Actuarial Society (CAS)</div>
                      <div className="text-sm text-gray-600">Specializing in property and casualty actuarial science</div>
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
                      <span className="text-gray-700">Start with strong foundation in mathematics and statistics</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Gain practical experience through internships in insurance companies</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Master Excel, SQL, R, Python, and SAS for data analysis</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with regulatory changes and industry trends</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop business communication and presentation skills</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            <Link href='/careers'> Back to Careers</Link>
          </button>
        </div>
      </div>
    </main>
  );
}