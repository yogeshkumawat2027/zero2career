import React from 'react'
import { FaMobile, FaApple, FaAndroid, FaCode, FaRocket, FaUsers, FaChartLine, FaGraduationCap, FaCertificate, FaGlobe, FaTrophy, FaLightbulb } from 'react-icons/fa'
import { MdPhoneIphone, MdDeveloperMode, MdDesignServices, MdCloudUpload, MdAnalytics, MdSchool, MdWork, MdTrendingUp, MdApps, MdGamepad, MdSecurity, MdPayment } from 'react-icons/md'
import { SiSwift, SiKotlin, SiReact, SiFlutter, SiFirebase, SiXcode, SiAndroidstudio, SiFigma } from 'react-icons/si'

export default function MobileAppDeveloperCareer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <FaMobile className="text-6xl" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Mobile App Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 leading-relaxed">
              Build Mobile Experiences, Code the Future, Connect Billions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">iOS Development</span>
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Android Development</span>
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Cross-Platform</span>
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">App Publishing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Mobile App Development?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-lg transition-all duration-300">
              <FaRocket className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">High Growth Market</h3>
              <p className="text-gray-600">Explosive growth in mobile app usage and demand</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <FaChartLine className="text-4xl text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Excellent Earning Potential</h3>
              <p className="text-gray-600">Competitive salaries and freelance opportunities</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 hover:shadow-lg transition-all duration-300">
              <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Global Reach</h3>
              <p className="text-gray-600">Create apps that impact millions of users worldwide</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-lg transition-all duration-300">
              <FaLightbulb className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovation & Creativity</h3>
              <p className="text-gray-600">Build innovative solutions and creative user experiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Development Platforms */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Development Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <FaApple className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">iOS Development</h3>
              <p className="text-gray-600 mb-4">Native iOS apps using Swift and Xcode</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Swift Programming Language</li>
                <li>• Xcode IDE</li>
                <li>• UIKit & SwiftUI</li>
                <li>• App Store Publishing</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <FaAndroid className="text-3xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Android Development</h3>
              <p className="text-gray-600 mb-4">Native Android apps using Kotlin and Android Studio</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Kotlin Programming</li>
                <li>• Android Studio IDE</li>
                <li>• Jetpack Compose</li>
                <li>• Google Play Store</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <SiReact className="text-3xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Cross-Platform</h3>
              <p className="text-gray-600 mb-4">Build for both platforms with single codebase</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• React Native</li>
                <li>• Flutter (Dart)</li>
                <li>• Xamarin</li>
                <li>• Ionic Framework</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
              <MdGamepad className="text-3xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Game Development</h3>
              <p className="text-gray-600 mb-4">Mobile games and interactive experiences</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Unity 3D</li>
                <li>• Unreal Engine</li>
                <li>• Cocos2d</li>
                <li>• Game Monetization</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
              <MdDesignServices className="text-3xl text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">User interface and experience design</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Figma & Sketch</li>
                <li>• Prototyping</li>
                <li>• User Research</li>
                <li>• Design Systems</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
              <SiFirebase className="text-3xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Backend Integration</h3>
              <p className="text-gray-600 mb-4">Cloud services and backend development</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Firebase Services</li>
                <li>• RESTful APIs</li>
                <li>• Database Integration</li>
                <li>• Cloud Storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Requirements */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Educational Pathway</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <MdSchool className="mr-3 text-blue-600" />
                Academic Requirements
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Bachelor's Degree (3-4 years)</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• B.Tech Computer Science/IT</li>
                    <li>• BCA (Bachelor of Computer Applications)</li>
                    <li>• B.Sc Computer Science</li>
                    <li>• Self-taught with portfolio (alternative path)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Master's Degree (Optional)</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• M.Tech Computer Science</li>
                    <li>• MCA (Master of Computer Applications)</li>
                    <li>• MS in Mobile Computing</li>
                    <li>• MBA for leadership roles</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Online Certifications</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Apple Developer Certification</li>
                    <li>• Google Associate Android Developer</li>
                    <li>• AWS Mobile Developer</li>
                    <li>• Platform-specific bootcamps</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <FaCode className="mr-3 text-purple-600" />
                Essential Skills Development
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Programming Languages</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Swift (iOS development)</li>
                    <li>• Kotlin/Java (Android development)</li>
                    <li>• JavaScript/TypeScript (Cross-platform)</li>
                    <li>• Dart (Flutter development)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Development Tools</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Xcode (iOS development)</li>
                    <li>• Android Studio (Android development)</li>
                    <li>• VS Code (Cross-platform)</li>
                    <li>• Git version control</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Additional Skills</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• UI/UX design principles</li>
                    <li>• RESTful API integration</li>
                    <li>• Database management (SQLite, Realm)</li>
                    <li>• App store optimization (ASO)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Progression */}
      <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Career Progression Path</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Junior Mobile Developer</h3>
                    <p className="text-gray-600">Entry-level app development and bug fixes</p>
                    <p className="text-purple-600 font-semibold">₹3.5 - 6.0 LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 0-2 years</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Mobile App Developer</h3>
                    <p className="text-gray-600">Full-cycle app development and feature implementation</p>
                    <p className="text-blue-600 font-semibold">₹6.0 - 12.0 LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 3-5 years</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Senior Mobile Developer</h3>
                    <p className="text-gray-600">Lead complex projects and mentor junior developers</p>
                    <p className="text-green-600 font-semibold">₹12.0 - 22.0 LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 6-9 years</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Mobile Tech Lead/Architect</h3>
                    <p className="text-gray-600">Technical leadership and architecture decisions</p>
                    <p className="text-orange-600 font-semibold">₹20.0 - 35.0 LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 10-14 years</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">VP Engineering/CTO</h3>
                    <p className="text-gray-600">Strategic technology leadership and team management</p>
                    <p className="text-red-600 font-semibold">₹30.0 - 60.0+ LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 15+ years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Categories */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile App Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
              <MdApps className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business & Productivity</h3>
              <p className="text-gray-600 text-sm">Enterprise apps, project management, and productivity tools</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
              <MdPayment className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">E-commerce & FinTech</h3>
              <p className="text-gray-600 text-sm">Shopping apps, payment solutions, and financial services</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl">
              <MdGamepad className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Gaming & Entertainment</h3>
              <p className="text-gray-600 text-sm">Mobile games, streaming apps, and entertainment platforms</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-xl">
              <MdAnalytics className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Health & Fitness</h3>
              <p className="text-gray-600 text-sm">Wellness apps, fitness trackers, and healthcare solutions</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl">
              <MdCloudUpload className="text-4xl text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Social & Communication</h3>
              <p className="text-gray-600 text-sm">Social networks, messaging apps, and community platforms</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl">
              <MdSecurity className="text-4xl text-cyan-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Security & Utility</h3>
              <p className="text-gray-600 text-sm">Security apps, system utilities, and developer tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Development Tools & Technologies */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Development Tools & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <SiXcode className="mr-3 text-blue-600" />
                iOS Development
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Xcode IDE</li>
                <li>• Swift Programming</li>
                <li>• UIKit & SwiftUI</li>
                <li>• Core Data</li>
                <li>• TestFlight</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <SiAndroidstudio className="mr-3 text-green-600" />
                Android Development
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Android Studio</li>
                <li>• Kotlin/Java</li>
                <li>• Jetpack Compose</li>
                <li>• Room Database</li>
                <li>• Firebase SDK</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <SiFigma className="mr-3 text-purple-600" />
                Design & Prototyping
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Figma & Sketch</li>
                <li>• Adobe XD</li>
                <li>• InVision</li>
                <li>• Zeplin</li>
                <li>• Principle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Applications */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Industry Applications</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <FaRocket className="mr-3 text-blue-600" />
                  Startup Ecosystem
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Tech Startups</h4>
                    <p className="text-gray-600 text-sm">Innovative app development for emerging businesses</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Freelancing</h4>
                    <p className="text-gray-600 text-sm">Independent app development and consulting</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">App Entrepreneurship</h4>
                    <p className="text-gray-600 text-sm">Building and monetizing your own mobile applications</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <FaGlobe className="mr-3 text-purple-600" />
                  Enterprise Solutions
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Corporate Apps</h4>
                    <p className="text-gray-600 text-sm">Enterprise mobility and internal business applications</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Digital Transformation</h4>
                    <p className="text-gray-600 text-sm">Modernizing business processes through mobile solutions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Client Solutions</h4>
                    <p className="text-gray-600 text-sm">Custom app development for diverse industry clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Salary & Benefits */}
      <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Salary & Career Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaChartLine className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">₹3.5-12L</h3>
              <p className="text-gray-600">Entry to Mid Level (0-5 years)</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MdTrendingUp className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">₹12-35L</h3>
              <p className="text-gray-600">Senior Level (6-14 years)</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MdWork className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">₹30-60L+</h3>
              <p className="text-gray-600">Leadership Roles (15+ years)</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaTrophy className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Freelance</h3>
              <p className="text-gray-600">₹500-5000/hour project rates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Statistics */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile Industry Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl shadow-lg text-center">
              <FaMobile className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">6.8B</h3>
              <p className="text-gray-600">Global Smartphone Users</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MdApps className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">3.5M+</h3>
              <p className="text-gray-600">Apps on Google Play Store</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MdCloudUpload className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">$935B</h3>
              <p className="text-gray-600">Global Mobile App Revenue</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MdDeveloperMode className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">26.9M</h3>
              <p className="text-gray-600">Software Developers Worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Trends */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Future of Mobile Development</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <FaLightbulb className="mr-3 text-blue-600" />
                AI & Machine Learning
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• AI-powered app features</li>
                <li>• Machine learning integration</li>
                <li>• Personalized user experiences</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <MdPhoneIphone className="mr-3 text-green-600" />
                Next-Gen Technologies
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 5G network integration</li>
                <li>• AR/VR mobile experiences</li>
                <li>• IoT device connectivity</li>
                <li>• Edge computing</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <MdSecurity className="mr-3 text-purple-600" />
                Security & Privacy
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Enhanced app security</li>
                <li>• Privacy-first development</li>
                <li>• Biometric authentication</li>
                <li>• Secure data handling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Mobile Future?</h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Join millions of developers creating innovative mobile experiences and shape how billions of people interact with technology every day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Start Your Development Journey
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Explore Mobile Development
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
