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
  FaDumbbell
} from 'react-icons/fa';

export default function CRPFOfficerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's Degree from recognized university" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "20-25 years (relaxation for reserved categories)" },
    { icon: FaShieldAlt, title: "Physical Fitness", detail: "Excellent physical and mental health" }
  ];

  const examPattern = [
    { 
      stage: "Written Examination", 
      type: "Online MCQ Test",
      duration: "3 hours",
      questions: "200 questions",
      description: "General Studies, Mental Ability, General Hindi/English, Elementary Mathematics"
    },
    { 
      stage: "Physical Standards Test (PST)", 
      type: "Physical Measurement",
      duration: "1 day",
      questions: "Height/Weight/Chest",
      description: "Physical measurements as per category requirements"
    },
    { 
      stage: "Physical Efficiency Test (PET)", 
      type: "Physical Test",
      duration: "1-2 days",
      questions: "Running/High Jump/Long Jump",
      description: "1600m run in 5.5 minutes, High Jump 1.25m, Long Jump 4.25m"
    },
    { 
      stage: "Medical Examination", 
      type: "Medical Test",
      duration: "2-3 days",
      questions: "Complete Medical Check",
      description: "Detailed medical examination including vision, hearing, general fitness"
    }
  ];

  const physicalStandards = [
    { category: "Male (General/OBC)", height: "170 cm", weight: "50 kg", chest: "80-85 cm", vision: "6/6 and 6/9" },
    { category: "Male (SC)", height: "165 cm", weight: "48 kg", chest: "78-83 cm", vision: "6/6 and 6/9" },
    { category: "Male (ST)", height: "162.5 cm", weight: "47 kg", chest: "76-81 cm", vision: "6/6 and 6/9" },
    { category: "Female (All Categories)", height: "157 cm", weight: "46 kg", chest: "N/A", vision: "6/6 and 6/9" },
    { category: "Male (Ex-Servicemen)", height: "165 cm", weight: "50 kg", chest: "78-83 cm", vision: "6/9 and 6/12" }
  ];

  const jobProfiles = [
    { post: "Assistant Sub Inspector (ASI)", level: "Group C", salary: "₹35,400-1,12,400", duties: "Field operations, security duties, crowd control" },
    { post: "Sub Inspector (SI)", level: "Group C", salary: "₹44,900-1,42,400", duties: "Team leadership, operations supervision, administrative duties" },
    { post: "Inspector", level: "Group B", salary: "₹56,100-1,77,500", duties: "Unit command, strategic operations, training supervision" },
    { post: "Assistant Commandant", level: "Group A", salary: "₹67,700-2,08,700", duties: "Battalion operations, policy implementation, leadership roles" },
    { post: "Deputy Commandant", level: "Group A", salary: "₹78,800-2,09,200", duties: "Senior operations management, inter-agency coordination" },
    { post: "Commandant", level: "Group A", salary: "₹1,18,500-2,14,100", duties: "Force command, strategic planning, administrative control" }
  ];

  const crpfUnits = [
    { 
      unit: "General Duty",
      role: "Law and order, crowd control, VIP security",
      posting: "All states across India",
      specialization: "Basic paramilitary operations"
    },
    { 
      unit: "Rapid Action Force (RAF)",
      role: "Riot control and crowd management",
      posting: "Major cities and sensitive areas",
      specialization: "Non-lethal crowd control techniques"
    },
    { 
      unit: "Combat Battalion for Resolute Action (CoBRA)",
      role: "Anti-Naxal operations",
      posting: "Naxal-affected areas",
      specialization: "Jungle warfare and counter-insurgency"
    },
    { 
      unit: "Special Duty Group (SDG)",
      role: "VIP security and intelligence",
      posting: "Delhi and state capitals",
      specialization: "Close protection and intelligence"
    },
    { 
      unit: "Mahila Battalion",
      role: "Women's security and crowd control",
      posting: "Various locations",
      specialization: "Women-specific operations"
    },
    { 
      unit: "Signal Battalion",
      role: "Communication and technical support",
      posting: "Technical centers",
      specialization: "Communications and IT support"
    }
  ];

  const trainingProgram = [
    { 
      phase: "Basic Training", 
      duration: "44 weeks", 
      location: "CRPF Academy, Mount Abu/Neemuch", 
      content: "Physical training, weapon handling, law, drill, tactical operations"
    },
    { 
      phase: "Probation Period", 
      duration: "2 years", 
      location: "Field postings", 
      content: "On-job training, practical experience, performance evaluation"
    },
    { 
      phase: "Specialized Training", 
      duration: "4-12 weeks", 
      location: "Various training centers", 
      content: "Unit-specific training (RAF, CoBRA, etc.), advanced tactics"
    },
    { 
      phase: "Advanced Courses", 
      duration: "Variable", 
      location: "Various institutes", 
      content: "Leadership development, counter-insurgency, investigation techniques"
    }
  ];

  const postingLocations = [
    { 
      region: "Jammu & Kashmir",
      description: "Counter-terrorism and border security",
      challenges: "High altitude, extreme weather, security threats",
      allowances: "Special area allowance, risk allowance"
    },
    { 
      region: "North-East States",
      description: "Border security and insurgency control",
      challenges: "Difficult terrain, cultural diversity, insurgency",
      allowances: "Border area allowance, hardship allowance"
    },
    { 
      region: "Naxal-Affected Areas",
      description: "Anti-Naxal operations (CoBRA)",
      challenges: "Jungle operations, IED threats, guerrilla warfare",
      allowances: "Field area allowance, risk allowance"
    },
    { 
      region: "Delhi NCR",
      description: "VIP security, parliament security, law and order",
      challenges: "High responsibility, protocol duties, crowd management",
      allowances: "Transport allowance, metro facilities"
    },
    { 
      region: "Industrial Belt",
      description: "Industrial security, crowd control",
      challenges: "Labor unrest, industrial accidents, crowd control",
      allowances: "Industrial area allowance"
    },
    { 
      region: "State Capitals",
      description: "State government security, VIP protection",
      challenges: "Political security, ceremonial duties, crowd control",
      allowances: "City compensatory allowance"
    }
  ];

  const benefits = [
    { benefit: "Job Security", details: "Central government job with excellent stability and pension" },
    { benefit: "Medical Facilities", details: "Comprehensive healthcare through CGHS for self and family" },
    { benefit: "Accommodation", details: "Government quarters or house rent allowance" },
    { benefit: "Canteen Facilities", details: "Subsidized food and essential items through CSD canteens" },
    { benefit: "Leave Travel Concession", details: "Free/subsidized travel for self and family" },
    { benefit: "Education Benefits", details: "Kendriya Vidyalaya admission for children, education allowance" },
    { benefit: "Gallantry Awards", details: "Recognition through medals and awards for exceptional service" },
    { benefit: "Post-Retirement Benefits", details: "Pension, gratuity, medical facilities after retirement" }
  ];

  const dutiesResponsibilities = [
    { 
      duty: "Internal Security",
      description: "Maintaining law and order during communal riots, elections, and emergencies",
      importance: "Critical for national stability"
    },
    { 
      duty: "Border Guarding",
      description: "Securing international borders and preventing infiltration",
      importance: "National defense priority"
    },
    { 
      duty: "Counter-Insurgency",
      description: "Operations against insurgent groups and terrorist organizations",
      importance: "Internal security challenge"
    },
    { 
      duty: "VIP Security",
      description: "Protection of VIPs, government officials, and foreign dignitaries",
      importance: "High-profile responsibility"
    },
    { 
      duty: "Crowd Control",
      description: "Managing large gatherings, protests, and maintaining public order",
      importance: "Democratic policing"
    },
    { 
      duty: "Disaster Management",
      description: "Rescue and relief operations during natural disasters",
      importance: "Humanitarian service"
    }
  ];

  const allowancesIncentives = [
    { allowance: "Dearness Allowance (DA)", rate: "Current rate ~38%", description: "Inflation adjustment allowance" },
    { allowance: "House Rent Allowance (HRA)", rate: "8-24% of basic pay", description: "Based on posting location classification" },
    { allowance: "Transport Allowance", rate: "₹3,600-7,200", description: "For commuting expenses" },
    { allowance: "Special Area Allowance", rate: "25-50% of basic pay", description: "For postings in difficult areas" },
    { allowance: "Risk Allowance", rate: "₹4,200-17,300", description: "For hazardous duty postings" },
    { allowance: "Field Area Allowance", rate: "₹2,700-6,000", description: "For field postings in operational areas" },
    { allowance: "High Altitude Allowance", rate: "₹1,350-3,150", description: "For high altitude postings" },
    { allowance: "Uniform Allowance", rate: "₹20,000 annually", description: "For uniform and equipment maintenance" }
  ];

  const careerProgression = [
    { level: "Assistant Sub Inspector (ASI)", experience: "0-5 years", salary: "₹35,400-60,000" },
    { level: "Sub Inspector (SI)", experience: "5-10 years", salary: "₹44,900-75,000" },
    { level: "Inspector", experience: "10-15 years", salary: "₹56,100-90,000" },
    { level: "Assistant Commandant", experience: "15-20 years", salary: "₹67,700-1,20,000" },
    { level: "Deputy Commandant", experience: "20-25 years", salary: "₹78,800-1,50,000" },
    { level: "Commandant", experience: "25+ years", salary: "₹1,18,500-2,00,000" }
  ];

  const preparationTips = [
    "Focus on current affairs, especially internal security and policing matters",
    "Build excellent physical fitness through regular exercise and sports",
    "Study Indian Constitution, criminal law, and police procedures",
    "Practice quantitative aptitude and logical reasoning regularly",
    "Improve general Hindi and English language skills",
    "Stay updated with CRPF organization, structure, and recent operations",
    "Develop leadership qualities and team management skills",
    "Prepare for high-pressure situations and quick decision making"
  ];

  const physicalPreparation = [
    { 
      exercise: "Running",
      requirement: "1600m in 5.5 minutes",
      training: "Daily 3-5 km running, interval training, stamina building",
      tips: "Start slow, gradually increase pace and distance"
    },
    { 
      exercise: "High Jump",
      requirement: "1.25m (Male), 1.10m (Female)",
      training: "Jump training, leg strengthening, flexibility exercises",
      tips: "Focus on technique, practice regularly, build leg power"
    },
    { 
      exercise: "Long Jump",
      requirement: "4.25m (Male), 3.5m (Female)",
      training: "Sprint training, explosive leg workouts, coordination",
      tips: "Work on approach run, takeoff technique, landing form"
    },
    { 
      exercise: "General Fitness",
      requirement: "Overall physical fitness",
      training: "Push-ups, pull-ups, sit-ups, weight training",
      tips: "Maintain consistent routine, balanced diet, adequate rest"
    }
  ];

  const medalGallantryAwards = [
    { award: "President's Police Medal", criteria: "Distinguished service", benefits: "Prestige and recognition" },
    { award: "Police Medal", criteria: "Meritorious service", benefits: "Career advancement points" },
    { award: "Shaurya Chakra", criteria: "Gallantry in operations", benefits: "Monetary reward and recognition" },
    { award: "Kirti Chakra", criteria: "Conspicuous gallantry", benefits: "High honor and monetary benefits" },
    { award: "Ashoka Chakra", criteria: "Most conspicuous bravery", benefits: "Highest peacetime gallantry award" },
    { award: "Force Medal", criteria: "Long and faithful service", benefits: "Service recognition" }
  ];

  const recruitmentStatistics = [
    { year: "2023", vacancies: "19,673", applications: "15,00,000+", success_rate: "1.3%" },
    { year: "2022", vacancies: "20,000", applications: "14,50,000+", success_rate: "1.4%" },
    { year: "2021", vacancies: "17,500", applications: "12,00,000+", success_rate: "1.5%" },
    { year: "2020", vacancies: "15,000", applications: "10,50,000+", success_rate: "1.4%" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShieldAlt className="mx-auto text-6xl mb-6 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CRPF Officer
              <span className="text-orange-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Serve the Nation with Honor - Complete guide to joining Central Reserve Police Force
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is CRPF Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About CRPF</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Central Reserve Police Force (CRPF) is India's largest Central Armed Police Force, established in 1939. With over 3.25 lakh personnel, CRPF plays a crucial role in maintaining internal security, counter-insurgency operations, and law enforcement across the country.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  CRPF officers serve in challenging environments from Kashmir to Kerala, from border areas to metropolitan cities, ensuring peace and security for the nation. The force is known for its professionalism, discipline, and sacrifice in service to the nation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">CRPF Motto & Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    "Service and Loyalty" (सेवा और निष्ठा)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Courage and Commitment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Integrity and Honor
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    National Unity
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Secular Outlook
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-blue-600 mx-auto mb-4" />
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
                  <span className="font-medium">Women:</span> As per category rules
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
              <FaDumbbell className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physical Standards</h2>
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

        {/* Physical Preparation */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRunning className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Physical Fitness Preparation</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {physicalPreparation.map((exercise, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{exercise.exercise}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Requirement:</span> {exercise.requirement}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Training:</span> {exercise.training}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Tips:</span> {exercise.tips}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRPF Units & Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFlag className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">CRPF Units & Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {crpfUnits.map((unit, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{unit.unit}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Role:</span> {unit.role}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Posting:</span> {unit.posting}
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Specialization:</span> {unit.specialization}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Duties & Responsibilities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUserShield className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Duties & Responsibilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dutiesResponsibilities.map((duty, index) => (
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
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Program</h2>
            </div>
            <div className="space-y-6">
              {trainingProgram.map((phase, index) => (
                <div key={index} className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-6">
                    <span className="text-purple-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{phase.phase}</h3>
                    <p className="text-gray-700 text-sm mb-2"><span className="font-medium">Location:</span> {phase.location}</p>
                    <p className="text-gray-600 text-xs">{phase.content}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{phase.duration}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Posting Locations & Challenges</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {postingLocations.map((location, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{location.region}</h3>
                  <p className="text-gray-700 text-sm mb-3">{location.description}</p>
                  <div className="space-y-2">
                    <div className="text-gray-600 text-sm">
                      <span className="font-medium">Challenges:</span> {location.challenges}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm">
                      <span className="font-medium">Benefits:</span> {location.allowances}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Hierarchy & Salary */}
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

        {/* Allowances & Incentives */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Allowances & Incentives</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {allowancesIncentives.map((allowance, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{allowance.allowance}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rate:</span>
                      <span className="font-medium text-blue-600">{allowance.rate}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{allowance.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medal & Gallantry Awards */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMedal className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Medals & Gallantry Awards</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medalGallantryAwards.map((award, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{award.award}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Criteria:</span> {award.criteria}
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Benefits:</span> {award.benefits}
                    </div>
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

        {/* Career Progression */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression</h2>
            </div>
            <div className="space-y-6">
              {careerProgression.map((level, index) => (
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

        {/* Recruitment Statistics */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Recruitment Statistics</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-50 to-cyan-50">
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
              <FaTrophy className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Preparation Strategy</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-100">
                  <FaShieldAlt className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Serve the Nation?</h2>
            <p className="text-xl mb-8 text-orange-100">Join CRPF and be part of India's largest paramilitary force!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-orange-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-900 transition-colors inline-flex items-center">
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