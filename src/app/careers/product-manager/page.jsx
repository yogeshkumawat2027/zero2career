import Link from 'next/link';
import React from 'react';
import { 
  FaRocket, 
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
  FaGlobe
} from 'react-icons/fa';

export default function ProductManagerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's degree in any field (MBA preferred)" },
    { icon: FaGraduationCap, title: "Experience", detail: "2-5 years in tech, business, or related field" },
    { icon: FaLightbulb, title: "Skills", detail: "Analytical thinking and problem-solving" },
    { icon: FaUsers, title: "Leadership", detail: "Team management and cross-functional collaboration" }
  ];

  const skillsRequired = [
    { 
      category: "Technical Skills", 
      skills: ["Data Analysis", "SQL/Analytics Tools", "UX/UI Understanding", "Agile/Scrum", "A/B Testing", "Product Analytics"],
      icon: FaLaptopCode,
      color: "blue"
    },
    { 
      category: "Business Skills", 
      skills: ["Market Research", "Strategy Development", "Financial Analysis", "Competitive Analysis", "Go-to-Market", "Revenue Optimization"],
      icon: FaChartBar,
      color: "green"
    },
    { 
      category: "Soft Skills", 
      skills: ["Communication", "Leadership", "Stakeholder Management", "Problem Solving", "Critical Thinking", "Negotiation"],
      icon: FaHandshake,
      color: "purple"
    }
  ];

  const careerHierarchy = [
    { position: "Associate Product Manager (APM)", years: "0-2 years", salary: "₹8-15 LPA", level: "Entry Level" },
    { position: "Product Manager (PM)", years: "2-5 years", salary: "₹15-30 LPA", level: "Mid Level" },
    { position: "Senior Product Manager", years: "5-8 years", salary: "₹30-50 LPA", level: "Senior Level" },
    { position: "Principal Product Manager", years: "8-12 years", salary: "₹50-80 LPA", level: "Leadership" },
    { position: "Group Product Manager", years: "10-15 years", salary: "₹80-1.2 Cr", level: "Executive" },
    { position: "Director of Product", years: "12-18 years", salary: "₹1.2-2 Cr", level: "Director" },
    { position: "VP of Product", years: "15-20 years", salary: "₹2-3 Cr", level: "Vice President" },
    { position: "Chief Product Officer (CPO)", years: "20+ years", salary: "₹3-5+ Cr", level: "C-Level Executive" }
  ];

  const keyResponsibilities = [
    "Product Strategy & Vision Development",
    "Market Research & Competitive Analysis", 
    "User Experience & Design Collaboration",
    "Technical Requirements Documentation",
    "Cross-functional Team Leadership",
    "Data Analytics & Performance Metrics",
    "Go-to-Market Strategy & Launch",
    "Stakeholder Communication & Reporting",
    "Product Roadmap Planning",
    "User Feedback & Research Analysis"
  ];

  const productTypes = [
    { type: "Consumer Products", description: "B2C apps, e-commerce, social media platforms", companies: "Meta, Google, Amazon, Flipkart" },
    { type: "Enterprise Products", description: "B2B software, SaaS platforms, enterprise solutions", companies: "Microsoft, Salesforce, Oracle, SAP" },
    { type: "Fintech Products", description: "Digital payments, banking, investment platforms", companies: "Paytm, PhonePe, Razorpay, Zerodha" },
    { type: "EdTech Products", description: "Learning platforms, educational apps, skill development", companies: "BYJU'S, Unacademy, Coursera, Udemy" },
    { type: "HealthTech Products", description: "Digital health, telemedicine, fitness apps", companies: "1mg, Practo, HealthifyMe, Cult.fit" },
    { type: "Gaming Products", description: "Mobile games, gaming platforms, esports", companies: "Dream11, MPL, Krafton, Supercell" }
  ];

  const topCompanies = [
    "Google", "Microsoft", "Amazon", "Meta (Facebook)", "Apple", "Netflix", 
    "Uber", "Airbnb", "Spotify", "Adobe", "Salesforce", "LinkedIn",
    "Flipkart", "Zomato", "Swiggy", "Ola", "Paytm", "PhonePe",
    "BYJU'S", "Unacademy", "Razorpay", "Freshworks", "InMobi", "Nykaa"
  ];

  const learningPath = [
    { phase: "Foundation", duration: "3-6 months", topics: "Product fundamentals, market research, basic analytics", focus: "Understanding product lifecycle and user needs" },
    { phase: "Core Skills", duration: "6-12 months", topics: "Data analysis, UX/UI basics, agile methodology", focus: "Developing analytical and technical competencies" },
    { phase: "Leadership", duration: "12-18 months", topics: "Strategy development, team management, stakeholder communication", focus: "Building leadership and strategic thinking" },
    { phase: "Specialization", duration: "18+ months", topics: "Industry expertise, advanced analytics, innovation management", focus: "Domain mastery and thought leadership" }
  ];

  const productTools = [
    { category: "Analytics", tools: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar", "Tableau"] },
    { category: "Design", tools: ["Figma", "Sketch", "Adobe XD", "InVision", "Miro"] },
    { category: "Project Management", tools: ["Jira", "Asana", "Trello", "Monday.com", "Notion"] },
    { category: "Communication", tools: ["Slack", "Microsoft Teams", "Zoom", "Confluence", "Loom"] },
    { category: "Development", tools: ["GitHub", "Postman", "Firebase", "AWS", "Docker"] }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaRocket className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to 
              <span className="text-blue-300"> Product Management Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to becoming a successful Product Manager in top tech companies
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Product Management Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Product Management?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Product Management is the practice of strategically driving the development, market launch, and continual support and improvement of a company's products. Product Managers act as the bridge between business, technology, and user experience teams.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  They are responsible for identifying customer needs, defining product vision, and guiding the product through its entire lifecycle from conception to launch and beyond. PMs work at the intersection of business, technology, and user experience.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Define product strategy and roadmap
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Conduct market research and user analysis
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Collaborate with engineering and design teams
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Analyze product metrics and performance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Manage stakeholder relationships
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
              <FaClipboardCheck className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entry Requirements</h2>
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
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Alternative Entry Paths</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Fresh Graduate:</span> APM programs at top companies
                </div>
                <div className="text-black">
                  <span className="font-medium">Career Switch:</span> From engineering, consulting, or business roles
                </div>
                <div className="text-black">
                  <span className="font-medium">Internal Transfer:</span> From other roles within tech companies
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-green-600 mr-4" />
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

        {/* Product Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLayerGroup className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Product Categories</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {productTypes.map((product, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{product.type}</h3>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <div className="text-sm text-teal-700 font-medium">
                    <span className="font-semibold">Companies: </span>{product.companies}
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
                      <p className="text-gray-600 mt-1">Strategic product leadership and cross-functional collaboration</p>
                    </div>
                    <div className="flex items-center space-x-8 text-right">
                      <div>
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-semibold text-gray-800">{career.years}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Salary Range</div>
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

        {/* Learning Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Product Management Learning Path</h2>
            </div>
            <div className="space-y-6">
              {learningPath.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{phase.topics}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{phase.focus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Companies */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFlag className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Hiring Companies</h2>
            </div>
            <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-3">
              {topCompanies.map((company, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center">
                    <span className="text-gray-800 text-sm font-medium text-center">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Tools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-gray-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Product Tools</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {productTools.map((toolSet, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{toolSet.category}</h3>
                  <div className="space-y-2">
                    {toolSet.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-sm text-gray-700 bg-white rounded p-2 border">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaMedal className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to Product Management Success</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">User-Centric Mindset</h3>
                <p className="text-blue-100">Always prioritize user needs and feedback in decisions</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaChartBar className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Data-Driven Approach</h3>
                <p className="text-blue-100">Use analytics and metrics to guide product decisions</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaHandshake className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Cross-Team Collaboration</h3>
                <p className="text-blue-100">Build strong relationships with engineering, design, and business teams</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaLightbulb className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="text-blue-100">Stay updated with industry trends and emerging technologies</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
