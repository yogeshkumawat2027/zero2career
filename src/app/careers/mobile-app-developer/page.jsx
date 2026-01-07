import Link from 'next/link';
import React from 'react';
import { 
  FaMobile, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaCode, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaLaptop,
  FaRocket,
  FaHandshake,
  FaUserTie,
  FaCrown,
  FaAndroid,
  FaApple,
  FaReact,
  FaTools,
  FaLightbulb,
  FaDesktop,
  FaCloud,
  FaDatabase
} from 'react-icons/fa';

export const metadata = {
  title: "Mobile App Developer Career Guide 2025 | Skills, Salary & Learning Path | Zero2Career",
  description: "Complete Mobile App Developer career guide covering Android/iOS development, React Native, Flutter, programming languages, salary expectations, and step-by-step learning roadmap.",
  keywords: "Mobile App Developer career, Android development, iOS development, React Native, Flutter, mobile programming, app developer salary, mobile development skills, smartphone apps",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/mobile-app-developer"
  },
  openGraph: {
    title: "Become a Mobile App Developer - Complete Career Guide 2025",
    description: "Discover everything about Mobile App Developer career: Android/iOS development, frameworks, programming languages, salary expectations, and comprehensive learning roadmap.",
    url: "https://zero2career.in/careers/mobile-app-developer",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mobile App Developer Career Guide - Zero2Career"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Mobile App Developer - Complete Career Guide 2025",
    description: "Comprehensive guide to Mobile App Developer career: Android/iOS development, frameworks, salary & learning roadmap for mobile development success.",
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"],
  }
};

export default function MobileAppDeveloperPage() {
  const skillRequirements = [
    { icon: FaCode, title: "Programming Languages", detail: "Java, Kotlin, Swift, Dart, JavaScript" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in CS/IT (preferred) or self-taught" },
    { icon: FaTools, title: "Development Tools", detail: "Android Studio, Xcode, VS Code, Git" },
    { icon: FaLightbulb, title: "Problem Solving", detail: "Logical thinking and debugging skills" }
  ];

  const developmentPaths = [
    { 
      platform: "Android Development", 
      duration: "6-12 months", 
      languages: "Java, Kotlin",
      tools: "Android Studio, Gradle",
      complexity: "Beginner to Advanced",
      marketShare: "71% Global Market Share"
    },
    { 
      platform: "iOS Development", 
      duration: "6-12 months", 
      languages: "Swift, Objective-C",
      tools: "Xcode, Interface Builder",
      complexity: "Intermediate to Advanced",
      marketShare: "28% Global Market Share"
    },
    { 
      platform: "Cross-Platform (React Native)", 
      duration: "4-8 months", 
      languages: "JavaScript, TypeScript",
      tools: "React Native CLI, Expo",
      complexity: "Intermediate",
      marketShare: "Popular for Startups"
    },
    { 
      platform: "Cross-Platform (Flutter)", 
      duration: "4-8 months", 
      languages: "Dart",
      tools: "Flutter SDK, Android Studio",
      complexity: "Intermediate",
      marketShare: "Fast Growing Framework"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Mobile Developer", years: "0-2 years", salary: "₹3,00,000 - ₹6,00,000", level: "Entry Level" },
    { rank: "Mobile App Developer", years: "2-4 years", salary: "₹6,00,000 - ₹12,00,000", level: "Mid Level" },
    { rank: "Senior Mobile Developer", years: "4-6 years", salary: "₹12,00,000 - ₹20,00,000", level: "Senior Level" },
    { rank: "Lead Mobile Developer", years: "6-8 years", salary: "₹20,00,000 - ₹30,00,000", level: "Lead Level" },
    { rank: "Mobile Architecture Lead", years: "8-12 years", salary: "₹30,00,000 - ₹50,00,000", level: "Architecture Level" },
    { rank: "Principal Mobile Engineer", years: "12-15 years", salary: "₹50,00,000 - ₹80,00,000", level: "Principal Level" },
    { rank: "VP of Mobile Engineering", years: "15+ years", salary: "₹80,00,000 - ₹2,00,00,000", level: "Executive Level" }
  ];

  const technicalSkills = [
    "Programming Languages (Java/Kotlin/Swift)",
    "Mobile UI/UX Design Principles", 
    "Database Management (SQLite/Realm)",
    "RESTful APIs & Web Services",
    "Version Control (Git/GitHub)",
    "Mobile Testing & Debugging",
    "App Store Optimization (ASO)",
    "Push Notifications",
    "Location-Based Services",
    "Mobile Security Best Practices",
    "Cloud Integration (Firebase/AWS)",
    "Performance Optimization"
  ];

  const learningPhases = [
    { phase: "Foundation Learning", duration: "2-3 months", location: "Online/Bootcamp", focus: "Programming fundamentals, mobile concepts, basic UI development" },
    { phase: "Platform Specialization", duration: "4-6 months", location: "Self-study/Course", focus: "Deep dive into Android/iOS or cross-platform development" },
    { phase: "Project Development", duration: "2-3 months", location: "Personal Projects", focus: "Build portfolio apps, implement advanced features" },
    { phase: "Advanced Concepts", duration: "3-4 months", location: "Advanced Courses", focus: "Architecture patterns, testing, performance optimization" },
    { phase: "Industry Experience", duration: "6-12 months", location: "Internship/Job", focus: "Real-world development, team collaboration, production apps" },
    { phase: "Continuous Learning", duration: "Ongoing", location: "Various Platforms", focus: "New frameworks, emerging technologies, leadership skills" }
  ];

  const appTypes = [
    { type: "E-commerce Apps", responsibility: "Shopping platforms, payment integration, inventory management" },
    { type: "Social Media Apps", responsibility: "User interaction, real-time messaging, content sharing" },
    { type: "Healthcare Apps", responsibility: "Patient management, telemedicine, health tracking" },
    { type: "Financial Apps", responsibility: "Banking, investment tracking, cryptocurrency platforms" },
    { type: "Educational Apps", responsibility: "Learning platforms, course management, interactive content" },
    { type: "Gaming Apps", responsibility: "Mobile games, in-app purchases, multiplayer functionality" }
  ];

  const frameworks = [
    "React Native",
    "Flutter", 
    "Xamarin",
    "Ionic",
    "PhoneGap/Cordova",
    "NativeScript",
    "Unity (for games)",
    "Kotlin Multiplatform",
    "Progressive Web Apps (PWA)",
    "Apache Cordova"
  ];

  const developmentTools = [
    { tool: "IDE & Editors", technologies: "Android Studio, Xcode, VS Code, IntelliJ IDEA" },
    { tool: "Version Control", technologies: "Git, GitHub, GitLab, Bitbucket" },
    { tool: "Design Tools", technologies: "Figma, Adobe XD, Sketch, Zeplin" },
    { tool: "Testing Tools", technologies: "Espresso, XCTest, Detox, Appium" },
    { tool: "Analytics", technologies: "Google Analytics, Firebase Analytics, Mixpanel" },
    { tool: "Backend Services", technologies: "Firebase, AWS Amplify, Supabase, Parse" }
  ];

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 mt-[100px] sm:mt-0">
      {/* Mobile Spacing */}
      <div className="block lg:hidden h-4"></div>
      
      {/* Hero Section */}
      <div className="w-full relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaMobile className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-purple-300"> Mobile App Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering mobile app development and building innovative applications for millions of users worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Mobile App Developer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Mobile App Developer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Mobile App Developer is a software professional who creates applications for mobile devices such as smartphones and tablets. They design, develop, test, and maintain mobile applications for various platforms including Android, iOS, or cross-platform solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mobile app developers work with programming languages, frameworks, and tools to create user-friendly, efficient, and innovative mobile applications that solve real-world problems and enhance user experiences.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Design and develop mobile applications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Write clean, maintainable code
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Test and debug applications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Optimize app performance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborate with UI/UX designers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillRequirements.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Getting Started Tips</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Beginners:</span> Start with online courses and tutorials
                </div>
                <div className="text-black">
                  <span className="font-medium">Practice:</span> Build personal projects regularly
                </div>
                <div className="text-black">
                  <span className="font-medium">Portfolio:</span> Showcase your apps on GitHub
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Platforms */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Mobile Development Platforms</h2>
            </div>
            <div className="space-y-6">
              {developmentPaths.map((path, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{path.platform}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-orange-600 mr-2" />
                      <span className="text-gray-700 text-sm">{path.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{path.languages}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-700 text-sm">{path.tools}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{path.complexity}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{path.marketShare}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Frameworks */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRocket className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular Mobile Development Frameworks</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {frameworks.map((framework, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-3 border border-indigo-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-indigo-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{framework}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Roadmap */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Learning Roadmap & Development Path</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Follow this comprehensive learning path to become a skilled mobile app developer. The roadmap covers everything from basic programming concepts to advanced mobile development techniques and industry best practices.
            </p>
            <div className="space-y-4">
              {learningPhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-2" />
                      <span className="text-gray-700 font-medium">{phase.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-blue-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.location}</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">{phase.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Tools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Development Tools</h2>
            </div>
            <div className="space-y-4">
              {developmentTools.map((category, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaDesktop className="text-emerald-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{category.tool}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{category.technologies}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Categories */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLaptop className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular App Categories</h2>
            </div>
            <div className="space-y-4">
              {appTypes.map((app, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaCrown className="text-pink-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{app.type}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{app.responsibility}</p>
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
              <FaChartLine className="text-3xl text-violet-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="overflow-x-auto">
              <div className="space-y-4">
                {careerHierarchy.map((position, index) => (
                  <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index === careerHierarchy.length - 1 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200'}`}>
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="text-violet-600 mr-2" />
                        <span className="text-gray-700">{position.years}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMoneyBillWave className="text-green-600 mr-2" />
                        <span className="text-gray-700 font-medium">{position.salary}</span>
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          position.level === 'Entry Level' ? 'bg-green-200 text-green-800' :
                          position.level === 'Executive Level' ? 'bg-purple-200 text-purple-800' :
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
          </div>
        </section>

        {/* Learning Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Mobile Developer Learning Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Choose Your Platform (Month 1)</h3>
                  <p className="text-gray-600">Decide between Android, iOS, or cross-platform development based on your goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Learn Programming Fundamentals (Months 2-3)</h3>
                  <p className="text-gray-600">Master the core programming language for your chosen platform</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Your First App (Months 4-5)</h3>
                  <p className="text-gray-600">Create simple applications to practice and understand the development workflow</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Advanced Features & Portfolio (Months 6-8)</h3>
                  <p className="text-gray-600">Learn advanced concepts and build a strong portfolio of applications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Job Search & Professional Growth</h3>
                  <p className="text-gray-600">Apply for positions, contribute to open source, and continue learning new technologies</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Learning Platforms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Official Documentation</h3>
                <div className="space-y-3">
                  <a href="https://developer.android.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaAndroid className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Android Developers</div>
                      <div className="text-sm text-gray-600">Official Android development documentation and guides</div>
                    </div>
                  </a>
                  <a href="https://developer.apple.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaApple className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Apple Developer</div>
                      <div className="text-sm text-gray-600">iOS development resources and Xcode documentation</div>
                    </div>
                  </a>
                  <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-200 hover:shadow-md transition-shadow group">
                    <FaReact className="text-cyan-600 mr-3 group-hover:text-cyan-800" />
                    <div>
                      <div className="font-medium text-gray-800">React Native</div>
                      <div className="text-sm text-gray-600">Cross-platform mobile development framework</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Learning Strategy</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Start with online courses and tutorials</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build projects to practice coding skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Join developer communities and forums</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest mobile trends</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Publish apps to app stores for experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
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
