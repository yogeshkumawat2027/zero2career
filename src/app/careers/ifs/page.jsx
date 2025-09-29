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
  FaTree,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaLeaf,
  FaGlobe,
  FaSeedling
} from 'react-icons/fa';

export default function IFSPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree (Science preferred)" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "21-32 years (relaxation for reserved categories)" },
    { icon: FaLeaf, title: "Physical Standards", detail: "Meet prescribed physical and medical requirements" }
  ];

  const examStructure = [
    { 
      phase: "Preliminary Examination", 
      duration: "1 Day", 
      papers: "2 Papers (General Studies I & II)",
      marks: "400 Marks",
      nature: "Objective Type (MCQ)"
    },
    { 
      phase: "Main Examination", 
      duration: "5 Days", 
      papers: "9 Papers",
      marks: "1750 Marks",
      nature: "Descriptive Type"
    },
    { 
      phase: "Personality Test", 
      duration: "30-45 minutes", 
      papers: "Interview",
      marks: "275 Marks",
      nature: "Face-to-face interaction"
    }
  ];

  const careerHierarchy = [
    { rank: "Assistant Conservator of Forests (ACF)", years: "Entry Level", salary: "₹56,100 - ₹1,77,500" },
    { rank: "Divisional Forest Officer (DFO)", years: "4-8 years", salary: "₹78,800 - ₹2,09,200" },
    { rank: "Conservator of Forests (CF)", years: "13-16 years", salary: "₹1,44,200 - ₹2,18,200" },
    { rank: "Chief Conservator of Forests (CCF)", years: "18-25 years", salary: "₹1,82,200 - ₹2,24,100" },
    { rank: "Additional Principal Chief Conservator", years: "25+ years", salary: "₹2,05,400 - ₹2,24,400" },
    { rank: "Principal Chief Conservator of Forests", years: "30+ years", salary: "₹2,25,000 (Fixed)" }
  ];

  const keySubjects = [
    "Indian Polity & Governance",
    "Indian & World History", 
    "Geography",
    "General Science & Technology",
    "Economic & Social Development",
    "Environmental Ecology",
    "Ethics & Integrity",
    "Optional Subject (Forestry/Botany/Zoology/Chemistry)"
  ];

  const trainingModules = [
    { module: "Foundation Course", duration: "15 weeks", focus: "Basic forestry principles, ecology, and administration" },
    { module: "Professional Phase I", duration: "44 weeks", focus: "Forest management, wildlife conservation, silviculture" },
    { module: "Bharat Darshan", duration: "3 weeks", focus: "Understanding India's forests and biodiversity" },
    { module: "Professional Phase II", duration: "17 weeks", focus: "Specialization in forest conservation and field practices" },
    { module: "District Training", duration: "1 year", focus: "Hands-on forest management under senior officers" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaTree className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming an 
              <span className="text-green-300"> IFS Officer</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the prestigious Indian Forest Service and protecting India's natural heritage for future generations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is IFS Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is the Indian Forest Service (IFS)?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Indian Forest Service (IFS) is one of the three prestigious All India Services, established in 1966. IFS officers are responsible for managing India's vast forest resources, wildlife conservation, and environmental protection across the nation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  IFS officers serve as guardians of India's biodiversity, managing national parks, wildlife sanctuaries, forest reserves, and implementing environmental policies to ensure sustainable development and conservation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Forest conservation and management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Wildlife protection and anti-poaching
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Environmental policy implementation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Biodiversity conservation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Climate change mitigation
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
                <div className='text-black'>
                  <span className="font-medium">OBC:</span> 3 years
                </div>
                <div className='text-black'>
                  <span className="font-medium">SC/ST:</span> 5 years
                </div>
                <div className='text-black'>
                  <span className="font-medium">PwD:</span> 10 years
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UPSC CSE Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">UPSC Civil Services Examination Structure</h2>
            </div>
            <div className="space-y-6">
              {examStructure.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-emerald-600 mr-2" />
                      <span className="text-gray-700">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-emerald-700">{exam.marks}</span>
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
              <FaGraduationCap className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keySubjects.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg p-4 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training at IFA */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training at Indira Gandhi National Forest Academy, Dehradun</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Selected IFS probationers undergo comprehensive training at the Indira Gandhi National Forest Academy (IGNFA) in Dehradun. The training spans approximately 2 years and covers both theoretical knowledge and practical field experience in forest management.
            </p>
            <div className="space-y-4">
              {trainingModules.map((module, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{module.module}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-green-600 mr-2" />
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
              <FaChartLine className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200'}`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-emerald-600 mr-2" />
                      <span className="text-gray-700">{position.years}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{position.salary}</span>
                    </div>
                    <div>
                      {index === 0 && <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">Apex Position</span>}
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
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">UPSC Notification (February)</h3>
                  <p className="text-gray-600">Application process opens with detailed notification</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Preliminary Examination (June)</h3>
                  <p className="text-gray-600">Screening test to shortlist candidates for Mains</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Main Examination (September-October)</h3>
                  <p className="text-gray-600">Comprehensive written examination over 5 days</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Personality Test (March-April)</h3>
                  <p className="text-gray-600">Interview round to assess personality and environmental awareness</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Final Result & Training (May onwards)</h3>
                  <p className="text-gray-600">Merit list publication and commencement of forest service training</p>
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
                  <a href="https://upsc.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">UPSC Official Website</div>
                      <div className="text-sm text-gray-600">Notifications, syllabus, and exam updates</div>
                    </div>
                  </a>
                  <a href="https://ignfa.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-lg border border-teal-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-teal-600 mr-3 group-hover:text-teal-800" />
                    <div>
                      <div className="font-medium text-gray-800">IGNFA Dehradun</div>
                      <div className="text-sm text-gray-600">IFS training academy information</div>
                    </div>
                  </a>
                  <a href="https://moef.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-emerald-600 mr-3 group-hover:text-emerald-800" />
                    <div>
                      <div className="font-medium text-gray-800">Ministry of Environment</div>
                      <div className="text-sm text-gray-600">Forest and climate policies</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Preparation Tips</h3>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Start preparation 12-18 months in advance</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Focus on environmental science and ecology</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with forest policies and climate change</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice answer writing regularly</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Take mock tests consistently</span>
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