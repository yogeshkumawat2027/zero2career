import Link from 'next/link';
import React from 'react';
import { 
  FaChartBar, 
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
  FaDesktop,
  FaEye,
  FaHeart,
  FaStar,
  FaUserTie,
  FaDatabase,
  FaPlay,
  FaGamepad,
  FaFilm,
  FaMagic,
  FaCube,
  FaPencilAlt,
  FaLaptop,
  FaBrush,
  FaBrain,
  FaCode,
  FaCalculator,
  FaRobot,
  FaSearch,
  FaFlask
} from 'react-icons/fa';

export default function DataSciencePage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's in STEM field preferred" },
    { icon: FaBrain, title: "Analytical Mind", detail: "Strong logical and analytical thinking" },
    { icon: FaCode, title: "Programming", detail: "Proficiency in Python/R/SQL" },
    { icon: FaCalculator, title: "Mathematics", detail: "Statistics, calculus, linear algebra" }
  ];

  const entrySchemes = [
    { 
      scheme: "Bachelor's in Data Science", 
      duration: "3-4 years", 
      qualification: "10+2 with Math/Science",
      age: "17-25 years",
      description: "Comprehensive degree covering statistics, programming, and analytics"
    },
    { 
      scheme: "Master's in Data Science", 
      duration: "2 years", 
      qualification: "Bachelor's degree",
      age: "21-30 years",
      description: "Advanced degree for career transition or specialization"
    },
    { 
      scheme: "Professional Certificate", 
      duration: "6-12 months", 
      qualification: "Basic programming knowledge",
      age: "22+ years",
      description: "Industry-focused certification programs"
    },
    { 
      scheme: "Online Bootcamp", 
      duration: "3-9 months", 
      qualification: "High school + basic math",
      age: "Any age",
      description: "Intensive practical training programs"
    }
  ];

  const careerHierarchy = [
    { rank: "Data Analyst", years: "0-2 years", salary: "₹25,000 - ₹45,000" },
    { rank: "Junior Data Scientist", years: "1-3 years", salary: "₹45,000 - ₹70,000" },
    { rank: "Data Scientist", years: "3-5 years", salary: "₹70,000 - ₹1,20,000" },
    { rank: "Senior Data Scientist", years: "5-8 years", salary: "₹1,20,000 - ₹2,00,000" },
    { rank: "Lead Data Scientist", years: "8-12 years", salary: "₹2,00,000 - ₹3,50,000" },
    { rank: "Principal Data Scientist", years: "10-15 years", salary: "₹3,50,000 - ₹5,00,000" },
    { rank: "Data Science Manager", years: "12+ years", salary: "₹4,00,000 - ₹6,00,000" },
    { rank: "Chief Data Officer", years: "15+ years", salary: "₹6,00,000 - ₹10,00,000" }
  ];

  const skillsRequired = [
    "Statistical analysis and modeling",
    "Programming (Python, R, SQL)",
    "Machine learning algorithms",
    "Data visualization techniques",
    "Business understanding and domain knowledge",
    "Problem-solving and critical thinking",
    "Communication and presentation skills",
    "Data cleaning and preprocessing"
  ];

  const trainingInstitutes = [
    { academy: "Indian Statistical Institute", location: "Kolkata, Delhi, Bangalore", type: "Premier Institute", duration: "2-4 years" },
    { academy: "Indian Institute of Science", location: "Bangalore", type: "Research Institute", duration: "2-5 years" },
    { academy: "UpGrad", location: "Online", type: "Professional Training", duration: "11-18 months" },
    { academy: "Great Learning", location: "Multiple Cities", type: "Professional Training", duration: "6-12 months" },
    { academy: "Simplilearn", location: "Online/Blended", type: "Certification Programs", duration: "3-12 months" },
    { academy: "Jigsaw Academy", location: "Multiple Cities", type: "Specialized Training", duration: "6-24 months" }
  ];

  const softwareTools = [
    "Python (Pandas, NumPy, Scikit-learn)",
    "R Programming", 
    "SQL & Database Management",
    "Tableau / Power BI",
    "Apache Spark",
    "TensorFlow / PyTorch",
    "Jupyter Notebooks",
    "Git Version Control"
  ];

  const industryDomains = [
    { domain: "Healthcare & Pharmaceuticals", role: "Medical research, drug discovery, patient analytics" },
    { domain: "Financial Services", role: "Risk analysis, fraud detection, algorithmic trading" },
    { domain: "E-commerce & Retail", role: "Customer segmentation, recommendation systems" },
    { domain: "Technology & Software", role: "Product analytics, user behavior analysis" },
    { domain: "Manufacturing & Supply Chain", role: "Quality control, demand forecasting" },
    { domain: "Government & Public Sector", role: "Policy analysis, smart city initiatives" }
  ];

  const specializationAreas = [
    "Machine Learning Engineering",
    "Business Intelligence",
    "Deep Learning & AI",
    "Big Data Analytics",
    "Computer Vision",
    "Natural Language Processing",
    "Predictive Analytics",
    "Data Engineering"
  ];

  const keyTechnologies = [
    "Artificial Intelligence & ML",
    "Big Data Technologies",
    "Cloud Computing (AWS, Azure, GCP)",
    "Statistical Software",
    "Data Visualization Tools",
    "Database Technologies",
    "Programming Languages",
    "Version Control Systems"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaChartBar className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-blue-300"> Data Scientist</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to a career in data science, transforming raw data into actionable business insights
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Data Scientist Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Data Scientist?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Data Scientist is a professional who uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data. They combine expertise in statistics, programming, and domain knowledge to solve complex business problems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Data Scientists work across industries to identify trends, build predictive models, and provide data-driven recommendations that help organizations make informed decisions and gain competitive advantages.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Collecting and cleaning large datasets
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Building predictive models and algorithms
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Creating data visualizations and reports
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Collaborating with business stakeholders
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Presenting findings to decision-makers
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
              <FaClipboardCheck className="text-3xl text-blue-600 mr-4" />
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillsRequired.map((skill, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <FaCheckCircle className="text-yellow-600 mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Entry Schemes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Learning Paths & Education</h2>
            </div>
            <div className="space-y-6">
              {entrySchemes.map((scheme, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{scheme.scheme}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">{scheme.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{scheme.qualification}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-indigo-700">{scheme.age}</span>
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

        {/* Software Tools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaDesktop className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Tools & Technologies</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softwareTools.map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{tool}</span>
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
              <FaRobot className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Technology Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keyTechnologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMagic className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specializationAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4 border border-pink-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-pink-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Data Science Institutes</h2>
            </div>
            <div className="space-y-4">
              {trainingInstitutes.map((institute, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{institute.academy}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.location}</span>
                    </div>
                    <div>
                      <span className="bg-teal-200 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                        {institute.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.duration}</span>
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
              <FaChartLine className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
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
                      {index === careerHierarchy.length - 1 && <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Executive</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Domains */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStar className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Applications</h2>
            </div>
            <div className="space-y-4">
              {industryDomains.map((domain, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{domain.domain}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{domain.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Development Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development Path</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Foundation</h3>
                  <p className="text-gray-600">Master mathematics, statistics, and programming fundamentals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Learn Tools & Technologies</h3>
                  <p className="text-gray-600">Gain proficiency in Python, R, SQL, and data visualization tools</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Portfolio</h3>
                  <p className="text-gray-600">Create impressive projects showcasing real-world problem-solving</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gain Experience</h3>
                  <p className="text-gray-600">Start with internships, junior roles, or freelance projects</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Specialize & Lead</h3>
                  <p className="text-gray-600">Choose specialization and advance to senior technical or leadership roles</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Career Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Learning Platforms</h3>
                <div className="space-y-3">
                  <a href="https://www.kaggle.com/learn" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Kaggle Learn</div>
                      <div className="text-sm text-gray-600">Free micro-courses in data science</div>
                    </div>
                  </a>
                  <a href="https://www.coursera.org/browse/data-science" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-orange-600 mr-3 group-hover:text-orange-800" />
                    <div>
                      <div className="font-medium text-gray-800">Coursera Data Science</div>
                      <div className="text-sm text-gray-600">University courses and specializations</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a strong GitHub portfolio with real projects</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Participate in Kaggle competitions and data challenges</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with data science community</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest tools and techniques</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong business understanding</span>
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