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
  FaSearch,
  FaEye,
  FaBalanceScale,
  FaHandcuffs,
  FaUserShield,
  FaBuilding,
  FaFlag,
  FaStar,
  FaMedal,
  FaPlane,
  FaTrain,
  FaRoad,
  FaMountain,
  FaGlobe,
  FaHome,
  FaHeart,
  FaRunning,
  FaWeight,
  FaEyeSlash,
  FaFirstAid,
  FaGun,
  FaRadio,
  FaCar,
  FaHelicopter,
  FaDumbbell,
  FaCity,
  FaTrafficLight,
  FaBus,
  FaPhoneAlt,
  FaIdCard,
  FaClipboard,
  FaStopwatch
} from 'react-icons/fa';

export default function DelhiPoliceConstablePage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "10+2 (12th Pass) from recognized board" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "18-25 years (relaxation for reserved categories)" },
    { icon: FaShieldAlt, title: "Physical Fitness", detail: "Good physical and mental health" }
  ];

  const examPattern = [
    { 
      stage: "Computer Based Test (CBT)", 
      type: "Online MCQ Test",
      duration: "90 minutes",
      questions: "100 questions",
      description: "General Knowledge, Reasoning, Numerical Ability, Computer Awareness, English/Hindi"
    },
    { 
      stage: "Physical Measurement Test (PMT)", 
      type: "Physical Standards",
      duration: "1 day",
      questions: "Height/Weight/Chest",
      description: "Physical measurements as per Delhi Police standards"
    },
    { 
      stage: "Physical Endurance Test (PET)", 
      type: "Physical Test",
      duration: "1 day",
      questions: "Running Test",
      description: "5 km run in 25 minutes for male, 2.4 km run in 16 minutes for female"
    },
    { 
      stage: "Medical Examination", 
      type: "Medical Test",
      duration: "2-3 days",
      questions: "Complete Medical Check",
      description: "Comprehensive medical examination including vision, hearing, general fitness"
    },
    { 
      stage: "Character & Antecedent Verification", 
      type: "Background Check",
      duration: "4-6 weeks",
      questions: "Document Verification",
      description: "Police verification of character, background, and documents"
    }
  ];

  const physicalStandards = [
    { category: "Male (General)", height: "170 cm", weight: "50-70 kg", chest: "81-86 cm", vision: "6/6 & 6/9" },
    { category: "Male (SC)", height: "167.5 cm", weight: "48-68 kg", chest: "79-84 cm", vision: "6/6 & 6/9" },
    { category: "Male (ST)", height: "165 cm", weight: "46-66 kg", chest: "77-82 cm", vision: "6/6 & 6/9" },
    { category: "Male (OBC)", height: "167.5 cm", weight: "48-68 kg", chest: "79-84 cm", vision: "6/6 & 6/9" },
    { category: "Female (All Categories)", height: "155 cm", weight: "40-60 kg", chest: "N/A", vision: "6/6 & 6/9" },
    { category: "Male (Ex-Servicemen)", height: "165 cm", weight: "As per standards", chest: "77-82 cm", vision: "6/9 & 6/12" }
  ];

  const jobResponsibilities = [
    { 
      duty: "Law & Order Maintenance",
      description: "Maintaining peace and order in assigned areas, crowd control during events",
      importance: "Core policing function"
    },
    { 
      duty: "Traffic Management",
      description: "Traffic regulation, challaning violations, accident management",
      importance: "Essential for city mobility"
    },
    { 
      duty: "Crime Prevention & Detection",
      description: "Patrolling, crime prevention, assisting in investigations",
      importance: "Community safety"
    },
    { 
      duty: "VIP Security",
      description: "Security arrangements for VIPs, dignitaries, and government officials",
      importance: "Protocol duty"
    },
    { 
      duty: "Emergency Response",
      description: "Responding to PCR calls, emergency situations, disaster management",
      importance: "Public service"
    },
    { 
      duty: "Court Duties",
      description: "Producing accused in courts, security at court premises",
      importance: "Judicial support"
    }
  ];

  const trainingProgram = [
    { 
      phase: "Basic Training", 
      duration: "9 months", 
      location: "Delhi Police Training College, Jharoda Kalan", 
      content: "Law, police procedures, weapon training, drill, physical training, investigation techniques"
    },
    { 
      phase: "Probation Period", 
      duration: "2 years", 
      location: "Field postings in Delhi", 
      content: "On-job training, practical policing, performance evaluation under supervision"
    },
    { 
      phase: "In-Service Training", 
      duration: "Ongoing", 
      location: "Various training centers", 
      content: "Refresher courses, specialized training, skill development programs"
    },
    { 
      phase: "Specialized Courses", 
      duration: "2-8 weeks", 
      location: "Specialized institutes", 
      content: "Traffic management, investigation techniques, computer training, crowd control"
    }
  ];

  const postingAreas = [
    { 
      district: "New Delhi District",
      description: "Central Delhi area with VIP security and protocol duties",
      challenges: "High security protocols, VIP movements, tourist areas",
      specialization: "Protocol duties, heritage area patrolling"
    },
    { 
      district: "Central District",
      description: "Commercial hub including Connaught Place and business centers",
      challenges: "High crowd density, commercial disputes, traffic management",
      specialization: "Commercial area policing, crowd management"
    },
    { 
      district: "North District",
      description: "Dense residential areas, markets, and educational institutions",
      challenges: "High population density, narrow streets, community policing",
      specialization: "Community policing, market area management"
    },
    { 
      district: "South District",
      description: "Upmarket residential areas, malls, and corporate offices",
      challenges: "White-collar crimes, vehicle theft, residential security",
      specialization: "Residential security, corporate liaison"
    },
    { 
      district: "Traffic Police",
      description: "Traffic management across Delhi roads and intersections",
      challenges: "Traffic congestion, air pollution, road rage incidents",
      specialization: "Traffic regulation, challan system, accident management"
    },
    { 
      district: "Special Units",
      description: "Crime Branch, Special Cell, PCR, Women Safety Units",
      challenges: "Specialized crime investigation, emergency response",
      specialization: "Investigation, intelligence, emergency services"
    }
  ];

  const careerProgression = [
    { level: "Police Constable", experience: "0-5 years", salary: "₹21,700-69,100", next: "Head Constable" },
    { level: "Head Constable", experience: "5-10 years", salary: "₹25,500-81,100", next: "Assistant Sub Inspector" },
    { level: "Assistant Sub Inspector (ASI)", experience: "10-15 years", salary: "₹35,400-1,12,400", next: "Sub Inspector" },
    { level: "Sub Inspector (SI)", experience: "15-20 years", salary: "₹44,900-1,42,400", next: "Inspector" },
    { level: "Inspector", experience: "20-25 years", salary: "₹56,100-1,77,500", next: "ACP" },
    { level: "Assistant Commissioner of Police (ACP)", experience: "25+ years", salary: "₹67,700-2,08,700", next: "DCP" }
  ];

  const benefits = [
    { benefit: "Medical Facilities", details: "Free medical treatment for self and family through Delhi Police hospitals and CGHS" },
    { benefit: "Accommodation", details: "Government quarters or house rent allowance based on posting and availability" },
    { benefit: "Uniform & Equipment", details: "Free uniform, equipment, and maintenance allowance provided by department" },
    { benefit: "Leave Benefits", details: "30 days annual leave, casual leave, medical leave as per government rules" },
    { benefit: "Canteen Facilities", details: "Subsidized meals and essential items through police canteen stores" },
    { benefit: "Education Support", details: "Educational assistance for children, quota in government schools and colleges" },
    { benefit: "Pension & Gratuity", details: "Attractive pension scheme and gratuity benefits after retirement" },
    { benefit: "Group Insurance", details: "Group insurance cover and family pension in case of death during service" }
  ];

  const allowances = [
    { allowance: "Dearness Allowance (DA)", rate: "Current ~38%", description: "Inflation adjustment allowance revised twice yearly" },
    { allowance: "House Rent Allowance (HRA)", rate: "24% in Delhi", description: "For accommodation if government quarter not provided" },
    { allowance: "Transport Allowance", rate: "₹7,200", description: "For daily commuting to duty location" },
    { allowance: "City Compensatory Allowance", rate: "₹1,800", description: "For serving in metropolitan city" },
    { allowance: "Washing Allowance", rate: "₹300", description: "For uniform washing and maintenance" },
    { allowance: "Risk Allowance", rate: "₹4,200", description: "For hazardous and risky duties" },
    { allowance: "Night Duty Allowance", rate: "₹70 per night", description: "Additional payment for night shifts" },
    { allowance: "Court Duty Allowance", rate: "₹150 per day", description: "When performing court-related duties" }
  ];

  const specialUnits = [
    { 
      unit: "Police Control Room (PCR)",
      role: "Emergency response and patrolling",
      entry: "After basic training, good performance record",
      benefits: "Fast-paced work, emergency response skills, recognition"
    },
    { 
      unit: "Traffic Police",
      role: "Traffic management and road safety",
      entry: "Preference for educated constables, basic training completion",
      benefits: "Specialized training, interaction with public, skill development"
    },
    { 
      unit: "Women Safety Unit",
      role: "Women's safety and gender-related crimes",
      entry: "Preference for female constables, sensitivity training",
      benefits: "Social impact, specialized training, career growth"
    },
    { 
      unit: "Crime Branch",
      role: "Investigation and intelligence gathering",
      entry: "Good service record, investigative aptitude, experience",
      benefits: "Investigation skills, detective work, career advancement"
    },
    { 
      unit: "Special Security Group (SSG)",
      role: "VIP security and anti-terrorism",
      entry: "Physical fitness, clean record, security clearance",
      benefits: "High responsibility, additional training, prestige"
    },
    { 
      unit: "Cyber Crime Cell",
      role: "Technology crimes and digital investigation",
      entry: "Computer literacy, technical aptitude, training",
      benefits: "Modern skills, technology exposure, future relevance"
    }
  ];

  const syllabus = [
    { 
      subject: "General Knowledge & Current Affairs",
      topics: ["Indian History & Culture", "Geography of India", "Indian Constitution", "Current Events", "Sports", "Awards & Honors", "Books & Authors", "Science & Technology", "Environment", "Delhi-specific GK", "Important Dates", "Government Schemes"]
    },
    { 
      subject: "Reasoning & Mental Ability",
      topics: ["Verbal Reasoning", "Non-verbal Reasoning", "Logical Reasoning", "Analytical Ability", "Problem Solving", "Pattern Recognition", "Series Completion", "Coding-Decoding", "Direction Test", "Blood Relations", "Ranking & Arrangement", "Data Sufficiency"]
    },
    { 
      subject: "Numerical Ability",
      topics: ["Number System", "Simplification", "Average & Percentage", "Ratio & Proportion", "Time & Work", "Time & Distance", "Simple & Compound Interest", "Profit & Loss", "Mensuration", "Data Interpretation", "Basic Algebra", "Basic Geometry"]
    },
    { 
      subject: "Computer Awareness",
      topics: ["Computer Fundamentals", "Hardware & Software", "Operating Systems", "MS Office Applications", "Internet & Email", "Computer Security", "Computer Networks", "Database Basics", "Programming Concepts", "Latest Technology", "Digital India", "Cyber Security Basics"]
    },
    { 
      subject: "English/Hindi Language",
      topics: ["Grammar Rules", "Vocabulary", "Comprehension", "Synonyms & Antonyms", "Error Detection", "Sentence Formation", "Idioms & Phrases", "Active-Passive Voice", "Direct-Indirect Speech", "Fill in the Blanks", "One Word Substitution", "Para Jumbles"]
    }
  ];

  const preparationTips = [
    "Focus heavily on Delhi-specific current affairs and local issues",
    "Build strong foundation in basic mathematics and reasoning",
    "Practice English/Hindi comprehension and grammar regularly",
    "Stay updated with recent government policies and schemes",
    "Develop computer awareness through practical usage",
    "Maintain excellent physical fitness through regular exercise",
    "Read newspapers daily, especially Delhi edition sections",
    "Practice mock tests regularly to improve speed and accuracy",
    "Study Delhi Police organization structure and recent initiatives",
    "Focus on Indian Constitution and basic legal knowledge"
  ];

  const physicalPreparation = [
    { 
      test: "5 km Running (Male)",
      requirement: "Complete in 25 minutes",
      training: "Daily running 3-6 km, interval training, stamina building exercises",
      tips: "Start with shorter distances, gradually increase pace and distance, maintain consistency"
    },
    { 
      test: "2.4 km Running (Female)",
      requirement: "Complete in 16 minutes",
      training: "Daily running 2-4 km, speed training, cardiovascular exercises",
      tips: "Focus on maintaining steady pace, breathing techniques, proper running form"
    },
    { 
      test: "Physical Standards",
      requirement: "Meet height, weight, chest measurements",
      training: "Balanced diet, regular exercise, posture improvement",
      tips: "Maintain ideal weight, improve posture through exercises, healthy lifestyle"
    },
    { 
      test: "General Fitness",
      requirement: "Overall physical and mental fitness",
      training: "Push-ups, sit-ups, stretching, sports activities",
      tips: "Regular exercise routine, adequate sleep, stress management, avoid injuries"
    }
  ];

  const documentsList = [
    { document: "Educational Certificates", requirement: "10th, 12th marksheets and certificates" },
    { document: "Age Proof", requirement: "Birth certificate or 10th certificate" },
    { document: "Caste Certificate", requirement: "For reserved category candidates (if applicable)" },
    { document: "Domicile Certificate", requirement: "Delhi domicile or as per notification" },
    { document: "Character Certificate", requirement: "From local police station or gazetted officer" },
    { document: "Medical Certificate", requirement: "Fitness certificate from registered medical practitioner" },
    { document: "Income Certificate", requirement: "For EWS category (if applicable)" },
    { document: "Ex-Servicemen Certificate", requirement: "For ex-servicemen candidates (if applicable)" },
    { document: "Photographs", requirement: "Recent passport size photographs as specified" },
    { document: "Identity Proof", requirement: "Aadhaar card, voter ID, or other valid ID proof" }
  ];

  const recruitmentStatistics = [
    { year: "2023", vacancies: "25,271", applications: "12,00,000+", success_rate: "2.1%" },
    { year: "2022", vacancies: "0", applications: "No recruitment", success_rate: "N/A" },
    { year: "2021", vacancies: "5,846", applications: "8,50,000+", success_rate: "0.7%" },
    { year: "2020", vacancies: "0", applications: "No recruitment", success_rate: "N/A" },
    { year: "2019", vacancies: "554", applications: "3,00,000+", success_rate: "0.2%" }
  ];

  const salaryBreakdown = [
    { component: "Basic Pay", amount: "₹21,700", description: "Starting basic salary as per 7th Pay Commission" },
    { component: "Dearness Allowance (DA)", amount: "₹8,246", description: "Current DA at 38% of basic pay" },
    { component: "House Rent Allowance (HRA)", amount: "₹5,208", description: "24% of basic pay for Delhi posting" },
    { component: "Transport Allowance", amount: "₹7,200", description: "Fixed transport allowance for all" },
    { component: "Other Allowances", amount: "₹2,100", description: "CCA, washing, risk allowances combined" },
    { component: "Gross Salary", amount: "₹44,454", description: "Total monthly salary (approximate)" },
    { component: "Deductions", amount: "₹5,000", description: "PF, insurance, other deductions" },
    { component: "In-hand Salary", amount: "₹39,454", description: "Net take-home salary (approximate)" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Delhi Police Constable
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Serve the Capital - Complete guide to joining Delhi Police as a Constable
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Delhi Police Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Delhi Police</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Delhi Police is the primary law enforcement agency for the National Capital Territory of Delhi, established in 1861. With over 85,000 personnel, it is responsible for maintaining law and order, preventing crime, and ensuring the security of the capital city of India.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a Police Constable in Delhi Police, you'll be at the forefront of community policing, traffic management, crime prevention, and maintaining peace in one of India's most important cities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Delhi Police Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Service with Integrity
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Community Policing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Professional Excellence
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Citizen-Centric Approach
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Technology-Enabled Policing
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Age Relaxation & Reservation</h3>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="text-gray-700">
                  <span className="font-medium">OBC:</span> 3 years relaxation
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">SC/ST:</span> 5 years relaxation
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">Ex-Servicemen:</span> 5 years relaxation
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">EWS:</span> As per government norms
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
              <FaDumbbell className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physical Standards</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-red-50 to-orange-50">
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

        {/* Physical Preparation */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRunning className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physical Fitness Preparation</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {physicalPreparation.map((test, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{test.test}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Requirement:</span> {test.requirement}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Training:</span> {test.training}
                    </div>
                    <div className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Tips:</span> {test.tips}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Responsibilities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUserShield className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Responsibilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobResponsibilities.map((duty, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{duty.duty}</h3>
                  <p className="text-gray-700 text-sm mb-3">{duty.description}</p>
                  <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg text-sm">
                    <span className="font-medium">Importance:</span> {duty.importance}
                  </div>
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
                <div key={index} className="flex items-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
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

        {/* Posting Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMapMarkerAlt className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Posting Areas in Delhi</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {postingAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{area.district}</h3>
                  <p className="text-gray-700 text-sm mb-3">{area.description}</p>
                  <div className="space-y-2">
                    <div className="text-gray-600 text-sm">
                      <span className="font-medium">Challenges:</span> {area.challenges}
                    </div>
                    <div className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-sm">
                      <span className="font-medium">Specialization:</span> {area.specialization}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Units */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStar className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Special Units & Career Growth</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {specialUnits.map((unit, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{unit.unit}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Role:</span> {unit.role}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Entry:</span> {unit.entry}
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Benefits:</span> {unit.benefits}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Salary & Allowances */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Salary Breakdown</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Salary Components</h3>
                <div className="space-y-3">
                  {salaryBreakdown.map((component, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                      <div>
                        <span className="font-medium text-gray-800">{component.component}</span>
                        <p className="text-xs text-gray-600">{component.description}</p>
                      </div>
                      <span className="font-bold text-green-600">{component.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Allowances</h3>
                <div className="space-y-3">
                  {allowances.slice(0, 6).map((allowance, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-800 text-sm">{allowance.allowance}</span>
                        <span className="font-bold text-green-600 text-sm">{allowance.rate}</span>
                      </div>
                      <p className="text-xs text-gray-600">{allowance.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Progression */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Path</h2>
            </div>
            <div className="space-y-6">
              {careerProgression.map((level, index) => (
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{level.level}</h3>
                      <p className="text-gray-600">{level.experience}</p>
                      {level.next && <p className="text-sm text-blue-600">Next: {level.next}</p>}
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

        {/* Exam Syllabus */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Detailed Exam Syllabus</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {syllabus.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
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

        {/* Benefits & Facilities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAward className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Benefits & Facilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{benefit.benefit}</h3>
                  <p className="text-gray-700 text-sm">{benefit.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaIdCard className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Required Documents</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {documentsList.map((doc, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-100">
                  <FaClipboard className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">{doc.document}</h3>
                    <p className="text-sm text-gray-600">{doc.requirement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment Statistics */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Recruitment Statistics</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Year</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Vacancies</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Applications</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Success Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {recruitmentStatistics.map((stat, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{stat.year}</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-medium">{stat.vacancies}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{stat.applications}</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-medium">{stat.success_rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Preparation Tips */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Preparation Strategy</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100">
                  <FaShieldAlt className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Serve Delhi?</h2>
            <p className="text-xl mb-8 text-blue-100">Join Delhi Police and make the capital safer for everyone!</p>
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