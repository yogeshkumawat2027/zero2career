import Link from 'next/link';
import React from 'react';
import { 
  FaMicroscope, 
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
  FaIndustry,
  FaShieldAlt,
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
  FaCalculator,
  FaChartBar,
  FaChartPie,
  FaTable,
  FaDatabase,
  FaFileExcel,
  FaDollarSign,
  FaUniversity,
  FaCreditCard,
  FaRegChartBar,
  FaPiggyBank,
  FaLanguage,
  FaHandshake,
  FaNewspaper,
  FaVideo,
  FaMicrophone,
  FaEnvelope,
  FaPhoneAlt,
  FaFax,
  FaWheelchair,
  FaBaby,
  FaChild,
  FaBroom,
  FaUtensils,
  FaBed,
  FaCoffee,
  FaWineBottle,
  FaGamepad,
  FaMusic,
  FaPaintBrush,
  FaFingerprint,
  FaDna,
  FaVial,
  FaCamera,
  FaPrint,
  FaMagnifyingGlass,
  FaBug,
  FaSkull,
  FaBrain,
  FaTooth,
  FaHammer
} from 'react-icons/fa';

export default function ForensicScientistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "B.Sc./M.Sc. in Forensic Science or related fields" },
    { icon: FaGraduationCap, title: "Skills", detail: "Scientific aptitude, attention to detail, analytical thinking" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 20+ years based on specialization" },
    { icon: FaShieldAlt, title: "Certification", detail: "Professional certifications in specialized techniques" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "B.Sc. Forensic Science, Chemistry, Biology, Physics, Computer Science",
      focus: "Basic forensic techniques, laboratory skills, scientific methodology, evidence handling",
      cost: "₹50,000-3 LPA (government to private colleges)",
      outcomes: "Junior forensic analyst, lab technician, crime scene investigator"
    },
    { 
      level: "Master's Degree",
      duration: "2 years",
      program: "M.Sc. Forensic Science, Criminology, Digital Forensics, Toxicology",
      focus: "Advanced forensic techniques, specialized investigations, research methodology",
      cost: "₹1-5 LPA for specialized programs",
      outcomes: "Forensic scientist, senior analyst, specialized investigator, lab supervisor"
    },
    { 
      level: "Specialized Certifications",
      duration: "6 months - 2 years",
      program: "DNA analysis, ballistics, digital forensics, toxicology certifications",
      focus: "Technical expertise, equipment operation, quality control, legal procedures",
      cost: "₹25,000-2 LPA per certification",
      outcomes: "Subject matter expert, specialized analyst, expert witness, consultant"
    },
    { 
      level: "Research & Ph.D.",
      duration: "3-5 years",
      program: "Ph.D. in Forensic Science, related research programs",
      focus: "Advanced research, new technique development, academic expertise",
      cost: "₹50,000-3 LPA with potential funding",
      outcomes: "Research scientist, professor, forensic laboratory director, consultant"
    }
  ];

  const specializationAreas = [
    { 
      area: "Crime Scene Investigation",
      description: "Collect, document, and preserve physical evidence from crime scenes",
      applications: "Murder scenes, burglary, assault cases, accident reconstruction",
      jobRoles: "Crime Scene Investigator, Evidence Technician, Scene Analyst",
      growth: "Steady demand with increasing crime investigation sophistication"
    },
    { 
      area: "DNA & Biological Evidence",
      description: "Analyze biological samples for identification and comparison",
      applications: "Paternity testing, criminal identification, mass disaster victim ID",
      jobRoles: "DNA Analyst, Serology Expert, Molecular Biologist",
      growth: "High growth with advancing genetic technologies"
    },
    { 
      area: "Digital Forensics & Cybercrime",
      description: "Investigate digital devices and cyber crimes for electronic evidence",
      applications: "Computer fraud, data theft, cybercrime investigation, mobile forensics",
      jobRoles: "Digital Forensic Analyst, Cyber Crime Investigator, Data Recovery Specialist",
      growth: "Rapidly expanding with increasing digital crime"
    },
    { 
      area: "Ballistics & Firearms Examination",
      description: "Analyze firearms, ammunition, and gunshot evidence",
      applications: "Shooting incidents, weapon identification, trajectory analysis",
      jobRoles: "Ballistics Expert, Firearms Examiner, Toolmark Analyst",
      growth: "Consistent demand for criminal investigations"
    },
    { 
      area: "Toxicology & Drug Analysis",
      description: "Identify and quantify drugs, poisons, and toxic substances",
      applications: "Drug-related crimes, poisoning cases, DUI investigations, autopsy support",
      jobRoles: "Forensic Toxicologist, Drug Analyst, Clinical Toxicologist",
      growth: "Growing with drug-related crime and workplace testing"
    },
    { 
      area: "Document & Handwriting Analysis",
      description: "Examine questioned documents and handwriting for authenticity",
      applications: "Fraud investigations, forgery cases, signature verification",
      jobRoles: "Document Examiner, Handwriting Analyst, Fraud Investigator",
      growth: "Stable demand with evolving document security challenges"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Government Forensic Laboratories",
      organizations: "Central Forensic Science Laboratory, State Forensic Labs, CBI, NIA",
      roles: "Forensic Scientist, Assistant Director, Scientific Officer, Lab Director",
      salary: "₹3-15 LPA",
      benefits: "Job security, government benefits, pension, research opportunities"
    },
    { 
      sector: "Law Enforcement Agencies",
      organizations: "Police Departments, Crime Investigation Departments, Special Investigation Teams",
      roles: "Crime Scene Investigator, Forensic Consultant, Technical Expert",
      salary: "₹4-12 LPA",
      benefits: "Field exposure, diverse cases, career progression, investigative experience"
    },
    { 
      sector: "Private Forensic Consulting",
      organizations: "Independent consultancies, legal firms, insurance companies",
      roles: "Forensic Consultant, Expert Witness, Private Investigator, Technical Advisor",
      salary: "₹6-25 LPA",
      benefits: "Higher compensation, flexible work, diverse clients, specialization opportunities"
    },
    { 
      sector: "Academic & Research Institutions",
      organizations: "Universities, research centers, forensic training institutes",
      roles: "Professor, Research Scientist, Training Coordinator, Academic Administrator",
      salary: "₹4-20 LPA",
      benefits: "Research opportunities, academic freedom, student interaction, knowledge advancement"
    },
    { 
      sector: "Corporate Security & Compliance",
      organizations: "Multinational corporations, financial institutions, IT companies",
      roles: "Security Analyst, Compliance Officer, Internal Investigator, Risk Assessor",
      salary: "₹5-18 LPA",
      benefits: "Corporate environment, regular hours, technology access, professional development"
    },
    { 
      sector: "Healthcare & Clinical Forensics",
      organizations: "Hospitals, medical institutions, pathology labs, clinical research",
      roles: "Clinical Forensic Specialist, Medical Legal Consultant, Pathology Assistant",
      salary: "₹4-16 LPA",
      benefits: "Medical environment, patient interaction, clinical exposure, healthcare benefits"
    }
  ];

  const careerProgression = [
    { level: "Junior Forensic Analyst/Technician", experience: "0-3 years", salary: "₹2.5-6 LPA", focus: "Basic evidence processing, sample analysis, documentation, learning techniques" },
    { level: "Forensic Scientist/Analyst", experience: "3-7 years", salary: "₹5-12 LPA", focus: "Independent case work, specialized analysis, quality control, mentoring juniors" },
    { level: "Senior Forensic Scientist", experience: "7-12 years", salary: "₹10-20 LPA", focus: "Complex case leadership, expert testimony, method development, team supervision" },
    { level: "Principal Scientist/Section Head", experience: "12-18 years", salary: "₹18-35 LPA", focus: "Department management, research projects, policy development, training programs" },
    { level: "Laboratory Director/Consultant", experience: "18-25 years", salary: "₹30-60 LPA", focus: "Strategic planning, laboratory operations, quality assurance, external relations" },
    { level: "Chief Forensic Expert/Professor", experience: "25+ years", salary: "₹50 LPA-1 Cr", focus: "Industry leadership, academic positions, consulting, research innovation" }
  ];

  const topColleges = [
    { name: "National Forensic Sciences University (NFSU)", courses: "B.Sc./M.Sc. Forensic Science", ranking: "Premier Forensic Institute", fees: "₹1-3 LPA", placements: "Excellent in government labs" },
    { name: "Amity Institute of Forensic Sciences", courses: "B.Sc./M.Sc. Forensic Science, Cyber Security", ranking: "Top Private Institute", fees: "₹2-4 LPA", placements: "Good industry connections" },
    { name: "Lok Nayak Jayaprakash Narayan NICFS", courses: "M.Sc. Forensic Science, Criminology", ranking: "Government Institute", fees: "₹50,000-1 LPA", placements: "Strong government placements" },
    { name: "Bundelkhand University", courses: "M.Sc. Forensic Science", ranking: "Established Program", fees: "₹30,000", placements: "Decent placement record" },
    { name: "Sardar Patel University of Police", courses: "Various forensic programs", ranking: "Police University", fees: "₹75,000", placements: "Law enforcement focus" },
    { name: "University of Delhi", courses: "M.Sc. Forensic Science, Anthropology", ranking: "Premier University", fees: "₹25,000", placements: "Research and academic focus" }
  ];

  const technicalSkills = [
    { 
      category: "Laboratory Techniques",
      skills: ["Microscopy & Imaging", "Chromatography (GC, LC, HPLC)", "Spectroscopy (IR, UV, MS)", "DNA Extraction & Analysis", "Chemical Analysis", "Sample Preparation"]
    },
    { 
      category: "Digital & Technology Skills",
      skills: ["Digital Evidence Recovery", "Computer Forensics Software", "Mobile Device Analysis", "Network Security Analysis", "Database Investigation", "Encryption & Decryption"]
    },
    { 
      category: "Documentation & Analysis",
      skills: ["Evidence Photography", "Report Writing", "Statistical Analysis", "Quality Control Procedures", "Chain of Custody", "Expert Testimony Preparation"]
    },
    { 
      category: "Specialized Instruments",
      skills: ["Comparison Microscopes", "FTIR Spectroscometers", "Gas Chromatographs", "DNA Sequencers", "3D Crime Scene Scanners", "Forensic Light Sources"]
    }
  ];

  const salaryRanges = [
    { sector: "Government Forensic Labs", fresher: "₹3-6 LPA", experienced: "₹8-15 LPA", senior: "₹12-25 LPA" },
    { sector: "Police & Investigation", fresher: "₹3.5-7 LPA", experienced: "₹8-16 LPA", senior: "₹15-30 LPA" },
    { sector: "Private Consulting", fresher: "₹4-8 LPA", experienced: "₹10-25 LPA", senior: "₹20-50 LPA" },
    { sector: "Academic Institutions", fresher: "₹3-6 LPA", experienced: "₹7-18 LPA", senior: "₹15-35 LPA" },
    { sector: "Corporate Security", fresher: "₹4-9 LPA", experienced: "₹9-20 LPA", senior: "₹18-40 LPA" },
    { sector: "Healthcare Forensics", fresher: "₹3.5-7 LPA", experienced: "₹8-18 LPA", senior: "₹16-32 LPA" },
    { sector: "International Organizations", fresher: "₹8-15 LPA", experienced: "₹15-35 LPA", senior: "₹30-75 LPA" }
  ];

  const emergingTrends = [
    { 
      trend: "Artificial Intelligence & Machine Learning",
      description: "AI-powered analysis for pattern recognition and automated evidence processing",
      opportunities: "AI forensics specialist, automated analysis systems, predictive modeling, smart evidence management",
      timeline: "Rapidly evolving with 3-5 year adoption timeline"
    },
    { 
      trend: "Blockchain & Cryptocurrency Forensics",
      description: "Investigation of blockchain transactions and cryptocurrency-related crimes",
      opportunities: "Blockchain analyst, cryptocurrency investigator, digital asset recovery, DeFi security",
      timeline: "High growth area with immediate demand"
    },
    { 
      trend: "IoT & Smart Device Forensics",
      description: "Analysis of Internet of Things devices and smart home technology evidence",
      opportunities: "IoT forensics specialist, smart device analysis, connected car forensics, wearable device investigation",
      timeline: "Emerging field with 2-4 year growth projection"
    },
    { 
      trend: "Advanced DNA Technologies",
      description: "Next-generation sequencing, phenotyping, and genealogical investigations",
      opportunities: "Genetic genealogist, phenotyping analyst, ancient DNA specialist, population genetics",
      timeline: "Continuous advancement with 5-7 year evolution"
    },
    { 
      trend: "Virtual Reality Crime Scene Reconstruction",
      description: "3D modeling and virtual reality for crime scene documentation and presentation",
      opportunities: "3D analyst, VR developer, crime scene reconstruction specialist, courtroom technology expert",
      timeline: "Growing adoption over next 3-5 years"
    },
    { 
      trend: "Environmental & Wildlife Forensics",
      description: "Investigation of environmental crimes and wildlife trafficking",
      opportunities: "Environmental forensic specialist, wildlife DNA analyst, pollution investigator, conservation forensics",
      timeline: "Increasing importance with 5-10 year growth"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "American Board of Criminalistics (ABC)",
      provider: "American Board of Criminalistics",
      duration: "2-3 years experience + examination",
      cost: "$500-1,500",
      description: "International certification for forensic scientists in various disciplines"
    },
    { 
      cert: "Certified Computer Security Incident Handler",
      provider: "SANS Institute",
      duration: "6 months preparation",
      cost: "$6,000-8,000",
      description: "Specialized certification for digital forensics and incident response"
    },
    { 
      cert: "International Association for Identification",
      provider: "IAI Certifications",
      duration: "1-2 years + practical experience",
      cost: "$300-800",
      description: "Professional certification in latent prints, crime scene, and forensic photography"
    },
    { 
      cert: "Certified Fraud Examiner (CFE)",
      provider: "Association of Certified Fraud Examiners",
      duration: "1 year preparation",
      cost: "$350-450",
      description: "Certification for fraud investigation and financial forensics"
    },
    { 
      cert: "DNA Analysis Certification",
      provider: "Various accredited labs",
      duration: "6 months - 1 year",
      cost: "₹50,000-2 LPA",
      description: "Specialized training in DNA analysis techniques and quality standards"
    }
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Private Forensic Consulting",
      investment: "₹10-50 lakhs",
      description: "Independent forensic consulting for legal firms, insurance companies, and corporations",
      potential: "High demand for specialized expertise and neutral expert opinions"
    },
    { 
      business: "Digital Forensics Lab",
      investment: "₹25 lakhs-2 crores",
      description: "Specialized laboratory for digital evidence recovery and cybercrime investigation",
      potential: "Rapidly growing market with increasing cybercrime rates"
    },
    { 
      business: "Forensic Training Institute",
      investment: "₹15-75 lakhs",
      description: "Professional training programs for law enforcement and forensic professionals",
      potential: "Growing need for continuous professional education and skills updating"
    },
    { 
      business: "Forensic Technology Solutions",
      investment: "₹20 lakhs-1 crore",
      description: "Development of forensic software, equipment, or analytical tools",
      potential: "Innovation opportunities in AI, automation, and advanced analysis techniques"
    },
    { 
      business: "Legal Support Services",
      investment: "₹8-40 lakhs",
      description: "Expert witness services, case analysis, and litigation support for legal proceedings",
      potential: "Consistent demand from legal system and growing complexity of cases"
    },
    { 
      business: "Corporate Investigation Services",
      investment: "₹12-60 lakhs",
      description: "Internal investigations, fraud detection, and corporate security consulting",
      potential: "Expanding corporate security needs and compliance requirements"
    }
  ];

  const preparationTips = [
    "Develop strong foundation in chemistry, biology, physics, and mathematics",
    "Build attention to detail and analytical thinking through laboratory work",
    "Gain hands-on experience through internships at forensic laboratories or police departments",
    "Stay updated with latest forensic techniques and technological developments",
    "Practice scientific report writing and documentation skills",
    "Develop communication skills for expert testimony and client interaction",
    "Learn relevant computer skills and digital investigation techniques",
    "Participate in forensic science competitions and case study analysis",
    "Build network with forensic professionals and law enforcement officers",
    "Maintain ethical standards and understanding of legal procedures"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaMicroscope className="mx-auto text-6xl mb-6 text-red-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Forensic Scientist
              <span className="text-red-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Solve Crimes with Science - Complete guide to building a career in Forensic Science & Criminal Investigation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Forensic Science Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Forensic Science Career</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Forensic Science applies scientific principles and techniques to investigate crimes and legal matters. Forensic scientists collect, analyze, and interpret physical evidence to help solve criminal cases, identify victims, and provide expert testimony in legal proceedings.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With advancing technology and increasing complexity of criminal activities, forensic scientists play a crucial role in the criminal justice system, using cutting-edge techniques like DNA analysis, digital forensics, and advanced laboratory methods to uncover the truth and ensure justice.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Forensic Science?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Contribute to justice and public safety
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Work with cutting-edge technology
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Diverse specialization options
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Intellectual challenges and problem-solving
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Job security in government sector
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Growing field with new opportunities
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
              <h2 className="text-3xl font-bold text-gray-800">Top Forensic Science Institutions</h2>
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
              <FaFlask className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Forensic Specializations</h2>
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
              <h2 className="text-3xl font-bold text-gray-800">Career Opportunities</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {industryOpportunities.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{industry.sector}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Organizations:</span> {industry.organizations}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Roles:</span> {industry.roles}
                    </div>
                    <div className="text-green-600 font-medium">
                      <span>Salary Range:</span> {industry.salary}
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Benefits:</span> {industry.benefits}
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
              <FaChartBar className="text-3xl text-blue-600 mr-4" />
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
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fresher (0-3 years)</th>
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
              <h2 className="text-3xl font-bold text-gray-800">Emerging Trends & Technologies</h2>
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
                  <FaMicroscope className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Solve Crimes with Science?</h2>
            <p className="text-xl mb-8 text-red-100">Start your journey in Forensic Science and contribute to justice and public safety!</p>
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
