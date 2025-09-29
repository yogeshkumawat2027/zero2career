import Link from 'next/link';
import React from 'react';
import { 
  FaHardHat, 
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
  FaBuilding,
  FaEye,
  FaHeart,
  FaUserTie,
  FaRoad,
  FaHome,
  FaWrench,
  FaRuler,
  FaCog,
  FaCalculator
} from 'react-icons/fa';

export default function CivilEngineerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "10+2 with Physics, Chemistry, Mathematics (min 50%)" },
    { icon: FaGraduationCap, title: "Entrance Exams", detail: "JEE Main/Advanced, State CETs" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "17-25 years for most entrance exams" },
    { icon: FaCalculator, title: "Skills", detail: "Strong mathematical and analytical abilities" }
  ];

  const specializationTypes = [
    { 
      specialization: "Structural Engineering", 
      duration: "4 years BTech", 
      requirement: "JEE/State CET + BTech Civil",
      salary: "₹4-12 lakhs/year",
      description: "Design and analysis of buildings, bridges, towers"
    },
    { 
      specialization: "Transportation Engineering", 
      duration: "4 years BTech", 
      requirement: "JEE/State CET + BTech Civil",
      salary: "₹5-15 lakhs/year",
      description: "Design highways, railways, airports, traffic systems"
    },
    { 
      specialization: "Water Resources Engineering", 
      duration: "4 years BTech", 
      requirement: "JEE/State CET + BTech Civil",
      salary: "₹4-10 lakhs/year",
      description: "Manage water supply, irrigation, flood control"
    },
    { 
      specialization: "Geotechnical Engineering", 
      duration: "4 years BTech", 
      requirement: "JEE/State CET + BTech Civil",
      salary: "₹5-12 lakhs/year",
      description: "Study soil behavior for foundation design"
    },
    { 
      specialization: "Environmental Engineering", 
      duration: "4 years BTech", 
      requirement: "JEE/State CET + BTech Civil",
      salary: "₹6-14 lakhs/year",
      description: "Design waste treatment and pollution control systems"
    },
    { 
      specialization: "Construction Management", 
      duration: "4 years BTech", 
      requirement: "JEE/State CET + BTech Civil",
      salary: "₹7-20 lakhs/year",
      description: "Project planning, cost estimation, site management"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Engineer", years: "0-2 years", salary: "₹3-6 lakhs/year" },
    { rank: "Assistant Engineer", years: "2-5 years", salary: "₹6-10 lakhs/year" },
    { rank: "Civil Engineer", years: "5-8 years", salary: "₹10-18 lakhs/year" },
    { rank: "Senior Engineer", years: "8-12 years", salary: "₹18-30 lakhs/year" },
    { rank: "Project Manager", years: "12-18 years", salary: "₹30-50 lakhs/year" },
    { rank: "Chief Engineer/Director", years: "18+ years", salary: "₹50-80 lakhs/year" }
  ];

  const skillRequirements = [
    "Strong foundation in mathematics and physics",
    "Computer-aided design (AutoCAD, Revit, STAAD Pro)",
    "Project management and planning skills",
    "Knowledge of building codes and regulations",
    "Site supervision and quality control",
    "Cost estimation and budget management",
    "Problem-solving and analytical thinking",
    "Communication and teamwork abilities"
  ];

  const topColleges = [
    { institution: "Indian Institute of Technology (IITs)", location: "Multiple Cities", type: "Premier Institute", programs: "BTech/MTech Civil Engineering" },
    { institution: "National Institute of Technology (NITs)", location: "Multiple Cities", type: "Central Institute", programs: "BTech/MTech Civil Engineering" },
    { institution: "Delhi Technological University", location: "New Delhi", type: "State University", programs: "BTech Civil Engineering" },
    { institution: "Birla Institute of Technology and Science", location: "Pilani", type: "Private Institute", programs: "BTech Civil Engineering" },
    { institution: "Vellore Institute of Technology", location: "Vellore", type: "Private Institute", programs: "BTech Civil Engineering" },
    { institution: "Jadavpur University", location: "Kolkata", type: "State University", programs: "BTech Civil Engineering" }
  ];

  const subjectAreas = [
    "Engineering Mechanics",
    "Strength of Materials", 
    "Structural Analysis",
    "Concrete Technology",
    "Soil Mechanics",
    "Fluid Mechanics",
    "Highway Engineering",
    "Building Construction",
    "Surveying",
    "Environmental Engineering",
    "Project Management",
    "Construction Planning"
  ];

  const workEnvironments = [
    { environment: "Construction Sites", description: "Supervise construction and ensure quality standards" },
    { environment: "Design Offices", description: "Create structural and architectural designs" },
    { environment: "Government Departments", description: "Public works and infrastructure development" },
    { environment: "Consulting Firms", description: "Provide expert advice on engineering projects" },
    { environment: "Real Estate Companies", description: "Residential and commercial development projects" },
    { environment: "Infrastructure Companies", description: "Roads, bridges, airports, railways construction" }
  ];

  const governmentOpportunities = [
    { department: "Public Works Department (PWD)", role: "Assistant/Executive Engineer", salary: "₹4-8 lakhs/year" },
    { department: "Indian Railways", role: "Junior/Assistant Engineer", salary: "₹4-7 lakhs/year" },
    { department: "National Highways Authority of India", role: "Deputy Manager/Manager", salary: "₹6-12 lakhs/year" },
    { department: "Central Water Commission", role: "Assistant Engineer", salary: "₹4-8 lakhs/year" },
    { department: "Border Roads Organisation", role: "Junior Engineer", salary: "₹4-7 lakhs/year" },
    { department: "Airport Authority of India", role: "Junior Executive", salary: "₹5-9 lakhs/year" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaHardHat className="mx-auto text-6xl mb-6 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-orange-300"> Civil Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to building India's infrastructure and creating the foundations of modern society
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Civil Engineer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Civil Engineer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Civil Engineer is a professional who designs, constructs, and maintains the infrastructure that forms the backbone of modern society. They work on projects ranging from buildings and bridges to roads, dams, and water supply systems, ensuring public safety and improving quality of life.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Civil Engineers combine technical expertise with creative problem-solving to address complex challenges in urban planning, environmental protection, and sustainable development, making them essential to India's growth and modernization.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Design and plan construction projects
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Supervise construction activities on-site
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Ensure compliance with safety standards
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Prepare cost estimates and project timelines
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Coordinate with architects and contractors
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
              <FaClipboardCheck className="text-3xl text-blue-600 mr-4" />
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
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Entrance Exam Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">National Level:</span> JEE Main, JEE Advanced
                </div>
                <div className="text-black">
                  <span className="font-medium">State Level:</span> MHT CET, KCET, WBJEE, etc.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Civil Engineering Specializations</h2>
            </div>
            <div className="space-y-6">
              {specializationTypes.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{spec.specialization}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{spec.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{spec.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{spec.salary}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{spec.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillRequirements.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{skill}</span>
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
              <FaBookOpen className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjectAreas.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaRuler className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Top Civil Engineering Colleges in India</h2>
            </div>
            <div className="space-y-4">
              {topColleges.map((college, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{college.institution}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{college.location}</span>
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-200 text-teal-800">
                        {college.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{college.programs}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaShieldAlt className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Government Job Opportunities</h2>
            </div>
            <div className="space-y-4">
              {governmentOpportunities.map((job, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{job.department}</h3>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium">{job.role}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{job.salary}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Environments */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHome className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Work Environments</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workEnvironments.map((work, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{work.environment}</h3>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Progression */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200' : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'}`}>
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
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

        {/* Education Process Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Education Process Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">12th Standard (PCM Stream)</h3>
                  <p className="text-gray-600">Complete higher secondary with Physics, Chemistry, Mathematics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Entrance Exam Preparation</h3>
                  <p className="text-gray-600">Prepare for JEE Main/Advanced or state-level engineering entrance exams</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">BTech Civil Engineering (4 years)</h3>
                  <p className="text-gray-600">Complete undergraduate degree with specialization choice</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Internships & Projects</h3>
                  <p className="text-gray-600">Gain practical experience through internships and final year projects</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Job Placement/Higher Studies</h3>
                  <p className="text-gray-600">Secure employment or pursue MTech/MS for advanced specialization</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Career Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Professional Bodies</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <FaBuilding className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Institution of Engineers (India)</div>
                      <div className="text-sm text-gray-600">Premier professional body for engineers</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <FaRoad className="text-green-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Indian Concrete Institute</div>
                      <div className="text-sm text-gray-600">Specialization in concrete technology</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Master CAD software and design tools</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Gain hands-on construction site experience</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong project management skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with building codes and standards</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Consider sustainable and green building practices</span>
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