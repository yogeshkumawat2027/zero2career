import Link from 'next/link';
import React from 'react';
import { 
  FaBuilding, 
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
  FaDraftigCompass,
  FaRuler,
  FaPalette,
  FaHammer,
  FaHome,
  FaIndustry,
  FaCertificate
} from 'react-icons/fa';

export default function ArchitectPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "B.Arch degree from AICTE approved college" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No specific age limit for registration" },
    { icon: FaCertificate, title: "Registration", detail: "COA registration mandatory for practice" },
    { icon: FaUserTie, title: "Skills", detail: "Creative, technical, and communication skills" }
  ];

  const degreeTypes = [
    { 
      degree: "Bachelor of Architecture (B.Arch)", 
      duration: "5 years", 
      requirement: "12th with Mathematics (min 50%)",
      cost: "₹2-15 lakhs/year",
      description: "Primary professional degree in architecture"
    },
    { 
      degree: "Master of Architecture (M.Arch)", 
      duration: "2 years", 
      requirement: "B.Arch degree",
      cost: "₹1-8 lakhs/year",
      description: "Specialization in specific architectural fields"
    },
    { 
      degree: "Master of Planning (M.Plan)", 
      duration: "2 years", 
      requirement: "B.Arch or related degree",
      cost: "₹1-6 lakhs/year",
      description: "Urban and regional planning specialization"
    },
    { 
      degree: "PhD in Architecture", 
      duration: "3-5 years", 
      requirement: "M.Arch degree",
      cost: "₹50k-2 lakhs/year",
      description: "Research and academic career advancement"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Architect", years: "0-2 years", salary: "₹3-6 lakhs/year" },
    { rank: "Architect", years: "2-5 years", salary: "₹6-12 lakhs/year" },
    { rank: "Senior Architect", years: "5-10 years", salary: "₹12-20 lakhs/year" },
    { rank: "Principal Architect", years: "10-15 years", salary: "₹20-35 lakhs/year" },
    { rank: "Partner/Director", years: "15-20 years", salary: "₹35-60 lakhs/year" },
    { rank: "Firm Owner/Consultant", years: "20+ years", salary: "₹60 lakhs-2 crores/year" }
  ];

  const specializationAreas = [
    "Residential Architecture",
    "Commercial Architecture", 
    "Urban Planning",
    "Landscape Architecture",
    "Interior Design",
    "Sustainable Design",
    "Heritage Conservation",
    "Industrial Architecture"
  ];

  const topColleges = [
    { college: "School of Planning and Architecture (SPA)", location: "New Delhi", type: "Government", fees: "₹2-3 lakhs/year" },
    { college: "Sir J.J. College of Architecture", location: "Mumbai", type: "Government", fees: "₹1-2 lakhs/year" },
    { college: "Chandigarh College of Architecture", location: "Chandigarh", type: "Government", fees: "₹2-3 lakhs/year" },
    { college: "CEPT University", location: "Ahmedabad", type: "Private", fees: "₹6-8 lakhs/year" },
    { college: "Manipal School of Architecture", location: "Manipal", type: "Private", fees: "₹8-10 lakhs/year" },
    { college: "Sushant School of Art & Architecture", location: "Gurgaon", type: "Private", fees: "₹10-12 lakhs/year" }
  ];

  const keySubjects = [
    "Architectural Design",
    "Building Construction",
    "History of Architecture",
    "Environmental Science",
    "Structural Systems",
    "Building Materials",
    "Computer-Aided Design",
    "Professional Practice"
  ];

  const entranceExams = [
    "NATA (National Aptitude Test in Architecture)",
    "JEE Main Paper 2 (B.Arch)",
    "GATE (Graduate Aptitude Test in Engineering)",
    "CEED (Common Entrance Exam for Design)",
    "State-level entrance exams",
    "University-specific entrance tests"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBuilding className="mx-auto text-6xl mb-6 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming an 
              <span className="text-orange-300"> Architect</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to designing the future and creating spaces that inspire, function, and endure
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Architecture Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Architecture?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Architecture is the art and science of designing and constructing buildings and other physical structures. Architects combine creativity, technical knowledge, and problem-solving skills to create functional, safe, and aesthetically pleasing spaces that meet human needs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern architects must consider sustainability, accessibility, cultural context, and emerging technologies while balancing client requirements, building codes, and environmental factors.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Design conceptualization and development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Technical drawings and specifications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Project management and coordination
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Client consultation and presentations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Compliance with building codes and regulations
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Notes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">COA Registration:</span> Council of Architecture registration required to practice
                </div>
                <div className="text-black">
                  <span className="font-medium">Portfolio:</span> Strong design portfolio essential for admissions and jobs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entrance Examinations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entrance Examinations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {entranceExams.map((exam, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{exam}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <p className="text-gray-700">
                <span className="font-semibold">NATA</span> is the primary entrance exam for B.Arch admissions, testing aptitude in drawing, observation, and visualization skills alongside mathematics and general knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Degree Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Architecture Degrees & Duration</h2>
            </div>
            <div className="space-y-6">
              {degreeTypes.map((degree, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{degree.degree}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{degree.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{degree.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{degree.cost}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{degree.description}</span>
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

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaPalette className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specializationAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4 border border-pink-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-pink-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Colleges */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Architecture Colleges in India</h2>
            </div>
            <div className="space-y-4">
              {topColleges.map((college, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{college.college}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{college.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${college.type === 'Government' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
                        {college.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{college.fees}</span>
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

        {/* Career Path Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Complete B.Arch Degree</h3>
                  <p className="text-gray-600">5-year professional degree from AICTE approved institution</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">COA Registration</h3>
                  <p className="text-gray-600">Register with Council of Architecture to practice professionally</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gain Work Experience</h3>
                  <p className="text-gray-600">Join architectural firms or consultancies to gain practical experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Specialization & Advanced Education</h3>
                  <p className="text-gray-600">Pursue M.Arch or specialized certifications in chosen field</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Independent Practice or Leadership</h3>
                  <p className="text-gray-600">Start own firm or advance to senior positions in established practices</p>
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
                  <a href="https://coa.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-orange-600 mr-3 group-hover:text-orange-800" />
                    <div>
                      <div className="font-medium text-gray-800">Council of Architecture</div>
                      <div className="text-sm text-gray-600">Registration, regulations, and standards</div>
                    </div>
                  </a>
                  <a href="https://nata.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">NATA Official</div>
                      <div className="text-sm text-gray-600">National Aptitude Test in Architecture</div>
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
                      <span className="text-gray-700">Develop strong drawing and visualization skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Master computer-aided design software</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a strong portfolio showcasing your work</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with sustainable design practices</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with professionals and join architectural associations</span>
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