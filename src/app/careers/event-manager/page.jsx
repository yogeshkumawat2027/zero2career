import Link from 'next/link';
import React from 'react';
import { 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaUsers, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaClock, 
  FaTools, 
  FaExternalLinkAlt,
  FaArrowLeft,
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
  FaHandshake,
  FaPhoneAlt,
  FaEnvelope,
  FaRegCalendarAlt,
  FaBullhorn,
  FaMicrophone,
  FaCamera,
  FaVideo,
  FaMusic,
  FaGifts,
  FaGlassCheers
} from 'react-icons/fa';

export default function EventManagerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's degree in Event Management/MBA" },
    { icon: FaGraduationCap, title: "Skills", detail: "Organization, Communication, Leadership" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 20+ years based on role" },
    { icon: FaShieldAlt, title: "Certification", detail: "Event management certifications preferred" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "Event Management, Hospitality, Mass Communication, Business Administration",
      focus: "Event planning, project management, communication skills, vendor management",
      cost: "₹1-6 LPA (government to private colleges)",
      outcomes: "Event coordinator, assistant event manager, entry-level event planning roles"
    },
    { 
      level: "Master's Degree",
      duration: "2 years",
      program: "MBA in Event Management, M.A. Event Management, Hospitality Management",
      focus: "Strategic event planning, business development, advanced project management",
      cost: "₹2-15 LPA for MBA programs",
      outcomes: "Event manager, senior coordinator, specialized event planning roles"
    },
    { 
      level: "Professional Certifications",
      duration: "3-12 months",
      program: "CMP, CSEP, event planning certifications, project management",
      focus: "Industry standards, professional networking, specialized event types",
      cost: "₹15,000-2 LPA per certification",
      outcomes: "Career advancement, credibility, specialization recognition"
    },
    { 
      level: "Diploma & Short Courses",
      duration: "6 months - 1 year",
      program: "Event management diplomas, wedding planning, corporate events",
      focus: "Practical skills, hands-on experience, industry exposure",
      cost: "₹25,000-2 LPA for specialized programs",
      outcomes: "Quick entry into event industry, specialized skills, portfolio building"
    }
  ];

  const specializationAreas = [
    { 
      area: "Corporate Event Management",
      description: "Plan and execute corporate meetings, conferences, seminars, and team building events",
      applications: "Conferences, product launches, corporate meetings, team retreats, annual events",
      jobRoles: "Corporate Event Manager, Conference Coordinator, Meeting Planner",
      growth: "Stable demand with business growth and corporate culture emphasis"
    },
    { 
      area: "Wedding & Social Event Planning",
      description: "Organize weddings, parties, celebrations, and personal milestone events",
      applications: "Weddings, birthday parties, anniversaries, social gatherings, cultural events",
      jobRoles: "Wedding Planner, Social Event Coordinator, Celebration Specialist",
      growth: "High growth with increasing spending on celebrations"
    },
    { 
      area: "Exhibition & Trade Show Management",
      description: "Manage trade shows, exhibitions, fairs, and industry showcases",
      applications: "Trade shows, exhibitions, industry fairs, B2B events, product showcases",
      jobRoles: "Exhibition Manager, Trade Show Coordinator, Fair Organizer",
      growth: "Growing with business networking and industry exhibitions"
    },
    { 
      area: "Entertainment & Music Event Management",
      description: "Organize concerts, festivals, entertainment shows, and cultural events",
      applications: "Music concerts, festivals, cultural shows, entertainment events, artist management",
      jobRoles: "Entertainment Manager, Festival Coordinator, Show Producer",
      growth: "Expanding entertainment industry and music events"
    },
    { 
      area: "Sports Event Management",
      description: "Plan and manage sporting events, tournaments, and athletic competitions",
      applications: "Sports tournaments, marathons, corporate sports, championship events",
      jobRoles: "Sports Event Manager, Tournament Coordinator, Athletic Event Planner",
      growth: "Growing sports culture and corporate sports events"
    },
    { 
      area: "Digital & Virtual Event Management",
      description: "Organize virtual events, webinars, hybrid events, and digital experiences",
      applications: "Virtual conferences, webinars, hybrid events, online exhibitions, digital launches",
      jobRoles: "Virtual Event Manager, Digital Experience Coordinator, Hybrid Event Specialist",
      growth: "Rapidly growing post-pandemic digital event trends"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Event Management Companies",
      companies: "Wizcraft, 70 EMG, Fountainhead MKTG, Event Capital, Percept, Geometry Encompass",
      roles: "Event Manager, Event Coordinator, Account Manager, Creative Director",
      salary: "₹3-20 LPA",
      growth: "Steady growth with increasing corporate and social events"
    },
    { 
      sector: "Corporate Organizations",
      companies: "TCS, Infosys, Wipro, Reliance, Tata Group, HUL, Accenture, IBM",
      roles: "Corporate Event Manager, Internal Communications Manager, HR Event Coordinator",
      salary: "₹5-25 LPA",
      growth: "Growing emphasis on employee engagement and corporate culture"
    },
    { 
      sector: "Hospitality & Hotels",
      companies: "Taj Hotels, Oberoi, ITC, Marriott, Hyatt, Radisson, Lemon Tree Hotels",
      roles: "Banquet Manager, Conference Manager, Sales & Events Manager, MICE Coordinator",
      salary: "₹4-18 LPA",
      growth: "Strong growth with hospitality industry expansion"
    },
    { 
      sector: "Wedding Planning Industry",
      companies: "WedMeGood, ShaadiSaga, Wedniksha, Celebrate Relations, independent planners",
      roles: "Wedding Planner, Destination Wedding Coordinator, Bridal Consultant, Vendor Manager",
      salary: "₹3-30 LPA",
      growth: "Booming industry with increasing wedding expenditure"
    },
    { 
      sector: "Exhibition & Trade Show",
      companies: "Informa Markets, UBM India, Messe Frankfurt, Reed Exhibitions, Conference & More",
      roles: "Exhibition Manager, Trade Show Coordinator, B2B Event Manager, Fair Organizer",
      salary: "₹4-22 LPA",
      growth: "Growing B2B networking and industry exhibitions"
    },
    { 
      sector: "Entertainment & Sports",
      companies: "BookMyShow, Zomato Live, Paytm Insider, Star Sports, ESPN, Sony Entertainment",
      roles: "Entertainment Manager, Sports Event Coordinator, Festival Manager, Show Producer",
      salary: "₹5-35 LPA",
      growth: "Expanding entertainment and sports event industry"
    }
  ];

  const jobProfiles = [
    { post: "Event Coordinator", experience: "0-2 years", salary: "₹2-5 LPA", duties: "Event support, vendor coordination, logistics management, client assistance" },
    { post: "Event Manager", experience: "2-5 years", salary: "₹5-12 LPA", duties: "Event planning, budget management, team coordination, client relationship management" },
    { post: "Senior Event Manager", experience: "5-8 years", salary: "₹10-20 LPA", duties: "Strategic planning, large event management, business development, team leadership" },
    { post: "Event Director", experience: "8-12 years", salary: "₹18-35 LPA", duties: "Portfolio management, strategic partnerships, business growth, organizational leadership" },
    { post: "VP Events/General Manager", experience: "12-18 years", salary: "₹30-60 LPA", duties: "Business strategy, organizational development, industry partnerships, executive leadership" },
    { post: "Event Company Owner/CEO", experience: "15+ years", salary: "₹40 LPA-5 Crores", duties: "Business ownership, industry leadership, strategic vision, company growth" }
  ];

  const topColleges = [
    { name: "National Institute of Event Management", courses: "Event Management Programs", ranking: "Specialized Institute", fees: "₹3-8 LPA", placements: "₹4-12 LPA average" },
    { name: "Indian Institute of Hotel Management", courses: "Hotel Management with Event Specialization", ranking: "Premier Hospitality Institute", fees: "₹2-5 LPA", placements: "₹5-15 LPA average" },
    { name: "Amity University", courses: "Event Management, Mass Communication", ranking: "Top Private University", fees: "₹6-12 LPA", placements: "₹4-14 LPA average" },
    { name: "Christ University", courses: "Event Management & PR, Mass Communication", ranking: "Premier Private University", fees: "₹4-8 LPA", placements: "₹5-16 LPA average" },
    { name: "Symbiosis International", courses: "Event Management, Mass Communication", ranking: "Top Private Institute", fees: "₹8-15 LPA", placements: "₹6-18 LPA average" },
    { name: "Lovely Professional University", courses: "Event Management, Hospitality", ranking: "Large Private University", fees: "₹3-6 LPA", placements: "₹3-10 LPA average" }
  ];

  const technicalSkills = [
    { 
      category: "Event Planning & Management",
      skills: ["Project Management", "Budget Planning", "Vendor Management", "Timeline Planning", "Risk Management", "Contract Negotiation"]
    },
    { 
      category: "Software & Technology",
      skills: ["Event Management Software", "CRM Systems", "Project Management Tools", "Social Media Management", "Registration Platforms", "Live Streaming Tools"]
    },
    { 
      category: "Communication & Marketing",
      skills: ["Marketing Strategy", "Social Media Marketing", "Content Creation", "Public Relations", "Brand Management", "Digital Marketing"]
    },
    { 
      category: "Operations & Logistics",
      skills: ["Logistics Coordination", "Venue Management", "Catering Coordination", "Audio-Visual Management", "Security Planning", "Emergency Management"]
    }
  ];

  const careerProgression = [
    { level: "Event Coordinator", experience: "0-2 years", salary: "₹2-5 LPA", focus: "Learning event basics, supporting senior staff, gaining industry experience" },
    { level: "Junior Event Manager", experience: "2-4 years", salary: "₹4-8 LPA", focus: "Managing small events, building client relationships, developing specialization" },
    { level: "Event Manager", experience: "4-8 years", salary: "₹7-15 LPA", focus: "Independent event management, team leadership, business development" },
    { level: "Senior Event Manager", experience: "8-12 years", salary: "₹12-25 LPA", focus: "Large event portfolios, strategic planning, organizational leadership" },
    { level: "Event Director", experience: "12-18 years", salary: "₹20-40 LPA", focus: "Business strategy, partnership development, industry leadership" },
    { level: "VP/CEO Events", experience: "15+ years", salary: "₹35-5 Cr", focus: "Business ownership, industry influence, strategic vision, company growth" }
  ];

  const emergingTrends = [
    { 
      trend: "Hybrid & Virtual Events",
      description: "Combination of physical and digital event experiences",
      opportunities: "Virtual conferences, hybrid meetings, online exhibitions, digital networking",
      timeline: "High current demand with 3-5 year evolution"
    },
    { 
      trend: "Sustainable & Eco-friendly Events",
      description: "Environmentally conscious event planning and execution",
      opportunities: "Green venues, sustainable practices, waste reduction, eco-friendly materials",
      timeline: "Growing awareness over next 5-8 years"
    },
    { 
      trend: "Experience-driven Events",
      description: "Focus on immersive and personalized event experiences",
      opportunities: "Interactive installations, personalized journeys, sensory experiences",
      timeline: "Continuous innovation over next 3-7 years"
    },
    { 
      trend: "Technology Integration",
      description: "AI, AR/VR, and smart technology in events",
      opportunities: "AR experiences, AI chatbots, smart badges, interactive displays",
      timeline: "Rapid adoption over next 2-5 years"
    },
    { 
      trend: "Micro-events & Intimate Gatherings",
      description: "Smaller, more personalized and exclusive events",
      opportunities: "Boutique events, intimate celebrations, exclusive experiences",
      timeline: "Growing trend post-pandemic for next 3-5 years"
    },
    { 
      trend: "Corporate Wellness & Team Building",
      description: "Focus on employee wellness and team building events",
      opportunities: "Wellness retreats, team building experiences, corporate wellness programs",
      timeline: "Growing corporate focus for next 5-8 years"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "Certified Meeting Professional (CMP)",
      provider: "Events Industry Council (EIC)",
      duration: "6-12 months preparation",
      cost: "$400-600",
      description: "Global standard for meeting and event professionals"
    },
    { 
      cert: "Certified Special Events Professional (CSEP)",
      provider: "International Special Events Society (ISES)",
      duration: "4-8 months preparation",
      cost: "$500-700",
      description: "Specialized certification for creative event professionals"
    },
    { 
      cert: "Digital Event Strategist (DES)",
      provider: "Professional Convention Management Association",
      duration: "3-6 months preparation",
      cost: "$300-500",
      description: "Certification focused on digital and virtual event management"
    },
    { 
      cert: "Certified in Exhibition Management (CEM)",
      provider: "International Association of Exhibitions and Events",
      duration: "6-9 months preparation",
      cost: "$600-800",
      description: "Specialized certification for exhibition and trade show management"
    },
    { 
      cert: "Wedding Planning Certificate",
      provider: "Various institutes and organizations",
      duration: "3-6 months",
      cost: "₹25,000-1 LPA",
      description: "Specialized training in wedding and social event planning"
    }
  ];

  const salaryRanges = [
    { sector: "Event Management Companies", fresher: "₹3-6 LPA", experienced: "₹6-20 LPA", senior: "₹15-40 LPA" },
    { sector: "Corporate Organizations", fresher: "₹5-9 LPA", experienced: "₹9-25 LPA", senior: "₹20-50 LPA" },
    { sector: "Hospitality & Hotels", fresher: "₹4-7 LPA", experienced: "₹7-18 LPA", senior: "₹15-35 LPA" },
    { sector: "Wedding Planning", fresher: "₹3-8 LPA", experienced: "₹8-30 LPA", senior: "₹25-80 LPA" },
    { sector: "Exhibition & Trade Shows", fresher: "₹4-8 LPA", experienced: "₹8-22 LPA", senior: "₹18-40 LPA" },
    { sector: "Entertainment & Sports", fresher: "₹5-10 LPA", experienced: "₹10-35 LPA", senior: "₹30-75 LPA" },
    { sector: "Freelance/Independent", fresher: "₹2-12 LPA", experienced: "₹12-50 LPA", senior: "₹40-5 Crores" },
    { sector: "Government Events", fresher: "₹3-6 LPA", experienced: "₹6-15 LPA", senior: "₹12-25 LPA" }
  ];

  const preparationTips = [
    "Develop strong organizational and project management skills through practical experience",
    "Build communication and interpersonal skills for client and vendor management",
    "Gain hands-on experience through internships, volunteering at events, and assistant roles",
    "Create a portfolio showcasing successfully managed events with photos and testimonials",
    "Network with industry professionals, vendors, and potential clients actively",
    "Stay updated with event trends, technology, and industry best practices",
    "Develop crisis management and problem-solving skills for unexpected situations",
    "Learn budget management and financial planning for profitable event execution",
    "Master relevant software tools for event planning, project management, and marketing",
    "Consider specialization in specific event types based on interest and market demand"
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Event Management Company",
      investment: "₹5-25 lakhs",
      description: "Full-service event planning and management for corporate and social events",
      potential: "High growth potential with established client relationships and repeat business"
    },
    { 
      business: "Wedding Planning Business",
      investment: "₹3-15 lakhs",
      description: "Specialized wedding and social event planning services",
      potential: "Lucrative market with high client spending and emotional value"
    },
    { 
      business: "Virtual Event Platform",
      investment: "₹10-50 lakhs",
      description: "Technology platform for hosting virtual and hybrid events",
      potential: "Growing market with recurring revenue and scalability"
    },
    { 
      business: "Event Equipment Rental",
      investment: "₹20 lakhs-1 crore",
      description: "Audio-visual, furniture, and decorative equipment rental for events",
      potential: "Steady revenue with repeat customers and asset-based returns"
    },
    { 
      business: "Specialty Event Services",
      investment: "₹5-30 lakhs",
      description: "Niche services like destination weddings, corporate retreats, or cultural events",
      potential: "Premium pricing with specialized expertise and unique positioning"
    },
    { 
      business: "Event Training Institute",
      investment: "₹8-35 lakhs",
      description: "Professional training and certification programs for event management",
      potential: "Growing demand for skilled professionals and recurring course revenue"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCalendarAlt className="mx-auto text-6xl mb-6 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Event Manager
              <span className="text-orange-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Create Memorable Experiences - Complete guide to building a successful career in Event Management
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Event Management Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Event Management</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Event Management is the application of project management principles to create and develop large-scale events such as festivals, conferences, ceremonies, weddings, formal parties, concerts, or conventions. Event managers are responsible for planning, coordinating, and executing memorable experiences that meet client objectives and exceed expectations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The event industry has experienced significant growth with increasing corporate activities, social celebrations, and experiential marketing. Event managers combine creativity with operational expertise to deliver successful events within budget and timeline constraints.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Event Management?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Creative and dynamic career
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Growing industry demand
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Entrepreneurial opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Diverse event types
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    High client interaction
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Immediate results visibility
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
              <h2 className="text-3xl font-bold text-gray-800">Top Event Management Colleges</h2>
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
              <FaBullhorn className="text-3xl text-red-600 mr-4" />
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills</h2>
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
                  <FaCalendarAlt className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Memorable Events?</h2>
            <p className="text-xl mb-8 text-orange-100">Start your journey in Event Management and bring experiences to life!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-orange-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-900 transition-colors inline-flex items-center">
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
