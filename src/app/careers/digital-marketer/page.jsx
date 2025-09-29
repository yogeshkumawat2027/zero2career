
    import Link from 'next/link';
import React from 'react';
import { 
  FaLaptopCode, 
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
  FaBullhorn,
  FaSearch,
  FaPalette,
  FaMobile,
  FaEnvelope,
  FaVideo,
  FaShareAlt,
  FaMousePointer
} from 'react-icons/fa';

export default function DigitalMarketerPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree in any field (preferred)" },
    { icon: FaLaptopCode, title: "Technical Skills", detail: "Basic computer literacy and internet proficiency" },
    { icon: FaCalendarAlt, title: "Age", detail: "No specific age limit - suitable for all ages" },
    { icon: FaUserTie, title: "Background", detail: "Any educational background welcome" }
  ];

  const specializationAreas = [
    { 
      specialization: "Search Engine Optimization (SEO)", 
      duration: "3-6 months", 
      requirement: "Google Analytics certification",
      cost: "₹20,000-50,000",
      description: "Optimize websites for search engine rankings"
    },
    { 
      specialization: "Pay-Per-Click (PPC) Advertising", 
      duration: "2-4 months", 
      requirement: "Google Ads certification",
      cost: "₹15,000-40,000",
      description: "Manage paid advertising campaigns on search engines"
    },
    { 
      specialization: "Social Media Marketing", 
      duration: "2-3 months", 
      requirement: "Platform-specific certifications",
      cost: "₹10,000-30,000",
      description: "Create and manage social media campaigns"
    },
    { 
      specialization: "Content Marketing", 
      duration: "3-5 months", 
      requirement: "Content strategy certification",
      cost: "₹25,000-60,000",
      description: "Develop content strategies and create engaging content"
    },
    { 
      specialization: "Email Marketing", 
      duration: "1-2 months", 
      requirement: "Marketing automation tools",
      cost: "₹8,000-20,000",
      description: "Design and execute email marketing campaigns"
    },
    { 
      specialization: "Digital Analytics", 
      duration: "2-4 months", 
      requirement: "Google Analytics & Data Studio",
      cost: "₹20,000-45,000",
      description: "Analyze and interpret digital marketing data"
    }
  ];

  const careerHierarchy = [
    { rank: "Digital Marketing Intern", years: "0-6 months", salary: "₹8,000-15,000/month" },
    { rank: "Junior Digital Marketer", years: "6 months-2 years", salary: "₹15,000-35,000/month" },
    { rank: "Digital Marketing Executive", years: "2-4 years", salary: "₹35,000-60,000/month" },
    { rank: "Senior Digital Marketer", years: "4-6 years", salary: "₹60,000-1,00,000/month" },
    { rank: "Digital Marketing Manager", years: "6-10 years", salary: "₹1,00,000-2,00,000/month" },
    { rank: "Digital Marketing Head/Director", years: "10+ years", salary: "₹2,00,000-5,00,000/month" }
  ];

  const skillsRequired = [
    "Google Analytics & Google Ads",
    "Social Media Platform Management",
    "Content Creation & Copywriting",
    "SEO/SEM Knowledge",
    "Email Marketing Tools",
    "Data Analysis & Reporting",
    "Marketing Automation",
    "Graphic Design Basics"
  ];

  const topInstitutes = [
    { school: "Digital Vidya", location: "Multiple Cities", type: "Training Institute", duration: "3-6 months" },
    { school: "NIIT Digital Marketing", location: "Pan India", type: "Training Institute", duration: "4-6 months" },
    { school: "Simplilearn", location: "Online", type: "E-learning Platform", duration: "2-4 months" },
    { school: "DigiSkills by Google", location: "Online", type: "Free Certification", duration: "1-3 months" },
    { school: "Udemy Digital Marketing", location: "Online", type: "Course Platform", duration: "1-6 months" },
    { school: "Delhi School of Digital Marketing", location: "Delhi", type: "Training Institute", duration: "3-4 months" }
  ];

  const toolsAndPlatforms = [
    "Google Analytics",
    "Google Ads", 
    "Facebook Ads Manager",
    "Mailchimp",
    "Hootsuite",
    "Canva",
    "WordPress",
    "Semrush/Ahrefs"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBullhorn className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-purple-300"> Digital Marketer</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering digital marketing and building a successful career in the digital landscape
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Digital Marketing Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Digital Marketing?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Digital Marketing is the practice of promoting products, services, or brands through digital channels and technologies. It encompasses various online marketing strategies to reach and engage target audiences across digital platforms.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Digital marketers use data-driven approaches to create, implement, and optimize marketing campaigns across search engines, social media, email, websites, and mobile applications to drive business growth and customer engagement.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Develop digital marketing strategies
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Manage social media campaigns
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Create and optimize content
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Analyze campaign performance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    SEO and SEM optimization
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
            
            <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Ideal Candidate Profile</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Creative Mindset:</span> Ability to think creatively and innovatively
                </div>
                <div className="text-black">
                  <span className="font-medium">Analytical Skills:</span> Data interpretation and analysis capabilities
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Digital Marketing Specializations</h2>
            </div>
            <div className="space-y-6">
              {specializationAreas.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
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
              <FaLaptopCode className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Skills Required</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {skillsRequired.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-800 font-medium text-sm">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Tools & Platforms</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {toolsAndPlatforms.map((tool, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <FaMousePointer className="text-purple-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-800 font-medium text-sm">{tool}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Training Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Digital Marketing Training Institutes</h2>
            </div>
            <div className="space-y-4">
              {topInstitutes.map((institute, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{institute.school}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${institute.type === 'Free Certification' ? 'bg-green-200 text-green-800' : institute.type === 'E-learning Platform' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
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

        {/* Learning Process Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Learning Process Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Foundation Learning</h3>
                  <p className="text-gray-600">Understand digital marketing fundamentals, consumer behavior, and basic analytics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Choose Specialization</h3>
                  <p className="text-gray-600">Select 2-3 specialized areas like SEO, PPC, Social Media, or Content Marketing</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Hands-on Practice</h3>
                  <p className="text-gray-600">Work on real projects, create portfolio, and gain practical experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Certification & Portfolio</h3>
                  <p className="text-gray-600">Obtain industry certifications and build a strong portfolio of successful campaigns</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Job Search & Networking</h3>
                  <p className="text-gray-600">Apply for positions, network with industry professionals, and continue learning</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Free Certifications</h3>
                <div className="space-y-3">
                  <a href="https://skillshop.exceedlms.com/student/catalog" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Google Skillshop</div>
                      <div className="text-sm text-gray-600">Google Ads, Analytics, and Marketing Platform certifications</div>
                    </div>
                  </a>
                  <a href="https://www.facebook.com/business/learn" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Facebook Blueprint</div>
                      <div className="text-sm text-gray-600">Facebook and Instagram advertising certifications</div>
                    </div>
                  </a>
                  <a href="https://academy.hubspot.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-orange-600 mr-3 group-hover:text-orange-800" />
                    <div>
                      <div className="font-medium text-gray-800">HubSpot Academy</div>
                      <div className="text-sm text-gray-600">Inbound marketing, content marketing, and sales certifications</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest digital marketing trends</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a strong personal brand and online presence</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Create case studies of successful campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with other marketing professionals</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop both creative and analytical skills</span>
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

