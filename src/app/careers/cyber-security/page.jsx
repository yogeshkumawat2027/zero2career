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
  FaLock,
  FaLaptop,
  FaCode,
  FaServer,
  FaNetworkWired,
  FaBug,
  FaEye,
  FaKey,
  FaCertificate
} from 'react-icons/fa';

export default function CyberSecurityPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Background", detail: "Any graduate or technical background preferred" },
    { icon: FaGraduationCap, title: "Education", detail: "B.Tech/B.E./BCA/MCA or equivalent degree" },
    { icon: FaCalendarAlt, title: "Age Range", detail: "Typically 21-35 years for most positions" },
    { icon: FaLaptop, title: "Technical Skills", detail: "Programming knowledge and networking basics" }
  ];

  const careerPaths = [
    { 
      role: "Ethical Hacker/Penetration Tester", 
      type: "Offensive Security",
      duration: "6-12 months training",
      salary: "₹4-15 LPA",
      description: "Finding vulnerabilities in systems through authorized hacking"
    },
    { 
      role: "SOC Analyst", 
      type: "Defensive Security",
      duration: "3-6 months training",
      salary: "₹3-8 LPA",
      description: "Monitor and analyze security events in Security Operations Centers"
    },
    { 
      role: "Incident Response Specialist", 
      type: "Crisis Management",
      duration: "6-12 months experience",
      salary: "₹6-18 LPA",
      description: "Respond to and manage cybersecurity incidents and breaches"
    },
    { 
      role: "Cybersecurity Consultant", 
      type: "Advisory Services",
      duration: "2-5 years experience",
      salary: "₹8-25 LPA",
      description: "Provide strategic security advice to organizations"
    }
  ];

  const jobProfiles = [
    { post: "Junior Security Analyst", company: "IT Companies/Banks", salary: "₹3-6 LPA", duties: "Monitor security tools, basic incident analysis" },
    { post: "Penetration Tester", company: "Cybersecurity Firms", salary: "₹5-12 LPA", duties: "Conduct security assessments and vulnerability testing" },
    { post: "Security Engineer", company: "Tech Companies", salary: "₹6-15 LPA", duties: "Design and implement security solutions" },
    { post: "CISO/Security Manager", company: "Large Enterprises", salary: "₹15-50 LPA", duties: "Lead security strategy and team management" },
    { post: "Forensics Analyst", company: "Law Enforcement/Private", salary: "₹4-12 LPA", duties: "Digital evidence analysis and investigation" },
    { post: "Compliance Officer", company: "Financial Services", salary: "₹6-18 LPA", duties: "Ensure regulatory compliance and risk management" }
  ];

  const technicalSkills = [
    { 
      category: "Programming Languages",
      skills: ["Python", "Java", "C/C++", "JavaScript", "PowerShell", "Bash", "SQL", "Assembly Language"]
    },
    { 
      category: "Security Tools",
      skills: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP", "Nessus", "Splunk", "ELK Stack"]
    },
    { 
      category: "Operating Systems",
      skills: ["Linux", "Windows", "Unix", "macOS", "VMware", "Docker", "Kubernetes"]
    },
    { 
      category: "Networking & Protocols",
      skills: ["TCP/IP", "DNS", "DHCP", "VPN", "Firewalls", "IDS/IPS", "SIEM", "Network Forensics"]
    },
    { 
      category: "Cybersecurity Domains",
      skills: ["Web App Security", "Network Security", "Cloud Security", "Mobile Security", "IoT Security", "Blockchain Security"]
    }
  ];

  const certifications = [
    { cert: "CEH (Certified Ethical Hacker)", provider: "EC-Council", level: "Intermediate", cost: "₹60,000", validity: "3 years" },
    { cert: "CISSP", provider: "ISC2", level: "Advanced", cost: "₹55,000", validity: "3 years" },
    { cert: "CISM", provider: "ISACA", level: "Management", cost: "₹50,000", validity: "3 years" },
    { cert: "CompTIA Security+", provider: "CompTIA", level: "Entry", cost: "₹25,000", validity: "3 years" },
    { cert: "OSCP", provider: "Offensive Security", level: "Advanced", cost: "₹90,000", validity: "Lifetime" },
    { cert: "CISA", provider: "ISACA", level: "Audit", cost: "₹45,000", validity: "3 years" }
  ];

  const preparationTips = [
    "Start with networking fundamentals and operating system basics",
    "Learn programming languages like Python for automation and scripting",
    "Practice on platforms like TryHackMe, HackTheBox, and VulnHub",
    "Set up your own lab environment with virtual machines",
    "Follow cybersecurity news and stay updated with latest threats",
    "Join cybersecurity communities and forums for learning",
    "Work on real-world projects and document your learning",
    "Consider internships or entry-level positions to gain experience"
  ];

  const careerGrowth = [
    { level: "Junior Security Analyst", experience: "0-2 years", salary: "₹3-6 LPA" },
    { level: "Security Analyst", experience: "2-4 years", salary: "₹6-10 LPA" },
    { level: "Senior Security Analyst", experience: "4-6 years", salary: "₹10-15 LPA" },
    { level: "Security Consultant/Specialist", experience: "6-8 years", salary: "₹15-25 LPA" },
    { level: "Security Manager", experience: "8-12 years", salary: "₹25-40 LPA" },
    { level: "CISO/Security Director", experience: "12+ years", salary: "₹40-80 LPA" }
  ];

  const industryDomains = [
    { 
      sector: "Banking & Financial Services",
      companies: ["HDFC", "ICICI", "Paytm", "PhonePe", "Razorpay"],
      description: "High security requirements for financial transactions and customer data"
    },
    { 
      sector: "IT Services & Consulting",
      companies: ["TCS", "Infosys", "Wipro", "Deloitte", "PwC", "EY"],
      description: "Providing cybersecurity services to clients across industries"
    },
    { 
      sector: "Product Companies",
      companies: ["Microsoft", "Google", "Amazon", "Adobe", "Salesforce"],
      description: "Securing products and platforms used by millions globally"
    },
    { 
      sector: "Government & Defense",
      companies: ["DRDO", "ISRO", "NIC", "C-DAC", "CERT-In"],
      description: "National security and critical infrastructure protection"
    },
    { 
      sector: "Cybersecurity Specialized Firms",
      companies: ["CyberArk", "Palo Alto", "FireEye", "CrowdStrike", "Rapid7"],
      description: "Dedicated cybersecurity product and service companies"
    },
    { 
      sector: "Healthcare & Pharmaceuticals",
      companies: ["Apollo", "Fortis", "Dr. Reddy's", "Cipla"],
      description: "Protecting sensitive medical data and research information"
    }
  ];

  const learningPath = [
    { phase: "Foundation (0-3 months)", skills: "Computer Networks, Operating Systems, Basic Programming", resources: "Online courses, YouTube tutorials" },
    { phase: "Security Basics (3-6 months)", skills: "Security Fundamentals, Cryptography, Risk Management", resources: "CompTIA Security+ course" },
    { phase: "Hands-on Practice (6-12 months)", skills: "Penetration Testing, Vulnerability Assessment", resources: "TryHackMe, HackTheBox, Cybrary" },
    { phase: "Specialization (12+ months)", skills: "Choose domain: Web Security, Network Security, etc.", resources: "Advanced certifications, real projects" }
  ];

  const jobMarketTrends = [
    { trend: "High Demand", stat: "3.5 Million", description: "Global cybersecurity job shortage" },
    { trend: "Salary Growth", stat: "15-20%", description: "Annual salary increment in cybersecurity roles" },
    { trend: "Remote Work", stat: "70%", description: "Cybersecurity jobs offer remote work options" },
    { trend: "Skills Gap", stat: "2.72 Million", description: "Unfilled cybersecurity positions globally" }
  ];

  const emergingTechnologies = [
    { tech: "AI/ML in Security", application: "Threat detection, behavioral analysis, automated response" },
    { tech: "Zero Trust Architecture", application: "Never trust, always verify security model" },
    { tech: "Cloud Security", application: "AWS, Azure, GCP security configurations" },
    { tech: "IoT Security", application: "Securing connected devices and smart systems" },
    { tech: "Blockchain Security", application: "Smart contract auditing, DeFi security" },
    { tech: "DevSecOps", application: "Integrating security into development lifecycle" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cyber Security
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Protect the digital world - Your complete guide to building a successful cybersecurity career
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Cyber Security Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Cyber Security?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Cyber Security is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With the digital transformation accelerating globally, cybersecurity professionals are in extremely high demand. This field offers excellent career growth, competitive salaries, and the opportunity to work on cutting-edge technologies while protecting critical infrastructure.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Cybersecurity?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    High demand, low supply of professionals
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Excellent salary packages
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Continuous learning opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Work remotely from anywhere
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Make a real impact protecting society
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Market Trends</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobMarketTrends.map((trend, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{trend.trend}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">{trend.stat}</div>
                  <p className="text-gray-600 text-sm">{trend.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility & Background */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Who Can Enter Cybersecurity?</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Entry Points by Background</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-700">
                  <span className="font-medium">Freshers:</span> Security Analyst, SOC Analyst roles
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">IT Professionals:</span> Security Engineer, Consultant roles  
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">Non-IT:</span> GRC, Compliance, Risk Management roles
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLock className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular Career Paths</h2>
            </div>
            <div className="grid gap-6">
              {careerPaths.map((path, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{path.role}</h3>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">{path.type}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Learning Time:</span>
                      <p className="font-medium text-gray-800">{path.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Salary Range:</span>
                      <p className="font-medium text-green-600">{path.salary}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Type:</span>
                      <p className="font-medium text-gray-800">{path.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{path.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Learning Roadmap</h2>
            </div>
            <div className="space-y-6">
              {learningPath.map((phase, index) => (
                <div key={index} className="flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-6">
                    <span className="text-indigo-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{phase.phase}</h3>
                    <p className="text-gray-700 text-sm mb-2"><span className="font-medium">Skills:</span> {phase.skills}</p>
                    <p className="text-gray-600 text-xs"><span className="font-medium">Resources:</span> {phase.resources}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Technical Skills Required</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {technicalSkills.map((skillSet, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{skillSet.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Sectors */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaNetworkWired className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Sectors & Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {industryDomains.map((domain, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{domain.sector}</h3>
                  <p className="text-gray-700 text-sm mb-4">{domain.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {domain.companies.map((company, companyIndex) => (
                        <span key={companyIndex} className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Profiles & Salaries */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Profiles & Salary Ranges</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-teal-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Position</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Industry</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Salary Range</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Key Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                  {jobProfiles.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{job.post}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{job.company}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{job.salary}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{job.duties}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCertificate className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Important Certifications</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-yellow-50 to-orange-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Certification</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Provider</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Level</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Cost (Approx)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Validity</th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((cert, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{cert.cert}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{cert.provider}</td>
                      <td className="border border-gray-200 px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cert.level === 'Entry' ? 'bg-green-100 text-green-700' :
                          cert.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          cert.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {cert.level}
                        </span>
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{cert.cost}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{cert.validity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Emerging Technologies */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCode className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Emerging Technologies in Cybersecurity</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergingTechnologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{tech.tech}</h3>
                  <p className="text-gray-700 text-sm">{tech.application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation Strategy */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">How to Get Started</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-100">
                  <FaAward className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Growth */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Path</h2>
            </div>
            <div className="space-y-6">
              {careerGrowth.map((level, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{level.level}</h3>
                      <p className="text-gray-600">{level.experience}</p>
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

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure the Digital World?</h2>
            <p className="text-xl mb-8 text-blue-100">Start your cybersecurity journey today and build a rewarding career protecting what matters most!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start Learning
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
