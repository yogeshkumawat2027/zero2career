import Link from 'next/link';
import React from 'react';
import { 
  FaGamepad, 
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
  FaRadar,
  FaPlug,
  FaWifi,
  FaBattery,
  FaSolarPanel,
  FaRobot,
  FaDesktop,
  FaMicrochip,
  FaCircuitBoard,
  FaMobile,
  FaCalculator,
  FaChartBar,
  FaChartPie,
  FaTable,
  FaDatabase,
  FaFileExcel,
  FaDollarSign,
  FaUniversity,
  FaCreditCard,
  FaRegChartBar,
  FaPiggyBank,
  FaLanguage,
  FaHandshake,
  FaNewspaper,
  FaVideo,
  FaMicrophone,
  FaEnvelope,
  FaPhoneAlt,
  FaFax,
  FaCode,
  FaPaintBrush,
  FaMusic,
  FaVolumeUp,
  FaCamera,
  FaCube,
  FaVrCardboard,
  FaPlayCircle
} from 'react-icons/fa';
import { 
  SiUnity, 
  SiUnrealengine, 
  SiCsharp, 
  SiCplusplus, 
  SiPython, 
  SiJavascript, 
  SiBlender, 
  SiAutodesk, 
  SiSteam,
  SiPlaystation,
  SiNintendoswitch,
  SiXbox
} from 'react-icons/si';

export default function GameDeveloperPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "B.Tech/BCA/Game Design degree or equivalent skills" },
    { icon: FaGraduationCap, title: "Skills", detail: "Programming, creativity, problem-solving, teamwork" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 15+ years based on specialization" },
    { icon: FaShieldAlt, title: "Portfolio", detail: "Strong game projects and technical demonstrations" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "B.Tech Computer Science, Game Design, Animation, BCA, B.Sc. IT",
      focus: "Programming fundamentals, game mechanics, computer graphics, mathematics",
      cost: "₹50,000-8 LPA (government to private colleges)",
      outcomes: "Junior game developer, QA tester, game designer intern positions"
    },
    { 
      level: "Specialized Game Development Courses",
      duration: "6 months - 2 years",
      program: "Game development bootcamps, Unity/Unreal certifications, online courses",
      focus: "Game engines, 3D modeling, game design principles, portfolio building",
      cost: "₹25,000-5 LPA for specialized programs",
      outcomes: "Game programmer, indie developer, game designer, technical artist"
    },
    { 
      level: "Master's Degree (Optional)",
      duration: "2 years",
      program: "M.Tech Game Technology, Computer Graphics, Interactive Media, MCA",
      focus: "Advanced game development, AI in games, VR/AR, research projects",
      cost: "₹1-8 LPA for advanced programs",
      outcomes: "Senior developer, lead programmer, game architect, research positions"
    },
    { 
      level: "Professional Certifications & Continuous Learning",
      duration: "Ongoing",
      program: "Unity Certified Developer, Unreal Engine certifications, platform SDKs",
      focus: "Latest game engines, emerging platforms, advanced techniques, specializations",
      cost: "₹10,000-3 LPA for multiple certifications",
      outcomes: "Expert developer, technical lead, independent studio founder, consultant"
    }
  ];

  const gameDevSpecializations = [
    { 
      area: "Game Programming",
      description: "Core coding and technical implementation of game systems and mechanics",
      technologies: "C++, C#, Python, JavaScript, Unity, Unreal Engine, Godot",
      applications: "Gameplay mechanics, AI systems, physics engines, multiplayer networking",
      jobRoles: "Game Programmer, Engine Programmer, Gameplay Developer, Technical Developer",
      growth: "High demand for skilled programmers across all game platforms"
    },
    { 
      area: "Game Design & Mechanics",
      description: "Create game concepts, rules, balance, and player experience design",
      technologies: "Design tools, prototyping software, analytics tools, scripting languages",
      applications: "Level design, game balance, user experience, monetization systems",
      jobRoles: "Game Designer, Level Designer, Systems Designer, UX Designer",
      growth: "Growing importance with focus on player engagement and retention"
    },
    { 
      area: "3D Art & Animation",
      description: "Create visual assets, characters, environments, and animations for games",
      technologies: "Blender, Maya, 3ds Max, ZBrush, Substance Suite, Photoshop",
      applications: "Character modeling, environment art, texture creation, animation systems",
      jobRoles: "3D Artist, Character Artist, Environment Artist, Technical Artist",
      growth: "High demand for quality visual content across gaming platforms"
    },
    { 
      area: "Mobile Game Development",
      description: "Develop games specifically for iOS and Android mobile platforms",
      technologies: "Unity, Android Studio, Xcode, Flutter, React Native, mobile SDKs",
      applications: "Casual games, hyper-casual, puzzle games, mobile RPGs, AR games",
      jobRoles: "Mobile Game Developer, iOS Developer, Android Developer, Mobile Game Designer",
      growth: "Rapidly expanding market with billions of mobile users globally"
    },
    { 
      area: "VR/AR Game Development",
      description: "Create immersive virtual and augmented reality gaming experiences",
      technologies: "Unity XR, Unreal VR, Oculus SDK, ARCore, ARKit, WebXR",
      applications: "VR games, AR mobile games, mixed reality experiences, spatial computing",
      jobRoles: "VR Developer, AR Developer, XR Engineer, Immersive Experience Designer",
      growth: "Emerging field with revolutionary potential and high compensation"
    },
    { 
      area: "Game Audio & Sound Design",
      description: "Create music, sound effects, and audio systems for interactive experiences",
      technologies: "Wwise, FMOD, Pro Tools, Audacity, Unity Audio, Unreal Audio",
      applications: "Background music, sound effects, voice acting, adaptive audio systems",
      jobRoles: "Audio Designer, Sound Engineer, Composer, Audio Programmer",
      growth: "Specialized field with growing importance in immersive gaming"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "AAA Game Studios",
      companies: "Ubisoft, EA, Activision Blizzard, Rockstar, Sony Interactive, Nintendo",
      roles: "Game Programmer, Senior Developer, Lead Developer, Principal Engineer",
      salary: "₹8-60 LPA",
      benefits: "High budgets, cutting-edge technology, global reach, team collaboration"
    },
    { 
      sector: "Indian Game Development",
      companies: "Games2win, Nazara Technologies, Moonfrog Labs, SuperGaming, nCore Games",
      roles: "Game Developer, Mobile Developer, Game Designer, Technical Lead",
      salary: "₹4-25 LPA",
      benefits: "Growing industry, diverse projects, local market focus, startup culture"
    },
    { 
      sector: "Mobile Gaming Companies",
      companies: "King, Supercell, Rovio, Zynga, Playrix, Peak Games, Indian mobile studios",
      roles: "Mobile Game Developer, Unity Developer, Game Designer, LiveOps Developer",
      salary: "₹5-35 LPA",
      benefits: "Massive user base, high revenue potential, data-driven development"
    },
    { 
      sector: "Indie Game Development",
      companies: "Independent studios, solo developers, small teams, publishing platforms",
      roles: "Indie Developer, Solo Developer, Small Team Lead, Multi-role Developer",
      salary: "₹2-50 LPA (highly variable)",
      benefits: "Creative freedom, revenue sharing, innovative projects, flexible work"
    },
    { 
      sector: "Educational & Serious Games",
      companies: "Educational institutions, corporate training, healthcare gaming, simulation",
      roles: "Educational Game Developer, Simulation Developer, Training Content Creator",
      salary: "₹4-20 LPA",
      benefits: "Social impact, stable projects, B2B markets, specialized expertise"
    },
    { 
      sector: "VR/AR Gaming Startups",
      companies: "Meta Reality Labs, Magic Leap, emerging VR/AR studios, tech companies",
      roles: "VR Developer, AR Developer, XR Engineer, Immersive Designer",
      salary: "₹6-40 LPA",
      benefits: "Cutting-edge technology, innovation focus, future market potential"
    }
  ];

  const gameEnginesAndPlatforms = [
    { 
      engine: "Unity Engine",
      description: "Most popular cross-platform game engine for 2D and 3D games",
      platforms: "PC, Mobile, Console, VR/AR, Web",
      languages: "C#, JavaScript (legacy), Visual Scripting",
      marketShare: "50%+ of mobile games",
      salaryRange: "₹4-35 LPA"
    },
    { 
      engine: "Unreal Engine",
      description: "High-end engine for AAA games with stunning visual capabilities",
      platforms: "PC, Console, Mobile, VR, Architectural Visualization",
      languages: "C++, Blueprint Visual Scripting",
      marketShare: "Major AAA and indie titles",
      salaryRange: "₹6-45 LPA"
    },
    { 
      engine: "Godot Engine",
      description: "Open-source engine gaining popularity for indie development",
      platforms: "PC, Mobile, Console, Web",
      languages: "GDScript, C#, C++, Visual Scripting",
      marketShare: "Growing indie community",
      salaryRange: "₹3-25 LPA"
    },
    { 
      engine: "Custom Engines",
      description: "Proprietary engines developed by major studios",
      platforms: "All platforms, optimized for specific needs",
      languages: "C++, C, Assembly, Custom scripting",
      marketShare: "AAA studios and tech companies",
      salaryRange: "₹8-60 LPA"
    },
    { 
      engine: "Web Game Frameworks",
      description: "JavaScript-based frameworks for browser and hybrid games",
      platforms: "Web browsers, Mobile web, Desktop web apps",
      languages: "JavaScript, TypeScript, WebGL, HTML5",
      marketShare: "Browser games and educational content",
      salaryRange: "₹4-30 LPA"
    }
  ];

  const careerProgression = [
    { level: "Junior Game Developer", experience: "0-2 years", salary: "₹3-8 LPA", focus: "Learning game engines, basic programming, following senior guidance, bug fixing" },
    { level: "Game Developer", experience: "2-5 years", salary: "₹6-18 LPA", focus: "Feature implementation, system development, code optimization, team collaboration" },
    { level: "Senior Game Developer", experience: "5-8 years", salary: "₹15-35 LPA", focus: "Architecture decisions, mentoring juniors, complex system design, performance optimization" },
    { level: "Lead Developer/Technical Lead", experience: "8-12 years", salary: "₹25-60 LPA", focus: "Team leadership, technical strategy, project planning, cross-team coordination" },
    { level: "Principal Engineer/Game Director", experience: "12-18 years", salary: "₹40-1.2 Cr", focus: "Technical vision, architecture oversight, innovation leadership, strategic planning" },
    { level: "CTO/Studio Head/Founder", experience: "15+ years", salary: "₹60 LPA-5 Cr", focus: "Business strategy, technology leadership, studio management, industry influence" }
  ];

  const topInstitutions = [
    { name: "National Institute of Design (NID)", courses: "Game Design, Animation, Interactive Media", ranking: "Premier Design Institute", fees: "₹3-5 LPA", placements: "Excellent in creative industries" },
    { name: "Indian Institutes of Technology (IITs)", courses: "Computer Science, Game Technology specializations", ranking: "Top Technical Institutes", fees: "₹2-3 LPA", placements: "₹15-80 LPA in tech" },
    { name: "MAAC (Maya Academy of Advanced Cinematics)", courses: "Game Art & Design, Animation, VFX", ranking: "Leading Animation Institute", fees: "₹2-4 LPA", placements: "Good industry connections" },
    { name: "Arena Animation", courses: "Game Design, 3D Animation, VFX", ranking: "Popular Animation Chain", fees: "₹1.5-3 LPA", placements: "Decent placement record" },
    { name: "Frameboxx Animation", courses: "Game Development, Animation, Digital Arts", ranking: "Specialized Animation Institute", fees: "₹2-3.5 LPA", placements: "Industry-focused training" },
    { name: "Online Platforms (Udemy, Coursera)", courses: "Game Development, Unity, Unreal Engine", ranking: "Flexible Learning", fees: "₹5,000-1 LPA", placements: "Self-driven career growth" }
  ];

  const technicalSkills = [
    { 
      category: "Programming Languages",
      skills: ["C# (Unity)", "C++ (Unreal, Custom)", "Python (Tools, Scripting)", "JavaScript (Web Games)", "Java (Android)", "Swift/Kotlin (Mobile)"]
    },
    { 
      category: "Game Engines & Tools",
      skills: ["Unity 3D Engine", "Unreal Engine 4/5", "Godot Engine", "GameMaker Studio", "Construct 3", "Custom Engine Development"]
    },
    { 
      category: "3D Graphics & Art",
      skills: ["Blender 3D Modeling", "Maya Animation", "3ds Max", "ZBrush Sculpting", "Substance Designer/Painter", "Photoshop/GIMP"]
    },
    { 
      category: "Specialized Skills",
      skills: ["Game Physics", "AI Programming", "Multiplayer Networking", "VR/AR Development", "Mobile Optimization", "Performance Profiling"]
    }
  ];

  const salaryRanges = [
    { sector: "AAA Game Studios", fresher: "₹8-15 LPA", experienced: "₹20-45 LPA", senior: "₹35-80 LPA" },
    { sector: "Indian Game Companies", fresher: "₹4-10 LPA", experienced: "₹12-30 LPA", senior: "₹25-60 LPA" },
    { sector: "Mobile Gaming", fresher: "₹5-12 LPA", experienced: "₹15-35 LPA", senior: "₹30-70 LPA" },
    { sector: "Indie Development", fresher: "₹2-8 LPA", experienced: "₹8-25 LPA", senior: "₹20-50 LPA" },
    { sector: "VR/AR Gaming", fresher: "₹6-15 LPA", experienced: "₹18-40 LPA", senior: "₹35-80 LPA" },
    { sector: "Educational Games", fresher: "₹4-9 LPA", experienced: "₹10-25 LPA", senior: "₹20-45 LPA" },
    { sector: "International Remote", fresher: "₹12-25 LPA", experienced: "₹25-60 LPA", senior: "₹50-2 Cr" },
    { sector: "Freelance/Contract", fresher: "₹3-12 LPA", experienced: "₹15-40 LPA", senior: "₹30-1 Cr" }
  ];

  const emergingTrends = [
    { 
      trend: "Cloud Gaming & Streaming",
      description: "Games streamed from cloud servers without local hardware requirements",
      opportunities: "Cloud-optimized games, streaming technology, latency optimization, server-side development",
      timeline: "Growing adoption over next 3-5 years"
    },
    { 
      trend: "AI & Machine Learning in Games",
      description: "Intelligent NPCs, procedural content generation, and adaptive gameplay",
      opportunities: "AI programming, procedural generation, player behavior analysis, intelligent game design",
      timeline: "Rapidly evolving with immediate applications"
    },
    { 
      trend: "Blockchain & NFT Gaming",
      description: "Play-to-earn games, digital asset ownership, and decentralized gaming economies",
      opportunities: "Blockchain integration, smart contracts, tokenomics design, Web3 gaming platforms",
      timeline: "Emerging market with 2-5 year growth potential"
    },
    { 
      trend: "Extended Reality (XR) Gaming",
      description: "Virtual, Augmented, and Mixed Reality gaming experiences",
      opportunities: "VR game development, AR mobile games, spatial computing, haptic feedback systems",
      timeline: "Next-generation platform with 3-7 year mainstream adoption"
    },
    { 
      trend: "Cross-Platform & Social Gaming",
      description: "Games that work across all devices with strong social features",
      opportunities: "Cross-platform development, social mechanics, community features, live service games",
      timeline: "Current trend with continuous evolution"
    },
    { 
      trend: "Hyper-Casual & Instant Games",
      description: "Simple, instantly playable games with mass market appeal",
      opportunities: "Rapid prototyping, analytics-driven design, instant game platforms, casual monetization",
      timeline: "High-volume market with constant iteration"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "Unity Certified Developer",
      provider: "Unity Technologies",
      duration: "3-6 months preparation",
      cost: "$165-200",
      description: "Official certification for Unity engine proficiency and best practices"
    },
    { 
      cert: "Unreal Engine Certification",
      provider: "Epic Games",
      duration: "4-8 months preparation",
      cost: "Free-$300",
      description: "Certification for Unreal Engine development and advanced techniques"
    },
    { 
      cert: "Google Play Academy Certification",
      provider: "Google",
      duration: "2-4 months preparation",
      cost: "Free",
      description: "Mobile game development and Play Store optimization expertise"
    },
    { 
      cert: "Apple Developer Certification",
      provider: "Apple",
      duration: "2-3 months preparation",
      cost: "$99/year",
      description: "iOS game development and App Store guidelines certification"
    },
    { 
      cert: "Autodesk Maya Certification",
      provider: "Autodesk",
      duration: "6 months - 1 year",
      cost: "$150",
      description: "Professional 3D animation and modeling certification for game art"
    }
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Indie Game Studio",
      investment: "₹5 lakhs-2 crores",
      description: "Independent game development studio creating original games for multiple platforms",
      potential: "High creative control with potential for viral success and global distribution"
    },
    { 
      business: "Mobile Game Development",
      investment: "₹2-50 lakhs",
      description: "Focus on casual and hyper-casual mobile games for mass market",
      potential: "Billion-user mobile market with low entry barriers and high scalability"
    },
    { 
      business: "Game Art & Animation Services",
      investment: "₹3-25 lakhs",
      description: "Provide 3D modeling, animation, and art services to game studios",
      potential: "Steady B2B demand with specialized skills and global client base"
    },
    { 
      business: "VR/AR Gaming Experiences",
      investment: "₹10 lakhs-1 crore",
      description: "Create immersive VR/AR games and interactive experiences",
      potential: "Emerging market with high-value applications and premium pricing"
    },
    { 
      business: "Educational Game Platform",
      investment: "₹8 lakhs-3 crores",
      description: "Gamified learning platforms and educational content creation",
      potential: "Growing EdTech market with social impact and B2B opportunities"
    },
    { 
      business: "Game Development Tools",
      investment: "₹5 lakhs-2 crores",
      description: "Create tools, plugins, and assets for other game developers",
      potential: "B2B market serving the growing game development community"
    }
  ];

  const preparationTips = [
    "Master at least one programming language deeply (C# for Unity or C++ for general development)",
    "Build a strong portfolio with 3-5 complete game projects showcasing different skills",
    "Learn game design principles and understand what makes games fun and engaging",
    "Practice with popular game engines like Unity or Unreal Engine through tutorials",
    "Develop both technical and creative skills - programming, art, or design specialization",
    "Participate in game jams to build games quickly and learn collaborative development",
    "Study successful games to understand mechanics, monetization, and user experience",
    "Build a presence in gaming communities and network with other developers",
    "Stay updated with gaming trends, new platforms, and emerging technologies",
    "Consider contributing to open-source game projects to gain experience and visibility"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaGamepad className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Game Developer
              <span className="text-purple-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Create Digital Worlds - Complete guide to building a successful career in Game Development & Interactive Entertainment
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Game Development Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Game Development Career</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Game Development is the art and science of creating interactive digital entertainment experiences. Game developers combine programming skills, creativity, and technical knowledge to build games for various platforms including mobile, PC, consoles, and emerging technologies like VR/AR.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With the gaming industry growing exponentially and becoming larger than movies and music combined, game developers are in high demand across entertainment, education, healthcare, and corporate training sectors, creating diverse and rewarding career opportunities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Game Development?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Creative and technical challenges
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Rapidly growing industry
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Global market opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Diverse platform options
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Entrepreneurial possibilities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Impact on entertainment culture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Requirements & Skills</h2>
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
          </div>
        </section>

        {/* Education Pathway */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Education & Learning Path</h2>
            </div>
            <div className="space-y-6">
              {educationPath.map((education, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{education.level}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{education.duration}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Program:</span>
                      <p className="font-medium text-gray-800">{education.program}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Cost:</span>
                      <p className="font-medium text-gray-800">{education.cost}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Duration:</span>
                      <p className="font-medium text-gray-800">{education.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2"><span className="font-medium">Focus:</span> {education.focus}</p>
                  <p className="text-gray-600 text-sm"><span className="font-medium">Outcomes:</span> {education.outcomes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Engines & Platforms */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCog className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular Game Engines & Platforms</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {gameEnginesAndPlatforms.map((engine, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{engine.engine}</h3>
                  <p className="text-gray-700 text-sm mb-3">{engine.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">Platforms:</span> {engine.platforms}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Languages:</span> {engine.languages}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Market Share:</span> {engine.marketShare}
                    </div>
                    <div className="bg-orange-100 text-orange-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Salary Range:</span> {engine.salaryRange}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Institutions */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Educational Institutions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Institution</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Courses</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Category</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fees</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Placements</th>
                  </tr>
                </thead>
                <tbody>
                  {topInstitutions.map((institution, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{institution.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{institution.courses}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{institution.ranking}</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-medium">{institution.fees}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{institution.placements}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCode className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Game Development Specializations</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {gameDevSpecializations.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{area.area}</h3>
                  <p className="text-gray-700 text-sm mb-3">{area.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">Technologies:</span> {area.technologies}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Applications:</span> {area.applications}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Job Roles:</span> {area.jobRoles}
                    </div>
                    <div className="bg-red-100 text-red-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Growth:</span> {area.growth}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaIndustry className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Opportunities</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {industryOpportunities.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{industry.sector}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <span className="font-medium">Companies:</span> {industry.companies}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-medium">Roles:</span> {industry.roles}
                    </div>
                    <div className="text-green-600 font-medium">
                      <span>Salary Range:</span> {industry.salary}
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-3 py-2 rounded-lg">
                      <span className="font-medium">Benefits:</span> {industry.benefits}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Progression */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartBar className="text-3xl text-blue-600 mr-4" />
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

        {/* Salary by Sector */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Salary Ranges by Sector</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-teal-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Sector</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Fresher (0-2 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Experienced (3-8 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Senior (8+ years)</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryRanges.map((salary, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{salary.sector}</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-medium">{salary.fresher}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{salary.experienced}</td>
                      <td className="border border-gray-200 px-4 py-3 text-purple-600 font-medium">{salary.senior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skillCategory, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
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

        {/* Emerging Trends */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLightbulb className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Emerging Trends & Technologies</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergingTrends.map((trend, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{trend.trend}</h3>
                  <p className="text-gray-700 text-sm mb-3">{trend.description}</p>
                  <div className="space-y-2">
                    <div className="text-gray-600 text-sm">
                      <span className="font-medium">Opportunities:</span> {trend.opportunities}
                    </div>
                    <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg text-sm">
                      <span className="font-medium">Timeline:</span> {trend.timeline}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAward className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Professional Certifications</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {professionalCertifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.cert}</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Provider:</span>
                      <span className="font-medium text-gray-800">{cert.provider}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-800">{cert.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-medium text-green-600">{cert.cost}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entrepreneurial Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLightbulb className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Entrepreneurial Opportunities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {entrepreneurialOpportunities.map((business, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{business.business}</h3>
                  <p className="text-gray-700 text-sm mb-3">{business.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Investment:</span>
                      <span className="font-medium text-blue-600">{business.investment}</span>
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg text-sm">
                      <span className="font-medium">Potential:</span> {business.potential}
                    </div>
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
              <FaTrophy className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Preparation Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {preparationTips.map((tip, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-100">
                  <FaGamepad className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Digital Worlds?</h2>
            <p className="text-xl mb-8 text-purple-100">Start your journey in Game Development and shape the future of interactive entertainment!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start Game Development
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
