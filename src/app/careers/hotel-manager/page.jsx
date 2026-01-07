import Link from 'next/link';
import React from 'react';
import { 
  FaHotel, 
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
  FaCutlery,
  FaConciergeBell,
  FaBed,
  FaWifi as FaWifiAlt,
  FaSwimmingPool,
  FaSpa,
  FaGamepad,
  FaShoppingCart,
  FaUtensilSpoon,
  FaCoffee,
  FaCocktail,
  FaBirthdayCake,
  FaRing,
  FaCalendar,
  FaLayerGroup,
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
  FaMap
} from 'react-icons/fa';

export default function HotelManagerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's in Hotel Management/Hospitality or related field" },
    { icon: FaGraduationCap, title: "Skills", detail: "Leadership, communication, customer service, problem-solving" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 20+ years based on position level" },
    { icon: FaShieldAlt, title: "Personal Traits", detail: "People-oriented, flexible, multilingual abilities preferred" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "BBA/B.Sc. Hotel Management, Hospitality Management, Tourism Studies",
      focus: "Hotel operations, food & beverage, front office, housekeeping, event management",
      cost: "₹50,000-8 LPA (varies by institution type)",
      outcomes: "Management trainee, assistant manager, department supervisor positions"
    },
    { 
      level: "Master's Degree",
      duration: "2 years",
      program: "MBA in Hotel Management, M.Sc. Hospitality, International Hotel Management",
      focus: "Strategic management, revenue management, hospitality technology, global operations",
      cost: "₹2-25 LPA for premium hospitality schools",
      outcomes: "Manager, operations manager, regional roles, consulting positions"
    },
    { 
      level: "Professional Certifications",
      duration: "3-18 months",
      program: "Certified Hotel Administrator, Revenue Management, Guest Service Gold Standards",
      focus: "Specialized skills in operations, revenue optimization, service excellence",
      cost: "₹25,000-5 LPA for international certifications",
      outcomes: "Specialized roles, department heads, consultant positions, brand management"
    },
    { 
      level: "Executive Education",
      duration: "1-6 months",
      program: "Executive programs from Cornell, Glion, Les Roches, IHM institutes",
      focus: "Leadership development, digital transformation, sustainable hospitality",
      cost: "₹3-15 LPA for premium executive programs",
      outcomes: "Senior management, general manager, regional director, entrepreneur"
    }
  ];

  const hospitalitySpecializations = [
    { 
      area: "Hotel Operations Management",
      description: "Overall management of hotel daily operations and guest services",
      applications: "Front office, housekeeping, maintenance, security, guest relations, quality assurance",
      jobRoles: "General Manager, Operations Manager, Assistant Manager, Department Head",
      growth: "Core hospitality role with steady demand across all hotel segments"
    },
    { 
      area: "Food & Beverage Management",
      description: "Management of restaurants, bars, banquets, and catering operations",
      applications: "Restaurant operations, bar management, banquet services, catering, kitchen operations",
      jobRoles: "F&B Manager, Restaurant Manager, Banquet Manager, Catering Manager",
      growth: "Expanding with food culture growth and experiential dining trends"
    },
    { 
      area: "Revenue & Sales Management",
      description: "Optimization of pricing strategies and sales to maximize revenue",
      applications: "Revenue management, sales strategy, pricing optimization, market analysis, distribution",
      jobRoles: "Revenue Manager, Sales Manager, Business Development Manager, Pricing Analyst",
      growth: "High growth area with data analytics and dynamic pricing adoption"
    },
    { 
      area: "Event & Conference Management",
      description: "Planning and execution of events, meetings, and conferences",
      applications: "Corporate events, weddings, conferences, exhibitions, social functions, MICE tourism",
      jobRoles: "Event Manager, Conference Coordinator, Wedding Planner, MICE Manager",
      growth: "Booming sector with business travel recovery and destination weddings"
    },
    { 
      area: "Luxury & Resort Management",
      description: "Specialized management of luxury hotels and resort properties",
      applications: "Luxury service standards, personalized guest experience, resort activities, spa management",
      jobRoles: "Resort Manager, Luxury Hotel Manager, Guest Relations Manager, Concierge Manager",
      growth: "Growing luxury travel market and experiential tourism demand"
    },
    { 
      area: "Digital & Technology Management",
      description: "Implementation and management of hospitality technology solutions",
      applications: "Hotel tech systems, online booking, customer data, automation, digital marketing",
      jobRoles: "Digital Manager, Technology Coordinator, E-commerce Manager, Data Analyst",
      growth: "Rapidly expanding with digital transformation and contactless service trends"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Luxury Hotel Chains",
      companies: "Taj Hotels, Oberoi, Leela, Marriott, Hilton, Hyatt, Four Seasons, ITC",
      roles: "General Manager, Operations Manager, Department Head, Regional Manager",
      salary: "₹8-60 LPA",
      benefits: "Premium brand exposure, international opportunities, luxury service training, career progression"
    },
    { 
      sector: "Budget & Business Hotels",
      companies: "OYO, Treebo, FabHotels, Lemon Tree, Ginger, Red Fox, Zone by the Park",
      roles: "Hotel Manager, Operations Manager, Area Manager, Business Development Manager",
      salary: "₹4-25 LPA",
      benefits: "Fast-paced environment, entrepreneurial culture, rapid growth, technology adoption"
    },
    { 
      sector: "Resort & Hospitality",
      companies: "Club Mahindra, Sterling Resorts, CGH Earth, SwaSwara, Karma Group",
      roles: "Resort Manager, Guest Relations Manager, Activities Manager, Spa Manager",
      salary: "₹5-35 LPA",
      benefits: "Scenic locations, leisure hospitality, holistic experience, lifestyle benefits"
    },
    { 
      sector: "Airlines & Transportation",
      companies: "Air India, IndiGo, Vistara, SpiceJet, Airport authorities, Railway catering",
      roles: "Cabin Service Manager, Ground Service Manager, Catering Manager, Customer Service Head",
      salary: "₹4-30 LPA",
      benefits: "Travel benefits, structured career, service excellence focus, aviation industry exposure"
    },
    { 
      sector: "Event Management Companies",
      companies: "Wizcraft, E-Factor, 70 EMG, Percept, DNA Entertainment, regional event companies",
      roles: "Event Manager, Account Manager, Production Manager, Client Relations Manager",
      salary: "₹3-40 LPA",
      benefits: "Creative industry, diverse events, networking opportunities, project-based work"
    },
    { 
      sector: "Cruise & International Hospitality",
      companies: "Carnival, Royal Caribbean, Celebrity Cruises, International hotel chains abroad",
      roles: "Cruise Staff, International Hotel Manager, Guest Relations, Entertainment Coordinator",
      salary: "₹6-80 LPA (with international packages)",
      benefits: "Global exposure, cultural diversity, travel opportunities, tax-free earnings"
    }
  ];

  const careerProgression = [
    { level: "Management Trainee/Assistant Manager", experience: "0-2 years", salary: "₹2.5-8 LPA", focus: "Learning operations, guest service, department rotation, basic management skills" },
    { level: "Department Manager/Supervisor", experience: "2-5 years", salary: "₹5-15 LPA", focus: "Department management, team leadership, operational efficiency, guest satisfaction" },
    { level: "Assistant General Manager/Operations Manager", experience: "5-10 years", salary: "₹12-30 LPA", focus: "Multi-department coordination, P&L responsibility, strategic planning, staff development" },
    { level: "General Manager/Regional Manager", experience: "10-15 years", salary: "₹25-60 LPA", focus: "Property management, revenue optimization, brand standards, market development" },
    { level: "Area Manager/Director of Operations", experience: "15-20 years", salary: "₹45-1.2 Cr", focus: "Multi-property oversight, regional strategy, business development, franchise management" },
    { level: "Vice President/Managing Director", experience: "20+ years", salary: "₹80 LPA-3 Cr", focus: "Corporate strategy, brand development, market expansion, investor relations" }
  ];

  const topColleges = [
    { name: "Institute of Hotel Management (IHM) - Delhi", courses: "BHMCT, M.Sc. Hospitality", ranking: "Premier Government Institute", fees: "₹60,000", placements: "Excellent with top hotel chains" },
    { name: "IHM Mumbai (AICTE Approved)", courses: "BHMCT, MBA in Hospitality", ranking: "Top Government Institute", fees: "₹65,000", placements: "Strong industry connections" },
    { name: "Welcomgroup Graduate School of Hotel Administration", courses: "BHMCT, Executive Programs", ranking: "Industry-Linked Institute", fees: "₹4.5 LPA", placements: "Premium hotel placements" },
    { name: "Christ University - Hospitality", courses: "BBA, MBA Hospitality Management", ranking: "Premier Private University", fees: "₹3.5-8 LPA", placements: "Good industry exposure" },
    { name: "Amity School of Hospitality", courses: "BBA, MBA Hotel Management", ranking: "Established Private Institute", fees: "₹4-12 LPA", placements: "Corporate hospitality focus" },
    { name: "Les Roches Global Hospitality Education", courses: "International Hotel Management Programs", ranking: "Global Hospitality School", fees: "₹15-25 LPA", placements: "International opportunities" }
  ];

  const technicalSkills = [
    { 
      category: "Operations Management",
      skills: ["Property Management Systems (PMS)", "Revenue Management Systems", "Point of Sale (POS)", "Guest Relations", "Housekeeping Operations", "Maintenance Management"]
    },
    { 
      category: "Technology & Digital",
      skills: ["Hotel Software (Opera, Fidelio)", "Online Booking Systems", "Channel Management", "Customer Relationship Management", "Social Media Management", "Data Analytics"]
    },
    { 
      category: "Financial Management",
      skills: ["Budget Planning", "Cost Control", "P&L Management", "Revenue Optimization", "Financial Reporting", "Audit Compliance"]
    },
    { 
      category: "Leadership & Communication",
      skills: ["Team Management", "Customer Service Excellence", "Conflict Resolution", "Multilingual Communication", "Training & Development", "Performance Management"]
    }
  ];

  const salaryRanges = [
    { sector: "Luxury Hotels", fresher: "₹6-12 LPA", experienced: "₹15-40 LPA", senior: "₹35-80 LPA" },
    { sector: "Business Hotels", fresher: "₹3-8 LPA", experienced: "₹8-25 LPA", senior: "₹20-50 LPA" },
    { sector: "Budget Hotels", fresher: "₹2.5-6 LPA", experienced: "₹6-18 LPA", senior: "₹15-35 LPA" },
    { sector: "Resort & Leisure", fresher: "₹4-10 LPA", experienced: "₹10-30 LPA", senior: "₹25-60 LPA" },
    { sector: "Event Management", fresher: "₹3-7 LPA", experienced: "₹8-25 LPA", senior: "₹20-50 LPA" },
    { sector: "Cruise & International", fresher: "₹4-12 LPA", experienced: "₹12-45 LPA", senior: "₹35-1.2 Cr" },
    { sector: "Airlines & Transportation", fresher: "₹3-9 LPA", experienced: "₹9-30 LPA", senior: "₹25-65 LPA" },
    { sector: "Independent Consulting", fresher: "₹2-8 LPA", experienced: "₹10-40 LPA", senior: "₹30-2 Cr" }
  ];

  const emergingTrends = [
    { 
      trend: "Sustainable & Eco-Tourism",
      description: "Growing demand for environmentally conscious and sustainable hospitality",
      opportunities: "Green hotel management, eco-resort development, sustainable practices consulting, carbon footprint reduction",
      timeline: "Immediate growth with increasing environmental awareness"
    },
    { 
      trend: "Technology-Driven Guest Experience",
      description: "AI, IoT, and automation transforming guest services and operations",
      opportunities: "Smart hotel management, AI-powered personalization, contactless services, automation implementation",
      timeline: "Rapid adoption over next 2-5 years"
    },
    { 
      trend: "Wellness & Health Tourism",
      description: "Integration of health, wellness, and medical tourism with hospitality",
      opportunities: "Wellness resort management, medical tourism coordination, spa management, holistic experience design",
      timeline: "Growing market with post-pandemic health focus"
    },
    { 
      trend: "Workation & Extended Stays",
      description: "Rise of remote work creating demand for long-term accommodation solutions",
      opportunities: "Co-living space management, workation resort operations, extended stay services, digital nomad hospitality",
      timeline: "Emerging trend with 3-7 year growth potential"
    },
    { 
      trend: "Experience & Adventure Tourism",
      description: "Shift towards unique, personalized, and adventure-based travel experiences",
      opportunities: "Adventure resort management, experience curation, local culture integration, personalized service design",
      timeline: "Strong growth in premium and experiential segments"
    },
    { 
      trend: "Food Tourism & Culinary Experiences",
      description: "Growing interest in culinary tourism and food-focused travel",
      opportunities: "Culinary experience design, food festival management, cooking class coordination, local cuisine promotion",
      timeline: "Steady growth with cultural and food awareness trends"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "Certified Hotel Administrator (CHA)",
      provider: "American Hotel & Lodging Educational Institute",
      duration: "1-2 years preparation",
      cost: "$395-600",
      description: "Comprehensive certification covering all aspects of hotel operations and management"
    },
    { 
      cert: "Certified Revenue Management Executive (CRME)",
      provider: "Hospitality Sales & Marketing Association International",
      duration: "6-12 months",
      cost: "$1,200-1,500",
      description: "Specialized certification in revenue optimization and pricing strategies"
    },
    { 
      cert: "Certified Meeting Professional (CMP)",
      provider: "Events Industry Council",
      duration: "3 years experience + exam",
      cost: "$525-750",
      description: "Professional certification for meeting and event management expertise"
    },
    { 
      cert: "Guest Service Gold Standards",
      provider: "Ritz-Carlton, Four Seasons, luxury hotel brands",
      duration: "3-6 months",
      cost: "₹50,000-2 LPA",
      description: "Service excellence training and certification from luxury hospitality brands"
    },
    { 
      cert: "Sustainable Tourism Certification",
      provider: "Global Sustainable Tourism Council",
      duration: "6 months - 1 year",
      cost: "$800-1,500",
      description: "Certification in sustainable and responsible tourism management practices"
    }
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Boutique Hotel/Resort",
      investment: "₹2-50 crores",
      description: "Develop and operate unique, themed, or luxury boutique accommodation properties",
      potential: "High potential with growing demand for unique and personalized travel experiences"
    },
    { 
      business: "Event Management Company",
      investment: "₹5-75 lakhs",
      description: "Full-service event planning and management for weddings, corporate events, and social functions",
      potential: "Excellent growth with India's celebration culture and corporate event requirements"
    },
    { 
      business: "Homestay & Hospitality Network",
      investment: "₹10 lakhs-5 crores",
      description: "Create and manage network of homestays, bed & breakfasts, or vacation rentals",
      potential: "Growing domestic tourism and authentic travel experience demand"
    },
    { 
      business: "Corporate Hospitality Services",
      investment: "₹15-50 lakhs",
      description: "Provide hospitality services for corporate offices, guest houses, and business centers",
      potential: "Steady demand with corporate growth and business travel recovery"
    },
    { 
      business: "Food & Beverage Concept",
      investment: "₹10 lakhs-3 crores",
      description: "Develop unique restaurant concepts, cloud kitchens, or food delivery services",
      potential: "Strong growth with food culture evolution and delivery economy expansion"
    },
    { 
      business: "Hospitality Technology Solutions",
      investment: "₹8-60 lakhs",
      description: "Develop software solutions for hotels, restaurants, and hospitality businesses",
      potential: "High growth potential with digital transformation in hospitality industry"
    }
  ];

  const preparationTips = [
    "Develop excellent communication and interpersonal skills for diverse guest interactions",
    "Gain practical experience through internships at hotels, restaurants, and event companies",
    "Learn multiple languages to serve international guests effectively",
    "Build cultural awareness and sensitivity for global hospitality standards",
    "Develop problem-solving abilities and grace under pressure for guest service excellence",
    "Understand financial management, budgeting, and revenue optimization principles",
    "Stay updated with hospitality technology trends and digital transformation",
    "Network with industry professionals through hospitality associations and events",
    "Focus on developing leadership and team management capabilities",
    "Cultivate attention to detail and quality consciousness for service excellence"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaHotel className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hotel Manager
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Create Exceptional Guest Experiences - Complete guide to building a successful career in Hospitality Management
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Hotel Management Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Hotel Management Career</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Hotel Management is a dynamic field focused on providing exceptional guest experiences while efficiently managing hospitality operations. Hotel managers oversee all aspects of accommodation services, from guest relations and housekeeping to food service and event coordination, ensuring seamless operations and customer satisfaction.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With the growing tourism industry, business travel recovery, and evolving guest expectations, hotel management offers diverse opportunities in luxury hotels, budget accommodations, resorts, event management, and emerging segments like sustainable tourism and experience-based hospitality.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Hotel Management?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    People-oriented dynamic environment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Global career opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Diverse specialization areas
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Entrepreneurial opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Cultural diversity exposure
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Growing hospitality industry
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
              <h2 className="text-3xl font-bold text-gray-800">Requirements & Skills</h2>
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
              <h2 className="text-3xl font-bold text-gray-800">Top Hospitality Institutions</h2>
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
              <FaConciergeBell className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Hospitality Specializations</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {hospitalitySpecializations.map((area, index) => (
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Management Skills</h2>
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
                  <FaHotel className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Amazing Guest Experiences?</h2>
            <p className="text-xl mb-8 text-blue-100">Start your journey in Hotel Management and build a rewarding hospitality career!</p>
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
