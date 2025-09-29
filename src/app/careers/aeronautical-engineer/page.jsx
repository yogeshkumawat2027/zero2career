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
  FaRocket,
  FaCalculator,
  FaLaptop,
  FaIndustry,
  FaPencilRuler,
  FaUniversity
} from 'react-icons/fa';

export default function AeronauticalEngineerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship (for ISRO, HAL, DRDO positions)" },
    { icon: FaGraduationCap, title: "Education", detail: "B.Tech/BE in Aeronautical/Aerospace Engineering" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "20-32 years (varies by organization)" },
    { icon: FaCalculator, title: "Entrance Exams", detail: "JEE Main, JEE Advanced, GATE (for jobs)" }
  ];

  const examPattern = [
    { 
      stage: "JEE Main", 
      type: "Entrance Exam",
      duration: "3 hours",
      questions: "75 questions",
      description: "For admission to NITs, IIITs and other engineering colleges"
    },
    { 
      stage: "JEE Advanced", 
      type: "Entrance Exam",
      duration: "6 hours (2 papers)",
      questions: "Variable",
      description: "For admission to IITs and ISM Dhanbad"
    },
    { 
      stage: "GATE (Graduate Aptitude Test)", 
      type: "Job Entrance",
      duration: "3 hours",
      questions: "65 questions",
      description: "For PSU recruitment and higher studies"
    },
    { 
      stage: "Campus Placements", 
      type: "Campus Recruitment",
      duration: "Multiple rounds",
      questions: "Technical + HR rounds",
      description: "Direct recruitment by companies visiting campus"
    }
  ];

  const jobProfiles = [
    { post: "Aeronautical Design Engineer", company: "HAL, Boeing, Airbus", salary: "₹6-15 LPA", duties: "Aircraft design, analysis and development" },
    { post: "Flight Test Engineer", company: "ISRO, NAL, Private Aviation", salary: "₹8-18 LPA", duties: "Testing aircraft performance and safety" },
    { post: "Aircraft Maintenance Engineer", company: "Airlines, MRO Companies", salary: "₹5-12 LPA", duties: "Aircraft maintenance and troubleshooting" },
    { post: "Aerospace Systems Engineer", company: "DRDO, Boeing, Lockheed Martin", salary: "₹10-25 LPA", duties: "System integration and spacecraft design" },
    { post: "Propulsion Engineer", company: "ISRO, Rolls Royce, GE Aviation", salary: "₹8-20 LPA", duties: "Engine design and propulsion systems" },
    { post: "Research Scientist", company: "NAL, CSIR, Universities", salary: "₹6-15 LPA", duties: "Research in aerodynamics and materials" }
  ];

  const syllabus = [
    { 
      subject: "Core Engineering Subjects",
      topics: ["Fluid Mechanics", "Thermodynamics", "Heat Transfer", "Mechanics of Materials", "Engineering Mathematics", "Applied Mechanics", "Materials Science", "Control Systems", "Engineering Drawing", "Computer Programming"]
    },
    { 
      subject: "Aeronautical Specialization",
      topics: ["Aerodynamics", "Aircraft Structures", "Propulsion Systems", "Flight Mechanics", "Aircraft Design", "Gas Turbine Technology", "Avionics", "Composite Materials", "Computational Fluid Dynamics", "Wind Tunnel Testing"]
    },
    { 
      subject: "Advanced Topics",
      topics: ["Space Technology", "Rocket Propulsion", "Satellite Engineering", "Navigation Systems", "Aircraft Maintenance", "Flight Safety", "Aerospace Materials", "Structural Analysis", "Design Optimization", "Project Management"]
    },
    { 
      subject: "Practical Skills",
      topics: ["CAD/CAM Software", "MATLAB Programming", "ANSYS Analysis", "SolidWorks Design", "Wind Tunnel Operations", "Aircraft Assembly", "Testing Procedures", "Technical Documentation", "Quality Control", "Safety Protocols"]
    }
  ];

  const preparationTips = [
    "Focus on strong fundamentals in Physics and Mathematics from 11th-12th",
    "Practice JEE Main and Advanced questions regularly for engineering admission",
    "Develop programming skills in MATLAB, Python for aerospace applications",
    "Learn CAD software like SolidWorks, CATIA used in aircraft design",
    "Stay updated with latest developments in aerospace technology",
    "Participate in model aircraft competitions and aerospace workshops",
    "Build strong analytical and problem-solving skills",
    "Consider internships at aerospace companies during college"
  ];

  const careerGrowth = [
    { level: "Junior Engineer", experience: "0-2 years", salary: "₹3.5-6 LPA" },
    { level: "Engineer", experience: "2-5 years", salary: "₹6-10 LPA" },
    { level: "Senior Engineer", experience: "5-8 years", salary: "₹10-15 LPA" },
    { level: "Lead Engineer/Manager", experience: "8-12 years", salary: "₹15-25 LPA" },
    { level: "Principal Engineer", experience: "12-18 years", salary: "₹25-40 LPA" },
    { level: "Chief Engineer/Director", experience: "18+ years", salary: "₹40-80 LPA" }
  ];

  const topColleges = [
    { 
      name: "Indian Institute of Technology (IIT)",
      locations: "Bombay, Madras, Delhi, Kanpur, Kharagpur",
      specialization: "Aerospace Engineering",
      admission: "JEE Advanced"
    },
    { 
      name: "Indian Institute of Science (IISc)",
      locations: "Bangalore",
      specialization: "Aerospace Engineering",
      admission: "GATE/JEE Advanced"
    },
    { 
      name: "National Institute of Technology (NIT)",
      locations: "Various locations",
      specialization: "Aeronautical Engineering",
      admission: "JEE Main"
    },
    { 
      name: "Madras Institute of Technology (MIT)",
      locations: "Chennai",
      specialization: "Aeronautical Engineering",
      admission: "TNEA"
    },
    { 
      name: "Hindustan Institute of Technology",
      locations: "Chennai",
      specialization: "Aeronautical Engineering",
      admission: "HITSEEE"
    },
    { 
      name: "Amity University",
      locations: "Multiple campuses",
      specialization: "Aerospace Engineering",
      admission: "Amity JEE"
    }
  ];

  const jobSectors = [
    { 
      sector: "Government Organizations",
      companies: ["ISRO", "DRDO", "HAL", "NAL", "ADA", "CSIR"],
      description: "Research, development and manufacturing of aircraft and spacecraft"
    },
    { 
      sector: "Private Aviation Companies",
      companies: ["Boeing", "Airbus", "Lockheed Martin", "General Electric", "Rolls Royce"],
      description: "Commercial aircraft design, manufacturing and maintenance"
    },
    { 
      sector: "Airlines & MRO",
      companies: ["Air India", "IndiGo", "SpiceJet", "Air Works", "Bird Group"],
      description: "Aircraft maintenance, repair and overhaul operations"
    },
    { 
      sector: "Space Technology",
      companies: ["Skyroot", "Agnikul", "Bellatrix", "Team Indus"],
      description: "Private space exploration and satellite technology companies"
    }
  ];

  const skillsRequired = [
    { skill: "Technical Skills", details: "Strong in Mathematics, Physics, Fluid Dynamics" },
    { skill: "Software Proficiency", details: "CAD (SolidWorks, CATIA), MATLAB, ANSYS, CFD tools" },
    { skill: "Problem Solving", details: "Analytical thinking and complex problem resolution" },
    { skill: "Communication", details: "Technical documentation and presentation skills" },
    { skill: "Teamwork", details: "Collaborative project management and leadership" },
    { skill: "Attention to Detail", details: "Precision in design and safety considerations" }
  ];

  const specializations = [
    { area: "Aircraft Design", focus: "Structural design, aerodynamics, performance analysis" },
    { area: "Propulsion Systems", focus: "Jet engines, rocket motors, turbine technology" },
    { area: "Avionics", focus: "Navigation systems, flight controls, communication systems" },
    { area: "Materials Engineering", focus: "Composite materials, lightweight structures" },
    { area: "Flight Testing", focus: "Performance testing, safety validation" },
    { area: "Space Technology", focus: "Satellites, launch vehicles, space exploration" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPlane className="mx-auto text-6xl mb-6 text-blue-300 transform rotate-45" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Aeronautical Engineer
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Design the future of aviation and space exploration - Complete guide to becoming an Aeronautical Engineer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Aeronautical Engineering Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Aeronautical Engineering?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Aeronautical Engineering is a branch of engineering that deals with the design, development, construction, testing, and maintenance of aircraft. It encompasses both civilian and military applications, from commercial airliners to fighter jets and spacecraft.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Aeronautical engineers work on cutting-edge technology to make flight safer, more efficient, and environmentally friendly. The field combines principles of mechanical, electrical, and materials engineering with specialized knowledge of aerodynamics and propulsion.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Areas of Work</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Aircraft Design & Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Propulsion System Design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Flight Testing & Analysis
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Spacecraft Engineering
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Research & Development
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility & Admission Process</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Academic Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-gray-700">
                  <span className="font-medium">12th Standard:</span> Physics, Chemistry, Mathematics with minimum 75% marks
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">Entrance Exams:</span> JEE Main, JEE Advanced, State CETs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Colleges */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUniversity className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Colleges for Aeronautical Engineering</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">College</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Location</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Specialization</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Admission</th>
                  </tr>
                </thead>
                <tbody>
                  {topColleges.map((college, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{college.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{college.locations}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{college.specialization}</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-medium">{college.admission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Entrance Exams */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFileAlt className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entrance Exams & Selection Process</h2>
            </div>
            <div className="grid gap-6">
              {examPattern.map((stage, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{stage.stage}</h3>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">{stage.type}</span>
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

        {/* Job Sectors */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaIndustry className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Sectors & Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {jobSectors.map((sector, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{sector.sector}</h3>
                  <p className="text-gray-700 text-sm mb-4">{sector.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700">Key Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.companies.map((company, companyIndex) => (
                        <span key={companyIndex} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">
                          {company}
                        </span>
                      ))}
                    </div>
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
              <FaRocket className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{spec.area}</h3>
                  <p className="text-gray-700 text-sm">{spec.focus}</p>
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
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Job Profile</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Companies</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Salary Range</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Key Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                  {jobProfiles.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{job.post}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{job.company}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{job.salary}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{job.duties}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills Required</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsRequired.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{skill.skill}</h3>
                  <p className="text-gray-700 text-sm">{skill.details}</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Course Curriculum</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
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

        {/* Preparation Tips */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Preparation Strategy</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                  <FaAward className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Growth</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Soar High in Aeronautical Engineering?</h2>
            <p className="text-xl mb-8 text-blue-100">Start your journey to design the aircraft and spacecraft of tomorrow!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Find Colleges
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
