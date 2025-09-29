
 import Link from 'next/link';
import React from 'react';
import { 
  FaShieldAlt, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaLock, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaCloud,
  FaEye,
  FaLaptop,
  FaUserTie,
  FaBug,
  FaNetworkWired,
  FaKey,
  FaCertificate
} from 'react-icons/fa';

export default function CyberSecurityManagerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's in Computer Science/IT or related field" },
    { icon: FaGraduationCap, title: "Experience", detail: "3-5 years in cybersecurity or IT security roles" },
    { icon: FaCalendarAlt, title: "Age Range", detail: "Typically 25-45 years for management roles" },
    { icon: FaCertificate, title: "Certifications", detail: "Industry certifications (CISSP, CISM, etc.)" }
  ];

  const certificationTypes = [
    { 
      certification: "Certified Information Systems Security Professional (CISSP)", 
      duration: "3-6 months prep", 
      requirement: "5 years experience",
      cost: "₹45,000-60,000",
      description: "Gold standard for security management professionals"
    },
    { 
      certification: "Certified Information Security Manager (CISM)", 
      duration: "3-4 months prep", 
      requirement: "5 years experience",
      cost: "₹40,000-55,000",
      description: "Focus on information security management"
    },
    { 
      certification: "Certified Ethical Hacker (CEH)", 
      duration: "2-3 months prep", 
      requirement: "2 years experience",
      cost: "₹35,000-45,000",
      description: "Ethical hacking and penetration testing skills"
    },
    { 
      certification: "CompTIA Security+", 
      duration: "1-2 months prep", 
      requirement: "Entry level",
      cost: "₹25,000-35,000",
      description: "Foundation-level security certification"
    }
  ];

  const careerHierarchy = [
    { rank: "Security Analyst", years: "0-2 years", salary: "₹4-8 lakhs/year" },
    { rank: "Senior Security Analyst", years: "2-4 years", salary: "₹8-15 lakhs/year" },
    { rank: "Security Specialist", years: "4-6 years", salary: "₹15-25 lakhs/year" },
    { rank: "Cyber Security Manager", years: "6-10 years", salary: "₹25-45 lakhs/year" },
    { rank: "Senior Security Manager", years: "10-15 years", salary: "₹45-70 lakhs/year" },
    { rank: "CISO/Security Director", years: "15+ years", salary: "₹70 lakhs-2 crores/year" }
  ];

  const skillRequirements = [
    "Risk Assessment and Management",
    "Incident Response and Forensics",
    "Network Security Architecture",
    "Cloud Security (AWS, Azure, GCP)",
    "Compliance and Governance (ISO 27001, SOX)",
    "Security Tools (SIEM, IDS/IPS, Firewalls)",
    "Leadership and Team Management",
    "Business Communication Skills"
  ];

  const topInstitutes = [
    { institute: "Indian Institute of Technology (IIT)", location: "Multiple Cities", type: "Government", duration: "4 years B.Tech" },
    { institute: "National Institute of Technology (NIT)", location: "Multiple Cities", type: "Government", duration: "4 years B.Tech" },
    { institute: "Indian Statistical Institute (ISI)", location: "Kolkata, Delhi", type: "Government", duration: "3 years M.Tech" },
    { institute: "IIIT Hyderabad", location: "Hyderabad", type: "Government", duration: "4 years B.Tech" },
    { institute: "Amity University", location: "Multiple Cities", type: "Private", duration: "4 years B.Tech" },
    { institute: "VIT University", location: "Vellore, Chennai", type: "Private", duration: "4 years B.Tech" }
  ];

  const specializations = [
    "Network Security",
    "Application Security", 
    "Cloud Security",
    "Identity & Access Management",
    "Digital Forensics",
    "Threat Intelligence",
    "Compliance & Risk Management",
    "Security Architecture"
  ];

  const topCompanies = [
    { company: "TCS", type: "Indian MNC", package: "₹15-40 lakhs" },
    { company: "Infosys", type: "Indian MNC", package: "₹12-35 lakhs" },
    { company: "Wipro", type: "Indian MNC", package: "₹10-30 lakhs" },
    { company: "Microsoft", type: "Foreign MNC", package: "₹25-80 lakhs" },
    { company: "Amazon", type: "Foreign MNC", package: "₹30-1.2 crores" },
    { company: "Google", type: "Foreign MNC", package: "₹40-1.5 crores" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto text-6xl mb-6 text-red-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-red-300"> Cyber Security Manager</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to protecting organizations from cyber threats and leading security teams in the digital age
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Cyber Security Manager Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Cyber Security Manager?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Cyber Security Manager is a senior professional responsible for overseeing an organization's information security strategy, implementing security policies, and managing security teams to protect against cyber threats and data breaches.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  They combine technical expertise with leadership skills to ensure organizational security posture, compliance with regulations, and incident response capabilities while managing budgets and security technologies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Develop security strategies and policies
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Lead incident response and investigation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Manage security budgets and vendors
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Ensure regulatory compliance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Train and mentor security teams
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-red-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Preferred Qualifications</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Advanced Degree:</span> MBA or M.Tech in Cyber Security
                </div>
                <div className="text-black">
                  <span className="font-medium">Industry Knowledge:</span> Understanding of business operations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Certifications & Training</h2>
            </div>
            <div className="space-y-6">
              {certificationTypes.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{cert.certification}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{cert.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{cert.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{cert.cost}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{cert.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLaptop className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills Required</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillRequirements.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaKey className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specializations.map((specialization, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaLock className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{specialization}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Educational Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Educational Institutes in India</h2>
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
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${institute.type === 'Government' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
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
                <div key={index} className={`rounded-xl p-6 border ${index === 3 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'}`}>
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

        {/* Top Hiring Companies */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaNetworkWired className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Hiring Companies</h2>
            </div>
            <div className="space-y-4">
              {topCompanies.map((company, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{company.company}</h3>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${company.type === 'Indian MNC' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
                        {company.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{company.package}</span>
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
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Education Foundation</h3>
                  <p className="text-gray-600">Complete bachelor's degree in Computer Science, IT, or related field</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Entry-Level Experience</h3>
                  <p className="text-gray-600">Start as Security Analyst or IT Professional, gain 2-3 years experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Professional Certifications</h3>
                  <p className="text-gray-600">Obtain industry certifications like Security+, CEH, or CISSP</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Leadership Development</h3>
                  <p className="text-gray-600">Develop management skills and gain team leadership experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Management Role</h3>
                  <p className="text-gray-600">Transition to Cyber Security Manager with 5-7 years total experience</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Links</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Professional Organizations</h3>
                <div className="space-y-3">
                  <a href="https://www.isc2.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-red-600 mr-3 group-hover:text-red-800" />
                    <div>
                      <div className="font-medium text-gray-800">(ISC)² International</div>
                      <div className="text-sm text-gray-600">CISSP and other security certifications</div>
                    </div>
                  </a>
                  <a href="https://www.isaca.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">ISACA</div>
                      <div className="text-sm text-gray-600">CISM and governance certifications</div>
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
                      <span className="text-gray-700">Stay updated with latest cyber threats and trends</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong business communication skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a professional network in cybersecurity</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Gain hands-on experience with security tools</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Understand compliance requirements and frameworks</span>
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
  
