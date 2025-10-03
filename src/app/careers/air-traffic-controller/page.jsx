import Link from 'next/link';
import React from 'react';
import { 
  FaSatellite, 
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
  FaPlane,
  FaHeadset,
  FaEye,
  FaShieldAlt,
  FaBroadcastTower
} from 'react-icons/fa';

export default function AirTrafficControllerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "B.E./B.Tech in Electronics/Telecommunications/Computer Science" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "18-27 years (relaxation for reserved categories)" },
    { icon: FaEye, title: "Medical Fitness", detail: "Excellent vision and hearing, medical fitness Class-I" }
  ];

  const examPattern = [
    { 
      stage: "Online Written Test - Stage I", 
      type: "Multiple Choice Questions",
      duration: "2 hours",
      questions: "100 questions",
      description: "General Awareness, Mathematical Reasoning, English, Physics"
    },
    { 
      stage: "Online Written Test - Stage II", 
      type: "Technical Test",
      duration: "2 hours",
      questions: "100 questions",
      description: "Technical knowledge based on educational qualification"
    },
    { 
      stage: "Voice Test", 
      type: "Communication Test",
      duration: "30 minutes",
      questions: "Oral Test",
      description: "English pronunciation, voice clarity, communication skills"
    },
    { 
      stage: "Medical Examination", 
      type: "Medical Test",
      duration: "1-2 days",
      questions: "Comprehensive Medical",
      description: "Detailed medical examination including psychological assessment"
    }
  ];

  const jobProfiles = [
    { post: "Junior Executive (ATC)", organization: "AAI", salary: "₹40,000-1,40,000", duties: "Air traffic control operations at airports" },
    { post: "Air Traffic Control Officer", organization: "Indian Air Force", salary: "₹56,100-1,77,500", duties: "Military air traffic management" },
    { post: "Approach Control Officer", organization: "AAI/Airports", salary: "₹45,000-1,50,000", duties: "Aircraft approach and departure control" },
    { post: "Radar Control Officer", organization: "AAI", salary: "₹50,000-1,60,000", duties: "Radar-based air traffic monitoring" },
    { post: "Area Control Officer", organization: "AAI", salary: "₹55,000-1,80,000", duties: "En-route air traffic control" },
    { post: "Tower Control Officer", organization: "Airports", salary: "₹40,000-1,30,000", duties: "Airport tower operations and aircraft guidance" }
  ];

  const syllabus = [
    { 
      subject: "Physics",
      topics: ["Mechanics", "Wave Motion", "Optics", "Electricity & Magnetism", "Modern Physics", "Electronics Basics", "Communication Systems", "Radar Principles", "Electromagnetic Waves", "Semiconductor Devices"]
    },
    { 
      subject: "Mathematical Reasoning",
      topics: ["Number System", "Algebra", "Geometry", "Trigonometry", "Statistics", "Probability", "Logical Reasoning", "Data Interpretation", "Mathematical Operations", "Series and Progressions"]
    },
    { 
      subject: "General Awareness",
      topics: ["Current Affairs", "Indian History", "Geography", "Polity", "Economics", "Science & Technology", "Sports", "Awards & Honors", "Books & Authors", "International Relations", "Aviation Industry", "Transport & Communication"]
    },
    { 
      subject: "English Language",
      topics: ["Grammar", "Vocabulary", "Comprehension", "Error Detection", "Sentence Improvement", "Synonyms & Antonyms", "Idioms & Phrases", "Active-Passive Voice", "Direct-Indirect Speech", "Para Jumbles"]
    },
    { 
      subject: "Technical Knowledge (Engineering)",
      topics: ["Digital Electronics", "Communication Systems", "Network Theory", "Electromagnetic Theory", "Antenna & Wave Propagation", "Microprocessors", "Control Systems", "Signal Processing", "Computer Networks", "Aviation Electronics"]
    }
  ];

  const preparationTips = [
    "Focus strongly on Physics, especially electronics and communication systems",
    "Develop excellent English communication skills for voice test",
    "Practice mathematical reasoning and logical thinking problems daily",
    "Stay updated with aviation industry current affairs and developments",
    "Work on voice clarity, pronunciation and speaking confidence",
    "Study technical subjects thoroughly based on your engineering background",
    "Take mock tests regularly to improve speed and accuracy",
    "Maintain excellent physical and mental health for medical tests"
  ];

  const careerGrowth = [
    { level: "Junior Executive (ATC)", experience: "0-3 years", salary: "₹40,000-70,000" },
    { level: "Assistant Manager (ATC)", experience: "3-6 years", salary: "₹60,000-90,000" },
    { level: "Deputy Manager (ATC)", experience: "6-10 years", salary: "₹80,000-1,20,000" },
    { level: "Assistant General Manager", experience: "10-15 years", salary: "₹1,00,000-1,50,000" },
    { level: "Deputy General Manager", experience: "15-20 years", salary: "₹1,20,000-1,80,000" },
    { level: "General Manager", experience: "20+ years", salary: "₹1,50,000-2,50,000" }
  ];

  const medicalRequirements = [
    { aspect: "Vision", requirement: "6/6 vision in both eyes (correctable)", importance: "Critical for aircraft monitoring" },
    { aspect: "Hearing", requirement: "Normal hearing in both ears", importance: "Essential for radio communication" },
    { aspect: "Color Vision", requirement: "Normal color discrimination", importance: "Required for radar and signal recognition" },
    { aspect: "Physical Fitness", requirement: "Physically and mentally fit", importance: "Ability to handle stress and long shifts" },
    { aspect: "Psychological", requirement: "Stable mental health", importance: "Critical decision-making under pressure" },
    { aspect: "Height & Weight", requirement: "Proportionate BMI", importance: "Overall fitness for duty" }
  ];

  const workEnvironments = [
    { 
      location: "Control Tower",
      description: "Airport control towers managing takeoffs, landings, and ground movements",
      responsibilities: "Aircraft guidance, runway management, local traffic control"
    },
    { 
      location: "Approach Control",
      description: "Terminal radar approach control facilities",
      responsibilities: "Aircraft approach/departure sequencing, altitude/speed control"
    },
    { 
      location: "Area Control Center",
      description: "En-route air traffic control centers",
      responsibilities: "High-altitude traffic management, route coordination"
    },
    { 
      location: "Military Installations",
      description: "Air Force bases and military airfields",
      responsibilities: "Military aircraft operations, defense coordination"
    }
  ];

  const skillsRequired = [
    { skill: "Communication Skills", importance: "Excellent verbal English communication for pilot interaction" },
    { skill: "Decision Making", importance: "Quick and accurate decisions under high-pressure situations" },
    { skill: "Multitasking", importance: "Monitor multiple aircraft simultaneously with precision" },
    { skill: "Stress Management", importance: "Remain calm and focused during critical situations" },
    { skill: "Technical Knowledge", importance: "Understanding of radar, navigation, and communication systems" },
    { skill: "Attention to Detail", importance: "Precise monitoring and coordination of air traffic" }
  ];

  const trainingPhases = [
    { phase: "Basic ATC Training", duration: "6 months", content: "Fundamentals of air traffic control, aviation regulations" },
    { phase: "On-Job Training", duration: "6-12 months", content: "Practical training under supervision at assigned location" },
    { phase: "Endorsement Training", duration: "3-6 months", content: "Area-specific training for tower, approach, or area control" },
    { phase: "Continuous Education", duration: "Ongoing", content: "Regular refresher courses and skill upgrades" }
  ];

  const organizationsHiring = [
    { 
      organization: "Airports Authority of India (AAI)",
      posts: "Junior Executive (ATC), Assistant Manager",
      description: "Primary civilian air traffic control employer in India"
    },
    { 
      organization: "Indian Air Force",
      posts: "Air Traffic Control Officer",
      description: "Military air traffic control and defense operations"
    },
    { 
      organization: "Private Airports",
      posts: "ATC Officer, Operations Officer",
      description: "Growing opportunities in privatized airports"
    },
    { 
      organization: "DGCA (Directorate General of Civil Aviation)",
      posts: "Various technical positions",
      description: "Regulatory and oversight positions in aviation"
    }
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0 overflow-x-hidden">
      {/* Mobile spacing fix */}
      <div className="block lg:hidden h-4"></div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 w-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <FaSatellite className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Air Traffic Controller
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Guide aircraft safely through the skies - Your complete career guide to becoming an Air Traffic Controller
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* What is Air Traffic Controller Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Air Traffic Controller?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Air Traffic Controllers are aviation professionals responsible for coordinating the safe, orderly, and expeditious flow of air traffic. They work from control towers, approach control facilities, and air traffic control centers to ensure aircraft maintain safe distances from each other.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This high-responsibility profession requires excellent communication skills, quick decision-making abilities, and the capacity to work under pressure while managing multiple aircraft simultaneously in challenging weather and emergency situations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Monitor aircraft movements on radar
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Issue clearances and instructions to pilots
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Coordinate with other control facilities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Manage emergency situations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Maintain aircraft separation standards
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Educational Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-gray-700">
                  <span className="font-medium">Engineering:</span> Electronics/Telecommunications/Computer Science
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">Minimum:</span> 60% marks in graduation (50% for reserved categories)
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

        {/* Medical Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaShieldAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Medical Requirements</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-red-50 to-pink-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Medical Aspect</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Requirement</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Importance</th>
                  </tr>
                </thead>
                <tbody>
                  {medicalRequirements.map((req, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{req.aspect}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{req.requirement}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{req.importance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Organizations Hiring */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBroadcastTower className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Organizations & Recruiters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {organizationsHiring.map((org, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{org.organization}</h3>
                  <p className="text-gray-700 text-sm mb-3">{org.description}</p>
                  <div className="bg-teal-100 text-teal-700 px-3 py-2 rounded-lg text-sm">
                    <span className="font-medium">Positions:</span> {org.posts}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Environments */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Work Environments</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {workEnvironments.map((env, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{env.location}</h3>
                  <p className="text-gray-700 text-sm mb-3">{env.description}</p>
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Key Duties:</span> {env.responsibilities}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Process */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Process</h2>
            </div>
            <div className="space-y-6">
              {trainingPhases.map((phase, index) => (
                <div key={index} className="flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-6">
                    <span className="text-indigo-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{phase.phase}</h3>
                    <p className="text-gray-700 text-sm">{phase.content}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">{phase.duration}</span>
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
              <FaBriefcase className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Profiles & Salary</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-teal-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Position</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Organization</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Salary Range</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Key Duties</th>
                  </tr>
                </thead>
                <tbody>
                  {jobProfiles.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{job.post}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{job.organization}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{job.salary}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{job.duties}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {skillsRequired.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{skill.skill}</h3>
                  <p className="text-gray-700 text-sm">{skill.importance}</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Exam Syllabus</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
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
                  <FaAward className="text-red-600 mr-3 mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Control the Skies?</h2>
            <p className="text-xl mb-8 text-blue-100">Begin your journey to become an Air Traffic Controller and ensure aviation safety!</p>
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