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
  FaTools, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaBriefcase,
  FaAward,
  FaFileAlt,
  FaUserTie,
  FaCog,
  FaCalculator,
  FaLanguage,
  FaLaptop,
  FaHandshake
} from 'react-icons/fa';

export default function IBPSClerkPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Graduation in any discipline from recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "20-28 years (relaxation for reserved categories)" },
    { icon: FaLaptop, title: "Computer Knowledge", detail: "Basic computer proficiency required" }
  ];

  const examPattern = [
    { 
      stage: "Preliminary Examination", 
      type: "Online Test",
      duration: "60 minutes",
      questions: "100 questions",
      description: "English Language (30), Numerical Ability (35), Reasoning Ability (35)"
    },
    { 
      stage: "Main Examination", 
      type: "Online Test",
      duration: "160 minutes",
      questions: "200 questions",
      description: "General/Financial Awareness, General English, Reasoning & Computer Aptitude, Quantitative Aptitude"
    },
    { 
      stage: "Language Proficiency Test", 
      type: "Optional Test",
      duration: "30 minutes",
      questions: "Descriptive Test",
      description: "Local language test (only if prescribed by participating organization)"
    },
    { 
      stage: "Document Verification", 
      type: "Verification",
      duration: "As per schedule",
      questions: "Original Documents",
      description: "Verification of educational and other certificates"
    }
  ];

  const jobProfiles = [
    { post: "Clerk", bank: "Public Sector Banks", salary: "₹19,900-63,200", duties: "Customer service, cash handling, data entry" },
    { post: "Cashier", bank: "Regional Rural Banks", salary: "₹19,900-63,200", duties: "Cash transactions, vault operations" },
    { post: "Data Entry Operator", bank: "Cooperative Banks", salary: "₹19,900-63,200", duties: "Digital data management, file handling" },
    { post: "Customer Service Officer", bank: "Various Banks", salary: "₹19,900-63,200", duties: "Customer assistance, query resolution" },
    { post: "Junior Associate", bank: "Public Sector Banks", salary: "₹19,900-63,200", duties: "Banking operations, administrative work" }
  ];

  const syllabus = [
    { 
      subject: "English Language",
      topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Verbal Ability", "Sentence Completion", "Error Detection", "Para Jumbles", "Fill in the Blanks", "Cloze Test", "Synonyms & Antonyms", "Idioms & Phrases", "One Word Substitution"]
    },
    { 
      subject: "Numerical Ability/Quantitative Aptitude",
      topics: ["Number System", "Simplification", "Average", "Percentage", "Ratio & Proportion", "Time & Work", "Time & Distance", "Simple & Compound Interest", "Profit & Loss", "Data Interpretation", "Mensuration", "Probability", "Permutation & Combination", "Algebra", "Number Series"]
    },
    { 
      subject: "Reasoning Ability",
      topics: ["Logical Reasoning", "Alphanumeric Series", "Ranking/Direction/Alphabet Test", "Data Sufficiency", "Coded Inequalities", "Seating Arrangement", "Puzzle", "Tabulation", "Syllogism", "Blood Relations", "Input Output", "Coding Decoding", "Machine Input", "Statement & Assumptions"]
    },
    { 
      subject: "General/Financial Awareness",
      topics: ["Banking Awareness", "Financial Awareness", "Current Affairs", "Static Awareness", "RBI Functions", "Banking Terms", "Economy", "Budget", "Government Schemes", "Awards & Honors", "Books & Authors", "Sports", "Important Days", "International Organizations", "Capital & Currency"]
    },
    { 
      subject: "Computer Aptitude",
      topics: ["Computer Basics", "Hardware & Software", "Operating System", "MS Office", "Internet", "Networking", "Database", "Computer Security", "Abbreviations", "Latest Technology", "Computer Memory", "Input/Output Devices", "Programming Languages", "Computer History"]
    }
  ];

  const preparationTips = [
    "Create a comprehensive study schedule covering all subjects equally",
    "Practice English newspaper reading daily for language and current affairs",
    "Solve arithmetic problems regularly to improve calculation speed",
    "Take online mock tests to simulate actual exam conditions",
    "Focus on banking awareness and financial terms specifically",
    "Join study groups or coaching for structured preparation",
    "Maintain a current affairs notebook for quick revision",
    "Practice computer-based questions for familiarity with digital format"
  ];

  const careerGrowth = [
    { level: "Clerk/Junior Associate", experience: "0-2 years", salary: "₹19,900-63,200" },
    { level: "Senior Clerk", experience: "2-5 years", salary: "₹23,700-74,200" },
    { level: "Officer Scale I", experience: "Through IBPS PO", salary: "₹23,700-42,020" },
    { level: "Assistant Manager", experience: "5-8 years", salary: "₹31,705-45,950" },
    { level: "Manager", experience: "8-12 years", salary: "₹42,020-66,070" },
    { level: "Senior Manager", experience: "12+ years", salary: "₹50,030-90,820" }
  ];

  const participatingBanks = [
    { 
      type: "Public Sector Banks",
      banks: ["State Bank of India", "Bank of Baroda", "Punjab National Bank", "Canara Bank", "Union Bank of India", "Bank of India"],
      description: "Major nationalized banks with extensive branch networks"
    },
    { 
      type: "Regional Rural Banks",
      banks: ["Various RRBs", "State-sponsored RRBs", "Gramin Banks"],
      description: "Banks focusing on rural and agricultural development"
    },
    { 
      type: "Small Finance Banks",
      banks: ["Equitas Small Finance Bank", "Jana Small Finance Bank", "Ujjivan Small Finance Bank"],
      description: "Banks providing financial services to unserved segments"
    }
  ];

  const examTips = [
    { tip: "Time Management", description: "Allocate time wisely for each section during the exam" },
    { tip: "Accuracy Focus", description: "Maintain high accuracy to avoid negative marking penalties" },
    { tip: "Mock Tests", description: "Regular practice with full-length mock examinations" },
    { tip: "Speed Building", description: "Improve calculation and reading speed through practice" },
    { tip: "Current Affairs", description: "Stay updated with last 6 months banking and general news" },
    { tip: "Weak Areas", description: "Identify and strengthen weak subjects through focused study" }
  ];

  const subjectWeightage = [
    { section: "English Language", prelims: "30 marks", mains: "40 marks", difficulty: "Moderate" },
    { section: "Numerical Ability", prelims: "35 marks", mains: "50 marks", difficulty: "Moderate to High" },
    { section: "Reasoning Ability", prelims: "35 marks", mains: "50 marks", difficulty: "Moderate" },
    { section: "General Awareness", prelims: "Not applicable", mains: "40 marks", difficulty: "Moderate" },
    { section: "Computer Aptitude", prelims: "Not applicable", mains: "20 marks", difficulty: "Easy to Moderate" }
  ];

  const bankingTerms = [
    { term: "NPA", meaning: "Non-Performing Assets - loans that are in default" },
    { term: "CRR", meaning: "Cash Reserve Ratio - percentage of deposits banks must keep with RBI" },
    { term: "SLR", meaning: "Statutory Liquidity Ratio - liquid assets banks must maintain" },
    { term: "RTGS", meaning: "Real Time Gross Settlement - instant large value money transfer" },
    { term: "NEFT", meaning: "National Electronic Funds Transfer - electronic money transfer system" },
    { term: "KYC", meaning: "Know Your Customer - customer identification process" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaUniversity className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IBPS Clerk
              <span className="text-blue-300"> Complete Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive guide to cracking IBPS Clerk exam and starting your banking career
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is IBPS Clerk Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is IBPS Clerk?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  IBPS Clerk is a recruitment examination conducted by the Institute of Banking Personnel Selection (IBPS) for clerical positions in participating public sector banks, regional rural banks, and other financial institutions across India.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As an IBPS Clerk, you'll be responsible for customer service, cash handling, data entry, and various administrative tasks that form the backbone of banking operations. This position offers excellent job security, growth opportunities, and attractive benefits.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Job Security in Banking Sector
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Attractive Salary & Benefits
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Career Growth Opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Medical & Pension Benefits
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Work-Life Balance
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
                <div className="text-gray-700">
                  <span className="font-medium">OBC:</span> 3 years relaxation
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">SC/ST:</span> 5 years relaxation
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">PWD:</span> 13 years relaxation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFileAlt className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Selection Process</h2>
            </div>
            <div className="grid gap-6">
              {examPattern.map((stage, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{stage.stage}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{stage.type}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Duration:</span>
                      <p className="font-medium text-gray-800">{stage.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Questions:</span>
                      <p className="font-medium text-gray-800">{stage.questions}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Type:</span>
                      <p className="font-medium text-gray-800">{stage.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Weightage */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCalculator className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Subject-wise Marks Distribution</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-50 to-red-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Section</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Prelims</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Mains</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Difficulty Level</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectWeightage.map((subject, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{subject.section}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{subject.prelims}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{subject.mains}</td>
                      <td className="border border-gray-200 px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          subject.difficulty === 'Easy to Moderate' ? 'bg-green-100 text-green-700' :
                          subject.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {subject.difficulty}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Participating Banks */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHandshake className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Participating Banks</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {participatingBanks.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{category.type}</h3>
                  <p className="text-gray-700 text-sm mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.banks.slice(0, 4).map((bank, bankIndex) => (
                      <div key={bankIndex} className="text-sm text-gray-600">
                        • {bank}
                      </div>
                    ))}
                    {category.banks.length > 4 && (
                      <div className="text-sm text-gray-500 italic">
                        ...and more banks
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Profiles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Profiles & Salary</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-purple-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Post</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Bank Type</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Salary Range</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Main Duties</th>
                  </tr>
                </thead>
                <tbody>
                  {jobProfiles.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{job.post}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{job.bank}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{job.salary}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{job.duties}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Important Banking Terms */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLanguage className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Important Banking Terms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {bankingTerms.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.term}</h3>
                  <p className="text-gray-700 text-sm">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Complete Syllabus</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {syllabus.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{subject.subject}</h3>
                  <div className="space-y-2">
                    {subject.topics.slice(0, 8).map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                    {subject.topics.length > 8 && (
                      <div className="text-sm text-gray-500 italic">
                        ...and {subject.topics.length - 8} more topics
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Preparation Tips */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Exam Strategy & Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {examTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{tip.tip}</h3>
                  <p className="text-gray-700 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-100">
                  <FaAward className="text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Growth */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression in Banking</h2>
            </div>
            <div className="space-y-6">
              {careerGrowth.map((level, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{level.level}</h3>
                      <p className="text-gray-600">{level.experience}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-green-600">{level.salary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Banking Career?</h2>
            <p className="text-xl mb-8 text-blue-100">Begin your IBPS Clerk preparation today and secure your future in the banking sector!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start Preparation
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}