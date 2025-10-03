import Link from 'next/link';
import React from 'react';
import { 
  FaGlobe, 
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
  FaMountain,
  FaPassport,
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
  FaWheelchair,
  FaBaby,
  FaChild,
  FaBroom,
  FaUtensils,
  FaBed,
  FaCoffee,
  FaWineBottle,
  FaGamepad,
  FaMusic,
  FaPaintBrush
} from 'react-icons/fa';

export default function ForeignServiceOfficerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's degree (any stream) for UPSC CSE" },
    { icon: FaGraduationCap, title: "Age Limit", detail: "21-32 years (relaxation for reserved categories)" },
    { icon: FaCalendarAlt, title: "Attempts", detail: "6 attempts for General, more for reserved categories" },
    { icon: FaShieldAlt, title: "Nationality", detail: "Indian citizen with clean background verification" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "Any stream - Arts, Science, Commerce, Engineering, Medical",
      focus: "General knowledge, current affairs, analytical thinking, communication skills",
      cost: "₹50,000-5 LPA (government to private colleges)",
      outcomes: "Eligibility for UPSC Civil Services Examination (CSE)"
    },
    { 
      level: "UPSC Preparation",
      duration: "1-3 years",
      program: "Self-study or coaching institutes for Civil Services Examination",
      focus: "General Studies, Optional subject, Essay writing, Interview preparation",
      cost: "₹25,000-3 LPA for coaching and materials",
      outcomes: "Selection as IFS officer through Civil Services Examination"
    },
    { 
      level: "Foundation Course",
      duration: "3 months",
      program: "Foundational training at Lal Bahadur Shastri National Academy",
      focus: "Constitutional framework, governance, ethics, leadership skills",
      cost: "Government sponsored training with stipend",
      outcomes: "Basic understanding of Indian administrative system"
    },
    { 
      level: "Professional Training",
      duration: "2 years",
      program: "Specialized training at Foreign Service Institute (FSI)",
      focus: "Diplomatic practices, international law, foreign languages, protocol",
      cost: "Government sponsored with full salary and benefits",
      outcomes: "Professional competency for diplomatic assignments"
    }
  ];

  const specializationAreas = [
    { 
      area: "Political & Bilateral Relations",
      description: "Manage political relationships and bilateral agreements between countries",
      applications: "Embassy work, treaty negotiations, high-level diplomatic meetings, crisis management",
      jobRoles: "Political Counsellor, Deputy Chief of Mission, Ambassador",
      growth: "Core diplomatic function with continuous importance"
    },
    { 
      area: "Economic & Commercial Diplomacy",
      description: "Promote trade, investment, and economic cooperation between nations",
      applications: "Trade negotiations, business facilitation, investment promotion, economic analysis",
      jobRoles: "Commercial Counsellor, Trade Commissioner, Economic Attaché",
      growth: "Growing importance with global economic integration"
    },
    { 
      area: "Consular Services",
      description: "Provide services to citizens abroad and manage visa/immigration matters",
      applications: "Passport services, emergency assistance, visa processing, citizen welfare",
      jobRoles: "Consul General, Consular Officer, Passport Officer",
      growth: "Expanding with increased global mobility"
    },
    { 
      area: "Cultural & Public Diplomacy",
      description: "Promote cultural exchange and public understanding between nations",
      applications: "Cultural programs, educational exchanges, media relations, soft power projection",
      jobRoles: "Cultural Attaché, Information Officer, Public Diplomacy Specialist",
      growth: "Increasing focus on soft power and cultural influence"
    },
    { 
      area: "Multilateral Diplomacy",
      description: "Represent India in international organizations and multilateral forums",
      applications: "UN missions, international conferences, global governance, peacekeeping",
      jobRoles: "Permanent Representative, Mission Counsellor, International Organization Specialist",
      growth: "Critical for India's global leadership aspirations"
    },
    { 
      area: "Security & Strategic Affairs",
      description: "Handle security-related diplomatic issues and strategic partnerships",
      applications: "Defense cooperation, counter-terrorism, intelligence sharing, strategic partnerships",
      jobRoles: "Defense Attaché, Security Advisor, Strategic Affairs Specialist",
      growth: "High priority in current global security environment"
    }
  ];

  const postingOpportunities = [
    { 
      region: "South Asia (SAARC Countries)",
      countries: "Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Afghanistan, Maldives",
      roles: "Political Officer, Commercial Counsellor, Deputy High Commissioner",
      allowances: "₹50,000-2 LPA additional",
      challenges: "Regional politics, cultural similarities, bilateral issues"
    },
    { 
      region: "Southeast Asia & East Asia",
      countries: "China, Japan, Singapore, Malaysia, Thailand, Indonesia, South Korea, Vietnam",
      roles: "Ambassador, Minister (Commercial), Consul General",
      allowances: "₹1-4 LPA additional",
      challenges: "Economic powerhouses, technological advancement, strategic importance"
    },
    { 
      region: "Middle East & West Asia",
      countries: "UAE, Saudi Arabia, Iran, Israel, Turkey, Egypt, Qatar, Kuwait",
      roles: "Political Counsellor, Commercial Attaché, Consular Officer",
      allowances: "₹1.5-5 LPA additional",
      challenges: "Energy diplomacy, diaspora management, regional conflicts"
    },
    { 
      region: "Europe & European Union",
      countries: "UK, Germany, France, Russia, Netherlands, Belgium, Switzerland, Nordic countries",
      roles: "Deputy Ambassador, Economic Counsellour, Cultural Attaché",
      allowances: "₹2-6 LPA additional",
      challenges: "Advanced economies, EU relations, technology cooperation"
    },
    { 
      region: "Americas",
      countries: "USA, Canada, Brazil, Argentina, Mexico, Caribbean nations",
      roles: "Minister (Political), Trade Commissioner, Information Officer",
      allowances: "₹2-7 LPA additional",
      challenges: "Strategic partnerships, diaspora engagement, economic cooperation"
    },
    { 
      region: "Africa",
      countries: "South Africa, Nigeria, Kenya, Ethiopia, Egypt, Morocco, Ghana",
      roles: "High Commissioner, Development Cooperation Officer, Political Officer",
      allowances: "₹1-3 LPA additional",
      challenges: "Development partnerships, resource diplomacy, South-South cooperation"
    }
  ];

  const careerProgression = [
    { level: "Third Secretary/Assistant Secretary", experience: "0-4 years", salary: "₹56,100 (Level 10)", focus: "Learning diplomatic procedures, language training, junior responsibilities" },
    { level: "Second Secretary/Under Secretary", experience: "4-9 years", salary: "₹67,700 (Level 11)", focus: "Specialized desk work, bilateral relations, consular duties" },
    { level: "First Secretary/Deputy Secretary", experience: "9-16 years", salary: "₹78,800 (Level 12)", focus: "Senior desk officer, policy formulation, team leadership" },
    { level: "Counsellor/Director", experience: "16-25 years", salary: "₹1,18,500 (Level 13)", focus: "Department head, high-level negotiations, strategic planning" },
    { level: "Minister/Joint Secretary", experience: "25-30 years", salary: "₹1,44,200 (Level 14)", focus: "Senior diplomatic positions, policy making, international negotiations" },
    { level: "Ambassador/Additional Secretary", experience: "30+ years", salary: "₹2,05,400+ (Level 15+)", focus: "Head of mission, strategic leadership, international representation" }
  ];

  const topInstitutes = [
    { name: "Jamia Millia Islamia", courses: "BA (Hons) Political Science, International Studies", ranking: "Top for IFS preparation", fees: "₹15,000", placements: "High UPSC success rate" },
    { name: "Jawaharlal Nehru University (JNU)", courses: "MA International Relations, Political Science", ranking: "Premier for International Studies", fees: "₹20,000", placements: "Excellent civil services record" },
    { name: "Delhi University (Hindu College, SRCC)", courses: "BA Political Science, Economics, History", ranking: "Top undergraduate programs", fees: "₹25,000", placements: "Strong UPSC coaching ecosystem" },
    { name: "Aligarh Muslim University", courses: "BA Political Science, International Relations", ranking: "Traditional civil services hub", fees: "₹18,000", placements: "Good success in competitive exams" },
    { name: "Banaras Hindu University", courses: "BA, MA Political Science, Public Administration", ranking: "Established university with good faculty", fees: "₹12,000", placements: "Decent civil services success" },
    { name: "Coaching Institutes", courses: "UPSC CSE preparation courses", ranking: "Specialized exam preparation", fees: "₹50,000-3 LPA", placements: "Focused on exam success rates" }
  ];

  const technicalSkills = [
    { 
      category: "Language Skills",
      skills: ["Foreign Languages (French, Spanish, Arabic, Chinese, Russian)", "Advanced English Communication", "Translation & Interpretation", "Cross-cultural Communication", "Public Speaking", "Diplomatic Correspondence"]
    },
    { 
      category: "Analytical & Research Skills",
      skills: ["Policy Analysis", "International Law Understanding", "Economic Analysis", "Research & Report Writing", "Strategic Planning", "Crisis Management"]
    },
    { 
      category: "Technology & Digital Skills",
      skills: ["Digital Communication Platforms", "Social Media Management", "Data Analysis Tools", "Presentation Software", "Virtual Conferencing", "Cybersecurity Awareness"]
    },
    { 
      category: "Administrative & Management",
      skills: ["Project Management", "Team Leadership", "Budget Management", "Protocol Management", "Event Organization", "Stakeholder Management"]
    }
  ];

  const salaryBenefits = [
    { 
      component: "Basic Pay",
      amount: "₹56,100-2,05,400+ per month",
      description: "As per 7th Pay Commission scales for IFS officers"
    },
    { 
      component: "Foreign Allowance",
      amount: "$800-3,000+ per month",
      description: "Additional allowance during foreign postings based on country classification"
    },
    { 
      component: "Accommodation",
      amount: "Free/HRA ₹15,000-50,000",
      description: "Government accommodation or House Rent Allowance"
    },
    { 
      component: "Transport",
      amount: "Official vehicle + TA ₹5,000-25,000",
      description: "Official transport and travel allowance for duties"
    },
    { 
      component: "Medical Benefits",
      amount: "₹2-10 LPA equivalent",
      description: "Comprehensive medical coverage for self and family"
    },
    { 
      component: "Children Education",
      amount: "₹50,000-5 LPA per child",
      description: "Education allowance and international school fees abroad"
    }
  ];

  const emergingTrends = [
    { 
      trend: "Digital Diplomacy",
      description: "Use of digital platforms and social media for diplomatic engagement",
      opportunities: "Social media management, virtual conferences, digital public diplomacy, online citizen services",
      timeline: "Current priority with 3-5 year focus on digital transformation"
    },
    { 
      trend: "Climate & Environmental Diplomacy",
      description: "International negotiations on climate change and environmental cooperation",
      opportunities: "Climate negotiations, green technology cooperation, environmental partnerships, sustainable development",
      timeline: "Growing importance over next 10-15 years"
    },
    { 
      trend: "Economic & Trade Diplomacy",
      description: "Focus on economic partnerships, trade agreements, and commercial diplomacy",
      opportunities: "Trade negotiations, investment promotion, economic partnerships, commercial intelligence",
      timeline: "Continuous high priority with evolving global trade dynamics"
    },
    { 
      trend: "Diaspora Engagement",
      description: "Strengthening connections with Indian diaspora worldwide",
      opportunities: "Community outreach, cultural programs, business networking, skill partnerships",
      timeline: "Expanding focus with growing Indian diaspora influence"
    },
    { 
      trend: "Technology & Cyber Diplomacy",
      description: "International cooperation on technology, cybersecurity, and digital governance",
      opportunities: "Tech partnerships, cyber security agreements, digital governance, AI cooperation",
      timeline: "Rapidly growing field for next 5-10 years"
    },
    { 
      trend: "Health & Pandemic Diplomacy",
      description: "International health cooperation and pandemic response coordination",
      opportunities: "Health partnerships, vaccine diplomacy, medical cooperation, WHO engagement",
      timeline: "High priority post-COVID with 5-8 year focus"
    }
  ];

  const upscPreparation = [
    { 
      stage: "Preliminary Examination",
      subjects: "General Studies Paper I & II (CSAT)",
      duration: "6-12 months preparation",
      strategy: "Current affairs, basic concepts, reasoning and comprehension skills"
    },
    { 
      stage: "Main Examination",
      subjects: "4 GS Papers + 1 Optional + Essay + Language papers",
      duration: "12-18 months intensive preparation",
      strategy: "In-depth study, answer writing practice, optional subject mastery"
    },
    { 
      stage: "Personality Test (Interview)",
      subjects: "General awareness, personality assessment, leadership qualities",
      duration: "2-3 months focused preparation",
      strategy: "Mock interviews, current affairs, hobby development, confidence building"
    },
    { 
      stage: "Language Training",
      subjects: "Foreign language learning during training period",
      duration: "6 months - 2 years",
      strategy: "Intensive language courses, cultural immersion, practical application"
    }
  ];

  const preparationTips = [
    "Build strong foundation in history, geography, polity, and current affairs",
    "Develop excellent written and verbal communication skills in English",
    "Stay updated with international relations, foreign policy, and global affairs",
    "Read newspapers daily and maintain notes on important international developments",
    "Practice essay writing and develop analytical thinking abilities",
    "Learn at least one foreign language to enhance diplomatic effectiveness",
    "Participate in Model United Nations (MUN) and debate competitions",
    "Develop leadership skills through extracurricular activities and social work",
    "Build cultural awareness and sensitivity towards different societies",
    "Maintain physical fitness and mental resilience for demanding postings"
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 mt-[100px] sm:mt-0 overflow-x-hidden">
      {/* Mobile spacing fix */}
      <div className="block lg:hidden h-4"></div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 w-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <FaGlobe className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Foreign Service Officer
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Represent India Globally - Complete guide to building a prestigious career in Diplomacy & Foreign Service
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* About Foreign Service Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Foreign Service Career</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Indian Foreign Service (IFS) is one of India's premier civil services, responsible for conducting the country's diplomatic relations and representing Indian interests abroad. IFS officers serve as India's ambassadors, diplomats, and foreign policy practitioners across the globe.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With India's growing global influence and expanding international partnerships, IFS officers play a crucial role in advancing India's strategic interests, promoting trade and investment, protecting Indian citizens abroad, and building bridges between nations through diplomacy and cultural exchange.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Foreign Service?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Prestigious career with global exposure
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Opportunity to serve the nation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    International postings and travel
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Excellent compensation and benefits
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Cultural and linguistic diversity
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Policy influence and leadership roles
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility & Requirements</h2>
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
              <h2 className="text-3xl font-bold text-gray-800">Education & Preparation Path</h2>
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

        {/* UPSC Preparation */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">UPSC Civil Services Examination</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {upscPreparation.map((stage, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{stage.stage}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Subjects:</span> {stage.subjects}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Duration:</span> {stage.duration}
                    </div>
                    <div className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Strategy:</span> {stage.strategy}
                    </div>
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
              <FaBuilding className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Educational Institutions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Institution</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Courses</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Category</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fees</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Success Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {topInstitutes.map((institute, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{institute.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{institute.courses}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{institute.ranking}</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-medium">{institute.fees}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{institute.placements}</td>
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
              <FaFlag className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Diplomatic Specializations</h2>
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
                      <span className="font-medium">Importance:</span> {area.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* International Posting Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMapMarkerAlt className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">International Posting Opportunities</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {postingOpportunities.map((posting, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{posting.region}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Countries:</span> {posting.countries}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Roles:</span> {posting.roles}
                    </div>
                    <div className="text-green-600 font-medium">
                      <span>Additional Allowances:</span> {posting.allowances}
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Focus Areas:</span> {posting.challenges}
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression in IFS</h2>
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

        {/* Salary & Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Salary Structure & Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {salaryBenefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{benefit.component}</h3>
                  <p className="text-2xl font-bold text-green-600 mb-2">{benefit.amount}</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills for Diplomats</h2>
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
              <h2 className="text-3xl font-bold text-gray-800">Emerging Trends in Diplomacy</h2>
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

        {/* Preparation Tips */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">IFS Preparation Strategy</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-100">
                  <FaGlobe className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Represent India Globally?</h2>
            <p className="text-xl mb-8 text-blue-100">Start your journey in the Indian Foreign Service and serve the nation on the world stage!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start UPSC Preparation
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
