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
  FaAmbulance,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaHeartbeat,
  FaUserMd,
  FaStethoscope,
  FaFirstAid
} from 'react-icons/fa';

export default function ParamedicPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "12th Pass with Science (PCB preferred)" },
    { icon: FaGraduationCap, title: "Certification", detail: "Paramedic certification from recognized institute" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "18-30 years (varies by employer)" },
    { icon: FaHeartbeat, title: "Physical Fitness", detail: "Good physical and mental health required" }
  ];

  const courseStructure = [
    { 
      level: "Certificate Course", 
      duration: "6 months - 1 year", 
      subjects: "Basic Life Support, First Aid, Medical Terminology",
      qualification: "12th Pass",
      scope: "Emergency Medical Technician (EMT)"
    },
    { 
      level: "Diploma Course", 
      duration: "1-2 years", 
      subjects: "Advanced Life Support, Pharmacology, Anatomy",
      qualification: "12th Pass (Science)",
      scope: "Advanced EMT, Ambulance Services"
    },
    { 
      level: "Bachelor's Degree", 
      duration: "3-4 years", 
      subjects: "Emergency Medicine, Trauma Care, Critical Care",
      qualification: "12th Pass (PCB)",
      scope: "Paramedic Officer, Supervisor roles"
    }
  ];

  const careerHierarchy = [
    { rank: "Emergency Medical Technician (EMT)", years: "Entry Level", salary: "₹15,000 - ₹25,000" },
    { rank: "Advanced EMT / Paramedic", years: "1-3 years", salary: "₹20,000 - ₹35,000" },
    { rank: "Senior Paramedic", years: "3-5 years", salary: "₹30,000 - ₹50,000" },
    { rank: "Paramedic Supervisor", years: "5-8 years", salary: "₹40,000 - ₹65,000" },
    { rank: "Emergency Services Manager", years: "8-12 years", salary: "₹60,000 - ₹1,00,000" },
    { rank: "Chief of Emergency Services", years: "12+ years", salary: "₹80,000 - ₹1,50,000" }
  ];

  const keySubjects = [
    "Human Anatomy & Physiology",
    "Emergency Medical Procedures", 
    "Pharmacology & Drug Administration",
    "Trauma & Critical Care",
    "Cardiopulmonary Resuscitation (CPR)",
    "Medical Equipment Operation",
    "Patient Assessment & Triage",
    "Emergency Communication Systems"
  ];

  const trainingModules = [
    { module: "Basic Life Support (BLS)", duration: "40 hours", focus: "CPR, AED usage, airway management" },
    { module: "Advanced Cardiac Life Support", duration: "60 hours", focus: "Advanced resuscitation techniques, cardiac emergencies" },
    { module: "Trauma Life Support", duration: "80 hours", focus: "Accident victim care, trauma assessment" },
    { module: "Pediatric Emergency Care", duration: "50 hours", focus: "Child-specific emergency procedures" },
    { module: "Clinical Rotations", duration: "200-400 hours", focus: "Hands-on hospital and ambulance experience" }
  ];

  const employmentSectors = [
    { sector: "Ambulance Services", description: "108, 102 emergency services, private ambulance companies", demand: "High" },
    { sector: "Hospitals", description: "Emergency departments, ICU support, trauma centers", demand: "Very High" },
    { sector: "Fire Department", description: "Rescue operations, emergency medical response", demand: "Moderate" },
    { sector: "Industrial Safety", description: "Corporate medical emergency response teams", demand: "Growing" },
    { sector: "Event Management", description: "Medical coverage for large events, sports", demand: "Seasonal" },
    { sector: "Healthcare Startups", description: "Home healthcare, telemedicine support", demand: "Emerging" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 to-rose-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaAmbulance className="mx-auto text-6xl mb-6 text-red-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-red-300"> Paramedic</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the lifesaving profession of emergency medical services and making a difference in critical moments
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Paramedic Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Paramedic?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A paramedic is a highly trained emergency medical professional who provides advanced life support and critical care to patients in emergency situations. They are often the first responders in medical emergencies, working both in ambulances and hospital emergency departments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Paramedics are trained to assess patient conditions, provide immediate medical interventions, administer medications, and stabilize patients during transport to healthcare facilities. They play a crucial role in the chain of survival during medical emergencies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-red-500 mr-3" />
                    Emergency medical response and patient assessment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-red-500 mr-3" />
                    Advanced life support procedures
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-red-500 mr-3" />
                    Medication administration and IV therapy
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-red-500 mr-3" />
                    Patient transport and monitoring
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-red-500 mr-3" />
                    Documentation and communication with hospitals
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
              <FaClipboardCheck className="text-3xl text-red-600 mr-4" />
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
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Requirements</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className='text-black'>
                  <span className="font-medium">Physical Fitness:</span> Ability to lift and carry patients
                </div>
                <div className='text-black'>
                  <span className="font-medium">Communication:</span> Good English and local language skills
                </div>
                <div className='text-black'>
                  <span className="font-medium">Mental Health:</span> Ability to work under extreme pressure
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-rose-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Paramedic Education & Training Structure</h2>
            </div>
            <div className="space-y-6">
              {courseStructure.map((course, index) => (
                <div key={index} className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{course.level}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-rose-600 mr-2" />
                      <span className="text-gray-700">{course.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{course.subjects}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">{course.qualification}</span>
                    </div>
                    <div>
                      <span className="text-sm text-rose-700 font-medium">{course.scope}</span>
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
              <FaGraduationCap className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keySubjects.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg p-4 border border-pink-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-pink-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Modules */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Training Certifications</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Professional paramedic training involves multiple specialized certifications that build upon each other. These modules ensure comprehensive emergency medical skills and legal compliance for practice.
            </p>
            <div className="space-y-4">
              {trainingModules.map((module, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 border border-red-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{module.module}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-red-600 mr-2" />
                      <span className="text-gray-700 font-medium">{module.duration}</span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700">{module.focus}</p>
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
              <FaChartLine className="text-3xl text-rose-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200'}`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-rose-600 mr-2" />
                      <span className="text-gray-700">{position.years}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{position.salary}</span>
                    </div>
                    <div>
                      {index === 0 && <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-rose-200 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">Senior Level</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employment Sectors */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMapMarkerAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Employment Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {employmentSectors.map((sector, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-800">{sector.sector}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      sector.demand === 'Very High' ? 'bg-green-200 text-green-800' :
                      sector.demand === 'High' ? 'bg-blue-200 text-blue-800' :
                      sector.demand === 'Growing' ? 'bg-yellow-200 text-yellow-800' :
                      sector.demand === 'Emerging' ? 'bg-purple-200 text-purple-800' :
                      'bg-gray-200 text-gray-800'
                    }`}>
                      {sector.demand}
                    </span>
                  </div>
                  <p className="text-gray-700">{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Complete 12th Grade (6 months)</h3>
                  <p className="text-gray-600">Focus on Science subjects, especially Biology and Chemistry</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Enroll in Paramedic Course (6 months - 2 years)</h3>
                  <p className="text-gray-600">Choose certificate, diploma, or degree program based on career goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Complete Clinical Training (3-6 months)</h3>
                  <p className="text-gray-600">Hands-on experience in hospitals and ambulance services</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Obtain Certification & Licensing (1-2 months)</h3>
                  <p className="text-gray-600">Pass national/state certification exams and get licensed to practice</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Start Career & Continuous Learning</h3>
                  <p className="text-gray-600">Begin employment and pursue ongoing education and specializations</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Organizations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Professional Organizations</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-200">
                    <FaStethoscope className="text-red-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Indian Association of Emergency Medicine</div>
                      <div className="text-sm text-gray-600">Professional development and standards</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                    <FaAmbulance className="text-rose-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">National Ambulance Service</div>
                      <div className="text-sm text-gray-600">Employment opportunities and training</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-lg border border-pink-200">
                    <FaFirstAid className="text-pink-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Red Cross India</div>
                      <div className="text-sm text-gray-600">First aid training and certification</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Success Tips</h3>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-6 border border-red-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain physical fitness and mental resilience</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest medical protocols</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop excellent communication skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Pursue specialized certifications</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with healthcare professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-rose-700 transition-colors shadow-lg">
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