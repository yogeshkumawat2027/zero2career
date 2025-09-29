import Link from 'next/link';
import React from 'react';
import { 
  FaChalkboardTeacher, 
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
  FaBlackboard,
  FaGoogleDrive
} from 'react-icons/fa';

export default function TeacherProfessorPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's degree + B.Ed/M.Ed for teaching certification" },
    { icon: FaGraduationCap, title: "Higher Studies", detail: "M.A/M.Sc + Ph.D for professorship" },
    { icon: FaBrain, title: "Knowledge", detail: "Subject expertise and continuous learning" },
    { icon: FaUsers, title: "Skills", detail: "Communication, patience, and leadership abilities" }
  ];

  const skillsRequired = [
    { 
      category: "Teaching Skills", 
      skills: ["Curriculum Design", "Lesson Planning", "Classroom Management", "Assessment Methods", "Educational Technology", "Student Counseling"],
      icon: FaChalkboardTeacher,
      color: "blue"
    },
    { 
      category: "Subject Expertise", 
      skills: ["Domain Knowledge", "Research Skills", "Critical Thinking", "Problem Solving", "Academic Writing", "Subject Updates"],
      icon: FaBookOpen,
      color: "green"
    },
    { 
      category: "Soft Skills", 
      skills: ["Communication", "Patience", "Empathy", "Leadership", "Time Management", "Adaptability"],
      icon: FaUsers,
      color: "purple"
    }
  ];

  const careerHierarchy = [
    { position: "Primary Teacher (PRT)", years: "0-5 years", salary: "₹2.5-5 LPA", level: "Entry Level" },
    { position: "Trained Graduate Teacher (TGT)", years: "3-10 years", salary: "₹4-8 LPA", level: "Secondary" },
    { position: "Post Graduate Teacher (PGT)", years: "5-15 years", salary: "₹6-12 LPA", level: "Senior Secondary" },
    { position: "Assistant Professor", years: "Ph.D + 0-5 years", salary: "₹8-18 LPA", level: "Higher Education" },
    { position: "Associate Professor", years: "Ph.D + 5-12 years", salary: "₹15-30 LPA", level: "Senior Faculty" },
    { position: "Professor", years: "Ph.D + 12-20 years", salary: "₹25-50 LPA", level: "Senior Professor" },
    { position: "Dean/Director", years: "20-30 years", salary: "₹40-80 LPA", level: "Administrative" },
    { position: "Vice Chancellor", years: "25+ years", salary: "₹60 LPA - 1 Cr+", level: "Executive" }
  ];

  const keyResponsibilities = [
    "Plan and deliver effective lessons and curriculum",
    "Assess student performance and provide feedback", 
    "Research and publish academic papers",
    "Mentor and guide students in academic pursuits",
    "Participate in academic committees and governance",
    "Develop innovative teaching methodologies",
    "Collaborate with educational institutions and peers",
    "Conduct workshops and training sessions",
    "Supervise student projects and thesis work",
    "Stay updated with latest educational trends"
  ];

  const teachingLevels = [
    { level: "Primary Education", description: "Classes 1-5, foundation building, basic concepts", requirements: "B.Ed with primary specialization" },
    { level: "Secondary Education", description: "Classes 6-10, subject specialization begins", requirements: "Graduate + B.Ed in relevant subject" },
    { level: "Senior Secondary", description: "Classes 11-12, advanced subject knowledge", requirements: "Post-graduate + B.Ed" },
    { level: "Undergraduate College", description: "Bachelor's degree programs", requirements: "Master's degree + NET/Ph.D" },
    { level: "Postgraduate University", description: "Master's and Ph.D programs", requirements: "Ph.D + research experience" },
    { level: "Professional Institutes", description: "Technical and professional courses", requirements: "Industry experience + teaching qualification" }
  ];

  const topInstitutions = [
    "IITs", "IIMs", "NITs", "AIIMS", "JNU", "DU",
    "BHU", "AMU", "Jamia Millia", "IISc Bangalore", "TISS", "ISI",
    "Kendriya Vidyalaya", "Navodaya Vidyalaya", "Army Public School", "DAV Schools",
    "Private Universities", "State Universities", "Deemed Universities", "Central Universities",
    "CBSE Schools", "ICSE Schools", "State Board Schools", "International Schools"
  ];

  const subjectAreas = [
    { subject: "Mathematics", opportunities: "Schools, colleges, coaching institutes, research", demand: "Very High" },
    { subject: "Science (Physics/Chemistry/Biology)", opportunities: "Schools, medical/engineering coaching", demand: "High" },
    { subject: "English Literature", opportunities: "Schools, colleges, content writing, media", demand: "High" },
    { subject: "Social Sciences", opportunities: "Schools, colleges, civil services coaching", demand: "Medium" },
    { subject: "Computer Science", opportunities: "Schools, colleges, IT training institutes", demand: "Very High" },
    { subject: "Commerce", opportunities: "Schools, colleges, professional courses", demand: "High" },
    { subject: "Languages", opportunities: "Schools, translation, cultural institutes", demand: "Medium" },
    { subject: "Arts & Crafts", opportunities: "Schools, art institutes, hobby classes", demand: "Medium" }
  ];

  const governmentOpportunities = [
    { sector: "Central Government", positions: "KVS, NVS, DSSSB teachers", selection: "CTET + Subject TET + Interview" },
    { sector: "State Government", positions: "State board school teachers", selection: "State TET + Recruitment exam" },
    { sector: "Universities", positions: "Assistant/Associate Professor", selection: "UGC-NET + Ph.D + Interview" },
    { sector: "Research Institutes", positions: "Research Fellow, Scientist", selection: "CSIR-NET/GATE + Research experience" },
    { sector: "Defense Services", positions: "Army/Navy/Air Force School teachers", selection: "Written exam + Interview" },
    { sector: "Public Sector", positions: "NTPC, ONGC, Railways training institutes", selection: "Company-specific exams" }
  ];

  const qualificationPath = [
    { level: "Graduation", duration: "3-4 years", requirements: "12th pass with 50% marks", focus: "Subject specialization in teaching area" },
    { level: "B.Ed (Bachelor of Education)", duration: "2 years", requirements: "Graduate with 50% marks", focus: "Teaching methodology and pedagogy" },
    { level: "Post-Graduation", duration: "2 years", requirements: "Graduate degree", focus: "Advanced subject knowledge for PGT/college level" },
    { level: "M.Ed (Master of Education)", duration: "2 years", requirements: "B.Ed with experience", focus: "Educational leadership and research" },
    { level: "Ph.D", duration: "3-5 years", requirements: "Master's + NET/GATE", focus: "Research and higher education teaching" },
    { level: "Teaching Certification", duration: "6 months", requirements: "UGC-NET/SET/Ph.D", focus: "Eligibility for college/university teaching" }
  ];

  const modernTeachingTools = [
    { category: "Digital Platforms", tools: ["Google Classroom", "Microsoft Teams", "Zoom", "Moodle", "Blackboard"] },
    { category: "Content Creation", tools: ["Canva", "PowerPoint", "Prezi", "Adobe Creative Suite", "OBS Studio"] },
    { category: "Assessment Tools", tools: ["Google Forms", "Kahoot", "Quizlet", "Socrative", "Mentimeter"] },
    { category: "Communication", tools: ["WhatsApp", "Telegram", "Slack", "Discord", "Email platforms"] },
    { category: "Learning Management", tools: ["Edmodo", "Schoology", "Canvas", "D2L Brightspace", "ATutor"] }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-green-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaChalkboardTeacher className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to 
              <span className="text-blue-300"> Teaching & Professor Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to becoming a successful educator and shaping future generations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Teaching Career Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Teaching Career?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Teaching is one of the most noble and impactful professions that involves educating, inspiring, and mentoring students across various levels - from primary school to university. Teachers and professors play a crucial role in knowledge dissemination, character building, and skill development of future generations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern teaching combines traditional pedagogy with innovative educational technologies, research methodologies, and student-centered approaches to create effective learning environments and contribute to academic advancement.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Functions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Curriculum design and lesson planning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Student assessment and evaluation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Research and academic publishing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Student mentoring and guidance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Educational innovation and development
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
              <FaClipboardCheck className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entry Requirements</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Teaching Eligibility Tests</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">CTET:</span> Central Teacher Eligibility Test for central schools
                </div>
                <div className="text-black">
                  <span className="font-medium">State TET:</span> State-level teacher eligibility tests
                </div>
                <div className="text-black">
                  <span className="font-medium">UGC-NET:</span> National Eligibility Test for college/university teaching
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-green-600 mr-4" />
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
              <FaBriefcase className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Responsibilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyResponsibilities.map((responsibility, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{responsibility}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Levels */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLayerGroup className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Teaching Levels</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {teachingLevels.map((level, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{level.level}</h3>
                  <p className="text-gray-600 mb-3">{level.description}</p>
                  <div className="text-sm text-teal-700 font-medium">
                    <span className="font-semibold">Requirements: </span>{level.requirements}
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
                      <p className="text-gray-600 mt-1">Educational leadership and academic excellence responsibilities</p>
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

        {/* Subject Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular Subject Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {subjectAreas.map((subject, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{subject.subject}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      subject.demand === 'Very High' ? 'bg-green-100 text-green-800' :
                      subject.demand === 'High' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {subject.demand} Demand
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{subject.opportunities}</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Top Educational Institutions</h2>
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

        {/* Modern Teaching Tools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Modern Teaching Tools</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {modernTeachingTools.map((toolSet, index) => (
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

        {/* Success Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaMedal className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to Teaching Excellence</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaHeart className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Passion for Education</h3>
                <p className="text-blue-100">Genuine love for teaching and commitment to student success</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaBrain className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="text-blue-100">Stay updated with subject knowledge and teaching methodologies</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Student-Centric Approach</h3>
                <p className="text-blue-100">Adapt teaching methods to diverse learning styles and needs</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaRocket className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Innovation in Teaching</h3>
                <p className="text-blue-100">Embrace technology and creative teaching methods</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
