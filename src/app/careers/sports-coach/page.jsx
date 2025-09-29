import React from 'react';
import { 
  FaRunning, 
  FaTrophy, 
  FaHeartbeat, 
  FaUsers, 
  FaChartLine,
  FaBullseye,
  FaStopwatch,
  FaDumbbell,
  FaGraduationCap,
  FaRupeeSign,
  FaBrain,
  FaEye,
  FaClock,
  FaBookOpen,
  FaHandshake,
  FaLightbulb,
  FaNetworkWired,
  FaCog,
  FaSearch,
  FaShieldAlt,
  FaGlobe,
  FaGamepad,
  FaIndustry,
  FaHospital,
  FaUniversity,
  FaFutbol,
  FaBasketballBall,
  FaSwimmer,
  FaWalking,
  FaMedal,
  FaFlag,
  FaComments
} from 'react-icons/fa';

export default function SportsCoachCareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaRunning className="text-6xl mb-6 mx-auto text-green-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Sports Coach
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Develop Athletic Excellence & Champion Mindsets
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-green-600 px-4 py-2 rounded-full">Athlete Development</span>
            <span className="bg-teal-600 px-4 py-2 rounded-full">Performance Training</span>
            <span className="bg-blue-600 px-4 py-2 rounded-full">₹3.0-50+ LPA</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <FaTrophy className="mr-4 text-green-400" />
              Sports Coach Overview
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sports coaches are dedicated professionals who guide athletes and teams to achieve peak performance through systematic training, strategic planning, and mentorship. They combine technical expertise, motivational skills, and sports psychology to develop talent, build character, and foster winning attitudes. From grassroots development to elite competition, sports coaches shape athletic careers and inspire excellence both on and off the field.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-900/30 p-6 rounded-xl">
                <FaUsers className="text-3xl text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Athlete Development</h3>
                <p className="text-gray-300">Guide individual and team growth through personalized training programs.</p>
              </div>
              <div className="bg-teal-900/30 p-6 rounded-xl">
                <FaBullseye className="text-3xl text-teal-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Performance Optimization</h3>
                <p className="text-gray-300">Analyze and improve athletic performance through data-driven strategies.</p>
              </div>
              <div className="bg-blue-900/30 p-6 rounded-xl">
                <FaBrain className="text-3xl text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Mental Conditioning</h3>
                <p className="text-gray-300">Develop mental toughness, confidence, and competitive mindset in athletes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Specializations */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Sports Coaching Specializations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border border-green-500/20">
              <FaFutbol className="text-4xl text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Team Sports Coach</h3>
              <p className="text-gray-300 mb-4">Lead football, cricket, basketball, volleyball, and hockey teams through tactical training and game strategy.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Team strategy and tactics</li>
                <li>• Player coordination and roles</li>
                <li>• Game analysis and planning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/40 to-teal-800/20 p-6 rounded-xl border border-teal-500/20">
              <FaRunning className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Individual Sports Coach</h3>
              <p className="text-gray-300 mb-4">Train athletes in tennis, badminton, athletics, swimming, and other individual competitive sports.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Technique refinement</li>
                <li>• Personal performance goals</li>
                <li>• Mental conditioning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6 rounded-xl border border-blue-500/20">
              <FaDumbbell className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Fitness & Strength Coach</h3>
              <p className="text-gray-300 mb-4">Develop physical conditioning programs, strength training, and injury prevention protocols for athletes.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Strength and conditioning</li>
                <li>• Injury prevention programs</li>
                <li>• Fitness assessment and planning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-6 rounded-xl border border-purple-500/20">
              <FaUsers className="text-4xl text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Youth Development Coach</h3>
              <p className="text-gray-300 mb-4">Focus on developing young talent through age-appropriate training and character building programs.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Age-specific training methods</li>
                <li>• Skill development progression</li>
                <li>• Character and discipline building</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 p-6 rounded-xl border border-yellow-500/20">
              <FaMedal className="text-4xl text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Elite Performance Coach</h3>
              <p className="text-gray-300 mb-4">Work with professional athletes and national teams to achieve peak competitive performance.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• High-performance training</li>
                <li>• Competition preparation</li>
                <li>• Advanced analytics and technology</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 p-6 rounded-xl border border-red-500/20">
              <FaHeartbeat className="text-4xl text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rehabilitation & Adaptive Coach</h3>
              <p className="text-gray-300 mb-4">Specialize in sports rehabilitation, adaptive sports, and coaching athletes with disabilities.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Injury recovery programs</li>
                <li>• Adaptive sports techniques</li>
                <li>• Therapeutic exercise protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Sports Coaching Career Path
          </h2>
          <div className="space-y-8">
            <div className="flex items-center bg-gradient-to-r from-green-900/20 to-teal-900/20 p-6 rounded-xl border-l-4 border-green-500">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">1</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Assistant Coach / Trainee Coach</h3>
                <p className="text-gray-300 mt-2">Learn coaching fundamentals, assist senior coaches, and work with beginner or youth teams.</p>
                <p className="text-green-400 font-semibold mt-1">₹3.0 - 6.0 LPA</p>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-teal-900/20 to-blue-900/20 p-6 rounded-xl border-l-4 border-teal-500">
              <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">2</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Sports Coach</h3>
                <p className="text-gray-300 mt-2">Lead teams independently, develop training programs, and manage athlete performance and development.</p>
                <p className="text-teal-400 font-semibold mt-1">₹6.0 - 12.0 LPA</p>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">3</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Senior Coach / Specialist Coach</h3>
                <p className="text-gray-300 mt-2">Handle elite teams, specialize in advanced techniques, and mentor junior coaching staff.</p>
                <p className="text-blue-400 font-semibold mt-1">₹12.0 - 25.0 LPA</p>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-purple-900/20 to-yellow-900/20 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">4</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Head Coach / Performance Director</h3>
                <p className="text-gray-300 mt-2">Lead entire coaching departments, oversee multiple teams, and drive organizational sports strategy.</p>
                <p className="text-purple-400 font-semibold mt-1">₹25.0 - 40.0 LPA</p>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-yellow-900/20 to-red-900/20 p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">5</div>
              <div>
                <h3 className="text-2xl font-bold text-white">National Coach / Sports Director</h3>
                <p className="text-gray-300 mt-2">Coach national teams, establish training standards, and influence sports development at country level.</p>
                <p className="text-yellow-400 font-semibold mt-1">₹40.0 - 50.0+ LPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Qualifications */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Essential Skills & Qualifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-8 rounded-2xl">
              <FaBrain className="text-4xl text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">Core Coaching Skills</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaTrophy className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Sport-specific technical knowledge and expertise</span>
                </li>
                <li className="flex items-start">
                  <FaUsers className="text-teal-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Leadership, motivation, and team management abilities</span>
                </li>
                <li className="flex items-start">
                  <FaComments className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Excellent communication and interpersonal skills</span>
                </li>
                <li className="flex items-start">
                  <FaChartLine className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Performance analysis and strategic planning capabilities</span>
                </li>
                <li className="flex items-start">
                  <FaBullseye className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Goal setting and progress monitoring expertise</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl">
              <FaGraduationCap className="text-4xl text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">Educational Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaBookOpen className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Bachelor's in Sports Science, Physical Education, or Kinesiology</span>
                </li>
                <li className="flex items-start">
                  <FaMedal className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Coaching certifications from national sports federations</span>
                </li>
                <li className="flex items-start">
                  <FaHeartbeat className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span>First aid, CPR, and sports safety certifications</span>
                </li>
                <li className="flex items-start">
                  <FaHandshake className="text-teal-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Previous playing experience or coaching apprenticeship</span>
                </li>
                <li className="flex items-start">
                  <FaClock className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Continuous professional development and skill updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Methods & Techniques */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Coaching Methods & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/40 to-green-700/20 p-6 rounded-xl">
              <FaDumbbell className="text-3xl text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Physical Training</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Strength and conditioning programs</li>
                <li>• Endurance and stamina building</li>
                <li>• Flexibility and mobility training</li>
                <li>• Sport-specific skill development</li>
                <li>• Injury prevention protocols</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900/40 to-teal-700/20 p-6 rounded-xl">
              <FaBrain className="text-3xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Mental & Tactical</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Sports psychology and mental training</li>
                <li>• Game strategy and tactical analysis</li>
                <li>• Decision-making under pressure</li>
                <li>• Concentration and focus techniques</li>
                <li>• Team cohesion and communication</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-blue-700/20 p-6 rounded-xl">
              <FaNetworkWired className="text-3xl text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Technology & Analytics</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Video analysis software</li>
                <li>• Performance tracking devices</li>
                <li>• Biomechanics analysis tools</li>
                <li>• Fitness monitoring apps</li>
                <li>• Data-driven performance insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Coaching Development Areas
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 p-6 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                <h3 className="text-xl font-bold text-white">Technical Skills Development</h3>
              </div>
              <p className="text-gray-300 ml-12">Master sport-specific techniques, rules, and advanced training methodologies for optimal athlete development.</p>
            </div>

            <div className="bg-gradient-to-r from-teal-900/30 to-blue-900/30 p-6 rounded-xl border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                <h3 className="text-xl font-bold text-white">Leadership & Communication</h3>
              </div>
              <p className="text-gray-300 ml-12">Develop strong leadership presence, effective communication strategies, and team building capabilities.</p>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                <h3 className="text-xl font-bold text-white">Performance Analytics</h3>
              </div>
              <p className="text-gray-300 ml-12">Utilize data analytics, video analysis, and performance metrics to enhance training effectiveness.</p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-yellow-900/30 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                <h3 className="text-xl font-bold text-white">Sports Psychology</h3>
              </div>
              <p className="text-gray-300 ml-12">Understand mental conditioning, motivation techniques, and psychological aspects of peak performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salary & Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 flex items-center justify-center">
            <FaRupeeSign className="mr-4 text-green-400" />
            Salary Range & Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/40 to-blue-900/20 p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Experience-Based Salaries</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Assistant Coach</span>
                  <span className="text-green-400 font-semibold">₹3.0 - 6.0 LPA</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Sports Coach</span>
                  <span className="text-teal-400 font-semibold">₹6.0 - 12.0 LPA</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Senior Coach</span>
                  <span className="text-blue-400 font-semibold">₹12.0 - 25.0 LPA</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Head Coach</span>
                  <span className="text-purple-400 font-semibold">₹25.0 - 40.0 LPA</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">National Coach</span>
                  <span className="text-yellow-400 font-semibold">₹40.0 - 50.0+ LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-900/40 to-purple-900/20 p-8 rounded-2xl border border-teal-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Additional Benefits</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <FaTrophy className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Performance Bonuses:</strong>
                    <br />Achievement-based incentives, tournament bonuses, and success rewards
                  </div>
                </li>
                <li className="flex items-start">
                  <FaGlobe className="text-teal-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Travel Opportunities:</strong>
                    <br />Domestic and international tournaments, training camps, and competitions
                  </div>
                </li>
                <li className="flex items-start">
                  <FaGraduationCap className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Professional Development:</strong>
                    <br />Coaching courses, certifications, and skill enhancement programs
                  </div>
                </li>
                <li className="flex items-start">
                  <FaHeartbeat className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Health & Fitness:</strong>
                    <br />Gym memberships, health insurance, and sports facility access
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Sports Coaching Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-900/30 to-green-700/20 p-6 rounded-xl text-center">
              <FaUniversity className="text-4xl text-green-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Educational Institutions</h3>
              <p className="text-gray-300 text-sm">Schools, colleges, universities, and sports academies</p>
            </div>
            <div className="bg-gradient-to-br from-teal-900/30 to-teal-700/20 p-6 rounded-xl text-center">
              <FaFlag className="text-4xl text-teal-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Professional Teams</h3>
              <p className="text-gray-300 text-sm">IPL, ISL, Pro Kabaddi, and other professional sports leagues</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/20 p-6 rounded-xl text-center">
              <FaIndustry className="text-4xl text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Corporate Programs</h3>
              <p className="text-gray-300 text-sm">Employee wellness, corporate sports teams, and fitness programs</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-700/20 p-6 rounded-xl text-center">
              <FaDumbbell className="text-4xl text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Private Coaching</h3>
              <p className="text-gray-300 text-sm">Personal training, sports academies, and freelance coaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Trends */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 flex items-center justify-center">
            <FaChartLine className="mr-4 text-green-400" />
            Future of Sports Coaching
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/30 to-teal-900/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Technology Integration</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <FaNetworkWired className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Data Analytics:</strong> Performance tracking, biomechanics analysis, and predictive modeling</span>
                </li>
                <li className="flex items-start">
                  <FaEye className="text-teal-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Virtual Reality:</strong> Immersive training environments and tactical simulations</span>
                </li>
                <li className="flex items-start">
                  <FaBrain className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">AI Coaching:</strong> Personalized training programs and intelligent performance analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Industry Growth</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <FaGlobe className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Sports Popularity:</strong> Growing interest in fitness, wellness, and competitive sports</span>
                </li>
                <li className="flex items-start">
                  <FaHeartbeat className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Holistic Approach:</strong> Integration of mental health, nutrition, and lifestyle coaching</span>
                </li>
                <li className="flex items-start">
                  <FaHandshake className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Professional Recognition:</strong> Increased respect and career opportunities in sports coaching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/50 to-teal-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <FaRunning className="text-6xl text-green-400 mb-6 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Shape Athletic Champions & Build Winning Teams
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your passion for sports into a rewarding career that develops athletic talent, builds character, and creates champions. Guide athletes to achieve their potential while making a lasting impact on their personal and sporting journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold">
              Athletic Excellence
            </div>
            <div className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold">
              Performance Development
            </div>
            <div className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold">
              Champion Mindset
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
