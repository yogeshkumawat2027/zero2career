import Link from 'next/link';
import React from 'react';
import { 
  FaGavel, 
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
  FaShieldAlt,
  FaSearch,
  FaEye,
  FaBalanceScale,
  FaHandcuffs,
  FaUserShield,
  FaBuilding
} from 'react-icons/fa';

export default function CBIOfficerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's Degree from recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "20-30 years (relaxation for reserved categories)" },
    { icon: FaShieldAlt, title: "Character", detail: "Good moral character and clean criminal record" }
  ];

  const examPattern = [
    { 
      stage: "Tier-I: Preliminary Examination", 
      type: "Online MCQ Test",
      duration: "2 hours",
      questions: "100 questions",
      description: "General Studies, Quantitative Aptitude, English Language, Reasoning"
    },
    { 
      stage: "Tier-II: Main Examination", 
      type: "Online MCQ Test",
      duration: "2 hours",
      questions: "100 questions",
      description: "Quantitative Aptitude, English Language & Comprehension, General Studies, Logical Reasoning"
    },
    { 
      stage: "Physical Efficiency & Medical Standards Test", 
      type: "Physical Test",
      duration: "1-2 days",
      questions: "Physical Standards",
      description: "Height, weight, chest measurements, medical examination"
    },
    { 
      stage: "Interview/Personality Test", 
      type: "Oral Interview",
      duration: "20-30 minutes",
      questions: "Personal Interview",
      description: "Assessment of personality, leadership qualities, general awareness"
    }
  ];

  const jobProfiles = [
    { post: "Sub Inspector (SI)", level: "Group C", salary: "₹35,400-1,12,400", duties: "Field investigations, evidence collection, case documentation" },
    { post: "Inspector", level: "Group B", salary: "₹44,900-1,42,400", duties: "Supervise investigations, coordinate with agencies, case management" },
    { post: "Assistant Superintendent of Police (ASP)", level: "Group A", salary: "₹56,100-1,77,500", duties: "Senior investigations, policy implementation, team leadership" },
    { post: "Deputy Superintendent of Police (DSP)", level: "Group A", salary: "₹67,700-2,08,700", duties: "Regional operations, administrative duties, major case oversight" },
    { post: "Superintendent of Police (SP)", level: "Group A", salary: "₹78,800-2,09,200", duties: "State-level operations, strategic planning, inter-agency coordination" },
    { post: "Deputy Inspector General (DIG)", level: "Group A", salary: "₹1,31,100-2,16,600", duties: "Zone-level command, policy formulation, senior management" }
  ];

  const syllabus = [
    { 
      subject: "General Studies",
      topics: ["Indian History", "Indian Geography", "Indian Polity & Constitution", "Indian Economy", "General Science", "Current Affairs", "Environmental Studies", "Computer Knowledge", "Sports", "Art & Culture", "Awards & Honors", "Books & Authors"]
    },
    { 
      subject: "Quantitative Aptitude",
      topics: ["Number System", "Simplification", "Average", "Percentage", "Ratio & Proportion", "Time & Work", "Time & Distance", "Simple & Compound Interest", "Profit & Loss", "Data Interpretation", "Mensuration", "Algebra", "Geometry"]
    },
    { 
      subject: "English Language",
      topics: ["Grammar", "Vocabulary", "Comprehension", "Error Detection", "Sentence Improvement", "Synonyms & Antonyms", "Idioms & Phrases", "Active-Passive Voice", "Direct-Indirect Speech", "Para Jumbles", "Fill in the blanks", "Cloze Test"]
    },
    { 
      subject: "Logical Reasoning",
      topics: ["Analogies", "Classification", "Series", "Coding-Decoding", "Blood Relations", "Direction Test", "Ranking & Time Sequence", "Mathematical Operations", "Venn Diagrams", "Syllogism", "Statement & Assumptions", "Data Sufficiency"]
    }
  ];

  const preparationTips = [
    "Focus strongly on current affairs, especially crime and law enforcement news",
    "Study Indian Constitution, legal provisions, and criminal law basics",
    "Practice quantitative aptitude and logical reasoning daily",
    "Improve English comprehension and vocabulary through newspaper reading",
    "Stay updated with CBI functions, structure, and recent cases",
    "Prepare for physical fitness tests and maintain good health",
    "Practice mock tests regularly to improve speed and accuracy",
    "Develop analytical thinking and problem-solving skills"
  ];

  const careerGrowth = [
    { level: "Sub Inspector (SI)", experience: "0-5 years", salary: "₹35,400-60,000" },
    { level: "Inspector", experience: "5-10 years", salary: "₹44,900-70,000" },
    { level: "Assistant SP (ASP)", experience: "10-15 years", salary: "₹56,100-90,000" },
    { level: "Deputy SP (DSP)", experience: "15-20 years", salary: "₹67,700-1,20,000" },
    { level: "Superintendent of Police (SP)", experience: "20-25 years", salary: "₹78,800-1,50,000" },
    { level: "Deputy Inspector General (DIG)", experience: "25+ years", salary: "₹1,31,100-2,00,000" }
  ];

  const physicalStandards = [
    { category: "Male (General)", height: "165 cm", weight: "As per height", chest: "84 cm (unexpanded)", vision: "6/6 or 6/9" },
    { category: "Female (General)", height: "150 cm", weight: "As per height", chest: "N/A", vision: "6/6 or 6/9" },
    { category: "Male (OBC)", height: "162 cm", weight: "As per height", chest: "82 cm (unexpanded)", vision: "6/6 or 6/9" },
    { category: "Male (SC/ST)", height: "160 cm", weight: "As per height", chest: "80 cm (unexpanded)", vision: "6/6 or 6/9" },
    { category: "Female (OBC/SC/ST)", height: "147 cm", weight: "As per height", chest: "N/A", vision: "6/6 or 6/9" }
  ];

  const cbiDepartments = [
    { 
      division: "Anti-Corruption Division",
      focus: "Corruption cases involving public servants",
      responsibilities: "Investigation of bribery, disproportionate assets, abuse of office"
    },
    { 
      division: "Economic Crimes Division",
      focus: "Financial crimes and economic offences",
      responsibilities: "Bank fraud, securities scam, money laundering cases"
    },
    { 
      division: "Special Crime Division",
      focus: "Serious and organized crimes",
      responsibilities: "Murder, kidnapping, terrorism-related cases, cybercrime"
    },
    { 
      division: "Policy & Coordination Division",
      focus: "Administrative and coordination functions",
      responsibilities: "Policy formulation, inter-agency coordination, training"
    }
  ];

  const investigationSkills = [
    { skill: "Analytical Thinking", importance: "Critical for case analysis and evidence evaluation" },
    { skill: "Communication Skills", importance: "Essential for interrogation and report writing" },
    { skill: "Legal Knowledge", importance: "Understanding of criminal law and procedures" },
    { skill: "Technical Skills", importance: "Digital forensics, cyber crime investigation" },
    { skill: "Physical Fitness", importance: "Field work, raids, and operations" },
    { skill: "Psychological Assessment", importance: "Understanding human behavior and motives" }
  ];

  const trainingProgram = [
    { phase: "Foundation Course", duration: "6 months", location: "CBI Academy, Ghaziabad", content: "Law, investigation techniques, physical training" },
    { phase: "Specialized Training", duration: "3-6 months", location: "Various institutes", content: "Cybercrime, forensics, financial investigation" },
    { phase: "On-Job Training", duration: "6-12 months", location: "Field postings", content: "Practical investigation under supervision" },
    { phase: "Advanced Courses", duration: "Variable", location: "National/International", content: "Leadership, advanced investigation techniques" }
  ];

  const postingLocations = [
    { region: "Delhi NCR", description: "Headquarters and major operations", opportunities: "High-profile cases, policy work" },
    { region: "Mumbai", description: "Financial crime hub", opportunities: "Economic crimes, corporate fraud cases" },
    { region: "Kolkata", description: "Eastern region operations", opportunities: "Cross-border crimes, trafficking cases" },
    { region: "Chennai", description: "Southern region headquarters", opportunities: "Technology crimes, industrial cases" },
    { region: "State Branches", description: "Various state locations", opportunities: "Local investigations, coordination with state police" }
  ];

  const benefits = [
    { benefit: "Job Security", details: "Central government job with excellent stability" },
    { benefit: "Prestigious Career", details: "High social status and respect in society" },
    { benefit: "Medical Facilities", details: "Comprehensive healthcare for self and family" },
    { benefit: "Accommodation", details: "Government quarters or house rent allowance" },
    { benefit: "Travel Opportunities", details: "Pan-India postings and international training" },
    { benefit: "Pension Benefits", details: "Attractive retirement benefits and gratuity" }
  ];

  const caseTypes = [
    { type: "Corruption Cases", examples: "Bribery, disproportionate assets, abuse of official position" },
    { type: "Economic Crimes", examples: "Bank fraud, securities scam, hawala transactions" },
    { type: "Special Crimes", examples: "Murder, kidnapping, terrorism, cyber crimes" },
    { type: "Multi-State Cases", examples: "Inter-state crimes, organized criminal networks" },
    { type: "High-Profile Cases", examples: "Cases involving senior officials, politicians" },
    { type: "International Cases", examples: "Cross-border crimes, extradition cases" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaGavel className="mx-auto text-6xl mb-6 text-red-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CBI Officer
              <span className="text-red-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Serve justice and fight crime - Complete guide to becoming a Central Bureau of Investigation Officer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is CBI Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is CBI?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Central Bureau of Investigation (CBI) is India's premier investigating agency, established in 1963. It operates under the Ministry of Personnel, Public Grievances and Pensions and is tasked with investigating high-profile corruption cases, economic crimes, and special crimes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  CBI officers are responsible for conducting complex investigations involving corruption in high places, economic offences affecting the country's financial health, and serious crimes that have inter-state or international ramifications.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">CBI Motto & Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Industry, Impartiality, Integrity
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Truth, Justice, Fair Play
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Professional Excellence
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Fearless Investigation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Service to Nation
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Relaxation & Reservation</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-700">
                  <span className="font-medium">OBC:</span> 3 years age relaxation
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">SC/ST:</span> 5 years age relaxation
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
              <FaUserShield className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physical & Medical Standards</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-teal-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Category</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Height</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Weight</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Chest</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Vision</th>
                  </tr>
                </thead>
                <tbody>
                  {physicalStandards.map((standard, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{standard.category}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.height}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.weight}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.chest}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{standard.vision}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CBI Departments */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">CBI Divisions & Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cbiDepartments.map((dept, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{dept.division}</h3>
                  <p className="text-gray-700 text-sm mb-3">{dept.focus}</p>
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Key Work:</span> {dept.responsibilities}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaSearch className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Types of Cases Investigated</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseTypes.map((caseType, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{caseType.type}</h3>
                  <p className="text-gray-700 text-sm">{caseType.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Program */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Program</h2>
            </div>
            <div className="space-y-6">
              {trainingProgram.map((phase, index) => (
                <div key={index} className="flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mr-6">
                    <span className="text-indigo-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{phase.phase}</h3>
                    <p className="text-gray-700 text-sm mb-2"><span className="font-medium">Location:</span> {phase.location}</p>
                    <p className="text-gray-600 text-xs">{phase.content}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">{phase.duration}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Posting Locations & Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {postingLocations.map((location, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{location.region}</h3>
                  <p className="text-gray-700 text-sm mb-3">{location.description}</p>
                  <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm">
                    <span className="font-medium">Opportunities:</span> {location.opportunities}
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
              <h2 className="text-3xl font-bold text-gray-800">Job Hierarchy & Salary</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-teal-50">
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

        {/* Investigation Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Investigation Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investigationSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{skill.skill}</h3>
                  <p className="text-gray-700 text-sm">{skill.importance}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Facilities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAward className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Benefits & Facilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
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
              <FaBookOpen className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Exam Syllabus</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {syllabus.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
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
                  <FaBalanceScale className="text-red-600 mr-3 mt-1 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Serve Justice?</h2>
            <p className="text-xl mb-8 text-red-100">Join the CBI and become part of India's premier investigation agency!</p>
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