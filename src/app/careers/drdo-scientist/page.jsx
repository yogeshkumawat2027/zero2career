import Link from 'next/link';
import React from 'react';
import { 
  FaRocket, 
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
  FaAtom,
  FaLaptopCode,
  FaFlask,
  FaMicroscope,
  FaIndustry,
  FaShieldAlt,
  FaLightbulb,
  FaSpaceShuttle,
  FaSatellite,
  FaCrosshairs,
  FaRadar
} from 'react-icons/fa';

export default function DRDOScientistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "B.E/B.Tech/M.Sc/M.Tech in relevant discipline" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "28 years for Scientist 'B' (relaxation for reserved)" },
    { icon: FaShieldAlt, title: "Security Clearance", detail: "Clean background for defense research" }
  ];

  const examPattern = [
    { 
      stage: "Scientist Entry Test (SET)", 
      type: "Online MCQ Test",
      duration: "90 minutes",
      questions: "100 questions",
      description: "Engineering Mathematics, General Aptitude, Subject-specific technical knowledge"
    },
    { 
      stage: "Interview/Skill Test", 
      type: "Technical Interview",
      duration: "45-60 minutes",
      questions: "Technical & HR rounds",
      description: "Technical knowledge, research aptitude, communication skills, personality assessment"
    },
    { 
      stage: "Medical Examination", 
      type: "Medical Test",
      duration: "1-2 days",
      questions: "Complete health check",
      description: "Comprehensive medical examination including vision, hearing, general fitness"
    },
    { 
      stage: "Security Clearance", 
      type: "Background Verification",
      duration: "3-6 months",
      questions: "Character verification",
      description: "Detailed background check, police verification, reference checks"
    }
  ];

  const researchDomains = [
    { 
      domain: "Aeronautics",
      focus: "Aircraft design, propulsion, avionics, flight systems",
      labs: "ADA, HAL, NAL, CEMILAC",
      projects: "Tejas Fighter, AMCA, UAVs, Helicopter systems",
      technologies: "Composite materials, jet engines, radar systems"
    },
    { 
      domain: "Missiles & Strategic Systems",
      focus: "Ballistic missiles, cruise missiles, air defense systems",
      labs: "DRDL, ASL, RCI, ITR",
      projects: "Agni series, BrahMos, Akash, Prithvi missiles",
      technologies: "Guidance systems, propulsion, warhead technology"
    },
    { 
      domain: "Naval Systems",
      focus: "Sonar, underwater weapons, ship systems",
      labs: "NSTL, NPOL, DMRL",
      projects: "Torpedoes, sonar systems, submarine technology",
      technologies: "Underwater acoustics, marine materials, navigation"
    },
    { 
      domain: "Electronics & Communication",
      focus: "Radar, electronic warfare, communication systems",
      labs: "LRDE, DLRL, SSPL, DEAL",
      projects: "AESA radars, EW systems, satellite communication",
      technologies: "Microwave, RF systems, signal processing"
    },
    { 
      domain: "Combat Vehicles",
      focus: "Main battle tanks, armored vehicles, artillery",
      labs: "CVRDE, ARDE, TBRL",
      projects: "Arjun tank, Pinaka MBRL, howitzers",
      technologies: "Armor materials, fire control systems, mobility"
    },
    { 
      domain: "Life Sciences",
      focus: "Chemical detection, medical countermeasures, food technology",
      labs: "DIBER, INMAS, DFRL",
      projects: "NBC protection, battlefield medicine, nutrition",
      technologies: "Biosensors, protective equipment, medical devices"
    }
  ];

  const jobProfiles = [
    { post: "Scientist 'B'", experience: "Fresh graduates", salary: "₹56,100-1,77,500", duties: "Research & development, project execution, technical analysis" },
    { post: "Scientist 'C'", experience: "3-8 years", salary: "₹67,700-2,08,700", duties: "Project leadership, team management, advanced research" },
    { post: "Scientist 'D'", experience: "8-13 years", salary: "₹78,800-2,09,200", duties: "Program management, strategic planning, innovation leadership" },
    { post: "Scientist 'E'", experience: "13-18 years", salary: "₹1,31,100-2,16,600", duties: "Technology development, policy formulation, institutional planning" },
    { post: "Scientist 'F'", experience: "18-25 years", salary: "₹1,44,200-2,18,200", duties: "Directorial roles, national program leadership" },
    { post: "Scientist 'G'", experience: "25+ years", salary: "₹1,82,200-2,24,100", duties: "Distinguished scientist, apex level positions" }
  ];

  const majorLaboratories = [
    { 
      lab: "Defence Research & Development Laboratory (DRDL)",
      location: "Hyderabad",
      focus: "Missiles and propulsion systems",
      achievements: "Agni, Prithvi, BrahMos missile systems"
    },
    { 
      lab: "Aeronautical Development Agency (ADA)",
      location: "Bangalore",
      focus: "Fighter aircraft development",
      achievements: "Tejas Light Combat Aircraft, AMCA program"
    },
    { 
      lab: "Electronics & Radar Development Establishment (LRDE)",
      location: "Bangalore",
      focus: "Radar and electronic systems",
      achievements: "AESA radars, surveillance systems"
    },
    { 
      lab: "Combat Vehicles R&D Establishment (CVRDE)",
      location: "Chennai",
      focus: "Armored vehicles and tanks",
      achievements: "Arjun Main Battle Tank, FICV program"
    },
    { 
      lab: "Naval Science & Technological Laboratory (NSTL)",
      location: "Visakhapatnam",
      focus: "Underwater weapons and systems",
      achievements: "Torpedo systems, sonar technology"
    },
    { 
      lab: "Defence Metallurgical Research Laboratory (DMRL)",
      location: "Hyderabad",
      focus: "Advanced materials and metallurgy",
      achievements: "Aerospace materials, armor materials"
    }
  ];

  const educationalRequirements = [
    { 
      category: "Engineering Disciplines",
      courses: "Mechanical, Electrical, Electronics, Computer Science, Aerospace, Chemical, Metallurgy",
      level: "B.E/B.Tech (4 years) or M.Tech",
      specialization: "Relevant to DRDO research domains",
      prerequisites: "60% minimum marks, GATE qualification preferred"
    },
    { 
      category: "Science Disciplines",
      courses: "Physics, Chemistry, Mathematics, Materials Science, Computer Science",
      level: "M.Sc (2 years) or Ph.D",
      specialization: "Applied sciences relevant to defense technology",
      prerequisites: "60% minimum marks, research background preferred"
    },
    { 
      category: "Interdisciplinary Areas",
      courses: "Biotechnology, Environmental Science, Instrumentation, Applied Mathematics",
      level: "M.Tech/M.Sc/Ph.D",
      specialization: "Emerging technologies for defense applications",
      prerequisites: "Strong technical foundation, innovation mindset"
    }
  ];

  const researchAreas = [
    { 
      area: "Artificial Intelligence & Machine Learning",
      applications: "Autonomous systems, decision support, pattern recognition",
      relevance: "Future warfare, smart weapons, cyber security",
      funding: "High priority area with substantial investment"
    },
    { 
      area: "Quantum Technologies",
      applications: "Quantum communication, computing, sensors",
      relevance: "Secure communication, advanced computing capabilities",
      funding: "National mission with dedicated funding"
    },
    { 
      area: "Hypersonic Technologies",
      applications: "High-speed vehicles, propulsion systems",
      relevance: "Next-generation missiles, space access vehicles",
      funding: "Strategic priority with international competition"
    },
    { 
      area: "Cyber Security & Information Warfare",
      applications: "Network security, electronic warfare, cyber defense",
      relevance: "Modern warfare, critical infrastructure protection",
      funding: "Rapidly growing area with urgent requirements"
    },
    { 
      area: "Directed Energy Weapons",
      applications: "Laser weapons, microwave systems, particle beams",
      relevance: "Anti-drone systems, missile defense, non-lethal weapons",
      funding: "Advanced technology with long-term potential"
    },
    { 
      area: "Biotechnology & Chemical Defense",
      applications: "Detection systems, protective equipment, countermeasures",
      relevance: "NBC protection, biosecurity, medical countermeasures",
      funding: "Critical for personnel protection and homeland security"
    }
  ];

  const careerProgression = [
    { level: "Scientist 'B'", experience: "0-3 years", salary: "₹56,100-80,000", focus: "Learning, project contribution, skill development" },
    { level: "Scientist 'C'", experience: "3-8 years", salary: "₹67,700-1,20,000", focus: "Project leadership, team building, specialization" },
    { level: "Scientist 'D'", experience: "8-13 years", salary: "₹78,800-1,50,000", focus: "Program management, innovation, technology transfer" },
    { level: "Scientist 'E'", experience: "13-18 years", salary: "₹1,31,100-1,80,000", focus: "Strategic planning, institutional development" },
    { level: "Scientist 'F'", experience: "18-25 years", salary: "₹1,44,200-2,00,000", focus: "Directorial roles, policy formulation" },
    { level: "Scientist 'G'", experience: "25+ years", salary: "₹1,82,200-2,24,100", focus: "Apex leadership, national programs" }
  ];

  const benefits = [
    { benefit: "Research Environment", details: "State-of-the-art facilities, latest technology access, world-class laboratories" },
    { benefit: "Job Security", details: "Central government position with excellent stability and career progression" },
    { benefit: "Medical Facilities", details: "Comprehensive healthcare through CGHS for self and family members" },
    { benefit: "Accommodation", details: "Government quarters or house rent allowance based on grade and location" },
    { benefit: "Professional Growth", details: "Training programs, conferences, international collaborations, higher studies" },
    { benefit: "Research Funding", details: "Adequate project funding, equipment access, research grants and fellowships" },
    { benefit: "Publication Support", details: "Encourage research publications, patent filing, technology transfer" },
    { benefit: "Retirement Benefits", details: "Attractive pension scheme, gratuity, medical benefits after retirement" }
  ];

  const allowances = [
    { allowance: "Dearness Allowance (DA)", rate: "Current ~38%", description: "Inflation adjustment revised twice yearly" },
    { allowance: "House Rent Allowance (HRA)", rate: "8-24% of basic", description: "Based on city classification (X/Y/Z)" },
    { allowance: "Transport Allowance", rate: "₹3,600-7,200", description: "Based on grade and city classification" },
    { allowance: "Research Allowance", rate: "₹3,000-10,000", description: "For active research participation and projects" },
    { allowance: "Overtime Allowance", rate: "As applicable", description: "For extended working hours and special projects" },
    { allowance: "Field Allowance", rate: "Variable", description: "For field trials, testing, and outdoor assignments" },
    { allowance: "Risk Allowance", rate: "₹2,000-5,000", description: "For hazardous research work and testing activities" },
    { allowance: "Professional Development", rate: "₹25,000-50,000", description: "Annual budget for training, conferences, courses" }
  ];

  const skillsRequired = [
    { 
      category: "Technical Skills",
      skills: ["Advanced Mathematics", "Programming (C/C++, Python, MATLAB)", "CAD/CAE Software", "Simulation Tools", "Data Analysis", "Research Methodology"]
    },
    { 
      category: "Domain Expertise",
      skills: ["System Design", "Materials Science", "Signal Processing", "Control Systems", "Embedded Systems", "Project Management"]
    },
    { 
      category: "Research Skills",
      skills: ["Literature Review", "Experimental Design", "Statistical Analysis", "Technical Writing", "Patent Documentation", "Peer Review"]
    },
    { 
      category: "Soft Skills",
      skills: ["Problem Solving", "Innovation Mindset", "Team Collaboration", "Communication", "Leadership", "Adaptability"]
    }
  ];

  const trainingPrograms = [
    { 
      program: "Induction Training", 
      duration: "3-6 months", 
      focus: "DRDO orientation, security protocols, basic research methodologies",
      location: "DRDO institutes and training centers"
    },
    { 
      program: "Technical Training", 
      duration: "6-12 months", 
      focus: "Specialized technical skills, laboratory techniques, equipment handling",
      location: "Parent laboratory and specialized institutes"
    },
    { 
      program: "Advanced Courses", 
      duration: "2-4 weeks", 
      focus: "Emerging technologies, project management, leadership development",
      location: "DRDO training centers, IITs, IISc"
    },
    { 
      program: "International Exposure", 
      duration: "3-12 months", 
      focus: "Advanced research, international collaboration, technology assessment",
      location: "Foreign universities and research institutions"
    }
  ];

  const preparationTips = [
    "Build strong foundation in core engineering/science subjects relevant to your discipline",
    "Stay updated with latest developments in defense technology and research trends",
    "Practice GATE-level questions and develop problem-solving skills",
    "Enhance programming skills and familiarity with simulation software",
    "Read DRDO publications, annual reports, and recent technological achievements",
    "Develop technical communication skills for interviews and presentations",
    "Understand basic concepts of systems engineering and project management",
    "Follow current affairs related to defense, technology, and national security",
    "Practice mock interviews focusing on technical knowledge and research aptitude",
    "Build awareness of DRDO's organizational structure, labs, and major programs"
  ];

  const notableProjects = [
    { 
      project: "Integrated Guided Missile Development Program (IGMDP)",
      achievement: "Agni, Prithvi, Akash, Nag, Trishul missile systems",
      impact: "Established India as missile power, strategic deterrence capability",
      timeline: "1983-2008, continuing with advanced variants"
    },
    { 
      project: "Light Combat Aircraft (LCA) Tejas",
      achievement: "Indigenous 4th generation fighter aircraft",
      impact: "Aerospace technology mastery, reduced import dependence",
      timeline: "1984-present, inducted into IAF service"
    },
    { 
      project: "Ballistic Missile Defense (BMD) Program",
      achievement: "Prithvi Air Defence (PAD) and Advanced Air Defence (AAD)",
      impact: "Multi-tier missile defense capability for the country",
      timeline: "1999-present, operational deployment in progress"
    },
    { 
      project: "Anti-Satellite (ASAT) Mission Shakti",
      achievement: "Successfully destroyed satellite in Low Earth Orbit",
      impact: "4th country to demonstrate ASAT capability",
      timeline: "2019, demonstrated space warfare capability"
    }
  ];

  const recruitmentStatistics = [
    { year: "2023", vacancies: "351", applications: "9,50,000+", success_rate: "0.04%" },
    { year: "2022", vacancies: "257", applications: "7,80,000+", success_rate: "0.03%" },
    { year: "2021", vacancies: "194", applications: "6,50,000+", success_rate: "0.03%" },
    { year: "2020", vacancies: "224", applications: "8,20,000+", success_rate: "0.03%" },
    { year: "2019", vacancies: "302", applications: "9,00,000+", success_rate: "0.03%" }
  ];

  const postingLocations = [
    { city: "Bangalore", labs: "ADA, LRDE, CABS, ISSA", focus: "Aerospace, Electronics, Software", lifestyle: "IT hub, pleasant weather, cosmopolitan" },
    { city: "Hyderabad", labs: "DRDL, RCI, DMRL, ASL", focus: "Missiles, Materials, Propulsion", lifestyle: "Growing tech city, good infrastructure" },
    { city: "Delhi NCR", labs: "DRDO HQ, LASTEC, TBRL", focus: "Policy, Lasers, Ballistics", lifestyle: "National capital, administrative center" },
    { city: "Chennai", labs: "CVRDE, CHESS", focus: "Combat Vehicles, Hardware", lifestyle: "Industrial hub, cultural center" },
    { city: "Pune", labs: "ARDE, R&DE(E)", focus: "Armaments, Engineers", lifestyle: "Educational hub, pleasant climate" },
    { city: "Mumbai", labs: "NPOL, Various units", focus: "Naval systems, Technology", lifestyle: "Financial capital, cosmopolitan culture" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaRocket className="mx-auto text-6xl mb-6 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              DRDO Scientist
              <span className="text-orange-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Shape India's Defense Future - Complete guide to becoming a DRDO Research Scientist
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About DRDO Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About DRDO</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Defence Research and Development Organisation (DRDO) is India's premier defense research agency, established in 1958. With over 50 laboratories and 25,000+ scientists, DRDO is responsible for developing cutting-edge defense technologies and systems for the Indian Armed Forces.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  DRDO scientists work on advanced technologies including missiles, aircraft, naval systems, combat vehicles, electronics, materials, and life sciences, contributing to India's defense preparedness and technological self-reliance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">DRDO Mission & Vision</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Defense Technology Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Self-Reliance in Defense (Atmanirbhar)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Innovation & Excellence
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    National Security Enhancement
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Technology Transfer to Industry
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
                  <span className="font-medium">PWD:</span> 10 years relaxation
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">Ex-Servicemen:</span> 5 years relaxation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Educational Requirements</h2>
            </div>
            <div className="space-y-6">
              {educationalRequirements.map((req, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{req.category}</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">Courses:</span>
                      <p className="font-medium text-gray-800">{req.courses}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Level:</span>
                      <p className="font-medium text-gray-800">{req.level}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Specialization:</span>
                      <p className="font-medium text-gray-800">{req.specialization}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Prerequisites:</span>
                      <p className="font-medium text-gray-800">{req.prerequisites}</p>
                    </div>
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
              <FaFileAlt className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Selection Process</h2>
            </div>
            <div className="grid gap-6">
              {examPattern.map((stage, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{stage.stage}</h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{stage.type}</span>
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

        {/* Research Domains */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFlask className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Research Domains</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {researchDomains.map((domain, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{domain.domain}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Focus:</span> {domain.focus}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Labs:</span> {domain.labs}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Projects:</span> {domain.projects}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Technologies:</span> {domain.technologies}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major Laboratories */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Major DRDO Laboratories</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {majorLaboratories.map((lab, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{lab.lab}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Location:</span> {lab.location}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Focus:</span> {lab.focus}
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Achievements:</span> {lab.achievements}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Research Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLightbulb className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Emerging Research Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{area.area}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Applications:</span> {area.applications}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Relevance:</span> {area.relevance}
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Funding:</span> {area.funding}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Profiles & Salary */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Job Hierarchy & Salary</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-50 to-cyan-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Grade</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Experience</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Pay Scale</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Key Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                  {jobProfiles.map((job, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{job.post}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{job.experience}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{job.salary}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700 text-sm">{job.duties}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                      <p className="text-sm text-blue-600">{level.focus}</p>
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

        {/* Skills Required */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills for DRDO Scientists</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {skillsRequired.map((skillCategory, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{skillCategory.category}</h3>
                  <div className="space-y-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training & Development Programs</h2>
            </div>
            <div className="space-y-6">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="flex items-center bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-6">
                    <span className="text-green-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{program.program}</h3>
                    <p className="text-gray-700 text-sm mb-2"><span className="font-medium">Focus:</span> {program.focus}</p>
                    <p className="text-gray-600 text-xs"><span className="font-medium">Location:</span> {program.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{program.duration}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Major Posting Locations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {postingLocations.map((location, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{location.city}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Labs:</span> {location.labs}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Focus:</span> {location.focus}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Lifestyle:</span> {location.lifestyle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notable Projects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMedal className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Notable DRDO Achievements</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {notableProjects.map((project, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{project.project}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Achievement:</span> {project.achievement}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Impact:</span> {project.impact}
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Timeline:</span> {project.timeline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Allowances & Benefits */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Allowances & Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Allowances</h3>
                <div className="space-y-3">
                  {allowances.map((allowance, index) => (
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
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Benefits</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 text-sm mb-2">{benefit.benefit}</h4>
                      <p className="text-xs text-gray-600">{benefit.details}</p>
                    </div>
                  ))}
                </div>
              </div>
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
                  <FaRocket className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape India's Defense Future?</h2>
            <p className="text-xl mb-8 text-orange-100">Join DRDO and be part of India's cutting-edge defense technology development!</p>
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