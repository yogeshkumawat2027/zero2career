import Link from 'next/link';
import React from 'react';
import { 
  FaCog, 
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
  FaLightbulb,
  FaHeadset,
  FaEye,
  FaBroadcastTower,
  FaFlag,
  FaMedal,
  FaRunning,
  FaBullseye,
  FaFistRaised,
  FaStar,
  FaCompass,
  FaHelicopter,
  FaAnchor,
  FaGavel,
  FaLaptopCode,
  FaChartBar,
  FaHandshake,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaProjectDiagram,
  FaSync,
  FaLayerGroup,
  FaSearch,
  FaPalette,
  FaServer,
  FaCloud,
  FaShoppingCart,
  FaGlobe,
  FaBuilding,
  FaCalculator,
  FaPercent,
  FaBullhorn,
  FaRocket,
  FaUniversity,
  FaCoins,
  FaPiggyBank,
  FaBalanceScale,
  FaRegHandshake,
  FaRegChartBar,
  FaRegClock,
  FaRegUser,
  FaLandmark,
  FaIndustry,
  FaWrench,
  FaHammer,
  FaMicrochip,
  FaOilCan,
  FaCar,
  FaPlane,
  FaShip,
  FaBolt,
  FaFire,
  FaThermometerHalf,
  FaAtom,
  FaCube,
  FaSlidersH,
  FaRuler,
  FaDesktop,
  FaPrint,
  FaHardHat
} from 'react-icons/fa';

export default function MechanicalEngineerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "B.Tech/B.E. in Mechanical Engineering from AICTE approved college" },
    { icon: FaGraduationCap, title: "Higher Studies", detail: "M.Tech/ME or MBA for career advancement (optional)" },
    { icon: FaCalculator, title: "Skills", detail: "Strong mathematics, physics, and problem-solving abilities" },
    { icon: FaCog, title: "Technical", detail: "CAD software knowledge and manufacturing understanding" }
  ];

  const skillsRequired = [
    { 
      category: "Technical Skills", 
      skills: ["CAD/CAM Software", "Thermodynamics", "Fluid Mechanics", "Machine Design", "Manufacturing Processes", "Material Science"],
      icon: FaCog,
      color: "blue"
    },
    { 
      category: "Software Skills", 
      skills: ["AutoCAD", "SolidWorks", "ANSYS", "CATIA", "MATLAB", "Pro/E"],
      icon: FaDesktop,
      color: "green"
    },
    { 
      category: "Core Competencies", 
      skills: ["Project Management", "Quality Control", "Problem Solving", "Research & Development", "Safety Engineering", "Cost Analysis"],
      icon: FaTools,
      color: "purple"
    }
  ];

  const careerHierarchy = [
    { position: "Junior Engineer/Graduate Engineer Trainee", years: "0-2 years", salary: "₹3-6 LPA", level: "Entry Level" },
    { position: "Assistant Engineer", years: "2-4 years", salary: "₹6-10 LPA", level: "Associate" },
    { position: "Engineer/Senior Engineer", years: "4-8 years", salary: "₹10-18 LPA", level: "Mid Level" },
    { position: "Assistant Manager", years: "8-12 years", salary: "₹18-30 LPA", level: "Management" },
    { position: "Deputy Manager/Manager", years: "12-18 years", salary: "₹30-50 LPA", level: "Senior Management" },
    { position: "Assistant General Manager", years: "18-25 years", salary: "₹50-80 LPA", level: "Executive" },
    { position: "Deputy General Manager", years: "25-30 years", salary: "₹80 LPA - 1.2 Cr", level: "Senior Executive" },
    { position: "General Manager/Chief Engineer", years: "30+ years", salary: "₹1.2-2+ Cr", level: "Top Executive" }
  ];

  const keyResponsibilities = [
    "Design and develop mechanical systems and components",
    "Conduct research and testing of mechanical products", 
    "Analyze problems and create innovative solutions",
    "Supervise manufacturing and production processes",
    "Ensure quality control and safety standards",
    "Prepare technical drawings and specifications",
    "Collaborate with cross-functional engineering teams",
    "Optimize manufacturing processes and reduce costs",
    "Maintain and troubleshoot mechanical equipment",
    "Prepare technical reports and documentation"
  ];

  const mechanicalDomains = [
    { domain: "Automotive Engineering", description: "Vehicle design, engine development, automotive systems", companies: "Tata Motors, Mahindra, Maruti Suzuki, Hero MotoCorp" },
    { domain: "Aerospace Engineering", description: "Aircraft design, propulsion systems, space technology", companies: "HAL, DRDO, ISRO, Boeing, Airbus" },
    { domain: "Manufacturing Engineering", description: "Production planning, automation, quality control", companies: "L&T, Godrej, Bajaj, TVS Group" },
    { domain: "Power & Energy", description: "Power plants, renewable energy, turbines", companies: "BHEL, NTPC, Siemens, GE Power" },
    { domain: "Oil & Gas", description: "Petroleum refining, pipeline systems, drilling equipment", companies: "ONGC, Reliance, Shell, ExxonMobil" },
    { domain: "Heavy Industries", description: "Construction equipment, mining machinery, steel plants", companies: "TATA Steel, JSW, Caterpillar, Komatsu" }
  ];

  const topCompanies = [
    "Tata Motors", "Mahindra Group", "Bajaj Auto", "Hero MotoCorp", "L&T", "BHEL",
    "Siemens", "GE", "Honeywell", "Bosch", "Cummins", "Thermax",
    "Godrej", "TVS Group", "Ashok Leyland", "Escorts", "JCB", "Caterpillar",
    "Reliance Industries", "ONGC", "NTPC", "SAIL", "DRDO", "ISRO"
  ];

  const educationPath = [
    { level: "10+2 (PCM)", duration: "2 years", focus: "Physics, Chemistry, Mathematics with minimum 75% marks", requirement: "JEE Main/Advanced for top colleges" },
    { level: "B.Tech/B.E. Mechanical", duration: "4 years", focus: "Core mechanical subjects, CAD/CAM, thermodynamics", requirement: "AICTE approved college, minimum 60% for good placements" },
    { level: "M.Tech/ME (Optional)", duration: "2 years", focus: "Specialization in specific domain like thermal, design, manufacturing", requirement: "GATE score for government colleges and PSUs" },
    { level: "Professional Certifications", duration: "3-12 months", focus: "Industry-specific certifications, software training", requirement: "Relevant work experience and domain knowledge" }
  ];

  const specializations = [
    { area: "Thermal Engineering", focus: "Heat transfer, HVAC systems, power plants, refrigeration", career: "Thermal analyst, HVAC engineer, power plant engineer" },
    { area: "Design Engineering", focus: "Machine design, CAD modeling, product development", career: "Design engineer, R&D engineer, product manager" },
    { area: "Manufacturing Engineering", focus: "Production planning, automation, quality control", career: "Production engineer, quality manager, plant head" },
    { area: "Automotive Engineering", focus: "Vehicle design, engine systems, automotive technology", career: "Automotive engineer, vehicle dynamics engineer, R&D manager" },
    { area: "Robotics & Automation", focus: "Industrial robots, automated systems, control engineering", career: "Automation engineer, robotics engineer, system integrator" },
    { area: "Materials Engineering", focus: "Material selection, testing, failure analysis", career: "Materials engineer, quality engineer, research scientist" }
  ];

  const governmentOpportunities = [
    { sector: "PSUs", companies: "BHEL, ONGC, NTPC, SAIL, GAIL, IOCL", selection: "GATE score + Interview" },
    { sector: "Railways", companies: "Indian Railways (Various zones)", selection: "RRB JE Exam + Technical Interview" },
    { sector: "Defense", companies: "DRDO, HAL, BEL, OFB", selection: "GATE/DRDO SET + Interview" },
    { sector: "Space", companies: "ISRO, VSSC, LPSC", selection: "ISRO Centralized Recruitment + Interview" },
    { sector: "State PSUs", companies: "State Electricity Boards, PWDs", selection: "State-level engineering exams" },
    { sector: "Banking", companies: "Technical Officer in PSU Banks", selection: "IBPS SO + Interview" }
  ];

  const industryTrends = [
    { trend: "Industry 4.0", impact: "Smart manufacturing, IoT integration, predictive maintenance" },
    { trend: "Electric Vehicles", impact: "Battery technology, electric drivetrains, charging infrastructure" },
    { trend: "Renewable Energy", impact: "Wind turbines, solar systems, energy storage solutions" },
    { trend: "Additive Manufacturing", impact: "3D printing, rapid prototyping, custom manufacturing" },
    { trend: "Artificial Intelligence", impact: "AI in design, predictive analytics, autonomous systems" },
    { trend: "Sustainable Engineering", impact: "Green manufacturing, waste reduction, environmental compliance" }
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 mt-[100px] sm:mt-0 overflow-x-hidden">
      {/* Mobile spacing fix */}
      <div className="block lg:hidden h-4"></div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 text-white py-20 w-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <FaCog className="mx-auto text-6xl mb-6 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to 
              <span className="text-orange-300"> Mechanical Engineering Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to becoming a successful Mechanical Engineer in India's growing industrial sector
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Mechanical Engineering Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Mechanical Engineering?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Mechanical Engineering is one of the oldest and broadest engineering disciplines that applies principles of physics, mathematics, and materials science to design, analyze, manufacture, and maintain mechanical systems. It involves the production and usage of heat and mechanical power for the design, production, and operation of machines and tools.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mechanical engineers work in diverse industries from automotive and aerospace to energy and manufacturing. They are responsible for designing everything from small individual parts and devices to large systems like spacecraft and machine tools.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Machine design and development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Manufacturing and production processes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Thermodynamics and energy systems
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Materials science and engineering
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-orange-500 mr-3" />
                    Robotics and automation systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Entry Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entry Requirements</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Top Engineering Entrance Exams</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">JEE Main:</span> For NITs, IIITs, and state engineering colleges
                </div>
                <div className="text-black">
                  <span className="font-medium">JEE Advanced:</span> For IITs and top engineering institutions
                </div>
                <div className="text-black">
                  <span className="font-medium">State CET:</span> For state-level engineering colleges
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {skillsRequired.map((skillSet, index) => (
                <div key={index} className={`bg-gradient-to-br from-${skillSet.color}-50 to-${skillSet.color}-100 rounded-xl p-6 border border-${skillSet.color}-200`}>
                  <div className="flex items-center mb-4">
                    <skillSet.icon className={`text-3xl text-${skillSet.color}-600 mr-3`} />
                    <h3 className="text-xl font-bold text-gray-800">{skillSet.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <FaCheckCircle className={`text-${skillSet.color}-500 mr-2 text-sm`} />
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Responsibilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyResponsibilities.map((responsibility, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{responsibility}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mechanical Engineering Domains */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaIndustry className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Domains</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {mechanicalDomains.map((domain, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{domain.domain}</h3>
                  <p className="text-gray-600 mb-3">{domain.description}</p>
                  <div className="text-sm text-purple-700 font-medium">
                    <span className="font-semibold">Top Companies: </span>{domain.companies}
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Path</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{career.position}</h3>
                      <p className="text-gray-600 mt-1">Engineering design, project management, and technical leadership</p>
                    </div>
                    <div className="flex items-center space-x-8 text-right">
                      <div>
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-semibold text-gray-800">{career.years}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Salary Range</div>
                        <div className="font-bold text-indigo-700">{career.salary}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Level</div>
                        <div className="font-medium text-blue-600">{career.level}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Educational Pathway</h2>
            </div>
            <div className="space-y-6">
              {educationPath.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.level}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-green-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{phase.focus}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{phase.requirement}</span>
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
              <FaLayerGroup className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{spec.area}</h3>
                  <p className="text-gray-600 mb-3">{spec.focus}</p>
                  <div className="text-sm text-red-700 font-medium">
                    <span className="font-semibold">Career Options: </span>{spec.career}
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
              <FaFlag className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Government Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentOpportunities.map((govt, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{govt.sector}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{govt.companies}</p>
                  <div className="text-sm text-yellow-700 font-medium">
                    <span className="font-semibold">Selection: </span>{govt.selection}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Companies */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-gray-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Hiring Companies</h2>
            </div>
            <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-3">
              {topCompanies.map((company, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-3 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center">
                    <span className="text-gray-800 text-sm font-medium text-center">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Trends */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRocket className="text-3xl text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Future Industry Trends</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {industryTrends.map((trend, index) => (
                <div key={index} className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{trend.trend}</h3>
                  <p className="text-gray-700">{trend.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaMedal className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to Mechanical Engineering Success</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaCog className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Technical Mastery</h3>
                <p className="text-orange-100">Master core engineering principles and modern CAD tools</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaLightbulb className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Innovation Mindset</h3>
                <p className="text-orange-100">Develop creative problem-solving and design thinking skills</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Industry Exposure</h3>
                <p className="text-orange-100">Gain practical experience through internships and projects</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaChartLine className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="text-orange-100">Stay updated with emerging technologies and industry trends</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
