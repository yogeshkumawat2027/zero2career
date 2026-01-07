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
  FaCalculator,
  FaFileAlt,
  FaSearch,
  FaShieldAlt
} from 'react-icons/fa';

export const metadata = {
  title: "Income Tax Inspector Career Guide 2025 | SSC CGL Exam, Salary & Requirements | Zero2Career",
  description: "Complete Income Tax Inspector career guide covering SSC CGL exam pattern, eligibility criteria, preparation strategy, training process, salary structure and career growth in tax department.",
  keywords: "Income Tax Inspector career, SSC CGL preparation, tax inspector exam, ITO eligibility, SSC exam pattern, tax inspector training, income tax department salary, government jobs India",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/income-tax-inspector"
  },
  openGraph: {
    title: "Become an Income Tax Inspector - Complete SSC CGL Career Guide 2025",
    description: "Discover everything about Income Tax Inspector career: SSC CGL exam preparation, eligibility criteria, training process, salary expectations, and career opportunities in Income Tax Department.",
    url: "https://zero2career.in/careers/income-tax-inspector",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Income Tax Inspector Career Guide - Zero2Career"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Become an Income Tax Inspector - Complete SSC CGL Career Guide 2025",
    description: "Comprehensive guide to Income Tax Inspector career: SSC CGL preparation, eligibility, training, salary & tax department opportunities in India.",
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"],
  }
};

export default function IncomeTaxInspectorPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree from recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "18-27 years (relaxation for reserved categories)" },
    { icon: FaLandmark, title: "Attempts", detail: "No limit on number of attempts" }
  ];

  const examStructure = [
    { 
      phase: "Tier I Examination", 
      duration: "1 Hour", 
      papers: "Computer Based Test",
      marks: "200 Marks",
      nature: "Objective Type (MCQ)",
      qualifying: "Screening for Tier II"
    },
    { 
      phase: "Tier II Examination", 
      duration: "2 Hours Each", 
      papers: "4 Papers (Quantitative, English, Statistics, General Studies)",
      marks: "800 Marks Total",
      nature: "Computer Based Test",
      qualifying: "Merit based selection"
    },
    { 
      phase: "Tier III Examination", 
      duration: "1 Hour", 
      papers: "Descriptive Paper",
      marks: "100 Marks",
      nature: "Pen & Paper Mode",
      qualifying: "Language proficiency test"
    },
    { 
      phase: "Document Verification", 
      duration: "As per schedule", 
      papers: "Certificate Verification",
      marks: "Qualifying",
      nature: "Physical verification",
      qualifying: "Final selection process"
    }
  ];

  const careerHierarchy = [
    { rank: "Income Tax Inspector", years: "0-5 years", salary: "₹44,900 - ₹1,42,400", level: "Entry Level" },
    { rank: "Assistant Commissioner", years: "5-10 years", salary: "₹56,100 - ₹1,77,500", level: "Mid Level" },
    { rank: "Deputy Commissioner", years: "10-15 years", salary: "₹78,800 - ₹2,09,200", level: "Senior Level" },
    { rank: "Joint Commissioner", years: "15-20 years", salary: "₹1,18,500 - ₹2,14,100", level: "Joint Level" },
    { rank: "Additional Commissioner", years: "20-25 years", salary: "₹1,44,200 - ₹2,18,200", level: "Additional Level" },
    { rank: "Commissioner", years: "25-30 years", salary: "₹1,82,200 - ₹2,24,100", level: "Commissioner Level" },
    { rank: "Chief Commissioner", years: "30+ years", salary: "₹2,05,400 - ₹2,24,400", level: "Apex Position" }
  ];

  const keySubjects = [
    "General Intelligence & Reasoning",
    "General Awareness", 
    "Quantitative Aptitude",
    "English Comprehension",
    "Statistics",
    "Income Tax Act",
    "Direct Tax Laws",
    "Accounting Standards",
    "Computer Knowledge",
    "Current Affairs"
  ];

  const trainingPhases = [
    { phase: "Foundation Training", duration: "26 weeks", location: "National Academy of Direct Taxes, Nagpur", focus: "Basic tax laws and administrative procedures" },
    { phase: "Departmental Training", duration: "52 weeks", location: "Regional Training Institute", focus: "Income tax laws, assessment procedures, investigation" },
    { phase: "On-the-Job Training", duration: "6 months", location: "Assigned Office", focus: "Practical exposure under senior officer guidance" },
    { phase: "Specialized Training", duration: "4 weeks", location: "NADT or RTI", focus: "Advanced tax concepts and modern assessment techniques" },
    { phase: "Refresher Courses", duration: "2-4 weeks", location: "Various Training Centers", focus: "Updated tax laws and new procedures" }
  ];

  const inspectorRoles = [
    { role: "Assessment Officer", responsibility: "Processing income tax returns and conducting assessments" },
    { role: "Investigation Officer", responsibility: "Conducting searches, surveys, and tax evasion investigations" },
    { role: "Appeals Officer", responsibility: "Handling taxpayer appeals and dispute resolution" },
    { role: "Audit Officer", responsibility: "Conducting tax audits and compliance verification" },
    { role: "Recovery Officer", responsibility: "Tax collection and recovery of outstanding dues" },
    { role: "Prosecution Officer", responsibility: "Handling prosecution cases for tax violations" }
  ];

  const preparationSubjects = [
    "General Intelligence & Reasoning",
    "General Awareness",
    "Quantitative Aptitude", 
    "English Language",
    "Statistics",
    "General Studies (Finance & Economics)",
    "Computer Knowledge",
    "Current Affairs",
    "Income Tax Basics",
    "Mathematics"
  ];

  const workAreas = [
    { area: "Tax Assessment", description: "Evaluate income tax returns and determine correct tax liability" },
    { area: "Investigation & Survey", description: "Conduct searches and investigations for tax evasion cases" },
    { area: "Audit & Compliance", description: "Verify compliance with tax laws through comprehensive audits" },
    { area: "Appeals & Disputes", description: "Handle taxpayer grievances and appeal proceedings" },
    { area: "Recovery & Collection", description: "Ensure timely collection of taxes and recovery of dues" },
    { area: "Prosecution", description: "Initiate legal proceedings against tax defaulters and evaders" }
  ];

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Mobile Spacing */}
      <div className="block lg:hidden h-4"></div>
      
      {/* Hero Section */}
      <div className="w-full relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCalculator className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming an 
              <span className="text-blue-300"> Income Tax Inspector</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the Income Tax Department and becoming a key player in India's direct tax administration
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Income Tax Inspector Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Income Tax Inspector?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An Income Tax Inspector is a Group-C officer in the Income Tax Department under the Central Board of Direct Taxes (CBDT). They are responsible for implementing direct tax policies, conducting assessments, investigations, and ensuring tax compliance across the country.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Income Tax Inspectors play a crucial role in revenue collection for the government and help maintain the integrity of India's direct tax system through various enforcement and administrative functions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Income tax assessment and scrutiny
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Tax investigation and survey operations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Tax recovery and collection
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Taxpayer assistance and guidance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Compliance verification and audit
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Relaxation Details</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">OBC:</span> 3 years (up to 30 years)
                </div>
                <div className="text-black">
                  <span className="font-medium">SC/ST:</span> 5 years (up to 32 years)
                </div>
                <div className="text-black">
                  <span className="font-medium">PwD:</span> 10 years (Additional relaxation)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SSC CGL Exam Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">SSC CGL Examination Structure</h2>
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

        {/* Key Study Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
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

        {/* Preparation Subjects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBalanceScale className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Important Preparation Subjects</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {preparationSubjects.map((subject, index) => (
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

        {/* Training Process */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training at National Academy of Direct Taxes (NADT)</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Selected Income Tax Inspectors undergo comprehensive training at the National Academy of Direct Taxes (NADT) in Nagpur and Regional Training Institutes. The training combines theoretical knowledge with practical field experience over approximately 18 months.
            </p>
            <div className="space-y-4">
              {trainingPhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700 font-medium">{phase.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.location}</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">{phase.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Areas & Responsibilities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaShieldAlt className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Major Work Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-start">
                    <FaSearch className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{area.area}</h3>
                      <p className="text-gray-700">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Inspector Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGavel className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Important Inspector Positions</h2>
            </div>
            <div className="space-y-4">
              {inspectorRoles.map((role, index) => (
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
            <div className="overflow-x-auto">
              <div className="space-y-4">
                {careerHierarchy.map((position, index) => (
                  <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index === careerHierarchy.length - 1 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
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
          </div>
        </section>

        {/* Selection Process Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Selection Process Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">SSC CGL Notification (April-May)</h3>
                  <p className="text-gray-600">Online application process begins with detailed notification release</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Tier I Examination (July-August)</h3>
                  <p className="text-gray-600">Computer-based screening test with objective questions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Tier II Examination (November-December)</h3>
                  <p className="text-gray-600">Advanced computer-based test with multiple papers</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Tier III Examination (December-January)</h3>
                  <p className="text-gray-600">Descriptive paper to test written communication skills</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Document Verification & Joining</h3>
                  <p className="text-gray-600">Final verification, medical examination and training commencement</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Links</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Official Websites</h3>
                <div className="space-y-3">
                  <a href="https://ssc.nic.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">SSC Official Website</div>
                      <div className="text-sm text-gray-600">Notifications, syllabus, results, and exam updates</div>
                    </div>
                  </a>
                  <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-teal-600 mr-3 group-hover:text-teal-800" />
                    <div>
                      <div className="font-medium text-gray-800">Income Tax Department</div>
                      <div className="text-sm text-gray-600">Official portal for tax laws and procedures</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Preparation Strategy</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Start preparation 8-10 months in advance</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Focus on quantitative aptitude and reasoning</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Regular practice of previous year papers</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Strong foundation in English and general awareness</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Take regular mock tests for time management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
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
