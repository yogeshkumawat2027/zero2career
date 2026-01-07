import Link from 'next/link';
import React from 'react';
import { 
  FaBook, 
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
  FaLightbulb,
  FaHeadset,
  FaEye,
  FaBroadcastTower,
  FaFlag,
  FaMedal,
  FaRunning,
  FaBullseye,
  FaFistRaised,
  FaStar,
  FaCompass,
  FaHelicopter,
  FaAnchor,
  FaGavel,
  FaLaptopCode,
  FaChartBar,
  FaHandshake,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaProjectDiagram,
  FaSync,
  FaLayerGroup,
  FaSearch,
  FaPalette,
  FaServer,
  FaCloud,
  FaShoppingCart,
  FaGlobe,
  FaBuilding,
  FaCalculator,
  FaPercent,
  FaBullhorn,
  FaRocket,
  FaUniversity,
  FaCoins,
  FaPiggyBank,
  FaBalanceScale,
  FaRegHandshake,
  FaRegChartBar,
  FaRegClock,
  FaRegUser,
  FaLandmark,
  FaIndustry,
  FaWrench,
  FaHammer,
  FaMicrochip,
  FaOilCan,
  FaCar,
  FaPlane,
  FaShip,
  FaBolt,
  FaFire,
  FaThermometerHalf,
  FaAtom,
  FaCube,
  FaSlidersH,
  FaRuler,
  FaDesktop,
  FaPrint,
  FaHardHat,
  FaShareAlt,
  FaEnvelope,
  FaPhone,
  FaVideo,
  FaCamera,
  FaNewspaper,
  FaAd,
  FaMagic,
  FaChartPie,
  FaMousePointer,
  FaHashtag,
  FaThumbsUp,
  FaHeart,
  FaComment,
  FaShare,
  FaPlay,
  FaImage,
  FaPencilAlt,
  FaCrown,
  FaFunnelDollar,
  FaMicroscope,
  FaApple,
  FaBrain,
  FaNetworkWired,
  FaGamepad,
  FaHospital,
  FaRegNewspaper,
  FaFileContract,
  FaComments,
  FaExclamationTriangle,
  FaFlask,
  FaHistory,
  FaLanguage,
  FaSeedling,
  FaChild,
  FaUserGraduate,
  FaSchool,
  FaBookReader,
  FaArchive,
  FaFolderOpen,
  FaTag,
  FaQrcode,
  FaWifi,
  FaTabletAlt,
  FaKeyboard,
  FaMouseAlt
} from 'react-icons/fa';

export default function LibrarianPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's degree + Master's in Library Science (MLIS)" },
    { icon: FaGraduationCap, title: "Certification", detail: "UGC-NET or equivalent professional qualification" },
    { icon: FaBrain, title: "Skills", detail: "Information management and digital literacy" },
    { icon: FaUsers, title: "Communication", detail: "Strong interpersonal and research guidance skills" }
  ];

  const skillsRequired = [
    { 
      category: "Information Management", 
      skills: ["Cataloguing Systems", "Database Management", "Digital Archives", "Collection Development", "Information Retrieval", "Metadata Standards"],
      icon: FaDatabase,
      color: "blue"
    },
    { 
      category: "Technology Skills", 
      skills: ["Library Management Systems", "Digital Libraries", "Online Databases", "Web Technologies", "E-resources", "Automation Tools"],
      icon: FaLaptopCode,
      color: "green"
    },
    { 
      category: "Professional Skills", 
      skills: ["Research Assistance", "User Education", "Reference Services", "Academic Writing", "Information Literacy", "Customer Service"],
      icon: FaUsers,
      color: "purple"
    }
  ];

  const careerHierarchy = [
    { position: "Junior Librarian/Library Assistant", years: "0-3 years", salary: "₹2.5-5 LPA", level: "Entry Level" },
    { position: "Assistant Librarian", years: "3-7 years", salary: "₹5-10 LPA", level: "Associate Level" },
    { position: "Librarian", years: "7-12 years", salary: "₹10-18 LPA", level: "Senior Level" },
    { position: "Senior Librarian", years: "12-18 years", salary: "₹18-30 LPA", level: "Senior Professional" },
    { position: "Deputy Librarian", years: "18-25 years", salary: "₹30-45 LPA", level: "Management Level" },
    { position: "University Librarian/Chief Librarian", years: "25-30 years", salary: "₹45-70 LPA", level: "Executive Level" },
    { position: "Director of Library Services", years: "30+ years", salary: "₹70 LPA - 1 Cr", level: "Director Level" }
  ];

  const keyResponsibilities = [
    "Organize and maintain library collections and resources",
    "Assist users with research and information retrieval", 
    "Develop and manage digital library systems",
    "Conduct information literacy training programs",
    "Supervise library staff and operations",
    "Implement cataloguing and classification systems",
    "Manage library budgets and resource acquisition",
    "Collaborate with academic departments and researchers",
    "Maintain electronic databases and subscriptions",
    "Preserve and archive historical documents and materials"
  ];

  const libraryTypes = [
    { type: "Academic Libraries", description: "University and college libraries supporting education and research", focus: "Research support, academic collections, student services" },
    { type: "Public Libraries", description: "Community libraries serving general public", focus: "Community programs, general collections, public access" },
    { type: "Special Libraries", description: "Corporate, medical, legal, and specialized institution libraries", focus: "Specialized collections, professional research support" },
    { type: "National Libraries", description: "National repositories and archives", focus: "Heritage preservation, national collections, research facilities" },
    { type: "Digital Libraries", description: "Online and virtual library services", focus: "Digital resources, remote access, technology integration" },
    { type: "School Libraries", description: "Elementary and secondary school libraries", focus: "Educational support, reading promotion, curriculum alignment" }
  ];

  const topInstitutions = [
    "National Library of India", "Delhi Public Library", "IIT Libraries", "IIM Libraries", "JNU Library", "BHU Library",
    "Indian Statistical Institute", "TISS Library", "AIIMS Libraries", "Indian Institute of Science",
    "State Central Libraries", "University Libraries", "Municipal Libraries", "Corporate Libraries",
    "Medical College Libraries", "Law College Libraries", "Engineering College Libraries", "Management Institute Libraries"
  ];

  const specializations = [
    { area: "Digital Library Management", focus: "Digital collections, online databases, virtual services", career: "Digital librarian, systems librarian, web services manager" },
    { area: "Academic Library Services", focus: "Research support, scholarly communication, institutional repositories", career: "Academic librarian, research librarian, subject specialist" },
    { area: "Information Architecture", focus: "Database design, metadata standards, information organization", career: "Information architect, data librarian, systems analyst" },
    { area: "Archives & Records Management", focus: "Historical preservation, document management, heritage collections", career: "Archivist, records manager, preservation specialist" },
    { area: "Health Sciences Libraries", focus: "Medical information, clinical support, health databases", career: "Medical librarian, clinical informationist, health information specialist" },
    { area: "Law Libraries", focus: "Legal research, court records, legal databases", career: "Law librarian, legal researcher, court librarian" }
  ];

  const governmentOpportunities = [
    { sector: "Central Government", positions: "National Library, Parliamentary Library, Ministry libraries", selection: "UGC-NET + Written exam + Interview" },
    { sector: "State Government", positions: "State libraries, university libraries, public libraries", selection: "State-level librarian recruitment exams" },
    { sector: "Universities", positions: "University librarian, assistant librarian positions", selection: "UGC-NET + Ph.D + Interview" },
    { sector: "Research Institutes", positions: "CSIR, DRDO, ISRO library positions", selection: "Institute-specific recruitment + NET qualification" },
    { sector: "Public Sector", positions: "PSU libraries, bank libraries, corporate libraries", selection: "Company-specific exams + professional qualification" },
    { sector: "Judiciary", positions: "Supreme Court, High Court libraries", selection: "Judicial service recruitment + library qualification" }
  ];

  const qualificationPath = [
    { level: "Bachelor's Degree", duration: "3-4 years", requirements: "12th pass in any stream", focus: "Foundation in any subject area" },
    { level: "Master's in Library Science (MLIS)", duration: "2 years", requirements: "Graduate degree with 50% marks", focus: "Library science, information management, cataloguing" },
    { level: "UGC-NET in Library Science", duration: "6 months prep", requirements: "Master's in Library Science", focus: "Eligibility for assistant professor and library positions" },
    { level: "Ph.D in Library Science", duration: "3-5 years", requirements: "MLIS + UGC-NET", focus: "Research in library science, advanced positions" },
    { level: "Professional Certifications", duration: "3-12 months", requirements: "Relevant experience", focus: "Digital libraries, database management, specialized skills" },
    { level: "Continuing Education", duration: "Ongoing", requirements: "Professional practice", focus: "Technology updates, new methodologies, professional development" }
  ];

  const modernLibraryTools = [
    { category: "Library Management", tools: ["Koha", "LibSys", "Evergreen", "Symphony", "Alma"] },
    { category: "Digital Collections", tools: ["DSpace", "Fedora", "EPrints", "Greenstone", "Omeka"] },
    { category: "Discovery Systems", tools: ["Primo", "Summon", "EBSCO Discovery", "WorldCat Discovery", "VuFind"] },
    { category: "Database Management", tools: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "Microsoft SQL"] },
    { category: "Digital Preservation", tools: ["LOCKSS", "Samvera", "Archivematica", "DuraSpace", "APTrust"] }
  ];

  const researchDatabases = [
    { database: "Academic Databases", examples: "JSTOR, ProQuest, EBSCO, Springer, Taylor & Francis", access: "Subscription-based academic resources" },
    { database: "Open Access Repositories", examples: "arXiv, DOAJ, PubMed Central, IEEE Xplore", access: "Free scholarly and research content" },
    { database: "Government Resources", examples: "National Digital Library, Shodhganga, e-PG Pathshala", access: "Government-funded educational resources" },
    { database: "Specialized Collections", examples: "Medical databases, Legal databases, Technical standards", access: "Domain-specific professional resources" },
    { database: "Digital Archives", examples: "Internet Archive, Google Books, HathiTrust", access: "Historical and cultural heritage materials" },
    { database: "Institutional Repositories", examples: "University repositories, Research institute collections", access: "Institution-specific academic output" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBook className="mx-auto text-6xl mb-6 text-amber-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to 
              <span className="text-amber-300"> Librarian Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to becoming a successful Information Professional and Knowledge Manager
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Library Science Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-amber-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Library Science?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Library Science, also known as Information Science, is the professional field concerned with the organization, preservation, and dissemination of information and knowledge resources. Modern librarians are information specialists who manage both physical and digital collections while helping users navigate the vast landscape of available information.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today's librarians work with cutting-edge technology, manage digital databases, conduct research, and serve as vital links between information seekers and the resources they need across academic, public, corporate, and specialized library settings.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Functions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-amber-500 mr-3" />
                    Information organization and cataloguing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-amber-500 mr-3" />
                    Digital resource management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-amber-500 mr-3" />
                    Research assistance and user education
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-amber-500 mr-3" />
                    Collection development and preservation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-amber-500 mr-3" />
                    Technology integration and innovation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Entry Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-amber-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entry Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Requirements</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">MLIS Degree:</span> Master's in Library and Information Science
                </div>
                <div className="text-black">
                  <span className="font-medium">UGC-NET:</span> National Eligibility Test for library positions
                </div>
                <div className="text-black">
                  <span className="font-medium">Professional Training:</span> Digital library and database management
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {skillsRequired.map((skillSet, index) => (
                <div key={index} className={`bg-gradient-to-br from-${skillSet.color}-50 to-${skillSet.color}-100 rounded-xl p-6 border border-${skillSet.color}-200`}>
                  <div className="flex items-center mb-4">
                    <skillSet.icon className={`text-3xl text-${skillSet.color}-600 mr-3`} />
                    <h3 className="text-xl font-bold text-gray-800">{skillSet.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <FaCheckCircle className={`text-${skillSet.color}-500 mr-2 text-sm`} />
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Responsibilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyResponsibilities.map((responsibility, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{responsibility}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Library Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLayerGroup className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Types of Libraries</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {libraryTypes.map((library, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{library.type}</h3>
                  <p className="text-gray-600 mb-3">{library.description}</p>
                  <div className="text-sm text-teal-700 font-medium">
                    <span className="font-semibold">Focus Areas: </span>{library.focus}
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Path</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{career.position}</h3>
                      <p className="text-gray-600 mt-1">Information management and library administration responsibilities</p>
                    </div>
                    <div className="flex items-center space-x-8 text-right">
                      <div>
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-semibold text-gray-800">{career.years}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Salary Range</div>
                        <div className="font-bold text-indigo-700">{career.salary}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Level</div>
                        <div className="font-medium text-blue-600">{career.level}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualification Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Educational Pathway</h2>
            </div>
            <div className="space-y-6">
              {qualificationPath.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.level}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{phase.requirements}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{phase.focus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBullseye className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Library Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{spec.area}</h3>
                  <p className="text-gray-600 mb-3">{spec.focus}</p>
                  <div className="text-sm text-red-700 font-medium">
                    <span className="font-semibold">Career Paths: </span>{spec.career}
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
              <FaFlag className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Government Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentOpportunities.map((govt, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{govt.sector}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{govt.positions}</p>
                  <div className="text-sm text-yellow-700 font-medium">
                    <span className="font-semibold">Selection: </span>{govt.selection}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Institutions */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-gray-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Library Institutions</h2>
            </div>
            <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-3">
              {topInstitutions.map((institution, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-3 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center">
                    <span className="text-gray-800 text-sm font-medium text-center">{institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Library Tools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Modern Library Technologies</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {modernLibraryTools.map((toolSet, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{toolSet.category}</h3>
                  <div className="space-y-2">
                    {toolSet.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-sm text-gray-700 bg-white rounded p-2 border">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Databases */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaDatabase className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Research Databases & Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {researchDatabases.map((db, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{db.database}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{db.examples}</p>
                  <div className="text-sm text-emerald-700 font-medium">
                    <span className="font-semibold">Access: </span>{db.access}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaMedal className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to Library Science Success</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaBookOpen className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Information Expertise</h3>
                <p className="text-amber-100">Master information organization, cataloguing, and retrieval systems</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaLaptopCode className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Technology Proficiency</h3>
                <p className="text-amber-100">Stay updated with digital library technologies and database management</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">User-Focused Service</h3>
                <p className="text-amber-100">Develop strong research assistance and user education capabilities</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaRocket className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="text-amber-100">Adapt to evolving information landscapes and emerging technologies</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
