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
  FaGavel, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaCloud,
  FaEye,
  FaHeart,
  FaUserTie,
  FaBalanceScale,
  FaRunning,
  FaStethoscope,
  FaMedal,
  FaFlag
} from 'react-icons/fa';

export default function PoliceOfficerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree from recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "21-30 years (varies by state and category)" },
    { icon: FaEye, title: "Vision", detail: "6/6 or 6/9 vision (correctable) without color blindness" }
  ];

  const policeRanks = [
    { 
      rank: "Police Constable", 
      education: "12th Pass", 
      ageLimit: "18-25 years",
      salary: "₹21,700 - ₹69,100",
      description: "Entry-level position for law enforcement"
    },
    { 
      rank: "Head Constable", 
      education: "12th Pass + Experience", 
      ageLimit: "Promotion based",
      salary: "₹25,500 - ₹81,100",
      description: "Senior constable with leadership responsibilities"
    },
    { 
      rank: "Assistant Sub-Inspector (ASI)", 
      education: "12th Pass + Experience", 
      ageLimit: "Promotion based",
      salary: "₹29,200 - ₹92,300",
      description: "Junior supervisory role in police stations"
    },
    { 
      rank: "Sub-Inspector (SI)", 
      education: "Bachelor's Degree", 
      ageLimit: "21-28 years",
      salary: "₹35,400 - ₹1,12,400",
      description: "Investigative and supervisory responsibilities"
    },
    { 
      rank: "Inspector", 
      education: "Bachelor's Degree", 
      ageLimit: "21-30 years",
      salary: "₹44,900 - ₹1,42,400",
      description: "In-charge of police station operations"
    },
    { 
      rank: "Deputy Superintendent of Police (DSP)", 
      education: "Bachelor's Degree", 
      ageLimit: "21-32 years",
      salary: "₹56,100 - ₹1,77,500",
      description: "Administrative and operational supervision"
    }
  ];

  const careerHierarchy = [
    { rank: "Police Constable", years: "0-5 years", salary: "₹21,700 - ₹69,100/month" },
    { rank: "Head Constable", years: "5-10 years", salary: "₹25,500 - ₹81,100/month" },
    { rank: "Sub-Inspector", years: "8-15 years", salary: "₹35,400 - ₹1,12,400/month" },
    { rank: "Inspector", years: "15-20 years", salary: "₹44,900 - ₹1,42,400/month" },
    { rank: "Deputy SP", years: "20-25 years", salary: "₹56,100 - ₹1,77,500/month" },
    { rank: "Superintendent of Police", years: "25+ years", salary: "₹78,800 - ₹2,09,200/month" }
  ];

  const physicalRequirements = [
    "Height: Male 165cm, Female 150cm (varies by state)",
    "Chest: Male 81cm (84cm expanded), Female N/A",
    "Weight: Proportionate to height and age",
    "Physical Efficiency Test (running, long jump, etc.)",
    "Medical fitness certificate",
    "No major physical deformities",
    "Good eyesight (6/6 or 6/9 correctable)",
    "Normal hearing ability"
  ];

  const selectionProcess = [
    { stage: "Written Examination", description: "Objective type questions on General Knowledge, Reasoning, Mathematics, and English", duration: "2-3 hours" },
    { stage: "Physical Standards Test", description: "Height, chest, weight measurements as per requirements", duration: "1 day" },
    { stage: "Physical Efficiency Test", description: "Running, long jump, high jump, and other physical activities", duration: "1 day" },
    { stage: "Medical Examination", description: "Comprehensive health check-up by medical board", duration: "1-2 days" },
    { stage: "Document Verification", description: "Verification of educational and other certificates", duration: "1 day" },
    { stage: "Training", description: "Police training at state police training college", duration: "6-12 months" }
  ];

  const subjectAreas = [
    "General Knowledge & Current Affairs",
    "Indian Constitution & Law",
    "Criminal Law & Procedures", 
    "General Science",
    "Mathematics & Reasoning",
    "English Language",
    "Computer Knowledge",
    "State-specific Knowledge"
  ];

  const specializations = [
    { dept: "Traffic Police", role: "Traffic regulation and road safety enforcement" },
    { dept: "Crime Branch", role: "Investigation of serious crimes and special cases" },
    { dept: "Special Armed Forces", role: "Anti-terrorism and special operations" },
    { dept: "Cyber Crime Unit", role: "Investigation of cyber crimes and digital forensics" },
    { dept: "Narcotics Department", role: "Drug trafficking and substance abuse cases" },
    { dept: "Women & Child Protection", role: "Crimes against women and children" }
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
              <span className="text-red-300"> Police Officer</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining law enforcement and serving the nation with honor and integrity
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is a Police Officer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Police Officer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Police Officer is a law enforcement professional responsible for maintaining public order, preventing and investigating crimes, and ensuring the safety and security of citizens. They serve as the first line of defense against crime and play a crucial role in upholding justice and the rule of law.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Police officers work at various levels - from local police stations to specialized units like crime branch, traffic police, and anti-terrorism squads. They require physical fitness, mental alertness, and strong moral character to effectively serve the community.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Maintaining law and order
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Crime prevention and investigation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Traffic regulation and control
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Community policing and public relations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Emergency response and disaster management
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Notes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Reservation:</span> SC/ST/OBC candidates get age relaxation as per rules
                </div>
                <div className="text-black">
                  <span className="font-medium">Character Verification:</span> Thorough background check required
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Police Ranks */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMedal className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Police Ranks & Hierarchy</h2>
            </div>
            <div className="space-y-6">
              {policeRanks.map((rank, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{rank.rank}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaGraduationCap className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{rank.education}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{rank.ageLimit}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700 text-sm">{rank.salary}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{rank.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Physical Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRunning className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physical Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {physicalRequirements.map((requirement, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{requirement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Study Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjectAreas.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Police Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Police Departments & Specializations</h2>
            </div>
            <div className="space-y-4">
              {specializations.map((dept, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaFlag className="text-teal-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{dept.dept}</h3>
                    </div>
                    <div>
                      <span className="text-gray-700">{dept.role}</span>
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
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'}`}>
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

        {/* Selection Process Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Selection Process Timeline</h2>
            </div>
            <div className="space-y-6">
              {selectionProcess.map((process, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">{index + 1}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{process.stage}</h3>
                      <span className="text-sm text-blue-600 font-medium">{process.duration}</span>
                    </div>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Links</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Official Websites</h3>
                <div className="space-y-3">
                  <a href="https://bprd.nic.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-red-600 mr-3 group-hover:text-red-800" />
                    <div>
                      <div className="font-medium text-gray-800">Bureau of Police Research & Development</div>
                      <div className="text-sm text-gray-600">Training, research and policy development</div>
                    </div>
                  </a>
                  <a href="https://ssc.nic.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Staff Selection Commission</div>
                      <div className="text-sm text-gray-600">Central police recruitment examinations</div>
                    </div>
                  </a>
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <FaInfoCircle className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">State Police Websites</div>
                      <div className="text-sm text-gray-600">Check your respective state police recruitment board</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain excellent physical fitness and health</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with current affairs and law changes</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice regularly for physical efficiency tests</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong communication and leadership skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain clean character and background record</span>
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