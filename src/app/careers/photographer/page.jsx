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
  FaPlane,
  FaHeadset,
  FaEye,
  FaShieldAlt,
  FaBroadcastTower,
  FaPalette,
  FaLightbulb,
  FaHeart,
  FaGlobe,
  FaFilm,
  FaBolt,
  FaCogs
} from 'react-icons/fa';

export default function PhotographerPage() {
  const eligibilityData = [
    { icon: FaEye, title: "Creative Vision", detail: "Strong artistic eye and visual composition skills" },
    { icon: FaGraduationCap, title: "Education", detail: "Diploma/Degree in Photography or Arts (preferred)" },
    { icon: FaCamera, title: "Technical Skills", detail: "Proficiency in camera operation and editing software" },
    { icon: FaUsers, title: "Communication", detail: "Excellent client interaction and project management" }
  ];

  const photographyTypes = [
    { 
      type: "Portrait Photography", 
      duration: "2-4 hours", 
      equipment: "Studio lights, backdrops",
      earnings: "₹15,000 - ₹1,00,000",
      market: "Individual & Family",
      specialization: "Posing and lighting mastery"
    },
    { 
      type: "Wedding Photography", 
      duration: "8-12 hours", 
      equipment: "Multiple cameras, lenses",
      earnings: "₹75,000 - ₹8,00,000",
      market: "Wedding Industry",
      specialization: "Event documentation"
    },
    { 
      type: "Commercial Photography", 
      duration: "4-8 hours", 
      equipment: "Professional setup",
      earnings: "₹25,000 - ₹3,00,000",
      market: "Business & Advertising",
      specialization: "Brand storytelling"
    }
  ];

  const careerHierarchy = [
    { rank: "Assistant Photographer", years: "0-2 years", salary: "₹15,000 - ₹25,000", level: "Learning Phase" },
    { rank: "Junior Photographer", years: "2-4 years", salary: "₹25,000 - ₹50,000", level: "Building Portfolio" },
    { rank: "Professional Photographer", years: "4-7 years", salary: "₹50,000 - ₹1,50,000", level: "Established Freelancer" },
    { rank: "Senior Photographer", years: "7-10 years", salary: "₹1,50,000 - ₹3,00,000", level: "Specialized Expert" },
    { rank: "Photography Director", years: "10-15 years", salary: "₹3,00,000 - ₹5,00,000", level: "Creative Leadership" },
    { rank: "Studio Owner", years: "15+ years", salary: "₹5,00,000 - ₹10,00,000+", level: "Business Owner" }
  ];

  const keySkills = [
    "Camera Operation & Settings",
    "Lighting Techniques", 
    "Photo Editing (Photoshop, Lightroom)",
    "Composition & Framing",
    "Color Theory & Post-Processing",
    "Client Communication",
    "Business & Marketing",
    "Equipment Maintenance",
    "Digital Asset Management",
    "Creative Direction"
  ];

  const equipmentCategories = [
    { phase: "Basic Setup", duration: "Beginner", items: "Entry-level DSLR, kit lens, tripod", cost: "₹50,000 - ₹1,00,000", focus: "Learning fundamentals and basic photography" },
    { phase: "Intermediate Kit", duration: "Developing", items: "Mid-range camera, multiple lenses, lighting", cost: "₹2,00,000 - ₹4,00,000", focus: "Professional quality work and client projects" },
    { phase: "Professional Suite", duration: "Established", items: "Full-frame cameras, pro lenses, studio setup", cost: "₹5,00,000 - ₹10,00,000", focus: "High-end commercial and wedding photography" },
    { phase: "Studio Business", duration: "Advanced", items: "Multiple camera systems, complete lighting", cost: "₹10,00,000+", focus: "Running professional photography business" }
  ];

  const photographyRoles = [
    { role: "Wedding Photographer", responsibility: "Capturing special moments and ceremonies" },
    { role: "Portrait Photographer", responsibility: "Individual and family photography sessions" },
    { role: "Commercial Photographer", responsibility: "Product and advertising photography" },
    { role: "Fashion Photographer", responsibility: "Fashion editorials and model portfolios" },
    { role: "Event Photographer", responsibility: "Corporate and social event documentation" },
    { role: "Wildlife Photographer", responsibility: "Nature and wildlife conservation photography" }
  ];

  const photographyGenres = [
    "Portrait Photography",
    "Wedding Photography", 
    "Commercial Photography",
    "Fashion Photography",
    "Product Photography",
    "Event Photography",
    "Landscape Photography",
    "Wildlife Photography",
    "Street Photography",
    "Architecture Photography",
    "Food Photography",
    "Sports Photography",
    "Documentary Photography",
    "Fine Art Photography"
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 mt-[100px] sm:mt-0 overflow-x-hidden">
      {/* Mobile spacing fix */}
      <div className="block lg:hidden h-4"></div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20 w-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <FaCamera className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-purple-300"> Professional Photographer</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to building a successful photography career and capturing moments that tell compelling visual stories
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* What is Professional Photography Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Professional Photography?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Professional photography is the art, science, and business of creating compelling visual content for commercial, artistic, or documentary purposes. Professional photographers combine technical expertise with creative vision to produce images that communicate messages, tell stories, and capture precious moments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern photography encompasses various specializations including wedding, portrait, commercial, fashion, and documentary photography, each requiring specific technical skills, artistic vision, and business acumen.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Creative concept development and execution
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Client consultation and project management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Technical photography and lighting setup
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Post-production editing and retouching
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Business development and marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Skills & Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Requirements</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Portfolio:</span> Strong showcase of diverse work
                </div>
                <div className="text-black">
                  <span className="font-medium">Equipment:</span> Professional camera and editing software
                </div>
                <div className="text-black">
                  <span className="font-medium">Business:</span> Client management and marketing skills
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Market Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCamera className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Photography Market Segments</h2>
            </div>
            <div className="space-y-6">
              {photographyTypes.map((type, index) => (
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
                      <span className="text-gray-700 text-sm">{type.equipment}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{type.earnings}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{type.market}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{type.specialization}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Photography Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keySkills.map((skill, index) => (
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

        {/* Photography Genres */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaPalette className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular Photography Genres</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {photographyGenres.map((genre, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{genre}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Investment Phases */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCogs className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Equipment Investment Phases</h2>
            </div>
            <div className="space-y-6">
              {equipmentCategories.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="text-blue-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{phase.items}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">{phase.cost}</span>
                    </div>
                    <div>
                      <span className="text-xs text-green-600 font-medium">{phase.focus}</span>
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
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression Path</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800">{career.rank}</h3>
                      <p className="text-gray-600 mt-1">{career.responsibility}</p>
                    </div>
                    <div className="flex items-center space-x-8 text-right">
                      <div>
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-semibold text-gray-800">{career.years}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Monthly Income</div>
                        <div className="font-bold text-indigo-700">{career.salary}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Level</div>
                        <div className="font-medium text-blue-600">{career.level}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photography Specialization Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Photography Career Roles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {photographyRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <FaCamera className="text-green-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{role.role}</h3>
                      <p className="text-gray-600">{role.responsibility}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <FaTrophy className="text-4xl mb-4 mx-auto" />
              <h2 className="text-3xl font-bold">Keys to Photography Success</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaEye className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Develop Your Eye</h3>
                <p className="text-purple-100">Practice composition and study great photography work</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaUsers className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Build Network</h3>
                <p className="text-purple-100">Connect with clients, vendors, and other photographers</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaFilm className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Create Portfolio</h3>
                <p className="text-purple-100">Showcase your best work across different genres</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 text-center">
                <FaGlobe className="text-3xl mb-3 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Market Yourself</h3>
                <p className="text-purple-100">Use social media and websites to promote your work</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
