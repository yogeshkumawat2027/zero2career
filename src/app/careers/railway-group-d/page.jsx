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
  FaCog
} from 'react-icons/fa';

export default function RailwayGroupDPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "10th Pass from recognized board" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "18-33 years (relaxation for reserved categories)" },
    { icon: FaHardHat, title: "Medical Fitness", detail: "Medically fit for railway duties" }
  ];

  const examPattern = [
    { 
      stage: "Computer Based Test (CBT)", 
      type: "Multiple Choice Questions",
      duration: "90 minutes",
      questions: "100 questions",
      description: "Mathematics, General Intelligence, General Science, General Awareness"
    },
    { 
      stage: "Physical Efficiency Test (PET)", 
      type: "Physical Test",
      duration: "As per requirement",
      questions: "Physical Standards",
      description: "Physical fitness test as per Railway norms"
    },
    { 
      stage: "Document Verification", 
      type: "Document Check",
      duration: "As per schedule",
      questions: "Original Documents",
      description: "Verification of educational and other certificates"
    }
  ];

  const jobProfiles = [
    { post: "Track Maintainer", department: "Engineering", salary: "₹18,000-22,000", duties: "Track maintenance and repair work" },
    { post: "Helper/Assistant", department: "Mechanical", salary: "₹18,000-22,000", duties: "Assisting in locomotive maintenance" },
    { post: "Porter", department: "Commercial", salary: "₹18,000-22,000", duties: "Passenger assistance and luggage handling" },
    { post: "Gateman", department: "Operating", salary: "₹18,000-22,000", duties: "Level crossing gate operations" },
    { post: "Pointsman", department: "Operating", salary: "₹18,000-22,000", duties: "Signal and point operations" },
    { post: "Hospital Attendant", department: "Medical", salary: "₹18,000-22,000", duties: "Hospital and medical assistance" }
  ];

  const syllabus = [
    { 
      subject: "Mathematics",
      topics: ["Number System", "BODMAS", "Decimals", "Fractions", "LCM & HCF", "Ratio and Proportion", "Percentage", "Mensuration", "Time and Work", "Time and Distance", "Simple Interest", "Profit & Loss", "Algebra", "Geometry", "Trigonometry", "Elementary Statistics"]
    },
    { 
      subject: "General Intelligence & Reasoning",
      topics: ["Analogies", "Alphabetical and Number Series", "Coding and Decoding", "Mathematical Operations", "Relationships", "Syllogism", "Jumbling", "Venn Diagram", "Data Interpretation", "Conclusions and Decision Making", "Similarities and Differences", "Analytical Reasoning", "Classification", "Directions", "Statement Arguments"]
    },
    { 
      subject: "General Science",
      topics: ["Physics - Motion, Force, Energy, Light, Sound, Electricity", "Chemistry - Atoms, Molecules, Acids, Bases, Metals, Non-metals", "Biology - Life Processes, Heredity, Natural Resources", "Environmental Science", "Scientific Methods", "Inventions and Discoveries", "Diseases and Prevention", "Nutrition and Health"]
    },
    { 
      subject: "General Awareness",
      topics: ["Current Affairs", "Indian History", "Freedom Struggle", "Geography of India", "Indian Polity", "Indian Economy", "General Science", "Environmental Issues", "Sports", "Books and Authors", "Important Days and Events", "Art and Culture", "Awards and Honours", "International Organizations"]
    }
  ];

  const preparationTips = [
    "Focus on 10th standard NCERT books for basic concepts",
    "Practice mathematics regularly to improve speed and accuracy",
    "Read newspapers daily for current affairs preparation",
    "Take online mock tests to assess your preparation level",
    "Solve previous year question papers of Railway Group D",
    "Join study groups or coaching for better guidance",
    "Maintain good physical fitness for PET",
    "Keep all documents ready for verification process"
  ];

  const careerGrowth = [
    { level: "Group D Employee", experience: "0-5 years", salary: "₹18,000-22,000" },
    { level: "Senior Group D", experience: "5-10 years", salary: "₹20,000-25,000" },
    { level: "Group C (Promotion)", experience: "10-15 years", salary: "₹25,500-30,000" },
    { level: "Assistant Loco Pilot (ALP)", experience: "Through exam", salary: "₹35,000-40,000" },
    { level: "Loco Pilot", experience: "After ALP training", salary: "₹40,000-50,000" },
    { level: "Senior Section Engineer", experience: "20+ years", salary: "₹50,000-70,000" }
  ];

  const physicalStandards = [
    { category: "Male", height: "157.5 cm", chest: "81/85 cm", weight: "As per height" },
    { category: "Female", height: "152 cm", chest: "N/A", weight: "As per height" },
    { category: "OBC Male", height: "155 cm", chest: "78/82 cm", weight: "As per height" },
    { category: "SC/ST Male", height: "152 cm", chest: "76/81 cm", weight: "As per height" }
  ];

  const departments = [
    { 
      name: "Engineering Department",
      description: "Responsible for track maintenance, bridge construction, and infrastructure development",
      posts: ["Track Maintainer", "Keyman", "Gang Man"]
    },
    { 
      name: "Mechanical Department",
      description: "Handles locomotive maintenance, carriage and wagon repair work",
      posts: ["Helper", "Khalasi", "Cleaner"]
    },
    { 
      name: "Electrical Department",
      description: "Maintains electrical equipment, signaling systems, and power supply",
      posts: ["Electrician Helper", "Wireman", "Technician Helper"]
    },
    { 
      name: "Signal & Telecom",
      description: "Responsible for communication systems and signal maintenance",
      posts: ["Maintainer", "Helper", "Technician"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaTrain className="mx-auto text-6xl mb-6 text-red-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Railway Group D
              <span className="text-red-300"> Complete Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining Indian Railways as Group D employee with job security and growth opportunities
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Railway Group D Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Railway Group D?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Railway Group D refers to the entry-level positions in Indian Railways, including posts like Track Maintainer, Helper, Porter, Gateman, and other support staff roles. These positions form the backbone of railway operations and provide excellent job security with opportunities for career advancement.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Railway Group D employees are eligible for various benefits including medical facilities, railway passes, retirement benefits, and opportunities to get promoted to higher grades through departmental examinations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Job Security & Stability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Regular Salary & DA
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Medical Benefits
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Railway Passes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Promotion Opportunities
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-red-600 mx-auto mb-4" />
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
                  <span className="font-medium">PWD:</span> 13 years relaxation
                </div>
              </div>
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

        {/* Job Profiles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Profiles & Duties</h2>
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

        {/* Physical Standards */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHardHat className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physical Standards</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-50 to-cyan-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Category</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Minimum Height</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Chest (Unexpanded/Expanded)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalStandards.map((standard, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{standard.category}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.height}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.chest}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Railway Departments</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{dept.name}</h3>
                  <p className="text-gray-700 mb-4">{dept.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Posts:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.posts.map((post, postIndex) => (
                        <span key={postIndex} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                          {post}
                        </span>
                      ))}
                    </div>
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
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Indian Railways?</h2>
            <p className="text-xl mb-8 text-red-100">Start your Railway Group D preparation today and secure your government job!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-flex items-center">
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