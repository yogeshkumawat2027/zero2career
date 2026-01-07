import Link from 'next/link';
import React from 'react';
import { 
  FaLaptopCode, 
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
  FaWheelchair,
  FaBaby,
  FaChild,
  FaBroom,
  FaUtensils,
  FaBed,
  FaCoffee,
  FaWineBottle,
  FaGamepad,
  FaMusic,
  FaPaintBrush,
  FaFingerprint,
  FaDna,
  FaVial,
  FaCamera,
  FaPrint,
  FaMagnifyingGlass,
  FaBug,
  FaSkull,
  FaBrain,
  FaTooth,
  FaHammer,
  FaCode,
  FaServer,
  FaCloud,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiGraphql, 
  SiTailwindcss, 
  SiBootstrap,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiFlask as SiFlaskFramework,
  SiSpring,
  SiLaravel,
  SiRubyonrails,
  SiVuedotjs,
  SiAngular,
  SiFirebase,
  SiKubernetes,
  SiJenkins,
  SiTerraform
} from 'react-icons/si';

export default function FullStackDeveloperPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "B.Tech/BCA/MCA or equivalent in Computer Science" },
    { icon: FaGraduationCap, title: "Skills", detail: "Programming, problem-solving, logical thinking" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Fresher to 15+ years based on expertise level" },
    { icon: FaShieldAlt, title: "Certifications", detail: "Cloud, frameworks, and technology certifications" }
  ];

  const educationPath = [
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "B.Tech/B.E. Computer Science, BCA, B.Sc. IT, Self-learning bootcamps",
      focus: "Programming fundamentals, data structures, algorithms, web development basics",
      cost: "₹50,000-8 LPA (government to private colleges), ₹25,000-2 LPA (bootcamps)",
      outcomes: "Junior developer, trainee software engineer, full stack intern positions"
    },
    { 
      level: "Master's Degree (Optional)",
      duration: "2 years",
      program: "M.Tech/MCA/M.Sc. Computer Science, specialized tech programs",
      focus: "Advanced programming, system design, specialized technologies, research",
      cost: "₹1-10 LPA for advanced programs",
      outcomes: "Senior developer roles, tech lead positions, specialized engineer roles"
    },
    { 
      level: "Professional Certifications",
      duration: "3-18 months",
      program: "AWS, Google Cloud, Azure, MongoDB, React, Angular, DevOps certifications",
      focus: "Industry-specific skills, cloud computing, modern frameworks, deployment",
      cost: "₹10,000-3 LPA for multiple certifications",
      outcomes: "Career advancement, salary hikes, specialized roles, cloud architect positions"
    },
    { 
      level: "Continuous Learning & Specialization",
      duration: "Ongoing",
      program: "Online courses, tech conferences, open source contribution, side projects",
      focus: "Latest technologies, emerging frameworks, AI/ML integration, best practices",
      cost: "₹5,000-1 LPA for continuous learning resources",
      outcomes: "Expert developer, tech lead, architect, CTO track, startup founder"
    }
  ];

  const techStackAreas = [
    { 
      area: "Frontend Development",
      description: "Create user interfaces and user experiences for web applications",
      technologies: "React, Vue.js, Angular, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS",
      applications: "Single Page Applications, Progressive Web Apps, Mobile-first design, UI/UX implementation",
      jobRoles: "Frontend Developer, UI Developer, React Developer, JavaScript Engineer",
      growth: "High demand with focus on user experience and modern frameworks"
    },
    { 
      area: "Backend Development",
      description: "Build server-side logic, APIs, and database management systems",
      technologies: "Node.js, Python, Java, .NET, PHP, Express.js, Django, Spring Boot",
      applications: "REST APIs, GraphQL, microservices, database design, server architecture",
      jobRoles: "Backend Developer, API Developer, Server Engineer, Database Developer",
      growth: "Strong demand for scalable and secure backend systems"
    },
    { 
      area: "Database & Data Management",
      description: "Design and manage databases, data storage, and retrieval systems",
      technologies: "MongoDB, PostgreSQL, MySQL, Redis, Elasticsearch, GraphQL, Prisma",
      applications: "Database design, data modeling, query optimization, caching strategies",
      jobRoles: "Database Developer, Data Engineer, Backend Developer, Full Stack Engineer",
      growth: "Growing importance with big data and real-time applications"
    },
    { 
      area: "DevOps & Cloud Computing",
      description: "Implement deployment pipelines, cloud infrastructure, and monitoring",
      technologies: "Docker, Kubernetes, AWS, Azure, GCP, Jenkins, Terraform, GitLab CI/CD",
      applications: "Continuous deployment, cloud architecture, monitoring, security implementation",
      jobRoles: "DevOps Engineer, Cloud Engineer, Site Reliability Engineer, Platform Engineer",
      growth: "Rapidly expanding with cloud adoption and automation needs"
    },
    { 
      area: "Mobile Development",
      description: "Create mobile applications using web technologies and native approaches",
      technologies: "React Native, Flutter, Ionic, Progressive Web Apps, Hybrid frameworks",
      applications: "Cross-platform mobile apps, native functionality, app store deployment",
      jobRoles: "Mobile Developer, React Native Developer, Cross-platform Developer",
      growth: "High growth with mobile-first approach and cross-platform solutions"
    },
    { 
      area: "Emerging Technologies",
      description: "Integration of AI, blockchain, and modern web technologies",
      technologies: "AI/ML APIs, Blockchain, WebAssembly, Serverless, JAMstack, Web3",
      applications: "AI-powered apps, decentralized applications, serverless architecture, edge computing",
      jobRoles: "Full Stack Engineer, Blockchain Developer, AI Engineer, Solutions Architect",
      growth: "Cutting-edge field with revolutionary potential and high compensation"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Technology Startups",
      companies: "Zerodha, Razorpay, Freshworks, Zomato, Swiggy, Byju's, Unacademy, CRED",
      roles: "Full Stack Developer, Senior Developer, Tech Lead, Engineering Manager",
      salary: "₹6-50 LPA",
      benefits: "Stock options, rapid growth, learning opportunities, flexible work culture"
    },
    { 
      sector: "Product-Based Companies",
      companies: "Google, Microsoft, Amazon, Meta, Adobe, Netflix, Spotify, Atlassian",
      roles: "Software Engineer, Senior SDE, Principal Engineer, Staff Engineer",
      salary: "₹15-2 Cr LPA",
      benefits: "High compensation, global exposure, cutting-edge technology, career advancement"
    },
    { 
      sector: "Service-Based IT Companies",
      companies: "TCS, Infosys, Wipro, HCL, Cognizant, Accenture, Capgemini, LTI",
      roles: "Software Developer, Senior Analyst, Project Lead, Module Lead",
      salary: "₹3-25 LPA",
      benefits: "Job security, global projects, diverse domain exposure, structured career path"
    },
    { 
      sector: "E-commerce & Fintech",
      companies: "Flipkart, Amazon India, Paytm, PhonePe, Myntra, Nykaa, PolicyBazaar",
      roles: "Full Stack Engineer, Platform Engineer, Senior Developer, Architect",
      salary: "₹8-60 LPA",
      benefits: "Scale challenges, business impact, performance bonuses, growth opportunities"
    },
    { 
      sector: "Consulting & Digital Agencies",
      companies: "Deloitte Digital, PwC, EY, KPMG Digital, McKinsey Digital, ThoughtWorks",
      roles: "Technology Consultant, Digital Developer, Solutions Engineer, Technical Architect",
      salary: "₹6-40 LPA",
      benefits: "Client exposure, diverse projects, business understanding, leadership development"
    },
    { 
      sector: "Banking & Financial Services",
      companies: "Goldman Sachs, JP Morgan, HDFC Bank, ICICI, SBI, Kotak Mahindra, Axis Bank",
      roles: "Application Developer, Full Stack Engineer, Technical Analyst, System Engineer",
      salary: "₹5-35 LPA",
      benefits: "Stable industry, regulatory compliance experience, domain expertise, job security"
    }
  ];

  const careerProgression = [
    { level: "Junior Full Stack Developer", experience: "0-2 years", salary: "₹3-8 LPA", focus: "Learning tech stack, basic feature development, code quality, debugging skills" },
    { level: "Full Stack Developer", experience: "2-4 years", salary: "₹6-15 LPA", focus: "End-to-end feature development, database design, API integration, testing" },
    { level: "Senior Full Stack Developer", experience: "4-7 years", salary: "₹12-30 LPA", focus: "Complex system design, mentoring juniors, architecture decisions, performance optimization" },
    { level: "Tech Lead/Senior Engineer", experience: "7-10 years", salary: "₹20-50 LPA", focus: "Team leadership, technical roadmap, system architecture, cross-functional collaboration" },
    { level: "Engineering Manager/Principal Engineer", experience: "10-15 years", salary: "₹35-80 LPA", focus: "People management, technical strategy, product planning, organizational impact" },
    { level: "Director/VP Engineering/CTO", experience: "15+ years", salary: "₹60 LPA-3 Cr", focus: "Engineering organization, technology vision, business strategy, executive leadership" }
  ];

  const topInstitutions = [
    { name: "Indian Institutes of Technology (IITs)", courses: "B.Tech/M.Tech Computer Science", ranking: "Premier Technical Institutes", fees: "₹2-3 LPA", placements: "₹20-2 Cr LPA" },
    { name: "National Institutes of Technology (NITs)", courses: "B.Tech Computer Science, IT", ranking: "Top Government Institutes", fees: "₹1.5-2 LPA", placements: "₹8-50 LPA" },
    { name: "Indian Institutes of Information Technology", courses: "B.Tech IT, Computer Science", ranking: "Specialized IT Institutes", fees: "₹2-4 LPA", placements: "₹6-40 LPA" },
    { name: "Delhi University, Mumbai University", courses: "BCA, MCA, B.Sc. Computer Science", ranking: "Premier Universities", fees: "₹25,000-1 LPA", placements: "₹4-25 LPA" },
    { name: "Coding Bootcamps (Masai, Scaler, etc.)", courses: "Full Stack Development Programs", ranking: "Intensive Skill Programs", fees: "₹2-4 LPA", placements: "₹4-20 LPA" },
    { name: "Online Platforms (Coursera, Udemy)", courses: "Self-paced learning programs", ranking: "Flexible Learning", fees: "₹5,000-50,000", placements: "Self-driven career growth" }
  ];

  const technicalSkills = [
    { 
      category: "Frontend Technologies",
      skills: ["React.js & Ecosystem", "Vue.js & Nuxt.js", "Angular & TypeScript", "Next.js & Gatsby", "HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "State Management"]
    },
    { 
      category: "Backend Technologies",
      skills: ["Node.js & Express", "Python & Django/Flask", "Java & Spring Boot", "C# & .NET", "PHP & Laravel", "Ruby on Rails", "API Development", "Microservices Architecture"]
    },
    { 
      category: "Databases & Storage",
      skills: ["MongoDB & NoSQL", "PostgreSQL & MySQL", "Redis & Caching", "Elasticsearch", "GraphQL", "Database Design", "Query Optimization", "Data Modeling"]
    },
    { 
      category: "DevOps & Cloud",
      skills: ["Docker & Containerization", "Kubernetes Orchestration", "AWS/Azure/GCP", "CI/CD Pipelines", "Terraform & IaC", "Monitoring & Logging", "Security Best Practices", "Performance Optimization"]
    }
  ];

  const popularTechStacks = [
    { 
      stack: "MERN Stack",
      technologies: "MongoDB, Express.js, React, Node.js",
      description: "Popular JavaScript-based full stack for modern web applications",
      companies: "Facebook, Netflix, Airbnb, Uber",
      salaryRange: "₹6-40 LPA",
      learning: "3-6 months for proficiency"
    },
    { 
      stack: "MEAN Stack",
      technologies: "MongoDB, Express.js, Angular, Node.js",
      description: "Enterprise-grade stack with Angular for complex applications",
      companies: "Google, IBM, Samsung, Deutsche Bank",
      salaryRange: "₹5-35 LPA",
      learning: "4-8 months for proficiency"
    },
    { 
      stack: "Django + React",
      technologies: "Python Django, React.js, PostgreSQL",
      description: "Robust backend with modern frontend for scalable applications",
      companies: "Instagram, Pinterest, Mozilla, Spotify",
      salaryRange: "₹7-45 LPA",
      learning: "4-7 months for proficiency"
    },
    { 
      stack: "Next.js + Serverless",
      technologies: "Next.js, Vercel, AWS Lambda, MongoDB",
      description: "Modern JAMstack approach with serverless architecture",
      companies: "TikTok, Twitch, Hulu, Netflix",
      salaryRange: "₹8-50 LPA",
      learning: "3-5 months for proficiency"
    },
    { 
      stack: "Spring Boot + React",
      technologies: "Java Spring Boot, React, MySQL/PostgreSQL",
      description: "Enterprise Java backend with modern React frontend",
      companies: "Enterprise companies, banks, large corporations",
      salaryRange: "₹6-40 LPA",
      learning: "5-8 months for proficiency"
    },
    { 
      stack: ".NET Full Stack",
      technologies: "ASP.NET Core, React/Angular, SQL Server",
      description: "Microsoft ecosystem for enterprise applications",
      companies: "Microsoft, Stack Overflow, GoDaddy",
      salaryRange: "₹5-38 LPA",
      learning: "4-6 months for proficiency"
    }
  ];

  const salaryRanges = [
    { sector: "Technology Startups", fresher: "₹6-12 LPA", experienced: "₹15-40 LPA", senior: "₹30-80 LPA" },
    { sector: "Product Companies", fresher: "₹15-30 LPA", experienced: "₹25-80 LPA", senior: "₹60-2 Cr" },
    { sector: "Service Companies", fresher: "₹3-8 LPA", experienced: "₹8-25 LPA", senior: "₹20-50 LPA" },
    { sector: "E-commerce/Fintech", fresher: "₹8-18 LPA", experienced: "₹18-50 LPA", senior: "₹40-1 Cr" },
    { sector: "Consulting Firms", fresher: "₹6-15 LPA", experienced: "₹15-40 LPA", senior: "₹30-75 LPA" },
    { sector: "Banking/Finance", fresher: "₹5-12 LPA", experienced: "₹12-35 LPA", senior: "₹25-60 LPA" },
    { sector: "International Remote", fresher: "₹10-25 LPA", experienced: "₹25-80 LPA", senior: "₹60-3 Cr" },
    { sector: "Freelancing/Consulting", fresher: "₹2-10 LPA", experienced: "₹10-50 LPA", senior: "₹30-2 Cr" }
  ];

  const emergingTrends = [
    { 
      trend: "AI & Machine Learning Integration",
      description: "Integration of AI/ML capabilities into web applications and user experiences",
      opportunities: "AI-powered features, chatbots, recommendation systems, automated testing, intelligent UIs",
      timeline: "High demand over next 2-5 years"
    },
    { 
      trend: "Serverless & Edge Computing",
      description: "Function-as-a-Service architecture and edge deployment for better performance",
      opportunities: "Serverless applications, edge functions, JAMstack architecture, micro-frontends",
      timeline: "Rapidly growing adoption in next 3-5 years"
    },
    { 
      trend: "Web3 & Blockchain Development",
      description: "Decentralized applications and blockchain integration in web development",
      opportunities: "DApps development, smart contracts, NFT platforms, DeFi applications, Web3 integrations",
      timeline: "Emerging field with 3-7 year growth potential"
    },
    { 
      trend: "Low-Code/No-Code Platforms",
      description: "Visual development platforms requiring traditional programming for customization",
      opportunities: "Platform customization, plugin development, integration services, hybrid solutions",
      timeline: "Growing complement to traditional development"
    },
    { 
      trend: "Progressive Web Apps (PWAs)",
      description: "Web applications with native app-like capabilities and offline functionality",
      opportunities: "Mobile-first development, offline capabilities, push notifications, app store distribution",
      timeline: "Steady growth with mobile-first strategies"
    },
    { 
      trend: "Micro-Frontends & Microservices",
      description: "Modular architecture for large-scale applications and team collaboration",
      opportunities: "Architecture design, module federation, scalable systems, team coordination",
      timeline: "Enterprise adoption growing over 2-4 years"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      duration: "3-6 months preparation",
      cost: "$150",
      description: "Cloud architecture and AWS services expertise for scalable applications"
    },
    { 
      cert: "Google Cloud Professional Developer",
      provider: "Google Cloud Platform",
      duration: "3-5 months preparation",
      cost: "$200",
      description: "GCP development and deployment skills for cloud-native applications"
    },
    { 
      cert: "Microsoft Azure Developer Associate",
      provider: "Microsoft Azure",
      duration: "2-4 months preparation",
      cost: "$165",
      description: "Azure cloud development and integration capabilities"
    },
    { 
      cert: "MongoDB Developer Certification",
      provider: "MongoDB University",
      duration: "2-3 months preparation",
      cost: "Free-$150",
      description: "NoSQL database design and development expertise"
    },
    { 
      cert: "React/Angular/Vue Certifications",
      provider: "Various providers",
      duration: "1-3 months preparation",
      cost: "$50-300",
      description: "Frontend framework expertise and best practices"
    }
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "SaaS Product Development",
      investment: "₹5 lakhs-2 crores",
      description: "Build and sell software-as-a-service solutions to businesses",
      potential: "High scalability with recurring revenue and global market reach"
    },
    { 
      business: "Web Development Agency",
      investment: "₹2-25 lakhs",
      description: "Provide custom web development services to businesses and startups",
      potential: "Steady demand with potential for high-value enterprise clients"
    },
    { 
      business: "E-commerce Platform/Marketplace",
      investment: "₹10 lakhs-5 crores",
      description: "Create online marketplace or specialized e-commerce solutions",
      potential: "Large market with network effects and transaction-based revenue"
    },
    { 
      business: "Mobile App Development",
      investment: "₹3-50 lakhs",
      description: "Develop mobile applications for consumer or business markets",
      potential: "Growing mobile market with app store monetization opportunities"
    },
    { 
      business: "EdTech Platform",
      investment: "₹5 lakhs-3 crores",
      description: "Online learning platforms and educational technology solutions",
      potential: "Expanding education market with subscription and course-based revenue"
    },
    { 
      business: "Freelance/Consulting Practice",
      investment: "₹50,000-5 lakhs",
      description: "Independent consulting and development services for clients globally",
      potential: "Low startup cost with high hourly rates and flexible work arrangements"
    }
  ];

  const preparationTips = [
    "Master core programming languages: JavaScript, Python, or Java for strong foundation",
    "Build a portfolio of full-stack projects showcasing end-to-end development skills",
    "Learn version control with Git and collaborative development workflows",
    "Practice data structures and algorithms for technical interviews",
    "Understand database design principles and both SQL and NoSQL databases",
    "Gain experience with cloud platforms like AWS, Azure, or Google Cloud",
    "Develop debugging and testing skills for both frontend and backend code",
    "Stay updated with latest framework versions and industry best practices",
    "Contribute to open source projects to demonstrate collaboration skills",
    "Build soft skills: communication, teamwork, and project management abilities"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaLaptopCode className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Full Stack Developer
              <span className="text-blue-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Code the Future - Complete guide to building a successful career in Full Stack Web Development
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Full Stack Development Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Full Stack Development</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Full Stack Development involves working on both frontend (user interface) and backend (server-side) aspects of web applications. Full stack developers have the skills to build complete web applications from database design to user experience, making them versatile and highly sought-after professionals.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With the digital transformation accelerating across industries, full stack developers are essential for creating web applications, mobile apps, and digital solutions that power modern businesses and user experiences.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Full Stack Development?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    High demand across all industries
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Excellent salary packages
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Remote work opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Entrepreneurial opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Continuous learning and innovation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Global job market access
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

        {/* Popular Tech Stacks */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCode className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular Technology Stacks</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {popularTechStacks.map((stack, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{stack.stack}</h3>
                  <p className="text-gray-700 text-sm mb-3">{stack.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-600">
                      <span className="font-medium">Technologies:</span> {stack.technologies}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Used by:</span> {stack.companies}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600 font-medium">Salary: {stack.salaryRange}</span>
                      <span className="text-blue-600 font-medium">Learning: {stack.learning}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Top Educational Institutions & Platforms</h2>
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

        {/* Technology Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaServer className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Technology Specializations</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {techStackAreas.map((area, index) => (
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
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Experienced (3-7 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Senior (7+ years)</th>
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
                  <FaLaptopCode className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Code Your Future?</h2>
            <p className="text-xl mb-8 text-blue-100">Start your journey in Full Stack Development and build the digital world!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start Learning Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
