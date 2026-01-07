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
  FaBuilding,
  FaBriefcase,
  FaAward,
  FaFileAlt,
  FaCalculator,
  FaGlobe,
  FaUserTie
} from 'react-icons/fa';

export default function SSCCGLPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's degree from recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "20-32 years (relaxation for reserved categories)" },
    { icon: FaFileAlt, title: "Attempts", detail: "No restriction on attempts" }
  ];

  const examPattern = [
    { 
      tier: "Tier 1", 
      type: "Computer Based Test",
      duration: "1 hour",
      questions: "100 questions",
      description: "General Intelligence, Quantitative Aptitude, English, General Awareness"
    },
    { 
      tier: "Tier 2", 
      type: "Computer Based Test",
      duration: "2 hours each paper",
      questions: "4 Papers",
      description: "Quantitative Abilities, English Language, Statistics, General Studies"
    },
    { 
      tier: "Tier 3", 
      type: "Descriptive Paper",
      duration: "1 hour",
      questions: "Pen & Paper mode",
      description: "Essay Writing, Letter Writing, Precis Writing"
    }
  ];

  const jobProfiles = [
    { post: "Assistant Audit Officer", department: "CAG", salary: "₹44,900-1,42,400", grade: "Group B" },
    { post: "Accounts Officer", department: "Various Ministries", salary: "₹44,900-1,42,400", grade: "Group B" },
    { post: "Income Tax Inspector", department: "CBDT", salary: "₹44,900-1,42,400", grade: "Group B" },
    { post: "Central Excise Inspector", department: "CBIC", salary: "₹44,900-1,42,400", grade: "Group B" },
    { post: "Preventive Officer", department: "CBIC", salary: "₹44,900-1,42,400", grade: "Group B" },
    { post: "Examiner", department: "CBIC", salary: "₹44,900-1,42,400", grade: "Group B" },
    { post: "Sub Inspector", department: "CBI, NIA", salary: "₹35,400-1,12,400", grade: "Group C" },
    { post: "Assistant", department: "Various Ministries", salary: "₹25,500-81,100", grade: "Group C" }
  ];

  const syllabus = [
    { 
      subject: "General Intelligence & Reasoning",
      topics: ["Analogies", "Similarities", "Differences", "Space Visualization", "Problem Solving", "Analysis", "Judgment", "Decision Making", "Visual Memory", "Discrimination", "Observation", "Relationship", "Arithmetical Reasoning", "Verbal and Figure Classification", "Arithmetic Number Series"]
    },
    { 
      subject: "General Awareness",
      topics: ["History", "Geography", "Polity", "Economics", "General Science", "Current Affairs", "Sports", "Culture", "Books & Authors", "Important Schemes", "Portfolio", "People in News"]
    },
    { 
      subject: "Quantitative Aptitude",
      topics: ["Number Systems", "Computation of Whole Numbers", "Decimals", "Fractions", "Relationships between Numbers", "Profit & Loss", "Discount", "Partnership Business", "Mixture & Allegation", "Time & Distance", "Time & Work", "Percentage", "Ratio & Proportion", "Square Root", "Averages", "Interest", "Basic Algebraic Identities", "Triangle", "Regular Polygons", "Circle", "Right Prism", "Right Circular Cone", "Right Circular Cylinder", "Sphere", "Hemispheres", "Rectangular Parallelepiped", "Trigonometric Ratio", "Degree & Radian Measures", "Standard Identities", "Heights & Distances", "Histogram", "Frequency Polygon", "Bar Diagram & Pie Chart"]
    },
    { 
      subject: "English Comprehension",
      topics: ["Reading Comprehension", "Cloze Test", "Para Jumbles", "Miscellaneous", "Fill in the Blanks", "Multiple Meaning/Error Spotting", "Paragraph Completion"]
    }
  ];

  const preparationTips = [
    "Create a proper study schedule covering all subjects",
    "Practice previous year question papers regularly",
    "Take online mock tests to improve speed and accuracy",
    "Focus on weak areas and revise regularly",
    "Stay updated with current affairs from reliable sources",
    "Improve English vocabulary and grammar",
    "Practice mental mathematics for quick calculations",
    "Join online forums for doubt clearance and discussions"
  ];

  const careerGrowth = [
    { level: "Assistant/Inspector", experience: "0-5 years", salary: "₹25,500-81,100" },
    { level: "Section Officer", experience: "5-10 years", salary: "₹44,900-1,42,400" },
    { level: "Under Secretary", experience: "10-15 years", salary: "₹56,100-1,77,500" },
    { level: "Deputy Secretary", experience: "15-20 years", salary: "₹67,700-2,08,700" },
    { level: "Director", experience: "20-25 years", salary: "₹78,800-2,09,200" },
    { level: "Joint Secretary", experience: "25+ years", salary: "₹1,18,500-2,14,100" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBuilding className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SSC CGL Officer
              <span className="text-blue-300"> Complete Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to cracking SSC CGL and joining prestigious government posts across various departments
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is SSC CGL Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is SSC CGL?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Staff Selection Commission Combined Graduate Level (SSC CGL) is one of the most prestigious competitive examinations in India. It recruits candidates for various Group B and Group C posts in different ministries, departments, and organizations of the Government of India.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SSC CGL offers excellent career opportunities with job security, good salary packages, and opportunities for career advancement in the central government sector.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Job Security & Stability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Good Salary & Allowances
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Career Growth Opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Prestigious Government Posts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Work-Life Balance
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Relaxation</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-700">
                  <span className="font-medium">OBC:</span> 3 years relaxation
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">SC/ST:</span> 5 years relaxation
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">PWD:</span> 10 years relaxation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Pattern */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFileAlt className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Exam Pattern</h2>
            </div>
            <div className="grid gap-6">
              {examPattern.map((tier, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{tier.tier}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{tier.type}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Duration:</span>
                      <p className="font-medium text-gray-800">{tier.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Questions:</span>
                      <p className="font-medium text-gray-800">{tier.questions}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Mode:</span>
                      <p className="font-medium text-gray-800">{tier.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Profiles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Profiles & Salary</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-purple-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Post</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Department</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Salary Range</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {jobProfiles.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{job.post}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{job.department}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{job.salary}</td>
                      <td className="border border-gray-200 px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          job.grade === 'Group B' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {job.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Complete Syllabus</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {syllabus.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{subject.subject}</h3>
                  <div className="space-y-2">
                    {subject.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation Tips */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Preparation Strategy</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-100">
                  <FaAward className="text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Growth */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression</h2>
            </div>
            <div className="space-y-6">
              {careerGrowth.map((level, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="flex items-center">
                    <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-teal-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{level.level}</h3>
                      <p className="text-gray-600">{level.experience}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-green-600">{level.salary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your SSC CGL Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">Join millions of aspirants and secure your government job today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start Preparation
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}