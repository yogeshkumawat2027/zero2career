import React from 'react'
import { FaPlane, FaAnchor, FaShip, FaHelicopter, FaShieldAlt, FaWater, FaRadar, FaTachometerAlt, FaGraduationCap, FaUsers, FaMedal, FaFlag, FaRocket, FaLightbulb, FaTrophy } from 'react-icons/fa'
import { MdFlight, MdSecurity, MdNavigation, MdRadar, MdFlightTakeoff, MdSchool, MdWork, MdTrendingUp, MdVerifiedUser, MdAssignment } from 'react-icons/md'

export default function IndianNavyPilotCareer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <FaPlane className="text-6xl" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Indian Navy Pilot
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Soar Above the Seas, Protect the Nation's Maritime Frontiers
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Naval Aviation</span>
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Maritime Operations</span>
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Aircraft Carrier</span>
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Defense Flying</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Indian Navy Pilot?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-lg transition-all duration-300">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Honor & Pride</h3>
              <p className="text-gray-600">Serve the nation with honor and protect maritime sovereignty</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-lg transition-all duration-300">
              <FaPlane className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Elite Training</h3>
              <p className="text-gray-600">World-class aviation training and advanced aircraft systems</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-lg transition-all duration-300">
              <FaWater className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Maritime Focus</h3>
              <p className="text-gray-600">Specialized naval aviation operations over sea and coastal areas</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-100 hover:shadow-lg transition-all duration-300">
              <FaMedal className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Career Security</h3>
              <p className="text-gray-600">Structured military career with excellent benefits and pension</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Specializations */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Aviation Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <MdFlight className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Fighter Operations</h3>
              <p className="text-gray-600 mb-4">Fly advanced fighter aircraft for air defense and maritime strike missions</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• MiG-29K Operations</li>
                <li>• Aircraft Carrier Landings</li>
                <li>• Air-to-Air Combat</li>
                <li>• Maritime Strike</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <FaHelicopter className="text-3xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Helicopter Pilot</h3>
              <p className="text-gray-600 mb-4">Operate multi-role helicopters for various naval missions and operations</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Anti-Submarine Warfare</li>
                <li>• Search & Rescue</li>
                <li>• Maritime Patrol</li>
                <li>• Ship-based Operations</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <MdRadar className="text-3xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Maritime Reconnaissance</h3>
              <p className="text-gray-600 mb-4">Conduct surveillance and reconnaissance missions over vast ocean areas</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Long Range Patrol</li>
                <li>• Intelligence Gathering</li>
                <li>• Maritime Surveillance</li>
                <li>• Electronic Warfare</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
              <FaShip className="text-3xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Carrier Operations</h3>
              <p className="text-gray-600 mb-4">Specialized operations from aircraft carriers and naval air stations</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Deck Landing Practice</li>
                <li>• Catapult Launch</li>
                <li>• Arrested Recovery</li>
                <li>• Carrier Air Group</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500">
              <MdNavigation className="text-3xl text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Transport & Logistics</h3>
              <p className="text-gray-600 mb-4">Support operations with transport aircraft and logistics missions</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Personnel Transport</li>
                <li>• Cargo Operations</li>
                <li>• Medical Evacuation</li>
                <li>• Inter-Island Connectivity</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
              <MdSecurity className="text-3xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Coastal Security</h3>
              <p className="text-gray-600 mb-4">Protect coastal areas and maritime borders from threats</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Border Patrol</li>
                <li>• Anti-Piracy Operations</li>
                <li>• Coastal Surveillance</li>
                <li>• Emergency Response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility & Selection Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Eligibility & Selection Process</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <FaGraduationCap className="mr-3 text-blue-600" />
                Educational Qualifications
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Academic Requirements</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Bachelor's degree from recognized university</li>
                    <li>• Physics & Mathematics in 10+2</li>
                    <li>• Minimum 60% aggregate marks</li>
                    <li>• Engineering graduates preferred</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Age & Physical Criteria</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 19-24 years (varies by entry scheme)</li>
                    <li>• Excellent physical fitness</li>
                    <li>• Perfect vision (6/6, correctable)</li>
                    <li>• Height: 157.5-182.5 cm</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Medical Standards</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Aircrew Medical Category I</li>
                    <li>• No history of serious injuries</li>
                    <li>• Cardiovascular fitness</li>
                    <li>• Psychological assessment</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <MdAssignment className="mr-3 text-green-600" />
                Selection Process
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Written Examination</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Mathematics & Physics</li>
                    <li>• English Language</li>
                    <li>• General Knowledge</li>
                    <li>• Reasoning Ability</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Service Selection Board (SSB)</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Psychological Testing</li>
                    <li>• Group Tasks & Discussions</li>
                    <li>• Personal Interview</li>
                    <li>• Leadership Assessment</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Medical Examination</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Comprehensive medical check-up</li>
                    <li>• Aviation medicine evaluation</li>
                    <li>• Psychological assessment</li>
                    <li>• Final fitness certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Training & Career Progression */}
      <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Training & Career Progression</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Basic Naval Training (6 months)</h3>
                    <p className="text-gray-600">Indian Naval Academy, Ezhimala - Foundation military training</p>
                    <p className="text-blue-600 font-semibold">₹56,100 - 1.00 LPA + Allowances</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Officer Cadet</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Flying Training (18-24 months)</h3>
                    <p className="text-gray-600">Advanced Flying Training - Fixed Wing/Rotary Wing</p>
                    <p className="text-green-600 font-semibold">₹69,400 - 1.50 LPA + Flying Pay</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Sub Lieutenant</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Operational Flying (3-8 years)</h3>
                    <p className="text-gray-600">Squadron Operations - Mission Ready Pilot</p>
                    <p className="text-purple-600 font-semibold">₹81,100 - 2.50 LPA + Special Pay</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Lieutenant - Lt. Commander</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Command Positions (8-15 years)</h3>
                    <p className="text-gray-600">Squadron Command - Flight Leadership Roles</p>
                    <p className="text-orange-600 font-semibold">₹1.30 - 4.00 LPA + Command Allowance</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Commander - Captain</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Senior Leadership (15+ years)</h3>
                    <p className="text-gray-600">Flag Officer - Strategic Naval Aviation Leadership</p>
                    <p className="text-red-600 font-semibold">₹2.05 - 2.50+ LPA + Flag Allowance</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Commodore - Admiral</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Required */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Essential Skills & Attributes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
              <FaTachometerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quick Decision Making</h3>
              <p className="text-gray-600 text-sm">Rapid assessment and decision-making under pressure</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
              <FaRadar className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Situational Awareness</h3>
              <p className="text-gray-600 text-sm">Comprehensive understanding of tactical situations</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl">
              <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Leadership</h3>
              <p className="text-gray-600 text-sm">Command presence and team leadership abilities</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-xl">
              <MdVerifiedUser className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Discipline</h3>
              <p className="text-gray-600 text-sm">Military discipline and adherence to protocols</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl">
              <MdFlightTakeoff className="text-4xl text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Flying Skills</h3>
              <p className="text-gray-600 text-sm">Exceptional flying ability and aircraft handling</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl">
              <FaAnchor className="text-4xl text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Maritime Knowledge</h3>
              <p className="text-gray-600 text-sm">Understanding of naval operations and sea environment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Tips */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Preparation Strategy</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <MdSchool className="mr-3 text-blue-600" />
                  Academic Preparation
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Master Physics and Mathematics concepts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Improve English language and communication skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Stay updated with current affairs and defense matters
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practice reasoning and analytical questions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Study naval history and maritime geography
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaTrophy className="mr-3 text-green-600" />
                  Physical Fitness
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maintain excellent cardiovascular fitness
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Regular swimming and water confidence
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Eye exercises and vision care
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practice meditation for mental focus
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop hand-eye coordination skills
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaFlag className="mr-3 text-purple-600" />
                  SSB Preparation
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Psychological Tests</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Thematic Apperception Test (TAT)</li>
                      <li>• Word Association Test (WAT)</li>
                      <li>• Situation Reaction Test (SRT)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Group Tasks</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Group Discussion (GD)</li>
                      <li>• Group Planning Exercise (GPE)</li>
                      <li>• Progressive Group Task (PGT)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Personal Interview</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Self-awareness and confidence</li>
                      <li>• Knowledge of naval affairs</li>
                      <li>• Leadership potential assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aircraft & Technology */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Aircraft & Technology</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <FaPlane className="mr-3 text-blue-600" />
                  Fixed Wing Aircraft
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Fighter Aircraft</h4>
                    <p className="text-gray-600 text-sm">MiG-29K carrier-based fighters for air superiority and maritime strike missions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Maritime Patrol</h4>
                    <p className="text-gray-600 text-sm">P-8I Neptune and Dornier aircraft for long-range surveillance and reconnaissance</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Transport Aircraft</h4>
                    <p className="text-gray-600 text-sm">Islander and Dornier aircraft for personnel and cargo transport</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <FaHelicopter className="mr-3 text-green-600" />
                  Rotary Wing Aircraft
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Anti-Submarine Warfare</h4>
                    <p className="text-gray-600 text-sm">Sea King and MH-60R helicopters for submarine hunting and naval operations</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Multi-Role Helicopters</h4>
                    <p className="text-gray-600 text-sm">ALH Dhruv and Chetak helicopters for diverse mission requirements</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Search & Rescue</h4>
                    <p className="text-gray-600 text-sm">Specialized SAR configurations for maritime rescue operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Future Trends */}
      <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Future Trends & Opportunities</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <FaRocket className="mr-3 text-blue-600" />
                  Emerging Technologies
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Unmanned Aerial Systems</h4>
                    <p className="text-gray-600 text-sm">Naval drones for surveillance, reconnaissance, and combat operations</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Advanced Avionics</h4>
                    <p className="text-gray-600 text-sm">Next-generation radar, sensors, and mission systems integration</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Stealth Technology</h4>
                    <p className="text-gray-600 text-sm">Low observable aircraft design and radar-evading capabilities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <FaLightbulb className="mr-3 text-green-600" />
                  Career Opportunities
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Test Pilot Programs</h4>
                    <p className="text-gray-600 text-sm">Elite test pilot roles for new aircraft development and evaluation</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">International Exchanges</h4>
                    <p className="text-gray-600 text-sm">Training and operational exchanges with foreign navies and air forces</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Aviation Leadership</h4>
                    <p className="text-gray-600 text-sm">Senior command positions in naval aviation and defense planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Insights */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Naval Aviation Statistics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl shadow-lg text-center">
              <MdTrendingUp className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">250+</h3>
              <p className="text-gray-600">Naval Aircraft Fleet Size</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl shadow-lg text-center">
              <FaAnchor className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">12</h3>
              <p className="text-gray-600">Naval Air Stations</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl shadow-lg text-center">
              <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2000+</h3>
              <p className="text-gray-600">Naval Aviation Personnel</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl shadow-lg text-center">
              <MdWork className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">INS Vikrant</h3>
              <p className="text-gray-600">Indigenous Aircraft Carrier</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Soar with the Indian Navy?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join the elite ranks of Indian Navy pilots and defend the nation's maritime interests from the skies above the seas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Learn About Naval Aviation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
