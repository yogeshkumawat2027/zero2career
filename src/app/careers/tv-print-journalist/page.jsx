import React from 'react';
import { 
  FaMicrophone, 
  FaNewspaper, 
  FaVideo, 
  FaUsers, 
  FaBroadcastTower,
  FaSearch,
  FaCameraRetro,
  FaPen,
  FaTv,
  FaRupeeSign,
  FaBrain,
  FaEye,
  FaClock,
  FaBookOpen,
  FaBuilding,
  FaLightbulb,
  FaNetworkWired,
  FaCog,
  FaLaptop,
  FaShieldAlt,
  FaGlobe,
  FaGamepad,
  FaIndustry,
  FaHospital,
  FaUniversity,
  FaPhone,
  FaRegNewspaper,
  FaBalanceScale,
  FaFileContract,
  FaComments,
  FaCheckCircle,
  FaExclamationTriangle,
  FaAward,
  FaHandshake,
  FaChartLine,
  FaPencilAlt,
  FaFlash,
  FaCalculator,
  FaHistory,
  FaLanguage,
  FaFire,
  FaMobileAlt,
  FaRss,
  FaHeadphones,
  FaQuoteLeft,
  FaFlag,
  FaExchangeAlt
} from 'react-icons/fa';

export default function TVPrintJournalistCareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaMicrophone className="text-6xl mb-6 mx-auto text-red-400" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            TV & Print Journalist
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Uncover Truth & Tell Stories That Matter
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <span className="bg-red-600 px-4 py-2 rounded-full">News Reporting</span>
            <span className="bg-orange-600 px-4 py-2 rounded-full">Investigative Journalism</span>
            <span className="bg-yellow-600 px-4 py-2 rounded-full">₹3.0-75+ LPA</span>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <FaNewspaper className="mr-4 text-red-400" />
              TV & Print Journalist Overview
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              TV and print journalists are the watchdogs of democracy, responsible for gathering, verifying, and reporting news that keeps the public informed. They investigate stories, conduct interviews, and present information across multiple media platforms including television, newspapers, magazines, and digital outlets. Modern journalists combine traditional reporting skills with digital literacy, social media savvy, and multimedia storytelling to reach diverse audiences and adapt to rapidly evolving media landscapes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-900/30 p-6 rounded-xl">
                <FaSearch className="text-3xl text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Investigative Reporting</h3>
                <p className="text-gray-300">Research and uncover important stories that impact society and hold power accountable.</p>
              </div>
              <div className="bg-orange-900/30 p-6 rounded-xl">
                <FaBroadcastTower className="text-3xl text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">News Broadcasting</h3>
                <p className="text-gray-300">Present live news updates, conduct interviews, and anchor television programs.</p>
              </div>
              <div className="bg-yellow-900/30 p-6 rounded-xl">
                <FaPen className="text-3xl text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Content Creation</h3>
                <p className="text-gray-300">Write compelling articles, create multimedia content, and develop story narratives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journalism Specializations */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Journalism Specializations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 p-6 rounded-xl border border-red-500/20">
              <FaTv className="text-4xl text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">TV News Reporter</h3>
              <p className="text-gray-300 mb-4">Cover breaking news, conduct live reporting, and present stories on television with strong on-camera presence.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Live news reporting and anchoring</li>
                <li>• Field journalism and event coverage</li>
                <li>• Interview techniques and presentation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 p-6 rounded-xl border border-orange-500/20">
              <FaNewspaper className="text-4xl text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Print Journalist</h3>
              <p className="text-gray-300 mb-4">Write in-depth articles, feature stories, and investigative pieces for newspapers, magazines, and publications.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Feature writing and editorial content</li>
                <li>• Long-form investigative articles</li>
                <li>• News analysis and opinion pieces</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 p-6 rounded-xl border border-yellow-500/20">
              <FaGlobe className="text-4xl text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Digital Journalist</h3>
              <p className="text-gray-300 mb-4">Create content for online platforms, social media, and digital news outlets with multimedia storytelling.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Online content creation and blogging</li>
                <li>• Social media journalism and viral content</li>
                <li>• Multimedia storytelling techniques</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6 rounded-xl border border-blue-500/20">
              <FaSearch className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Investigative Journalist</h3>
              <p className="text-gray-300 mb-4">Conduct deep research, expose corruption, and uncover stories that require extensive investigation and fact-checking.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Research and fact-checking methods</li>
                <li>• Source development and protection</li>
                <li>• Data journalism and analysis</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border border-green-500/20">
              <FaFlag className="text-4xl text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">War & Foreign Correspondent</h3>
              <p className="text-gray-300 mb-4">Report from conflict zones, international locations, and cover global events with cultural sensitivity and expertise.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• International reporting and cultural awareness</li>
                <li>• Crisis reporting and safety protocols</li>
                <li>• Multilingual communication skills</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-6 rounded-xl border border-purple-500/20">
              <FaIndustry className="text-4xl text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Specialized Beat Reporter</h3>
              <p className="text-gray-300 mb-4">Focus on specific sectors like politics, business, sports, entertainment, health, or technology journalism.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Subject matter expertise development</li>
                <li>• Industry-specific source networks</li>
                <li>• Technical and specialized knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Journalism Career Path
          </h2>
          <div className="space-y-8">
            <div className="flex items-center bg-gradient-to-r from-red-900/20 to-orange-900/20 p-6 rounded-xl border-l-4 border-red-500">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">1</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Trainee Journalist / Intern Reporter</h3>
                <p className="text-gray-300 mt-2">Start with internships, assist senior journalists, learn newsroom operations, and cover basic local news stories.</p>
                <p className="text-red-400 font-semibold mt-1">₹3.0 - 6.0 LPA</p>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-orange-900/20 to-yellow-900/20 p-6 rounded-xl border-l-4 border-orange-500">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">2</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Reporter / Correspondent</h3>
                <p className="text-gray-300 mt-2">Cover assigned beats independently, conduct interviews, write articles, and build source networks in specialized areas.</p>
                <p className="text-orange-400 font-semibold mt-1">₹6.0 - 15.0 LPA</p>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-yellow-900/20 to-blue-900/20 p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">3</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Senior Reporter / News Anchor</h3>
                <p className="text-gray-300 mt-2">Lead major story coverage, mentor junior staff, present news on television, and handle high-profile assignments.</p>
                <p className="text-yellow-400 font-semibold mt-1">₹15.0 - 30.0 LPA</p>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-blue-900/20 to-green-900/20 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">4</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Assistant Editor / Bureau Chief</h3>
                <p className="text-gray-300 mt-2">Oversee editorial decisions, manage reporting teams, set newsroom priorities, and coordinate news production.</p>
                <p className="text-blue-400 font-semibold mt-1">₹30.0 - 50.0 LPA</p>
              </div>
            </div>

            <div className="flex items-center bg-gradient-to-r from-green-900/20 to-purple-900/20 p-6 rounded-xl border-l-4 border-green-500">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">5</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Editor-in-Chief / News Director</h3>
                <p className="text-gray-300 mt-2">Lead entire newsroom operations, shape editorial vision, make strategic decisions, and represent publication publicly.</p>
                <p className="text-green-400 font-semibold mt-1">₹50.0 - 75.0+ LPA</p>
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
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-2xl">
              <FaBrain className="text-4xl text-red-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">Core Journalism Skills</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaComments className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Excellent written and verbal communication skills</span>
                </li>
                <li className="flex items-start">
                  <FaSearch className="text-orange-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Research, fact-checking, and investigative abilities</span>
                </li>
                <li className="flex items-start">
                  <FaEye className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Critical thinking and analytical news judgment</span>
                </li>
                <li className="flex items-start">
                  <FaClock className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Deadline pressure management and time efficiency</span>
                </li>
                <li className="flex items-start">
                  <FaHandshake className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Interview techniques and source relationship building</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/30 to-blue-900/30 p-8 rounded-2xl">
              <FaBookOpen className="text-4xl text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6">Educational Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <FaBookOpen className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Bachelor's degree in Journalism, Mass Communication, or English</span>
                </li>
                <li className="flex items-start">
                  <FaAward className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Specialized training in broadcast journalism or print media</span>
                </li>
                <li className="flex items-start">
                  <FaLaptop className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Digital media literacy and content management systems</span>
                </li>
                <li className="flex items-start">
                  <FaLanguage className="text-purple-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Multilingual abilities for diverse audience reach</span>
                </li>
                <li className="flex items-start">
                  <FaNetworkWired className="text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                  <span>Social media proficiency and digital storytelling skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Media Tools & Technologies */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Journalism Tools & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-900/40 to-red-700/20 p-6 rounded-xl">
              <FaVideo className="text-3xl text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Broadcasting Equipment</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Professional cameras and microphones</li>
                <li>• Video editing software (Premiere Pro, Final Cut)</li>
                <li>• Live streaming and broadcast tools</li>
                <li>• Audio recording and editing equipment</li>
                <li>• Teleprompters and studio technology</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-orange-700/20 p-6 rounded-xl">
              <FaPencilAlt className="text-3xl text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Writing & Publishing</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Content management systems</li>
                <li>• AP Style and journalism standards</li>
                <li>• Digital publishing platforms</li>
                <li>• Research and fact-checking tools</li>
                <li>• Interview transcription software</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-xl">
              <FaMobileAlt className="text-3xl text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Digital & Social Media</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Social media management platforms</li>
                <li>• Mobile journalism (mojo) apps</li>
                <li>• Analytics and audience measurement</li>
                <li>• Live reporting and streaming tools</li>
                <li>• SEO and digital optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journalism Ethics & Standards */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Professional Ethics & Standards
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-xl border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                <h3 className="text-xl font-bold text-white">Truth & Accuracy</h3>
              </div>
              <p className="text-gray-300 ml-12">Commitment to factual reporting, thorough verification, and correcting errors promptly and transparently.</p>
            </div>

            <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 p-6 rounded-xl border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                <h3 className="text-xl font-bold text-white">Independence & Objectivity</h3>
              </div>
              <p className="text-gray-300 ml-12">Maintain editorial independence, avoid conflicts of interest, and present balanced perspectives on controversial issues.</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/30 to-blue-900/30 p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                <h3 className="text-xl font-bold text-white">Source Protection & Privacy</h3>
              </div>
              <p className="text-gray-300 ml-12">Protect source confidentiality when promised, respect privacy rights, and handle sensitive information responsibly.</p>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                <h3 className="text-xl font-bold text-white">Public Interest & Accountability</h3>
              </div>
              <p className="text-gray-300 ml-12">Serve the public interest, hold power accountable, and maintain transparency about journalistic processes and funding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salary & Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 flex items-center justify-center">
            <FaRupeeSign className="mr-4 text-red-400" />
            Salary Range & Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-900/40 to-orange-900/20 p-8 rounded-2xl border border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Experience-Based Salaries</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Trainee Journalist</span>
                  <span className="text-red-400 font-semibold">₹3.0 - 6.0 LPA</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Reporter/Correspondent</span>
                  <span className="text-orange-400 font-semibold">₹6.0 - 15.0 LPA</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Senior Reporter/Anchor</span>
                  <span className="text-yellow-400 font-semibold">₹15.0 - 30.0 LPA</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                  <span className="text-gray-300">Assistant Editor</span>
                  <span className="text-blue-400 font-semibold">₹30.0 - 50.0 LPA</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Editor-in-Chief</span>
                  <span className="text-green-400 font-semibold">₹50.0 - 75.0+ LPA</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/20 p-8 rounded-2xl border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Additional Benefits</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <FaGlobe className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Travel Opportunities:</strong>
                    <br />International assignments, event coverage, field reporting
                  </div>
                </li>
                <li className="flex items-start">
                  <FaUsers className="text-orange-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Network Building:</strong>
                    <br />Industry connections, exclusive access, source networks
                  </div>
                </li>
                <li className="flex items-start">
                  <FaAward className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Recognition & Awards:</strong>
                    <br />Journalism prizes, professional recognition, career prestige
                  </div>
                </li>
                <li className="flex items-start">
                  <FaLightbulb className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Creative Freedom:</strong>
                    <br />Story selection, creative expression, investigative autonomy
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
            Media Career Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-900/30 to-red-700/20 p-6 rounded-xl text-center">
              <FaTv className="text-4xl text-red-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">TV News Channels</h3>
              <p className="text-gray-300 text-sm">CNN-News18, NDTV, Times Now, Republic TV, Aaj Tak</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-700/20 p-6 rounded-xl text-center">
              <FaNewspaper className="text-4xl text-orange-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Print Media</h3>
              <p className="text-gray-300 text-sm">The Times of India, Hindustan Times, The Hindu, Indian Express</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-700/20 p-6 rounded-xl text-center">
              <FaGlobe className="text-4xl text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Digital Media</h3>
              <p className="text-gray-300 text-sm">The Quint, The Wire, Scroll.in, News18.com, India Today Online</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/20 p-6 rounded-xl text-center">
              <FaMicrophone className="text-4xl text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-2">Radio & Podcasts</h3>
              <p className="text-gray-300 text-sm">All India Radio, Red FM, Radio City, independent podcasters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Trends */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 flex items-center justify-center">
            <FaChartLine className="mr-4 text-red-400" />
            Future of Journalism
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Digital Innovation</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <FaBrain className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">AI in Journalism:</strong> Automated news writing, fact-checking tools, and personalized content delivery</span>
                </li>
                <li className="flex items-start">
                  <FaMobileAlt className="text-orange-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Mobile-First Reporting:</strong> Real-time news updates, citizen journalism, and social media integration</span>
                </li>
                <li className="flex items-start">
                  <FaVideo className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Immersive Storytelling:</strong> VR journalism, interactive documentaries, and 360-degree reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-yellow-900/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Industry Evolution</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <FaGlobe className="text-orange-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Global Connectivity:</strong> Cross-border collaboration, international newsrooms, and diverse perspectives</span>
                </li>
                <li className="flex items-start">
                  <FaShieldAlt className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Trust & Verification:</strong> Combating fake news, blockchain verification, and credibility systems</span>
                </li>
                <li className="flex items-start">
                  <FaHandshake className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <span><strong className="text-white">Community Engagement:</strong> Audience participation, collaborative journalism, and reader-supported media</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/50 to-yellow-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <FaMicrophone className="text-6xl text-red-400 mb-6 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be The Voice That Speaks Truth To Power
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your curiosity and communication skills into a career that shapes public discourse and holds society accountable. Join the ranks of journalists who uncover truth, tell compelling stories, and make democracy stronger through informed reporting.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold">
              Truth Seeking
            </div>
            <div className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold">
              Story Telling
            </div>
            <div className="bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold">
              Public Impact
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
