import Link from 'next/link';
import React from 'react';
import { 
  FaLaptopCode, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaTools, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaBriefcase,
  FaAward,
  FaFileAlt,
  FaUserTie,
  FaCog,
  FaPlane,
  FaHeadset,
  FaEye,
  FaShieldAlt,
  FaBroadcastTower,
  FaCode,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaRocket,
  FaLightbulb,
  FaGlobe,
  FaBrain,
  FaNetworkWired
} from 'react-icons/fa';

export const metadata = {
  title: "Software Developer Career Guide 2025 | Complete Programming, Skills & Salary Requirements | Zero2Career",
  description: "Comprehensive software developer career guide covering programming languages, development frameworks, job opportunities, salary expectations, and complete roadmap for coding careers in India.",
  keywords: "software developer career, programming jobs, coding career, software engineer salary India, web development, mobile app development, programming languages, tech jobs",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/software-developer"
  },
  openGraph: {
    title: "Become a Software Developer - Complete Programming Career Guide 2025",
    description: "Discover everything about software development career: programming skills, development frameworks, job opportunities, salary expectations, and coding career paths in India.",
    url: "https://zero2career.in/careers/software-developer", 
    type: "article",
    images: [
      {
        url: "https://www.dice.com/binaries/large/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg",
        width: 1200,
        height: 630,
        alt: "Software Developer Career Guide - Zero2Career"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Software Developer - Complete Programming Career Guide 2025",
    description: "Comprehensive guide to software development career: programming skills, frameworks, job opportunities, salary & coding career paths in India.",
    images: ["https://www.dice.com/binaries/large/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg"],
  }
};

export default function SoftwareDeveloperPage() {
  const eligibilityData = [
    { icon: FaBrain, title: "Logical Thinking", detail: "Strong problem-solving and analytical skills" },
    { icon: FaGraduationCap, title: "Education", detail: "B.Tech/B.E in Computer Science or related field" },
    { icon: FaCode, title: "Programming Skills", detail: "Proficiency in multiple programming languages" },
    { icon: FaUsers, title: "Collaboration", detail: "Team work and communication abilities" }
  ];

  const developmentAreas = [
    { 
      area: "Web Development", 
      duration: "3-6 months", 
      technologies: "HTML, CSS, JavaScript, React",
      salary: "₹4,00,000 - ₹15,00,000",
      demand: "Very High",
      specialization: "Frontend & Backend development"
    },
    { 
      area: "Mobile Development", 
      duration: "4-8 months", 
      technologies: "React Native, Flutter, Swift",
      salary: "₹5,00,000 - ₹18,00,000",
      demand: "High",
      specialization: "iOS & Android applications"
    },
    { 
      area: "Data Science & AI", 
      duration: "6-12 months", 
      technologies: "Python, ML, TensorFlow",
      salary: "₹6,00,000 - ₹25,00,000",
      demand: "Extremely High",
      specialization: "Machine Learning & Analytics"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Developer", years: "0-2 years", salary: "₹3,00,000 - ₹6,00,000", level: "Entry Level" },
    { rank: "Software Developer", years: "2-4 years", salary: "₹6,00,000 - ₹12,00,000", level: "Mid Level" },
    { rank: "Senior Developer", years: "4-7 years", salary: "₹12,00,000 - ₹20,00,000", level: "Senior Level" },
    { rank: "Tech Lead", years: "7-10 years", salary: "₹20,00,000 - ₹30,00,000", level: "Leadership" },
    { rank: "Engineering Manager", years: "10-15 years", salary: "₹30,00,000 - ₹50,00,000", level: "Management" },
    { rank: "CTO/VP Engineering", years: "15+ years", salary: "₹50,00,000 - ₹1,00,00,000+", level: "Executive" }
  ];

  const keyTechnologies = [
    "JavaScript & TypeScript",
    "Python & Java", 
    "React & Angular",
    "Node.js & Express",
    "Database Management (SQL/NoSQL)",
    "Cloud Platforms (AWS, Azure, GCP)",
    "DevOps & CI/CD",
    "Mobile Development",
    "Machine Learning & AI",
    "Cybersecurity Fundamentals"
  ];

  const learningPath = [
    { phase: "Foundation", duration: "3-6 months", topics: "Programming basics, data structures", focus: "Core computer science fundamentals and first programming language" },
    { phase: "Specialization", duration: "6-12 months", topics: "Web/Mobile/Data Science track", focus: "Choose specialization and build domain expertise" },
    { phase: "Advanced Skills", duration: "12-18 months", topics: "System design, architecture", focus: "Advanced concepts, design patterns, and scalability" },
    { phase: "Professional", duration: "18+ months", topics: "Leadership, business domain", focus: "Team leadership, business understanding, and innovation" }
  ];

  const developerRoles = [
    { role: "Frontend Developer", responsibility: "User interface and user experience development" },
    { role: "Backend Developer", responsibility: "Server-side logic, APIs, and database management" },
    { role: "Full Stack Developer", responsibility: "Both frontend and backend development" },
    { role: "Mobile Developer", responsibility: "iOS and Android application development" },
    { role: "DevOps Engineer", responsibility: "Deployment, infrastructure, and automation" },
    { role: "Data Scientist", responsibility: "Data analysis, machine learning, and AI solutions" }
  ];

  const programmingLanguages = [
    "JavaScript",
    "Python", 
    "Java",
    "TypeScript",
    "C++",
    "C#",
    "Go",
    "Rust",
    "Swift",
    "Kotlin",
    "PHP",
    "Ruby",
    "Scala",
    "R"
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0 overflow-x-hidden">
      {/* Mobile spacing fix */}
      <div className="block lg:hidden h-4"></div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 w-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <FaLaptopCode className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-blue-300"> Software Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to building a successful career in software development and creating innovative digital solutions
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* What is Software Development Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Software Development?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Software development is the process of designing, creating, testing, and maintaining software applications and systems. Software developers use programming languages, frameworks, and tools to build everything from websites and mobile apps to enterprise systems and artificial intelligence solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern software development spans various domains including web development, mobile applications, data science, artificial intelligence, cybersecurity, and cloud computing, offering diverse career opportunities in the digital economy.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Writing clean, efficient, and maintainable code
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Designing software architecture and systems
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Testing and debugging applications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborating with cross-functional teams
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Continuous learning and skill development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Skills & Requirements</h2>
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
                  <span className="font-medium">Mathematics:</span> Strong foundation in algorithms and logic
                </div>
                <div className="text-black">
                  <span className="font-medium">English:</span> Good communication for documentation
                </div>
                <div className="text-black">
                  <span className="font-medium">Continuous Learning:</span> Adapt to new technologies rapidly
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Areas Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCode className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Software Development Specializations</h2>
            </div>
            <div className="space-y-6">
              {developmentAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{area.area}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-2" />
                      <span className="text-gray-700 text-sm">{area.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{area.technologies}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">{area.salary}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{area.demand}</span>
                    </div>
                    <div>
                      <span className="text-xs text-green-600 font-medium">{area.specialization}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Technologies */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technologies & Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyTechnologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programming Languages */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCode className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular Programming Languages</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {programmingLanguages.map((language, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{language}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Learning & Development Path</h2>
            </div>
            <div className="space-y-6">
              {learningPath.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{phase.topics}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{phase.focus}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Path</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{career.rank}</h3>
                      <p className="text-gray-600 mt-1">Building and leading software development initiatives</p>
                    </div>
                    <div className="flex items-center space-x-8 text-right">
                      <div>
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-semibold text-gray-800">{career.years}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Annual Salary</div>
                        <div className="font-bold text-indigo-700">{career.salary}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Level</div>
                        <div className="font-medium text-blue-600">{career.level}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Software Developer Roles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {developerRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FaLaptopCode className="text-green-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{role.role}</h3>
                      <p className="text-gray-600">{role.responsibility}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaTrophy className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to Software Development Success</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaBrain className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Keep Learning</h3>
                <p className="text-blue-100">Stay updated with latest technologies and frameworks</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaCode className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Practice Coding</h3>
                <p className="text-blue-100">Build projects and solve programming challenges daily</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Join Community</h3>
                <p className="text-blue-100">Engage with developer communities and open source</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaRocket className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Build Portfolio</h3>
                <p className="text-blue-100">Create impressive projects showcasing your skills</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
