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
  FaLightbulb,
  FaHeadset,
  FaEye,
  FaBroadcastTower,
  FaFlag,
  FaMedal,
  FaRunning,
  FaBullseye,
  FaFistRaised,
  FaStar,
  FaCompass,
  FaHelicopter,
  FaAnchor,
  FaGavel,
  FaLaptopCode,
  FaChartBar,
  FaHandshake,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaProjectDiagram,
  FaSync,
  FaLayerGroup,
  FaSearch,
  FaPalette,
  FaServer,
  FaCloud,
  FaShoppingCart,
  FaGlobe,
  FaBuilding,
  FaCalculator,
  FaPercent,
  FaBullhorn,
  FaRocket,
  FaUniversity,
  FaCoins,
  FaPiggyBank,
  FaBalanceScale,
  FaRegHandshake,
  FaRegChartBar,
  FaRegClock,
  FaRegUser,
  FaLandmark
} from 'react-icons/fa';

export default function InvestmentBankerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's in Finance, Economics, Business, or Engineering" },
    { icon: FaGraduationCap, title: "MBA/CFA", detail: "MBA from top B-school or CFA certification preferred" },
    { icon: FaCalculator, title: "Skills", detail: "Strong analytical and quantitative skills" },
    { icon: FaUsers, title: "Communication", detail: "Excellent presentation and client interaction skills" }
  ];

  const skillsRequired = [
    { 
      category: "Technical Skills", 
      skills: ["Financial Modeling", "Valuation Methods", "Excel/VBA", "Bloomberg Terminal", "Pitch Book Creation", "Due Diligence"],
      icon: FaCalculator,
      color: "blue"
    },
    { 
      category: "Analytical Skills", 
      skills: ["Market Analysis", "Risk Assessment", "Industry Research", "Competitive Analysis", "Financial Statement Analysis", "DCF Modeling"],
      icon: FaChartBar,
      color: "green"
    },
    { 
      category: "Soft Skills", 
      skills: ["Client Management", "Presentation Skills", "Negotiation", "Team Leadership", "Time Management", "Stress Management"],
      icon: FaHandshake,
      color: "purple"
    }
  ];

  const careerHierarchy = [
    { position: "Investment Banking Analyst", years: "0-3 years", salary: "₹15-25 LPA", level: "Entry Level" },
    { position: "Investment Banking Associate", years: "3-6 years", salary: "₹25-50 LPA", level: "Mid Level" },
    { position: "Vice President (VP)", years: "6-10 years", salary: "₹50-1 Cr", level: "Senior Level" },
    { position: "Director/Principal", years: "10-15 years", salary: "₹1-2 Cr", level: "Leadership" },
    { position: "Managing Director (MD)", years: "15-20 years", salary: "₹2-5 Cr", level: "Executive" },
    { position: "Senior MD/Partner", years: "20+ years", salary: "₹5-10+ Cr", level: "Senior Executive" }
  ];

  const keyResponsibilities = [
    "Financial Modeling and Valuation Analysis",
    "Merger & Acquisition Advisory", 
    "Capital Raising and IPO Management",
    "Client Relationship Management",
    "Market Research and Industry Analysis",
    "Pitch Book and Presentation Creation",
    "Due Diligence and Risk Assessment",
    "Deal Structuring and Negotiation",
    "Regulatory Compliance and Documentation",
    "Cross-border Transaction Advisory"
  ];

  const investmentBankingAreas = [
    { area: "Mergers & Acquisitions (M&A)", description: "Advisory services for company mergers, acquisitions, and divestitures", focus: "Deal structuring, valuation, negotiation" },
    { area: "Capital Markets", description: "Equity and debt capital raising, IPOs, bond issuances", focus: "Public offerings, private placements" },
    { area: "Corporate Finance", description: "Strategic financial advisory and restructuring services", focus: "Capital structure optimization" },
    { area: "Sales & Trading", description: "Market making, proprietary trading, client execution", focus: "Fixed income, equities, derivatives" },
    { area: "Research", description: "Equity research, credit research, economic analysis", focus: "Investment recommendations, market insights" },
    { area: "Private Equity", description: "Buyout funds, growth capital, venture capital", focus: "Direct investment, portfolio management" }
  ];

  const topInvestmentBanks = [
    "Goldman Sachs", "Morgan Stanley", "J.P. Morgan", "Citigroup", "Bank of America", "Barclays",
    "Deutsche Bank", "Credit Suisse", "UBS", "HSBC", "Kotak Mahindra", "Axis Capital",
    "ICICI Securities", "HDFC Bank", "SBI Capital Markets", "Edelweiss Financial",
    "JM Financial", "Motilal Oswal", "IIFL Capital", "Yes Securities", "Ambit Capital", "Avendus Capital"
  ];

  const educationPath = [
    { level: "Undergraduate", duration: "3-4 years", focus: "Finance, Economics, Business, Engineering, Mathematics", institutions: "IITs, IIMs, ISB, Delhi School of Economics, St. Stephen's" },
    { level: "MBA/PGDM", duration: "2 years", focus: "Finance specialization, Investment Banking courses", institutions: "IIM A/B/C, ISB, XLRI, FMS, JBIMS, MDI" },
    { level: "Professional Certifications", duration: "6 months - 2 years", focus: "CFA, FRM, CAIA, Investment Banking certifications", institutions: "CFA Institute, GARP, Online platforms" },
    { level: "Internships", duration: "2-6 months", focus: "Summer internships at investment banks, financial institutions", institutions: "Bulge bracket banks, boutique firms, corporate finance roles" }
  ];

  const industryFocus = [
    { sector: "Technology & TMT", companies: "Tech startups, telecom, media companies", deals: "IPOs, M&A, growth capital" },
    { sector: "Healthcare & Pharma", companies: "Pharmaceutical, biotech, healthcare services", deals: "Drug development funding, consolidation" },
    { sector: "Financial Services", companies: "Banks, insurance, fintech, NBFCs", deals: "Capital raising, regulatory compliance" },
    { sector: "Infrastructure & Real Estate", companies: "Construction, real estate, utilities", deals: "Project financing, REITs" },
    { sector: "Consumer & Retail", companies: "FMCG, retail chains, e-commerce", deals: "Brand acquisitions, expansion funding" },
    { sector: "Energy & Resources", companies: "Oil & gas, renewable energy, mining", deals: "Project finance, commodity trading" }
  ];

  const compensationStructure = [
    { component: "Base Salary", description: "Fixed annual compensation", range: "₹8-25 LPA (Analyst), ₹15-50 LPA (Associate)" },
    { component: "Performance Bonus", description: "Variable compensation based on individual/team performance", range: "50-150% of base salary" },
    { component: "Signing Bonus", description: "One-time payment for joining (experienced hires)", range: "₹2-10 LPA" },
    { component: "Retention Bonus", description: "Long-term incentive to retain talent", range: "₹5-25 LPA (deferred)" },
    { component: "Carried Interest", description: "Profit sharing in private equity/hedge funds", range: "1-20% of fund profits (senior levels)" }
  ];

  const workEnvironment = [
    { aspect: "Work Hours", reality: "80-100+ hours per week, especially during deal seasons" },
    { aspect: "Travel Requirements", reality: "Frequent client meetings, due diligence, roadshows" },
    { aspect: "Team Structure", reality: "Hierarchical teams with clear reporting structures" },
    { aspect: "Pressure Level", reality: "High-stress environment with tight deadlines" },
    { aspect: "Learning Curve", reality: "Steep learning curve with extensive on-the-job training" },
    { aspect: "Exit Opportunities", reality: "Private equity, hedge funds, corporate finance, consulting" }
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-100 mt-[100px] sm:mt-0 overflow-x-hidden">
      {/* Mobile spacing fix */}
      <div className="block lg:hidden h-4"></div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-blue-900 text-white py-20 w-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <FaChartLine className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to 
              <span className="text-green-300"> Investment Banking Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to becoming a successful Investment Banker in top financial institutions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* What is Investment Banking Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Investment Banking?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Investment Banking is a specialized division of banking that helps individuals, corporations, and governments raise capital by underwriting and issuing securities. Investment bankers act as intermediaries between companies seeking funds and investors looking for opportunities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  They provide advisory services for mergers and acquisitions, restructuring, and other complex financial transactions. Investment bankers combine financial expertise, market knowledge, and relationship management to create value for clients.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Functions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Capital raising and securities underwriting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Mergers & acquisitions advisory
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Financial restructuring and optimization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Market research and valuation analysis
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Risk management and compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Entry Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entry Requirements</h2>
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
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Academic Excellence Required</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">GPA:</span> Top 10-20% of class, typically 3.5+ GPA
                </div>
                <div className="text-black">
                  <span className="font-medium">Institutions:</span> Premium colleges (IITs, IIMs, top universities)
                </div>
                <div className="text-black">
                  <span className="font-medium">Certifications:</span> CFA, FRM, or similar finance certifications
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {skillsRequired.map((skillSet, index) => (
                <div key={index} className={`bg-gradient-to-br from-${skillSet.color}-50 to-${skillSet.color}-100 rounded-xl p-6 border border-${skillSet.color}-200`}>
                  <div className="flex items-center mb-4">
                    <skillSet.icon className={`text-3xl text-${skillSet.color}-600 mr-3`} />
                    <h3 className="text-xl font-bold text-gray-800">{skillSet.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <FaCheckCircle className={`text-${skillSet.color}-500 mr-2 text-sm`} />
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Responsibilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyResponsibilities.map((responsibility, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{responsibility}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Banking Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLayerGroup className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Investment Banking Divisions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {investmentBankingAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{area.area}</h3>
                  <p className="text-gray-600 mb-3">{area.description}</p>
                  <div className="text-sm text-teal-700 font-medium">
                    <span className="font-semibold">Focus: </span>{area.focus}
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
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Path</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{career.position}</h3>
                      <p className="text-gray-600 mt-1">Financial advisory and deal execution responsibilities</p>
                    </div>
                    <div className="flex items-center space-x-8 text-right">
                      <div>
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-semibold text-gray-800">{career.years}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Total Compensation</div>
                        <div className="font-bold text-indigo-700">{career.salary}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Level</div>
                        <div className="font-medium text-blue-600">{career.level}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Educational Pathway</h2>
            </div>
            <div className="space-y-6">
              {educationPath.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.level}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{phase.focus}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{phase.institutions}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Sectors</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {industryFocus.map((industry, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{industry.sector}</h3>
                  <p className="text-gray-600 mb-3">{industry.companies}</p>
                  <div className="text-sm text-emerald-700 font-medium">
                    <span className="font-semibold">Key Deals: </span>{industry.deals}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Investment Banks */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFlag className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Investment Banks</h2>
            </div>
            <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-3">
              {topInvestmentBanks.map((bank, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-3 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center">
                    <span className="text-gray-800 text-sm font-medium text-center">{bank}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compensation Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Compensation Structure</h2>
            </div>
            <div className="space-y-4">
              {compensationStructure.map((comp, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800">{comp.component}</h3>
                      <p className="text-gray-600 mt-1">{comp.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-yellow-700">{comp.range}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Environment */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-gray-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Work Environment Reality</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workEnvironment.map((work, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{work.aspect}</h3>
                  <p className="text-gray-700">{work.reality}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaMedal className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to Investment Banking Success</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaCalculator className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Financial Expertise</h3>
                <p className="text-green-100">Master financial modeling, valuation, and analysis techniques</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Relationship Building</h3>
                <p className="text-green-100">Develop strong client relationships and professional networks</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaRegClock className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Work Ethic</h3>
                <p className="text-green-100">Demonstrate exceptional dedication and ability to handle pressure</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaLightbulb className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Market Knowledge</h3>
                <p className="text-green-100">Stay updated with market trends and industry developments</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
