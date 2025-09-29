import Link from 'next/link';
import React from 'react';
import { 
  FaNewspaper, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaMedal, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaDesktop,
  FaEye,
  FaHeart,
  FaStar,
  FaUserTie,
  FaPen,
  FaPlay,
  FaMicrophone,
  FaCamera,
  FaGlobe,
  FaLanguage,
  FaLaptop,
  FaSearch,
  FaBroadcastTower,
  FaPhotoVideo
} from 'react-icons/fa';

export default function JournalistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's degree in any field (Mass Communication preferred)" },
    { icon: FaPen, title: "Writing Skills", detail: "Excellent written and verbal communication abilities" },
    { icon: FaEye, title: "Observation", detail: "Strong analytical and investigative mindset" },
    { icon: FaGlobe, title: "Awareness", detail: "Current affairs knowledge and social consciousness" }
  ];

  const entrySchemes = [
    { 
      scheme: "Bachelor of Journalism", 
      duration: "3 years", 
      qualification: "10+2 in any stream",
      age: "17-25 years",
      description: "Comprehensive journalism and media studies degree"
    },
    { 
      scheme: "Mass Communication Degree", 
      duration: "3-4 years", 
      qualification: "10+2 with 50% marks",
      age: "17-23 years",
      description: "Broad media and communication training"
    },
    { 
      scheme: "PG Diploma in Journalism", 
      duration: "1-2 years", 
      qualification: "Bachelor's degree",
      age: "21-30 years",
      description: "Specialized journalism training for graduates"
    },
    { 
      scheme: "Short-term Media Courses", 
      duration: "3-12 months", 
      qualification: "10+2 or graduation",
      age: "18+ years",
      description: "Focused skills in specific media areas"
    }
  ];

  const careerHierarchy = [
    { rank: "Trainee Reporter", years: "0-1 years", salary: "₹12,000 - ₹25,000" },
    { rank: "Junior Reporter", years: "1-3 years", salary: "₹25,000 - ₹40,000" },
    { rank: "Senior Reporter", years: "3-6 years", salary: "₹40,000 - ₹65,000" },
    { rank: "Special Correspondent", years: "6-10 years", salary: "₹65,000 - ₹1,00,000" },
    { rank: "Assistant Editor", years: "8-12 years", salary: "₹80,000 - ₹1,50,000" },
    { rank: "Deputy Editor", years: "10-15 years", salary: "₹1,50,000 - ₹2,50,000" },
    { rank: "Chief Reporter", years: "12-18 years", salary: "₹2,00,000 - ₹3,00,000" },
    { rank: "Editor-in-Chief", years: "15+ years", salary: "₹3,00,000 - ₹10,00,000" }
  ];

  const skillsRequired = [
    "Excellent written and verbal communication",
    "Research and fact-checking abilities",
    "Critical thinking and analysis",
    "Time management under pressure",
    "Networking and people skills",
    "Digital literacy and social media",
    "Basic photography and video skills",
    "Ethics and integrity in reporting"
  ];

  const trainingInstitutes = [
    { academy: "Indian Institute of Mass Communication (IIMC)", location: "New Delhi", type: "Premier Institute", duration: "1-2 years" },
    { academy: "Jamia Millia Islamia", location: "New Delhi", type: "Central University", duration: "3-4 years" },
    { academy: "Xavier Institute of Communications", location: "Mumbai", type: "Autonomous Institute", duration: "3 years" },
    { academy: "Asian College of Journalism", location: "Chennai", type: "Specialized College", duration: "1-3 years" },
    { academy: "Symbiosis Institute of Media", location: "Pune", type: "Private University", duration: "3-4 years" },
    { academy: "Delhi College of Arts & Commerce", location: "Delhi", type: "DU Affiliated", duration: "3 years" }
  ];

  const technicalTools = [
    "Microsoft Office Suite",
    "Adobe Creative Suite", 
    "Content Management Systems",
    "Social Media Platforms",
    "Audio/Video Editing Software",
    "Google Workspace Tools",
    "Data Analysis Tools",
    "Live Streaming Software"
  ];

  const industryDomains = [
    { domain: "Print Media", role: "Newspapers, magazines, and digital publications" },
    { domain: "Television News", role: "News channels, documentaries, and current affairs" },
    { domain: "Digital Media", role: "Online news portals, blogs, and social media" },
    { domain: "Radio Broadcasting", role: "News bulletins, talk shows, and podcasts" },
    { domain: "News Agencies", role: "Wire services, press releases, and news distribution" },
    { domain: "Corporate Communications", role: "Company newsletters, PR, and internal communications" }
  ];

  const journalismSpecializations = [
    "Political Reporting",
    "Sports Journalism",
    "Business & Financial News",
    "Crime & Court Reporting",
    "Entertainment Journalism",
    "Investigative Journalism",
    "Science & Technology",
    "Health & Medical Reporting"
  ];

  const majorNewsOrganizations = [
    { name: "The Times of India Group", type: "Print & Digital", presence: "National" },
    { name: "Hindustan Times", type: "Print & Digital", presence: "National" },
    { name: "NDTV", type: "Television & Digital", presence: "National" },
    { name: "CNN-News18", type: "Television", presence: "National" },
    { name: "The Hindu", type: "Print & Digital", presence: "National" },
    { name: "India Today Group", type: "Multi-platform", presence: "National" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaNewspaper className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-blue-300"> Journalist in India</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to a career in journalism, from reporting news to shaping public opinion
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Journalist Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Journalist?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Journalist is a professional who gathers, writes, and reports news and current events to the public through various media platforms. They serve as the bridge between information sources and the general public, ensuring transparency and accountability in society.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Journalists work across print media, television, radio, and digital platforms, covering everything from breaking news to in-depth investigative stories that shape public discourse and policy.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Researching and investigating news stories
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Conducting interviews and gathering information
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Writing articles, reports, and news stories
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Fact-checking and verifying sources
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Meeting deadlines and editorial standards
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
              <FaClipboardCheck className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Skills & Requirements</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillsRequired.map((skill, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <FaCheckCircle className="text-yellow-600 mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Entry Schemes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Education Paths & Training</h2>
            </div>
            <div className="space-y-6">
              {entrySchemes.map((scheme, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{scheme.scheme}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">{scheme.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{scheme.qualification}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-indigo-700">{scheme.age}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{scheme.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Tools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaDesktop className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Tools & Software</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {technicalTools.map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journalism Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaSearch className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Journalism Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {journalismSpecializations.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Journalism Institutes in India</h2>
            </div>
            <div className="space-y-4">
              {trainingInstitutes.map((institute, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{institute.academy}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.location}</span>
                    </div>
                    <div>
                      <span className="bg-teal-200 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
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

        {/* Major News Organizations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBroadcastTower className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Major News Organizations</h2>
            </div>
            <div className="space-y-4">
              {majorNewsOrganizations.map((org, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{org.name}</h3>
                    </div>
                    <div>
                      <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {org.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaGlobe className="text-red-600 mr-2" />
                      <span className="text-gray-700">{org.presence}</span>
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
              <FaChartLine className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="flex items-center">
                      <FaMedal className="text-yellow-600 mr-3" />
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
                    <div>
                      {index === 0 && <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Leadership</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Domains */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStar className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Media Industry Sectors</h2>
            </div>
            <div className="space-y-4">
              {industryDomains.map((domain, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{domain.domain}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{domain.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Development Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development Path</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Foundation</h3>
                  <p className="text-gray-600">Complete journalism education and develop writing skills</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gain Experience</h3>
                  <p className="text-gray-600">Start with internships, freelance work, or trainee positions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Portfolio</h3>
                  <p className="text-gray-600">Create impressive articles, stories, and develop your beat</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Develop Expertise</h3>
                  <p className="text-gray-600">Specialize in specific areas and build source network</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Advance to Leadership</h3>
                  <p className="text-gray-600">Move into editorial roles and guide news direction</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Career Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Professional Organizations</h3>
                <div className="space-y-3">
                  <a href="https://pressinstitute.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Press Institute of India</div>
                      <div className="text-sm text-gray-600">Professional training and certification</div>
                    </div>
                  </a>
                  <a href="https://indianjournalists.org.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Indian Journalists Union</div>
                      <div className="text-sm text-gray-600">Professional networking and rights protection</div>
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
                      <span className="text-gray-700">Build a diverse portfolio of published articles</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop expertise in specific beats or subjects</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Cultivate reliable sources and networks</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with digital journalism trends</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain ethical standards and fact-checking rigor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Career Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaPhotoVideo className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Related Career Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                <FaMicrophone className="text-3xl text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Radio Jockey (RJ)</h3>
                <p className="text-gray-600 text-sm">Host radio shows, conduct interviews, and engage with audiences</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <FaCamera className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">News Anchor</h3>
                <p className="text-gray-600 text-sm">Present news on television and conduct live interviews</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <FaPen className="text-3xl text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Content Writer</h3>
                <p className="text-gray-600 text-sm">Create digital content for websites, blogs, and social media</p>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Insights */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Salary Insights by Location & Experience</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">By Experience Level</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">Fresher (0-1 year)</span>
                      <span className="text-green-700 font-bold">₹15,000 - ₹30,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">Mid-level (5-8 years)</span>
                      <span className="text-blue-700 font-bold">₹50,000 - ₹1,00,000</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">Senior (10+ years)</span>
                      <span className="text-purple-700 font-bold">₹1,50,000 - ₹5,00,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">By Location (Metro Cities)</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-4 border border-red-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">Mumbai/Delhi</span>
                      <span className="text-red-700 font-bold">20-30% Higher</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">Bangalore/Chennai</span>
                      <span className="text-yellow-700 font-bold">10-20% Higher</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">Tier-2 Cities</span>
                      <span className="text-gray-700 font-bold">Standard Range</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Skills Development */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLanguage className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Skills Development Areas</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Language Skills</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-600 mr-2 flex-shrink-0" />
                    English proficiency (written & spoken)
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-600 mr-2 flex-shrink-0" />
                    Regional language expertise
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-600 mr-2 flex-shrink-0" />
                    Hindi for national coverage
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-600 mr-2 flex-shrink-0" />
                    Grammar and style mastery
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Skills</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2 flex-shrink-0" />
                    Digital publishing platforms
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2 flex-shrink-0" />
                    Social media management
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2 flex-shrink-0" />
                    Basic photo/video editing
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2 flex-shrink-0" />
                    SEO and web analytics
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-yellow-600 mr-2 flex-shrink-0" />
                    Interpersonal communication
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-yellow-600 mr-2 flex-shrink-0" />
                    Critical thinking abilities
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-yellow-600 mr-2 flex-shrink-0" />
                    Deadline management
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-yellow-600 mr-2 flex-shrink-0" />
                    Adaptability and resilience
                  </li>
                </ul>
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