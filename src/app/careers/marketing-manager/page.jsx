import Link from 'next/link';
import React from 'react';
import { 
  FaBullhorn, 
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
  FaGlobe,
  FaBuilding,
  FaCalculator,
  FaPercent,
  FaRocket,
  FaUniversity,
  FaCoins,
  FaPiggyBank,
  FaBalanceScale,
  FaRegHandshake,
  FaRegChartBar,
  FaRegClock,
  FaRegUser,
  FaLandmark,
  FaIndustry,
  FaWrench,
  FaHammer,
  FaMicrochip,
  FaOilCan,
  FaCar,
  FaPlane,
  FaShip,
  FaBolt,
  FaFire,
  FaThermometerHalf,
  FaAtom,
  FaCube,
  FaSlidersH,
  FaRuler,
  FaDesktop,
  FaPrint,
  FaHardHat,
  FaShareAlt,
  FaEnvelope,
  FaPhone,
  FaVideo,
  FaCamera,
  FaNewspaper,
  FaAd,
  FaMagic,
  FaChartPie,
  FaMousePointer,
  FaHashtag,
  FaThumbsUp,
  FaHeart,
  FaComment,
  FaShare,
  FaPlay,
  FaImage,
  FaPencilAlt,
  FaCrown,
  FaFunnelDollar
} from 'react-icons/fa';

export default function MarketingManagerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's in Marketing, Business, Communications, or related field" },
    { icon: FaGraduationCap, title: "Experience", detail: "2-5 years in marketing, advertising, or digital marketing" },
    { icon: FaLightbulb, title: "Creativity", detail: "Strong creative thinking and campaign development skills" },
    { icon: FaUsers, title: "Leadership", detail: "Team management and cross-functional collaboration abilities" }
  ];

  const skillsRequired = [
    { 
      category: "Digital Marketing", 
      skills: ["SEO/SEM", "Social Media Marketing", "Email Marketing", "Content Marketing", "PPC Advertising", "Marketing Analytics"],
      icon: FaLaptopCode,
      color: "blue"
    },
    { 
      category: "Creative Skills", 
      skills: ["Campaign Development", "Brand Management", "Copywriting", "Visual Design", "Video Marketing", "Storytelling"],
      icon: FaPalette,
      color: "green"
    },
    { 
      category: "Analytical Skills", 
      skills: ["Data Analysis", "Market Research", "Customer Segmentation", "ROI Analysis", "A/B Testing", "Performance Metrics"],
      icon: FaChartBar,
      color: "purple"
    }
  ];

  const careerHierarchy = [
    { position: "Marketing Executive/Associate", years: "0-2 years", salary: "₹3-8 LPA", level: "Entry Level" },
    { position: "Marketing Specialist", years: "2-4 years", salary: "₹8-15 LPA", level: "Specialist" },
    { position: "Marketing Manager", years: "4-7 years", salary: "₹15-30 LPA", level: "Manager" },
    { position: "Senior Marketing Manager", years: "7-10 years", salary: "₹30-50 LPA", level: "Senior Manager" },
    { position: "Marketing Director", years: "10-15 years", salary: "₹50-80 LPA", level: "Director" },
    { position: "VP of Marketing", years: "15-20 years", salary: "₹80 LPA - 1.5 Cr", level: "Vice President" },
    { position: "Chief Marketing Officer (CMO)", years: "20+ years", salary: "₹1.5-3+ Cr", level: "C-Level Executive" }
  ];

  const keyResponsibilities = [
    "Develop and execute comprehensive marketing strategies",
    "Manage digital marketing campaigns across multiple channels", 
    "Conduct market research and competitive analysis",
    "Oversee brand management and positioning",
    "Lead content creation and creative campaign development",
    "Analyze marketing metrics and ROI performance",
    "Manage marketing budgets and resource allocation",
    "Collaborate with sales, product, and design teams",
    "Supervise marketing team and external agencies",
    "Monitor industry trends and consumer behavior"
  ];

  const marketingChannels = [
    { channel: "Digital Marketing", description: "SEO, SEM, social media, email, content marketing", platforms: "Google, Facebook, Instagram, LinkedIn, YouTube" },
    { channel: "Content Marketing", description: "Blog posts, videos, infographics, podcasts", focus: "Brand awareness, thought leadership, engagement" },
    { channel: "Social Media Marketing", description: "Organic and paid social media campaigns", platforms: "Facebook, Instagram, Twitter, LinkedIn, TikTok" },
    { channel: "Email Marketing", description: "Newsletter campaigns, drip sequences, automation", tools: "Mailchimp, HubSpot, Constant Contact" },
    { channel: "Influencer Marketing", description: "Collaborations with influencers and brand ambassadors", focus: "Reach new audiences, build credibility" },
    { channel: "Traditional Marketing", description: "Print, radio, TV, outdoor advertising", focus: "Mass reach, brand awareness" }
  ];

  const topCompanies = [
    "Unilever", "Procter & Gamble", "Coca-Cola", "Pepsi", "Nestle", "L'Oreal",
    "Amazon", "Flipkart", "Google", "Facebook", "Microsoft", "Adobe",
    "Tata Consumer Products", "ITC", "Godrej", "Marico", "Dabur", "Britannia",
    "Zomato", "Swiggy", "Ola", "Uber", "Paytm", "PhonePe",
    "BYJU'S", "Unacademy", "Nykaa", "Myntra", "MakeMyTrip", "OYO"
  ];

  const marketingSpecializations = [
    { area: "Brand Marketing", focus: "Brand strategy, positioning, identity, campaigns", career: "Brand manager, creative director, marketing strategist" },
    { area: "Digital Marketing", focus: "Online campaigns, SEO/SEM, social media, analytics", career: "Digital marketing manager, growth hacker, performance marketer" },
    { area: "Product Marketing", focus: "Product launches, go-to-market strategy, positioning", career: "Product marketing manager, growth product manager" },
    { area: "Performance Marketing", focus: "ROI-driven campaigns, conversion optimization, data analysis", career: "Performance marketing manager, growth marketing lead" },
    { area: "Content Marketing", focus: "Content strategy, storytelling, editorial calendar", career: "Content marketing manager, content strategist, creative writer" },
    { area: "Market Research", focus: "Consumer insights, market analysis, trend identification", career: "Market research analyst, consumer insights manager" }
  ];

  const industryVerticals = [
    { industry: "FMCG & Consumer Goods", companies: "Unilever, P&G, ITC, Godrej", focus: "Mass marketing, brand building, retail partnerships" },
    { industry: "Technology & Software", companies: "Google, Microsoft, Adobe, Salesforce", focus: "Product marketing, demand generation, thought leadership" },
    { industry: "E-commerce & Retail", companies: "Amazon, Flipkart, Myntra, Nykaa", focus: "Performance marketing, customer acquisition, conversion optimization" },
    { industry: "Financial Services", companies: "HDFC Bank, ICICI, Paytm, PhonePe", focus: "Trust building, compliance marketing, customer education" },
    { industry: "Healthcare & Pharma", companies: "Apollo, Fortis, Dr. Reddy's, Cipla", focus: "Educational marketing, regulatory compliance, trust building" },
    { industry: "Entertainment & Media", companies: "Netflix, Disney, Zee, Sony", focus: "Content marketing, audience engagement, viral campaigns" }
  ];

  const marketingTools = [
    { category: "Analytics", tools: ["Google Analytics", "Adobe Analytics", "Mixpanel", "Hotjar", "SEMrush"] },
    { category: "Social Media", tools: ["Hootsuite", "Buffer", "Sprout Social", "Later", "Creator Studio"] },
    { category: "Email Marketing", tools: ["Mailchimp", "HubSpot", "Constant Contact", "SendGrid", "Campaign Monitor"] },
    { category: "Design", tools: ["Canva", "Adobe Creative Suite", "Figma", "Sketch", "InDesign"] },
    { category: "CRM & Automation", tools: ["HubSpot", "Salesforce", "Marketo", "Pardot", "ActiveCampaign"] },
    { category: "SEO & Content", tools: ["Ahrefs", "SEMrush", "Moz", "BuzzSumo", "CoSchedule"] }
  ];

  const campaignTypes = [
    { type: "Brand Awareness", objective: "Increase brand visibility and recognition", metrics: "Reach, impressions, brand recall" },
    { type: "Lead Generation", objective: "Acquire qualified leads for sales team", metrics: "Cost per lead, lead quality, conversion rate" },
    { type: "Customer Acquisition", objective: "Convert prospects into paying customers", metrics: "Customer acquisition cost, lifetime value" },
    { type: "Retention Marketing", objective: "Increase customer loyalty and repeat purchases", metrics: "Customer retention rate, repeat purchase rate" },
    { type: "Product Launch", objective: "Successfully introduce new products to market", metrics: "Adoption rate, market penetration, sales volume" },
    { type: "Seasonal Campaigns", objective: "Capitalize on seasonal trends and events", metrics: "Campaign ROI, seasonal sales lift" }
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-purple-100 mt-[100px] sm:mt-0 overflow-x-hidden">
      {/* Mobile spacing fix */}
      <div className="block lg:hidden h-4"></div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-900 to-purple-900 text-white py-20 w-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <FaBullhorn className="mx-auto text-6xl mb-6 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to 
              <span className="text-pink-300"> Marketing Manager Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to becoming a successful Marketing Manager in the digital age
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Marketing Management Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Marketing Management?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Marketing Management involves planning, executing, and overseeing marketing strategies to promote products or services, build brand awareness, and drive customer acquisition and retention. Marketing managers are responsible for understanding market dynamics, consumer behavior, and competitive landscapes to create impactful campaigns.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In today's digital-first world, marketing managers must excel at both traditional and digital marketing channels, leveraging data analytics, social media, content marketing, and emerging technologies to reach and engage target audiences effectively.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Functions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Strategic marketing planning and execution
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Brand management and positioning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Digital marketing and campaign optimization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Market research and consumer insights
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Performance analytics and ROI measurement
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
              <FaClipboardCheck className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entry Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-pink-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Alternative Entry Paths</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Fresh Graduate:</span> Marketing trainee programs at top companies
                </div>
                <div className="text-black">
                  <span className="font-medium">Career Switch:</span> From sales, advertising, or communications roles
                </div>
                <div className="text-black">
                  <span className="font-medium">Digital Focus:</span> Specialize in digital marketing and analytics
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

        {/* Marketing Channels */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLayerGroup className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Marketing Channels</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {marketingChannels.map((channel, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{channel.channel}</h3>
                  <p className="text-gray-600 mb-3">{channel.description}</p>
                  <div className="text-sm text-teal-700 font-medium">
                    <span className="font-semibold">Focus: </span>{channel.focus || channel.platforms || channel.tools}
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
                      <p className="text-gray-600 mt-1">Strategic marketing leadership and brand management responsibilities</p>
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

        {/* Marketing Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBullseye className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Marketing Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {marketingSpecializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{spec.area}</h3>
                  <p className="text-gray-600 mb-3">{spec.focus}</p>
                  <div className="text-sm text-purple-700 font-medium">
                    <span className="font-semibold">Career Paths: </span>{spec.career}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Verticals */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Verticals</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {industryVerticals.map((vertical, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{vertical.industry}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{vertical.companies}</p>
                  <div className="text-sm text-green-700 font-medium">
                    <span className="font-semibold">Focus Areas: </span>{vertical.focus}
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
              <FaFlag className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Hiring Companies</h2>
            </div>
            <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-3">
              {topCompanies.map((company, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-3 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center">
                    <span className="text-gray-800 text-sm font-medium text-center">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Tools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-gray-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Marketing Tools</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {marketingTools.map((toolSet, index) => (
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

        {/* Campaign Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBullseye className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Marketing Campaign Types</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {campaignTypes.map((campaign, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{campaign.type}</h3>
                  <p className="text-gray-600 mb-3">{campaign.objective}</p>
                  <div className="text-sm text-yellow-700 font-medium">
                    <span className="font-semibold">Key Metrics: </span>{campaign.metrics}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaMedal className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to Marketing Management Success</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaChartBar className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Data-Driven Approach</h3>
                <p className="text-pink-100">Use analytics and insights to guide marketing decisions and optimize campaigns</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaPalette className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Creative Excellence</h3>
                <p className="text-pink-100">Develop compelling campaigns that resonate with target audiences</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Customer-Centric Focus</h3>
                <p className="text-pink-100">Understand customer needs and behavior to create relevant experiences</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaRocket className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Digital Innovation</h3>
                <p className="text-pink-100">Stay ahead of digital trends and emerging marketing technologies</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
