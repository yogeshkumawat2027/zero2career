import React from 'react'
import { FaGavel, FaCalculator, FaFileInvoiceDollar, FaShieldAlt, FaUsers, FaChartLine, FaLaptopCode, FaGraduationCap, FaBuilding, FaHandshake, FaCertificate, FaTrophy, FaRocket, FaLightbulb } from 'react-icons/fa'
import { MdSecurity, MdAccountBalance, MdGavel, MdAnalytics, MdComputer, MdSchool, MdWork, MdTrendingUp, MdVerifiedUser, MdAssignment } from 'react-icons/md'

export default function IncomeTaxInspectorCareer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <FaCalculator className="text-6xl" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Income Tax Inspector
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Serve the Nation Through Tax Administration and Revenue Collection
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Government Service</span>
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Tax Administration</span>
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Revenue Collection</span>
              <span className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">Financial Investigation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Income Tax Inspector?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-lg transition-all duration-300">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Job Security</h3>
              <p className="text-gray-600">Government position with excellent job security and benefits</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-lg transition-all duration-300">
              <FaChartLine className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Career Growth</h3>
              <p className="text-gray-600">Clear promotion path from Inspector to Commissioner level</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-lg transition-all duration-300">
              <FaHandshake className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Public Service</h3>
              <p className="text-gray-600">Serve the nation by ensuring tax compliance and revenue collection</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-100 hover:shadow-lg transition-all duration-300">
              <MdAccountBalance className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Financial Stability</h3>
              <p className="text-gray-600">Competitive salary with regular increments and allowances</p>
            </div>
          </div>
        </div>
      </div>

      {/* Career Specializations */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Specialization Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <FaFileInvoiceDollar className="text-3xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tax Assessment</h3>
              <p className="text-gray-600 mb-4">Evaluate taxpayer returns, conduct assessments, and ensure compliance with tax laws</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Return Processing</li>
                <li>• Assessment Orders</li>
                <li>• Tax Computation</li>
                <li>• Compliance Verification</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <MdSecurity className="text-3xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Investigation & Raids</h3>
              <p className="text-gray-600 mb-4">Conduct searches, seizures, and investigations for tax evasion cases</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Search Operations</li>
                <li>• Evidence Collection</li>
                <li>• Asset Seizure</li>
                <li>• Case Documentation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <MdAnalytics className="text-3xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Data Analytics</h3>
              <p className="text-gray-600 mb-4">Use technology and data analysis for tax compliance and risk assessment</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Risk Profiling</li>
                <li>• Data Mining</li>
                <li>• Compliance Analytics</li>
                <li>• Fraud Detection</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
              <FaGavel className="text-3xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Legal & Appeals</h3>
              <p className="text-gray-600 mb-4">Handle legal matters, appeals, and represent department in tribunals</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Appeal Processing</li>
                <li>• Legal Documentation</li>
                <li>• Tribunal Representation</li>
                <li>• Case Law Research</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500">
              <FaUsers className="text-3xl text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Taxpayer Services</h3>
              <p className="text-gray-600 mb-4">Assist taxpayers with compliance, grievances, and education programs</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Taxpayer Assistance</li>
                <li>• Grievance Redressal</li>
                <li>• Education Programs</li>
                <li>• Compliance Support</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
              <MdComputer className="text-3xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Digital Tax Administration</h3>
              <p className="text-gray-600 mb-4">Implement and manage digital tax systems and e-governance initiatives</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• E-filing Systems</li>
                <li>• Digital Processes</li>
                <li>• System Implementation</li>
                <li>• Technology Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility & Selection Process */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Eligibility & Selection Process</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <FaGraduationCap className="mr-3 text-blue-600" />
                Educational Qualifications
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Minimum Requirements</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Bachelor's degree from recognized university</li>
                    <li>• Any discipline acceptable</li>
                    <li>• Minimum 60% marks (55% for reserved categories)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Preferred Qualifications</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Commerce, Economics, or Law background</li>
                    <li>• Chartered Accountancy or Company Secretary</li>
                    <li>• Post-graduate degree in relevant field</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Age Criteria</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 18-27 years (varies by category)</li>
                    <li>• Age relaxation for reserved categories</li>
                    <li>• Upper age limit may vary by recruitment</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <MdAssignment className="mr-3 text-green-600" />
                Selection Process
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">SSC CGL Examination</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Tier 1: Preliminary Examination (Online)</li>
                    <li>• Tier 2: Mains Examination (Online)</li>
                    <li>• Tier 3: Descriptive Paper (Offline)</li>
                    <li>• Document Verification</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Exam Subjects</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• General Intelligence & Reasoning</li>
                    <li>• General Awareness</li>
                    <li>• Quantitative Aptitude</li>
                    <li>• English Comprehension</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-2">Training Period</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 6-9 months foundation training</li>
                    <li>• Department-specific training</li>
                    <li>• On-job training and mentorship</li>
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
                    <h3 className="text-xl font-semibold text-gray-800">Income Tax Inspector (Entry Level)</h3>
                    <p className="text-gray-600">Group C Officer - Tax Assessment & Investigation</p>
                    <p className="text-purple-600 font-semibold">₹4.20 - 8.50 LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 0-3 years</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Assistant Commissioner</h3>
                    <p className="text-gray-600">Group B Officer - Supervisory & Administrative</p>
                    <p className="text-blue-600 font-semibold">₹8.50 - 15.00 LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 4-8 years</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Deputy Commissioner</h3>
                    <p className="text-gray-600">Group A Officer - Regional Administration</p>
                    <p className="text-green-600 font-semibold">₹15.00 - 25.00 LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 9-15 years</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Joint Commissioner</h3>
                    <p className="text-gray-600">Senior Administrative Role - Policy Implementation</p>
                    <p className="text-orange-600 font-semibold">₹25.00 - 35.00 LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 16-22 years</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Commissioner (Senior Level)</h3>
                    <p className="text-gray-600">Department Head - Strategic Leadership</p>
                    <p className="text-red-600 font-semibold">₹35.00 - 50.00+ LPA</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Experience: 23+ years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Required */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Essential Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
              <FaCalculator className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Numerical Aptitude</h3>
              <p className="text-gray-600 text-sm">Strong mathematical and analytical skills for tax calculations</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
              <MdGavel className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Legal Knowledge</h3>
              <p className="text-gray-600 text-sm">Understanding of tax laws, acts, and legal procedures</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl">
              <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Communication</h3>
              <p className="text-gray-600 text-sm">Clear communication with taxpayers and stakeholders</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-xl">
              <MdVerifiedUser className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">High ethical standards and professional conduct</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl">
              <FaLaptopCode className="text-4xl text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Computer Literacy</h3>
              <p className="text-gray-600 text-sm">Proficiency in tax software and digital systems</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl">
              <MdAnalytics className="text-4xl text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Analytical Thinking</h3>
              <p className="text-gray-600 text-sm">Problem-solving and investigative capabilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Tips */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Preparation Strategy</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <MdSchool className="mr-3 text-blue-600" />
                  Study Plan & Resources
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Create structured study schedule covering all subjects
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Focus on NCERT books for foundational concepts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practice previous year papers and mock tests
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Join reputable coaching institutes or online courses
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Stay updated with current affairs and tax reforms
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaTrophy className="mr-3 text-green-600" />
                  Success Tips
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Master time management for competitive exams
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop speed and accuracy in calculations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practice English comprehension regularly
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Build strong reasoning and logical thinking skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maintain consistency and dedicated study routine
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <FaCertificate className="mr-3 text-purple-600" />
                  Additional Certifications
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Professional Courses</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Diploma in Taxation Laws</li>
                      <li>• Certificate in GST and Direct Taxes</li>
                      <li>• Computer Applications in Tax</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Technology Skills</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tax Software (TDS, ITR preparation)</li>
                      <li>• MS Excel Advanced Functions</li>
                      <li>• Database Management Systems</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Legal Knowledge</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Income Tax Act, 1961</li>
                      <li>• Goods and Services Tax (GST)</li>
                      <li>• Central Excise and Customs Laws</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Trends & Future Outlook */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Future Trends & Opportunities</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <FaRocket className="mr-3 text-blue-600" />
                  Emerging Trends
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Digital Tax Administration</h4>
                    <p className="text-gray-600 text-sm">E-filing, digital audits, and automated compliance systems transforming tax administration</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Data Analytics & AI</h4>
                    <p className="text-gray-600 text-sm">Advanced analytics for risk assessment, fraud detection, and taxpayer profiling</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Blockchain Technology</h4>
                    <p className="text-gray-600 text-sm">Secure transaction tracking and transparent tax collection processes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                  <FaLightbulb className="mr-3 text-green-600" />
                  Growth Opportunities
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">International Taxation</h4>
                    <p className="text-gray-600 text-sm">Growing opportunities in cross-border taxation and international compliance</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Tax Technology Specialist</h4>
                    <p className="text-gray-600 text-sm">Specialists in tax software implementation and digital transformation</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">Policy & Research</h4>
                    <p className="text-gray-600 text-sm">Research roles in tax policy formulation and economic analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Insights */}
      <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Industry Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MdTrendingUp className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">15L+</h3>
              <p className="text-gray-600">Annual Government Revenue Collection Target</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaBuilding className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Tax Offices Across India</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">50K+</h3>
              <p className="text-gray-600">Income Tax Department Employees</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <MdWork className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">25%</h3>
              <p className="text-gray-600">Annual Growth in Digital Tax Filing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Serve the Nation?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join the Income Tax Department and contribute to India's economic growth through efficient tax administration and public service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Start SSC CGL Preparation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Learn About Tax Laws
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}