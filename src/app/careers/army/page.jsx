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
  FaUserTie
} from 'react-icons/fa';

export default function ArmyOfficerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree from recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "19-25 years (varies by entry scheme)" },
    { icon: FaRunning, title: "Physical Fitness", detail: "Meet prescribed physical and medical standards" }
  ];

  const entrySchemes = [
    { 
      scheme: "National Defence Academy (NDA)", 
      duration: "3 years + 1 year IMA", 
      qualification: "12th pass (any stream)",
      age: "16.5-19.5 years",
      description: "Joint training with Navy and Air Force"
    },
    { 
      scheme: "Combined Defence Services (CDS)", 
      duration: "1.5 years at IMA", 
      qualification: "Bachelor's degree",
      age: "19-25 years",
      description: "Direct entry for graduates"
    },
    { 
      scheme: "Technical Graduate Course (TGC)", 
      duration: "1 year at IMA", 
      qualification: "Engineering degree",
      age: "20-27 years",
      description: "For technical specialists"
    },
    { 
      scheme: "University Entry Scheme (UES)", 
      duration: "1 year at IMA", 
      qualification: "Final year graduation",
      age: "19-25 years",
      description: "Entry during final year of graduation"
    }
  ];

  const careerHierarchy = [
    { rank: "Lieutenant", years: "0-2 years", salary: "₹56,100 - ₹1,77,500" },
    { rank: "Captain", years: "2-6 years", salary: "₹61,300 - ₹1,93,900" },
    { rank: "Major", years: "6-13 years", salary: "₹69,400 - ₹2,07,200" },
    { rank: "Lieutenant Colonel", years: "13-18 years", salary: "₹1,21,200 - ₹2,12,400" },
    { rank: "Colonel", years: "18-26 years", salary: "₹1,30,600 - ₹2,15,900" },
    { rank: "Brigadier", years: "26+ years", salary: "₹1,39,600 - ₹2,17,600" },
    { rank: "Major General", years: "28+ years", salary: "₹1,44,200 - ₹2,18,200" },
    { rank: "Lieutenant General", years: "30+ years", salary: "₹1,82,200 - ₹2,24,100" }
  ];

  const physicalStandards = [
    "Height: 157.5 cm minimum (relaxation for certain regions)",
    "Weight: Proportionate to height and age",
    "Chest: 81 cm minimum (5 cm expansion)",
    "Vision: 6/6 and 6/9 (correctable to 6/6)",
    "Color vision: Normal (CP-III minimum)",
    "Hearing: Normal hearing ability",
    "No major physical deformities",
    "Dental fitness as per medical standards"
  ];

  const trainingAcademies = [
    { academy: "Indian Military Academy (IMA)", location: "Dehradun", type: "Gentlemen Cadets", duration: "1.5 years" },
    { academy: "Officers Training Academy (OTA)", location: "Chennai", type: "Short Service Commission", duration: "49 weeks" },
    { academy: "Officers Training Academy (OTA)", location: "Gaya", type: "Women Officers", duration: "49 weeks" },
    { academy: "National Defence Academy (NDA)", location: "Pune", type: "Joint Services", duration: "3 years" },
    { academy: "Indian Naval Academy (INA)", location: "Ezhimala", type: "Naval Wing (NDA)", duration: "4 years" },
    { academy: "Air Force Academy (AFA)", location: "Hyderabad", type: "Flying Branch (NDA)", duration: "3.5 years" }
  ];

  const armyBranches = [
    "Infantry",
    "Armoured Corps", 
    "Artillery",
    "Engineers",
    "Signals",
    "Army Service Corps",
    "Army Medical Corps",
    "Army Ordnance Corps"
  ];

  const specialForces = [
    { unit: "Para Special Forces", role: "Counter-terrorism and special operations" },
    { unit: "Ghatak Force", role: "Commando platoons in infantry battalions" },
    { unit: "Marcos (Navy)", role: "Marine commandos" },
    { unit: "Garud (Air Force)", role: "Special forces of Indian Air Force" },
    { unit: "National Security Guard", role: "Counter-terrorism force" },
    { unit: "Special Frontier Force", role: "Special operations in border areas" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming an 
              <span className="text-green-300"> Army Officer</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining the Indian Army and serving the nation with courage, honor, and dedication
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Army Officer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Army Officer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An Army Officer is a commissioned leader in the Indian Army who commands troops, makes strategic decisions, and ensures the security and defense of the nation. They are responsible for maintaining discipline, training soldiers, and leading from the front in all situations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Army Officers serve in various arms and services, from combat roles in Infantry and Armoured Corps to technical roles in Engineers and Signals, each contributing to the overall defense capability of the nation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Leading and commanding troops
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Strategic planning and execution
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Training and development of soldiers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Border security and defense operations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Disaster relief and humanitarian missions
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Marital Status</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Male Candidates:</span> Unmarried at the time of application
                </div>
                <div className="text-black">
                  <span className="font-medium">Female Candidates:</span> Unmarried, widowed, or divorced (no children)
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
              <h2 className="text-3xl font-bold text-gray-800">Physical & Medical Standards</h2>
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

        {/* Army Branches */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Army Arms & Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {armyBranches.map((branch, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{branch}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Training Academies</h2>
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Pay Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'}`}>
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
                      {index === 0 && <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Command</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Forces */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStar className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Elite Special Forces Units</h2>
            </div>
            <div className="space-y-4">
              {specialForces.map((unit, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{unit.unit}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{unit.role}</p>
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
                  <h3 className="text-lg font-semibold text-gray-800">Written Examination</h3>
                  <p className="text-gray-600">UPSC conducts NDA/CDS examinations twice a year</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">SSB Interview (5 Days)</h3>
                  <p className="text-gray-600">Psychological tests, group tasks, and personal interview</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Medical Examination</h3>
                  <p className="text-gray-600">Comprehensive medical and physical fitness tests</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Merit List & Allocation</h3>
                  <p className="text-gray-600">Final selection based on combined scores</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Training Commencement</h3>
                  <p className="text-gray-600">Join respective training academies</p>
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
                  <a href="https://indianarmy.nic.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Indian Army Official</div>
                      <div className="text-sm text-gray-600">Recruitment notifications and army information</div>
                    </div>
                  </a>
                  <a href="https://upsc.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">UPSC Official</div>
                      <div className="text-sm text-gray-600">NDA and CDS examination details</div>
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
                      <span className="text-gray-700">Maintain excellent physical fitness daily</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong leadership and communication skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice group discussions and teamwork</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with current affairs and defense news</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Focus on mathematics and general knowledge</span>
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