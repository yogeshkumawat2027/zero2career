import Link from 'next/link';
import React from 'react';
import { 
  FaTrain, 
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
  FaHardHat,
  FaUserTie,
  FaCog,
  FaRoute,
  FaEye,
  FaStethoscope
} from 'react-icons/fa';

export default function RailwayLocoPilotPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "10th + ITI or 12th Pass from recognized board" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "18-28 years (relaxation for reserved categories)" },
    { icon: FaStethoscope, title: "Medical Fitness", detail: "Medical fitness including vision test" }
  ];

  const examPattern = [
    { 
      stage: "Computer Based Test - Stage I", 
      type: "Multiple Choice Questions",
      duration: "60 minutes",
      questions: "75 questions",
      description: "Mathematics, General Intelligence, General Science, General Awareness on current affairs"
    },
    { 
      stage: "Computer Based Test - Stage II", 
      type: "Technical Test",
      duration: "90 minutes",
      questions: "100 questions",
      description: "Technical abilities related to the trade (Part A - 70 questions, Part B - 30 questions)"
    },
    { 
      stage: "Computer Assisted Aptitude Test", 
      type: "Aptitude Test",
      duration: "71 minutes",
      questions: "Various tests",
      description: "Psycho test, concentration test, following directions test, depth perception test"
    },
    { 
      stage: "Document Verification & Medical", 
      type: "Verification",
      duration: "As per schedule",
      questions: "Documents & Medical Tests",
      description: "Document verification and comprehensive medical examination"
    }
  ];

  const jobProfiles = [
    { post: "Assistant Loco Pilot (ALP)", department: "Mechanical", salary: "₹35,000-40,000", duties: "Assisting loco pilot in train operations" },
    { post: "Loco Pilot", department: "Mechanical", salary: "₹40,000-50,000", duties: "Operating locomotives and ensuring safe train movement" },
    { post: "Senior Loco Pilot", department: "Mechanical", salary: "₹45,000-55,000", duties: "Senior locomotive operations and training juniors" },
    { post: "Technician (Various)", department: "Mechanical/Electrical", salary: "₹35,000-45,000", duties: "Technical maintenance and repair work" },
    { post: "Station Master", department: "Operating", salary: "₹40,000-50,000", duties: "Station operations and train management" },
    { post: "Traffic Assistant", department: "Commercial", salary: "₹35,000-45,000", duties: "Traffic management and commercial operations" }
  ];

  const syllabus = [
    { 
      subject: "Mathematics (Stage I)",
      topics: ["Number System", "BODMAS", "Decimals", "Fractions", "LCM & HCF", "Ratio and Proportion", "Percentage", "Mensuration", "Time and Work", "Time and Distance", "Simple Interest", "Profit & Loss", "Algebra", "Geometry", "Trigonometry", "Elementary Statistics"]
    },
    { 
      subject: "General Intelligence & Reasoning (Stage I)",
      topics: ["Analogies", "Alphabetical and Number Series", "Coding and Decoding", "Mathematical Operations", "Relationships", "Syllogism", "Jumbling", "Venn Diagram", "Data Interpretation", "Conclusions and Decision Making", "Similarities and Differences", "Analytical Reasoning", "Classification", "Directions"]
    },
    { 
      subject: "General Science (Stage I)",
      topics: ["Physics - Motion, Force, Energy, Light, Sound, Electricity, Magnetism", "Chemistry - Atoms, Molecules, Acids, Bases, Metals, Non-metals", "Biology - Life Processes, Heredity, Natural Resources", "Environmental Science", "Scientific Methods and Observations", "Inventions and Discoveries"]
    },
    { 
      subject: "Technical Abilities (Stage II)",
      topics: ["Engineering Drawing", "Mechanics", "Basic Electrical", "Basic Electronics", "Material Science", "Manufacturing Processes", "Computer Basics", "Environment and Pollution Control", "Occupational Safety and Health", "Workshop Technology", "Instrumentation"]
    }
  ];

  const preparationTips = [
    "Focus on 10th and 12th standard NCERT books for basic concepts",
    "Practice technical subjects based on your trade qualification",
    "Take psychometric tests regularly for CAAT preparation",
    "Practice concentration and attention tests daily",
    "Solve previous year question papers of ALP recruitment",
    "Join coaching for technical subjects if needed",
    "Maintain good eyesight and overall physical fitness",
    "Keep all educational and trade certificates ready"
  ];

  const careerGrowth = [
    { level: "Assistant Loco Pilot (ALP)", experience: "0-3 years", salary: "₹35,000-40,000" },
    { level: "Loco Pilot", experience: "3-8 years", salary: "₹40,000-50,000" },
    { level: "Senior Loco Pilot", experience: "8-15 years", salary: "₹45,000-55,000" },
    { level: "Loco Inspector", experience: "15-20 years", salary: "₹50,000-65,000" },
    { level: "Assistant Station Master", experience: "Through exam", salary: "₹45,000-55,000" },
    { level: "Station Master", experience: "20+ years", salary: "₹55,000-75,000" }
  ];

  const medicalRequirements = [
    { test: "Vision Test", requirement: "Distance vision: 6/9, 6/12 (with or without glasses)", description: "Good eyesight for safe operations" },
    { test: "Color Vision", requirement: "Normal color vision", description: "Ability to distinguish signal colors" },
    { test: "Hearing Test", requirement: "Normal hearing ability", description: "Clear communication during operations" },
    { test: "Physical Fitness", requirement: "Medically fit A-1", description: "Overall physical and mental fitness" }
  ];

  const technicalTrades = [
    { 
      trade: "Fitter",
      description: "Mechanical fitting, assembly and maintenance work",
      qualification: "ITI in Fitter trade"
    },
    { 
      trade: "Electrician",
      description: "Electrical installation and maintenance",
      qualification: "ITI in Electrician trade"
    },
    { 
      trade: "Machinist",
      description: "Machine operation and precision work",
      qualification: "ITI in Machinist trade"
    },
    { 
      trade: "Electronics Mechanic",
      description: "Electronic equipment repair and maintenance",
      qualification: "ITI in Electronics trade"
    },
    { 
      trade: "Welder",
      description: "Welding and fabrication work",
      qualification: "ITI in Welder trade"
    },
    { 
      trade: "Carpenter",
      description: "Carpentry and woodwork",
      qualification: "ITI in Carpenter trade"
    }
  ];

  const aptitudeTests = [
    { test: "Concentration Test", duration: "20 minutes", description: "Test of sustained attention and concentration abilities" },
    { test: "Following Directions Test", duration: "15 minutes", description: "Ability to follow complex instructions accurately" },
    { test: "Depth Perception Test", duration: "10 minutes", description: "Spatial awareness and depth perception abilities" },
    { test: "Personality Test", duration: "20 minutes", description: "Psychological assessment for job suitability" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaTrain className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Railway Loco Pilot (ALP)
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your complete guide to becoming an Assistant Loco Pilot and advancing to Loco Pilot in Indian Railways
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Railway ALP Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Railway ALP & Loco Pilot?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Assistant Loco Pilot (ALP) is a technical post in Indian Railways responsible for assisting the Loco Pilot in operating trains safely. After gaining experience, ALPs can be promoted to Loco Pilot, who is the primary operator responsible for driving locomotives and ensuring passenger and freight safety.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This is a prestigious technical job with excellent career growth opportunities, good salary, and the responsibility of operating one of the world's largest railway networks.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Assist in train operations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Monitor safety protocols
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Technical maintenance support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Signal recognition
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Emergency response
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Educational Qualification Options</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-gray-700">
                  <span className="font-medium">Option 1:</span> 10th + ITI (2 years) from NCVT/SCVT
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">Option 2:</span> 12th Pass with Physics & Mathematics
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Trades */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Eligible Technical Trades</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalTrades.map((trade, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{trade.trade}</h3>
                  <p className="text-gray-700 text-sm mb-3">{trade.description}</p>
                  <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                    {trade.qualification}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFileAlt className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Selection Process</h2>
            </div>
            <div className="grid gap-6">
              {examPattern.map((stage, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{stage.stage}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{stage.type}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Duration:</span>
                      <p className="font-medium text-gray-800">{stage.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Questions:</span>
                      <p className="font-medium text-gray-800">{stage.questions}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Type:</span>
                      <p className="font-medium text-gray-800">{stage.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aptitude Tests Details */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaEye className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Computer Assisted Aptitude Test (CAAT)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {aptitudeTests.map((test, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{test.test}</h3>
                    <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium">{test.duration}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{test.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStethoscope className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Medical Requirements</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-red-50 to-pink-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Medical Test</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Requirement</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Importance</th>
                  </tr>
                </thead>
                <tbody>
                  {medicalRequirements.map((req, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{req.test}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{req.requirement}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{req.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Main Duties</th>
                  </tr>
                </thead>
                <tbody>
                  {jobProfiles.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{job.post}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{job.department}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{job.salary}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{job.duties}</td>
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
              <FaBookOpen className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Complete Syllabus</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {syllabus.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
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
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression</h2>
            </div>
            <div className="space-y-6">
              {careerGrowth.map((level, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 font-bold">{index + 1}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Drive India's Railways?</h2>
            <p className="text-xl mb-8 text-blue-100">Start your Railway ALP preparation today and become a professional locomotive operator!</p>
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