import Link from 'next/link';
import React from 'react';
import { 
  FaChartLine, 
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
  FaPiggyBank
} from 'react-icons/fa';

export default function FinancialAnalystPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's in Finance/Economics/Commerce/MBA" },
    { icon: FaGraduationCap, title: "Skills", detail: "Analytical, Mathematical, Excel proficiency" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 25+ years based on role" },
    { icon: FaShieldAlt, title: "Certification", detail: "CFA, FRM, CA certifications preferred" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "B.Com, BBA Finance, Economics, Mathematics, Engineering",
      focus: "Financial accounting, economics, statistics, mathematics, business fundamentals",
      cost: "₹50,000-8 LPA (government to private colleges)",
      outcomes: "Junior analyst, financial associate, entry-level banking positions"
    },
    { 
      level: "Master's Degree",
      duration: "2 years",
      program: "MBA Finance, M.Com, MS Finance, CFA Program",
      focus: "Advanced finance, investment analysis, corporate finance, financial modeling",
      cost: "₹2-25 LPA for MBA programs",
      outcomes: "Financial analyst, investment banker, portfolio manager, senior roles"
    },
    { 
      level: "Professional Certifications",
      duration: "1-4 years",
      program: "CFA, FRM, CA, CPA, CAIA certifications",
      focus: "Specialized finance knowledge, ethical standards, practical applications",
      cost: "₹50,000-5 LPA per certification",
      outcomes: "Career advancement, salary increment, global recognition, specialization"
    },
    { 
      level: "Specialized Programs",
      duration: "6 months - 2 years",
      program: "Financial modeling, data analytics, fintech courses",
      focus: "Technical skills, software proficiency, emerging finance technologies",
      cost: "₹25,000-3 LPA for specialized programs",
      outcomes: "Technical expertise, competitive advantage, niche specialization"
    }
  ];

  const specializationAreas = [
    { 
      area: "Investment Analysis",
      description: "Evaluate investment opportunities, analyze securities, and make recommendations",
      applications: "Equity research, fixed income analysis, mutual funds, portfolio management",
      jobRoles: "Equity Research Analyst, Investment Analyst, Portfolio Manager",
      growth: "Strong growth with expanding capital markets"
    },
    { 
      area: "Corporate Finance",
      description: "Manage company finances, budgeting, financial planning, and capital structure",
      applications: "Financial planning, budgeting, M&A analysis, capital raising, treasury",
      jobRoles: "Corporate Financial Analyst, Financial Planner, Treasury Analyst",
      growth: "Stable demand across all industries"
    },
    { 
      area: "Risk Management",
      description: "Identify, assess, and mitigate financial risks across organizations",
      applications: "Credit risk, market risk, operational risk, regulatory compliance",
      jobRoles: "Risk Analyst, Credit Analyst, Compliance Officer, Risk Manager",
      growth: "Increasing importance with regulatory focus"
    },
    { 
      area: "Banking & Credit Analysis",
      description: "Analyze creditworthiness, loan portfolios, and banking operations",
      applications: "Credit underwriting, loan analysis, banking operations, financial services",
      jobRoles: "Credit Analyst, Banking Analyst, Loan Officer, Relationship Manager",
      growth: "Growing with financial sector expansion"
    },
    { 
      area: "Financial Planning & Wealth Management",
      description: "Provide financial advice and wealth management services to clients",
      applications: "Personal finance, retirement planning, tax planning, investment advisory",
      jobRoles: "Financial Advisor, Wealth Manager, Financial Planner, Investment Consultant",
      growth: "High growth with increasing wealth and awareness"
    },
    { 
      area: "Quantitative Finance & Fintech",
      description: "Apply mathematical models and technology to financial problems",
      applications: "Algorithmic trading, financial modeling, fintech solutions, robo-advisory",
      jobRoles: "Quantitative Analyst, Financial Engineer, Fintech Analyst, Data Scientist",
      growth: "Rapidly growing with technology adoption"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Investment Banking & Capital Markets",
      companies: "Goldman Sachs, Morgan Stanley, JP Morgan, Citi, Barclays, UBS, Kotak Mahindra",
      roles: "Investment Banking Analyst, Research Analyst, Sales & Trading, Equity Research",
      salary: "₹8-50 LPA",
      growth: "High growth with expanding capital markets and IPO activity"
    },
    { 
      sector: "Asset Management & Mutual Funds",
      companies: "HDFC AMC, SBI Mutual Fund, ICICI Prudential, Aditya Birla, DSP, Franklin Templeton",
      roles: "Portfolio Manager, Fund Manager, Research Analyst, Product Manager",
      salary: "₹6-40 LPA",
      growth: "Strong growth with increasing retail investment participation"
    },
    { 
      sector: "Commercial Banking",
      companies: "SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Bank, Yes Bank, IndusInd",
      roles: "Credit Analyst, Relationship Manager, Corporate Banking, Treasury Operations",
      salary: "₹4-25 LPA",
      growth: "Steady growth with banking sector digitalization"
    },
    { 
      sector: "Insurance & Risk Management",
      companies: "LIC, HDFC Life, ICICI Prudential Life, SBI Life, Bajaj Allianz, New India Assurance",
      roles: "Actuarial Analyst, Risk Manager, Underwriter, Investment Manager",
      salary: "₹5-30 LPA",
      growth: "Growing with insurance penetration and regulatory changes"
    },
    { 
      sector: "Corporate Finance & Consulting",
      companies: "Deloitte, PwC, EY, KPMG, McKinsey, BCG, Bain, TCS, Infosys",
      roles: "Financial Analyst, Management Consultant, Corporate Development, M&A Analyst",
      salary: "₹6-35 LPA",
      growth: "High demand for financial advisory and consulting services"
    },
    { 
      sector: "Fintech & Technology",
      companies: "Paytm, PhonePe, Razorpay, Zerodha, Groww, CRED, BharatPe, Pine Labs",
      roles: "Financial Analyst, Product Manager, Risk Analyst, Business Development",
      salary: "₹8-45 LPA",
      growth: "Rapidly expanding fintech ecosystem with innovation focus"
    }
  ];

  const jobProfiles = [
    { post: "Junior Financial Analyst", experience: "0-2 years", salary: "₹3-8 LPA", duties: "Financial modeling, data analysis, report preparation, supporting senior analysts" },
    { post: "Financial Analyst", experience: "2-5 years", salary: "₹6-15 LPA", duties: "Investment analysis, financial planning, budgeting, client presentations" },
    { post: "Senior Financial Analyst", experience: "5-8 years", salary: "₹12-25 LPA", duties: "Strategic analysis, team leadership, client management, complex modeling" },
    { post: "Associate Director/VP", experience: "8-12 years", salary: "₹20-50 LPA", duties: "Business development, portfolio management, strategic planning, team management" },
    { post: "Director/Managing Director", experience: "12-20 years", salary: "₹40-1.5 Cr", duties: "P&L responsibility, client relationships, strategic vision, organizational leadership" },
    { post: "Chief Financial Officer", experience: "20+ years", salary: "₹1-10 Cr", duties: "Financial strategy, corporate governance, investor relations, executive leadership" }
  ];

  const topColleges = [
    { name: "Indian Institutes of Management (IIMs)", courses: "MBA Finance, PGDM", ranking: "Top Tier", fees: "₹20-25 LPA", placements: "₹25-80 LPA average" },
    { name: "Indian School of Business (ISB)", courses: "MBA, Executive MBA", ranking: "Premier B-School", fees: "₹35-40 LPA", placements: "₹30-70 LPA average" },
    { name: "XLRI Jamshedpur", courses: "MBA Finance", ranking: "Top Private B-School", fees: "₹25 LPA", placements: "₹20-50 LPA average" },
    { name: "Shri Ram College of Commerce (SRCC)", courses: "B.Com (Hons), Economics", ranking: "Top Commerce College", fees: "₹50,000", placements: "₹8-25 LPA average" },
    { name: "St. Xavier's College Mumbai", courses: "B.Com, BMS, Economics", ranking: "Premier Commerce College", fees: "₹75,000", placements: "₹6-20 LPA average" },
    { name: "NARSEE MONJEE Institute of Management", courses: "MBA Finance, BBA Finance", ranking: "Top Private Institute", fees: "₹15-20 LPA", placements: "₹8-30 LPA average" }
  ];

  const technicalSkills = [
    { 
      category: "Core Financial Skills",
      skills: ["Financial Modeling", "Valuation Methods", "Financial Statement Analysis", "Investment Analysis", "Risk Assessment", "Portfolio Management"]
    },
    { 
      category: "Software & Tools",
      skills: ["Advanced Excel", "Bloomberg Terminal", "SQL & Databases", "Python/R", "Tableau/Power BI", "VBA Programming"]
    },
    { 
      category: "Analytical Tools",
      skills: ["Statistical Analysis", "Econometric Modeling", "Monte Carlo Simulation", "Scenario Analysis", "Sensitivity Analysis", "Regression Analysis"]
    },
    { 
      category: "Business Intelligence",
      skills: ["Data Visualization", "Business Intelligence Tools", "Financial Reporting", "Dashboard Creation", "KPI Development", "Performance Metrics"]
    }
  ];

  const careerProgression = [
    { level: "Analyst", experience: "0-3 years", salary: "₹3-10 LPA", focus: "Learning fundamentals, supporting analysis, building technical skills" },
    { level: "Senior Analyst", experience: "3-6 years", salary: "₹8-18 LPA", focus: "Independent analysis, client interaction, specialized expertise" },
    { level: "Associate/Assistant VP", experience: "6-10 years", salary: "₹15-30 LPA", focus: "Team leadership, business development, strategic analysis" },
    { level: "Vice President", experience: "10-15 years", salary: "₹25-60 LPA", focus: "P&L responsibility, client management, business strategy" },
    { level: "Senior VP/Director", experience: "15-20 years", salary: "₹50-1.5 Cr", focus: "Business unit leadership, strategic partnerships, organizational development" },
    { level: "Managing Director/CFO", experience: "20+ years", salary: "₹1-10 Cr", focus: "Executive leadership, corporate strategy, stakeholder management" }
  ];

  const emergingTrends = [
    { 
      trend: "ESG & Sustainable Finance",
      description: "Environmental, Social, and Governance factors in investment decisions",
      opportunities: "ESG analysis, sustainable investing, climate finance, impact investing",
      timeline: "Rapidly growing focus for next 5-10 years"
    },
    { 
      trend: "Fintech & Digital Finance",
      description: "Technology disruption in financial services and analysis",
      opportunities: "Digital banking, robo-advisory, blockchain analysis, cryptocurrency",
      timeline: "High growth with continuous innovation for next decade"
    },
    { 
      trend: "Data Science & AI in Finance",
      description: "Machine learning and artificial intelligence applications in finance",
      opportunities: "Algorithmic trading, predictive modeling, automated analysis, AI risk management",
      timeline: "Accelerating adoption over next 3-7 years"
    },
    { 
      trend: "Alternative Investments",
      description: "Non-traditional investment vehicles and asset classes",
      opportunities: "Private equity, hedge funds, real estate, commodities, digital assets",
      timeline: "Growing diversification trend for next 8-12 years"
    },
    { 
      trend: "Regulatory Technology (RegTech)",
      description: "Technology solutions for regulatory compliance and risk management",
      opportunities: "Compliance automation, regulatory reporting, risk monitoring, AML solutions",
      timeline: "Increasing regulatory focus for next 5-8 years"
    },
    { 
      trend: "Real-time Analytics & Decision Making",
      description: "Instant data processing and real-time financial analysis",
      opportunities: "Live dashboards, real-time risk monitoring, instant reporting, automated alerts",
      timeline: "Current trend with 2-5 year maturation"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "Chartered Financial Analyst (CFA)",
      provider: "CFA Institute",
      duration: "2-4 years (3 levels)",
      cost: "$2,500-4,000",
      description: "Global gold standard for investment analysis and portfolio management"
    },
    { 
      cert: "Financial Risk Manager (FRM)",
      provider: "Global Association of Risk Professionals",
      duration: "1-2 years (2 levels)",
      cost: "$1,500-2,500",
      description: "Leading certification for risk management professionals"
    },
    { 
      cert: "Chartered Accountant (CA)",
      provider: "Institute of Chartered Accountants of India",
      duration: "3-5 years",
      cost: "₹50,000-2 LPA",
      description: "Premier accounting and finance qualification in India"
    },
    { 
      cert: "Certified Public Accountant (CPA)",
      provider: "American Institute of CPAs",
      duration: "1-2 years",
      cost: "$3,000-4,000",
      description: "US-based accounting and finance certification with global recognition"
    },
    { 
      cert: "Investment Banking Certificate",
      provider: "Various institutes and universities",
      duration: "6 months - 1 year",
      cost: "₹50,000-3 LPA",
      description: "Specialized training in investment banking and capital markets"
    }
  ];

  const salaryRanges = [
    { sector: "Investment Banking", fresher: "₹8-15 LPA", experienced: "₹15-50 LPA", senior: "₹40-2 Crores" },
    { sector: "Asset Management", fresher: "₹6-12 LPA", experienced: "₹12-40 LPA", senior: "₹30-1.5 Crores" },
    { sector: "Commercial Banking", fresher: "₹4-9 LPA", experienced: "₹9-25 LPA", senior: "₹20-80 LPA" },
    { sector: "Insurance", fresher: "₹5-10 LPA", experienced: "₹10-30 LPA", senior: "₹25-1 Crore" },
    { sector: "Consulting", fresher: "₹6-14 LPA", experienced: "₹14-35 LPA", senior: "₹30-2 Crores" },
    { sector: "Fintech", fresher: "₹8-16 LPA", experienced: "₹16-45 LPA", senior: "₹35-3 Crores" },
    { sector: "Corporate Finance", fresher: "₹5-12 LPA", experienced: "₹12-30 LPA", senior: "₹25-1.5 Crores" },
    { sector: "Private Equity/VC", fresher: "₹10-20 LPA", experienced: "₹20-60 LPA", senior: "₹50-5 Crores" }
  ];

  const preparationTips = [
    "Build strong foundation in mathematics, statistics, and accounting principles",
    "Master advanced Excel skills including financial modeling and VBA programming",
    "Gain proficiency in financial databases like Bloomberg, Reuters, and Factset",
    "Develop analytical thinking and problem-solving capabilities through case studies",
    "Stay updated with financial markets, economic indicators, and industry trends",
    "Pursue relevant certifications like CFA, FRM, or specialized finance programs",
    "Build communication skills for presenting complex financial analysis clearly",
    "Gain practical experience through internships at financial institutions",
    "Develop programming skills in Python, R, or SQL for data analysis",
    "Network with finance professionals and join professional associations"
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Investment Advisory Services",
      investment: "₹5-25 lakhs",
      description: "Independent investment advice, portfolio management, and financial planning",
      potential: "Growing affluent population seeking professional financial advice"
    },
    { 
      business: "Fintech Startup",
      investment: "₹10 lakhs-5 crores",
      description: "Technology solutions for financial services, payments, or investing",
      potential: "High growth potential with digital adoption and regulatory support"
    },
    { 
      business: "Financial Consulting Firm",
      investment: "₹8-40 lakhs",
      description: "Corporate finance consulting, M&A advisory, and strategic planning",
      potential: "Strong demand from growing businesses and regulatory requirements"
    },
    { 
      business: "Alternative Investment Platform",
      investment: "₹25 lakhs-2 crores",
      description: "Platform for alternative investments like P2P lending, real estate, commodities",
      potential: "Emerging market with high returns and diversification demand"
    },
    { 
      business: "Financial Education & Training",
      investment: "₹5-30 lakhs",
      description: "Professional training, certification courses, and financial literacy programs",
      potential: "Growing awareness of financial planning and professional development needs"
    },
    { 
      business: "Risk Management Solutions",
      investment: "₹15-75 lakhs",
      description: "Risk assessment tools, compliance solutions, and regulatory technology",
      potential: "Increasing regulatory requirements and risk awareness across industries"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-green-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaChartLine className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Financial Analyst
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Master Financial Markets - Complete guide to building a successful career in Financial Analysis
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Financial Analysis Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Financial Analysis</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Financial Analysis involves evaluating businesses, projects, budgets, and financial transactions to determine their performance and suitability. Financial analysts study financial data, market trends, and economic conditions to provide insights for investment decisions, strategic planning, and risk management.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With the growth of financial markets, increasing complexity of business environments, and data-driven decision making, financial analysts play a crucial role in guiding organizations and individuals toward sound financial decisions and optimal resource allocation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Financial Analysis?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    High earning potential
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Diverse career opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Global job prospects
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Intellectual challenges
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Industry influence
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Continuous learning
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
              <h2 className="text-3xl font-bold text-gray-800">Top Finance & Business Schools</h2>
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
              <FaCalculator className="text-3xl text-red-600 mr-4" />
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
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fresher (0-3 years)</th>
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
                  <FaChartLine className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master Financial Markets?</h2>
            <p className="text-xl mb-8 text-blue-100">Start your journey in Financial Analysis and shape the future of finance!</p>
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
