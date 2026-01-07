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
  FaStethoscope,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaHospital,
  FaUserMd,
  FaHandHoldingHeart,
  FaUserTie,
  FaCrown,
  FaSyringe,
  FaBuilding,
  FaSitemap,
  FaLeaf,
  FaAmbulance,
  FaBaby,
  FaPrescriptionBottle,
  FaUserNurse
} from 'react-icons/fa';

export default function NursePage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "12th grade with Science (PCB) or equivalent" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "17-35 years (varies by state and program)" },
    { icon: FaHospital, title: "Registration", detail: "Registration with State Nursing Council mandatory" }
  ];

  const examStructure = [
    {
      phase: "General Nursing & Midwifery (GNM)",
      duration: "3.5 Years",
      papers: "Theory + Practical",
      marks: "University/Board Exams",
      nature: "Diploma Level Program",
      qualifying: "12th with Science or equivalent"
    },
    {
      phase: "Bachelor of Science in Nursing (B.Sc Nursing)",
      duration: "4 Years",
      papers: "Theory + Practical + Internship",
      marks: "University Exams",
      nature: "Degree Level Program",
      qualifying: "12th with PCB + Entrance Exams"
    },
    {
      phase: "Post Basic B.Sc Nursing",
      duration: "2 Years",
      papers: "Theory + Practical",
      marks: "University Exams",
      nature: "For GNM graduates",
      qualifying: "GNM + 1 year experience"
    },
    {
      phase: "Master of Science in Nursing (M.Sc Nursing)",
      duration: "2 Years",
      papers: "Theory + Research + Practical",
      marks: "University Exams",
      nature: "Postgraduate Program",
      qualifying: "B.Sc Nursing + Entrance Exams"
    }
  ];

  const careerHierarchy = [
    { rank: "Staff Nurse", years: "0-3 years", salary: "₹3 - ₹6 Lakhs/annum", level: "Entry Level" },
    { rank: "Senior Staff Nurse", years: "3-7 years", salary: "₹4 - ₹8 Lakhs/annum", level: "Intermediate" },
    { rank: "Ward Sister/Charge Nurse", years: "5-10 years", salary: "₹6 - ₹12 Lakhs/annum", level: "Supervisory" },
    { rank: "Assistant Nursing Superintendent", years: "8-15 years", salary: "₹8 - ₹15 Lakhs/annum", level: "Management" },
    { rank: "Deputy Nursing Superintendent", years: "12-20 years", salary: "₹12 - ₹20 Lakhs/annum", level: "Senior Management" },
    { rank: "Chief Nursing Officer", years: "15+ years", salary: "₹15 - ₹30 Lakhs/annum", level: "Executive Level" },
    { rank: "Nursing Professor", years: "10+ years", salary: "₹10 - ₹25 Lakhs/annum", level: "Academic" }
  ];

  const keySubjects = [
    "Anatomy & Physiology",
    "Fundamentals of Nursing",
    "Medical-Surgical Nursing",
    "Community Health Nursing",
    "Maternal & Child Health",
    "Psychiatric Nursing",
    "Pharmacology",
    "Microbiology",
    "Pathology",
    "Nursing Administration",
    "Nutrition & Dietetics",
    "First Aid & Emergency Care"
  ];

  const specializations = [
    "Critical Care Nursing",
    "Pediatric Nursing",
    "Cardiac Nursing",
    "Oncology Nursing",
    "Emergency Nursing",
    "Operating Room Nursing",
    "Community Health Nursing",
    "Psychiatric/Mental Health Nursing",
    "Geriatric Nursing",
    "Infection Control Nursing",
    "Nephrology Nursing",
    "Orthopedic Nursing"
  ];

  const nurseRoles = [
    { role: "Hospital Staff Nurse", responsibility: "Direct patient care in wards, ICUs, and departments" },
    { role: "Community Health Nurse", responsibility: "Public health programs and community outreach" },
    { role: "School Health Nurse", responsibility: "Health services in educational institutions" },
    { role: "Industrial Nurse", responsibility: "Occupational health and safety in industries" },
    { role: "Private Practice Nurse", responsibility: "Home care nursing and private clinic services" },
    { role: "Nursing Educator", responsibility: "Teaching in nursing schools and colleges" },
    { role: "Nurse Administrator", responsibility: "Managing nursing services and departments" },
    { role: "Research Nurse", responsibility: "Clinical research and evidence-based practice" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaUserNurse className="mx-auto text-6xl mb-6 text-teal-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete Guide to Becoming a
              <span className="text-teal-300"> Nurse</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              A comprehensive roadmap to a career in nursing, from education to specialized practice in India
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What is a Nurse Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Nurse in India?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A nurse is a healthcare professional who provides direct patient care, promotes health, and prevents illness. In India, nurses are registered healthcare providers who have completed formal nursing education and are licensed to practice by state nursing councils.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nurses serve as the backbone of the healthcare system, working in hospitals, clinics, communities, and various healthcare settings. They play a crucial role in patient recovery, health education, and disease prevention.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Direct patient care and monitoring
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Medication administration and documentation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Health education and counseling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Emergency care and first aid
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Infection control and safety protocols
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria & Educational Path</h2>
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

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Education Pathways</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Diploma Route:</span> GNM (3.5 years) after 12th Science
                </div>
                <div className="text-black">
                  <span className="font-medium">Degree Route:</span> B.Sc Nursing (4 years) after 12th Science
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examination Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Nursing Education & Examination Structure</h2>
            </div>
            <div className="space-y-6">
              {examStructure.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{exam.marks}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Core Nursing Subjects</h2>
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

        {/* Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStethoscope className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Nursing Specializations</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {specializations.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Nurse Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLeaf className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Paths for Nurses</h2>
            </div>
            <div className="space-y-4">
              {nurseRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaHeartbeat className="text-blue-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{role.role}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{role.responsibility}</p>
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
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index === 5 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
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
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        position.level === 'Entry Level' ? 'bg-green-200 text-green-800' :
                        position.level === 'Executive Level' ? 'bg-purple-200 text-purple-800' :
                        position.level === 'Academic' ? 'bg-orange-200 text-orange-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
                        {position.level}
                      </span>
                    </div>
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
              <FaExternalLinkAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Links</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Official Websites</h3>
                <div className="space-y-3">
                  <a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-teal-600 mr-3 group-hover:text-teal-800" />
                    <div>
                      <div className="font-medium text-gray-800">Indian Nursing Council</div>
                      <div className="text-sm text-gray-600">The apex regulatory body for nursing education and practice</div>
                    </div>
                  </a>
                  <a href="https://www.mohfw.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Ministry of Health & Family Welfare</div>
                      <div className="text-sm text-gray-600">Government policies and healthcare information</div>
                    </div>
                  </a>
                  <a href="https://www.tnai.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-purple-600 mr-3 group-hover:text-purple-800" />
                    <div>
                      <div className="font-medium text-gray-800">Trained Nurses Association of India</div>
                      <div className="text-sm text-gray-600">Professional association for nurses</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Development Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Gain hands-on experience through clinical rotations and internships</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pursue specialized certifications in areas of interest</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain continuing education and stay updated with medical advances</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop leadership and management skills for career advancement</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Join professional organizations and attend nursing conferences</span>
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