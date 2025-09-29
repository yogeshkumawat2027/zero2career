import Link from 'next/link';
import React from 'react';
import { 
  FaMountain, 
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
  FaCalculator,
  FaChartBar,
  FaChartPie,
  FaTable,
  FaDatabase,
  FaFileExcel,
  FaDollarSign,
  FaUniversity,
  FaCreditCard,
  FaRegChartBar,
  FaPiggyBank,
  FaLanguage,
  FaHandshake,
  FaNewspaper,
  FaVideo,
  FaMicrophone,
  FaEnvelope,
  FaPhoneAlt,
  FaFax,
  FaCode,
  FaPaintBrush,
  FaMusic,
  FaVolumeUp,
  FaCamera,
  FaCube,
  FaVrCardboard,
  FaPlayCircle,
  FaGem,
  FaOilCan,
  FaWater,
  FaTree,
  FaLeaf,
  FaRecycle,
  FaHammer,
  FaCompass,
  FaMap,
  FaBinoculars,
  FaLayerGroup
} from 'react-icons/fa';

export default function GeologistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "B.Sc./M.Sc. in Geology or Earth Sciences" },
    { icon: FaGraduationCap, title: "Skills", detail: "Scientific observation, analytical thinking, fieldwork" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 25+ years based on specialization" },
    { icon: FaShieldAlt, title: "Physical Fitness", detail: "Good health for extensive fieldwork and travel" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "B.Sc. Geology, Earth Sciences, Geophysics, Mining Engineering",
      focus: "Mineralogy, petrology, structural geology, field mapping, laboratory techniques",
      cost: "₹30,000-4 LPA (government to private colleges)",
      outcomes: "Junior geologist, field assistant, lab technician, mining trainee positions"
    },
    { 
      level: "Master's Degree",
      duration: "2 years",
      program: "M.Sc. Geology, Applied Geology, Environmental Geology, Petroleum Geology",
      focus: "Specialized geology, research methodology, advanced fieldwork, thesis project",
      cost: "₹50,000-6 LPA for specialized programs",
      outcomes: "Geologist, research associate, exploration geologist, environmental consultant"
    },
    { 
      level: "Professional Certifications",
      duration: "6 months - 2 years",
      program: "PG Diploma in Petroleum Geology, Mining, Environmental Impact Assessment",
      focus: "Industry-specific skills, software training, regulatory knowledge",
      cost: "₹50,000-3 LPA for specialized certifications",
      outcomes: "Specialized roles in oil & gas, mining, environmental consulting, government"
    },
    { 
      level: "Doctoral Studies (Ph.D.)",
      duration: "3-5 years",
      program: "Ph.D. in Geology, Earth Sciences, specialized research areas",
      focus: "Original research, academic expertise, advanced analytical techniques",
      cost: "₹25,000-2 LPA with potential fellowship funding",
      outcomes: "Research scientist, professor, senior consultant, laboratory director"
    }
  ];

  const geologicalSpecializations = [
    { 
      area: "Petroleum Geology",
      description: "Exploration and extraction of oil and natural gas resources",
      applications: "Oil exploration, reservoir characterization, drilling operations, resource assessment",
      jobRoles: "Petroleum Geologist, Reservoir Geologist, Exploration Manager, Drilling Supervisor",
      growth: "Strong demand with global energy needs and new exploration technologies"
    },
    { 
      area: "Mining Geology",
      description: "Exploration, evaluation, and extraction of mineral resources",
      applications: "Mine planning, ore reserve estimation, mineral exploration, quarry operations",
      jobRoles: "Mining Geologist, Exploration Geologist, Mine Planner, Resource Geologist",
      growth: "Growing with infrastructure development and renewable energy mineral needs"
    },
    { 
      area: "Environmental Geology",
      description: "Study environmental impacts and sustainable earth resource management",
      applications: "Environmental impact assessment, groundwater management, pollution control, land rehabilitation",
      jobRoles: "Environmental Geologist, Hydrogeologist, Environmental Consultant, Remediation Specialist",
      growth: "Rapidly expanding with environmental awareness and regulatory requirements"
    },
    { 
      area: "Hydrogeology & Water Resources",
      description: "Study groundwater systems and water resource management",
      applications: "Groundwater exploration, aquifer management, water well drilling, drought mitigation",
      jobRoles: "Hydrogeologist, Water Resources Manager, Groundwater Specialist, Hydrologist",
      growth: "Critical field with increasing water scarcity and climate change impacts"
    },
    { 
      area: "Engineering Geology",
      description: "Apply geological knowledge to civil engineering and construction projects",
      applications: "Site investigation, foundation analysis, slope stability, tunnel engineering",
      jobRoles: "Engineering Geologist, Geotechnical Engineer, Site Investigation Specialist, Construction Geologist",
      growth: "High demand with infrastructure development and urbanization"
    },
    { 
      area: "Geophysics & Geochemistry",
      description: "Use physical and chemical methods to study earth processes",
      applications: "Seismic surveys, gravity mapping, geochemical analysis, remote sensing",
      jobRoles: "Geophysicist, Geochemist, Survey Geologist, Remote Sensing Specialist",
      growth: "Growing with advanced technology and climate change research"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Oil & Gas Industry",
      companies: "ONGC, Oil India, Reliance, Cairn Energy, Shell, ExxonMobil, BP",
      roles: "Petroleum Geologist, Exploration Manager, Reservoir Engineer, Drilling Geologist",
      salary: "₹6-40 LPA",
      benefits: "High compensation, global opportunities, advanced technology, field allowances"
    },
    { 
      sector: "Mining Companies",
      companies: "Coal India, Vedanta, Hindalco, Tata Steel, Adani Mining, Rio Tinto, BHP",
      roles: "Mining Geologist, Exploration Geologist, Mine Planning Engineer, Resource Geologist",
      salary: "₹4-25 LPA",
      benefits: "Stable industry, diverse locations, technical challenges, career progression"
    },
    { 
      sector: "Environmental Consulting",
      companies: "ERM, AECOM, Ramboll, CEPT University, Environmental consultancies",
      roles: "Environmental Geologist, Impact Assessment Specialist, Remediation Consultant, Project Manager",
      salary: "₹3-20 LPA",
      benefits: "Social impact, diverse projects, growing field, regulatory expertise"
    },
    { 
      sector: "Government Organizations",
      companies: "Geological Survey of India, CGWB, State Mining Departments, MOEF&CC",
      roles: "Geologist, Hydrogeologist, Mining Officer, Environmental Officer, Survey Officer",
      salary: "₹4-18 LPA",
      benefits: "Job security, pension, research opportunities, public service, work-life balance"
    },
    { 
      sector: "Research Institutions",
      companies: "CSIR institutes, Universities, ISRO, DST, International research organizations",
      roles: "Research Scientist, Postdoctoral Fellow, Professor, Laboratory Manager",
      salary: "₹3-25 LPA",
      benefits: "Research freedom, academic environment, international collaboration, knowledge creation"
    },
    { 
      sector: "Infrastructure & Construction",
      companies: "L&T, Gammon India, HCC, AFCONS, Infrastructure consulting firms",
      roles: "Engineering Geologist, Site Investigation Expert, Geotechnical Consultant, Project Geologist",
      salary: "₹4-22 LPA",
      benefits: "Infrastructure development, technical challenges, project diversity, growth opportunities"
    }
  ];

  const careerProgression = [
    { level: "Junior Geologist/Field Assistant", experience: "0-3 years", salary: "₹2.5-6 LPA", focus: "Field mapping, sample collection, basic analysis, report preparation" },
    { level: "Geologist/Project Geologist", experience: "3-7 years", salary: "₹5-15 LPA", focus: "Independent project work, client interaction, technical analysis, team coordination" },
    { level: "Senior Geologist/Specialist", experience: "7-12 years", salary: "₹12-25 LPA", focus: "Expert analysis, project leadership, business development, mentoring juniors" },
    { level: "Principal Geologist/Manager", experience: "12-18 years", salary: "₹20-45 LPA", focus: "Department management, strategic planning, client relationships, technical oversight" },
    { level: "Chief Geologist/Director", experience: "18-25 years", salary: "₹35-80 LPA", focus: "Organizational leadership, business strategy, industry expertise, stakeholder management" },
    { level: "Consultant/Professor/VP", experience: "25+ years", salary: "₹50 LPA-2 Cr", focus: "Independent consulting, academic leadership, industry influence, expert advisory roles" }
  ];

  const topColleges = [
    { name: "Indian School of Mines (ISM Dhanbad)", courses: "B.Tech/M.Tech Mining, Petroleum Engineering, Applied Geology", ranking: "Premier Mining Institute", fees: "₹2-3 LPA", placements: "Excellent in mining & petroleum" },
    { name: "Banaras Hindu University (BHU)", courses: "B.Sc./M.Sc. Geology, Applied Geology", ranking: "Top Geology Department", fees: "₹15,000", placements: "Good government & private placements" },
    { name: "Jadavpur University", courses: "B.Sc./M.Sc. Geological Sciences", ranking: "Premier State University", fees: "₹8,000", placements: "Strong industry connections" },
    { name: "University of Delhi", courses: "B.Sc./M.Sc. Geology", ranking: "Central University", fees: "₹12,000", placements: "Good academic & research opportunities" },
    { name: "Presidency University, Kolkata", courses: "B.Sc./M.Sc. Geology", ranking: "Historic Institution", fees: "₹10,000", placements: "Academic excellence focus" },
    { name: "Osmania University", courses: "B.Sc./M.Sc. Geology, Applied Geology", ranking: "Strong Geology Department", fees: "₹6,000", placements: "Regional industry connections" }
  ];

  const technicalSkills = [
    { 
      category: "Field Work Skills",
      skills: ["Geological Mapping", "Rock and Mineral Identification", "Structural Measurements", "Sample Collection", "GPS & Navigation", "Field Photography"]
    },
    { 
      category: "Laboratory Techniques",
      skills: ["Microscopy (Optical & Electron)", "X-Ray Diffraction", "Geochemical Analysis", "Thin Section Preparation", "Core Logging", "Sample Preparation"]
    },
    { 
      category: "Software & Technology",
      skills: ["GIS (ArcGIS, QGIS)", "Geological Modeling Software", "AutoCAD", "Surfer", "Rockworks", "Statistical Analysis (R, SPSS)"]
    },
    { 
      category: "Specialized Equipment",
      skills: ["Seismic Equipment", "Ground Penetrating Radar", "Drilling Equipment", "Geophysical Instruments", "Remote Sensing", "Laboratory Instruments"]
    }
  ];

  const salaryRanges = [
    { sector: "Oil & Gas Industry", fresher: "₆-12 LPA", experienced: "₹15-35 LPA", senior: "₹30-60 LPA" },
    { sector: "Mining Companies", fresher: "₹4-9 LPA", experienced: "₹10-25 LPA", senior: "₹20-45 LPA" },
    { sector: "Environmental Consulting", fresher: "₹3-7 LPA", experienced: "₹8-20 LPA", senior: "₹18-40 LPA" },
    { sector: "Government Jobs", fresher: "₹4-8 LPA", experienced: "₹8-18 LPA", senior: "₹15-35 LPA" },
    { sector: "Research Institutions", fresher: "₹3-8 LPA", experienced: "₹8-25 LPA", senior: "₹20-50 LPA" },
    { sector: "Infrastructure/Construction", fresher: "₹4-10 LPA", experienced: "₹10-22 LPA", senior: "₹20-40 LPA" },
    { sector: "International Opportunities", fresher: "₹8-20 LPA", experienced: "₹20-50 LPA", senior: "₹40-1.5 Cr" },
    { sector: "Independent Consulting", fresher: "₹3-8 LPA", experienced: "₹12-35 LPA", senior: "₹25-80 LPA" }
  ];

  const emergingTrends = [
    { 
      trend: "Climate Change Geology",
      description: "Study of geological processes related to climate change and adaptation",
      opportunities: "Climate impact assessment, carbon sequestration, paleoclimate research, environmental monitoring",
      timeline: "Growing importance with climate urgency over next 5-10 years"
    },
    { 
      trend: "Critical Mineral Exploration",
      description: "Exploration for rare earth and strategic minerals for renewable energy",
      opportunities: "Lithium exploration, rare earth mining, battery material geology, strategic mineral assessment",
      timeline: "High demand with renewable energy transition"
    },
    { 
      trend: "Digital Geology & AI",
      description: "Integration of artificial intelligence and digital tools in geological analysis",
      opportunities: "AI-powered mineral exploration, automated core logging, digital field mapping, predictive modeling",
      timeline: "Rapidly advancing with 3-5 year adoption timeline"
    },
    { 
      trend: "Planetary Geology",
      description: "Study of geological processes on other planets and space missions",
      opportunities: "Space mission support, asteroid mining, planetary research, astrogeology consulting",
      timeline: "Emerging field with 10-15 year growth potential"
    },
    { 
      trend: "Geothermal Energy",
      description: "Exploration and development of geothermal energy resources",
      opportunities: "Geothermal exploration, reservoir engineering, renewable energy geology, heat pump systems",
      timeline: "Growing with renewable energy focus over 5-8 years"
    },
    { 
      trend: "Urban Geology",
      description: "Geological studies for smart city development and urban planning",
      opportunities: "Underground space utilization, urban groundwater, smart city geology, disaster risk reduction",
      timeline: "Expanding with urbanization over next 3-7 years"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "Professional Geologist (PG) License",
      provider: "State Geological Boards/Professional Bodies",
      duration: "4+ years experience + examination",
      cost: "₹10,000-50,000",
      description: "Professional licensing for practicing geology and signing geological reports"
    },
    { 
      cert: "Certified Petroleum Geologist",
      provider: "AAPG (American Association of Petroleum Geologists)",
      duration: "5+ years experience + examination",
      cost: "$500-1,000",
      description: "International certification for petroleum geology professionals"
    },
    { 
      cert: "Environmental Impact Assessment Certification",
      provider: "Quality Council of India/NABET",
      duration: "1-2 years experience + training",
      cost: "₹25,000-1 LPA",
      description: "Certification for conducting environmental impact assessments"
    },
    { 
      cert: "GIS Professional Certification",
      provider: "ESRI, IGNOU, various institutes",
      duration: "6 months - 1 year",
      cost: "₹15,000-75,000",
      description: "Specialized certification in Geographic Information Systems"
    },
    { 
      cert: "Project Management Professional (PMP)",
      provider: "Project Management Institute",
      duration: "3 months - 1 year preparation",
      cost: "$555",
      description: "Project management certification valuable for senior geological positions"
    }
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Geological Consulting Services",
      investment: "₹5-30 lakhs",
      description: "Independent consulting for mining, construction, and environmental projects",
      potential: "Growing infrastructure and mining sector with increasing regulatory requirements"
    },
    { 
      business: "Environmental Impact Assessment Firm",
      investment: "₹10-50 lakhs",
      description: "Provide EIA services for industrial and infrastructure projects",
      potential: "Mandatory requirement for projects with strong government push for environmental compliance"
    },
    { 
      business: "Geotechnical Investigation Company",
      investment: "₹15 lakhs-1 crore",
      description: "Site investigation services for construction and infrastructure projects",
      potential: "Booming construction industry and infrastructure development across India"
    },
    { 
      business: "Water Well Drilling & Hydrogeology",
      investment: "₹20 lakhs-2 crores",
      description: "Groundwater exploration and water well drilling services",
      potential: "Critical need for water resources with growing water scarcity issues"
    },
    { 
      business: "Geological Software & Technology",
      investment: "₹8-75 lakhs",
      description: "Develop specialized software and technology solutions for geological applications",
      potential: "Growing digitalization in geological sciences and remote work trends"
    },
    { 
      business: "Mineral Exploration Services",
      investment: "₹25 lakhs-3 crores",
      description: "Provide exploration services for mining companies and government organizations",
      potential: "India's push for self-reliance in critical minerals and resource exploration"
    }
  ];

  const preparationTips = [
    "Develop strong foundation in earth sciences, chemistry, physics, and mathematics",
    "Gain extensive fieldwork experience through geological camps and field training",
    "Learn to identify rocks, minerals, and fossils through hands-on practice",
    "Build proficiency in geological software like GIS, AutoCAD, and modeling programs",
    "Develop physical fitness for extensive fieldwork in diverse terrains and climates",
    "Cultivate observation skills and attention to detail for accurate geological mapping",
    "Learn technical writing skills for preparing geological reports and research papers",
    "Build networking with professionals through geological societies and conferences",
    "Stay updated with latest exploration technologies and analytical techniques",
    "Consider specialization based on regional geological opportunities and personal interests"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-brown-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-yellow-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaMountain className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Geologist
              <span className="text-green-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Explore Earth's Secrets - Complete guide to building a successful career in Geology & Earth Sciences
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Geology Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Geology Career</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Geology is the science that deals with the Earth's physical structure, substance, history, and processes. Geologists study rocks, minerals, fossils, and natural processes to understand Earth's past and predict future changes, playing crucial roles in resource exploration, environmental protection, and hazard assessment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With growing concerns about climate change, resource sustainability, and environmental protection, geologists are essential for energy exploration, mineral resource development, groundwater management, and environmental consulting across diverse industries and research institutions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Geology?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Outdoor fieldwork and adventure
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Environmental impact and sustainability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Diverse career opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Scientific discovery and research
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Global job market access
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Resource exploration opportunities
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
              <h2 className="text-3xl font-bold text-gray-800">Education & Learning Path</h2>
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
              <h2 className="text-3xl font-bold text-gray-800">Top Geology Institutions</h2>
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
              <FaGem className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Geological Specializations</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {geologicalSpecializations.map((area, index) => (
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
                      <span className="font-medium">Benefits:</span> {industry.benefits}
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
              <FaChartBar className="text-3xl text-blue-600 mr-4" />
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
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fresher (0-3 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Experienced (5-12 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Senior (12+ years)</th>
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
                  <FaMountain className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Earth's Mysteries?</h2>
            <p className="text-xl mb-8 text-green-100">Start your journey in Geology and uncover the secrets of our planet!</p>
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
