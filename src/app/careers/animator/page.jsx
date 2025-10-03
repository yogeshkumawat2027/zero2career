import Link from 'next/link';
import React from 'react';
import { 
  FaPlay, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaPaintBrush, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaDesktop,
  FaFilm,
  FaHandshake,
  FaUserTie,
  FaCrown,
  FaGamepad,
  FaVideo,
  FaCube,
  FaLightbulb,
  FaEye,
  FaMagic,
  FaRocket,
  FaTools
} from 'react-icons/fa';

export const metadata = {
  title: "Animator Career Guide 2025 | Animation Skills, Software & Salary | Zero2Career",
  description: "Complete Animator career guide covering 2D/3D animation, motion graphics, character design, animation software, salary expectations, and career growth in animation industry.",
  keywords: "Animator career, 2D animation, 3D animation, motion graphics, character animation, Maya, Blender, After Effects, animation studio jobs, VFX artist, game animation",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/animator"
  },
  openGraph: {
    title: "Become an Animator - Complete Animation Career Guide 2025",
    description: "Discover everything about Animator career: 2D/3D animation techniques, software mastery, portfolio building, salary expectations, and opportunities in animation industry.",
    url: "https://zero2career.in/careers/animator",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Animator Career Guide - Zero2Career"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Become an Animator - Complete Animation Career Guide 2025",
    description: "Comprehensive guide to Animator career: 2D/3D animation, motion graphics, software skills & career opportunities in entertainment industry.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"],
  }
};

export default function AnimatorPage() {
  const skillRequirements = [
    { icon: FaPaintBrush, title: "Artistic Skills", detail: "Drawing, design principles, visual storytelling" },
    { icon: FaDesktop, title: "Software Proficiency", detail: "Maya, Blender, After Effects, Photoshop" },
    { icon: FaGraduationCap, title: "Education", detail: "Animation degree or equivalent portfolio" },
    { icon: FaLightbulb, title: "Creativity", detail: "Original thinking, problem-solving, innovation" }
  ];

  const animationTypes = [
    { 
      type: "2D Animation", 
      duration: "6-12 months to learn", 
      software: "Adobe Animate, Toon Boom, TVPaint",
      applications: "Cartoons, Explainer videos, Web animation",
      complexity: "Beginner to Intermediate",
      salary: "₹3L - ₹8L per year"
    },
    { 
      type: "3D Animation", 
      duration: "12-24 months to master", 
      software: "Maya, Blender, Cinema 4D",
      applications: "Films, Games, Architectural viz",
      complexity: "Intermediate to Advanced",
      salary: "₹4L - ₹15L per year"
    },
    { 
      type: "Motion Graphics", 
      duration: "3-8 months to learn", 
      software: "After Effects, Premiere Pro",
      applications: "Commercials, UI/UX, Social media",
      complexity: "Beginner to Advanced",
      salary: "₹3.5L - ₹12L per year"
    },
    { 
      type: "VFX Animation", 
      duration: "18-36 months expertise", 
      software: "Houdini, Nuke, Maya, Blender",
      applications: "Movies, TV shows, Commercials",
      complexity: "Advanced to Expert",
      salary: "₹6L - ₹25L per year"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Animator", years: "0-2 years", salary: "₹2,50,000 - ₹5,00,000", level: "Entry Level" },
    { rank: "Animator", years: "2-4 years", salary: "₹5,00,000 - ₹8,00,000", level: "Mid Level" },
    { rank: "Senior Animator", years: "4-7 years", salary: "₹8,00,000 - ₹15,00,000", level: "Senior Level" },
    { rank: "Lead Animator", years: "7-10 years", salary: "₹15,00,000 - ₹25,00,000", level: "Lead Level" },
    { rank: "Animation Supervisor", years: "10-15 years", salary: "₹25,00,000 - ₹40,00,000", level: "Supervisor Level" },
    { rank: "Animation Director", years: "15-20 years", salary: "₹40,00,000 - ₹75,00,000", level: "Director Level" },
    { rank: "Creative Director", years: "20+ years", salary: "₹75,00,000 - ₹1,50,00,000", level: "Executive Level" }
  ];

  const technicalSkills = [
    "Character Animation & Rigging",
    "Keyframe Animation Principles", 
    "3D Modeling & Texturing",
    "Lighting & Rendering",
    "Motion Graphics Design",
    "Visual Effects (VFX)",
    "Storyboarding & Pre-visualization",
    "Video Editing & Compositing",
    "Game Animation & Interactive Media",
    "AR/VR Animation Development",
    "Script Writing for Animation",
    "Project Management & Pipeline"
  ];

  const learningPhases = [
    { phase: "Foundation Skills", duration: "3-6 months", location: "Online Courses/Art School", focus: "Basic drawing, animation principles, software introduction" },
    { phase: "Software Mastery", duration: "6-12 months", location: "Specialized Training", focus: "Advanced software skills, technique refinement, workflow optimization" },
    { phase: "Portfolio Development", duration: "3-6 months", location: "Personal Projects", focus: "Creating demo reel, character animation, storytelling projects" },
    { phase: "Specialization Training", duration: "6-12 months", location: "Advanced Courses", focus: "Choose specialization: 2D/3D/Motion Graphics/VFX" },
    { phase: "Industry Experience", duration: "6-24 months", location: "Studios/Freelance", focus: "Professional projects, team collaboration, production pipeline" },
    { phase: "Advanced Techniques", duration: "Ongoing", location: "Workshops/Conferences", focus: "Cutting-edge technology, leadership skills, industry trends" }
  ];

  const industryAreas = [
    { area: "Film & Television", responsibility: "Movies, TV series, documentaries, streaming content animation" },
    { area: "Gaming Industry", responsibility: "Character animation, cinematic sequences, UI animation" },
    { area: "Advertising & Marketing", responsibility: "Commercial animations, brand videos, social media content" },
    { area: "Education & E-learning", responsibility: "Educational videos, interactive content, training materials" },
    { area: "Architecture & Real Estate", responsibility: "Architectural visualization, walkthrough animations" },
    { area: "Web & Mobile Apps", responsibility: "UI animations, interactive elements, app animations" }
  ];

  const animationSoftware = [
    "Autodesk Maya",
    "Blender 3D", 
    "Adobe After Effects",
    "Cinema 4D",
    "Toon Boom Harmony",
    "Adobe Animate",
    "Houdini",
    "ZBrush",
    "Substance Suite",
    "Unreal Engine",
    "Unity 3D",
    "Nuke"
  ];

  const specializations = [
    { spec: "Character Animation", description: "Bringing characters to life through movement, emotion, and personality" },
    { spec: "Motion Graphics", description: "Graphic design elements combined with animation for digital media" },
    { spec: "Visual Effects (VFX)", description: "Creating realistic effects and environments for film and media" },
    { spec: "Game Animation", description: "Interactive animations for video games and real-time applications" },
    { spec: "Architectural Visualization", description: "3D animations showcasing buildings and interior designs" },
    { spec: "Medical Animation", description: "Educational animations explaining medical procedures and concepts" }
  ];

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 mt-[100px] sm:mt-0">
      {/* Mobile Spacing */}
      <div className="block lg:hidden h-4"></div>
      
      {/* Hero Section */}
      <div className="w-full relative bg-gradient-to-r from-cyan-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPlay className="mx-auto text-6xl mb-6 text-cyan-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming an 
              <span className="text-cyan-300"> Animator</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering animation arts and bringing imagination to life through motion, storytelling, and visual creativity
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Animator Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-cyan-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Animator?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An Animator is a creative professional who brings static images, characters, and objects to life through motion. They use artistic skills combined with technical software knowledge to create animations for films, television, games, advertisements, and digital media.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Animators work across various industries, from entertainment and gaming to education and marketing, using both traditional hand-drawn techniques and cutting-edge digital technologies to tell stories and communicate ideas through movement.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Create character and object animations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Develop storyboards and animatics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Design motion graphics and visual effects
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborate with directors and clients
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Maintain technical quality and deadlines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Skills & Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillRequirements.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Getting Started Tips</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Portfolio:</span> Create strong demo reel showcasing your best work
                </div>
                <div className="text-black">
                  <span className="font-medium">Practice:</span> Animate daily to improve skills and speed
                </div>
                <div className="text-black">
                  <span className="font-medium">Networking:</span> Connect with industry professionals and communities
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Types & Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Animation Types & Career Paths</h2>
            </div>
            <div className="space-y-6">
              {animationTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{type.type}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{type.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{type.software}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700 text-sm">{type.applications}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{type.complexity}</span>
                    </div>
                    <div>
                      <span className="text-xs text-green-600 font-medium">{type.salary}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Animation Software */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry-Standard Animation Software</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {animationSoftware.map((software, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{software}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Roadmap */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Learning Roadmap & Career Development</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Follow this comprehensive learning path to become a skilled animator. The roadmap covers fundamental artistic skills, technical software mastery, portfolio development, and industry specialization for a successful animation career.
            </p>
            <div className="space-y-4">
              {learningPhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-2" />
                      <span className="text-gray-700 font-medium">{phase.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-blue-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.location}</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">{phase.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMagic className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Animation Specializations</h2>
            </div>
            <div className="space-y-4">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaCrown className="text-indigo-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{spec.spec}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{spec.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFilm className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Applications</h2>
            </div>
            <div className="space-y-4">
              {industryAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaRocket className="text-emerald-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{area.area}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{area.responsibility}</p>
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
              <FaChartLine className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="overflow-x-auto">
              <div className="space-y-4">
                {careerHierarchy.map((position, index) => (
                  <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index === careerHierarchy.length - 1 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200'}`}>
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="text-pink-600 mr-2" />
                        <span className="text-gray-700">{position.years}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMoneyBillWave className="text-green-600 mr-2" />
                        <span className="text-gray-700 font-medium">{position.salary}</span>
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          position.level === 'Entry Level' ? 'bg-green-200 text-green-800' :
                          position.level === 'Executive Level' ? 'bg-purple-200 text-purple-800' :
                          'bg-blue-200 text-blue-800'
                        }`}>
                          {position.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Animation Career Development Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Foundation Building (Months 1-6)</h3>
                  <p className="text-gray-600">Learn drawing fundamentals, animation principles, and basic software skills</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Software Mastery (Months 6-18)</h3>
                  <p className="text-gray-600">Master industry-standard animation software and advanced techniques</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Portfolio Development (Months 18-24)</h3>
                  <p className="text-gray-600">Create professional demo reel and build strong portfolio showcase</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Industry Entry & Specialization (Years 2-4)</h3>
                  <p className="text-gray-600">Gain professional experience, choose specialization, build industry network</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Career Advancement (4+ Years)</h3>
                  <p className="text-gray-600">Leadership roles, creative direction, mentorship, and industry recognition</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Learning Platforms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Learning Platforms</h3>
                <div className="space-y-3">
                  <a href="https://www.autodesk.com/education/edu-software" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaDesktop className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Autodesk Maya</div>
                      <div className="text-sm text-gray-600">Industry standard 3D animation and modeling software</div>
                    </div>
                  </a>
                  <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow group">
                    <FaCube className="text-orange-600 mr-3 group-hover:text-orange-800" />
                    <div>
                      <div className="font-medium text-gray-800">Blender</div>
                      <div className="text-sm text-gray-600">Free and open-source 3D creation suite</div>
                    </div>
                  </a>
                  <a href="https://www.adobe.com/products/aftereffects.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-md transition-shadow group">
                    <FaVideo className="text-purple-600 mr-3 group-hover:text-purple-800" />
                    <div>
                      <div className="font-medium text-gray-800">After Effects</div>
                      <div className="text-sm text-gray-600">Motion graphics and visual effects software</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Success Strategy</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice animation principles daily</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Study movement and observe life for reference</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a strong and diverse portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with industry professionals</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with industry trends and technology</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            <Link href="/careers">
              Back to Careers
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
