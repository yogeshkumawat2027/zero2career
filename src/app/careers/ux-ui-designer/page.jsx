import Link from 'next/link';
import React from 'react';
import { 
  FaPalette, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaShieldAlt, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaLaptop,
  FaEye,
  FaHeart,
  FaPencilRuler,
  FaMobile,
  FaDesktop,
  FaUserFriends,
  FaLightbulb,
  FaCode
} from 'react-icons/fa';

export default function UXUIDesignerPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in Design, Computer Science, or any field" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No specific age limit, typically 18+ years" },
    { icon: FaEye, title: "Skills", detail: "Creative thinking, problem-solving, visual communication" },
    { icon: FaLaptop, title: "Technical", detail: "Basic computer knowledge and design software familiarity" }
  ];

  const skillLevels = [
    { 
      level: "Beginner (Entry Level)", 
      duration: "0-6 months", 
      requirement: "Basic portfolio with 3-5 projects",
      salary: "₹2-4 lakhs/year",
      description: "Learning fundamentals and building first projects"
    },
    { 
      level: "Junior UX/UI Designer", 
      duration: "6 months - 2 years", 
      requirement: "Professional portfolio with real projects",
      salary: "₹4-8 lakhs/year",
      description: "Working on guided projects with senior supervision"
    },
    { 
      level: "Mid-level UX/UI Designer", 
      duration: "2-5 years", 
      requirement: "Diverse portfolio, user research skills",
      salary: "₹8-15 lakhs/year",
      description: "Independent project handling and team collaboration"
    },
    { 
      level: "Senior UX/UI Designer", 
      duration: "5-8 years", 
      requirement: "Leadership experience, design systems knowledge",
      salary: "₹15-25 lakhs/year",
      description: "Leading design projects and mentoring juniors"
    }
  ];

  const careerHierarchy = [
    { rank: "UX/UI Intern", years: "0-6 months", salary: "₹10,000-25,000/month" },
    { rank: "Junior Designer", years: "6 months - 2 years", salary: "₹30,000-65,000/month" },
    { rank: "UX/UI Designer", years: "2-5 years", salary: "₹65,000-1.25 lakhs/month" },
    { rank: "Senior Designer", years: "5-8 years", salary: "₹1.25-2 lakhs/month" },
    { rank: "Lead Designer", years: "8-12 years", salary: "₹2-3 lakhs/month" },
    { rank: "Design Manager/Director", years: "12+ years", salary: "₹3-5 lakhs/month" }
  ];

  const essentialSkills = [
    "User Research & Analysis",
    "Information Architecture", 
    "Wireframing & Prototyping",
    "Visual Design Principles",
    "Interaction Design",
    "Usability Testing",
    "Design Systems",
    "Accessibility (WCAG)"
  ];

  const designTools = [
    { tool: "Figma", category: "UI Design & Prototyping", popularity: "Most Popular", type: "Free/Paid" },
    { tool: "Adobe XD", category: "UI Design & Prototyping", popularity: "Popular", type: "Free/Paid" },
    { tool: "Sketch", category: "UI Design", popularity: "Popular", type: "Paid (Mac Only)" },
    { tool: "Adobe Illustrator", category: "Vector Design", popularity: "Industry Standard", type: "Paid" },
    { tool: "Adobe Photoshop", category: "Image Editing", popularity: "Industry Standard", type: "Paid" },
    { tool: "InVision", category: "Prototyping", popularity: "Popular", type: "Free/Paid" }
  ];

  const learningPlatforms = [
    { platform: "Coursera", type: "Online Courses", speciality: "Google UX Design Certificate", duration: "3-6 months" },
    { platform: "Udemy", type: "Online Courses", speciality: "Practical Design Skills", duration: "Self-paced" },
    { platform: "Interaction Design Foundation", type: "UX Focused", speciality: "UX Research & Theory", duration: "Ongoing" },
    { platform: "YouTube", type: "Free Content", speciality: "Tutorials & Tips", duration: "Self-paced" },
    { platform: "Dribbble", type: "Inspiration & Learning", speciality: "Design Showcase", duration: "Ongoing" },
    { platform: "Behance", type: "Portfolio Platform", speciality: "Professional Showcase", duration: "Ongoing" }
  ];

  const jobTypes = [
    "UX Designer",
    "UI Designer", 
    "Product Designer",
    "Visual Designer",
    "Interaction Designer",
    "UX Researcher",
    "Design System Designer",
    "Mobile App Designer"
  ];

  const companyTypes = [
    { type: "Tech Startups", examples: "Zomato, Paytm, Flipkart", culture: "Fast-paced, innovative", growth: "High learning curve" },
    { type: "Product Companies", examples: "Google, Microsoft, Adobe", culture: "Structured, process-oriented", growth: "Excellent mentorship" },
    { type: "Design Agencies", examples: "Fractal Ink, Happy mcGarryBowen", culture: "Creative, diverse projects", growth: "Wide skill exposure" },
    { type: "Consultancies", examples: "Accenture, Deloitte, PwC", culture: "Client-focused, analytical", growth: "Business understanding" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPalette className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-purple-300"> UX/UI Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to creating exceptional digital experiences and building a successful career in UX/UI design
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is UX/UI Designer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a UX/UI Designer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A UX/UI Designer creates digital experiences that are both functional and visually appealing. UX (User Experience) focuses on how users interact with products, while UI (User Interface) deals with the visual and interactive elements of digital interfaces.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  These professionals research user needs, create wireframes and prototypes, design interfaces, and test usability to ensure digital products are intuitive, accessible, and delightful to use.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    User research and persona development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Wireframing and prototyping
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Visual interface design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Usability testing and iteration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaboration with developers and stakeholders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Getting Started Requirements</h2>
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
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Good to Have</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Portfolio:</span> Personal projects showcasing design thinking
                </div>
                <div className="text-black">
                  <span className="font-medium">Soft Skills:</span> Empathy, communication, and collaborative mindset
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Levels */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Levels</h2>
            </div>
            <div className="space-y-6">
              {skillLevels.map((level, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{level.level}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{level.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{level.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{level.salary}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{level.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLightbulb className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills to Master</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {essentialSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Tools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaDesktop className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Design Tools</h2>
            </div>
            <div className="space-y-4">
              {designTools.map((tool, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{tool.tool}</h3>
                    </div>
                    <div>
                      <span className="text-gray-700">{tool.category}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${tool.popularity === 'Most Popular' ? 'bg-green-200 text-green-800' : tool.popularity === 'Industry Standard' ? 'bg-purple-200 text-purple-800' : 'bg-blue-200 text-blue-800'}`}>
                        {tool.popularity}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{tool.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Platforms */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Learning Platforms & Resources</h2>
            </div>
            <div className="space-y-4">
              {learningPlatforms.map((platform, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{platform.platform}</h3>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${platform.type === 'Free Content' ? 'bg-green-200 text-green-800' : platform.type === 'Online Courses' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
                        {platform.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-700">{platform.speciality}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{platform.duration}</span>
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
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">{position.years}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{position.salary}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaPencilRuler className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">UX/UI Designer Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {jobTypes.map((job, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4 border border-pink-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-pink-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{job}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUserFriends className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Types of Companies & Work Culture</h2>
            </div>
            <div className="space-y-4">
              {companyTypes.map((company, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{company.type}</h3>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{company.examples}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{company.culture}</span>
                    </div>
                    <div>
                      <span className="text-emerald-700 font-medium">{company.growth}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Journey Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Your UX/UI Design Journey</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Learn Design Fundamentals</h3>
                  <p className="text-gray-600">Study design principles, color theory, typography, and user psychology</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Master Design Tools</h3>
                  <p className="text-gray-600">Become proficient in Figma, Adobe XD, and other essential design software</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Your Portfolio</h3>
                  <p className="text-gray-600">Create 3-5 diverse projects showcasing your design process and thinking</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gain Real Experience</h3>
                  <p className="text-gray-600">Apply for internships, freelance projects, or contribute to open source</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Land Your First Job</h3>
                  <p className="text-gray-600">Network, apply strategically, and showcase your unique design perspective</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Communities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Design Communities</h3>
                <div className="space-y-3">
                  <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-pink-600 mr-3 group-hover:text-pink-800" />
                    <div>
                      <div className="font-medium text-gray-800">Dribbble</div>
                      <div className="text-sm text-gray-600">Design inspiration and portfolio showcase</div>
                    </div>
                  </a>
                  <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Behance</div>
                      <div className="text-sm text-gray-600">Professional creative portfolios</div>
                    </div>
                  </a>
                  <a href="https://www.figma.com/community/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-purple-600 mr-3 group-hover:text-purple-800" />
                    <div>
                      <div className="font-medium text-gray-800">Figma Community</div>
                      <div className="text-sm text-gray-600">Free design resources and templates</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Create a strong online portfolio with case studies</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with design trends and technologies</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice user empathy and research skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-