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
  FaCrown
} from 'react-icons/fa';

export const metadata = {
  title: "IAS Officer Career Guide 2025 | Complete UPSC Preparation, Salary & Requirements | Zero2Career",
  description: "Comprehensive IAS officer career guide covering UPSC CSE exam pattern, eligibility criteria, preparation strategy, training at LBSNAA, salary structure and career progression in civil services.",
  keywords: "IAS officer career, UPSC CSE preparation, civil services exam, IAS eligibility, UPSC exam pattern, IAS training, DM collector salary, administrative service, government jobs India",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/ias"
  },
  openGraph: {
    title: "Become an IAS Officer - Complete UPSC Career Guide 2025",
    description: "Discover everything about IAS career: UPSC exam preparation, eligibility criteria, training process, salary expectations, and career opportunities in Indian Administrative Service.",
    url: "https://zero2career.in/careers/ias",
    type: "article",
    images: [
      {
        url: "https://static.india.com/wp-content/uploads/2024/09/FotoJet-2024-09-15T081557.532.jpg?impolicy=Medium_Widthonly&w=400",
        width: 1200,
        height: 630,
        alt: "IAS Officer Career Guide - Zero2Career"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Become an IAS Officer - Complete UPSC Career Guide 2025",
    description: "Comprehensive guide to IAS career: UPSC preparation, eligibility, training, salary & administrative service opportunities in India.",
    images: ["https://static.india.com/wp-content/uploads/2024/09/FotoJet-2024-09-15T081557.532.jpg?impolicy=Medium_Widthonly&w=400"],
  }
};

export default function IASPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree from recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "21-32 years (relaxation for reserved categories)" },
    { icon: FaLandmark, title: "Attempts", detail: "6 attempts for General, 9 for OBC, unlimited for SC/ST" }
  ];

  const examStructure = [
    { 
      phase: "Preliminary Examination", 
      duration: "1 Day", 
      papers: "2 Papers (General Studies I & CSAT)",
      marks: "400 Marks",
      nature: "Objective Type (MCQ)",
      qualifying: "CSAT - Qualifying only"
    },
    { 
      phase: "Main Examination", 
      duration: "5 Days", 
      papers: "9 Papers (7 counted for merit)",
      marks: "1750 Marks",
      nature: "Descriptive Type",
      qualifying: "Language papers qualifying"
    },
    { 
      phase: "Personality Test", 
      duration: "30-45 minutes", 
      papers: "Interview Board",
      marks: "275 Marks",
      nature: "Face-to-face interaction",
      qualifying: "Final merit ranking"
    }
  ];

  const careerHierarchy = [
    { rank: "Assistant Collector/SDM", years: "0-4 years", salary: "₹56,100 - ₹1,77,500", level: "Entry Level" },
    { rank: "Collector/District Magistrate", years: "4-9 years", salary: "₹78,800 - ₹2,09,200", level: "District Level" },
    { rank: "Commissioner/Joint Secretary", years: "9-16 years", salary: "₹1,18,500 - ₹2,14,100", level: "Divisional/State" },
    { rank: "Additional Secretary", years: "16-25 years", salary: "₹1,44,200 - ₹2,18,200", level: "State/Central" },
    { rank: "Secretary", years: "25-30 years", salary: "₹1,82,200 - ₹2,24,100", level: "State/Central" },
    { rank: "Chief Secretary", years: "30+ years", salary: "₹2,05,400 - ₹2,24,400", level: "State Head" },
    { rank: "Cabinet Secretary", years: "35+ years", salary: "₹2,50,000 (Fixed)", level: "Apex Position" }
  ];

  const keySubjects = [
    "Indian Polity & Governance",
    "Modern Indian History", 
    "World History & Geography",
    "Indian Economy",
    "Science & Technology",
    "Environment & Ecology",
    "Ethics & Integrity",
    "Current Affairs",
    "Optional Subject (any one)",
    "Essay Writing"
  ];

  const trainingPhases = [
    { phase: "Foundation Course", duration: "15 weeks", location: "LBSNAA Mussoorie", focus: "Basic administrative skills and India study" },
    { phase: "Phase I Training", duration: "39 weeks", location: "LBSNAA Mussoorie", focus: "Core administrative subjects and law" },
    { phase: "Bharat Darshan", duration: "3 weeks", location: "Across India", focus: "Understanding Indian diversity and culture" },
    { phase: "District Training", duration: "1 year", location: "Assigned District", focus: "Practical field experience as ADM" },
    { phase: "Phase II Training", duration: "39 weeks", location: "LBSNAA Mussoorie", focus: "Advanced administration and specialization" },
    { phase: "State Training", duration: "8 weeks", location: "State Academy", focus: "State-specific procedures and policies" }
  ];

  const iasRoles = [
    { role: "District Collector", responsibility: "Overall district administration and law & order" },
    { role: "Joint Secretary", responsibility: "Policy formulation at central government level" },
    { role: "Divisional Commissioner", responsibility: "Administrative head of revenue division" },
    { role: "Chief Electoral Officer", responsibility: "Conducting free and fair elections" },
    { role: "Municipal Commissioner", responsibility: "Urban local body administration" },
    { role: "Managing Director (PSUs)", responsibility: "Leading public sector enterprises" }
  ];

  const optionalSubjects = [
    "Agriculture",
    "Animal Husbandry", 
    "Anthropology",
    "Botany",
    "Chemistry",
    "Civil Engineering",
    "Commerce & Accountancy",
    "Economics",
    "Electrical Engineering",
    "Geography",
    "Geology",
    "History",
    "Law",
    "Management",
    "Mathematics",
    "Medical Science",
    "Philosophy",
    "Physics",
    "Political Science",
    "Psychology",
    "Public Administration",
    "Sociology",
    "Statistics",
    "Zoology"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaUniversity className="mx-auto text-6xl mb-6 text-indigo-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming an 
              <span className="text-indigo-300"> IAS Officer</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the Indian Administrative Service and serving as the backbone of Indian governance
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is IAS Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is the Indian Administrative Service (IAS)?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Indian Administrative Service (IAS) is the premier administrative civil service of India and is part of the All India Services along with IPS and IFS. IAS officers serve as the administrative backbone of the Indian government at both central and state levels.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  IAS officers are responsible for implementing government policies, maintaining law and order, managing public resources, and ensuring efficient delivery of public services to citizens across the country.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Policy formulation and implementation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    District administration and governance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Revenue collection and management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Development program execution
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Crisis management and disaster relief
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Relaxation Details</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">OBC:</span> 3 years (9 attempts)
                </div>
                <div className="text-black">
                  <span className="font-medium">SC/ST:</span> 5 years (No limit on attempts)
                </div>
                <div className="text-black">
                  <span className="font-medium">PwD:</span> 10 years (Additional relaxation)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UPSC CSE Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">UPSC Civil Services Examination Structure</h2>
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

        {/* Optional Subjects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBalanceScale className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular Optional Subjects</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {optionalSubjects.map((subject, index) => (
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

        {/* Training at LBSNAA */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training at LBSNAA, Mussoorie</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Selected IAS officers undergo comprehensive training at the Lal Bahadur Shastri National Academy of Administration (LBSNAA) in Mussoorie. The training spans approximately 2 years with multiple phases combining theoretical learning and practical field experience.
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

        {/* Key IAS Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGavel className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Important IAS Positions</h2>
            </div>
            <div className="space-y-4">
              {iasRoles.map((role, index) => (
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
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">UPSC Notification (February)</h3>
                  <p className="text-gray-600">Online application process begins with detailed notification release</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Preliminary Examination (June)</h3>
                  <p className="text-gray-600">Screening test with General Studies I and CSAT papers</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Main Examination (September-October)</h3>
                  <p className="text-gray-600">Comprehensive written examination with 9 papers over 5 days</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Personality Test (March-May)</h3>
                  <p className="text-gray-600">Interview by UPSC board to assess personality and suitability</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Final Result & Training</h3>
                  <p className="text-gray-600">Merit list publication and joining LBSNAA for training</p>
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
                  <a href="https://upsc.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-indigo-600 mr-3 group-hover:text-indigo-800" />
                    <div>
                      <div className="font-medium text-gray-800">UPSC Official Website</div>
                      <div className="text-sm text-gray-600">Notifications, syllabus, results, and exam updates</div>
                    </div>
                  </a>
                  <a href="https://lbsnaa.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-teal-600 mr-3 group-hover:text-teal-800" />
                    <div>
                      <div className="font-medium text-gray-800">LBSNAA Mussoorie</div>
                      <div className="text-sm text-gray-600">IAS training academy information and programs</div>
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
                      <span className="text-gray-700">Start preparation 12-15 months in advance</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Focus on NCERT books for conceptual foundation</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Daily newspaper reading for current affairs</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Regular answer writing practice for Mains</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Choose optional subject based on interest and background</span>
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