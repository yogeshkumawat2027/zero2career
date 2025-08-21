import Link from 'next/link';
import React from 'react';
import { 
  FaUserNurse, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaShieldAlt, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaHospital,
  FaEye,
  FaHeart,
  FaStethoscope
} from 'react-icons/fa';

export default function NursePage() {
  const eligibilityData = [
    { icon: FaStethoscope, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "12th with Science (min 45-50%)" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "17-35 years for most nursing programs" },
    { icon: FaEye, title: "Medical Fitness", detail: "Good physical and mental health" }
  ];

  const nursingPrograms = [
    { 
      program: "Auxiliary Nurse Midwife (ANM)", 
      duration: "18-24 months", 
      requirement: "10th pass",
      cost: "₹50,000-2 lakhs",
      description: "Basic healthcare assistant and midwifery"
    },
    { 
      program: "General Nursing & Midwifery (GNM)", 
      duration: "3.5 years", 
      requirement: "12th with Science",
      cost: "₹1-4 lakhs",
      description: "Diploma in nursing with clinical training"
    },
    { 
      program: "Bachelor of Science in Nursing (B.Sc)", 
      duration: "4 years", 
      requirement: "12th with PCB (50%+)",
      cost: "₹2-8 lakhs",
      description: "Degree program with advanced nursing skills"
    },
    { 
      program: "Master of Science in Nursing (M.Sc)", 
      duration: "2 years", 
      requirement: "B.Sc Nursing",
      cost: "₹3-10 lakhs",
      description: "Specialized nursing with research and leadership"
    }
  ];

  const careerHierarchy = [
    { rank: "Staff Nurse", years: "0-3 years", salary: "₹15,000-35,000/month" },
    { rank: "Senior Staff Nurse", years: "3-6 years", salary: "₹25,000-45,000/month" },
    { rank: "Charge Nurse/Ward Sister", years: "6-10 years", salary: "₹35,000-60,000/month" },
    { rank: "Assistant Nursing Superintendent", years: "10-15 years", salary: "₹50,000-80,000/month" },
    { rank: "Nursing Superintendent", years: "15-20 years", salary: "₹70,000-1.2 lakhs/month" },
    { rank: "Chief Nursing Officer", years: "20+ years", salary: "₹1-2 lakhs/month" }
  ];

  const medicalRequirements = [
    "Medical fitness certificate",
    "Normal vision (correctable to 6/6)",
    "Good hearing ability",
    "No infectious diseases",
    "Mental stability and emotional balance",
    "Height: Minimum 152 cm",
    "No physical disabilities affecting patient care",
    "Immunization records up to date"
  ];

  const topNursingColleges = [
    { college: "All India Institute of Medical Sciences (AIIMS)", location: "New Delhi", type: "Government", duration: "4 years" },
    { college: "Christian Medical College (CMC)", location: "Vellore, Tamil Nadu", type: "Private", duration: "4 years" },
    { college: "Armed Forces Medical College", location: "Pune", type: "Government", duration: "4 years" },
    { college: "Kasturba Medical College", location: "Manipal, Karnataka", type: "Private", duration: "4 years" },
    { college: "King George's Medical University", location: "Lucknow, UP", type: "Government", duration: "4 years" },
    { college: "Apollo College of Nursing", location: "Chennai", type: "Private", duration: "4 years" }
  ];

  const subjectAreas = [
    "Anatomy & Physiology",
    "Fundamentals of Nursing", 
    "Medical-Surgical Nursing",
    "Community Health Nursing",
    "Psychiatric Nursing",
    "Pediatric Nursing",
    "Obstetric & Gynecological Nursing",
    "Nursing Management"
  ];

  const specializationAreas = [
    "Critical Care Nursing",
    "Cardiac Nursing",
    "Oncology Nursing",
    "Pediatric Intensive Care",
    "Operating Room Nursing",
    "Emergency Nursing",
    "Psychiatric Mental Health",
    "Community Health Nursing"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-rose-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-900 to-rose-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaUserNurse className="mx-auto text-6xl mb-6 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-pink-300"> Professional Nurse</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the healthcare industry and making a difference in people's lives as a caring professional
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Professional Nursing Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Professional Nursing?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Professional nursing is a healthcare profession focused on the care of individuals, families, and communities to help them maintain, recover, or improve their health and quality of life. Nurses work in various healthcare settings and play a vital role in patient care.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nurses must be registered with the Indian Nursing Council (INC) or State Nursing Council and maintain continuing education and ethical standards throughout their career.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Patient assessment and monitoring
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Medication administration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Patient education and counseling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Wound care and treatments
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Emergency response and critical care
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-pink-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Entrance Exams:</span> NEET for B.Sc Nursing (in some states)
                </div>
                <div className="text-black">
                  <span className="font-medium">Registration:</span> State Nursing Council registration required
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nursing Programs */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Nursing Programs & Training</h2>
            </div>
            <div className="space-y-6">
              {nursingPrograms.map((program, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{program.program}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{program.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{program.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{program.cost}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{program.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHeart className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Medical & Physical Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {medicalRequirements.map((requirement, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-red-600 mr-3 flex-shrink-0" />
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
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjectAreas.map((subject, index) => (
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

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHospital className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Nursing Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specializationAreas.map((specialization, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{specialization}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Nursing Colleges */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Nursing Colleges in India</h2>
            </div>
            <div className="space-y-4">
              {topNursingColleges.map((college, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{college.college}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{college.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${college.type === 'Government' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
                        {college.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{college.duration}</span>
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

        {/* Career Path Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Nursing Career Path Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Choose Your Program</h3>
                  <p className="text-gray-600">Select ANM, GNM, or B.Sc Nursing based on your career goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Complete Nursing Education</h3>
                  <p className="text-gray-600">Finish theoretical and clinical training requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Nursing Council Registration</h3>
                  <p className="text-gray-600">Register with State Nursing Council to practice legally</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Clinical Experience</h3>
                  <p className="text-gray-600">Gain hands-on experience in hospitals or healthcare facilities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Career Development & Specialization</h3>
                  <p className="text-gray-600">Pursue advanced degrees and specializations for career growth</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Environments */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHospital className="text-3xl text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Work Environments</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Hospital Settings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• General wards</li>
                  <li>• Intensive Care Units (ICU)</li>
                  <li>• Emergency departments</li>
                  <li>• Operating theaters</li>
                  <li>• Maternity wards</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Community Care</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Primary health centers</li>
                  <li>• Home healthcare</li>
                  <li>• School health programs</li>
                  <li>• Occupational health</li>
                  <li>• Public health departments</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Specialized Care</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rehabilitation centers</li>
                  <li>• Mental health facilities</li>
                  <li>• Nursing education</li>
                  <li>• Research institutions</li>
                  <li>• Private practice</li>
                </ul>
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
                <h3 className="text-xl font-semibold text-gray-800">Official Websites</h3>
                <div className="space-y-3">
                  <a href="https://indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-pink-600 mr-3 group-hover:text-pink-800" />
                    <div>
                      <div className="font-medium text-gray-800">Indian Nursing Council</div>
                      <div className="text-sm text-gray-600">Registration, regulations, and standards</div>
                    </div>
                  </a>
                  <a href="https://www.mohfw.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Ministry of Health & Family Welfare</div>
                      <div className="text-sm text-gray-600">Government health policies and programs</div>
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
                      <span className="text-gray-700">Develop strong communication and empathy skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest medical practices</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pursue continuing education and certifications</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build professional network in healthcare</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Consider international opportunities and certifications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Market & Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaShieldAlt className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Market & Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Domestic Opportunities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Government hospitals</li>
                  <li>• Private healthcare chains</li>
                  <li>• Nursing homes</li>
                  <li>• Corporate health centers
