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
  FaShieldAlt, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaCloud,
  FaEye,
  FaHeart,
  FaUserTie,
  FaCreditCard,
  FaCalculator,
  FaHandshake,
  FaBriefcase,
  FaLandmark,
  FaCertificate,
  FaFileAlt,
  FaBalanceScale
} from 'react-icons/fa';

export default function BankPOPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree in any discipline" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "20-30 years (varies by category)" },
    { icon: FaUserTie, title: "Nationality", detail: "Indian citizen or eligible person" },
    { icon: FaCalculator, title: "Skills", detail: "Numerical ability and reasoning skills" }
  ];

  const examTypes = [
    { 
      exam: "SBI PO", 
      frequency: "Annual", 
      vacancies: "2000-2500",
      salary: "₹8.2-13.08 lakhs/year",
      description: "State Bank of India Probationary Officer"
    },
    { 
      exam: "IBPS PO", 
      frequency: "Annual", 
      vacancies: "4000-5000",
      salary: "₹7.2-13.08 lakhs/year", 
      description: "Institute of Banking Personnel Selection"
    },
    { 
      exam: "RBI Grade B", 
      frequency: "Annual", 
      vacancies: "200-300",
      salary: "₹12-15 lakhs/year",
      description: "Reserve Bank of India Grade B Officer"
    },
    { 
      exam: "NABARD Grade A", 
      frequency: "Annual", 
      vacancies: "100-150",
      salary: "₹11-14 lakhs/year",
      description: "National Bank for Agriculture & Rural Development"
    }
  ];

  const careerHierarchy = [
    { rank: "Probationary Officer (PO)", years: "0-2 years", salary: "₹7.2-8.5 lakhs/year" },
    { rank: "Assistant Manager", years: "2-5 years", salary: "₹9-12 lakhs/year" },
    { rank: "Manager", years: "5-10 years", salary: "₹12-18 lakhs/year" },
    { rank: "Senior Manager", years: "10-15 years", salary: "₹18-25 lakhs/year" },
    { rank: "Deputy General Manager", years: "15-20 years", salary: "₹25-35 lakhs/year" },
    { rank: "General Manager", years: "20-25 years", salary: "₹35-50 lakhs/year" }
  ];

  const keySubjects = [
    "Quantitative Aptitude",
    "Reasoning Ability", 
    "English Language",
    "General Awareness",
    "Computer Knowledge",
    "Banking Awareness",
    "Financial Management",
    "Economics & Finance"
  ];

  const topBanks = [
    { bank: "State Bank of India (SBI)", type: "Public Sector", employees: "250,000+", branches: "22,000+" },
    { bank: "Punjab National Bank (PNB)", type: "Public Sector", employees: "180,000+", branches: "12,000+" },
    { bank: "Bank of Baroda", type: "Public Sector", employees: "120,000+", branches: "9,500+" },
    { bank: "HDFC Bank", type: "Private Sector", employees: "120,000+", branches: "6,300+" },
    { bank: "ICICI Bank", type: "Private Sector", employees: "100,000+", branches: "5,200+" },
    { bank: "Axis Bank", type: "Private Sector", employees: "75,000+", branches: "4,700+" }
  ];

  const jobResponsibilities = [
    "Customer relationship management and service",
    "Loan processing and credit analysis", 
    "Branch operations and cash management",
    "Risk assessment and compliance monitoring",
    "Sales and marketing of banking products",
    "Financial advisory and investment guidance",
    "Team management and staff supervision",
    "Audit and inspection activities"
  ];

  const examPattern = [
    { stage: "Preliminary Exam", subjects: "English, Quantitative Aptitude, Reasoning", duration: "1 hour", marks: "100" },
    { stage: "Main Exam", subjects: "Reasoning, English, Quantitative Aptitude, General Awareness, Computer", duration: "3 hours", marks: "200" },
    { stage: "Interview", subjects: "Personality Test & Group Discussion", duration: "30-45 mins", marks: "30-50" },
    { stage: "Document Verification", subjects: "Original certificates verification", duration: "1-2 hours", marks: "Qualifying" }
  ];

  const careerBenefits = [
    "Job Security and Stability",
    "Attractive Salary and Perquisites",
    "Medical and Life Insurance",
    "Provident Fund and Pension",
    "Housing and Vehicle Loans",
    "Career Growth Opportunities",
    "Social Status and Respect",
    "Work-Life Balance"
  ];

  const preparationTips = [
    { tip: "Create a structured study plan", duration: "6-12 months preparation" },
    { tip: "Focus on basics first", detail: "Master fundamental concepts before advanced topics" },
    { tip: "Practice mock tests regularly", detail: "Attempt at least 2-3 mocks weekly" },
    { tip: "Stay updated with current affairs", detail: "Read newspapers and banking magazines daily" },
    { tip: "Improve calculation speed", detail: "Practice mental math and shortcuts" },
    { tip: "Work on English language skills", detail: "Focus on grammar, vocabulary, and comprehension" }
  ];

  const skillsRequired = [
    "Analytical and Problem-solving",
    "Communication and Interpersonal",
    "Leadership and Team Management",
    "Customer Service Orientation",
    "Numerical and Logical Reasoning",
    "Computer and Technology Skills",
    "Attention to Detail",
    "Ethical and Professional Conduct"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-green-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaUniversity className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-blue-300"> Bank PO</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to securing a prestigious Probationary Officer position in India's leading banks
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Bank PO Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Bank PO?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Bank Probationary Officer (PO) is a junior management trainee position in banks who undergoes training and gradually takes up managerial responsibilities. Bank POs are considered the backbone of the banking system and are responsible for various banking operations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After successful completion of the probationary period (typically 1-2 years), POs are promoted to Assistant Manager and can progress to senior management positions throughout their career.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Managing banking operations and customer service
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Loan processing and credit evaluation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Cash management and branch administration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Marketing banking products and services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Risk assessment and compliance monitoring
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Relaxation</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">OBC:</span> 3 years relaxation
                </div>
                <div className="text-black">
                  <span className="font-medium">SC/ST:</span> 5 years relaxation
                </div>
                <div className="text-black">
                  <span className="font-medium">PWD:</span> 10 years relaxation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Bank Exams */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Major Bank PO Examinations</h2>
            </div>
            <div className="space-y-6">
              {examTypes.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.exam}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{exam.frequency}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{exam.vacancies} posts</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{exam.salary}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{exam.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Pattern */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFileAlt className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Exam Pattern & Structure</h2>
            </div>
            <div className="space-y-4">
              {examPattern.map((stage, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{stage.stage}</h3>
                    </div>
                    <div>
                      <span className="text-gray-700">{stage.subjects}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-orange-600 mr-2" />
                      <span className="text-gray-700">{stage.duration}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-700">{stage.marks} marks</span>
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
              <FaGraduationCap className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keySubjects.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills Required</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillsRequired.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-indigo-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Banks */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Banks for PO Positions</h2>
            </div>
            <div className="space-y-4">
              {topBanks.map((bank, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{bank.bank}</h3>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${bank.type === 'Public Sector' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
                        {bank.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{bank.employees}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{bank.branches}</span>
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
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-3 gap-4 items-center">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHeart className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Benefits & Perks</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {careerBenefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation Strategy */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Preparation Strategy</h2>
            </div>
            <div className="space-y-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">{index + 1}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{tip.tip}</h3>
                    <p className="text-gray-600">{tip.duration || tip.detail}</p>
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
                  <a href="https://www.ibps.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">IBPS Official</div>
                      <div className="text-sm text-gray-600">Institute of Banking Personnel Selection</div>
                    </div>
                  </a>
                  <a href="https://bank.sbi/careers" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">SBI Careers</div>
                      <div className="text-sm text-gray-600">State Bank of India recruitment</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain consistency in daily preparation</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Focus on speed and accuracy in calculations</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with banking and financial news</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice time management during preparation</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Join online forums and study groups</span>
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