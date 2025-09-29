import Link from 'next/link';
import React from 'react';
import { 
  FaLeaf, 
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
  FaCircuitBoard,
  FaMobile,
  FaTree,
  FaRecycle,
  FaWater,
  FaWind,
  FaThermometerHalf,
  FaBug,
  FaChartBar,
  FaCloudRain,
  FaMountain as FaMountainAlt,
  FaGlobeAmericas,
  FaSeedling,
  FaSnowflake,
  FaFish,
  FaBird
} from 'react-icons/fa';

export default function EnvironmentalScientistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "B.Sc in Environmental Science/Biology/Chemistry" },
    { icon: FaGraduationCap, title: "Skills", detail: "Research, Analysis, Data interpretation" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 20+ years based on role" },
    { icon: FaShieldAlt, title: "Certification", detail: "Professional certifications preferred" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "B.Sc Environmental Science, Biology, Chemistry, Geography",
      focus: "Environmental chemistry, ecology, geology, statistics, research methods",
      cost: "₹50,000-3 LPA (government to private colleges)",
      outcomes: "Entry-level environmental scientist, research assistant positions"
    },
    { 
      level: "Master's Degree",
      duration: "2 years",
      program: "M.Sc Environmental Science or specialized fields",
      focus: "Advanced specialization, research methodology, thesis work",
      cost: "₹1-5 LPA for M.Sc programs",
      outcomes: "Specialized roles, research positions, higher starting salaries"
    },
    { 
      level: "Professional Certifications",
      duration: "Ongoing",
      program: "Environmental impact assessment, GIS, laboratory techniques",
      focus: "Practical skills, latest technologies, industry standards",
      cost: "₹10,000-1 LPA per certification",
      outcomes: "Career advancement, salary increment, specialization credibility"
    },
    { 
      level: "Doctoral Studies",
      duration: "3-5 years",
      program: "Ph.D. in Environmental Science or related research areas",
      focus: "Original research, innovation, academic career preparation",
      cost: "Usually funded through fellowships",
      outcomes: "R&D leadership, academia, senior research positions"
    }
  ];

  const specializationAreas = [
    { 
      area: "Environmental Impact Assessment",
      description: "Evaluate environmental effects of development projects",
      applications: "Industrial projects, infrastructure, mining, construction",
      jobRoles: "EIA Consultant, Environmental Analyst, Impact Assessment Specialist",
      growth: "High demand with increasing environmental regulations"
    },
    { 
      area: "Water Resources & Quality",
      description: "Study and manage water pollution, conservation, and treatment",
      applications: "Water treatment plants, pollution control, river monitoring",
      jobRoles: "Water Quality Analyst, Hydrologist, Aquatic Scientist",
      growth: "Critical need with water scarcity issues"
    },
    { 
      area: "Air Quality & Climate",
      description: "Monitor air pollution, greenhouse gases, and climate change",
      applications: "Air quality monitoring, climate modeling, carbon management",
      jobRoles: "Air Quality Specialist, Climate Researcher, Meteorologist",
      growth: "Growing with climate change focus"
    },
    { 
      area: "Soil & Land Management",
      description: "Study soil contamination, erosion, and land use planning",
      applications: "Agriculture, land restoration, contaminated site cleanup",
      jobRoles: "Soil Scientist, Land Use Planner, Remediation Specialist",
      growth: "Stable demand in agriculture and urban planning"
    },
    { 
      area: "Biodiversity & Conservation",
      description: "Protect ecosystems, endangered species, and natural habitats",
      applications: "Wildlife reserves, conservation programs, ecological surveys",
      jobRoles: "Conservation Biologist, Wildlife Specialist, Ecologist",
      growth: "Growing awareness of biodiversity importance"
    },
    { 
      area: "Environmental Health",
      description: "Study environmental factors affecting human health",
      applications: "Public health, toxicology, occupational safety",
      jobRoles: "Environmental Health Specialist, Toxicologist, Safety Officer",
      growth: "Increasing focus on health impacts"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Government & Regulatory",
      companies: "Ministry of Environment, Pollution Control Boards, Forest Department, CPCB, SPCB",
      roles: "Environmental Officer, Scientist, Policy Analyst, Research Officer",
      salary: "₹3-15 LPA",
      growth: "Stable sector with regular promotions and job security"
    },
    { 
      sector: "Environmental Consulting",
      companies: "ERM India, Ramky Enviro, IL&FS Environment, Feedback Infra, WAPCOS",
      roles: "Environmental Consultant, EIA Specialist, Project Manager, Technical Lead",
      salary: "₹4-18 LPA",
      growth: "High growth with increasing environmental compliance needs"
    },
    { 
      sector: "Research & Academia",
      companies: "CSIR, ICRISAT, Universities, TERI, CEE, IISc, Research Institutes",
      roles: "Research Scientist, Professor, Research Associate, Post-doc Fellow",
      salary: "₹3-25 LPA",
      growth: "Research-based progression with international opportunities"
    },
    { 
      sector: "Industrial & Corporate",
      companies: "Tata Steel, Reliance, ONGC, Coal India, Vedanta, L&T, Adani Group",
      roles: "Environmental Manager, Sustainability Officer, HSE Specialist, Compliance Manager",
      salary: "₹5-22 LPA",
      growth: "Corporate advancement with sustainability focus"
    },
    { 
      sector: "NGOs & International Bodies",
      companies: "WWF India, Greenpeace, UNDP, World Bank, GIZ, USAID, British Council",
      roles: "Program Manager, Field Coordinator, Policy Researcher, Project Officer",
      salary: "₹4-16 LPA",
      growth: "Impact-driven career with global exposure"
    },
    { 
      sector: "Renewable Energy",
      companies: "Suzlon, ReNew Power, Adani Green, Tata Power Solar, Azure Power",
      roles: "Environmental Specialist, Site Assessment Expert, Compliance Manager, Sustainability Lead",
      salary: "₹6-20 LPA",
      growth: "Rapidly expanding green energy sector"
    }
  ];

  const jobProfiles = [
    { post: "Junior Environmental Scientist", experience: "0-2 years", salary: "₹3-5 LPA", duties: "Data collection, field sampling, basic analysis, report assistance" },
    { post: "Environmental Scientist", experience: "2-5 years", salary: "₹5-8 LPA", duties: "Project management, environmental assessments, client interaction, team coordination" },
    { post: "Senior Environmental Scientist", experience: "5-8 years", salary: "₹8-12 LPA", duties: "Complex project leadership, technical mentoring, business development" },
    { post: "Environmental Manager", experience: "8-12 years", salary: "₹12-18 LPA", duties: "Department management, policy development, strategic planning, regulatory compliance" },
    { post: "Principal Scientist", experience: "12-18 years", salary: "₹18-28 LPA", duties: "Research direction, innovation leadership, organizational strategy" },
    { post: "Chief Environmental Officer", experience: "18+ years", salary: "₹25-50 LPA", duties: "Executive leadership, policy influence, industry representation, board interaction" }
  ];

  const topColleges = [
    { name: "Jawaharlal Nehru University (JNU)", courses: "M.Sc Environmental Sciences", ranking: "Top Tier", fees: "₹50,000-1 LPA", placements: "₹4-12 LPA average" },
    { name: "University of Delhi", courses: "B.Sc/M.Sc Environmental Studies", ranking: "Premier University", fees: "₹75,000-1.5 LPA", placements: "₹3-10 LPA average" },
    { name: "TERI School of Advanced Studies", courses: "M.Sc Environmental Studies", ranking: "Specialized Institute", fees: "₹3-4 LPA", placements: "₹5-15 LPA average" },
    { name: "Banaras Hindu University", courses: "M.Sc Environmental Science", ranking: "Central University", fees: "₹60,000-1 LPA", placements: "₹3-8 LPA average" },
    { name: "Pondicherry University", courses: "M.Sc Ecology & Environmental Sciences", ranking: "Central University", fees: "₹45,000-80,000", placements: "₹3-9 LPA average" },
    { name: "Tata Institute of Social Sciences", courses: "MA Natural Resources Management", ranking: "Premier Institute", fees: "₹2.5-3 LPA", placements: "₹4-12 LPA average" }
  ];

  const technicalSkills = [
    { 
      category: "Laboratory Skills",
      skills: ["Water quality analysis", "Air pollution monitoring", "Soil contamination testing", "Microscopy techniques", "Chemical analysis", "Sample collection protocols"]
    },
    { 
      category: "Software & Technology",
      skills: ["GIS mapping (ArcGIS, QGIS)", "Environmental modeling software", "Statistical analysis (R, SPSS)", "AutoCAD", "Remote sensing", "Database management"]
    },
    { 
      category: "Field Equipment",
      skills: ["pH meters & conductivity meters", "Air quality monitors", "GPS devices", "Data loggers", "Sampling equipment", "Weather monitoring instruments"]
    },
    { 
      category: "Research & Analysis",
      skills: ["Environmental impact assessment", "Risk assessment", "Data interpretation", "Report writing", "Literature review", "Statistical analysis"]
    }
  ];

  const careerProgression = [
    { level: "Junior Scientist", experience: "0-2 years", salary: "₹3-5 LPA", focus: "Learning fundamentals, field experience, data collection" },
    { level: "Environmental Scientist", experience: "2-5 years", salary: "₹5-8 LPA", focus: "Independent projects, specialization development, client work" },
    { level: "Senior Scientist", experience: "5-8 years", salary: "₹8-12 LPA", focus: "Team leadership, complex assessments, business development" },
    { level: "Environmental Manager", experience: "8-12 years", salary: "₹12-18 LPA", focus: "Department management, strategic planning, policy development" },
    { level: "Principal Scientist", experience: "12-18 years", salary: "₹18-28 LPA", focus: "Research leadership, innovation, organizational direction" },
    { level: "Director/Chief Officer", experience: "18+ years", salary: "₹25-50 LPA", focus: "Executive leadership, industry influence, strategic vision" }
  ];

  const governmentOpportunities = [
    { 
      organization: "Central Pollution Control Board (CPCB)",
      positions: "Environmental Engineer, Scientist B/C/D, Research Officer",
      selection: "GATE score, written examination, interview",
      benefits: "₹56,100-1,77,500 pay scale, government benefits, research opportunities"
    },
    { 
      organization: "State Pollution Control Boards",
      positions: "Environmental Officer, Assistant Environmental Engineer, Scientist",
      selection: "State PSC examinations, technical interviews",
      benefits: "₹35,400-1,12,400 pay scale, job security, field postings"
    },
    { 
      organization: "Ministry of Environment & Forests",
      positions: "Under Secretary, Deputy Secretary, Scientific Officer, Research Officer",
      selection: "UPSC examinations, departmental recruitment",
      benefits: "₹56,100-2,25,000 pay scale, policy influence, national projects"
    },
    { 
      organization: "Forest Survey of India",
      positions: "Forest Research Officer, Deputy Director, Assistant Director",
      selection: "Civil Services, technical recruitment",
      benefits: "₹56,100-1,44,200 pay scale, forest conservation work, field experience"
    },
    { 
      organization: "National Environmental Engineering Research Institute",
      positions: "Scientist, Senior Scientist, Principal Scientist",
      selection: "CSIR-NET, written test, interview",
      benefits: "Research environment, international collaborations, innovation opportunities"
    }
  ];

  const emergingTrends = [
    { 
      trend: "Climate Change Research",
      description: "Study global warming impacts and mitigation strategies",
      opportunities: "Climate modeling, carbon footprint assessment, adaptation planning",
      timeline: "High demand for next 10-15 years"
    },
    { 
      trend: "Renewable Energy Assessment",
      description: "Environmental impact studies for solar and wind projects",
      opportunities: "Site assessment, environmental clearances, impact monitoring",
      timeline: "Rapidly growing sector for next 5-10 years"
    },
    { 
      trend: "Circular Economy & Waste Management",
      description: "Sustainable waste processing and resource recovery",
      opportunities: "Waste-to-energy projects, recycling innovations, zero-waste consulting",
      timeline: "Growing focus over next 8-12 years"
    },
    { 
      trend: "Smart Environmental Monitoring",
      description: "IoT sensors and AI for real-time environmental tracking",
      opportunities: "Smart city projects, automated monitoring systems, data analytics",
      timeline: "Technology-driven growth for next 5-8 years"
    },
    { 
      trend: "Biodiversity Conservation Technology",
      description: "Using technology for species protection and habitat restoration",
      opportunities: "Wildlife tracking, habitat mapping, conservation genetics",
      timeline: "Increasing importance over next 10-15 years"
    },
    { 
      trend: "Environmental Justice & Policy",
      description: "Addressing environmental inequality and policy development",
      opportunities: "Community engagement, policy research, advocacy work",
      timeline: "Growing social focus for next decade"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "Certified Environmental Professional (CEP)",
      provider: "Academy of Board Certified Environmental Professionals",
      duration: "6-12 months preparation",
      cost: "$400-600",
      description: "Professional certification for environmental consulting and management"
    },
    { 
      cert: "Environmental Impact Assessment Certification",
      provider: "Various state boards and institutes",
      duration: "3-6 months",
      cost: "₹25,000-75,000",
      description: "Specialized certification for EIA consultancy work"
    },
    { 
      cert: "GIS Professional Certification",
      provider: "ESRI, various GIS institutes",
      duration: "6-8 months",
      cost: "₹50,000-1.5 LPA",
      description: "Geographic Information Systems for environmental mapping and analysis"
    },
    { 
      cert: "ISO 14001 Environmental Management",
      provider: "Various certification bodies",
      duration: "2-4 months",
      cost: "₹15,000-40,000",
      description: "Environmental management systems for corporate sustainability"
    },
    { 
      cert: "Hazardous Waste Management Certification",
      provider: "Pollution Control Boards",
      duration: "1-3 months",
      cost: "₹10,000-25,000",
      description: "Specialized certification for hazardous waste handling and disposal"
    }
  ];

  const salaryRanges = [
    { sector: "Government/Regulatory", fresher: "₹3-6 LPA", experienced: "₹6-15 LPA", senior: "₹12-25 LPA" },
    { sector: "Environmental Consulting", fresher: "₹4-7 LPA", experienced: "₹7-18 LPA", senior: "₹15-35 LPA" },
    { sector: "Research & Academia", fresher: "₹3-5 LPA", experienced: "₹5-15 LPA", senior: "₹12-30 LPA" },
    { sector: "Industrial/Corporate", fresher: "₹5-8 LPA", experienced: "₹8-22 LPA", senior: "₹18-40 LPA" },
    { sector: "NGOs/International", fresher: "₹4-6 LPA", experienced: "₹6-16 LPA", senior: "₹12-28 LPA" },
    { sector: "Renewable Energy", fresher: "₹6-9 LPA", experienced: "₹9-20 LPA", senior: "₹16-35 LPA" },
    { sector: "Environmental Health", fresher: "₹4-7 LPA", experienced: "₹7-16 LPA", senior: "₹14-30 LPA" },
    { sector: "Private Consulting", fresher: "₹5-8 LPA", experienced: "₹8-25 LPA", senior: "₹20-50 LPA" }
  ];

  const preparationTips = [
    "Build strong foundation in chemistry, biology, mathematics, and statistics",
    "Gain practical experience through internships with environmental organizations",
    "Develop proficiency in GIS software, statistical analysis, and environmental modeling tools",
    "Stay updated with environmental regulations, policies, and emerging technologies",
    "Participate in field studies, research projects, and environmental surveys",
    "Join professional organizations like Institution of Environmental Engineers",
    "Develop both technical and communication skills for report writing and presentations",
    "Consider specialization based on regional environmental challenges and opportunities",
    "Build network through conferences, workshops, and environmental science societies",
    "Pursue relevant certifications to enhance credibility and career prospects"
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Environmental Consulting Services",
      investment: "₹5-25 lakhs",
      description: "EIA consulting, pollution monitoring, compliance services",
      potential: "High demand with increasing environmental regulations"
    },
    { 
      business: "Waste Management Solutions",
      investment: "₹15-75 lakhs",
      description: "Recycling plants, composting units, waste treatment systems",
      potential: "Growing market with government support"
    },
    { 
      business: "Air & Water Quality Testing Labs",
      investment: "₹20 lakhs-1 crore",
      description: "Independent testing services, calibration, monitoring equipment",
      potential: "Steady demand from industries and government"
    },
    { 
      business: "Renewable Energy Consulting",
      investment: "₹10-40 lakhs",
      description: "Site assessment, environmental clearances, project management",
      potential: "Rapidly expanding renewable energy sector"
    },
    { 
      business: "Organic & Sustainable Agriculture",
      investment: "₹25 lakhs-2 crores",
      description: "Organic farming, soil health improvement, sustainable practices",
      potential: "Growing organic food market and government incentives"
    },
    { 
      business: "Environmental Training Institute",
      investment: "₹8-30 lakhs",
      description: "Professional training, certification courses, skill development",
      potential: "Increasing need for environmental awareness and compliance"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaLeaf className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Environmental Scientist
              <span className="text-green-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Protect Our Planet - Complete guide to building a successful career in Environmental Science
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Environmental Science Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Environmental Science</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Environmental Science is an interdisciplinary field that combines physical, biological, and information sciences to study the environment and solve environmental problems. Environmental scientists work to protect human health and the environment by understanding pollution, climate change, biodiversity loss, and resource depletion.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With growing environmental challenges like climate change, pollution, and sustainability concerns, environmental scientists play a crucial role in research, policy development, and implementing solutions for a sustainable future.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Environmental Science?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Make positive environmental impact
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Diverse career opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Growing job market
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Interdisciplinary approach
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Global career prospects
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Contribute to sustainability
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
              <h2 className="text-3xl font-bold text-gray-800">Top Environmental Science Colleges</h2>
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
              <FaFlask className="text-3xl text-red-600 mr-4" />
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
                      <span className="font-medium">Organizations:</span> {industry.companies}
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
              <h2 className="text-3xl font-bold text-gray-800">Government & Research Opportunities</h2>
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
                  <FaLeaf className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Our Environment?</h2>
            <p className="text-xl mb-8 text-green-100">Start your journey in Environmental Science and make a difference!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors inline-flex items-center">
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
