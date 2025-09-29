import Link from 'next/link';
import React from 'react';
import { 
  FaPlane, 
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
  FaUserTie
} from 'react-icons/fa';

export const metadata = {
  title: "Pilot Career Guide 2025 | Complete Training, Salary & Requirements | Zero2Career",
  description: "Comprehensive pilot career guide covering training, licensing, salary expectations, eligibility criteria, and career paths. Start your aviation career journey with expert guidance.",
  keywords: "pilot career, aviation training, commercial pilot license, pilot salary India, flight training, CPL, ATPL, pilot jobs, aviation career",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/pilot"
  },
  openGraph: {
    title: "Become a Pilot - Complete Career Guide 2025",
    description: "Discover everything about pilot careers: training requirements, licensing process, salary expectations, and career opportunities in aviation industry.",
    url: "https://zero2career.in/careers/pilot",
    type: "article",
    images: [
      {
        url: "https://aerostarjet.in/wp-content/uploads/2025/05/Commercial-Pilot-License-CPL.jpg",
        width: 1200,
        height: 630,
        alt: "Pilot Career Guide - Zero2Career"
      }
    ],
    siteName: "Zero2Career"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilot Career Guide 2025 | Training, Salary & Requirements",
    description: "Complete guide to becoming a pilot in India. Learn about training, licensing, salary expectations and career opportunities in aviation.",
    images: ["https://aerostarjet.in/wp-content/uploads/2025/05/Commercial-Pilot-License-CPL.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PilotPage() {

  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "12th with Physics and Mathematics (min 50%)" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "17-32 years for commercial pilot license" },
    { icon: FaEye, title: "Vision", detail: "6/6 vision (correctable) and color vision normal" }
  ];

  const licenseTypes = [
    { 
      license: "Student Pilot License (SPL)", 
      duration: "6 months", 
      requirement: "40 flying hours",
      cost: "₹8-12 lakhs",
      description: "Basic training license for learning fundamentals"
    },
    { 
      license: "Private Pilot License (PPL)", 
      duration: "6-12 months", 
      requirement: "40 flying hours",
      cost: "₹15-25 lakhs",
      description: "For private flying, not commercial operations"
    },
    { 
      license: "Commercial Pilot License (CPL)", 
      duration: "18-24 months", 
      requirement: "250 flying hours",
      cost: "₹35-50 lakhs",
      description: "Required for commercial airline operations"
    },
    { 
      license: "Airline Transport Pilot License (ATPL)", 
      duration: "3-5 years", 
      requirement: "1500 flying hours",
      cost: "₹60-80 lakhs",
      description: "Highest level license for airline captains"
    }
  ];

  const careerHierarchy = [
    { rank: "Trainee Pilot", years: "0-1 year", salary: "₹1.5-3 lakhs/month" },
    { rank: "First Officer", years: "1-5 years", salary: "₹3-8 lakhs/month" },
    { rank: "Senior First Officer", years: "5-8 years", salary: "₹8-15 lakhs/month" },
    { rank: "Captain", years: "8-15 years", salary: "₹15-25 lakhs/month" },
    { rank: "Senior Captain", years: "15-25 years", salary: "₹25-35 lakhs/month" },
    { rank: "Chief Pilot/Training Captain", years: "25+ years", salary: "₹35-50 lakhs/month" }
  ];

  const medicalRequirements = [
    "Class 1 Medical Certificate from DGCA",
    "Normal color vision and depth perception",
    "Good cardiovascular health",
    "No history of serious mental illness",
    "Normal hearing ability",
    "Height: 157.5 cm to 193 cm",
    "BMI within acceptable limits",
    "No substance abuse history"
  ];

  const topFlightSchools = [
    { school: "Indira Gandhi Rashtriya Uran Akademi (IGRUA)", location: "Fursatganj, UP", type: "Government", duration: "18 months" },
    { school: "CAE Oxford Aviation Academy", location: "Gondia, Maharashtra", type: "Private", duration: "18 months" },
    { school: "Bombay Flying Club", location: "Mumbai", type: "Private", duration: "12-18 months" },
    { school: "Rajiv Gandhi Academy for Aviation Technology", location: "Secunderabad", type: "Government", duration: "18 months" },
    { school: "Ahmedabad Aviation and Aeronautics", location: "Ahmedabad", type: "Private", duration: "18 months" },
    { school: "Wings Aviation Academy", location: "Pune", type: "Private", duration: "18 months" }
  ];

  const subjectAreas = [
    "Air Navigation",
    "Aviation Meteorology", 
    "Aircraft Technical",
    "Air Regulations",
    "Aviation Medicine",
    "Radio Telephony",
    "Flight Planning",
    "Aircraft Systems"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPlane className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-blue-300"> Commercial Pilot</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the aviation industry and soaring high in the skies as a professional pilot
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Commercial Pilot Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Commercial Pilot?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Commercial Pilot is a licensed aviator who operates aircraft for compensation or hire. They fly passengers, cargo, or perform specialized aviation services for airlines, charter companies, cargo carriers, and other aviation organizations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Commercial pilots must hold a Commercial Pilot License (CPL) issued by the Directorate General of Civil Aviation (DGCA) and maintain strict medical and proficiency standards throughout their career.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Safe operation of aircraft
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Pre-flight inspection and planning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Weather analysis and route planning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Communication with air traffic control
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Emergency procedures and safety protocols
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">English Proficiency:</span> ICAO Level 4 minimum
                </div>
                <div className="text-black">
                  <span className="font-medium">Medical Certificate:</span> Class 1 Medical valid
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* License Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Pilot License Types & Training</h2>
            </div>
            <div className="space-y-6">
              {licenseTypes.map((license, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{license.license}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{license.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{license.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{license.cost}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{license.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHeart className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Medical Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {medicalRequirements.map((requirement, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{requirement}</span>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjectAreas.map((subject, index) => (
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

        {/* Top Flight Schools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Flight Training Schools in India</h2>
            </div>
            <div className="space-y-4">
              {topFlightSchools.map((school, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{school.school}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{school.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${school.type === 'Government' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
                        {school.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{school.duration}</span>
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

        {/* Selection Process Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Process Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Medical Examination</h3>
                  <p className="text-gray-600">Obtain Class 1 Medical Certificate from DGCA authorized medical examiner</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Ground Training</h3>
                  <p className="text-gray-600">Complete theoretical subjects and pass DGCA written examinations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Flight Training</h3>
                  <p className="text-gray-600">Complete required flying hours with certified flight instructor</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Skill Test</h3>
                  <p className="text-gray-600">Pass practical flying test with DGCA examiner</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">License Issue & Job Search</h3>
                  <p className="text-gray-600">Receive CPL and begin applying for airline positions</p>
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
                  <a href="https://dgca.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">DGCA Official Website</div>
                      <div className="text-sm text-gray-600">Regulations, medical requirements, and licensing</div>
                    </div>
                  </a>
                  <a href="https://igrua.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">IGRUA</div>
                      <div className="text-sm text-gray-600">Leading government pilot training academy</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain excellent physical and mental health</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build strong English communication skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with industry professionals</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with aviation technology</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Consider additional ratings and endorsements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-lg">
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