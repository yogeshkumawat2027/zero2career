import Link from 'next/link';
import React from 'react';
import { 
  FaCamera, 
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
  FaPalette,
  FaImage,
  FaVideo,
  FaMagic,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPaintBrush,
  FaFilm,
  FaPlay
} from 'react-icons/fa';

export default function FashionPhotographerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Diploma/Degree in Photography or Fine Arts" },
    { icon: FaGraduationCap, title: "Skills", detail: "Creativity, Technical skills, Visual composition" },
    { icon: FaCalendarAlt, title: "Experience", detail: "Portfolio-based entry to 20+ years" },
    { icon: FaShieldAlt, title: "Certification", detail: "Professional photography certifications preferred" }
  ];

  const educationPath = [
    { 
      level: "Diploma/Certificate Courses",
      duration: "6 months - 2 years",
      program: "Photography, Fashion Photography, Visual Arts",
      focus: "Camera basics, lighting, composition, editing software, fashion industry basics",
      cost: "₹25,000-2 LPA (institutes and workshops)",
      outcomes: "Assistant photographer, freelance photographer, studio assistant positions"
    },
    { 
      level: "Bachelor's Degree",
      duration: "3-4 years",
      program: "BFA in Photography, Mass Communication, Visual Arts",
      focus: "Advanced photography techniques, digital imaging, business skills, portfolio development",
      cost: "₹1-8 LPA for degree programs",
      outcomes: "Fashion photographer, commercial photographer, higher starting opportunities"
    },
    { 
      level: "Professional Workshops",
      duration: "Ongoing",
      program: "Fashion photography masterclasses, lighting workshops, editing courses",
      focus: "Industry trends, advanced techniques, networking, portfolio enhancement",
      cost: "₹5,000-2 LPA per workshop",
      outcomes: "Skill enhancement, industry connections, portfolio improvement"
    },
    { 
      level: "Online Courses & Certifications",
      duration: "Flexible",
      program: "Adobe certifications, online photography courses, fashion industry courses",
      focus: "Software mastery, business development, marketing, social media",
      cost: "₹500-50,000 per course",
      outcomes: "Technical proficiency, business skills, digital marketing knowledge"
    }
  ];

  const specializationAreas = [
    { 
      area: "Editorial Fashion Photography",
      description: "High-fashion shoots for magazines, campaigns, and editorial spreads",
      applications: "Magazine covers, fashion editorials, brand campaigns, runway documentation",
      jobRoles: "Editorial Photographer, Magazine Photographer, Fashion Journalist",
      growth: "Premium market with high creative satisfaction"
    },
    { 
      area: "Commercial Fashion Photography",
      description: "Product and catalog photography for fashion brands and e-commerce",
      applications: "E-commerce photography, catalog shoots, brand campaigns, advertising",
      jobRoles: "Commercial Photographer, Product Photographer, Brand Photographer",
      growth: "High demand with e-commerce growth"
    },
    { 
      area: "Portrait & Headshot Photography",
      description: "Professional portraits for models, actors, and fashion industry professionals",
      applications: "Model portfolios, actor headshots, corporate portraits, personal branding",
      jobRoles: "Portrait Photographer, Headshot Specialist, Personal Branding Photographer",
      growth: "Steady demand with personal branding trends"
    },
    { 
      area: "Wedding & Event Fashion Photography",
      description: "Fashion-focused photography for weddings and high-end events",
      applications: "Luxury weddings, fashion events, red carpet, celebrity events",
      jobRoles: "Wedding Photographer, Event Photographer, Celebrity Photographer",
      growth: "Growing luxury wedding and event market"
    },
    { 
      area: "Street Style & Lifestyle Photography",
      description: "Capturing fashion in real-world settings and lifestyle contexts",
      applications: "Street style documentation, lifestyle shoots, influencer content, social media",
      jobRoles: "Street Style Photographer, Lifestyle Photographer, Content Creator",
      growth: "Expanding with social media influence"
    },
    { 
      area: "Fashion Film & Video Production",
      description: "Creating video content for fashion brands and campaigns",
      applications: "Fashion films, brand videos, social media content, runway videos",
      jobRoles: "Fashion Videographer, Content Producer, Creative Director",
      growth: "High growth with video content demand"
    }
  ];

  const industryOpportunities = [
    { 
      sector: "Fashion Magazines & Publications",
      companies: "Vogue India, Harper's Bazaar, Elle, Cosmopolitan, Grazia, Femina",
      roles: "Staff Photographer, Freelance Photographer, Photo Editor, Creative Director",
      salary: "₹3-15 LPA",
      growth: "Competitive field with high creative rewards"
    },
    { 
      sector: "Fashion Brands & Design Houses",
      companies: "Sabyasachi, Manish Malhotra, Ritu Kumar, Anita Dongre, Raw Mango, Good Earth",
      roles: "Brand Photographer, Campaign Photographer, Lookbook Photographer, Social Media Photographer",
      salary: "₹4-20 LPA",
      growth: "Growing with fashion brand expansion"
    },
    { 
      sector: "E-commerce & Retail",
      companies: "Myntra, Nykaa, Ajio, Amazon Fashion, Flipkart Fashion, Tata Cliq",
      roles: "Product Photographer, E-commerce Photographer, Creative Lead, Content Manager",
      salary: "₹5-18 LPA",
      growth: "High demand with online fashion retail growth"
    },
    { 
      sector: "Advertising & Marketing Agencies",
      companies: "Ogilvy, Leo Burnett, McCann, Wunderman Thompson, Havas, Publicis",
      roles: "Campaign Photographer, Creative Photographer, Art Director, Visual Content Creator",
      salary: "₹6-25 LPA",
      growth: "Strong growth with digital advertising"
    },
    { 
      sector: "Celebrity & Entertainment",
      companies: "Bollywood, Fashion Week organizers, Celebrity Management companies, PR agencies",
      roles: "Celebrity Photographer, Red Carpet Photographer, Event Photographer, Paparazzi Photographer",
      salary: "₹8-30 LPA",
      growth: "Premium segment with high earning potential"
    },
    { 
      sector: "Freelance & Independent Practice",
      companies: "Independent clients, fashion startups, influencers, personal projects",
      roles: "Freelance Fashion Photographer, Wedding Photographer, Portrait Photographer, Content Creator",
      salary: "₹2-50 LPA (highly variable)",
      growth: "Flexible career with unlimited earning potential"
    }
  ];

  const jobProfiles = [
    { post: "Assistant Photographer", experience: "0-2 years", salary: "₹2-5 LPA", duties: "Equipment handling, lighting setup, photo editing assistance, client coordination" },
    { post: "Fashion Photographer", experience: "2-5 years", salary: "₹4-12 LPA", duties: "Independent shoots, client management, creative direction, portfolio development" },
    { post: "Senior Fashion Photographer", experience: "5-8 years", salary: "₹8-20 LPA", duties: "High-end campaigns, team leadership, creative concepts, brand partnerships" },
    { post: "Creative Director", experience: "8-12 years", salary: "₹15-35 LPA", duties: "Campaign strategy, team management, brand vision, creative oversight" },
    { post: "Celebrity/Editorial Photographer", experience: "10-15 years", salary: "₹20-50 LPA", duties: "High-profile shoots, magazine covers, celebrity portraits, international work" },
    { post: "Fashion Photography Entrepreneur", experience: "15+ years", salary: "₹30 LPA-2 Crores", duties: "Studio ownership, brand building, mentoring, industry leadership" }
  ];

  const topInstitutes = [
    { name: "National Institute of Fashion Technology (NIFT)", courses: "Fashion Communication, Photography", ranking: "Top Fashion Institute", fees: "₹2-4 LPA", placements: "₹4-15 LPA average" },
    { name: "Pearl Academy", courses: "Fashion Photography, Visual Communication", ranking: "Premier Design Institute", fees: "₹8-12 LPA", placements: "₹3-12 LPA average" },
    { name: "Symbiosis Institute of Design", courses: "Photography, Communication Design", ranking: "Top Private Institute", fees: "₹6-10 LPA", placements: "₹4-14 LPA average" },
    { name: "Light & Life Academy", courses: "Professional Photography, Fashion Photography", ranking: "Specialized Photography Institute", fees: "₹1-3 LPA", placements: "₹2-8 LPA average" },
    { name: "Delhi College of Photography", courses: "Fashion Photography, Commercial Photography", ranking: "Photography Specialization", fees: "₹50,000-2 LPA", placements: "₹2-10 LPA average" },
    { name: "Orane International", courses: "Fashion Photography, Styling", ranking: "Fashion & Beauty Institute", fees: "₹1-4 LPA", placements: "₹2-8 LPA average" }
  ];

  const technicalSkills = [
    { 
      category: "Photography Equipment",
      skills: ["DSLR/Mirrorless Cameras", "Professional Lenses", "Studio Lighting", "Flash Equipment", "Tripods & Stabilizers", "Light Meters"]
    },
    { 
      category: "Software & Editing",
      skills: ["Adobe Photoshop", "Adobe Lightroom", "Capture One", "Adobe Premiere Pro", "DaVinci Resolve", "Canva/Design Tools"]
    },
    { 
      category: "Technical Photography",
      skills: ["Lighting Techniques", "Composition Rules", "Color Theory", "Exposure Control", "Depth of Field", "Post-processing Workflows"]
    },
    { 
      category: "Business & Marketing",
      skills: ["Portfolio Development", "Client Management", "Social Media Marketing", "Brand Building", "Pricing Strategies", "Copyright & Contracts"]
    }
  ];

  const careerProgression = [
    { level: "Assistant Photographer", experience: "0-2 years", salary: "₹2-5 LPA", focus: "Learning technical skills, assisting senior photographers, building basics" },
    { level: "Junior Photographer", experience: "2-4 years", salary: "₹4-8 LPA", focus: "Independent shoots, portfolio building, client development" },
    { level: "Fashion Photographer", experience: "4-8 years", salary: "₹6-15 LPA", focus: "Specialized fashion work, brand partnerships, creative development" },
    { level: "Senior Photographer", experience: "8-12 years", salary: "₹12-25 LPA", focus: "High-end campaigns, team leadership, business development" },
    { level: "Creative Director", experience: "12-18 years", salary: "₹20-40 LPA", focus: "Strategic creative direction, brand partnerships, industry influence" },
    { level: "Photography Entrepreneur", experience: "15+ years", salary: "₹25-2 Cr", focus: "Studio ownership, brand empire, mentoring, industry leadership" }
  ];

  const emergingTrends = [
    { 
      trend: "Social Media & Influencer Photography",
      description: "Content creation for Instagram, TikTok, and other social platforms",
      opportunities: "Influencer collaborations, brand partnerships, social commerce photography",
      timeline: "High current demand with 3-5 year growth"
    },
    { 
      trend: "Sustainable & Ethical Fashion Photography",
      description: "Photography focused on sustainable fashion and ethical brands",
      opportunities: "Eco-friendly brands, conscious fashion movements, sustainable storytelling",
      timeline: "Growing awareness over next 5-8 years"
    },
    { 
      trend: "Virtual & Augmented Reality Fashion",
      description: "360-degree photography and VR fashion experiences",
      opportunities: "Virtual fashion shows, AR try-on experiences, immersive brand content",
      timeline: "Emerging technology with 3-7 year adoption"
    },
    { 
      trend: "AI-Enhanced Photography",
      description: "Integration of AI tools for editing, enhancement, and creative effects",
      opportunities: "AI-assisted editing, automated workflows, enhanced creativity tools",
      timeline: "Current trend with 2-5 year maturation"
    },
    { 
      trend: "Drone & Aerial Fashion Photography",
      description: "Aerial perspectives and drone photography for fashion shoots",
      opportunities: "Unique perspectives, outdoor shoots, brand differentiation",
      timeline: "Growing adoption over next 3-5 years"
    },
    { 
      trend: "Real-time Content Creation",
      description: "Live streaming, instant content creation, and real-time sharing",
      opportunities: "Live fashion events, instant social content, real-time brand engagement",
      timeline: "Current high demand trend"
    }
  ];

  const professionalCertifications = [
    { 
      cert: "Adobe Certified Expert (ACE)",
      provider: "Adobe Systems",
      duration: "3-6 months preparation",
      cost: "$180 per exam",
      description: "Professional certification in Adobe Creative Suite applications"
    },
    { 
      cert: "Professional Photographers of America (PPA) Certification",
      provider: "Professional Photographers of America",
      duration: "6-12 months preparation",
      cost: "$200-500",
      description: "Professional photography certification with industry recognition"
    },
    { 
      cert: "Fashion Photography Masterclass Certificates",
      provider: "Various institutes and professionals",
      duration: "1-6 months",
      cost: "₹10,000-2 LPA",
      description: "Specialized fashion photography training from industry experts"
    },
    { 
      cert: "Digital Marketing for Photographers",
      provider: "Google, Facebook, various institutes",
      duration: "2-4 months",
      cost: "₹5,000-50,000",
      description: "Marketing and business development skills for photography business"
    },
    { 
      cert: "Drone Pilot License",
      provider: "Directorate General of Civil Aviation (DGCA)",
      duration: "1-3 months",
      cost: "₹15,000-30,000",
      description: "Licensed drone operation for aerial photography"
    }
  ];

  const salaryRanges = [
    { sector: "Fashion Magazines", fresher: "₹3-6 LPA", experienced: "₹6-15 LPA", senior: "₹12-30 LPA" },
    { sector: "Fashion Brands", fresher: "₹4-8 LPA", experienced: "₹8-20 LPA", senior: "₹15-40 LPA" },
    { sector: "E-commerce", fresher: "₹5-9 LPA", experienced: "₹9-18 LPA", senior: "₹15-35 LPA" },
    { sector: "Advertising Agencies", fresher: "₹6-10 LPA", experienced: "₹10-25 LPA", senior: "₹20-50 LPA" },
    { sector: "Celebrity/Entertainment", fresher: "₹8-12 LPA", experienced: "₹12-30 LPA", senior: "₹25-1 Crore" },
    { sector: "Wedding Photography", fresher: "₹3-8 LPA", experienced: "₹8-25 LPA", senior: "₹20-80 LPA" },
    { sector: "Freelance/Independent", fresher: "₹2-10 LPA", experienced: "₹10-50 LPA", senior: "₹30-2 Crores" },
    { sector: "Stock Photography", fresher: "₹1-5 LPA", experienced: "₹5-15 LPA", senior: "₹12-40 LPA" }
  ];

  const preparationTips = [
    "Build a strong portfolio showcasing diverse fashion photography styles and techniques",
    "Master camera equipment, lighting setups, and post-processing software professionally",
    "Study fashion trends, magazines, and work of renowned fashion photographers globally",
    "Network with fashion designers, models, makeup artists, and industry professionals",
    "Gain hands-on experience through internships, assistantships, and collaborative projects",
    "Develop business skills including client management, pricing, and marketing strategies",
    "Stay updated with social media trends and digital marketing for photography businesses",
    "Practice regularly with different lighting conditions, models, and fashion styles",
    "Attend fashion weeks, photography exhibitions, and industry events for inspiration",
    "Consider specialization in specific niches like bridal, editorial, or commercial fashion"
  ];

  const entrepreneurialOpportunities = [
    { 
      business: "Fashion Photography Studio",
      investment: "₹10-50 lakhs",
      description: "Professional studio with equipment for fashion, portrait, and commercial shoots",
      potential: "Steady income with established client base and premium service offerings"
    },
    { 
      business: "Online Photography Course Platform",
      investment: "₹5-25 lakhs",
      description: "Educational platform teaching fashion photography and related skills",
      potential: "Scalable business with growing demand for online learning"
    },
    { 
      business: "Fashion Photography Agency",
      investment: "₹15-75 lakhs",
      description: "Talent management and photography services for fashion industry",
      potential: "High growth potential with established industry connections"
    },
    { 
      business: "Equipment Rental Service",
      investment: "₹20 lakhs-1 crore",
      description: "Professional photography equipment rental for photographers and studios",
      potential: "Good returns with lower competition and recurring rentals"
    },
    { 
      business: "Photo Editing & Retouching Service",
      investment: "₹3-15 lakhs",
      description: "Professional photo editing services for photographers and brands",
      potential: "Growing market with increasing demand for high-quality editing"
    },
    { 
      business: "Fashion Content Creation Agency",
      investment: "₹8-40 lakhs",
      description: "Complete content creation including photography, videography, and social media",
      potential: "High demand with digital marketing growth and brand needs"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-purple-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCamera className="mx-auto text-6xl mb-6 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fashion Photographer
              <span className="text-pink-300"> Career Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Capture Fashion Beauty - Complete guide to building a successful career in Fashion Photography
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Fashion Photography Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">About Fashion Photography</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Fashion Photography is a genre of photography devoted to displaying clothing and other fashion items. Fashion photographers capture the essence of style, beauty, and trends through creative visual storytelling. They work with models, stylists, makeup artists, and designers to create compelling images for magazines, advertising campaigns, and brand promotions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With the rise of social media, e-commerce, and digital marketing, fashion photography has evolved to include diverse platforms and styles, creating numerous opportunities for creative professionals in this dynamic field.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Fashion Photography?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Creative and artistic career
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Growing industry demand
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Flexible work arrangements
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    High earning potential
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Global career opportunities
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Work with fashion industry
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

        {/* Top Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBuilding className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Photography Institutes</h2>
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
                  {topInstitutes.map((institute, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{institute.name}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{institute.courses}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">{institute.ranking}</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-medium">{institute.fees}</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-medium">{institute.placements}</td>
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
              <FaPalette className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {specializationAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{area.area}</h3>
                  <p className="text-gray-700 text-sm mb-3">{area.description}</p>
                  <div className="space-y-2 text-sm">
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
                      <span className="font-medium">Growth:</span> {industry.growth}
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
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Experienced (5-10 years)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-800">Senior (10+ years)</th>
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
              <h2 className="text-3xl font-bold text-gray-800">Emerging Trends & Opportunities</h2>
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
                  <FaCamera className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Capture Fashion Beauty?</h2>
            <p className="text-xl mb-8 text-pink-100">Start your journey in Fashion Photography and create stunning visual stories!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers" className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <FaArrowLeft className="mr-2" />
                Explore More Careers
              </Link>
              <a href="#" className="bg-pink-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-900 transition-colors inline-flex items-center">
                <FaExternalLinkAlt className="mr-2" />
                Start Your Journey
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
