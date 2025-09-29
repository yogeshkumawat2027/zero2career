
  import Link from 'next/link';
import React from 'react';
import { 
  FaPen, 
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
  FaCloud,
  FaEye,
  FaHeart,
  FaUserTie,
  FaLaptop,
  FaSearch,
  FaBullhorn,
  FaNewspaper,
  FaVideo,
  FaCamera
} from 'react-icons/fa';

export default function ContentWriterPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree in any field (English/Journalism preferred)" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No specific age limit - skill-based profession" },
    { icon: FaPen, title: "Writing Skills", detail: "Excellent grammar, vocabulary, and storytelling abilities" },
    { icon: FaLaptop, title: "Technical Skills", detail: "Basic computer skills and familiarity with digital platforms" }
  ];

  const specializationTypes = [
    { 
      specialization: "Blog Content Writer", 
      duration: "3-6 months", 
      requirement: "Portfolio with 10-15 blog posts",
      cost: "₹10,000-50,000",
      description: "Creating engaging blog posts for websites and businesses"
    },
    { 
      specialization: "SEO Content Writer", 
      duration: "6-12 months", 
      requirement: "SEO certification + content portfolio",
      cost: "₹20,000-80,000",
      description: "Writing optimized content for search engines"
    },
    { 
      specialization: "Technical Writer", 
      duration: "12-18 months", 
      requirement: "Technical knowledge + writing samples",
      cost: "₹30,000-1,20,000",
      description: "Creating documentation, manuals, and technical guides"
    },
    { 
      specialization: "Copywriter", 
      duration: "6-12 months", 
      requirement: "Marketing knowledge + creative portfolio",
      cost: "₹25,000-1,00,000",
      description: "Writing persuasive content for marketing and advertising"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Content Writer", years: "0-1 year", salary: "₹15,000-30,000/month" },
    { rank: "Content Writer", years: "1-3 years", salary: "₹30,000-50,000/month" },
    { rank: "Senior Content Writer", years: "3-5 years", salary: "₹50,000-80,000/month" },
    { rank: "Content Lead/Manager", years: "5-8 years", salary: "₹80,000-1,50,000/month" },
    { rank: "Content Strategist", years: "8-12 years", salary: "₹1,50,000-3,00,000/month" },
    { rank: "Head of Content/Director", years: "12+ years", salary: "₹3,00,000-6,00,000/month" }
  ];

  const skillRequirements = [
    "Excellent command of English language",
    "Research and fact-checking abilities",
    "Understanding of target audience",
    "Basic SEO knowledge",
    "Social media familiarity",
    "Time management skills",
    "Creativity and originality",
    "Adaptability to different writing styles"
  ];

  const topInstitutes = [
    { institute: "MICA (Mudra Institute)", location: "Ahmedabad", type: "Private", duration: "2 years (PGDM-C)" },
    { institute: "Xavier Institute of Communications", location: "Mumbai", type: "Private", duration: "1 year" },
    { institute: "Indian Institute of Mass Communication", location: "New Delhi", type: "Government", duration: "10 months" },
    { institute: "Symbiosis Institute of Media", location: "Pune", type: "Private", duration: "2 years" },
    { institute: "Delhi College of Arts & Commerce", location: "Delhi", type: "Government", duration: "3 years" },
    { institute: "Coursera/Udemy Online Courses", location: "Online", type: "Online", duration: "3-6 months" }
  ];

  const contentTypes = [
    "Blog Posts & Articles",
    "Website Copy", 
    "Social Media Content",
    "Email Marketing",
    "Product Descriptions",
    "Press Releases",
    "White Papers",
    "Video Scripts",
    "Newsletters",
    "Case Studies",
    "Landing Pages",
    "Ad Copy"
  ];

  const industries = [
    { industry: "Digital Marketing Agencies", icon: FaBullhorn },
    { industry: "E-commerce Companies", icon: FaLaptop },
    { industry: "Media & Publishing", icon: FaNewspaper },
    { industry: "Technology Companies", icon: FaCloud },
    { industry: "Healthcare & Pharma", icon: FaHeart },
    { industry: "Education & E-learning", icon: FaGraduationCap },
    { industry: "Travel & Hospitality", icon: FaMapMarkerAlt },
    { industry: "Financial Services", icon: FaMoneyBillWave }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPen className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-purple-300"> Content Writer</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering the art of content creation and building a successful writing career in the digital age
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Content Writer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Content Writer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Content Writer is a professional who creates written material for digital and print media. They craft engaging, informative, and persuasive content that helps businesses communicate with their target audience, build brand awareness, and drive customer engagement.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Content writers work across various formats including blogs, websites, social media, marketing materials, and technical documentation, adapting their writing style to match different platforms and audiences.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Research and create original content
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Optimize content for SEO
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Edit and proofread written material
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborate with marketing teams
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Meet deadlines and content goals
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
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
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Preferred Qualifications</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Degree Fields:</span> English, Journalism, Mass Communication, Marketing
                </div>
                <div className="text-black">
                  <span className="font-medium">Additional Skills:</span> Basic graphic design, social media management
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Content Writing Specializations</h2>
            </div>
            <div className="space-y-6">
              {specializationTypes.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{spec.specialization}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-2" />
                      <span className="text-gray-700">{spec.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{spec.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">{spec.cost}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{spec.description}</span>
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
              <FaHeart className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Qualities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillRequirements.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaNewspaper className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Types of Content You'll Create</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Content Writing Institutes in India</h2>
            </div>
            <div className="space-y-4">
              {topInstitutes.map((institute, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{institute.institute}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        institute.type === 'Government' ? 'bg-green-200 text-green-800' : 
                        institute.type === 'Online' ? 'bg-purple-200 text-purple-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
                        {institute.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.duration}</span>
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

        {/* Industry Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBullhorn className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-pink-100">
                  <industry.icon className="text-4xl text-pink-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800">{industry.industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Development Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development Path</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Writing Portfolio</h3>
                  <p className="text-gray-600">Create 15-20 diverse writing samples across different formats and topics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Learn SEO & Digital Marketing</h3>
                  <p className="text-gray-600">Master keyword research, on-page SEO, and content optimization techniques</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gain Industry Experience</h3>
                  <p className="text-gray-600">Start with internships, freelance projects, or entry-level positions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Specialize & Network</h3>
                  <p className="text-gray-600">Choose a specialization and build professional relationships in your niche</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Advance & Lead</h3>
                  <p className="text-gray-600">Move into senior roles, team leadership, or start your own content agency</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Learning Platforms</h3>
                <div className="space-y-3">
                  <a href="https://coursera.org" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Coursera</div>
                      <div className="text-sm text-gray-600">Content marketing and writing courses</div>
                    </div>
                  </a>
                  <a href="https://udemy.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Udemy</div>
                      <div className="text-sm text-gray-600">Comprehensive writing and SEO courses</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Read extensively across different genres and formats</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice writing daily and maintain consistency</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with industry trends and tools</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a strong online presence and personal brand</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with other writers and industry professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Navigation */}
        <div className="text-center">
           <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            <Link href="/careers">
              Back to Careers
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
  
