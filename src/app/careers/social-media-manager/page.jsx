import Link from 'next/link';
import React from 'react';
import { 
  FaHashtag, 
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
  FaCameraRetro,
  FaBullhorn,
  FaLaptop,
  FaPencilAlt,
  FaRocket,
  FaGlobe,
  FaMobile,
  FaVideo
} from 'react-icons/fa';

export default function SocialMediaManagerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's degree in Marketing, Communications, or related field" },
    { icon: FaGraduationCap, title: "Experience", detail: "1-2 years in digital marketing or social media" },
    { icon: FaCalendarAlt, title: "Age Range", detail: "21-35 years (most common entry age)" },
    { icon: FaLaptop, title: "Technical Skills", detail: "Proficiency in social media platforms and tools" }
  ];

  const skillLevels = [
    { 
      level: "Entry Level (Fresher)", 
      duration: "0-1 year", 
      requirement: "Basic social media knowledge",
      salary: "₹2-4 lakhs/year",
      description: "Content creation and community management basics"
    },
    { 
      level: "Junior Social Media Manager", 
      duration: "1-2 years", 
      requirement: "Platform management experience",
      salary: "₹4-7 lakhs/year",
      description: "Managing brand accounts and creating content strategies"
    },
    { 
      level: "Social Media Manager", 
      duration: "2-4 years", 
      requirement: "Campaign management skills",
      salary: "₹7-12 lakhs/year",
      description: "Leading social media campaigns and team coordination"
    },
    { 
      level: "Senior Social Media Manager", 
      duration: "4-6 years", 
      requirement: "Strategic planning expertise",
      salary: "₹12-20 lakhs/year",
      description: "Developing comprehensive social media strategies"
    }
  ];

  const careerHierarchy = [
    { rank: "Social Media Intern", years: "0-6 months", salary: "₹10-20k/month" },
    { rank: "Social Media Executive", years: "6 months-2 years", salary: "₹25-50k/month" },
    { rank: "Social Media Manager", years: "2-4 years", salary: "₹50k-1 lakh/month" },
    { rank: "Senior Social Media Manager", years: "4-6 years", salary: "₹1-1.5 lakhs/month" },
    { rank: "Social Media Head/Director", years: "6-10 years", salary: "₹1.5-3 lakhs/month" },
    { rank: "Chief Marketing Officer", years: "10+ years", salary: "₹3-10 lakhs/month" }
  ];

  const platformSkills = [
    "Facebook & Instagram Marketing",
    "LinkedIn Professional Networks", 
    "Twitter/X Strategy & Engagement",
    "YouTube Content & Analytics",
    "TikTok & Short-form Content",
    "Pinterest Visual Marketing",
    "Snapchat Advertising",
    "Influencer Collaboration"
  ];

  const topCompanies = [
    { company: "WPP Digital", location: "Mumbai/Delhi", type: "Agency", focus: "Global Brands" },
    { company: "Ogilvy Social.Lab", location: "Mumbai", type: "Agency", focus: "Creative Campaigns" },
    { company: "Social Panga", location: "Mumbai", type: "Agency", focus: "Digital Marketing" },
    { company: "Webchutney", location: "Bangalore", type: "Agency", focus: "Digital Experiences" },
    { company: "Tata Consultancy Services", location: "Multiple Cities", type: "Corporate", focus: "B2B Marketing" },
    { company: "Flipkart", location: "Bangalore", type: "E-commerce", focus: "Customer Engagement" }
  ];

  const technicalSkills = [
    "Content Creation & Design",
    "Analytics & Reporting", 
    "Paid Advertising (Facebook Ads, Google Ads)",
    "SEO & Content Marketing",
    "Email Marketing Integration",
    "CRM Tools & Customer Data",
    "Video Editing & Production",
    "Influencer Outreach & Management"
  ];

  const certificationOptions = [
    { cert: "Facebook Social Media Marketing", provider: "Facebook Blueprint", duration: "2-3 months", cost: "Free" },
    { cert: "Google Analytics Certification", provider: "Google", duration: "1 month", cost: "Free" },
    { cert: "HubSpot Content Marketing", provider: "HubSpot Academy", duration: "2 months", cost: "Free" },
    { cert: "Hootsuite Social Media Marketing", provider: "Hootsuite", duration: "1-2 months", cost: "₹15-25k" },
    { cert: "Digital Marketing Specialist", provider: "CDMM/IIDE", duration: "3-6 months", cost: "₹50k-1 lakh" },
    { cert: "Social Media Strategy", provider: "Coursera/EdX", duration: "2-4 months", cost: "₹5-15k" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaHashtag className="mx-auto text-6xl mb-6 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-pink-300"> Social Media Manager</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering digital marketing and building powerful online brand presence in the social media landscape
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Social Media Manager Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Social Media Manager?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Social Media Manager is a digital marketing professional who creates, curates, and manages published content across social media platforms. They develop strategies to increase brand awareness, engage audiences, and drive business growth through social channels.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Social Media Managers work with brands, agencies, and organizations to build online communities, manage customer relationships, and execute marketing campaigns that align with business objectives.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Content strategy and creation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Community management and engagement
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Analytics tracking and reporting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Paid advertising campaign management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Influencer partnerships and collaborations
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility & Requirements</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Skills</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Creative Skills:</span> Design, copywriting, visual storytelling
                </div>
                <div className="text-black">
                  <span className="font-medium">Analytical Skills:</span> Data interpretation, ROI measurement
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Levels */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Levels & Progression</h2>
            </div>
            <div className="space-y-6">
              {skillLevels.map((level, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{level.level}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-orange-600 mr-2" />
                      <span className="text-gray-700">{level.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{level.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-700">{level.salary}</span>
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

        {/* Platform Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGlobe className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Platform Expertise</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platformSkills.map((platform, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRocket className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-indigo-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill}</span>
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
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Companies & Agencies</h2>
            </div>
            <div className="space-y-4">
              {topCompanies.map((company, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{company.company}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{company.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${company.type === 'Agency' ? 'bg-blue-200 text-blue-800' : company.type === 'Corporate' ? 'bg-green-200 text-green-800' : 'bg-purple-200 text-purple-800'}`}>
                        {company.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-700">{company.focus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Important Certifications</h2>
            </div>
            <div className="space-y-4">
              {certificationOptions.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{cert.cert}</h3>
                    </div>
                    <div>
                      <span className="text-gray-700">{cert.provider}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-yellow-600 mr-2" />
                      <span className="text-gray-700">{cert.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{cert.cost}</span>
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${cert.cost === 'Free' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
                        {cert.cost === 'Free' ? 'Free' : 'Paid'}
                      </span>
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

        {/* Career Development Process */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRocket className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development Process</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Foundation Skills</h3>
                  <p className="text-gray-600">Learn basic design tools (Canva, Photoshop), content writing, and platform basics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Create Portfolio</h3>
                  <p className="text-gray-600">Develop personal brand projects, manage sample accounts, showcase creative campaigns</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Get Certified</h3>
                  <p className="text-gray-600">Complete relevant certifications from Facebook, Google, HubSpot, and other platforms</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gain Experience</h3>
                  <p className="text-gray-600">Start with internships, freelance projects, or entry-level positions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Advance & Specialize</h3>
                  <p className="text-gray-600">Move to senior roles, specialize in specific platforms or industries</p>
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
                  <a href="https://www.facebook.com/business/learn" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Facebook Blueprint</div>
                      <div className="text-sm text-gray-600">Free advertising and marketing courses</div>
                    </div>
                  </a>
                  <a href="https://academy.hubspot.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-orange-600 mr-3 group-hover:text-orange-800" />
                    <div>
                      <div className="font-medium text-gray-800">HubSpot Academy</div>
                      <div className="text-sm text-gray-600">Comprehensive marketing certifications</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Success Tips</h3>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 border border-pink-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-pink-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with platform algorithm changes</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-pink-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong visual design and copywriting skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-pink-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build relationships with influencers and content creators</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-pink-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Master data analytics and performance measurement</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-pink-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Continuously experiment with new content formats</span>
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