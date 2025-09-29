
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
  FaHardHat
} from 'react-icons/fa';

export default function IAFPilotPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "10+2 with Physics & Mathematics (PCM) for NDA" },
    { icon: FaGraduationCap, title: "Age Limit", detail: "16.5-19.5 years for NDA, 20-24 years for AFCAT" },
    { icon: FaEye, title: "Vision", detail: "6/6 vision (correctable), no color blindness" },
    { icon: FaDumbbell, title: "Physical Fitness", detail: "Excellent physical and mental fitness standards" }
  ];

  const selectionPath = [
    { 
      level: "National Defence Academy (NDA)",
      duration: "3 years",
      program: "Joint Services training at NDA Khadakwasla + 1 year Air Force Academy",
      focus: "Military leadership, academic excellence, character building, basic flying training",
      eligibility: "10+2 with PCM, Age 16.5-19.5 years, unmarried male candidates",
      outcomes: "Commission as Flying Officer in Indian Air Force"
    },
    { 
      level: "Air Force Common Admission Test (AFCAT)",
      duration: "1.5 years",
      program: "Direct entry for graduates through Air Force Academy, Hyderabad",
      focus: "Flying training, technical subjects, military customs, leadership development",
      eligibility: "Graduation with 60% (50% for reserved), Age 20-24 years, unmarried",
      outcomes: "Flying Officer commission in various IAF branches"
    },
    { 
      level: "Combined Defence Services (CDS)",
      duration: "1.5 years",
      program: "Through CDS exam for Air Force Academy training",
      focus: "Officer training, flying instruction, service knowledge, leadership skills",
      eligibility: "Graduation degree, Age 19-25 years, meet physical standards",
      outcomes: "Permanent commission as Flying Officer"
    },
    { 
      level: "Short Service Commission (SSC)",
      duration: "1 year",
      program: "10-14 year service commitment with extension possibility",
      focus: "Specialized training for technical and flying roles",
      eligibility: "Specific qualifications based on branch, Age varies by entry",
      outcomes: "Flying Officer with service commitment and civilian transition options"
    }
  ];

  const aircraftSpecializations = [
    { 
      category: "Fighter Aircraft",
      aircraft: "Sukhoi Su-30MKI, HAL Tejas, Mirage 2000, MiG-29UPG, Rafale",
      description: "Air superiority, ground attack, and multi-role combat operations",
      training: "Advanced fighter pilot training, weapons systems, air combat tactics",
      career: "Squadron Leader to Air Marshal, specialized combat roles, test pilot opportunities"
    },
    { 
      category: "Transport Aircraft",
      aircraft: "C-130J Super Hercules, C-17 Globemaster III, An-32, IL-76, Dornier",
      description: "Strategic airlift, tactical transport, humanitarian missions, cargo operations",
      training: "Multi-engine aircraft handling, cargo operations, formation flying, navigation",
      career: "Transport pilot progression, flight safety roles, training command positions"
    },
    { 
      category: "Helicopter Operations",
      aircraft: "Mi-17, Mi-35, ALH Dhruv, Chinook, Apache Attack Helicopter",
      description: "Tactical support, search and rescue, medical evacuation, combat support",
      training: "Rotary wing flying, mountain operations, night vision, rescue operations",
      career: "Helicopter pilot specialization, rescue operations command, training roles"
    },
    { 
      category: "Reconnaissance & Surveillance",
      aircraft: "Boeing P-8I Neptune, AWACS, UAVs, Electronic Warfare aircraft",
      description: "Intelligence gathering, maritime patrol, electronic warfare, surveillance",
      training: "Advanced avionics, intelligence operations, electronic systems, data analysis",
      career: "Intelligence specialization, electronic warfare expert, strategic operations"
    },
    { 
      category: "Training Aircraft",
      aircraft: "HAL HJT-36 Sitara, Pilatus PC-7, Kiran, BAe Hawk",
      description: "Pilot instruction, flight training, aerobatic demonstrations, skill development",
      training: "Instructor pilot course, training methodology, safety procedures, evaluation",
      career: "Training command roles, test pilot school, aerobatic teams, flight safety"
    },
    { 
      category: "Special Operations",
      aircraft: "Garud Special Forces support, VIP transport, Air Force One India",
      description: "Special operations support, VIP protection, counter-terrorism, covert missions",
      training: "Special operations tactics, security protocols, advanced combat training",
      career: "Special operations command, security roles, elite unit leadership"
    }
  ];

  const rankProgression = [
    { rank: "Flying Officer", experience: "0-2 years", salary: "₹56,100-1.77 LPA", role: "Junior pilot, under training, basic flying duties" },
    { rank: "Flight Lieutenant", experience: "2-6 years", salary: "₹61,300-1.93 LPA", role: "Qualified pilot, operational duties, section commander" },
    { rank: "Squadron Leader", experience: "6-13 years", salary: "₹69,400-2.07 LPA", role: "Flight commander, advanced operations, specialized roles" },
    { rank: "Wing Commander", experience: "13-20 years", salary: "₹1.21-2.18 LPA", role: "Squadron commander, base operations, staff appointments" },
    { rank: "Group Captain", experience: "20-26 years", salary: "₹1.30-2.25 LPA", role: "Station commander, policy formulation, senior leadership" },
    { rank: "Air Commodore", experience: "26+ years", salary: "₹1.44-2.36 LPA", role: "Senior command, strategic planning, air force leadership" },
    { rank: "Air Vice Marshal", experience: "30+ years", salary: "₹1.82-2.50 LPA", role: "Air command, joint operations, defense strategy" },
    { rank: "Air Marshal", experience: "32+ years", salary: "₹2.05-2.50 LPA", role: "Air force headquarters, national defense, international relations" }
  ];

  const trainingInstitutions = [
    { name: "National Defence Academy (NDA), Khadakwasla", program: "Joint Services Academy", duration: "3 years", focus: "Military leadership and basic training" },
    { name: "Air Force Academy (AFA), Hyderabad", program: "Flying Training", duration: "1.5 years", focus: "Professional pilot training" },
    { name: "Defence Services Staff College, Wellington", program: "Staff Course", duration: "1 year", focus: "Middle-level command and staff training" },
    { name: "National Defence College, New Delhi", program: "Higher Command Course", duration: "1 year", focus: "Senior leadership and national security" },
    { name: "Indian Institute of Science, Bangalore", program: "M.Tech Aerospace", duration: "2 years", focus: "Technical specialization for officers" },
    { name: "College of Air Warfare, Secunderabad", program: "Air Warfare Course", duration: "6 months", focus: "Tactical and operational air power" }
  ];

  const technicalSkills = [
    { 
      category: "Flying Skills",
      skills: ["Aircraft Systems Knowledge", "Navigation & GPS", "Weather Analysis", "Flight Planning", "Emergency Procedures", "Formation Flying"]
    },
    { 
      category: "Combat & Tactical",
      skills: ["Air Combat Maneuvering", "Weapons Systems", "Electronic Warfare", "Air-to-Air Combat", "Ground Attack", "Reconnaissance"]
    },
    { 
      category: "Technical Knowledge",
      skills: ["Avionics Systems", "Radar Technology", "Communication Systems", "Aircraft Maintenance", "Flight Safety", "Aerospace Engineering"]
    },
    { 
      category: "Leadership & Management",
      skills: ["Team Leadership", "Crisis Management", "Strategic Planning", "Resource Management", "Training & Mentoring", "Decision Making"]
    }
  ];

  const careerBenefits = [
    { 
      category: "Financial Benefits",
      benefits: ["Competitive salary with regular increments", "Military Service Pay (MSP)", "Flying allowance and technical allowance", "Provident fund and gratuity", "Canteen facilities and subsidized lifestyle", "Post-retirement pension benefits"]
    },
    { 
      category: "Professional Development",
      benefits: ["World-class flying training", "Leadership development programs", "Technical specialization courses", "International training exchanges", "Advanced degree sponsorship", "Career progression to senior ranks"]
    },
    { 
      category: "Lifestyle & Perks",
      benefits: ["Officers' mess and club facilities", "Family accommodation in cantonment", "Medical facilities for family", "Children's education support", "Sports and recreation facilities", "Travel and adventure opportunities"]
    },
    { 
      category: "Post-Service Opportunities",
      benefits: ["Commercial aviation careers", "Corporate leadership roles", "Defense consulting opportunities", "Government position preferences", "International aviation jobs", "Entrepreneurship in aviation sector"]
    }
  ];

  const medicalStandards = [
    { standard: "Vision", requirement: "6/6 vision in both eyes (correctable to 6/6)", note: "No color blindness, night blindness, or squint" },
    { standard: "Height", requirement: "157.5 cm - 182.5 cm", note: "Proportionate weight according to height and age" },
    { standard: "Physical Fitness", requirement: "Excellent cardiovascular fitness", note: "Must pass rigorous physical fitness tests" },
    { standard: "Hearing", requirement: "Normal hearing in both ears", note: "No hearing aid dependency" },
    { standard: "Psychological", requirement: "Mental stability and emotional balance", note: "Psychological assessment and aptitude tests" },
    { standard: "General Health", requirement: "No chronic diseases or disabilities", note: "Comprehensive medical examination required" }
  ];

  const postServiceOpportunities = [
    { 
      sector: "Commercial Aviation",
      opportunities: "Airline pilot, Flight instructor, Charter operations, Cargo airlines",
      advantages: "Military flying experience highly valued, leadership skills, technical knowledge",
      companies: "Air India, IndiGo, Vistara, SpiceJet, International airlines, Charter companies"
    },
    { 
      sector: "Corporate Leadership",
      opportunities: "Executive positions, Operations management, Crisis management roles, Consulting",
      advantages: "Leadership experience, decision-making skills, crisis management, team building",
      companies: "Defense contractors, Manufacturing, Aviation industry, Consulting firms"
    },
    { 
      sector: "Government Positions",
      opportunities: "Civil aviation roles, Defense civilian posts, Public sector enterprises, Policy roles",
      advantages: "Understanding of government systems, security clearance, administrative experience",
      companies: "DGCA, Airport Authority, Defense PSUs, Ministry positions"
    },
    { 
      sector: "Aviation Industry",
      opportunities: "Aircraft manufacturing, Maintenance organizations, Aviation consulting, Training institutes",
      advantages: "Technical expertise, operational experience, safety knowledge, training capabilities",
      companies: "HAL, Boeing, Airbus, MRO organizations, Flying schools"
    }
  ];

  const preparationTips = [
    "Maintain excellent physical fitness from early age with focus on cardiovascular endurance",
    "Excel in Physics and Mathematics during 10+2 as they form the foundation for flying",
    "Develop leadership qualities through NCC, sports, and extracurricular activities",
    "Build strong general knowledge and stay updated with current affairs and defense matters",
    "Practice mental math and logical reasoning for written examinations and interviews",
    "Cultivate discipline, punctuality, and attention to detail as essential military qualities",
    "Learn basic computer skills and stay updated with aviation technology trends",
    "Develop excellent communication skills in English for effective military communication",
    "Build emotional stability and stress management techniques for high-pressure situations",
    "Study Indian Air Force history, achievements, and current operations for interviews"
  ];

  const emergingOpportunities = [
    { 
      trend: "Unmanned Aerial Systems (UAS)",
      description: "Growing integration of drones and unmanned systems in military operations",
      opportunities: "UAV pilot training, drone operations specialist, autonomous systems development, cyber warfare",
      timeline: "Immediate and expanding over next 5-10 years"
    },
    { 
      trend: "Space Operations",
      description: "Indian Air Force's expanding role in space surveillance and satellite operations",
      opportunities: "Space operations officer, satellite communication, space surveillance, astronaut program",
      timeline: "Developing field with 5-15 year growth potential"
    },
    { 
      trend: "Cyber Warfare",
      description: "Integration of cyber capabilities with air power and electronic warfare",
      opportunities: "Cyber operations specialist, electronic warfare officer, information warfare, cyber security",
      timeline: "Critical current need with rapid expansion"
    },
    { 
      trend: "Artificial Intelligence Integration",
      description: "AI and machine learning applications in aviation and defense systems",
      opportunities: "AI systems operator, predictive maintenance specialist, intelligent systems development",
      timeline: "Emerging field with 3-8 year adoption timeline"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaFighterJet className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IAF Pilot
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Touch the Sky with Glory - Complete guide to building a successful career as an Indian Air Force Pilot
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About IAF Pilot Career Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About IAF Pilot Career</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Indian Air Force (IAF) pilot career represents one of the most prestigious and challenging professions in India. IAF pilots are responsible for defending the nation's airspace, conducting combat operations, humanitarian missions, and maintaining air superiority. The role demands exceptional skill, courage, and dedication to serve the nation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With modern aircraft technology, strategic airlift capabilities, and evolving warfare concepts, IAF pilots operate cutting-edge fighter jets, transport aircraft, helicopters, and emerging unmanned systems while contributing to national security and international peacekeeping operations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose IAF Pilot Career?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Serve the nation with honor and pride
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Fly world-class military aircraft
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Leadership and character development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Excellent career progression
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Adventure and global exposure
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Post-service career opportunities
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

        {/* Selection & Training Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Selection & Training Path</h2>
            </div>
            <div className="space-y-6">
              {selectionPath.map((path, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{path.level}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{path.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Program:</span> {path.program}</p>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Focus:</span> {path.focus}</p>
                  <p className="text-gray-600 text-sm mb-2"><span className="font-medium">Eligibility:</span> {path.eligibility}</p>
                  <p className="text-green-600 text-sm"><span className="font-medium">Outcomes:</span> {path.outcomes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Institutions */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Institutions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Institution</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Program</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Duration</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingInstitutions.map((institution, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{institution.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{institution.program}</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-medium">{institution.duration}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{institution.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Aircraft Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFighterJet className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Aircraft Specializations</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {aircraftSpecializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{spec.category}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Aircraft:</span> {spec.aircraft}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Role:</span> {spec.description}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Training:</span> {spec.training}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Career:</span> {spec.career}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rank Progression */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartBar className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Rank Progression & Salary</h2>
            </div>
            <div className="space-y-4">
              {rankProgression.map((rank, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <FaMedal className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{rank.rank}</h3>
                      <p className="text-gray-600">{rank.experience}</p>
                      <p className="text-sm text-green-600">{rank.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-green-600">{rank.salary}</p>
                    <p className="text-xs text-gray-500">+ Allowances & Benefits</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Standards */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFirstAid className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Medical Standards</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {medicalStandards.map((standard, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{standard.standard}</h3>
                  <p className="text-gray-700 mb-2"><span className="font-medium">Requirement:</span> {standard.requirement}</p>
                  <p className="text-gray-600 text-sm">{standard.note}</p>
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

        {/* Career Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAward className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {careerBenefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{benefit.category}</h3>
                  <div className="space-y-2">
                    {benefit.benefits.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start text-sm text-gray-700">
                        <FaCheckCircle className="text-purple-500 mr-2 flex-shrink-0 mt-1" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Post-Service Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Post-Service Career Opportunities</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {postServiceOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{opportunity.sector}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Opportunities:</span> {opportunity.opportunities}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Companies:</span> {opportunity.companies}
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Advantages:</span> {opportunity.advantages}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLightbulb className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Emerging Trends & Future Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {emergingOpportunities.map((trend, index) => (
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
                  <FaPlane className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Touch the Sky with Glory?</h2>
            <p className="text-xl mb-8 text-blue-100">Join the Indian Air Force and serve the nation with honor and pride!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="https://indianairforce.nic.in" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Join Indian Air Force
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
