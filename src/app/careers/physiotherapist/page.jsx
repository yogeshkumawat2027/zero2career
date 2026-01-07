import Link from 'next/link';
import React from 'react';
import { 
  FaHeartbeat, 
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
  FaMouseAlt,
  FaUserMd,
  FaStethoscope,
  FaWheelchair,
  FaBandAid,
  FaPills,
  FaFirstAid,
  FaWeight,
  FaDumbbell,
  FaWalking,
  FaAccessibleIcon,
  FaHandHoldingHeart,
  FaBone,
  FaXRay
} from 'react-icons/fa';

export default function PhysiotherapistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's in Physiotherapy (BPT) from recognized college" },
    { icon: FaGraduationCap, title: "Higher Studies", detail: "Master's in Physiotherapy (MPT) for specialization" },
    { icon: FaStethoscope, title: "Clinical Skills", detail: "Hands-on patient care and rehabilitation expertise" },
    { icon: FaUsers, title: "Communication", detail: "Patient counseling and interdisciplinary teamwork" }
  ];

  const skillsRequired = [
    { 
      category: "Clinical Skills", 
      skills: ["Manual Therapy", "Exercise Prescription", "Patient Assessment", "Rehabilitation Planning", "Pain Management", "Movement Analysis"],
      icon: FaStethoscope,
      color: "blue"
    },
    { 
      category: "Technical Skills", 
      skills: ["Electrotherapy", "Ultrasound Therapy", "Biomechanical Analysis", "Gait Training", "Therapeutic Equipment", "Documentation"],
      icon: FaCog,
      color: "green"
    },
    { 
      category: "Soft Skills", 
      skills: ["Empathy", "Communication", "Patience", "Problem Solving", "Time Management", "Continuous Learning"],
      icon: FaHeart,
      color: "purple"
    }
  ];

  const careerHierarchy = [
    { position: "Junior Physiotherapist", years: "0-2 years", salary: "₹2.5-5 LPA", level: "Entry Level" },
    { position: "Physiotherapist", years: "2-5 years", salary: "₹5-10 LPA", level: "Professional Level" },
    { position: "Senior Physiotherapist", years: "5-10 years", salary: "₹10-18 LPA", level: "Senior Level" },
    { position: "Clinical Specialist", years: "10-15 years", salary: "₹18-30 LPA", level: "Specialist Level" },
    { position: "Department Head/Manager", years: "15-20 years", salary: "₹30-50 LPA", level: "Management Level" },
    { position: "Clinical Director", years: "20-25 years", salary: "₹50-80 LPA", level: "Director Level" },
    { position: "Chief Physiotherapist/Owner", years: "25+ years", salary: "₹80 LPA - 1.5 Cr", level: "Executive Level" }
  ];

  const keyResponsibilities = [
    "Assess patients' physical conditions and mobility",
    "Develop personalized rehabilitation and treatment plans", 
    "Conduct therapeutic exercises and manual therapy",
    "Operate physiotherapy equipment and modalities",
    "Monitor patient progress and adjust treatments",
    "Educate patients about injury prevention and home care",
    "Collaborate with doctors and healthcare teams",
    "Maintain detailed patient records and documentation",
    "Stay updated with latest physiotherapy techniques",
    "Provide patient and family counseling and support"
  ];

  const specializations = [
    { area: "Orthopedic Physiotherapy", description: "Musculoskeletal injuries, joint replacements, sports injuries", focus: "Bones, joints, muscles, ligaments rehabilitation" },
    { area: "Neurological Physiotherapy", description: "Stroke, spinal cord injuries, brain injuries, neurological disorders", focus: "Nervous system rehabilitation and recovery" },
    { area: "Cardiopulmonary Physiotherapy", description: "Heart conditions, respiratory disorders, post-surgical recovery", focus: "Cardiovascular and respiratory health" },
    { area: "Pediatric Physiotherapy", description: "Developmental delays, cerebral palsy, birth defects in children", focus: "Child development and growth" },
    { area: "Geriatric Physiotherapy", description: "Age-related conditions, fall prevention, mobility in elderly", focus: "Aging population care and wellness" },
    { area: "Sports Physiotherapy", description: "Athletic injuries, performance enhancement, injury prevention", focus: "Sports medicine and athlete care" }
  ];

  const workSettings = [
    { setting: "Hospitals", description: "General hospitals, specialty hospitals, rehabilitation centers", opportunities: "Inpatient and outpatient physiotherapy services" },
    { setting: "Private Clinics", description: "Independent practice, multi-specialty clinics", opportunities: "Personalized patient care and specialized treatments" },
    { setting: "Sports Medicine Centers", description: "Sports clubs, fitness centers, athletic facilities", opportunities: "Sports injury prevention and athlete rehabilitation" },
    { setting: "Home Healthcare", description: "Domiciliary care, mobile physiotherapy services", opportunities: "Convenient patient care at home" },
    { setting: "Educational Institutions", description: "Physiotherapy colleges, research institutes", opportunities: "Teaching, research, and academic careers" },
    { setting: "Corporate Wellness", description: "Companies, IT firms, ergonomic consulting", opportunities: "Workplace injury prevention and employee wellness" }
  ];

  const topInstitutions = [
    "AIIMS Delhi", "PGIMER Chandigarh", "CMC Vellore", "KMC Mangalore", "Manipal University", "MUHS Nashik",
    "Jamia Hamdard", "IPU Delhi", "RGUHS Karnataka", "TNMGRMU Tamil Nadu", "CRP Pune", "NITTTR Kolkata",
    "Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Narayana Health", "Manipal Hospitals", "Columbia Asia",
    "Sports Authority of India", "Government Hospitals", "ESI Hospitals", "Railway Hospitals"
  ];

  const treatmentModalities = [
    { modality: "Manual Therapy", techniques: "Joint mobilization, soft tissue massage, manipulation", applications: "Pain relief, mobility improvement" },
    { modality: "Exercise Therapy", techniques: "Strength training, stretching, functional exercises", applications: "Muscle strengthening, flexibility, endurance" },
    { modality: "Electrotherapy", techniques: "TENS, ultrasound, interferential therapy, laser", applications: "Pain management, tissue healing" },
    { modality: "Hydrotherapy", techniques: "Water exercises, pool therapy, aquatic rehabilitation", applications: "Low-impact rehabilitation, pain relief" },
    { modality: "Heat/Cold Therapy", techniques: "Hot packs, cold packs, paraffin wax, cryotherapy", applications: "Inflammation control, muscle relaxation" },
    { modality: "Assistive Devices", techniques: "Walkers, crutches, wheelchairs, orthotics", applications: "Mobility assistance, support, protection" }
  ];

  const governmentOpportunities = [
    { sector: "Central Government", positions: "AIIMS, PGIMER, Central Government hospitals", selection: "NEET-PG counseling + Merit-based selection" },
    { sector: "State Government", positions: "State medical colleges, government hospitals", selection: "State recruitment exams + Interview" },
    { sector: "Armed Forces", positions: "Army, Navy, Air Force medical services", selection: "Armed Forces Medical Services exam + Training" },
    { sector: "Railways", positions: "Railway hospitals, divisional hospitals", selection: "Railway Recruitment Board exams + Medical" },
    { sector: "ESI Corporation", positions: "ESI hospitals and dispensaries", selection: "ESI recruitment exam + Professional qualification" },
    { sector: "Sports Authority", positions: "SAI centers, sports medicine departments", selection: "Sports quota recruitment + Specialized experience" }
  ];

  const qualificationPath = [
    { level: "10+2 (PCB)", duration: "2 years", requirements: "Physics, Chemistry, Biology with 50% marks", focus: "Science foundation for medical education" },
    { level: "BPT (Bachelor of Physiotherapy)", duration: "4.5 years", requirements: "NEET score + Counseling", focus: "Basic physiotherapy education and clinical training" },
    { level: "Internship", duration: "6 months", requirements: "Completion of BPT course", focus: "Hands-on clinical experience under supervision" },
    { level: "MPT (Master of Physiotherapy)", duration: "2 years", requirements: "BPT + Entrance exam", focus: "Specialization in specific physiotherapy areas" },
    { level: "Ph.D in Physiotherapy", duration: "3-5 years", requirements: "MPT + Research aptitude", focus: "Research, teaching, and advanced clinical practice" },
    { level: "Professional Certifications", duration: "3-12 months", requirements: "Clinical experience", focus: "Specialized skills and continuing education" }
  ];

  const equipmentAndTechnology = [
    { category: "Assessment Tools", equipment: ["Goniometer", "Dynamometer", "Postural Analysis", "Balance Assessment", "Pain Scales"] },
    { category: "Exercise Equipment", equipment: ["Parallel Bars", "Exercise Balls", "Resistance Bands", "Weights", "Balance Boards"] },
    { category: "Electrotherapy", equipment: ["TENS Unit", "Ultrasound", "Interferential", "Laser Therapy", "FES Units"] },
    { category: "Manual Therapy", equipment: ["Treatment Tables", "Mobilization Belts", "Soft Tissue Tools", "Joint Mobilization", "Massage Tools"] },
    { category: "Mobility Aids", equipment: ["Wheelchairs", "Walkers", "Crutches", "Canes", "Orthotic Devices"] }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-blue-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaHeartbeat className="mx-auto text-6xl mb-6 text-teal-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to 
              <span className="text-teal-300"> Physiotherapy Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to becoming a skilled Physiotherapist and improving lives through rehabilitation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Physiotherapy Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Physiotherapy?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Physiotherapy is a healthcare profession that focuses on the assessment, diagnosis, treatment, and prevention of physical disabilities, movement disorders, and pain through physical methods. Physiotherapists help patients restore, maintain, and maximize their physical function, mobility, and overall well-being.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern physiotherapy combines evidence-based treatments including manual therapy, therapeutic exercises, electrotherapy, and patient education to help individuals recover from injuries, manage chronic conditions, and improve their quality of life.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Functions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-teal-500 mr-3" />
                    Physical assessment and diagnosis
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-teal-500 mr-3" />
                    Rehabilitation and treatment planning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-teal-500 mr-3" />
                    Therapeutic exercise prescription
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-teal-500 mr-3" />
                    Pain management and injury prevention
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-teal-500 mr-3" />
                    Patient education and wellness promotion
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
              <FaClipboardCheck className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entry Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-teal-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Requirements</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">NEET Qualification:</span> Required for BPT admission in most colleges
                </div>
                <div className="text-black">
                  <span className="font-medium">Registration:</span> State council registration mandatory for practice
                </div>
                <div className="text-black">
                  <span className="font-medium">Clinical Training:</span> Minimum 6 months internship required
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

        {/* Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLayerGroup className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physiotherapy Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{spec.area}</h3>
                  <p className="text-gray-600 mb-3">{spec.description}</p>
                  <div className="text-sm text-purple-700 font-medium">
                    <span className="font-semibold">Focus: </span>{spec.focus}
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
                      <p className="text-gray-600 mt-1">Patient rehabilitation and clinical excellence responsibilities</p>
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

        {/* Work Settings */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Work Settings</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workSettings.map((setting, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{setting.setting}</h3>
                  <p className="text-gray-600 mb-3">{setting.description}</p>
                  <div className="text-sm text-red-700 font-medium">
                    <span className="font-semibold">Opportunities: </span>{setting.opportunities}
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
              <FaGraduationCap className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Educational Pathway</h2>
            </div>
            <div className="space-y-6">
              {qualificationPath.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.level}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-yellow-600 mr-2" />
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

        {/* Treatment Modalities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStethoscope className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Treatment Modalities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {treatmentModalities.map((modality, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{modality.modality}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{modality.techniques}</p>
                  <div className="text-sm text-emerald-700 font-medium">
                    <span className="font-semibold">Applications: </span>{modality.applications}
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
              <FaFlag className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Government Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentOpportunities.map((govt, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{govt.sector}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{govt.positions}</p>
                  <div className="text-sm text-orange-700 font-medium">
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
              <FaUniversity className="text-3xl text-gray-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Institutions & Healthcare Facilities</h2>
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

        {/* Equipment & Technology */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Equipment & Technology</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {equipmentAndTechnology.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.equipment.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-gray-700 bg-white rounded p-2 border">
                        {item}
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
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaMedal className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to Physiotherapy Success</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaHeart className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Patient-Centered Care</h3>
                <p className="text-teal-100">Focus on individual patient needs and build therapeutic relationships</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaBrain className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Evidence-Based Practice</h3>
                <p className="text-teal-100">Stay updated with latest research and treatment methodologies</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Communication Skills</h3>
                <p className="text-teal-100">Develop excellent patient communication and team collaboration</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaRocket className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="text-teal-100">Pursue specializations and stay current with technology advances</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
