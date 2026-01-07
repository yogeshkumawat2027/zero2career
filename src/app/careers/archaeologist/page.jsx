import Link from 'next/link';
import React from 'react';
import { 
  FaSearchPlus, 
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
  FaUniversity,
  FaEye,
  FaHammer,
  FaUserTie,
  FaGlobe,
  FaTree,
  FaCamera,
  FaRuler,
  FaFlask,
  FaCrown,
  FaLeaf
} from 'react-icons/fa';

export default function ArchaeologistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship preferred for ASI jobs" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in History/Archaeology/Anthropology" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "21-30 years for ASI (relaxable for reserved categories)" },
    { icon: FaEye, title: "Skills", detail: "Analytical thinking and attention to detail" }
  ];

  const degreeTypes = [
    { 
      degree: "Bachelor of Arts (BA) - History/Archaeology", 
      duration: "3 years", 
      requirement: "12th in any stream",
      specialization: "Ancient History, Art History, Cultural Studies",
      description: "Foundation degree for archaeology career"
    },
    { 
      degree: "Master of Arts (MA) - Archaeology", 
      duration: "2 years", 
      requirement: "BA in relevant field",
      specialization: "Prehistoric, Proto-historic, Historical Archaeology",
      description: "Specialized knowledge in archaeological methods"
    },
    { 
      degree: "Master of Philosophy (M.Phil) - Archaeology", 
      duration: "1-2 years", 
      requirement: "MA in Archaeology",
      specialization: "Research methodology and dissertation",
      description: "Advanced research training"
    },
    { 
      degree: "Doctor of Philosophy (Ph.D) - Archaeology", 
      duration: "3-5 years", 
      requirement: "MA/M.Phil in Archaeology",
      specialization: "Original research and thesis",
      description: "Highest academic qualification in archaeology"
    }
  ];

  const careerHierarchy = [
    { rank: "Archaeological Assistant", years: "0-3 years", salary: "₹2.5-4 lakhs/annum", level: "Entry Level" },
    { rank: "Junior Archaeological Officer", years: "3-8 years", salary: "₹4-7 lakhs/annum", level: "Junior Level" },
    { rank: "Archaeological Officer", years: "8-15 years", salary: "₹7-12 lakhs/annum", level: "Mid Level" },
    { rank: "Senior Archaeological Officer", years: "15-20 years", salary: "₹12-18 lakhs/annum", level: "Senior Level" },
    { rank: "Deputy Superintending Archaeologist", years: "20-25 years", salary: "₹18-25 lakhs/annum", level: "Management" },
    { rank: "Superintending Archaeologist", years: "25+ years", salary: "₹25-35 lakhs/annum", level: "Senior Management" }
  ];

  const skillsRequired = [
    "Field excavation techniques",
    "Artifact analysis and documentation", 
    "Historical research methods",
    "Photography and mapping",
    "Report writing and documentation",
    "Dating techniques and chronology",
    "Conservation principles",
    "GIS and digital mapping"
  ];

  const topInstitutes = [
    { institute: "Archaeological Survey of India (ASI)", location: "New Delhi", type: "Government", specialization: "All periods" },
    { institute: "Jawaharlal Nehru University (JNU)", location: "New Delhi", type: "Central University", specialization: "Ancient History & Archaeology" },
    { institute: "Banaras Hindu University (BHU)", location: "Varanasi", type: "Central University", specialization: "Ancient Indian History & Archaeology" },
    { institute: "University of Delhi", location: "Delhi", type: "Central University", specialization: "History & Archaeology" },
    { institute: "Deccan College", location: "Pune", type: "Deemed University", specialization: "Archaeology & Ancient History" },
    { institute: "Tamil University", location: "Thanjavur", type: "State University", specialization: "Tamil Studies & Archaeology" }
  ];

  const subjectAreas = [
    "Ancient Indian History",
    "Archaeological Methods",
    "Prehistoric Archaeology", 
    "Art & Architecture History",
    "Numismatics & Epigraphy",
    "Museum Studies",
    "Conservation & Preservation",
    "Field Archaeology"
  ];

  const archaeologyFields = [
    { field: "Prehistoric Archaeology", responsibility: "Study of stone age cultures and early human settlements" },
    { field: "Historical Archaeology", responsibility: "Research on documented historical periods and civilizations" },
    { field: "Maritime Archaeology", responsibility: "Underwater excavations and coastal archaeological sites" },
    { field: "Environmental Archaeology", responsibility: "Study of past environments and human-environment interaction" },
    { field: "Museum Curator", responsibility: "Managing archaeological collections and public exhibitions" },
    { field: "Archaeological Consultant", responsibility: "Heritage impact assessment for development projects" },
    { field: "Academic Researcher", responsibility: "Teaching and research in universities and institutions" },
    { field: "Heritage Manager", responsibility: "Conservation and management of archaeological sites" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaSearchPlus className="mx-auto text-6xl mb-6 text-amber-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming an
              <span className="text-amber-300"> Archaeologist</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to uncovering the past and preserving India's rich cultural heritage
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Archaeologist Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-amber-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Archaeologist?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An Archaeologist is a professional who studies human history and prehistory through the excavation and analysis of artifacts, structures, and other physical remains. They work to understand past civilizations, cultures, and human behavior.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In India, archaeologists play a crucial role in preserving and interpreting the country's rich cultural heritage, working with organizations like the Archaeological Survey of India (ASI) and various research institutions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Conducting excavations and field surveys
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Analyzing and cataloguing artifacts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Dating and interpreting archaeological finds
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Writing research reports and publications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Heritage conservation and site management
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Educational Pathways</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Academic Route:</span> BA → MA → Ph.D in Archaeology/History
                </div>
                <div className="text-black">
                  <span className="font-medium">Professional Route:</span> Degree → ASI exam → Field experience
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Degree Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Educational Qualifications & Degrees</h2>
            </div>
            <div className="space-y-6">
              {degreeTypes.map((degree, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{degree.degree}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{degree.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{degree.requirement}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{degree.specialization}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{degree.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHammer className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Techniques</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillsRequired.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{skill}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Core Study Areas</h2>
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

        {/* Top Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUniversity className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Institutes for Archaeology in India</h2>
            </div>
            <div className="space-y-4">
              {topInstitutes.map((institute, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{institute.institute}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        institute.type === 'Government' ? 'bg-green-200 text-green-800' : 
                        institute.type === 'Central University' ? 'bg-blue-200 text-blue-800' :
                        'bg-purple-200 text-purple-800'
                      }`}>
                        {institute.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{institute.specialization}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Archaeology Career Fields */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLeaf className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Paths in Archaeology</h2>
            </div>
            <div className="space-y-4">
              {archaeologyFields.map((field, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaGlobe className="text-blue-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{field.field}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{field.responsibility}</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure (ASI)</h2>
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
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        position.level === 'Entry Level' ? 'bg-green-200 text-green-800' :
                        position.level === 'Senior Management' ? 'bg-purple-200 text-purple-800' :
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

        {/* Selection Process Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">ASI Recruitment Process</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Educational Qualification</h3>
                  <p className="text-gray-600">Complete MA in Archaeology/Ancient History from recognized university</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Written Examination</h3>
                  <p className="text-gray-600">Clear UPSC/SSC examination for Archaeological positions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Interview Process</h3>
                  <p className="text-gray-600">Personal interview assessing subject knowledge and field experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Document Verification</h3>
                  <p className="text-gray-600">Verification of educational certificates and experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Appointment & Training</h3>
                  <p className="text-gray-600">Final appointment and on-job training in archaeological methods</p>
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
                  <a href="https://asi.nic.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-amber-600 mr-3 group-hover:text-amber-800" />
                    <div>
                      <div className="font-medium text-gray-800">Archaeological Survey of India</div>
                      <div className="text-sm text-gray-600">Official portal for ASI recruitment and information</div>
                    </div>
                  </a>
                  <a href="https://www.jnu.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Jawaharlal Nehru University</div>
                      <div className="text-sm text-gray-600">Premier center for archaeological studies</div>
                    </div>
                  </a>
                  <a href="https://upsc.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">UPSC Official Website</div>
                      <div className="text-sm text-gray-600">Central recruitment for archaeological positions</div>
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
                      <span className="text-gray-700">Gain field experience through internships and excavations</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop photography and documentation skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Learn GIS and digital mapping technologies</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest archaeological discoveries</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build strong research and writing abilities</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with archaeological community and societies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3bg-blue-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-colors shadow-lg">
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