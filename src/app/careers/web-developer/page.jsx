import Link from 'next/link';
import React from 'react';
import {
  FaUniversity,
  FaGraduationCap,
  FaCalendarAlt,
  FaClipboardCheck,
  FaBookOpen,
  FaTrophy,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUsers,
  FaGavel,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaLandmark,
  FaBalanceScale,
  FaHandshake,
  FaUserTie,
  FaCrown,
  FaBalanceScaleLeft,
  FaBuilding,
  FaSitemap,
  FaLeaf,
  FaCode,
  FaLaptopCode,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaMobile,
  FaCloud,
  FaGlobe,
  FaCog,
  FaRocket,
  FaPlay
} from 'react-icons/fa';

export const metadata = {
  title: "Web Developer Career Guide 2025 | Complete Training, Salary & Requirements | Zero2Career",
  description: "Comprehensive web developer career guide covering frontend, backend, full-stack development, salary expectations, skills required, and job opportunities in web development.",
  keywords: "web developer career, frontend developer, backend developer, full stack developer, web development salary, coding jobs, HTML CSS JavaScript, React Angular Vue",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/web-developer"
  },
  openGraph: {
    title: "Become a Web Developer - Complete Career Guide 2025",
    description: "Discover everything about web development careers: frontend, backend, full-stack training, salary expectations, and job opportunities in tech industry.",
    url: "https://zero2career.in/careers/web-developer",
    type: "article",
    images: [
      {
        url: "https://hr-gazette.com/wp-content/uploads/2023/03/software-developer-g1372d020e_1280.jpg",
        width: 1200,
        height: 630,
        alt: "Web Developer Career Guide - Zero2Career"
      }
    ],
    siteName: "Zero2Career"
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Career Guide 2025 | Training, Salary & Requirements",
    description: "Complete guide to becoming a web developer. Learn frontend, backend, full-stack development, salary expectations and tech career opportunities.",
    images: ["https://hr-gazette.com/wp-content/uploads/2023/03/software-developer-g1372d020e_1280.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function WebDeveloperPage() {

  const eligibilityData = [
    { icon: FaUserTie, title: "Background", detail: "No specific nationality requirements, skills and portfolio matter most" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in Computer Science, IT, or related field preferred" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No age restrictions, coding ability and problem-solving are key" },
    { icon: FaLandmark, title: "Portfolio", detail: "Strong GitHub profile and live project portfolio essential" }
  ];

  const examStructure = [
    {
      phase: "Web Development Bootcamp",
      duration: "3-6 Months",
      papers: "Project-based assessment",
      marks: "Portfolio evaluation",
      nature: "Hands-on coding projects and assignments",
      qualifying: "12th grade or equivalent"
    },
    {
      phase: "Bachelor's in Computer Science/IT",
      duration: "3-4 Years",
      papers: "Semester-wise exams + Projects",
      marks: "CGPA system + Technical portfolio",
      nature: "Theory + Practical + Industry projects",
      qualifying: "12th with PCM/good marks in any stream"
    },
    {
      phase: "Professional Certifications",
      duration: "1-6 Months",
      papers: "Technology-specific certifications",
      marks: "Certificate of completion + Skills test",
      nature: "Hands-on platform training (AWS, Google Cloud, etc.)",
      qualifying: "Basic programming knowledge"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Web Developer", years: "0-2 years", salary: "₹3 - ₹6 Lakhs/annum", level: "Entry Level" },
    { rank: "Frontend/Backend Developer", years: "1-3 years", salary: "₹5 - ₹12 Lakhs/annum", level: "Specialist" },
    { rank: "Full Stack Developer", years: "2-5 years", salary: "₹8 - ₹18 Lakhs/annum", level: "Intermediate" },
    { rank: "Senior Developer", years: "4-7 years", salary: "₹15 - ₹30 Lakhs/annum", level: "Senior Level" },
    { rank: "Tech Lead/Team Lead", years: "6-10 years", salary: "₹25 - ₹50 Lakhs/annum", level: "Leadership" },
    { rank: "Engineering Manager", years: "8-12 years", salary: "₹40 - ₹80 Lakhs/annum", level: "Management" },
    { rank: "CTO/Freelancer/Startup Owner", years: "10+ years", salary: "₹60 Lakhs - 2+ Crore/annum", level: "Executive" }
  ];

  const keySubjects = [
    "HTML5 & CSS3",
    "JavaScript & ES6+",
    "React.js/Angular/Vue.js",
    "Node.js & Express.js",
    "Database Management (SQL/NoSQL)",
    "RESTful APIs & GraphQL",
    "Git Version Control",
    "Cloud Services (AWS/Azure/GCP)",
    "DevOps & CI/CD",
    "Web Security & Performance"
  ];

  const specializations = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Mobile App Development",
    "DevOps Engineering",
    "Cloud Architecture",
    "UI/UX Development",
    "E-commerce Development",
    "Progressive Web Apps",
    "Blockchain Development",
    "API Development"
  ];

  const developerRoles = [
    { role: "Frontend Developer", responsibility: "Building user interfaces and client-side applications using modern frameworks" },
    { role: "Backend Developer", responsibility: "Developing server-side logic, databases, and API integrations" },
    { role: "Full Stack Developer", responsibility: "Working on both frontend and backend aspects of web applications" },
    { role: "Mobile App Developer", responsibility: "Creating mobile applications for iOS and Android platforms" },
    { role: "DevOps Engineer", responsibility: "Managing deployment pipelines, cloud infrastructure, and system automation" },
    { role: "Freelance Developer", responsibility: "Working independently on various web development projects for clients" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCode className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete Guide to Becoming a
              <span className="text-blue-300"> Web Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Build the future of the web - from dynamic websites to powerful web applications
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What is a Web Developer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Web Developer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A web developer is a technical professional who creates, builds, and maintains websites and web applications. They use programming languages, frameworks, and development tools to bring digital ideas to life, ensuring websites are functional, user-friendly, and performant across different devices and browsers.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Web developers work across various industries including technology, e-commerce, healthcare, finance, and entertainment. They combine technical expertise with problem-solving skills to create digital solutions that serve millions of users worldwide, from simple websites to complex web applications.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Frontend and backend development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Database design and management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    API development and integration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Website optimization and performance tuning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Debugging and testing applications
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria & Educational Path</h2>
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

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Educational Options</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Formal Education:</span> B.Tech CSE/IT, BCA, MCA, Diploma in Computer Applications
                </div>
                <div className="text-black">
                  <span className="font-medium">Alternative Paths:</span> Coding bootcamps, online courses, self-learning with strong portfolio
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examination Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Web Development Education & Training Structure</h2>
            </div>
            <div className="space-y-6">
              {examStructure.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-2" />
                      <span className="text-gray-700 text-sm">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">{exam.marks}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{exam.nature}</span>
                    </div>
                    <div>
                      <span className="text-xs text-indigo-600 font-medium">{exam.qualifying}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Note:</span> Web development industry highly values practical skills and portfolio over formal qualifications. Many successful developers are self-taught or learn through online platforms and bootcamps.
              </p>
            </div>
          </div>
        </section>

        {/* Key Subjects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Web Development Technologies</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keySubjects.map((subject, index) => (
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

        {/* Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Web Development Specializations</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {specializations.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Developer Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaPlay className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Paths for Web Developers</h2>
            </div>
            <div className="space-y-4">
              {developerRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaCrown className="text-purple-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{role.role}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{role.responsibility}</p>
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
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index >= 5 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
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
                        position.level === 'Management' || position.level === 'Executive' ? 'bg-purple-200 text-purple-800' :
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

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technologies & Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Development Technologies</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <FaDesktop className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Frontend</div>
                      <div className="text-sm text-gray-600">React, Vue.js, Angular, HTML5, CSS3, JavaScript</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <FaServer className="text-green-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Backend</div>
                      <div className="text-sm text-gray-600">Node.js, Python Django/Flask, PHP, Java Spring</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <FaDatabase className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Database</div>
                      <div className="text-sm text-gray-600">MySQL, PostgreSQL, MongoDB, Firebase</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Development Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a strong portfolio with live projects and GitHub repos</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Master both frontend and backend for full-stack opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest frameworks and industry best practices</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Contribute to open source and join developer communities</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Consider specializing in high-demand areas like cloud or mobile development</span>
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
