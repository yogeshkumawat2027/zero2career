import Link from 'next/link';
import React from 'react';
import { 
  FaUserTie, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaHeart, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaStethoscope,
  FaHospital,
  FaMicroscope,
  FaPills,
  FaAmbulance
} from 'react-icons/fa';

export const metadata = {
  title: "Doctor Career Guide 2025 | Complete MBBS, NEET Preparation & Medical Training | Zero2Career",
  description: "Comprehensive doctor career guide covering NEET exam preparation, MBBS admission, medical college selection, specialization options, salary expectations and healthcare career opportunities.",
  keywords: "doctor career, MBBS admission, NEET preparation, medical college, doctor salary India, medical specialization, healthcare jobs, physician career, medical education",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career", 
  alternates: {
    canonical: "https://zero2career.in/careers/doctor"
  },
  openGraph: {
    title: "Become a Doctor - Complete Medical Career Guide 2025",
    description: "Discover everything about medical career: NEET preparation, MBBS admission, medical training, specializations, salary expectations, and healthcare opportunities in India.",
    url: "https://zero2career.in/careers/doctor",
    type: "article",
    images: [
      {
        url: "https://max-website20-images.s3.ap-south-1.amazonaws.com/Types_of_Doctors_1c5efbe677.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor Career Guide - Zero2Career"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Doctor - Complete Medical Career Guide 2025", 
    description: "Comprehensive guide to medical career: NEET preparation, MBBS admission, specializations, salary & healthcare opportunities in India.",
    images: ["https://max-website20-images.s3.ap-south-1.amazonaws.com/Types_of_Doctors_1c5efbe677.jpg"],
  }
};

export default function DoctorPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "12th with Physics, Chemistry, Biology & English" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "17-25 years for NEET UG (relaxation for reserved categories)" },
    { icon: FaStethoscope, title: "Medical Standards", detail: "Good physical and mental health condition" }
  ];

  const examStructure = [
    { 
      phase: "NEET UG", 
      duration: "3 Hours", 
      papers: "Physics, Chemistry, Biology",
      marks: "720 Marks",
      nature: "Multiple Choice Questions"
    },
    { 
      phase: "MBBS Course", 
      duration: "5.5 Years", 
      papers: "Pre-clinical, Para-clinical, Clinical",
      marks: "Internal + University Exams",
      nature: "Theory + Practical + Internship"
    },
    { 
      phase: "NEET PG (Optional)", 
      duration: "3 Hours", 
      papers: "Medical subjects",
      marks: "800 Marks",
      nature: "Computer Based Test"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Resident Doctor", years: "After MBBS", salary: "₹60,000 - ₹80,000" },
    { rank: "Senior Resident Doctor", years: "2-3 years", salary: "₹80,000 - ₹1,20,000" },
    { rank: "Assistant Professor", years: "5-7 years", salary: "₹1,00,000 - ₹2,00,000" },
    { rank: "Associate Professor", years: "10-12 years", salary: "₹1,50,000 - ₹3,00,000" },
    { rank: "Professor", years: "15+ years", salary: "₹2,00,000 - ₹5,00,000" },
    { rank: "HOD/Chief of Department", years: "20+ years", salary: "₹3,00,000 - ₹10,00,000+" }
  ];

  const keySubjects = [
    "Human Anatomy",
    "Human Physiology", 
    "Biochemistry",
    "Pathology",
    "Pharmacology",
    "Microbiology",
    "Forensic Medicine",
    "Community Medicine",
    "Internal Medicine",
    "Surgery",
    "Obstetrics & Gynecology",
    "Pediatrics"
  ];

  const specializationOptions = [
    { specialization: "Internal Medicine", duration: "3 years", focus: "General medicine, chronic diseases, diagnosis" },
    { specialization: "Surgery", duration: "3 years", focus: "Surgical procedures, trauma care, operations" },
    { specialization: "Pediatrics", duration: "3 years", focus: "Child healthcare, neonatal care, growth disorders" },
    { specialization: "Obstetrics & Gynecology", duration: "3 years", focus: "Women's health, pregnancy, reproductive health" },
    { specialization: "Orthopedics", duration: "3 years", focus: "Bone, joint, muscle disorders and injuries" },
    { specialization: "Cardiology", duration: "3 years", focus: "Heart diseases, cardiac procedures, interventions" },
    { specialization: "Neurology", duration: "3 years", focus: "Brain, nervous system disorders, stroke care" },
    { specialization: "Radiology", duration: "3 years", focus: "Medical imaging, CT, MRI, X-ray interpretation" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-pink-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaHeart className="mx-auto text-6xl mb-6 text-red-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-red-300"> Doctor</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the noble medical profession and saving lives through healing and care
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Medical Profession Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is the Medical Profession?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The medical profession is one of the most respected and noble careers, dedicated to preserving human life and promoting health. Doctors diagnose, treat, and prevent diseases while providing compassionate care to patients across all age groups.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Medical professionals work in various settings including hospitals, clinics, research institutions, and public health organizations, contributing to individual patient care and community health improvement.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Patient diagnosis and treatment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Emergency medical care
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Preventive healthcare
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Medical research and innovation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Health education and counseling
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">NEET UG Age Relaxation Details</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className='text-black'>
                  <span className="font-medium">OBC:</span> 27 years
                </div>
                <div className='text-black'>
                  <span className="font-medium">SC/ST:</span> 30 years
                </div>
                <div className='text-black'>
                  <span className="font-medium">PwD:</span> 32 years
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Education Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Medical Education Structure</h2>
            </div>
            <div className="space-y-6">
              {examStructure.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{exam.marks}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{exam.nature}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Key Medical Subjects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Specialization Options */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStethoscope className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Post-Graduation Specialization Options</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              After completing MBBS, doctors can pursue MD/MS specialization in various fields. These specializations require clearing NEET PG and completing 3 years of specialized training.
            </p>
            <div className="space-y-4">
              {specializationOptions.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{spec.specialization}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700 font-medium">{spec.duration}</span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700">{spec.focus}</p>
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
                      {index === 0 && <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Fresh Graduate</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Position</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Career Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Medical Career Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">12th with PCB (17-18 years)</h3>
                  <p className="text-gray-600">Complete higher secondary with Physics, Chemistry, Biology</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">NEET UG & MBBS Admission (18-19 years)</h3>
                  <p className="text-gray-600">Clear NEET UG and secure admission in medical college</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">MBBS Completion (23-24 years)</h3>
                  <p className="text-gray-600">Complete 5.5 years MBBS including 1 year internship</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">NEET PG & Specialization (24-25 years)</h3>
                  <p className="text-gray-600">Clear NEET PG for MD/MS specialization (optional)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Medical Practice (24+ years)</h3>
                  <p className="text-gray-600">Start independent practice or join hospitals</p>
                </div>
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
                  <a href="https://nta.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-red-600 mr-3 group-hover:text-red-800" />
                    <div>
                      <div className="font-medium text-gray-800">NTA (NEET Conducting Body)</div>
                      <div className="text-sm text-gray-600">NEET exam notifications and results</div>
                    </div>
                  </a>
                  <a href="https://www.mciindia.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Medical Council of India</div>
                      <div className="text-sm text-gray-600">Medical education regulations and guidelines</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Preparation Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Master NCERT books for strong foundation</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice with previous year NEET questions</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Focus on Biology (50% weightage in NEET)</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Take regular mock tests for time management</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain consistent study schedule</span>
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