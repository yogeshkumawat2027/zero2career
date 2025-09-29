import Link from 'next/link';
import React from 'react';
import { 
  FaUsers, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
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
  FaMap
} from 'react-icons/fa';

export default function HRManagerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's in HR, Management, Psychology, or related field" },
    { icon: FaGraduationCap, title: "Skills", detail: "Communication, leadership, analytical thinking, empathy" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 25+ years based on role and organization" },
    { icon: FaShieldAlt, title: "Competencies", detail: "People management, conflict resolution, strategic thinking" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "BBA/B.Com HR, Psychology, Management Studies, Industrial Relations",
      focus: "HR fundamentals, organizational behavior, labor laws, recruitment, employee relations",
      cost: "₹30,000-5 LPA (government to private colleges)",
      outcomes: "HR executive, recruiter, training coordinator, admin roles"
    },
    { 
      level: "Master's Degree",
      duration: "2 years",
      program: "MBA HR, M.A. Psychology, MSW, PGDM Human Resources",
      focus: "Strategic HR, talent management, organizational development, compensation design",
      cost: "₹2-25 LPA for premium B-schools and HR specializations",
      outcomes: "HR manager, talent acquisition lead, HRBP, compensation analyst"
    },
    { 
      level: "Professional Certifications",
      duration: "3-18 months",
      program: "SHRM, PHR, CHRP, Certified Recruiter, Leadership Development",
      focus: "Specialized HR skills, global practices, advanced certifications",
      cost: "₹15,000-8 LPA for international and premium certifications",
      outcomes: "Senior HR roles, specialist positions, consultant roles, leadership track"
    },
    { 
      level: "Executive & Leadership Programs",
      duration: "1-12 months",
      program: "Executive MBA, Leadership programs from IIMs, global HR certifications",
      focus: "Strategic leadership, change management, digital HR transformation",
      cost: "₹5-35 LPA for executive programs and global certifications",
      outcomes: "CHRO, VP HR, director roles, independent consulting, board positions"
    }
  ];

  const hrSpecializations = [
    { 
      area: "Talent Acquisition & Recruitment",
      description: "Strategic sourcing, hiring, and onboarding of talent across organizations",
      applications: "Campus recruitment, executive search, diversity hiring, talent pipelining, employer branding",
      jobRoles: "Talent Acquisition Manager, Recruiter, Sourcing Specialist, Campus Relations Manager",
      growth: "High demand with competitive talent market and skills shortage across industries"
    },
    { 
      area: "Learning & Development",
      description: "Employee training, skill development, and organizational capability building",
      applications: "Training design, e-learning, leadership development, skill assessments, career planning",
      jobRoles: "L&D Manager, Training Specialist, Instructional Designer, Career Coach",
      growth: "Expanding rapidly with upskilling needs and digital transformation requirements"
    },
    { 
      area: "Compensation & Benefits",
      description: "Design and management of salary structures, incentives, and employee benefits",
      applications: "Salary benchmarking, incentive design, benefits administration, equity compensation",
      jobRoles: "Compensation Manager, Benefits Specialist, Total Rewards Analyst, Payroll Manager",
      growth: "Growing importance with competitive talent market and complex compensation structures"
    },
    { 
      area: "Employee Relations & Engagement",
      description: "Managing employee experience, satisfaction, and organizational culture",
      applications: "Employee engagement, conflict resolution, culture initiatives, internal communication",
      jobRoles: "Employee Relations Manager, Culture Lead, Engagement Specialist, Internal Communications",
      growth: "Critical focus area with remote work trends and generational workforce changes"
    },
    { 
      area: "HR Analytics & People Operations",
      description: "Data-driven HR decision making and operational efficiency optimization",
      applications: "People analytics, HRIS management, workforce planning, predictive modeling, automation",
      jobRoles: "People Analyst, HRIS Specialist, Workforce Planning Manager, People Operations Lead",
      growth: "Fast-growing field with digital transformation and data-driven HR practices"
    },
    { 
      area: "Organizational Development",
      description: "Strategic change management and organizational effectiveness improvement",
      applications: "Change management, organizational design, culture transformation, leadership development",
      jobRoles: "OD Consultant, Change Manager, Culture Transformation Lead, Business Partner",
      growth: "High demand with digital transformation and agile organizational structures"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Technology Companies",
      companies: "TCS, Infosys, Wipro, Google, Microsoft, Amazon, Flipkart, Zomato, Byju's",
      roles: "HRBP, Talent Acquisition Lead, People Analytics Manager, Culture Lead",
      salary: "₹8-80 LPA",
      benefits: "Innovation culture, global exposure, stock options, flexible work, cutting-edge HR practices"
    },
    { 
      sector: "Banking & Financial Services",
      companies: "HDFC, ICICI, SBI, Kotak, NPCI, Paytm, PhonePe, Razorpay, Zerodha",
      roles: "VP HR, Talent Manager, Learning Head, Employee Relations Manager",
      salary: "₹6-60 LPA",
      benefits: "Stable industry, structured career paths, comprehensive benefits, regulatory expertise"
    },
    { 
      sector: "Manufacturing & Automotive",
      companies: "Tata Motors, Mahindra, Bajaj, Maruti Suzuki, L&T, Reliance Industries, JSW",
      roles: "Plant HR Manager, Industrial Relations Head, Safety Manager, Talent Development Lead",
      salary: "₹5-45 LPA",
      benefits: "Industrial exposure, union relations experience, safety focus, diverse locations"
    },
    { 
      sector: "Consulting Firms",
      companies: "Deloitte, PwC, EY, KPMG, McKinsey, BCG, Accenture, Capgemini",
      roles: "HR Consultant, People Advisory, Change Management Lead, Organizational Development",
      salary: "₹8-70 LPA",
      benefits: "Client exposure, diverse projects, strategic thinking, global opportunities, premium brands"
    },
    { 
      sector: "Healthcare & Pharmaceuticals",
      companies: "Apollo Hospitals, Fortis, Dr. Reddy's, Cipla, Sun Pharma, Biocon, Narayana Health",
      roles: "HR Manager, Medical Affairs HR, Clinical Research HR, Healthcare Talent Lead",
      salary: "₹4-50 LPA",
      benefits: "Healthcare industry expertise, regulatory knowledge, social impact, specialized roles"
    },
    { 
      sector: "Startups & Unicorns",
      companies: "Ola, Swiggy, Razorpay, CRED, Meesho, Unacademy, Vedantu, Nykaa",
      roles: "People Operations Manager, Culture Lead, Talent Partner, Employee Experience Manager",
      salary: "₹6-1.2 Cr (with equity)",
      benefits: "Equity participation, fast-paced environment, innovation, leadership opportunities, impact"
    }
  ];

  const careerProgression = [
    { level: "HR Executive/Coordinator", experience: "0-2 years", salary: "₹2.5-6 LPA", focus: "Basic HR operations, recruitment support, employee records, policy implementation" },
    { level: "HR Manager/Senior Executive", experience: "2-6 years", salary: "₹4-18 LPA", focus: "Department management, recruitment ownership, employee relations, process improvement" },
    { level: "Assistant General Manager HR", experience: "6-10 years", salary: "₹12-35 LPA", focus: "Strategic HR initiatives, team leadership, business partnering, organizational development" },
    { level: "General Manager/HR Head", experience: "10-15 years", salary: "₹25-65 LPA", focus: "HR strategy, leadership development, culture transformation, business alignment" },
    { level: "Vice President HR/CHRO", experience: "15-20 years", salary: "₹50-1.5 Cr", focus: "Executive leadership, board interaction, organizational strategy, talent philosophy" },
    { level: "Chief People Officer/Consultant", experience: "20+ years", salary: "₹80 LPA-3 Cr", focus: "Enterprise transformation, board advisory, independent consulting, industry thought leadership" }
  ];

  const topColleges = [
    { name: "XLRI Jamshedpur", courses: "PGDM HRM, Executive Programs", ranking: "Premier HR School", fees: "₹25 LPA", placements: "Top corporate HR roles" },
    { name: "TISS Mumbai", courses: "MA HRM, M.Phil HR", ranking: "Top Social Sciences Institute", fees: "₹2 LPA", placements: "Excellent HR & development sector" },
    { name: "SCMHRD Pune", courses: "PGDM HRM", ranking: "Specialized HR Institute", fees: "₹19 LPA", placements: "Strong industry connections" },
    { name: "IIM Ahmedabad/Bangalore/Calcutta", courses: "MBA (HR specialization)", ranking: "Premier Management Schools", fees: "₹23-28 LPA", placements: "Leadership track positions" },
    { name: "MDI Gurgaon", courses: "PGPM (HR)", ranking: "Top Management Institute", fees: "₹21 LPA", placements: "Corporate HR leadership roles" },
    { name: "NMIMS Mumbai", courses: "MBA HR", ranking: "Reputed Private University", fees: "₹19 LPA", placements: "Good corporate placements" }
  ];

  const technicalSkills = [
    { 
      category: "HR Technology & Systems",
      skills: ["HRIS (SAP SuccessFactors, Workday)", "Applicant Tracking Systems", "People Analytics Tools", "Performance Management Systems", "Learning Management Systems", "Payroll Software"]
    },
    { 
      category: "Data Analytics & Reporting",
      skills: ["Excel Advanced Functions", "Power BI/Tableau", "Statistical Analysis", "Workforce Analytics", "Predictive Modeling", "Dashboard Creation"]
    },
    { 
      category: "Legal & Compliance",
      skills: ["Labor Laws Knowledge", "Employment Regulations", "Compliance Management", "Contract Management", "Policy Development", "Audit Management"]
    },
    { 
      category: "Strategic & Leadership Skills",
      skills: ["Change Management", "Organizational Design", "Strategic Planning", "Business Partnering", "Stakeholder Management", "Cultural Transformation"]
    }
  ];

  const salaryRanges = [
    { sector: "Technology Sector", fresher: "₹4-10 LPA", experienced: "₹12-45 LPA", senior: "₹35-1.2 Cr" },
    { sector: "Banking & Finance", fresher: "₹3-8 LPA", experienced: "₹8-35 LPA", senior: "₹25-80 LPA" },
    { sector: "Manufacturing", fresher: "₹3-7 LPA", experienced: "₹7-30 LPA", senior: "₹20-60 LPA" },
    { sector: "Consulting", fresher: "₹5-12 LPA", experienced: "₹15-50 LPA", senior: "₹40-1.5 Cr" },
    { sector: "Healthcare", fresher: "₹3-6 LPA", experienced: "₹6-25 LPA", senior: "₹18-50 LPA" },
    { sector: "Startups", fresher: "₹4-8 LPA", experienced: "₹10-40 LPA", senior: "₹30-2 Cr" },
    { sector: "Government/PSU", fresher: "₹3-6 LPA", experienced: "₹6-20 LPA", senior: "₹15-40 LPA" },
    { sector: "Independent Consulting", fresher: "₹3-8 LPA", experienced: "₹15-60 LPA", senior: "₹40-3 Cr" }
  ];

  const emergingTrends = [
    { 
      trend: "People Analytics & AI in HR",
      description: "Data-driven decision making and artificial intelligence applications in HR processes",
      opportunities: "People analytics specialist, AI-HR consultant, predictive workforce planning, automated recruitment",
      timeline: "Rapid adoption over next 2-4 years with immediate opportunities"
    },
    { 
      trend: "Remote Work & Digital Employee Experience",
      description: "Managing distributed teams and creating digital-first employee experiences",
      opportunities: "Remote work specialist, digital experience designer, virtual team management, online engagement",
      timeline: "Established trend with continued growth over 3-5 years"
    },
    { 
      trend: "Mental Health & Wellbeing Programs",
      description: "Employee mental health support and comprehensive wellbeing initiatives",
      opportunities: "Wellbeing program manager, mental health first aid, EAP coordinator, wellness consultant",
      timeline: "Growing importance with immediate implementation across organizations"
    },
    { 
      trend: "Diversity, Equity & Inclusion (DEI)",
      description: "Strategic focus on creating inclusive workplaces and diverse talent pipeline",
      opportunities: "DEI specialist, inclusion consultant, bias training facilitator, diverse talent acquisition",
      timeline: "Priority focus area with sustained growth over 5-10 years"
    },
    { 
      trend: "Gig Economy & Contingent Workforce",
      description: "Managing freelance, contract, and project-based workforce models",
      opportunities: "Gig workforce manager, contractor relations, project-based HR, flexible talent solutions",
      timeline: "Expanding rapidly with 3-7 year growth trajectory"
    },
    { 
      trend: "Skills-Based Hiring & Internal Mobility",
      description: "Focus on skills over degrees and internal talent marketplace development",
      opportunities: "Skills assessment specialist, internal mobility consultant, career pathing expert, talent marketplace",
      timeline: "Growing adoption with 2-5 year implementation timelines"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "SHRM Certified Professional (SHRM-CP)",
      provider: "Society for Human Resource Management",
      duration: "6-12 months preparation",
      cost: "$300-500",
      description: "Global standard HR certification covering all HR competencies and practices"
    },
    { 
      cert: "Professional in Human Resources (PHR)",
      provider: "HR Certification Institute",
      duration: "4-8 months preparation",
      cost: "$395-495",
      description: "Comprehensive HR certification focusing on program implementation and operations"
    },
    { 
      cert: "Certified Compensation Professional (CCP)",
      provider: "WorldatWork",
      duration: "6-18 months",
      cost: "$1,200-2,000",
      description: "Specialized certification in compensation design and management"
    },
    { 
      cert: "People Analytics Certification",
      provider: "Various providers (Wharton, AIHR)",
      duration: "3-6 months",
      cost: "$500-2,500",
      description: "Certification in HR data analytics and people metrics"
    },
    { 
      cert: "Certified Change Management Professional",
      provider: "ACMP, Prosci",
      duration: "3-6 months",
      cost: "$2,000-4,000",
      description: "Change management methodology and implementation certification"
    }
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "HR Consulting & Advisory",
      investment: "₹3-25 lakhs",
      description: "Provide HR strategy, policy development, and organizational consulting services",
      potential: "High demand from SMEs and growing companies needing HR expertise"
    },
    { 
      business: "Talent Acquisition & Staffing",
      investment: "₹5-50 lakhs",
      description: "Executive search, recruitment process outsourcing, and specialized staffing services",
      potential: "Strong market with skills shortage and competitive talent landscape"
    },
    { 
      business: "Learning & Development Solutions",
      investment: "₹8-75 lakhs",
      description: "Corporate training, e-learning platforms, and skill development programs",
      potential: "Growing market with upskilling needs and digital learning adoption"
    },
    { 
      business: "HR Technology Solutions",
      investment: "₹10 lakhs-2 crores",
      description: "Develop HRIS, recruitment software, or HR analytics platforms",
      potential: "High growth potential with digital transformation in HR"
    },
    { 
      business: "Employee Wellness & Engagement",
      investment: "₹5-40 lakhs",
      description: "Wellness programs, engagement surveys, and employee experience consulting",
      potential: "Expanding market with focus on employee wellbeing and retention"
    },
    { 
      business: "Diversity & Inclusion Consulting",
      investment: "₹3-20 lakhs",
      description: "DEI strategy, bias training, inclusive hiring, and culture transformation services",
      potential: "Growing demand with corporate focus on diversity and inclusion"
    }
  ];

  const preparationTips = [
    "Develop strong interpersonal and communication skills for effective people management",
    "Gain practical experience through HR internships and projects in different functional areas",
    "Learn labor laws and employment regulations relevant to your region and industry",
    "Build analytical skills for data-driven HR decision making and people analytics",
    "Develop business acumen to understand how HR contributes to organizational success",
    "Stay updated with HR technology trends and digital transformation in people management",
    "Practice conflict resolution and negotiation skills for employee relations challenges",
    "Network with HR professionals through SHRM, NHRD, and industry associations",
    "Gain cross-functional experience to understand business operations and challenges",
    "Focus on developing emotional intelligence and empathy for effective people leadership"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaUsers className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              HR Manager
              <span className="text-purple-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Shape People & Organizations - Complete guide to building a successful career in Human Resources Management
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About HR Management Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About HR Management Career</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Human Resources Management focuses on maximizing employee performance and organizational effectiveness through strategic people management. HR managers handle recruitment, training, employee relations, compensation, compliance, and organizational development while ensuring alignment with business objectives and employee satisfaction.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With evolving workplace dynamics, remote work trends, and emphasis on employee experience, HR professionals play crucial roles in talent acquisition, culture building, digital transformation, and strategic business partnering across all industries and organizational sizes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose HR Management?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Direct impact on people and culture
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Strategic business partnership
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Diverse specialization opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Cross-industry applicability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Leadership development pathway
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Growing importance in organizations
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
              <FaClipboardCheck className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Requirements & Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-purple-600 mx-auto mb-4" />
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
              <FaGraduationCap className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Education & Learning Path</h2>
            </div>
            <div className="space-y-6">
              {educationPath.map((education, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{education.level}</h3>
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">{education.duration}</span>
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
              <FaBuilding className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top HR Management Institutions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
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
              <FaUsersCog className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">HR Specializations</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {hrSpecializations.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
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
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
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
              <h2 className="text-3xl font-bold text-gray-800">Essential HR Skills</h2>
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
                  <FaUsers className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape People & Organizations?</h2>
            <p className="text-xl mb-8 text-purple-100">Start your journey in HR Management and build a rewarding people leadership career!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center">
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
