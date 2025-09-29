import Link from 'next/link';
import React from 'react';
import { 
  FaBolt, 
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
  FaSearch,
  FaEye,
  FaBalanceScale,
  FaHandcuffs,
  FaUserShield,
  FaBuilding,
  FaFlag,
  FaStar,
  FaMedal,
  FaPlane,
  FaTrain,
  FaRoad,
  FaMountain,
  FaGlobe,
  FaHome,
  FaHeart,
  FaRunning,
  FaWeight,
  FaEyeSlash,
  FaFirstAid,
  FaGun,
  FaRadio,
  FaCar,
  FaHelicopter,
  FaDumbbell,
  FaAtom,
  FaLaptopCode,
  FaFlask,
  FaMicroscope,
  FaIndustry,
  FaShieldAlt,
  FaLightbulb,
  FaSpaceShuttle,
  FaSatellite,
  FaCrosshairs,
  FaRadar,
  FaPlug,
  FaWifi,
  FaBattery,
  FaSolarPanel,
  FaRobot,
  FaDesktop,
  FaMicrochip,
  FaMobile
} from 'react-icons/fa';

export default function ElectricalEngineerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "B.E/B.Tech in Electrical Engineering" },
    { icon: FaGraduationCap, title: "Skills", detail: "Mathematics, Physics, Problem-solving" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 25+ years based on role" },
    { icon: FaShieldAlt, title: "Certification", detail: "Professional certifications preferred" }
  ];

  const specializationAreas = [
    { 
      area: "Power Systems Engineering",
      description: "Electrical power generation, transmission, and distribution systems",
      applications: "Grid management, renewable energy, smart grids, power quality",
      jobRoles: "Power Engineer, Grid Engineer, Protection Engineer",
      growth: "High demand due to renewable energy expansion"
    },
    { 
      area: "Electronics & Communication",
      description: "Electronic circuits, communication systems, signal processing",
      applications: "Telecommunications, embedded systems, IoT, wireless networks",
      jobRoles: "Design Engineer, RF Engineer, System Engineer",
      growth: "Excellent prospects with 5G and IoT growth"
    },
    { 
      area: "Control Systems & Automation",
      description: "Automatic control systems, robotics, industrial automation",
      applications: "Manufacturing automation, process control, robotics",
      jobRoles: "Automation Engineer, Control Engineer, Robotics Engineer",
      growth: "Growing with Industry 4.0 initiatives"
    },
    { 
      area: "Computer Systems Engineering",
      description: "Hardware design, computer architecture, embedded systems",
      applications: "Processor design, embedded systems, VLSI design",
      jobRoles: "Hardware Engineer, VLSI Engineer, Embedded Engineer",
      growth: "Strong demand in semiconductor industry"
    },
    { 
      area: "Renewable Energy Systems",
      description: "Solar, wind, and other renewable energy technologies",
      applications: "Solar PV systems, wind farms, energy storage, microgrids",
      jobRoles: "Solar Engineer, Wind Engineer, Energy Analyst",
      growth: "Rapidly expanding green energy sector"
    },
    { 
      area: "Biomedical Engineering",
      description: "Medical devices, healthcare technology, bioelectronics",
      applications: "Medical imaging, patient monitoring, prosthetics",
      jobRoles: "Biomedical Engineer, Clinical Engineer, R&D Engineer",
      growth: "Growing healthcare technology market"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Power & Energy",
      companies: "NTPC, Coal India, Adani Power, Tata Power, BHEL",
      roles: "Power Engineer, Electrical Designer, Protection Engineer, Project Engineer",
      salary: "₹4-25 LPA",
      growth: "Stable sector with renewable energy transformation"
    },
    { 
      sector: "Electronics & Semiconductor",
      companies: "Intel, Qualcomm, Broadcom, Texas Instruments, Samsung",
      roles: "Design Engineer, Verification Engineer, VLSI Engineer, Test Engineer",
      salary: "₹6-40 LPA",
      growth: "High growth with semiconductor manufacturing push"
    },
    { 
      sector: "Telecommunications",
      companies: "Ericsson, Nokia, Huawei, Jio, Airtel, Vi",
      roles: "RF Engineer, Network Engineer, System Engineer, Field Engineer",
      salary: "₹5-30 LPA",
      growth: "Expanding with 5G deployment and digital infrastructure"
    },
    { 
      sector: "Automotive & EV",
      companies: "Tata Motors, Mahindra, Tesla, Ola Electric, Ather Energy",
      roles: "Electrical Designer, Battery Engineer, Controls Engineer, Test Engineer",
      salary: "₹5-35 LPA",
      growth: "Rapidly growing electric vehicle market"
    },
    { 
      sector: "Aerospace & Defense",
      companies: "HAL, BEL, DRDO, Boeing, Airbus, L&T Defense",
      roles: "Systems Engineer, Avionics Engineer, Radar Engineer, Test Engineer",
      salary: "₹6-30 LPA",
      growth: "Steady growth with defense modernization"
    },
    { 
      sector: "IT & Software Services",
      companies: "TCS, Infosys, Wipro, Accenture, IBM, Microsoft",
      roles: "Software Engineer, Systems Analyst, Technical Consultant, Project Manager",
      salary: "₹4-50 LPA",
      growth: "Continuous high demand for technical talent"
    }
  ];

  const jobProfiles = [
    { post: "Junior Engineer", experience: "0-2 years", salary: "₹3-6 LPA", duties: "Design assistance, testing, documentation, learning on-the-job" },
    { post: "Engineer", experience: "2-5 years", salary: "₹5-12 LPA", duties: "System design, project execution, team coordination, client interaction" },
    { post: "Senior Engineer", experience: "5-8 years", salary: "₹8-20 LPA", duties: "Project leadership, technical mentoring, advanced design work" },
    { post: "Principal Engineer", experience: "8-12 years", salary: "₹15-35 LPA", duties: "Technology leadership, innovation, strategic planning, team management" },
    { post: "Engineering Manager", experience: "10-15 years", salary: "₹25-60 LPA", duties: "Department management, budget planning, business development" },
    { post: "Director/VP Engineering", experience: "15+ years", salary: "₹50-1.5 Crores", duties: "Organizational strategy, technology vision, executive leadership" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "4 years",
      program: "B.E/B.Tech in Electrical Engineering or related field",
      focus: "Circuit analysis, power systems, electronics, control systems, mathematics",
      cost: "₹50,000-8 LPA (government to private colleges)",
      outcomes: "Entry-level engineering positions, foundation for specialization"
    },
    { 
      level: "Master's Degree (Optional)",
      duration: "2 years",
      program: "M.E/M.Tech in specialized electrical engineering fields",
      focus: "Advanced specialization, research methodology, thesis work",
      cost: "₹1-5 LPA for M.Tech programs",
      outcomes: "Specialized roles, research positions, higher starting salaries"
    },
    { 
      level: "Professional Certifications",
      duration: "Ongoing",
      program: "Industry certifications, vendor-specific training",
      focus: "Practical skills, latest technologies, industry standards",
      cost: "₹10,000-2 LPA per certification",
      outcomes: "Career advancement, salary increment, specialization credibility"
    },
    { 
      level: "Doctoral Studies (Research)",
      duration: "3-5 years",
      program: "Ph.D. in Electrical Engineering or related research areas",
      focus: "Original research, innovation, academic career preparation",
      cost: "Usually funded through fellowships",
      outcomes: "R&D leadership, academia, advanced research positions"
    }
  ];

  const technicalSkills = [
    { 
      category: "Fundamental Skills",
      skills: ["Circuit Analysis", "Electromagnetic Theory", "Power Systems", "Control Theory", "Digital Signal Processing", "Mathematics & Statistics"]
    },
    { 
      category: "Software Tools",
      skills: ["MATLAB/Simulink", "PSpice/LTSpice", "AutoCAD Electrical", "ETAP/PowerWorld", "LabVIEW", "Python/C++ Programming"]
    },
    { 
      category: "Specialized Tools",
      skills: ["PCB Design (Altium/Eagle)", "SCADA Systems", "PLC Programming", "FPGA Design (Verilog/VHDL)", "CAD Tools", "Simulation Software"]
    },
    { 
      category: "Emerging Technologies",
      skills: ["IoT Development", "Machine Learning", "Renewable Energy Systems", "Electric Vehicle Technology", "Smart Grid Technology", "Cybersecurity"]
    }
  ];

  const professionalCertifications = [
    { 
      cert: "Professional Engineer (PE) License",
      provider: "State Engineering Boards (US)/Institution of Engineers (India)",
      duration: "Exam preparation: 6-12 months",
      cost: "$375 (US), ₹15,000-25,000 (India)",
      description: "Professional engineering license for independent practice and consulting"
    },
    { 
      cert: "Project Management Professional (PMP)",
      provider: "Project Management Institute (PMI)",
      duration: "3-6 months preparation",
      cost: "$555",
      description: "Project management certification valuable for engineering managers"
    },
    { 
      cert: "Certified Energy Manager (CEM)",
      provider: "Association of Energy Engineers",
      duration: "4-6 months preparation",
      cost: "$1,200-1,500",
      description: "Energy management and efficiency specialization"
    },
    { 
      cert: "Six Sigma Green/Black Belt",
      provider: "Various organizations (ASQ, IASSC)",
      duration: "3-6 months",
      cost: "₹25,000-75,000",
      description: "Quality management and process improvement methodology"
    },
    { 
      cert: "Certified Automation Professional (CAP)",
      provider: "International Society of Automation (ISA)",
      duration: "6-8 months preparation",
      cost: "$695",
      description: "Industrial automation and control systems specialization"
    }
  ];

  const careerProgression = [
    { level: "Junior Engineer", experience: "0-2 years", salary: "₹3-6 LPA", focus: "Learning fundamentals, hands-on experience, mentorship" },
    { level: "Engineer", experience: "2-5 years", salary: "₹5-12 LPA", focus: "Independent work, specialization development, project contributions" },
    { level: "Senior Engineer", experience: "5-8 years", salary: "₹8-20 LPA", focus: "Technical leadership, mentoring, complex problem solving" },
    { level: "Principal Engineer", experience: "8-12 years", salary: "₹15-35 LPA", focus: "Innovation leadership, strategic technical decisions" },
    { level: "Engineering Manager", experience: "10-15 years", salary: "₹25-60 LPA", focus: "Team management, business interface, resource planning" },
    { level: "Director/VP", experience: "15+ years", salary: "₹50 LPA-1.5 Cr", focus: "Organizational leadership, vision setting, strategic planning" }
  ];

  const emergingTrends = [
    { 
      trend: "Electric Vehicle Revolution",
      description: "Growing demand for EV charging infrastructure and battery technology",
      opportunities: "Battery management systems, charging networks, power electronics",
      timeline: "Current and next 5-10 years"
    },
    { 
      trend: "Renewable Energy Integration",
      description: "Solar, wind, and energy storage systems integration with power grid",
      opportunities: "Grid-tied systems, energy storage, smart inverters, microgrids",
      timeline: "High growth for next 10-15 years"
    },
    { 
      trend: "Industry 4.0 & Smart Manufacturing",
      description: "IoT, AI, and automation transforming manufacturing processes",
      opportunities: "Industrial IoT, predictive maintenance, automated systems",
      timeline: "Rapid adoption over next 5-8 years"
    },
    { 
      trend: "5G & Next-Gen Communication",
      description: "Ultra-fast wireless networks and edge computing infrastructure",
      opportunities: "RF engineering, network infrastructure, edge computing",
      timeline: "Major deployment phase for next 3-5 years"
    },
    { 
      trend: "Smart Cities & Infrastructure",
      description: "Intelligent transportation, smart grids, and connected infrastructure",
      opportunities: "Smart grid technology, intelligent transportation systems",
      timeline: "Long-term growth over next 10-20 years"
    },
    { 
      trend: "Artificial Intelligence & ML Integration",
      description: "AI/ML applications in electrical systems and automation",
      opportunities: "Intelligent control systems, predictive analytics, optimization",
      timeline: "Continuous growth across all sectors"
    }
  ];

  const topColleges = [
    { name: "IIT (All Campuses)", courses: "B.Tech/M.Tech Electrical Engineering", ranking: "Top Tier", fees: "₹8-12 LPA", placements: "₹15-50 LPA average" },
    { name: "NIT (All Campuses)", courses: "B.Tech/M.Tech Electrical Engineering", ranking: "Tier 1", fees: "₹5-8 LPA", placements: "₹8-25 LPA average" },
    { name: "BITS Pilani", courses: "B.E Electrical & Electronics Engineering", ranking: "Top Private", fees: "₹19-25 LPA", placements: "₹12-40 LPA average" },
    { name: "Delhi Technological University (DTU)", courses: "B.Tech Electrical Engineering", ranking: "Top State University", fees: "₹7-9 LPA", placements: "₹8-30 LPA average" },
    { name: "Jadavpur University", courses: "B.E Electrical Engineering", ranking: "Premier State University", fees: "₹2-4 LPA", placements: "₹6-20 LPA average" },
    { name: "VIT/SRM/Manipal", courses: "B.Tech Electrical Engineering", ranking: "Top Private Universities", fees: "₹15-20 LPA", placements: "₹5-18 LPA average" }
  ];

  const governmentOpportunities = [
    { 
      organization: "Central/State Electricity Boards",
      positions: "Assistant Engineer, Executive Engineer, Chief Engineer",
      selection: "State PSC exams, GATE-based recruitment",
      benefits: "Job security, good salary, government benefits, pension"
    },
    { 
      organization: "Indian Railways",
      positions: "Assistant Loco Pilot, Junior Engineer, Section Engineer",
      selection: "RRB examinations, technical interviews",
      benefits: "Central government job, travel benefits, career progression"
    },
    { 
      organization: "Public Sector Undertakings (PSUs)",
      positions: "Graduate Engineer Trainee, Assistant Manager, Deputy Manager",
      selection: "GATE score, written test, interviews",
      benefits: "Excellent packages, job security, professional growth"
    },
    { 
      organization: "DRDO/ISRO",
      positions: "Scientist/Engineer positions",
      selection: "DRDO SET, ISRO recruitment exams",
      benefits: "Research environment, national service, good compensation"
    },
    { 
      organization: "Defense Services",
      positions: "Technical Entry Scheme (TES), Short Service Commission (SSC)",
      selection: "Written exam, Services Selection Board (SSB)",
      benefits: "Military service, leadership training, technical exposure"
    }
  ];

  const salaryRanges = [
    { sector: "Power & Utilities", fresher: "₹4-8 LPA", experienced: "₹8-25 LPA", senior: "₹20-50 LPA" },
    { sector: "Electronics & Semiconductor", fresher: "₹6-12 LPA", experienced: "₹12-40 LPA", senior: "₹35-80 LPA" },
    { sector: "Automotive & EV", fresher: "₹5-10 LPA", experienced: "₹10-35 LPA", senior: "₹30-70 LPA" },
    { sector: "IT Services", fresher: "₹4-8 LPA", experienced: "₹8-30 LPA", senior: "₹25-1.2 Crores" },
    { sector: "Telecommunications", fresher: "₹5-9 LPA", experienced: "₹9-30 LPA", senior: "₹25-60 LPA" },
    { sector: "Government/PSU", fresher: "₹4-7 LPA", experienced: "₹7-20 LPA", senior: "₹18-40 LPA" },
    { sector: "Consulting", fresher: "₹6-12 LPA", experienced: "₹12-50 LPA", senior: "₹40-2 Crores" },
    { sector: "Research & Development", fresher: "₹5-8 LPA", experienced: "₹8-25 LPA", senior: "₹20-45 LPA" }
  ];

  const preparationTips = [
    "Build strong foundation in mathematics, physics, and core electrical engineering subjects",
    "Gain practical experience through internships, projects, and laboratory work",
    "Learn industry-standard software tools like MATLAB, AutoCAD, PSpice, and programming languages",
    "Stay updated with emerging technologies like IoT, renewable energy, and electric vehicles",
    "Develop both technical and soft skills including communication and project management",
    "Participate in technical competitions, hackathons, and engineering societies",
    "Consider specialization based on industry trends and personal interests",
    "Build a strong portfolio showcasing projects, internships, and technical achievements",
    "Network with professionals through LinkedIn, technical conferences, and industry events",
    "Pursue relevant certifications to enhance credibility and career prospects"
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Electrical Consulting Services",
      investment: "₹5-20 lakhs",
      description: "Design consulting for electrical systems, power quality analysis",
      potential: "Good margins with established client base"
    },
    { 
      business: "Solar Installation & Maintenance",
      investment: "₹10-50 lakhs",
      description: "Solar panel installation, maintenance, and energy auditing services",
      potential: "High growth potential with government incentives"
    },
    { 
      business: "Electronics Product Development",
      investment: "₹20 lakhs - 2 crores",
      description: "Custom electronics products, IoT solutions, embedded systems",
      potential: "High-tech startup potential with scalability"
    },
    { 
      business: "Automation Solutions Provider",
      investment: "₹15-75 lakhs",
      description: "Industrial automation, SCADA systems, process control solutions",
      potential: "Growing market with Industry 4.0 adoption"
    },
    { 
      business: "EV Charging Infrastructure",
      investment: "₹25 lakhs - 5 crores",
      description: "Electric vehicle charging stations, battery swapping solutions",
      potential: "Rapidly expanding market with government support"
    },
    { 
      business: "Technical Training Institute",
      investment: "₹10-40 lakhs",
      description: "Professional training in electrical engineering, skill development",
      potential: "Steady demand for upskilling and certification training"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBolt className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Electrical Engineer
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Power the Future - Complete guide to building a successful career in Electrical Engineering
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Electrical Engineering Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Electrical Engineering</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Electrical Engineering is a diverse field encompassing the design, development, and maintenance of electrical systems and devices. From power generation and distribution to electronics, communication systems, and renewable energy, electrical engineers shape the technological infrastructure of modern society.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With the rise of electric vehicles, renewable energy, IoT, and smart cities, electrical engineers are at the forefront of technological innovation, solving complex challenges and creating sustainable solutions for the future.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Electrical Engineering?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Diverse career opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    High demand across industries
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Excellent salary potential
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Innovation and technology focus
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Global job opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Contribution to sustainable future
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Requirements & Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Pathway */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Education Pathway</h2>
            </div>
            <div className="space-y-6">
              {educationPath.map((education, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{education.level}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{education.duration}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Program:</span>
                      <p className="font-medium text-gray-800">{education.program}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Cost:</span>
                      <p className="font-medium text-gray-800">{education.cost}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Duration:</span>
                      <p className="font-medium text-gray-800">{education.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2"><span className="font-medium">Focus:</span> {education.focus}</p>
                  <p className="text-gray-600 text-sm"><span className="font-medium">Outcomes:</span> {education.outcomes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Colleges */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Engineering Colleges</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Institution</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Courses</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Category</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fees</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Placements</th>
                  </tr>
                </thead>
                <tbody>
                  {topColleges.map((college, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{college.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{college.courses}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{college.ranking}</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-medium">{college.fees}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{college.placements}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMicrochip className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {specializationAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{area.area}</h3>
                  <p className="text-gray-700 text-sm mb-3">{area.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">Applications:</span> {area.applications}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Job Roles:</span> {area.jobRoles}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Growth:</span> {area.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaIndustry className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Opportunities</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {industryOpportunities.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{industry.sector}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Companies:</span> {industry.companies}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Roles:</span> {industry.roles}
                    </div>
                    <div className="text-green-600 font-medium">
                      <span>Salary Range:</span> {industry.salary}
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Growth:</span> {industry.growth}
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
              <FaChartLine className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Path</h2>
            </div>
            <div className="space-y-6">
              {careerProgression.map((level, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{level.level}</h3>
                      <p className="text-gray-600">{level.experience}</p>
                      <p className="text-sm text-blue-600">{level.focus}</p>
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

        {/* Salary by Sector */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Salary Ranges by Sector</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-teal-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Sector</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fresher (0-2 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Experienced (5-10 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Senior (10+ years)</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryRanges.map((salary, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{salary.sector}</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-medium">{salary.fresher}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{salary.experienced}</td>
                      <td className="border border-gray-200 px-4 py-3 text-purple-600 font-medium">{salary.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skillCategory, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{skillCategory.category}</h3>
                  <div className="space-y-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Trends */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLightbulb className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Emerging Trends & Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergingTrends.map((trend, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{trend.trend}</h3>
                  <p className="text-gray-700 text-sm mb-3">{trend.description}</p>
                  <div className="space-y-2">
                    <div className="text-gray-600 text-sm">
                      <span className="font-medium">Opportunities:</span> {trend.opportunities}
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg text-sm">
                      <span className="font-medium">Timeline:</span> {trend.timeline}
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
              <FaShieldAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Government & PSU Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {governmentOpportunities.map((govt, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{govt.organization}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Positions:</span> {govt.positions}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Selection:</span> {govt.selection}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Benefits:</span> {govt.benefits}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAward className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Professional Certifications</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {professionalCertifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.cert}</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Provider:</span>
                      <span className="font-medium text-gray-800">{cert.provider}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-800">{cert.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-medium text-green-600">{cert.cost}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entrepreneurial Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLightbulb className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entrepreneurial Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {entrepreneurialOpportunities.map((business, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{business.business}</h3>
                  <p className="text-gray-700 text-sm mb-3">{business.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Investment:</span>
                      <span className="font-medium text-blue-600">{business.investment}</span>
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg text-sm">
                      <span className="font-medium">Potential:</span> {business.potential}
                    </div>
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
              <FaTrophy className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Preparation Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-100">
                  <FaBolt className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power the Future?</h2>
            <p className="text-xl mb-8 text-blue-100">Start your journey in Electrical Engineering and shape tomorrow's technology!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start Your Journey
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
