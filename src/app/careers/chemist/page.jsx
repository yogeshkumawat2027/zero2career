import Link from 'next/link';
import React from 'react';
import { 
  FaFlask, 
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
  FaAtom,
  FaSearch,
  FaEye,
  FaBalanceScale,
  FaMicroscope,
  FaIndustry,
  FaBuilding,
  FaLaptopCode,
  FaLeaf,
  FaPills,
  FaWater,
  FaRecycle,
  FaShieldAlt,
  FaUserGraduate,
  FaLightbulb,
  FaRocket,
  FaHeartbeat
} from 'react-icons/fa';

export default function ChemistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "B.Sc/M.Sc in Chemistry or related field" },
    { icon: FaGraduationCap, title: "Specialization", detail: "Organic, Inorganic, Physical, Analytical Chemistry" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 10+ years based on position" },
    { icon: FaShieldAlt, title: "Skills", detail: "Laboratory techniques, analytical thinking" }
  ];

  const careerPaths = [
    { 
      path: "Research & Development",
      description: "Innovation in chemical processes and materials",
      opportunities: "Pharmaceutical R&D, Material Science, Green Chemistry",
      growth: "Research Associate → Senior Scientist → Research Director",
      salary: "₹3-25 LPA"
    },
    { 
      path: "Quality Control & Assurance",
      description: "Ensuring product quality and safety standards",
      opportunities: "Pharmaceutical QC, Food Testing, Industrial QA",
      growth: "QC Analyst → QA Manager → Quality Director",
      salary: "₹2.5-18 LPA"
    },
    { 
      path: "Process Chemistry",
      description: "Optimizing manufacturing processes",
      opportunities: "Chemical Plants, Petrochemicals, Manufacturing",
      growth: "Process Chemist → Senior Engineer → Plant Manager",
      salary: "₹4-30 LPA"
    },
    { 
      path: "Analytical Chemistry",
      description: "Chemical analysis and instrumentation",
      opportunities: "Testing Labs, Environmental Monitoring, Forensics",
      growth: "Analyst → Senior Analyst → Lab Manager",
      salary: "₹3-20 LPA"
    }
  ];

  const industries = [
    { 
      sector: "Pharmaceuticals",
      description: "Drug development, formulation, quality testing",
      companies: "Sun Pharma, Cipla, Dr. Reddy's, Lupin",
      roles: "Formulation Scientist, QC Analyst, Research Associate",
      growth: "High demand due to growing healthcare sector"
    },
    { 
      sector: "Petrochemicals",
      description: "Oil refining, polymer production, fuel additives",
      companies: "Reliance, IOCL, BPCL, ONGC",
      roles: "Process Engineer, Research Scientist, Technical Specialist",
      growth: "Stable sector with government backing"
    },
    { 
      sector: "Food & Beverages",
      description: "Food safety, flavor development, nutrition analysis",
      companies: "Nestle, Unilever, ITC, Britannia",
      roles: "Food Technologist, Quality Manager, R&D Scientist",
      growth: "Growing with health consciousness trend"
    },
    { 
      sector: "Environmental",
      description: "Water treatment, pollution control, waste management",
      companies: "Veolia, CPCB, Environmental Consultancies",
      roles: "Environmental Analyst, Pollution Control Officer",
      growth: "Expanding due to environmental regulations"
    },
    { 
      sector: "Cosmetics & Personal Care",
      description: "Product formulation, safety testing, innovation",
      companies: "L'Oréal, Hindustan Unilever, Marico, Dabur",
      roles: "Formulation Chemist, Product Developer, Safety Assessor",
      growth: "Rapidly growing beauty and wellness market"
    },
    { 
      sector: "Materials Science",
      description: "Advanced materials, nanotechnology, composites",
      companies: "Tata Steel, JSW, Advanced Materials Companies",
      roles: "Materials Scientist, R&D Engineer, Technical Consultant",
      growth: "Future-focused with high innovation potential"
    }
  ];

  const jobProfiles = [
    { post: "Junior Chemist", experience: "0-2 years", salary: "₹2.5-5 LPA", duties: "Basic analysis, sample preparation, data collection" },
    { post: "Chemist", experience: "2-5 years", salary: "₹4-8 LPA", duties: "Chemical analysis, method development, quality control" },
    { post: "Senior Chemist", experience: "5-8 years", salary: "₹6-12 LPA", duties: "Project leadership, method validation, team guidance" },
    { post: "Principal Chemist", experience: "8-12 years", salary: "₹10-18 LPA", duties: "Research direction, strategic planning, innovation" },
    { post: "Research Manager", experience: "10-15 years", salary: "₹15-25 LPA", duties: "Team management, budget planning, strategic research" },
    { post: "R&D Director", experience: "15+ years", salary: "₹25-50 LPA", duties: "Organizational strategy, innovation leadership, business development" }
  ];

  const essentialSkills = [
    { 
      category: "Laboratory Skills",
      skills: ["Analytical Techniques", "Instrumentation (HPLC, GC-MS, NMR)", "Sample Preparation", "Method Development", "Quality Control", "Safety Protocols"]
    },
    { 
      category: "Technical Knowledge",
      skills: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry", "Biochemistry", "Materials Science"]
    },
    { 
      category: "Software & Tools",
      skills: ["ChemDraw", "SciFinder", "MATLAB", "R/Python for Data Analysis", "ERP Systems", "Laboratory Information Management Systems (LIMS)"]
    },
    { 
      category: "Soft Skills",
      skills: ["Problem Solving", "Attention to Detail", "Communication", "Team Collaboration", "Project Management", "Continuous Learning"]
    }
  ];

  const certifications = [
    { 
      cert: "Chartered Chemist (CChem)",
      provider: "Royal Society of Chemistry",
      duration: "Professional Recognition",
      cost: "£400-500",
      description: "International recognition for professional chemists"
    },
    { 
      cert: "Six Sigma Green Belt",
      provider: "ASQ/IASSC",
      duration: "3-6 months",
      cost: "₹25,000-40,000",
      description: "Quality management and process improvement"
    },
    { 
      cert: "HAZMAT Certification",
      provider: "Various Institutes",
      duration: "1-2 weeks",
      cost: "₹15,000-25,000",
      description: "Hazardous materials handling and safety"
    },
    { 
      cert: "ISO 17025 Lead Auditor",
      provider: "International Bodies",
      duration: "1-2 weeks",
      cost: "₹50,000-75,000",
      description: "Laboratory quality management systems"
    },
    { 
      cert: "Project Management Professional (PMP)",
      provider: "PMI",
      duration: "3-6 months",
      cost: "$555",
      description: "Project management for research and development"
    }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3 years",
      subjects: "B.Sc Chemistry/Chemical Engineering/Applied Chemistry",
      focus: "Fundamental chemistry concepts, laboratory techniques, basic research methods",
      cost: "₹30,000-2,00,000 per year"
    },
    { 
      level: "Master's Degree",
      duration: "2 years",
      subjects: "M.Sc Chemistry (Specialization in Organic/Inorganic/Physical/Analytical)",
      focus: "Advanced concepts, research methodology, specialized techniques, thesis work",
      cost: "₹50,000-3,00,000 per year"
    },
    { 
      level: "Ph.D. (Optional)",
      duration: "3-5 years",
      subjects: "Doctoral Research in Specialized Chemistry Field",
      focus: "Independent research, publication, innovation, expert-level knowledge",
      cost: "₹25,000-1,00,000 per year (often with fellowship)"
    },
    { 
      level: "Professional Certifications",
      duration: "Ongoing",
      subjects: "Industry-specific certifications and continuous learning",
      focus: "Skill enhancement, career advancement, specialized knowledge",
      cost: "₹15,000-75,000 per certification"
    }
  ];

  const researchAreas = [
    { area: "Drug Discovery & Development", description: "New pharmaceutical compounds and delivery systems", funding: "High", prospects: "Excellent" },
    { area: "Green Chemistry", description: "Sustainable and environmentally friendly chemical processes", funding: "Growing", prospects: "Very Good" },
    { area: "Nanotechnology", description: "Materials at the nanoscale for various applications", funding: "High", prospects: "Excellent" },
    { area: "Energy Storage", description: "Battery technology and alternative energy solutions", funding: "Very High", prospects: "Outstanding" },
    { area: "Computational Chemistry", description: "Computer modeling and simulation of chemical systems", funding: "Moderate", prospects: "Good" },
    { area: "Biochemistry & Biotechnology", description: "Biological processes and biotechnological applications", funding: "High", prospects: "Excellent" }
  ];

  const salaryRanges = [
    { sector: "Pharmaceuticals", fresher: "₹3-6 LPA", experienced: "₹8-25 LPA", senior: "₹20-50 LPA" },
    { sector: "Petrochemicals", fresher: "₹4-7 LPA", experienced: "₹10-30 LPA", senior: "₹25-60 LPA" },
    { sector: "Research Institutes", fresher: "₹3-5 LPA", experienced: "₹6-18 LPA", senior: "₹15-35 LPA" },
    { sector: "Government Labs", fresher: "₹3.5-6 LPA", experienced: "₹7-20 LPA", senior: "₹18-40 LPA" },
    { sector: "Food Industry", fresher: "₹2.5-5 LPA", experienced: "₹6-15 LPA", senior: "₹12-30 LPA" },
    { sector: "Environmental", fresher: "₹2.5-4 LPA", experienced: "₹5-12 LPA", senior: "₹10-25 LPA" }
  ];

  const governmentOpportunities = [
    { 
      organization: "CSIR Laboratories",
      positions: "Scientific Officer, Senior Research Fellow",
      selection: "CSIR-NET, Interview",
      benefits: "Research opportunities, job security, good facilities"
    },
    { 
      organization: "ISRO",
      positions: "Scientist/Engineer",
      selection: "ISRO Centralized Recruitment Board (ICRB)",
      benefits: "Space research, prestige, excellent growth"
    },
    { 
      organization: "DRDO",
      positions: "Scientist Entry Test (SET)",
      selection: "DRDO SET, Interview",
      benefits: "Defense research, national service, good pay"
    },
    { 
      organization: "Atomic Energy Regulatory Board",
      positions: "Scientific Officer",
      selection: "NPCIL/BARC Exam",
      benefits: "Nuclear sector, high responsibility, excellent benefits"
    },
    { 
      organization: "Food Safety and Standards Authority",
      positions: "Food Safety Officer",
      selection: "State/Central government exams",
      benefits: "Public health service, regulatory role"
    }
  ];

  const preparationTips = [
    "Build strong foundation in core chemistry subjects - organic, inorganic, physical, and analytical",
    "Gain practical laboratory experience through internships and projects",
    "Develop proficiency in analytical instruments like HPLC, GC-MS, NMR, and spectroscopy",
    "Stay updated with latest research publications and industry trends",
    "Learn data analysis tools like R, Python, or specialized chemistry software",
    "Focus on safety protocols and regulatory compliance in laboratory work",
    "Build communication skills for technical writing and presentation",
    "Consider specialization based on your interests and market demand"
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Testing Laboratory",
      investment: "₹10-50 lakhs",
      description: "Chemical analysis services for industries",
      potential: "High demand across industries"
    },
    { 
      business: "Chemical Consulting",
      investment: "₹2-10 lakhs",
      description: "Technical consulting for process optimization",
      potential: "Good for experienced professionals"
    },
    { 
      business: "Specialty Chemicals Manufacturing",
      investment: "₹50 lakhs - 5 crores",
      description: "Small-scale specialty chemical production",
      potential: "High margins, niche markets"
    },
    { 
      business: "Environmental Solutions",
      investment: "₹20 lakhs - 2 crores",
      description: "Water treatment, waste management solutions",
      potential: "Growing environmental awareness"
    }
  ];

  const topColleges = [
    { name: "IIT (All Campuses)", courses: "Chemical Engineering, Chemistry", ranking: "Top Tier", fees: "₹8-12 LPA" },
    { name: "IISc Bangalore", courses: "Chemical Sciences", ranking: "Premier Research", fees: "₹15,000-50,000 PA" },
    { name: "BITS Pilani", courses: "Chemical Engineering, Chemistry", ranking: "Top Private", fees: "₹19-25 LPA" },
    { name: "NIT (All Campuses)", courses: "Chemical Engineering", ranking: "Tier 1", fees: "₹6-8 LPA" },
    { name: "ICT Mumbai", courses: "Chemical Technology", ranking: "Specialized", fees: "₹1-2 LPA" },
    { name: "Central Universities", courses: "Chemistry, Applied Chemistry", ranking: "Good Options", fees: "₹50,000-2 LPA" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaFlask className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Chemist
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore the molecular world - Complete guide to building a successful career in Chemistry
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Chemistry Career Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Chemistry Career Overview</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Chemistry is the science that studies matter, its properties, composition, and the changes it undergoes. A career in chemistry opens doors to diverse industries from pharmaceuticals and petrochemicals to environmental science and materials research.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern chemists work at the forefront of innovation - developing new drugs, creating sustainable materials, solving environmental challenges, and pushing the boundaries of scientific knowledge.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Chemistry?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Diverse career opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Innovation and research focus
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Contribution to society
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Excellent growth potential
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Global job opportunities
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
              <h2 className="text-3xl font-bold text-gray-800">Education Pathway</h2>
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
                      <span className="text-sm text-gray-600">Subjects:</span>
                      <p className="font-medium text-gray-800">{education.subjects}</p>
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
                  <p className="text-gray-700">{education.focus}</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Top Colleges & Universities</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Institution</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Courses</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Ranking</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {topColleges.map((college, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{college.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{college.courses}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{college.ranking}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{college.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Paths in Chemistry</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {careerPaths.map((path, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{path.path}</h3>
                  <p className="text-gray-700 text-sm mb-3">{path.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">Opportunities:</span> {path.opportunities}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Growth Path:</span> {path.growth}
                    </div>
                    <div className="text-green-600 font-medium">
                      <span>Salary Range:</span> {path.salary}
                    </div>
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
              <FaIndustry className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Opportunities</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{industry.sector}</h3>
                  <p className="text-gray-700 text-sm mb-3">{industry.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">Companies:</span> {industry.companies}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Roles:</span> {industry.roles}
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg">
                      <span className="font-medium">Growth:</span> {industry.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Profiles & Salary */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Profiles & Salary Progression</h2>
            </div>
            <div className="space-y-6">
              {jobProfiles.map((job, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{job.post}</h3>
                      <p className="text-gray-600">{job.experience}</p>
                      <p className="text-gray-700 text-sm">{job.duties}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-green-600">{job.salary}</p>
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
              <FaChartLine className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Salary Ranges by Sector</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
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

        {/* Essential Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills for Chemists</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {essentialSkills.map((skillCategory, index) => (
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

        {/* Research Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRocket className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Emerging Research Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((research, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{research.area}</h3>
                  <p className="text-gray-700 text-sm mb-4">{research.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Funding:</span>
                      <span className="font-medium text-blue-600">{research.funding}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Prospects:</span>
                      <span className="font-medium text-green-600">{research.prospects}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Government & PSU Opportunities</h2>
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
              <FaAward className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Professional Certifications</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
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
              <FaLightbulb className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entrepreneurial Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {entrepreneurialOpportunities.map((business, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{business.business}</h3>
                  <p className="text-gray-700 text-sm mb-3">{business.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Investment:</span>
                      <span className="font-medium text-blue-600">{business.investment}</span>
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg text-sm">
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
                  <FaAtom className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Chemistry Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">Transform the world through chemistry - Begin your exciting career today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start Your Education
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
