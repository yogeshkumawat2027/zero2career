
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
  FaShieldAlt, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaCloud,
  FaEye,
  FaHeart,
  FaUserTie,
  FaLaptop,
  FaDatabase,
  FaBrain,
  FaCalculator,
  FaCode,
  FaChartPie,
  FaTable,
  FaMicrochip
} from 'react-icons/fa';

export default function DataAnalystPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in Math, Statistics, CS, or related field" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No specific age limit - skill-based profession" },
    { icon: FaCalculator, title: "Mathematical Skills", detail: "Strong foundation in statistics and mathematics" },
    { icon: FaLaptop, title: "Technical Skills", detail: "Proficiency in analytical tools and programming" }
  ];

  const specializationTypes = [
    { 
      specialization: "Business Analyst", 
      duration: "6-12 months", 
      requirement: "Business domain knowledge + SQL",
      cost: "₹50,000-1,50,000",
      description: "Analyzing business data to drive strategic decisions"
    },
    { 
      specialization: "Financial Data Analyst", 
      duration: "8-15 months", 
      requirement: "Finance knowledge + advanced Excel",
      cost: "₹70,000-2,00,000",
      description: "Analyzing financial markets and investment data"
    },
    { 
      specialization: "Marketing Data Analyst", 
      duration: "6-12 months", 
      requirement: "Marketing metrics + Google Analytics",
      cost: "₹40,000-1,20,000",
      description: "Analyzing customer behavior and campaign performance"
    },
    { 
      specialization: "Data Scientist", 
      duration: "12-24 months", 
      requirement: "Machine Learning + Python/R",
      cost: "₹1,00,000-3,00,000",
      description: "Advanced analytics and predictive modeling"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Data Analyst", years: "0-2 years", salary: "₹25,000-45,000/month" },
    { rank: "Data Analyst", years: "2-4 years", salary: "₹45,000-75,000/month" },
    { rank: "Senior Data Analyst", years: "4-7 years", salary: "₹75,000-1,25,000/month" },
    { rank: "Lead Data Analyst", years: "7-10 years", salary: "₹1,25,000-2,00,000/month" },
    { rank: "Data Analytics Manager", years: "10-15 years", salary: "₹2,00,000-3,50,000/month" },
    { rank: "Head of Analytics/Director", years: "15+ years", salary: "₹3,50,000-6,00,000/month" }
  ];

  const technicalSkills = [
    "SQL and Database Management",
    "Excel (Advanced Functions & Pivot Tables)",
    "Python or R Programming",
    "Statistical Analysis Methods",
    "Data Visualization (Tableau/Power BI)",
    "Machine Learning Basics",
    "Business Intelligence Tools",
    "Data Cleaning and Preprocessing"
  ];

  const topInstitutes = [
    { institute: "Indian Statistical Institute (ISI)", location: "Kolkata, Bangalore", type: "Government", duration: "2 years (M.Stat)" },
    { institute: "Indian Institute of Science (IISc)", location: "Bangalore", type: "Government", duration: "2 years (M.Tech)" },
    { institute: "Great Lakes Institute", location: "Chennai, Gurgaon", type: "Private", duration: "11 months" },
    { institute: "Jigsaw Academy", location: "Online/Bangalore", type: "Private", duration: "6-12 months" },
    { institute: "UpGrad", location: "Online", type: "Online", duration: "8-18 months" },
    { institute: "Coursera/edX Specializations", location: "Online", type: "Online", duration: "3-9 months" }
  ];

  const toolsAndTechnologies = [
    "SQL & NoSQL Databases",
    "Python (Pandas, NumPy, Matplotlib)", 
    "R (ggplot2, dplyr, tidyr)",
    "Tableau & Power BI",
    "Excel & Google Sheets",
    "Apache Spark",
    "Jupyter Notebooks",
    "Git Version Control",
    "AWS/Azure Cloud Platforms",
    "Google Analytics",
    "SAS & SPSS",
    "Apache Kafka"
  ];

  const industries = [
    { industry: "Banking & Financial Services", icon: FaMoneyBillWave },
    { industry: "E-commerce & Retail", icon: FaChartBar },
    { industry: "Healthcare & Pharmaceuticals", icon: FaHeart },
    { industry: "Technology Companies", icon: FaMicrochip },
    { industry: "Telecommunications", icon: FaCloud },
    { industry: "Consulting Firms", icon: FaUsers },
    { industry: "Government & Public Sector", icon: FaShieldAlt },
    { industry: "Media & Entertainment", icon: FaChartPie }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-teal-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaChartBar className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-green-300"> Data Analyst</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering data analysis and building a successful career in the data-driven world
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Data Analyst Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Data Analyst?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Data Analyst is a professional who collects, processes, and performs statistical analyses on large datasets. They transform raw data into meaningful insights that help organizations make informed business decisions and solve complex problems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Data analysts work with various tools and technologies to identify trends, patterns, and correlations in data, creating visualizations and reports that communicate findings to stakeholders across different business functions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collect and clean data from multiple sources
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Perform statistical analysis and modeling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Create data visualizations and dashboards
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Generate reports and present insights
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborate with cross-functional teams
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Preferred Qualifications</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Degree Fields:</span> Statistics, Mathematics, Computer Science, Economics, Engineering
                </div>
                <div className="text-black">
                  <span className="font-medium">Certifications:</span> Google Analytics, Microsoft Power BI, Tableau Desktop Specialist
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Data Analytics Specializations</h2>
            </div>
            <div className="space-y-6">
              {specializationTypes.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{spec.specialization}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{spec.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{spec.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{spec.cost}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{spec.description}</span>
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
              <FaCode className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools and Technologies */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaDatabase className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Tools & Technologies</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {toolsAndTechnologies.map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Data Analytics Institutes in India</h2>
            </div>
            <div className="space-y-4">
              {topInstitutes.map((institute, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{institute.institute}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        institute.type === 'Government' ? 'bg-green-200 text-green-800' : 
                        institute.type === 'Online' ? 'bg-purple-200 text-purple-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
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
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-3 gap-4 items-center">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBrain className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-pink-100">
                  <industry.icon className="text-4xl text-pink-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800">{industry.industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Development Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development Path</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Master Foundation Skills</h3>
                  <p className="text-gray-600">Learn SQL, Excel, basic statistics, and at least one programming language (Python/R)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Portfolio Projects</h3>
                  <p className="text-gray-600">Create 3-5 data analysis projects showcasing different skills and domains</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gain Practical Experience</h3>
                  <p className="text-gray-600">Secure internships, freelance projects, or entry-level positions to apply your skills</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Specialize & Get Certified</h3>
                  <p className="text-gray-600">Choose a domain specialization and pursue relevant professional certifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Advance & Lead</h3>
                  <p className="text-gray-600">Move into senior roles, team leadership, or transition to data science</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Learning Platforms & Certifications</h3>
                <div className="space-y-3">
                  <a href="https://www.coursera.org/professional-certificates/google-data-analytics" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Google Data Analytics Certificate</div>
                      <div className="text-sm text-gray-600">Industry-recognized certification program</div>
                    </div>
                  </a>
                  <a href="https://www.tableau.com/learn/training" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Tableau Training & Certification</div>
                      <div className="text-sm text-gray-600">Data visualization expertise</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice with real datasets from Kaggle and public sources</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong business acumen and domain knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Learn to tell compelling stories with data</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest tools and technologies</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with data professionals and join communities</span>
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

