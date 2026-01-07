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
  FaBuilding, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaBriefcase,
  FaAward,
  FaFileAlt,
  FaCalculator,
  FaUserTie
} from 'react-icons/fa';

export default function SSCCHSLPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "12th Pass from recognized board" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "18-27 years (relaxation for reserved categories)" },
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
      type: "Descriptive Paper",
      duration: "1 hour",
      questions: "Essay/Letter/Application Writing",
      description: "Essay Writing in English/Hindi (100 marks)"
    },
    { 
      tier: "Tier 3", 
      type: "Skill Test/Typing Test",
      duration: "15-30 minutes",
      questions: "Skill based",
      description: "Data Entry Operator, LDC typing test (English/Hindi)"
    }
  ];

  const jobProfiles = [
    { post: "Lower Division Clerk (LDC)", department: "Various Ministries", salary: "₹19,900-63,200", grade: "Group C" },
    { post: "Junior Secretariat Assistant (JSA)", department: "Various Ministries", salary: "₹19,900-63,200", grade: "Group C" },
    { post: "Postal Assistant", department: "Department of Posts", salary: "₹25,500-81,100", grade: "Group C" },
    { post: "Sorting Assistant", department: "Department of Posts", salary: "₹25,500-81,100", grade: "Group C" },
    { post: "Data Entry Operator (DEO)", department: "Various Ministries", salary: "₹25,500-81,100", grade: "Group C" },
    { post: "Court Clerk", department: "High Courts", salary: "₹19,900-63,200", grade: "Group C" }
  ];

  const syllabus = [
    { 
      subject: "General Intelligence",
      topics: ["Analogies", "Similarities and Differences", "Space Visualization", "Spatial Orientation", "Problem Solving", "Analysis", "Judgment", "Decision Making", "Visual Memory", "Discrimination", "Observation", "Relationship Concepts", "Arithmetical Reasoning", "Figural Classification", "Arithmetic Number Series", "Non-verbal Series", "Coding and Decoding", "Statement Conclusion", "Syllogistic Reasoning"]
    },
    { 
      subject: "English Language",
      topics: ["Reading Comprehension", "Cloze Test", "Para Jumbles", "Miscellaneous", "Fill in the Blanks", "Multiple Meaning/Error Spotting", "Paragraph Completion", "Synonyms/Homonyms", "Antonyms", "Sentence Completion", "Phrase and Idioms", "One Word Substitution", "Improvement of Sentences", "Active/Passive Voice", "Conversion into Direct/Indirect narration"]
    },
    { 
      subject: "Quantitative Aptitude",
      topics: ["Number Systems", "Computation of Whole Numbers", "Decimals", "Fractions", "Relationships between numbers", "Profit and Loss", "Discount", "Partnership Business", "Mixture and Alligation", "Time and Distance", "Time & Work", "Percentage", "Ratio & Proportion", "Square root", "Averages", "Interest", "Basic algebraic identities of School Algebra", "Graphs of Linear Equations", "Triangle and its various kinds of centres", "Congruence and similarity of triangles", "Circle and its chords", "tangents", "angles subtended by chords of a circle", "common tangents to two or more circles", "Regular Polygons", "Right Prism", "Right Circular Cone", "Right Circular Cylinder", "Sphere", "Hemispheres", "Rectangular Parallelepiped", "Regular Right Pyramid with triangular or square base", "Trigonometric ratio", "Degree and Radian Measures", "Standard Identities", "Complementary angles", "Heights and Distances", "Histogram", "Frequency polygon", "Bar diagram & Pie chart"]
    },
    { 
      subject: "General Awareness",
      topics: ["History", "Culture", "Geography", "Economic Scene", "General Policy", "Scientific Research", "Current Affairs", "Books and Authors", "Sports", "Important Schemes", "Important Days", "Portfolio", "People in News"]
    }
  ];

  const preparationTips = [
    "Focus on building strong fundamentals in all four sections",
    "Practice previous year question papers regularly",
    "Take online mock tests to improve speed and accuracy",
    "Work on improving English vocabulary and grammar",
    "Stay updated with current affairs from reliable sources",
    "Practice mental mathematics for quick calculations",
    "Learn shortcut methods for quantitative aptitude",
    "Join online study groups for doubt clearance"
  ];

  const careerGrowth = [
    { level: "LDC/JSA", experience: "0-5 years", salary: "₹19,900-63,200" },
    { level: "Upper Division Clerk", experience: "5-10 years", salary: "₹25,500-81,100" },
    { level: "Assistant", experience: "10-15 years", salary: "₹35,400-1,12,400" },
    { level: "Section Officer", experience: "15-20 years", salary: "₹44,900-1,42,400" },
    { level: "Under Secretary", experience: "20-25 years", salary: "₹56,100-1,77,500" },
    { level: "Deputy Secretary", experience: "25+ years", salary: "₹67,700-2,08,700" }
  ];

  const skillTests = [
    { post: "Data Entry Operator", test: "Data Entry Speed Test", requirement: "2000 key depressions per hour" },
    { post: "LDC/JSA", test: "Typing Test", requirement: "35 WPM in English OR 30 WPM in Hindi" },
    { post: "Postal Assistant", test: "Typing Test", requirement: "35 WPM in English OR 30 WPM in Hindi" },
    { post: "Court Clerk", test: "Typing Test", requirement: "35 WPM in English OR 30 WPM in Hindi" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-teal-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBuilding className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SSC CHSL Officer
              <span className="text-green-300"> Complete Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to cracking SSC CHSL and securing clerical and data entry positions in government departments
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is SSC CHSL Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is SSC CHSL?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Staff Selection Commission Combined Higher Secondary Level (SSC CHSL) is a national level competitive examination conducted by SSC for recruitment to various Group C posts such as Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Postal Assistant, Sorting Assistant, and Data Entry Operator in various Ministries/Departments of Government of India.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This examination is perfect for 12th pass candidates looking to start their career in government sector with good job security and growth opportunities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Entry level government positions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Job Security & Stability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Regular Salary & Allowances
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Career Advancement Opportunities
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
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
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

        {/* Skill Tests */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCalculator className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Skill Test Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {skillTests.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.post}</h3>
                  <div className="mb-3">
                    <span className="text-sm text-gray-600">Test Type:</span>
                    <p className="font-medium text-gray-800">{skill.test}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Requirement:</span>
                    <p className="font-medium text-teal-600">{skill.requirement}</p>
                  </div>
                </div>
              ))}
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
                    {subject.topics.slice(0, 8).map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                    {subject.topics.length > 8 && (
                      <div className="text-sm text-gray-500 italic">
                        ...and {subject.topics.length - 8} more topics
                      </div>
                    )}
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
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your SSC CHSL Journey?</h2>
            <p className="text-xl mb-8 text-green-100">Join thousands of aspirants and secure your government job today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors inline-flex items-center">
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