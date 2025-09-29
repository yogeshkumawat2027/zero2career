import Link from 'next/link';
import React from 'react';
import {
  FaRobot,
  FaGraduationCap,
  FaCalendarAlt,
  FaClipboardCheck,
  FaBookOpen,
  FaTrophy,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUsers,
  FaBrain,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaLaptopCode,
  FaDatabase,
  FaChartBar,
  FaUserTie,
  FaCrown,
  FaCode,
  FaBuilding,
  FaSitemap,
  FaLeaf,
  FaFlask,
  FaMicrochip,
  FaEye,
  FaLanguage,
  FaNetworkWired
} from 'react-icons/fa';

export default function AIMLEngineerPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in CS/IT/Engineering or related field" },
    { icon: FaLaptopCode, title: "Programming", detail: "Proficiency in Python, R, or similar languages" },
    { icon: FaDatabase, title: "Mathematics", detail: "Strong foundation in statistics and linear algebra" },
    { icon: FaBrain, title: "Skills", detail: "Analytical thinking and problem-solving abilities" }
  ];

  const examStructure = [
    {
      phase: "Bachelor's Degree (Engineering/CS/IT)",
      duration: "4 Years",
      papers: "Core CS + Math subjects",
      marks: "University/JEE Exams",
      nature: "Foundation in programming & mathematics",
      qualifying: "12th PCM + JEE/State Engineering entrance"
    },
    {
      phase: "Specialization Courses (AI/ML/Data Science)",
      duration: "6-18 months",
      papers: "Online/Offline certifications",
      marks: "Course completion certificates",
      nature: "Specialized AI/ML training",
      qualifying: "Basic programming knowledge"
    },
    {
      phase: "Master's in AI/ML/Data Science",
      duration: "2 Years",
      papers: "Advanced AI/ML subjects + Research",
      marks: "University Exams + Thesis",
      nature: "Advanced degree with specialization",
      qualifying: "Bachelor's degree + GATE/University entrance"
    },
    {
      phase: "Industry Certifications",
      duration: "Ongoing",
      papers: "Platform-specific certifications",
      marks: "Certification exams",
      nature: "AWS, Google Cloud, Microsoft Azure AI",
      qualifying: "Experience + Platform knowledge"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior AI/ML Engineer", years: "0-2 years", salary: "₹6 - ₹12 Lakhs/annum", level: "Entry Level" },
    { rank: "AI/ML Engineer", years: "2-5 years", salary: "₹12 - ₹25 Lakhs/annum", level: "Mid Level" },
    { rank: "Senior AI/ML Engineer", years: "5-8 years", salary: "₹25 - ₹45 Lakhs/annum", level: "Senior Level" },
    { rank: "Principal AI/ML Engineer", years: "8-12 years", salary: "₹45 - ₹80 Lakhs/annum", level: "Principal Level" },
    { rank: "AI/ML Architect", years: "10+ years", salary: "₹60 Lakhs - ₹1.5 Crores/annum", level: "Architecture" },
    { rank: "Head of AI/ML", years: "12+ years", salary: "₹80 Lakhs - ₹2+ Crores/annum", level: "Leadership" },
    { rank: "Chief AI Officer", years: "15+ years", salary: "₹1+ Crores/annum", level: "C-Suite" }
  ];

  const keySubjects = [
    "Machine Learning Algorithms",
    "Deep Learning & Neural Networks",
    "Natural Language Processing",
    "Computer Vision",
    "Statistics & Probability",
    "Linear Algebra & Calculus",
    "Data Structures & Algorithms",
    "Database Management",
    "Big Data Technologies",
    "Cloud Computing",
    "Python/R Programming",
    "MLOps & Model Deployment"
  ];

  const specializations = [
    "Machine Learning Engineering",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Reinforcement Learning",
    "MLOps & Model Deployment",
    "AI Research",
    "Robotics & Automation",
    "Conversational AI",
    "Recommender Systems",
    "Time Series Analysis",
    "Generative AI"
  ];

  const aimlRoles = [
    { role: "Machine Learning Engineer", responsibility: "Develop and deploy ML models for production systems" },
    { role: "Data Scientist", responsibility: "Extract insights from data using statistical and ML techniques" },
    { role: "AI Research Scientist", responsibility: "Conduct cutting-edge research in artificial intelligence" },
    { role: "Computer Vision Engineer", responsibility: "Develop image and video processing AI applications" },
    { role: "NLP Engineer", responsibility: "Build language understanding and generation systems" },
    { role: "MLOps Engineer", responsibility: "Manage ML model lifecycle and deployment infrastructure" },
    { role: "AI Product Manager", responsibility: "Define AI product strategy and manage development" },
    { role: "Robotics Engineer", responsibility: "Design intelligent robotic systems and automation" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaRobot className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete Guide to Becoming an
              <span className="text-purple-300"> AI/ML Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              A comprehensive roadmap to a career in artificial intelligence and machine learning
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What is an AI/ML Engineer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an AI/ML Engineer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An AI/ML Engineer is a specialized software engineer who designs, develops, and deploys artificial intelligence and machine learning systems. They bridge the gap between data science research and practical software applications.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  These professionals work with large datasets, create predictive models, implement neural networks, and build intelligent systems that can learn and make decisions. They are at the forefront of technological innovation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Design and implement machine learning algorithms
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Build and train neural networks and deep learning models
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Deploy AI models to production environments
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Optimize model performance and scalability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborate with data scientists and software teams
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria & Prerequisites</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Common Entry Paths</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Traditional Route:</span> Engineering → AI/ML specialization
                </div>
                <div className="text-black">
                  <span className="font-medium">Bootcamp Route:</span> Intensive AI/ML training programs
                </div>
                <div className="text-black">
                  <span className="font-medium">Self-taught Route:</span> Online courses + projects + certifications
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Education & Certification Structure</h2>
            </div>
            <div className="space-y-6">
              {examStructure.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{exam.marks}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{exam.nature}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{exam.qualifying}</span>
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
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential AI/ML Subjects & Skills</h2>
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
              <FaBrain className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">AI/ML Specializations</h2>
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

        {/* AI/ML Engineer Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLeaf className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Paths for AI/ML Engineers</h2>
            </div>
            <div className="space-y-4">
              {aimlRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaRobot className="text-blue-600 mr-3" />
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
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index === 6 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
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
                        position.level === 'C-Suite' ? 'bg-purple-200 text-purple-800' :
                        position.level === 'Leadership' ? 'bg-red-200 text-red-800' :
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Platforms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Learning Platforms</h3>
                <div className="space-y-3">
                  <a href="https://www.coursera.org/browse/data-science/machine-learning" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Coursera ML/AI Courses</div>
                      <div className="text-sm text-gray-600">Stanford, Andrew Ng's Machine Learning Course</div>
                    </div>
                  </a>
                  <a href="https://www.kaggle.com/learn" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-teal-600 mr-3 group-hover:text-teal-800" />
                    <div>
                      <div className="font-medium text-gray-800">Kaggle Learn</div>
                      <div className="text-sm text-gray-600">Free micro-courses in AI/ML and competitions</div>
                    </div>
                  </a>
                  <a href="https://www.fast.ai/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-purple-600 mr-3 group-hover:text-purple-800" />
                    <div>
                      <div className="font-medium text-gray-800">Fast.ai</div>
                      <div className="text-sm text-gray-600">Practical deep learning for coders</div>
                    </div>
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-gray-600 mr-3 group-hover:text-gray-800" />
                    <div>
                      <div className="font-medium text-gray-800">GitHub</div>
                      <div className="text-sm text-gray-600">Open source projects and portfolio building</div>
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
                      <span className="text-gray-700">Build a strong portfolio with real-world projects on GitHub</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Participate in Kaggle competitions and hackathons</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest AI research papers and trends</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Master both theory and practical implementation</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong software engineering and MLOps skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with AI/ML community and attend conferences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            <Link href='/careers'> Back to Careers</Link>
          </button>
        </div>
      </div>
    </main>
  );
}