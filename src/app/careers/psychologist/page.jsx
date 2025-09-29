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
  FaBrain,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaUserMd,
  FaLightbulb,
  FaComments,
  FaHeart
} from 'react-icons/fa';

export default function PsychologistPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree in Psychology or related field" },
    { icon: FaUserMd, title: "Specialization", detail: "Master's/PhD in Psychology (Clinical/Counseling)" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No specific age limit (varies by institution)" },
    { icon: FaBrain, title: "Skills", detail: "Strong analytical, communication, and empathy skills" }
  ];

  const educationStructure = [
    { 
      level: "Bachelor's Degree (BA/BSc Psychology)", 
      duration: "3-4 years", 
      subjects: "General Psychology, Research Methods, Statistics",
      qualification: "12th Pass (any stream)",
      scope: "Basic counseling, research assistant roles"
    },
    { 
      level: "Master's Degree (MA/MSc Psychology)", 
      duration: "2 years", 
      subjects: "Clinical/Counseling Psychology, Psychotherapy",
      qualification: "Bachelor's in Psychology",
      scope: "Licensed psychologist, private practice"
    },
    { 
      level: "Doctoral Degree (PhD/PsyD)", 
      duration: "3-5 years", 
      subjects: "Advanced research, specialized therapy techniques",
      qualification: "Master's in Psychology",
      scope: "Professor, researcher, senior clinical roles"
    }
  ];

  const careerHierarchy = [
    { rank: "Psychology Assistant/Trainee", years: "Entry Level", salary: "₹20,000 - ₹35,000" },
    { rank: "Licensed Psychologist", years: "2-4 years", salary: "₹35,000 - ₹60,000" },
    { rank: "Senior Psychologist", years: "5-8 years", salary: "₹50,000 - ₹80,000" },
    { rank: "Principal Psychologist", years: "8-12 years", salary: "₹70,000 - ₹1,20,000" },
    { rank: "Chief Psychologist/Director", years: "12-15 years", salary: "₹1,00,000 - ₹2,00,000" },
    { rank: "Private Practice/Consultant", years: "15+ years", salary: "₹1,50,000 - ₹5,00,000+" }
  ];

  const specializations = [
    "Clinical Psychology",
    "Counseling Psychology", 
    "Educational Psychology",
    "Organizational Psychology",
    "Neuropsychology",
    "Child & Adolescent Psychology",
    "Health Psychology",
    "Forensic Psychology"
  ];

  const coreSubjects = [
    { subject: "Abnormal Psychology", focus: "Mental health disorders and their treatment" },
    { subject: "Cognitive Psychology", focus: "Mental processes, memory, and learning" },
    { subject: "Social Psychology", focus: "Human behavior in social contexts" },
    { subject: "Research Methods", focus: "Statistical analysis and experimental design" },
    { subject: "Psychotherapy Techniques", focus: "CBT, psychodynamic, humanistic approaches" },
    { subject: "Psychological Assessment", focus: "Testing and evaluation methods" }
  ];

  const employmentSectors = [
    { sector: "Hospitals & Healthcare", description: "Mental health departments, rehabilitation centers", demand: "Very High" },
    { sector: "Educational Institutions", description: "Schools, colleges, special needs centers", demand: "High" },
    { sector: "Corporate Sector", description: "HR departments, employee wellness programs", demand: "Growing" },
    { sector: "Private Practice", description: "Individual/group therapy, consultation services", demand: "High" },
    { sector: "Government Services", description: "Mental health programs, social welfare", demand: "Moderate" },
    { sector: "Research & Academia", description: "Universities, research institutions, NGOs", demand: "Moderate" },
    { sector: "Digital Health", description: "Online therapy platforms, mental health apps", demand: "Emerging" },
    { sector: "Sports Psychology", description: "Athletic performance, sports organizations", demand: "Niche" }
  ];

  const licensingRequirements = [
    { requirement: "Educational Qualification", details: "Master's degree in Psychology from recognized university", mandatory: true },
    { requirement: "Supervised Practice", details: "1-2 years of supervised clinical experience", mandatory: true },
    { requirement: "RCI Registration", details: "Registration with Rehabilitation Council of India", mandatory: true },
    { requirement: "State License", details: "State-specific licensing (varies by state)", mandatory: true },
    { requirement: "Continuing Education", details: "Regular training and skill updates", mandatory: false },
    { requirement: "Ethics Training", details: "Professional ethics and code of conduct", mandatory: true }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBrain className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-purple-300"> Psychologist</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the rewarding field of psychology and making a meaningful impact on mental health and human behavior
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Psychology Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Psychology?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Psychology is the scientific study of mind and behavior. Psychologists work to understand how people think, feel, and behave, both individually and in groups. They apply this knowledge to help people overcome challenges, improve their mental health, and reach their full potential.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a psychologist, you'll work with diverse populations addressing various mental health concerns, conducting research, providing therapy, and contributing to the understanding of human behavior and mental processes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Individual and group therapy sessions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Psychological assessment and diagnosis
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Research and data analysis
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Treatment planning and case management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Crisis intervention and support
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
              <FaClipboardCheck className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Personal Qualities</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className='text-black'>
                  <span className="font-medium">Empathy:</span> Understanding others' emotions and perspectives
                </div>
                <div className='text-black'>
                  <span className="font-medium">Communication:</span> Excellent verbal and written skills
                </div>
                <div className='text-black'>
                  <span className="font-medium">Patience:</span> Ability to work with challenging situations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Educational Pathway</h2>
            </div>
            <div className="space-y-6">
              {educationStructure.map((course, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{course.level}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">{course.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{course.subjects}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">{course.qualification}</span>
                    </div>
                    <div>
                      <span className="text-sm text-indigo-700 font-medium">{course.scope}</span>
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
              <FaLightbulb className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Psychology Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specializations.map((specialization, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-yellow-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{specialization}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Subjects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Academic Subjects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {coreSubjects.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{item.subject}</h3>
                  <p className="text-gray-700">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Licensing Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Professional Licensing & Certification</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To practice as a licensed psychologist in India, you must meet specific educational, training, and certification requirements set by regulatory bodies.
            </p>
            <div className="space-y-4">
              {licensingRequirements.map((req, index) => (
                <div key={index} className={`rounded-xl p-6 border ${req.mandatory ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-100' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{req.requirement}</h3>
                      <p className="text-gray-700">{req.details}</p>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${req.mandatory ? 'bg-red-200 text-red-800' : 'bg-blue-200 text-blue-800'}`}>
                        {req.mandatory ? 'Mandatory' : 'Recommended'}
                      </span>
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
              <FaChartLine className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200'}`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{position.years}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{position.salary}</span>
                    </div>
                    <div>
                      {index === 0 && <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Peak Earning</span>}
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
              <FaMapMarkerAlt className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Employment Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {employmentSectors.map((sector, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-800">{sector.sector}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      sector.demand === 'Very High' ? 'bg-green-200 text-green-800' :
                      sector.demand === 'High' ? 'bg-blue-200 text-blue-800' :
                      sector.demand === 'Growing' ? 'bg-yellow-200 text-yellow-800' :
                      sector.demand === 'Emerging' ? 'bg-purple-200 text-purple-800' :
                      sector.demand === 'Niche' ? 'bg-pink-200 text-pink-800' :
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
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Complete Bachelor's in Psychology (3-4 years)</h3>
                  <p className="text-gray-600">Foundation in psychological theories, research methods, and statistics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Pursue Master's Degree (2 years)</h3>
                  <p className="text-gray-600">Specialize in clinical, counseling, or other psychology areas</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Complete Supervised Practice (1-2 years)</h3>
                  <p className="text-gray-600">Gain hands-on clinical experience under supervision</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Obtain Professional Licensing</h3>
                  <p className="text-gray-600">Register with RCI and obtain state licensing to practice</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Begin Professional Practice & Specialization</h3>
                  <p className="text-gray-600">Start career and pursue advanced certifications or doctoral studies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Professional Resources & Organizations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Professional Bodies</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                    <FaBrain className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Indian Association of Clinical Psychology</div>
                      <div className="text-sm text-gray-600">Professional development and standards</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-200">
                    <FaUserMd className="text-indigo-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Rehabilitation Council of India (RCI)</div>
                      <div className="text-sm text-gray-600">Licensing and certification body</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <FaComments className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Indian Association of Counseling</div>
                      <div className="text-sm text-gray-600">Counseling psychology resources</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Success Tips</h3>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong listening and communication skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Gain diverse clinical experience early in career</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest research and techniques</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build professional network through conferences</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Consider specialization for better opportunities</span>
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