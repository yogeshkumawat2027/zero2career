import Link from 'next/link';
import React from 'react';
import { 
  FaPlane, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaMedal, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaRunning,
  FaEye,
  FaHeart,
  FaStar,
  FaUserTie,
  FaGlobe,
  FaLanguage,
  FaSmile,
  FaHandsHelping,
  FaFirstAid
} from 'react-icons/fa';

export default function AirHostessPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship (for Indian airlines)" },
    { icon: FaGraduationCap, title: "Education", detail: "10+2 minimum (Graduate preferred)" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "18-27 years (varies by airline)" },
    { icon: FaRunning, title: "Physical Fitness", detail: "Good health and swimming ability" }
  ];

  const entrySchemes = [
    { 
      scheme: "Direct Recruitment", 
      duration: "3-6 months training", 
      qualification: "10+2 or Graduate",
      age: "18-27 years",
      description: "Direct hiring by airlines after selection process"
    },
    { 
      scheme: "Aviation Institute", 
      duration: "6-12 months course", 
      qualification: "10+2 pass",
      age: "17-25 years",
      description: "Professional training from aviation academies"
    },
    { 
      scheme: "Hotel Management Route", 
      duration: "Degree + airline training", 
      qualification: "Hotel Management degree",
      age: "21-27 years",
      description: "Hospitality background with airline specialization"
    },
    { 
      scheme: "International Airlines", 
      duration: "Intensive 2-4 months", 
      qualification: "Graduate + Language skills",
      age: "21-30 years",
      description: "Global carriers with international exposure"
    }
  ];

  const careerHierarchy = [
    { rank: "Trainee Cabin Crew", years: "0-6 months", salary: "₹25,000 - ₹35,000" },
    { rank: "Junior Flight Attendant", years: "6 months - 2 years", salary: "₹35,000 - ₹50,000" },
    { rank: "Senior Flight Attendant", years: "2-5 years", salary: "₹50,000 - ₹75,000" },
    { rank: "Lead Flight Attendant", years: "5-8 years", salary: "₹75,000 - ₹1,00,000" },
    { rank: "Chief Flight Attendant", years: "8-12 years", salary: "₹1,00,000 - ₹1,50,000" },
    { rank: "Cabin Service Manager", years: "12+ years", salary: "₹1,50,000 - ₹2,00,000" },
    { rank: "In-flight Service Director", years: "15+ years", salary: "₹2,00,000 - ₹3,00,000" },
    { rank: "Ground Training Manager", years: "10+ years", salary: "₹1,80,000 - ₹2,50,000" }
  ];

  const physicalStandards = [
    "Height: 155-185 cm (Female), 170-185 cm (Male)",
    "Weight: Proportionate to height (BMI 18-25)",
    "Vision: 6/6 or correctable to 6/6",
    "Clear complexion without visible marks",
    "Good dental condition and oral hygiene",
    "Ability to swim 25 meters unaided",
    "No fear of heights or enclosed spaces",
    "Hearing ability within normal limits"
  ];

  const trainingAcademies = [
    { academy: "Air India Training Centre", location: "Mumbai", type: "Government Airline", duration: "3-4 months" },
    { academy: "IndiGo Training Centre", location: "Gurugram", type: "Private Airline", duration: "2-3 months" },
    { academy: "SpiceJet Training Academy", location: "Delhi", type: "Budget Airline", duration: "45-60 days" },
    { academy: "Frankfinn Institute", location: "Multiple Cities", type: "Private Institute", duration: "6-12 months" },
    { academy: "Aptech Aviation Academy", location: "Pan India", type: "Private Institute", duration: "6-8 months" },
    { academy: "Universal Aviation Academy", location: "Chennai/Delhi", type: "Private Institute", duration: "4-6 months" }
  ];

  const airlineCategories = [
    "Full Service Carriers (Air India, Vistara)",
    "Low Cost Carriers (IndiGo, SpiceJet)", 
    "Regional Airlines (Alliance Air, TruJet)",
    "International Airlines (Emirates, Qatar)",
    "Charter Airlines (Club One Air)",
    "Cargo Airlines (Blue Dart Aviation)",
    "Government Airlines (Air India Express)",
    "Private Business Jets"
  ];

  const skillsRequired = [
    { skill: "Communication Skills", role: "Interact with diverse passengers professionally" },
    { skill: "Language Proficiency", role: "English mandatory, additional languages preferred" },
    { skill: "First Aid Training", role: "Handle medical emergencies during flights" },
    { skill: "Customer Service", role: "Ensure passenger comfort and satisfaction" },
    { skill: "Cultural Sensitivity", role: "Serve international passengers respectfully" },
    { skill: "Emergency Response", role: "Manage crisis situations and evacuations" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-sky-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPlane className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming an 
              <span className="text-blue-300"> Air Hostess</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to a glamorous career in aviation, serving passengers while exploring the world
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Air Hostess Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Air Hostess?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An Air Hostess, also known as a Flight Attendant or Cabin Crew, is a trained aviation professional responsible for ensuring passenger safety, comfort, and service during flights. They are the face of the airline and play a crucial role in maintaining the airline's reputation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Air Hostesses work on domestic and international flights, serving passengers from different cultures and backgrounds while maintaining the highest standards of safety and hospitality in the aviation industry.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Ensuring passenger safety and security
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Conducting safety demonstrations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Serving meals and beverages
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Handling emergency situations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Providing excellent customer service
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
              <FaClipboardCheck className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Requirements</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Marital Status:</span> Single/Married (varies by airline)
                </div>
                <div className="text-black">
                  <span className="font-medium">Language:</span> Fluent English + regional language
                </div>
                <div className="text-black">
                  <span className="font-medium">Passport:</span> Valid passport for international routes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entry Schemes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entry Schemes & Training</h2>
            </div>
            <div className="space-y-6">
              {entrySchemes.map((scheme, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{scheme.scheme}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{scheme.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{scheme.qualification}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{scheme.age}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{scheme.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Physical Standards */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHeart className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physical & Appearance Standards</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {physicalStandards.map((standard, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{standard}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Airline Categories */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGlobe className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Airline Categories</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {airlineCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Academies */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Institutes & Airlines</h2>
            </div>
            <div className="space-y-4">
              {trainingAcademies.map((academy, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{academy.academy}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{academy.location}</span>
                    </div>
                    <div>
                      <span className="bg-teal-200 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                        {academy.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{academy.duration}</span>
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
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-blue-50 to-sky-50 border-blue-200' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="flex items-center">
                      <FaMedal className="text-yellow-600 mr-3" />
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
                      {index === 0 && <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Management</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStar className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Training</h2>
            </div>
            <div className="space-y-4">
              {skillsRequired.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{skill.skill}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{skill.role}</p>
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
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Online Application</h3>
                  <p className="text-gray-600">Submit application through airline websites or job portals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Initial Screening</h3>
                  <p className="text-gray-600">Document verification and basic eligibility check</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Group Discussion & Interview</h3>
                  <p className="text-gray-600">Communication skills assessment and personality evaluation</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Medical Examination</h3>
                  <p className="text-gray-600">Comprehensive health check and fitness assessment</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Final Selection & Training</h3>
                  <p className="text-gray-600">Join airline training program and begin career</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Career Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Major Airlines Careers</h3>
                <div className="space-y-3">
                  <a href="https://careers.airindia.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Air India Careers</div>
                      <div className="text-sm text-gray-600">National carrier job opportunities</div>
                    </div>
                  </a>
                  <a href="https://careers.goindigo.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-purple-600 mr-3 group-hover:text-purple-800" />
                    <div>
                      <div className="font-medium text-gray-800">IndiGo Careers</div>
                      <div className="text-sm text-gray-600">Leading budget airline opportunities</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Master multiple languages for international routes</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Maintain excellent grooming and presentation</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong customer service skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with aviation regulations</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build cultural awareness and sensitivity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-sky-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            <Link href="/careers">Back to Careers</Link>
          </button>
        </div>
      </div>
    </main>
  );
}