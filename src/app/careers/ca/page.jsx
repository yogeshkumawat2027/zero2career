import Link from 'next/link';
import React from 'react';
import { 
  FaCalculator, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaBuilding, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaFileAlt,
  FaBalanceScale,
  FaUniversity,
  FaCertificate
} from 'react-icons/fa';

export default function CharteredAccountantPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "10+2 with Commerce/Any stream (50% marks)" },
    { icon: FaCalculator, title: "Mathematics", detail: "Strong numerical and analytical skills" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No upper age limit for CA course" },
    { icon: FaBalanceScale, title: "Ethics", detail: "High integrity and professional ethics" }
  ];

  const examStructure = [
    { 
      phase: "CA Foundation", 
      duration: "4 Papers", 
      papers: "Accounting, Law, Mathematics, Economics",
      marks: "400 Marks",
      nature: "Objective + Subjective"
    },
    { 
      phase: "CA Intermediate", 
      duration: "8 Papers (2 Groups)", 
      papers: "Group I & II with practical training",
      marks: "800 Marks",
      nature: "Subjective + Practical"
    },
    { 
      phase: "CA Final", 
      duration: "8 Papers (2 Groups)", 
      papers: "Advanced subjects + Electives",
      marks: "800 Marks",
      nature: "Advanced level examination"
    }
  ];

  const careerHierarchy = [
    { rank: "Article Assistant", years: "During Articleship", salary: "₹15,000-₹25,000/month" },
    { rank: "Junior CA", years: "0-3 years", salary: "₹6-12 LPA" },
    { rank: "Senior Associate", years: "3-6 years", salary: "₹12-20 LPA" },
    { rank: "Assistant Manager/Manager", years: "5-8 years", salary: "₹18-35 LPA" },
    { rank: "Senior Manager/AVP", years: "8-12 years", salary: "₹30-60 LPA" },
    { rank: "Partner/CFO/Director", years: "12+ years", salary: "₹50 LPA - 2 Cr+" }
  ];

  const keySubjects = [
    "Financial Accounting & Reporting",
    "Cost & Management Accounting", 
    "Taxation (Direct & Indirect)",
    "Corporate & Business Laws",
    "Auditing & Assurance",
    "Financial Management",
    "Strategic Management",
    "Economics & Commercial Knowledge"
  ];

  const practicalTraining = [
    { module: "Articleship Training", duration: "3 years", focus: "Hands-on experience under practicing CA" },
    { module: "Information Technology Training", duration: "4 weeks", focus: "IT skills relevant to accounting profession" },
    { module: "Orientation Program", duration: "4 weeks", focus: "Professional skills and ethics" },
    { module: "Advanced IT Training", duration: "4 weeks", focus: "Advanced IT applications in accounting" },
    { module: "General Management & Communication", duration: "4 weeks", focus: "Soft skills and leadership development" }
  ];

  const specializationAreas = [
    { area: "Public Practice (Audit)", tech: "Audit, Assurance, Compliance", demand: "High", salary: "₹8-50 LPA" },
    { area: "Corporate Finance", tech: "M&A, Valuations, IPO", demand: "Very High", salary: "₹15-80 LPA" },
    { area: "Taxation Services", tech: "Direct Tax, GST, International Tax", demand: "Very High", salary: "₹10-60 LPA" },
    { area: "Management Consulting", tech: "Strategy, Operations, Risk", demand: "High", salary: "₹20-1 Cr+" },
    { area: "Investment Banking", tech: "Corporate Finance, Capital Markets", demand: "High", salary: "₹25-2 Cr+" },
    { area: "Government Services", tech: "IAS, State Services, PSUs", demand: "Moderate", salary: "₹8-25 LPA" }
  ];

  const careerPaths = [
    { 
      path: "Public Practice", 
      duration: "Self-employed", 
      description: "Start own practice or join CA firm",
      earning: "₹50,000-₹10 Cr+",
      nature: "Independent practice with clients"
    },
    { 
      path: "Corporate Sector", 
      duration: "Employment", 
      description: "Work in companies as finance professional",
      earning: "₹6-80 LPA",
      nature: "Structured career growth in organizations"
    },
    { 
      path: "Government Services", 
      duration: "Service", 
      description: "Join civil services or government departments",
      earning: "₹8-25 LPA",
      nature: "Stable government job with benefits"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCalculator className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-blue-300"> Chartered Accountant</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to becoming a CA and building a prestigious career in finance, taxation, and business advisory
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is CA Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Chartered Accountancy?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Chartered Accountancy (CA) is one of India's most prestigious professional courses in commerce and finance. CAs are qualified professionals who specialize in accounting, auditing, taxation, financial management, and business advisory services.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Institute of Chartered Accountants of India (ICAI), established in 1949, is the statutory body that regulates the CA profession in India. CAs play crucial roles in maintaining financial transparency, ensuring compliance, and providing strategic business guidance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Financial auditing and assurance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Tax planning and compliance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Financial reporting and analysis
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Business valuation and advisory
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Risk management and internal controls
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
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
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Entry Routes</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className='text-black'>
                  <span className="font-medium">After 12th:</span> CA Foundation + Intermediate + Final
                </div>
                <div className='text-black'>
                  <span className="font-medium">After Graduation:</span> Direct entry to Intermediate
                </div>
                <div className='text-black'>
                  <span className="font-medium">Commerce Graduates:</span> Exemption available in some papers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CA Course Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">CA Course Structure</h2>
            </div>
            <div className="space-y-6">
              {examStructure.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaFileAlt className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{exam.marks}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{exam.nature}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Core Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Career Path Options */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Path Options</h2>
            </div>
            <div className="space-y-6">
              {careerPaths.map((path, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{path.path}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700 font-medium">{path.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{path.description}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{path.earning}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{path.nature}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Training */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCertificate className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Practical Training Requirements</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              ICAI mandates practical training to ensure CA students gain hands-on experience. The training includes articleship under practicing CAs and various skill development programs to make students industry-ready.
            </p>
            <div className="space-y-4">
              {practicalTraining.map((module, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{module.module}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700 font-medium">{module.duration}</span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700">{module.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBalanceScale className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas & Market Demand</h2>
            </div>
            <div className="space-y-4">
              {specializationAreas.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{spec.area}</h3>
                    </div>
                    <div>
                      <span className="text-gray-700">{spec.tech}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        spec.demand === 'Very High' ? 'bg-green-200 text-green-800' : 
                        spec.demand === 'High' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'
                      }`}>{spec.demand}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{spec.salary}</span>
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
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' : index === careerHierarchy.length - 1 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
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
                      {index === 0 && <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Training Phase</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Leadership</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CA Journey Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">CA Journey Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">CA Foundation (4-6 months preparation)</h3>
                  <p className="text-gray-600">Basic level exam covering fundamentals of accounting, law, and economics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">CA Intermediate (12-18 months preparation)</h3>
                  <p className="text-gray-600">Intermediate level with advanced topics and practical training</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Articleship (3 years)</h3>
                  <p className="text-gray-600">Mandatory practical training under practicing Chartered Accountant</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">CA Final (18-24 months preparation)</h3>
                  <p className="text-gray-600">Final level examination with advanced and specialized subjects</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">CA Membership & Career Start</h3>
                  <p className="text-gray-600">Join ICAI as member and start professional career</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Official Resources</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <FaUniversity className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">ICAI Official Website</div>
                      <div className="text-sm text-gray-600">Study materials, exam notifications, results</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <FaBookOpen className="text-green-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">ICAI Study Materials</div>
                      <div className="text-sm text-gray-600">Comprehensive books and practice manuals</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <FaUsers className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">CA Student Organizations</div>
                      <div className="text-sm text-gray-600">Peer groups and study circles</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Start preparation early and maintain consistency</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Focus on understanding concepts rather than rote learning</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice mock tests and previous year papers</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Make the most of articleship training</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest amendments and regulations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            <Link href="/careers">
              Back to Careers
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}