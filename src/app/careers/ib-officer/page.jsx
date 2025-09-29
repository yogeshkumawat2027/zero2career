import Link from 'next/link';
import React from 'react';
import { 
  FaUserSecret, 
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
  FaHandshake,
  FaUserShield,
  FaBuilding,
  FaFlag,
  FaStar,
  FaMedal,
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
  FaUserFriends,
  FaClipboardList,
  FaChalkboardTeacher,
  FaHandPaper,
  FaUserCheck,
  FaUserPlus,
  FaUserMinus,
  FaUserCog,
  FaUserGraduate,
  FaUsersCog,
  FaIdBadge,
  FaIdCard,
  FaAddressCard,
  FaBusinessTime,
  FaProjectDiagram,
  FaSitemap,
  FaNetworkWired,
  FaLayerGroup,
  FaObjectGroup,
  FaStream,
  FaRandom,
  FaExchangeAlt,
  FaSync,
  FaSyncAlt,
  FaRedo,
  FaUndo,
  FaHistory,
  FaStopwatch,
  FaHourglass,
  FaCertificate,
  FaStamp,
  FaClipboard,
  FaHeadset,
  FaMagic,
  FaSmile,
  FaGift,
  FaShuttleVan,
  FaBus,
  FaTaxi,
  FaMapSigns,
  FaCompass,
  FaMap,
  FaCloud,
  FaBolt,
  FaThunderstorm,
  FaSun,
  FaMoon,
  FaWind,
  FaSnowflake,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaAnchor,
  FaShip,
  FaRocket,
  FaGlobeAmericas,
  FaGlobeAsia,
  FaGlobeEurope,
  FaPaperPlane,
  FaFighterJet,
  FaParachute,
  FaHelmet,
  FaShieldVirus,
  FaCogs,
  FaWrench,
  FaScrewdriver,
  FaHammer,
  FaToolbox,
  FaHardHat,
  FaBinoculars,
  FaFingerprint,
  FaKey,
  FaLock,
  FaUnlock,
  FaShield,
  FaSpy,
  FaHandcuffs,
  FaExclamationTriangle,
  FaMapMarked,
  FaMapPin
} from 'react-icons/fa';

export default function IBOfficerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's degree from recognized university (any stream)" },
    { icon: FaGraduationCap, title: "Age Limit", detail: "18-27 years (relaxation for reserved categories)" },
    { icon: FaShieldAlt, title: "Citizenship", detail: "Indian citizen with clean background verification" },
    { icon: FaEye, title: "Security Clearance", detail: "Thorough background check and character verification" }
  ];

  const selectionProcess = [
    { 
      stage: "Online Application",
      duration: "1 month",
      process: "Application through IB recruitment portal or UPSC notification",
      requirements: "Educational certificates, photo, signature, category certificates if applicable",
      eligibility: "Graduation completed, age criteria, basic computer literacy",
      outcomes: "Admit card for written examination"
    },
    { 
      stage: "Written Examination",
      duration: "3 hours",
      process: "Objective type questions on general awareness, reasoning, quantitative aptitude, English",
      requirements: "Current affairs, logical reasoning, basic mathematics, English comprehension",
      eligibility: "Valid admit card, identity proof, examination guidelines compliance",
      outcomes: "Merit list for interview and further selection process"
    },
    { 
      stage: "Interview & Psychology Test",
      duration: "2-3 days",
      process: "Personal interview, psychological assessment, group discussions, situation handling",
      requirements: "Knowledge of current affairs, personality assessment, stress handling capability",
      eligibility: "Qualified written examination, character certificate, educational documents",
      outcomes: "Final merit list for medical examination and background verification"
    },
    { 
      stage: "Medical Examination",
      duration: "1-2 days",
      process: "Comprehensive medical check-up including physical and mental health assessment",
      requirements: "Good physical and mental health, no chronic diseases, vision and hearing tests",
      eligibility: "Qualified interview, medical fitness standards, age-appropriate health parameters",
      outcomes: "Medical fitness certificate for field training and final appointment"
    },
    { 
      stage: "Background Verification",
      duration: "3-6 months",
      process: "Detailed verification of personal, family, educational, and social background",
      requirements: "Clean criminal record, reliable character references, verified educational credentials",
      eligibility: "Medical fitness, complete documentation, cooperative family and social circle",
      outcomes: "Security clearance and final appointment letter with training schedule"
    }
  ];

  const jobSpecializations = [
    { 
      area: "Field Intelligence Operations",
      description: "Ground-level intelligence gathering, surveillance, and information collection",
      responsibilities: "Human intelligence gathering, source development, field surveillance, operational security",
      skills: "Observation skills, interpersonal communication, regional language proficiency, adaptability",
      postings: "State capitals, border areas, sensitive regions, metropolitan cities"
    },
    { 
      area: "Counter Intelligence",
      description: "Preventing foreign intelligence agencies from gathering information about India",
      responsibilities: "Counter-espionage, security breach prevention, foreign agent identification, protective intelligence",
      skills: "Analytical thinking, security protocols, investigation techniques, threat assessment",
      postings: "Delhi, Mumbai, strategic locations, international borders, sensitive installations"
    },
    { 
      area: "Cyber Intelligence",
      description: "Digital intelligence gathering and cyber security operations",
      responsibilities: "Online intelligence, social media monitoring, digital forensics, cyber threat analysis",
      skills: "Computer proficiency, digital investigation, data analysis, cyber security knowledge",
      postings: "Metropolitan cities, state headquarters, technical centers, specialized units"
    },
    { 
      area: "Internal Security",
      description: "Monitoring and preventing threats to national internal security",
      responsibilities: "Threat assessment, security planning, coordination with law enforcement, risk mitigation",
      skills: "Security analysis, coordination abilities, law enforcement knowledge, strategic thinking",
      postings: "State capitals, sensitive areas, VIP security zones, government installations"
    },
    { 
      area: "Border Intelligence",
      description: "Intelligence operations along international borders and sensitive areas",
      responsibilities: "Border surveillance, cross-border intelligence, smuggling prevention, infiltration monitoring",
      skills: "Border area knowledge, physical fitness, local language skills, surveillance techniques",
      postings: "International borders, Line of Control, coastal areas, remote border outposts"
    },
    { 
      area: "VIP Security Intelligence",
      description: "Intelligence support for protection of high-value individuals and installations",
      responsibilities: "Threat intelligence, security planning, advance security arrangements, risk assessment",
      skills: "Security protocols, threat analysis, coordination skills, discretion and confidentiality",
      postings: "Delhi, state capitals, VIP movement routes, high-security installations"
    }
  ];

  const careerProgression = [
    { level: "Assistant Central Intelligence Officer (ACIO)", experience: "0-5 years", salary: "₹4.20-8.73 LPA", role: "Field operations, intelligence gathering, basic investigations, regional assignments" },
    { level: "Central Intelligence Officer (CIO)", experience: "5-12 years", salary: "₹5.85-12.54 LPA", role: "Supervisory roles, team leadership, complex operations, state-level assignments" },
    { level: "Senior Central Intelligence Officer", experience: "12-18 years", salary: "₹8.26-18.73 LPA", role: "Regional supervision, policy implementation, strategic planning, multi-state operations" },
    { level: "Deputy Director Intelligence Bureau", experience: "18-25 years", salary: "₹12.60-25.46 LPA", role: "Departmental leadership, national operations, policy formulation, international liaison" },
    { level: "Joint Director Intelligence Bureau", experience: "25-30 years", salary: "₹18.40-35.67 LPA", role: "Senior leadership, strategic operations, government advisory, inter-agency coordination" },
    { level: "Additional Director/Director IB", experience: "30+ years", salary: "₹25.50-50+ LPA", role: "Top leadership, national security advisory, cabinet briefings, organizational strategy" }
  ];

  const trainingPrograms = [
    { name: "Basic Intelligence Course", duration: "6 months", location: "IB Training School", focus: "Intelligence fundamentals, investigation techniques, security procedures" },
    { name: "Advanced Intelligence Operations", duration: "3 months", location: "Specialized training centers", focus: "Advanced surveillance, counter-intelligence, operational security" },
    { name: "Cyber Intelligence Training", duration: "2 months", location: "Technical training institutes", focus: "Digital forensics, cyber security, online intelligence gathering" },
    { name: "Language & Regional Studies", duration: "1-3 months", location: "Regional centers", focus: "Local languages, cultural understanding, regional dynamics" },
    { name: "Leadership Development Program", duration: "1 month", location: "Administrative training institutes", focus: "Management skills, leadership qualities, administrative procedures" },
    { name: "International Intelligence Cooperation", duration: "2 weeks - 2 months", location: "Various countries", focus: "International best practices, foreign intelligence liaison, global security trends" }
  ];

  const technicalSkills = [
    { 
      category: "Intelligence & Investigation",
      skills: ["Intelligence Analysis", "Surveillance Techniques", "Source Development", "Information Gathering", "Threat Assessment", "Investigation Methods"]
    },
    { 
      category: "Technology & Cyber",
      skills: ["Digital Forensics", "Cyber Security", "Data Analysis", "Technical Surveillance", "Communication Interception", "Online Intelligence"]
    },
    { 
      category: "Security & Operations",
      skills: ["Security Protocols", "Operational Security", "Risk Assessment", "Crisis Management", "Counter-Intelligence", "Protective Intelligence"]
    },
    { 
      category: "Communication & Language",
      skills: ["Report Writing", "Regional Languages", "Interpersonal Communication", "Interview Techniques", "Negotiation Skills", "Cultural Sensitivity"]
    }
  ];

  const postingLocations = [
    { region: "Delhi NCR", focus: "National capital operations, central government liaison, policy coordination", benefits: "Career growth opportunities, central postings, policy exposure" },
    { region: "Mumbai & Financial Centers", focus: "Economic intelligence, financial crime prevention, commercial security", benefits: "Urban facilities, financial sector exposure, networking opportunities" },
    { region: "Border States", focus: "Cross-border intelligence, infiltration prevention, security operations", benefits: "Field experience, border allowances, strategic importance" },
    { region: "State Capitals", focus: "State-level operations, political intelligence, regional coordination", benefits: "Administrative exposure, state government interaction, leadership roles" },
    { region: "Northeast & Special Areas", focus: "Insurgency monitoring, ethnic intelligence, strategic operations", benefits: "Special allowances, unique experience, challenging assignments" },
    { region: "International Postings", focus: "Intelligence liaison, diplomatic security, foreign operations", benefits: "International exposure, foreign allowances, diplomatic status" }
  ];

  const salaryBenefits = [
    { component: "Basic Pay", amount: "₹35,400-1,12,400 (7th Pay Commission)", description: "Monthly basic salary with annual increments and promotion-based revisions" },
    { component: "Grade Pay", amount: "₹4,200-8,900", description: "Position-based grade pay depending on rank and posting level" },
    { component: "Dearness Allowance", amount: "Current rate applied", description: "Inflation adjustment allowance revised twice yearly by government" },
    { component: "House Rent Allowance", amount: "8-24% of basic pay", description: "City classification-based housing allowance or government accommodation" },
    { component: "Special Allowances", amount: "₹5,000-50,000", description: "Field allowance, risk allowance, border allowance, special duty allowance" },
    { component: "Medical Benefits", amount: "Full coverage", description: "Comprehensive medical coverage for self and family through CGHS/empaneled hospitals" }
  ];

  const emergingTrends = [
    { 
      trend: "Cyber Intelligence & Digital Operations",
      description: "Growing focus on cyber threats, digital surveillance, and online intelligence gathering",
      opportunities: "Cyber analyst, digital forensics expert, online intelligence specialist, tech surveillance officer",
      timeline: "Immediate priority with rapid expansion over next 3-5 years"
    },
    { 
      trend: "Artificial Intelligence & Data Analytics",
      description: "Integration of AI and big data analytics in intelligence operations and threat detection",
      opportunities: "Intelligence analyst, AI specialist, data scientist, predictive analysis expert",
      timeline: "Emerging field with 2-7 year adoption and implementation timeline"
    },
    { 
      trend: "Counter-Terrorism & Hybrid Warfare",
      description: "Evolving security threats requiring specialized counter-terrorism and hybrid threat capabilities",
      opportunities: "Counter-terrorism specialist, hybrid threat analyst, security coordinator, crisis response expert",
      timeline: "Continuous evolution with immediate relevance and long-term importance"
    },
    { 
      trend: "Economic & Financial Intelligence",
      description: "Focus on economic security, financial crime prevention, and commercial intelligence",
      opportunities: "Economic analyst, financial intelligence officer, commercial security expert, trade intelligence specialist",
      timeline: "Growing importance with economic security focus over 3-10 years"
    },
    { 
      trend: "International Cooperation & Liaison",
      description: "Enhanced international intelligence sharing and cooperative security operations",
      opportunities: "International liaison officer, diplomatic security expert, foreign intelligence coordinator",
      timeline: "Expanding opportunities with global security cooperation trends"
    },
    { 
      trend: "Social Media & Open Source Intelligence",
      description: "Intelligence gathering from social media, open sources, and public information",
      opportunities: "OSINT analyst, social media intelligence specialist, public information analyst",
      timeline: "Current priority with continuous growth and specialization needs"
    }
  ];

  const preparationTips = [
    "Build strong foundation in current affairs, national and international developments, and security issues",
    "Develop analytical and logical reasoning skills through regular practice and puzzle-solving",
    "Enhance English language proficiency including comprehension, vocabulary, and written communication",
    "Stay updated with government policies, constitutional provisions, and administrative structures",
    "Build general knowledge across history, geography, science, economics, and contemporary issues",
    "Develop physical fitness and mental resilience for challenging field assignments",
    "Learn regional languages and understand cultural dynamics of different parts of India",
    "Practice interview skills, personality development, and confidence building exercises",
    "Understand intelligence and security concepts through relevant books and study materials",
    "Maintain clean background record and develop strong character references for verification"
  ];

  const careerBenefits = [
    "Serve the nation in critical intelligence and security operations with national importance",
    "Excellent job security with government service benefits and pension after retirement",
    "Opportunity to work in diverse locations across India and potential international postings",
    "Comprehensive medical benefits and healthcare coverage for self and family members",
    "Professional development through specialized training programs and skill enhancement courses",
    "Challenging and dynamic work environment with varied assignments and responsibilities",
    "Good salary progression with regular increments, promotions, and special allowances",
    "Prestige and respect associated with intelligence services and national security work",
    "Opportunity to contribute to national security and protection of democratic institutions",
    "Career progression to senior leadership positions in intelligence and security apparatus"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaUserSecret className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IB Officer
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Protect the Nation - Complete guide to building a successful career as an Intelligence Bureau Officer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About IB Officer Career Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Intelligence Bureau Officer Career</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Intelligence Bureau (IB) Officers serve as the primary domestic intelligence agency of India, responsible for internal security, counter-intelligence, and intelligence gathering. IB officers work to protect national security interests, prevent threats to internal stability, and support law enforcement agencies in maintaining peace and security across the country.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With evolving security challenges, cyber threats, and complex geopolitical scenarios, IB officers play crucial roles in intelligence analysis, field operations, surveillance, counter-terrorism, and strategic security planning while maintaining the highest levels of confidentiality and operational security.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose IB Officer Career?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Serve national security interests
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Challenging and dynamic work environment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Excellent job security and benefits
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Diverse posting locations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Professional development opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Prestige and social respect
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
              <FaClipboardCheck className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Eligibility & Requirements</h2>
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
          </div>
        </section>

        {/* Selection Process */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Selection Process</h2>
            </div>
            <div className="space-y-6">
              {selectionProcess.map((stage, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{stage.stage}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{stage.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Process:</span> {stage.process}</p>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Requirements:</span> {stage.requirements}</p>
                  <p className="text-gray-600 text-sm mb-2"><span className="font-medium">Eligibility:</span> {stage.eligibility}</p>
                  <p className="text-green-600 text-sm"><span className="font-medium">Outcomes:</span> {stage.outcomes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Programs</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Program</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Duration</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Location</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingPrograms.map((program, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{program.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-medium">{program.duration}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{program.location}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{program.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Job Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUserSecret className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Specializations</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {jobSpecializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{spec.area}</h3>
                  <p className="text-gray-700 text-sm mb-3">{spec.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">Responsibilities:</span> {spec.responsibilities}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Skills:</span> {spec.skills}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Postings:</span> {spec.postings}
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
              <FaChartBar className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary</h2>
            </div>
            <div className="space-y-4">
              {careerProgression.map((level, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <FaMedal className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{level.level}</h3>
                      <p className="text-gray-600">{level.experience}</p>
                      <p className="text-sm text-green-600">{level.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-green-600">{level.salary}</p>
                    <p className="text-xs text-gray-500">+ Allowances & Benefits</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Posting Locations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMapMarkerAlt className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Posting Locations & Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {postingLocations.map((location, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{location.region}</h3>
                  <p className="text-gray-700 text-sm mb-3">{location.focus}</p>
                  <div className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-sm">
                    <span className="font-medium">Benefits:</span> {location.benefits}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Salary & Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Salary & Benefits Structure</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {salaryBenefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.component}</h3>
                  <p className="text-green-600 font-medium mb-2">{benefit.amount}</p>
                  <p className="text-gray-700 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skillCategory, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
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
              <h2 className="text-3xl font-bold text-gray-800">Emerging Trends & Future Opportunities</h2>
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

        {/* Career Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAward className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {careerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                  <FaUserSecret className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
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
                  <FaShieldAlt className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-600 to-blue-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Serve National Security?</h2>
            <p className="text-xl mb-8 text-blue-100">Join the Intelligence Bureau and contribute to India's internal security and intelligence operations!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="https://mha.gov.in/IB" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Learn More About IB
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}