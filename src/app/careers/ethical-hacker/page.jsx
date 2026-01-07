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
  FaSearch,
  FaEye,
  FaBalanceScale,
  FaHandcuffs,
  FaUserShield,
  FaBuilding,
  FaFlag,
  FaStar,
  FaMedal,
  FaPlane,
  FaTrain,
  FaRoad,
  FaMountain,
  FaGlobe,
  FaHome,
  FaHeart,
  FaRunning,
  FaWeight,
  FaEyeSlash,
  FaFirstAid,
  FaGun,
  FaRadio,
  FaCar,
  FaHelicopter,
  FaDumbbell,
  FaAtom,
  FaLaptopCode,
  FaFlask,
  FaMicroscope,
  FaIndustry,
  FaLightbulb,
  FaSpaceShuttle,
  FaSatellite,
  FaCrosshairs,
  FaRadar,
  FaPlug,
  FaWifi,
  FaBattery,
  FaSolarPanel,
  FaRobot,
  FaDesktop,
  FaMicrochip,
  FaCircuitBoard,
  FaMobile,
  FaBug,
  FaLock,
  FaUnlock,
  FaKey,
  FaFingerprint,
  FaNetworkWired,
  FaServer,
  FaDatabase,
  FaCode,
  FaTerminal,
  FaHackerrank,
  FaSkull,
  FaExclamationTriangle
} from 'react-icons/fa';

export default function EthicalHackerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "B.E/B.Tech CS/IT or equivalent experience" },
    { icon: FaGraduationCap, title: "Skills", detail: "Programming, Networking, Security fundamentals" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 15+ years based on role" },
    { icon: FaShieldAlt, title: "Certification", detail: "CEH, CISSP, OSCP certifications preferred" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "4 years",
      program: "B.E/B.Tech Computer Science, IT, or Cybersecurity",
      focus: "Programming, networking, operating systems, security fundamentals",
      cost: "₹50,000-8 LPA (government to private colleges)",
      outcomes: "Entry-level cybersecurity analyst, junior penetration tester positions"
    },
    { 
      level: "Master's Degree (Optional)",
      duration: "2 years",
      program: "M.E/M.Tech Cybersecurity, Information Security",
      focus: "Advanced security concepts, cryptography, digital forensics",
      cost: "₹1-6 LPA for M.Tech programs",
      outcomes: "Senior security roles, specialized positions, higher starting salaries"
    },
    { 
      level: "Professional Certifications",
      duration: "Ongoing",
      program: "Industry certifications like CEH, CISSP, OSCP, CISM",
      focus: "Practical penetration testing, security management, hands-on skills",
      cost: "₹25,000-3 LPA per certification",
      outcomes: "Career advancement, salary increment, specialization credibility"
    },
    { 
      level: "Bootcamps & Training",
      duration: "3-12 months",
      program: "Intensive cybersecurity bootcamps, practical training programs",
      focus: "Hands-on penetration testing, real-world scenarios, tool mastery",
      cost: "₹50,000-5 LPA for intensive programs",
      outcomes: "Rapid skill development, industry connections, job placement assistance"
    }
  ];

  const specializationAreas = [
    { 
      area: "Penetration Testing",
      description: "Simulate cyberattacks to identify vulnerabilities in systems",
      applications: "Web applications, networks, mobile apps, infrastructure testing",
      jobRoles: "Penetration Tester, Security Consultant, Red Team Specialist",
      growth: "High demand with increasing cyber threats"
    },
    { 
      area: "Web Application Security",
      description: "Test and secure web applications against various attacks",
      applications: "OWASP Top 10, SQL injection, XSS, authentication bypasses",
      jobRoles: "Web App Security Tester, Application Security Engineer",
      growth: "Critical need with digital transformation"
    },
    { 
      area: "Network Security Testing",
      description: "Assess network infrastructure for security weaknesses",
      applications: "Firewall testing, wireless security, network segmentation",
      jobRoles: "Network Security Analyst, Infrastructure Penetration Tester",
      growth: "Stable demand with network complexity growth"
    },
    { 
      area: "Mobile Application Security",
      description: "Security testing for Android and iOS applications",
      applications: "Mobile app vulnerabilities, API testing, device security",
      jobRoles: "Mobile Security Tester, Mobile App Security Analyst",
      growth: "Growing with mobile-first businesses"
    },
    { 
      area: "Cloud Security Assessment",
      description: "Evaluate cloud infrastructure and services security",
      applications: "AWS, Azure, GCP security, container security, DevSecOps",
      jobRoles: "Cloud Security Engineer, Cloud Penetration Tester",
      growth: "Rapidly expanding with cloud adoption"
    },
    { 
      area: "Social Engineering & OSINT",
      description: "Human factor security testing and open source intelligence",
      applications: "Phishing campaigns, physical security, information gathering",
      jobRoles: "Social Engineering Specialist, OSINT Analyst",
      growth: "Increasing focus on human vulnerabilities"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "IT Services & Consulting",
      companies: "TCS, Infosys, Wipro, Accenture, Deloitte, PwC, EY, KPMG",
      roles: "Security Consultant, Penetration Tester, Security Analyst, Cyber Risk Consultant",
      salary: "₹6-25 LPA",
      growth: "High demand for cybersecurity consulting services"
    },
    { 
      sector: "Cybersecurity Product Companies",
      companies: "FireEye, CrowdStrike, Palo Alto Networks, Fortinet, Check Point, Symantec",
      roles: "Security Researcher, Product Security Engineer, Threat Hunter, Malware Analyst",
      salary: "₹8-40 LPA",
      growth: "Strong growth with increasing security product demand"
    },
    { 
      sector: "Banking & Financial Services",
      companies: "HDFC Bank, ICICI, SBI, JPMorgan, Goldman Sachs, American Express",
      roles: "Cybersecurity Analyst, Information Security Officer, Fraud Analyst",
      salary: "₹7-30 LPA",
      growth: "Critical need with digital banking transformation"
    },
    { 
      sector: "Government & Defense",
      companies: "CERT-In, NIC, DRDO, ISRO, Intelligence Agencies, Cyber Crime Units",
      roles: "Cyber Security Analyst, Digital Forensics Expert, Cyber Crime Investigator",
      salary: "₹5-20 LPA",
      growth: "Increasing focus on national cybersecurity"
    },
    { 
      sector: "Technology Companies",
      companies: "Google, Microsoft, Amazon, Meta, Apple, Netflix, Uber",
      roles: "Security Engineer, Bug Bounty Hunter, Product Security Lead, DevSecOps Engineer",
      salary: "₹12-60 LPA",
      growth: "High demand for securing digital platforms"
    },
    { 
      sector: "Healthcare & Pharma",
      companies: "Apollo Hospitals, Fortis, Dr. Reddy's, Cipla, Biocon",
      roles: "Healthcare Security Analyst, Compliance Officer, Privacy Officer",
      salary: "₹6-22 LPA",
      growth: "Growing with healthcare digitalization"
    }
  ];

  const jobProfiles = [
    { post: "Junior Security Analyst", experience: "0-2 years", salary: "₹4-8 LPA", duties: "Vulnerability scanning, security monitoring, incident response assistance" },
    { post: "Penetration Tester", experience: "2-4 years", salary: "₹6-15 LPA", duties: "Web app testing, network penetration testing, report writing" },
    { post: "Senior Security Consultant", experience: "4-7 years", salary: "₹12-25 LPA", duties: "Advanced penetration testing, client engagement, team leadership" },
    { post: "Security Manager/Lead", experience: "7-10 years", salary: "₹20-35 LPA", duties: "Program management, business development, strategic planning" },
    { post: "Principal Security Architect", experience: "10-15 years", salary: "₹30-60 LPA", duties: "Security architecture design, innovation leadership, enterprise security" },
    { post: "Chief Security Officer (CSO)", experience: "15+ years", salary: "₹50 LPA-2 Crores", duties: "Executive leadership, organizational security strategy, board interaction" }
  ];

  const topColleges = [
    { name: "Indian Institute of Technology (IITs)", courses: "B.Tech/M.Tech Computer Science", ranking: "Top Tier", fees: "₹8-12 LPA", placements: "₹15-50 LPA average" },
    { name: "National Institute of Technology (NITs)", courses: "B.Tech/M.Tech CS/IT", ranking: "Tier 1", fees: "₹5-8 LPA", placements: "₹8-25 LPA average" },
    { name: "Indian Institute of Information Technology", courses: "B.Tech IT, Cybersecurity", ranking: "Specialized Institutes", fees: "₹6-10 LPA", placements: "₹10-30 LPA average" },
    { name: "BITS Pilani", courses: "B.E Computer Science", ranking: "Top Private", fees: "₹19-25 LPA", placements: "₹12-40 LPA average" },
    { name: "VIT/SRM/Manipal University", courses: "B.Tech CS/Cybersecurity", ranking: "Top Private Universities", fees: "₹15-20 LPA", placements: "₹5-18 LPA average" },
    { name: "Indian Statistical Institute (ISI)", courses: "M.Tech Computer Science", ranking: "Research Institute", fees: "₹2-4 LPA", placements: "₹8-25 LPA average" }
  ];

  const technicalSkills = [
    { 
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "C/C++", "Java", "PowerShell", "Bash/Shell Scripting"]
    },
    { 
      category: "Security Tools",
      skills: ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "OWASP ZAP", "Nessus", "Kali Linux"]
    },
    { 
      category: "Frameworks & Methodologies",
      skills: ["OWASP Testing Guide", "NIST Framework", "PTES", "OSSTMM", "ISO 27001", "SANS Top 20"]
    },
    { 
      category: "Cloud & DevSecOps",
      skills: ["AWS Security", "Azure Security", "Docker Security", "Kubernetes Security", "CI/CD Security", "Infrastructure as Code"]
    }
  ];

  const professionalCertifications = [
    { 
      cert: "Certified Ethical Hacker (CEH)",
      provider: "EC-Council",
      duration: "3-6 months preparation",
      cost: "$1,199",
      description: "Entry-level certification covering ethical hacking methodologies and tools"
    },
    { 
      cert: "Offensive Security Certified Professional (OSCP)",
      provider: "Offensive Security",
      duration: "6-12 months preparation",
      cost: "$1,499",
      description: "Hands-on penetration testing certification with practical lab experience"
    },
    { 
      cert: "Certified Information Systems Security Professional (CISSP)",
      provider: "ISC²",
      duration: "6-9 months preparation",
      cost: "$749",
      description: "Advanced security management certification for experienced professionals"
    },
    { 
      cert: "GIAC Penetration Tester (GPEN)",
      provider: "SANS/GIAC",
      duration: "4-8 months preparation",
      cost: "$7,000-8,000",
      description: "Comprehensive penetration testing certification with hands-on focus"
    },
    { 
      cert: "Certified Information Security Manager (CISM)",
      provider: "ISACA",
      duration: "4-6 months preparation",
      cost: "$1,520",
      description: "Information security management and governance certification"
    }
  ];

  const careerProgression = [
    { level: "Security Analyst", experience: "0-2 years", salary: "₹4-8 LPA", focus: "Learning fundamentals, vulnerability assessment, monitoring" },
    { level: "Penetration Tester", experience: "2-4 years", salary: "₹6-15 LPA", focus: "Hands-on testing, tool mastery, client interaction" },
    { level: "Senior Security Consultant", experience: "4-7 years", salary: "₹12-25 LPA", focus: "Advanced testing, team leadership, business development" },
    { level: "Security Manager/Architect", experience: "7-10 years", salary: "₹20-35 LPA", focus: "Strategic planning, program management, enterprise security" },
    { level: "Principal Consultant", experience: "10-15 years", salary: "₹30-60 LPA", focus: "Thought leadership, innovation, organizational strategy" },
    { level: "Chief Security Officer", experience: "15+ years", salary: "₹50 LPA-2 Cr", focus: "Executive leadership, business alignment, industry influence" }
  ];

  const emergingTrends = [
    { 
      trend: "Cloud Security Testing",
      description: "Security assessment of cloud infrastructure and services",
      opportunities: "AWS/Azure/GCP pentesting, container security, serverless security",
      timeline: "High growth for next 5-8 years"
    },
    { 
      trend: "IoT & OT Security",
      description: "Internet of Things and Operational Technology security testing",
      opportunities: "Industrial control systems, smart devices, automotive security",
      timeline: "Rapidly expanding over next 8-10 years"
    },
    { 
      trend: "AI/ML Security Testing",
      description: "Security assessment of artificial intelligence and machine learning systems",
      opportunities: "Model security, adversarial AI, data poisoning, AI governance",
      timeline: "Emerging field with 5-7 year growth horizon"
    },
    { 
      trend: "DevSecOps Integration",
      description: "Security integration in development and operations processes",
      opportunities: "Shift-left security, automated security testing, secure SDLC",
      timeline: "Current trend with 3-5 year maturation"
    },
    { 
      trend: "Zero Trust Architecture Testing",
      description: "Security validation for zero trust network models",
      opportunities: "Identity verification, micro-segmentation, continuous authentication",
      timeline: "Growing adoption over next 5-8 years"
    },
    { 
      trend: "Blockchain & Crypto Security",
      description: "Security testing for blockchain applications and cryptocurrency systems",
      opportunities: "Smart contract auditing, DeFi security, NFT security",
      timeline: "Volatile but growing sector for next 3-5 years"
    }
  ];

  const governmentOpportunities = [
    { 
      organization: "Computer Emergency Response Team India (CERT-In)",
      positions: "Cyber Security Analyst, Incident Response Specialist, Vulnerability Researcher",
      selection: "Technical examination, interview, security clearance",
      benefits: "₹56,100-1,77,500 pay scale, national security contribution, advanced training"
    },
    { 
      organization: "National Technical Research Organisation (NTRO)",
      positions: "Technical Officer, Scientist, Cyber Intelligence Analyst",
      selection: "GATE, technical interview, comprehensive background check",
      benefits: "₹56,100-2,25,000 pay scale, intelligence work, cutting-edge technology"
    },
    { 
      organization: "Cyber Crime Investigation Cells",
      positions: "Cyber Crime Investigator, Digital Forensics Expert, Technical Consultant",
      selection: "Police recruitment, specialized training, technical assessment",
      benefits: "₹35,400-1,12,400 pay scale, law enforcement career, crime fighting"
    },
    { 
      organization: "Defense Research and Development Organisation (DRDO)",
      positions: "Scientist (Cyber Security), Technical Officer, Research Associate",
      selection: "DRDO SET exam, technical interview, security verification",
      benefits: "₹56,100-2,24,100 pay scale, defense research, innovation opportunities"
    },
    { 
      organization: "National Informatics Centre (NIC)",
      positions: "Systems Analyst, Technical Director, Cyber Security Specialist",
      selection: "NIC examination, technical assessment, interview process",
      benefits: "₹56,100-1,77,500 pay scale, e-governance projects, technology implementation"
    }
  ];

  const salaryRanges = [
    { sector: "IT Services & Consulting", fresher: "₹6-12 LPA", experienced: "₹12-25 LPA", senior: "₹20-40 LPA" },
    { sector: "Cybersecurity Products", fresher: "₹8-15 LPA", experienced: "₹15-40 LPA", senior: "₹35-80 LPA" },
    { sector: "Banking & Finance", fresher: "₹7-14 LPA", experienced: "₹14-30 LPA", senior: "₹25-55 LPA" },
    { sector: "Technology Companies", fresher: "₹12-20 LPA", experienced: "₹20-60 LPA", senior: "₹50-2 Crores" },
    { sector: "Government & Defense", fresher: "₹5-10 LPA", experienced: "₹10-20 LPA", senior: "₹18-35 LPA" },
    { sector: "Healthcare & Pharma", fresher: "₹6-12 LPA", experienced: "₹12-22 LPA", senior: "₹20-40 LPA" },
    { sector: "Independent Consulting", fresher: "₹8-15 LPA", experienced: "₹15-50 LPA", senior: "₹40-1.5 Crores" },
    { sector: "Bug Bounty/Freelance", fresher: "₹2-8 LPA", experienced: "₹8-30 LPA", senior: "₹25-1 Crore" }
  ];

  const preparationTips = [
    "Build strong programming foundation in Python, JavaScript, and scripting languages",
    "Set up home lab with virtual machines for hands-on practice with security tools",
    "Start with free resources like TryHackMe, HackTheBox, and OverTheWire challenges",
    "Learn networking fundamentals and understand TCP/IP, HTTP/HTTPS protocols deeply",
    "Practice with vulnerable applications like DVWA, WebGoat, and Metasploitable",
    "Study for entry-level certifications like CEH or CompTIA Security+",
    "Join cybersecurity communities, forums, and attend security conferences",
    "Follow security researchers, read vulnerability reports and security blogs",
    "Develop report writing skills and learn to communicate technical findings clearly",
    "Stay updated with latest threats, vulnerabilities, and security tools through continuous learning"
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Cybersecurity Consulting Firm",
      investment: "₹10-50 lakhs",
      description: "Penetration testing, vulnerability assessments, security audits",
      potential: "High demand with increasing cyber threats and compliance requirements"
    },
    { 
      business: "Bug Bounty Platform",
      investment: "₹25 lakhs-2 crores",
      description: "Platform connecting security researchers with companies for bug hunting",
      potential: "Growing market with companies adopting crowdsourced security testing"
    },
    { 
      business: "Cybersecurity Training Institute",
      investment: "₹15-75 lakhs",
      description: "Professional training, certification courses, hands-on bootcamps",
      potential: "High demand for cybersecurity skills training and certification"
    },
    { 
      business: "Security Tool Development",
      investment: "₹20 lakhs-5 crores",
      description: "Custom security tools, automated testing frameworks, SaaS security solutions",
      potential: "Innovation opportunities in emerging security technologies"
    },
    { 
      business: "Incident Response Services",
      investment: "₹15-60 lakhs",
      description: "24/7 cyber incident response, digital forensics, breach investigation",
      potential: "Critical service with increasing cyber attacks and data breaches"
    },
    { 
      business: "Compliance & Audit Services",
      investment: "₹8-40 lakhs",
      description: "ISO 27001, SOC 2, PCI DSS compliance consulting and auditing",
      potential: "Steady demand with regulatory requirements and compliance mandates"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto text-6xl mb-6 text-red-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ethical Hacker
              <span className="text-red-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Secure the Digital World - Complete guide to building a successful career in Ethical Hacking & Cybersecurity
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Ethical Hacking Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Ethical Hacking</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Ethical Hacking, also known as penetration testing or white-hat hacking, involves authorized testing of computer systems, networks, and applications to identify security vulnerabilities. Ethical hackers use the same techniques as malicious hackers but with permission and for defensive purposes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With cyber threats growing exponentially, organizations need skilled professionals who can think like attackers to defend against them. Ethical hackers play a crucial role in securing digital infrastructure and protecting sensitive data.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Ethical Hacking?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    High-demand career field
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
                    Global job opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Protect organizations from cyber threats
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Work with cutting-edge technology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Requirements & Skills</h2>
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
          </div>
        </section>

        {/* Education Pathway */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Education & Learning Path</h2>
            </div>
            <div className="space-y-6">
              {educationPath.map((education, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{education.level}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{education.duration}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Program:</span>
                      <p className="font-medium text-gray-800">{education.program}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Cost:</span>
                      <p className="font-medium text-gray-800">{education.cost}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Duration:</span>
                      <p className="font-medium text-gray-800">{education.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2"><span className="font-medium">Focus:</span> {education.focus}</p>
                  <p className="text-gray-600 text-sm"><span className="font-medium">Outcomes:</span> {education.outcomes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Colleges */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Colleges for Cybersecurity</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Institution</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Courses</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Category</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fees</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Placements</th>
                  </tr>
                </thead>
                <tbody>
                  {topColleges.map((college, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{college.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{college.courses}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{college.ranking}</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-medium">{college.fees}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{college.placements}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBug className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {specializationAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{area.area}</h3>
                  <p className="text-gray-700 text-sm mb-3">{area.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">Applications:</span> {area.applications}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Job Roles:</span> {area.jobRoles}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Growth:</span> {area.growth}
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
              <FaIndustry className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Opportunities</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {industryOpportunities.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{industry.sector}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Companies:</span> {industry.companies}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Roles:</span> {industry.roles}
                    </div>
                    <div className="text-green-600 font-medium">
                      <span>Salary Range:</span> {industry.salary}
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Growth:</span> {industry.growth}
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
              <FaChartLine className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Path</h2>
            </div>
            <div className="space-y-6">
              {careerProgression.map((level, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{level.level}</h3>
                      <p className="text-gray-600">{level.experience}</p>
                      <p className="text-sm text-blue-600">{level.focus}</p>
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

        {/* Salary by Sector */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Salary Ranges by Sector</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-teal-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Sector</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fresher (0-2 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Experienced (5-10 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Senior (10+ years)</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryRanges.map((salary, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{salary.sector}</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-medium">{salary.fresher}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{salary.experienced}</td>
                      <td className="border border-gray-200 px-4 py-3 text-purple-600 font-medium">{salary.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skillCategory, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{skillCategory.category}</h3>
                  <div className="space-y-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Trends */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLightbulb className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Emerging Trends & Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergingTrends.map((trend, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{trend.trend}</h3>
                  <p className="text-gray-700 text-sm mb-3">{trend.description}</p>
                  <div className="space-y-2">
                    <div className="text-gray-600 text-sm">
                      <span className="font-medium">Opportunities:</span> {trend.opportunities}
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg text-sm">
                      <span className="font-medium">Timeline:</span> {trend.timeline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaShieldAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Government & Defense Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {governmentOpportunities.map((govt, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{govt.organization}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Positions:</span> {govt.positions}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Selection:</span> {govt.selection}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Benefits:</span> {govt.benefits}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAward className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Professional Certifications</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {professionalCertifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.cert}</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Provider:</span>
                      <span className="font-medium text-gray-800">{cert.provider}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-800">{cert.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-medium text-green-600">{cert.cost}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entrepreneurial Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLightbulb className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entrepreneurial Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {entrepreneurialOpportunities.map((business, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{business.business}</h3>
                  <p className="text-gray-700 text-sm mb-3">{business.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Investment:</span>
                      <span className="font-medium text-blue-600">{business.investment}</span>
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg text-sm">
                      <span className="font-medium">Potential:</span> {business.potential}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation Tips */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Preparation Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-100">
                  <FaShieldAlt className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure the Digital World?</h2>
            <p className="text-xl mb-8 text-red-100">Start your journey in Ethical Hacking and become a cybersecurity expert!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start Your Journey
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
