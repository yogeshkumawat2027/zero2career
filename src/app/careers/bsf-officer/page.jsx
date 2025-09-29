import Link from 'next/link';
import React from 'react';
import { 
  FaShieldAlt, 
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
  FaFlag,
  FaRunning,
  FaEye,
  FaUserShield,
  FaGavel
} from 'react-icons/fa';

export default function BSFOfficerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's Degree from recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "20-25 years (relaxation for reserved categories)" },
    { icon: FaRunning, title: "Physical Fitness", detail: "Excellent physical and mental fitness required" }
  ];

  const examPattern = [
    { 
      stage: "Written Examination", 
      type: "Objective Type",
      duration: "3 hours",
      questions: "200 questions",
      description: "General Knowledge, Elementary Mathematics, English, General Awareness"
    },
    { 
      stage: "Physical Standard Test (PST)", 
      type: "Physical Measurement",
      duration: "1 day",
      questions: "Height, Weight, Chest",
      description: "Physical measurements as per BSF standards"
    },
    { 
      stage: "Physical Efficiency Test (PET)", 
      type: "Physical Test",
      duration: "1 day",
      questions: "Running, Long Jump, High Jump",
      description: "1600m run, long jump, high jump as per BSF norms"
    },
    { 
      stage: "Medical Examination", 
      type: "Medical Test",
      duration: "2-3 days",
      questions: "Comprehensive Medical",
      description: "Detailed medical examination by BSF medical board"
    }
  ];

  const jobProfiles = [
    { post: "Assistant Commandant", level: "Group A", salary: "₹56,100-1,77,500", duties: "Border security operations, leadership, administration" },
    { post: "Inspector", level: "Group B", salary: "₹35,400-1,12,400", duties: "Field operations, team supervision, border patrolling" },
    { post: "Sub Inspector", level: "Group B", salary: "₹29,200-92,300", duties: "Ground operations, border surveillance, documentation" },
    { post: "Head Constable", level: "Group C", salary: "₹25,500-81,100", duties: "Direct border duty, patrolling, equipment handling" },
    { post: "Constable", level: "Group C", salary: "₹21,700-69,100", duties: "Border security, patrolling, basic operations" }
  ];

  const syllabus = [
    { 
      subject: "General Knowledge & Current Affairs",
      topics: ["Indian History", "Indian Geography", "Indian Polity", "Indian Economy", "Current Events", "International Relations", "Science & Technology", "Sports", "Awards & Honors", "Books & Authors", "Important Days", "Defense Related Current Affairs"]
    },
    { 
      subject: "Elementary Mathematics",
      topics: ["Number System", "Percentage", "Ratio & Proportion", "Average", "Time & Work", "Time & Distance", "Simple & Compound Interest", "Profit & Loss", "Geometry", "Algebra", "Trigonometry", "Statistics", "Mensuration", "Data Interpretation"]
    },
    { 
      subject: "English Language",
      topics: ["Grammar", "Vocabulary", "Comprehension", "Error Detection", "Sentence Improvement", "Synonyms & Antonyms", "Idioms & Phrases", "Active-Passive Voice", "Direct-Indirect Speech", "Para Jumbles", "Fill in the blanks", "One word substitution"]
    },
    { 
      subject: "General Awareness",
      topics: ["Indian Constitution", "Fundamental Rights & Duties", "Indian Armed Forces", "Border Management", "Internal Security", "Disaster Management", "Environmental Issues", "Art & Culture", "Freedom Movement", "Neighboring Countries", "Border States", "BSF History & Role"]
    }
  ];

  const preparationTips = [
    "Focus on current affairs, especially defense and border-related news",
    "Maintain excellent physical fitness with regular running and exercises",
    "Study Indian geography thoroughly, particularly border areas",
    "Practice mathematics daily to improve speed and accuracy",
    "Stay updated with BSF history, organization structure, and functions",
    "Improve English language skills through regular reading",
    "Join physical training programs for stamina building",
    "Take regular mock tests to assess preparation level"
  ];

  const careerGrowth = [
    { level: "Constable", experience: "0-5 years", salary: "₹21,700-35,000" },
    { level: "Head Constable", experience: "5-10 years", salary: "₹25,500-40,000" },
    { level: "Sub Inspector", experience: "10-15 years", salary: "₹29,200-50,000" },
    { level: "Inspector", experience: "15-20 years", salary: "₹35,400-60,000" },
    { level: "Assistant Commandant", experience: "20-25 years", salary: "₹56,100-90,000" },
    { level: "Commandant & Above", experience: "25+ years", salary: "₹78,800-1,50,000" }
  ];

  const physicalStandards = [
    { category: "Male (General)", height: "170 cm", weight: "50 kg", chest: "80/85 cm" },
    { category: "Female (General)", height: "157 cm", weight: "46 kg", chest: "N/A" },
    { category: "Male (OBC)", height: "168 cm", weight: "48 kg", chest: "78/83 cm" },
    { category: "Male (SC/ST)", height: "165 cm", weight: "46 kg", chest: "76/81 cm" },
    { category: "Female (OBC/SC/ST)", height: "155 cm", weight: "44 kg", chest: "N/A" }
  ];

  const petStandards = [
    { event: "1600m Run", male: "5 min 45 sec", female: "8 min 30 sec", description: "Qualifying time for 1600 meter run" },
    { event: "Long Jump", male: "3.65 meters", female: "2.7 meters", description: "Minimum distance required" },
    { event: "High Jump", male: "1.2 meters", female: "0.9 meters", description: "Minimum height to clear" }
  ];

  const bsfRoles = [
    { 
      role: "Border Guarding",
      description: "Primary role of securing India's borders with Pakistan and Bangladesh",
      responsibilities: "Preventing infiltration, smuggling, and illegal border crossings"
    },
    { 
      role: "Counter-Insurgency",
      description: "Operations against insurgent groups in border areas",
      responsibilities: "Anti-terrorism operations, maintaining law and order"
    },
    { 
      role: "Internal Security",
      description: "Assisting in maintenance of internal security",
      responsibilities: "Election duty, VIP security, disaster response"
    },
    { 
      role: "Training & Development",
      description: "Training new recruits and skill development programs",
      responsibilities: "Conducting training programs, skill enhancement"
    }
  ];

  const postingLocations = [
    { region: "Western Border", states: "Rajasthan, Gujarat, Punjab, Jammu & Kashmir", description: "India-Pakistan border areas" },
    { region: "Eastern Border", states: "West Bengal, Assam, Meghalaya, Mizoram, Tripura", description: "India-Bangladesh border areas" },
    { region: "Northern Border", states: "Himachal Pradesh, Uttarakhand", description: "High altitude border areas" },
    { region: "Central India", states: "Madhya Pradesh, Chhattisgarh, Odisha", description: "Anti-Naxal operations" }
  ];

  const benefits = [
    { benefit: "Medical Facilities", details: "Comprehensive medical care for self and family" },
    { benefit: "Accommodation", details: "Government quarters or house rent allowance" },
    { benefit: "Education", details: "Educational facilities for children" },
    { benefit: "Transport", details: "Official transport and travel allowances" },
    { benefit: "Pension", details: "Retirement benefits and pension scheme" },
    { benefit: "Canteen Facilities", details: "Subsidized food and essential items" }
  ];

  const specialTraining = [
    { training: "Basic Training", duration: "44 weeks", content: "Weapon training, physical fitness, border management" },
    { training: "Advanced Courses", duration: "Variable", content: "Specialized skills, leadership development" },
    { training: "Foreign Training", duration: "Variable", content: "International best practices, advanced techniques" },
    { training: "Refresher Courses", duration: "Periodic", content: "Updated techniques, new technologies" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              BSF Officer
              <span className="text-green-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Serve the nation at the borders - Complete guide to becoming a Border Security Force Officer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is BSF Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Border Security Force (BSF)?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Border Security Force (BSF) is India's primary border guarding force, established in 1965. It is responsible for securing India's borders with Pakistan and Bangladesh, covering approximately 6,386.83 km of international border.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  BSF officers play a crucial role in preventing infiltration, smuggling, and illegal border crossings while maintaining the sovereignty and territorial integrity of India. They also assist in internal security operations and disaster management.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Duty, Honor, Country
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Border Security Excellence
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Professional Competence
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Integrity & Courage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Service Before Self
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
                  <span className="font-medium">Ex-Servicemen:</span> 5 years relaxation
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
                      <span className="text-sm text-gray-600">Assessment:</span>
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

        {/* Physical Standards */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRunning className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physical Standards (PST)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-8">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-50 to-red-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Category</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Height</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Weight</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Chest</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalStandards.map((standard, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{standard.category}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.height}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.weight}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.chest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Physical Efficiency Test (PET) Standards</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-50 to-red-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Event</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Male</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Female</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {petStandards.map((standard, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{standard.event}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.male}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.female}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{standard.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BSF Roles & Functions */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUserShield className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">BSF Roles & Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {bsfRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{role.role}</h3>
                  <p className="text-gray-700 text-sm mb-3">{role.description}</p>
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Key Activities:</span> {role.responsibilities}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Posting Locations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMapMarkerAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Posting Locations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {postingLocations.map((location, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{location.region}</h3>
                  <p className="text-gray-700 text-sm mb-3">{location.description}</p>
                  <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm">
                    <span className="font-medium">States:</span> {location.states}
                  </div>
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
              <h2 className="text-3xl font-bold text-gray-800">Job Profiles & Hierarchy</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-purple-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Rank</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Level</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Pay Scale</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Key Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                  {jobProfiles.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{job.post}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{job.level}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{job.salary}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{job.duties}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Programs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {specialTraining.map((training, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{training.training}</h3>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">{training.duration}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{training.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Facilities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAward className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Benefits & Facilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{benefit.benefit}</h3>
                  <p className="text-gray-700 text-sm">{benefit.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Written Exam Syllabus</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {syllabus.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
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
              <FaTrophy className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Preparation Strategy</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-100">
                  <FaFlag className="text-red-600 mr-3 mt-1 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Serve at the Borders?</h2>
            <p className="text-xl mb-8 text-green-100">Join the Border Security Force and protect India's frontiers with honor and courage!</p>
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