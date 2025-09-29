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
  FaPlane,
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
  FaGavel
} from 'react-icons/fa';

export default function UPSCNDAPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "12th Pass from recognized board" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "16.5 - 19.5 years (relaxation for reserved categories)" },
    { icon: FaRunning, title: "Physical Fitness", detail: "Meet medical and physical standards" }
  ];

  const examStructure = [
    { 
      phase: "Written Examination", 
      duration: "2.5 hours each", 
      papers: "Mathematics & General Ability Test",
      marks: "600 Marks (300 each)",
      nature: "Objective Type (MCQ)",
      qualifying: "Merit based selection"
    },
    { 
      phase: "Services Selection Board (SSB)", 
      duration: "5 Days", 
      papers: "Psychological Tests, Group Tasks, Interview",
      marks: "900 Marks",
      nature: "Practical Assessment",
      qualifying: "Personality & Leadership evaluation"
    },
    { 
      phase: "Medical Examination", 
      duration: "3-5 Days", 
      papers: "Complete Medical Check-up",
      marks: "Qualifying",
      nature: "Medical Standards",
      qualifying: "Fitness for military service"
    }
  ];

  const careerHierarchy = [
    { rank: "Lieutenant", years: "0-2 years", salary: "₹56,100 - ₹1,77,500", level: "Officer Entry" },
    { rank: "Captain", years: "2-6 years", salary: "₹61,300 - ₹1,93,900", level: "Company Commander" },
    { rank: "Major", years: "6-13 years", salary: "₹69,400 - ₹2,07,200", level: "Battalion Staff" },
    { rank: "Lieutenant Colonel", years: "13-18 years", salary: "₹1,21,200 - ₹2,12,400", level: "Commanding Officer" },
    { rank: "Colonel", years: "18-26 years", salary: "₹1,30,600 - ₹2,15,900", level: "Brigade Staff" },
    { rank: "Brigadier", years: "26-30 years", salary: "₹1,39,600 - ₹2,17,600", level: "Brigade Commander" },
    { rank: "Major General", years: "30+ years", salary: "₹1,44,200 - ₹2,18,200", level: "Division Commander" },
    { rank: "Lieutenant General", years: "32+ years", salary: "₹1,82,200 - ₹2,24,100", level: "Corps Commander" },
    { rank: "General/Admiral/Air Chief Marshal", years: "35+ years", salary: "₹2,50,000 (Fixed)", level: "Service Chief" }
  ];

  const keySubjects = [
    "Mathematics (Algebra, Trigonometry, Geometry)",
    "Physics (Mechanics, Heat, Light, Sound)", 
    "Chemistry (Organic, Inorganic, Physical)",
    "General Science & Technology",
    "History (Indian & World)",
    "Geography (Physical & Human)",
    "Current Affairs & General Knowledge",
    "English Language & Comprehension",
    "Logical Reasoning",
    "Basic Computer Knowledge"
  ];

  const trainingPhases = [
    { phase: "Indian Military Academy (IMA)", duration: "18 months", location: "Dehradun", focus: "Military training and leadership development for Army" },
    { phase: "Indian Naval Academy (INA)", duration: "22 months", location: "Ezhimala, Kerala", focus: "Naval training and seamanship for Navy officers" },
    { phase: "Air Force Academy (AFA)", duration: "74 weeks", location: "Hyderabad", focus: "Flying training and air force operations" },
    { phase: "Officers Training Academy (OTA)", duration: "49 weeks", location: "Chennai", focus: "Short service commission training" }
  ];

  const serviceRoles = [
    { role: "Army Officer", responsibility: "Leading troops, combat operations, and territorial defense" },
    { role: "Navy Officer", responsibility: "Naval operations, maritime security, and coastal defense" },
    { role: "Air Force Officer", responsibility: "Air operations, aerial combat, and air space defense" },
    { role: "Military Intelligence Officer", responsibility: "Intelligence gathering and strategic analysis" },
    { role: "Military Engineer", responsibility: "Infrastructure development and technical operations" },
    { role: "Military Doctor", responsibility: "Medical services for defense personnel" }
  ];

  const serviceTypes = [
    "Indian Army",
    "Indian Navy", 
    "Indian Air Force",
    "Military Intelligence Corps",
    "Army Service Corps",
    "Army Ordnance Corps",
    "Corps of Engineers",
    "Corps of Signals",
    "Army Medical Corps",
    "Army Education Corps",
    "Judge Advocate General",
    "Army Aviation Corps"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-yellow-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-yellow-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to 
              <span className="text-green-300"> UPSC NDA & NA Examination</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the Indian Armed Forces through National Defence Academy and Naval Academy
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is NDA Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is the National Defence Academy (NDA)?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The National Defence Academy (NDA) is the joint defense service training institute of the Indian Armed Forces, where cadets of the three services (Army, Navy, and Air Force) train together before they go on to respective service academies for further pre-commissioning training.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  NDA is located in Khadakwasla, Pune, Maharashtra, and is one of the most prestigious defense academies in the world. It aims to develop leadership qualities, physical fitness, and military skills in young officers who will serve the nation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Objectives</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Leadership development and character building
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Military training and discipline
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Physical fitness and endurance building
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Academic excellence in defense studies
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Service before self philosophy
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Relaxation Details</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">OBC:</span> 3 years relaxation
                </div>
                <div className="text-black">
                  <span className="font-medium">SC/ST:</span> 5 years relaxation
                </div>
                <div className="text-black">
                  <span className="font-medium">PwD:</span> 10 years relaxation (where applicable)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NDA Examination Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">NDA Examination Structure</h2>
            </div>
            <div className="space-y-6">
              {examStructure.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 border border-green-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-green-600 mr-2" />
                      <span className="text-gray-700 text-sm">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-700">{exam.marks}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{exam.nature}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{exam.qualifying}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Subjects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keySubjects.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFlag className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Military Services & Corps</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {serviceTypes.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Phases */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Phases After NDA</h2>
            </div>
            <div className="space-y-6">
              {trainingPhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{phase.location}</span>
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

        {/* Career Progression */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Military Career Progression</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{career.rank}</h3>
                      <p className="text-gray-600 mt-1">Military leadership and operational command responsibility</p>
                    </div>
                    <div className="flex items-center space-x-8 text-right">
                      <div>
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-semibold text-gray-800">{career.years}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Pay Scale</div>
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

        {/* Service Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Military Service Roles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FaShieldAlt className="text-green-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{role.role}</h3>
                      <p className="text-gray-600">{role.responsibility}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaMedal className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to NDA Success</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaBookOpen className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Strong Academics</h3>
                <p className="text-green-100">Master Mathematics and General Knowledge subjects</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaRunning className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Physical Fitness</h3>
                <p className="text-green-100">Maintain excellent physical condition and stamina</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Leadership Skills</h3>
                <p className="text-green-100">Develop confidence and team leadership abilities</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaBullseye className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Clear Focus</h3>
                <p className="text-green-100">Stay determined and committed to serving the nation</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
