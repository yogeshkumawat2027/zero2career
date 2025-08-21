import Link from 'next/link';
import React from 'react';
import { 
  FaVideo, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaMedal, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaDesktop,
  FaEye,
  FaHeart,
  FaStar,
  FaUserTie,
  FaPalette,
  FaPlay,
  FaGamepad,
  FaFilm,
  FaMagic,
  FaCube,
  FaPencilAlt,
  FaLaptop,
  FaBrush
} from 'react-icons/fa';

export default function AnimatorPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "10+2 or Bachelor's in relevant field" },
    { icon: FaPalette, title: "Creativity", detail: "Strong artistic and creative abilities" },
    { icon: FaLaptop, title: "Technical Skills", detail: "Proficiency in animation software" },
    { icon: FaEye, title: "Visual Sense", detail: "Good understanding of color, composition" }
  ];

  const entrySchemes = [
    { 
      scheme: "Animation Degree Program", 
      duration: "3-4 years", 
      qualification: "10+2 any stream",
      age: "17-25 years",
      description: "Comprehensive animation and multimedia degree"
    },
    { 
      scheme: "Diploma in Animation", 
      duration: "1-2 years", 
      qualification: "10+2 pass",
      age: "18-30 years",
      description: "Focused animation skills and software training"
    },
    { 
      scheme: "Short-term Courses", 
      duration: "3-12 months", 
      qualification: "Basic computer knowledge",
      age: "16+ years",
      description: "Specialized software and technique training"
    },
    { 
      scheme: "Online Certification", 
      duration: "Self-paced", 
      qualification: "Interest in animation",
      age: "Any age",
      description: "Flexible online learning from industry experts"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Animator", years: "0-2 years", salary: "₹15,000 - ₹30,000" },
    { rank: "2D/3D Animator", years: "2-4 years", salary: "₹30,000 - ₹50,000" },
    { rank: "Senior Animator", years: "4-7 years", salary: "₹50,000 - ₹80,000" },
    { rank: "Lead Animator", years: "7-10 years", salary: "₹80,000 - ₹1,20,000" },
    { rank: "Animation Supervisor", years: "10-15 years", salary: "₹1,20,000 - ₹2,00,000" },
    { rank: "Animation Director", years: "15+ years", salary: "₹2,00,000 - ₹3,50,000" },
    { rank: "VFX Director", years: "12+ years", salary: "₹2,50,000 - ₹4,00,000" },
    { rank: "Creative Director", years: "15+ years", salary: "₹3,00,000 - ₹5,00,000" }
  ];

  const skillsRequired = [
    "Drawing and sketching fundamentals",
    "Understanding of motion and timing",
    "Color theory and composition",
    "Storytelling and narrative skills",
    "Attention to detail and patience",
    "Creative problem-solving abilities",
    "Basic understanding of physics",
    "Strong observation skills"
  ];

  const trainingInstitutes = [
    { academy: "Arena Animation", location: "Pan India", type: "Animation Chain", duration: "6-18 months" },
    { academy: "MAAC (Maya Academy)", location: "Multiple Cities", type: "Professional Training", duration: "12-24 months" },
    { academy: "Picasso Animation College", location: "Multiple Cities", type: "Degree Programs", duration: "3-4 years" },
    { academy: "National Institute of Design", location: "Ahmedabad", type: "Premier Institute", duration: "4 years" },
    { academy: "Whistling Woods International", location: "Mumbai", type: "Film School", duration: "1-3 years" },
    { academy: "DSK Supinfogame", location: "Pune", type: "International Standard", duration: "3 years" }
  ];

  const softwareTools = [
    "Autodesk Maya",
    "3ds Max", 
    "Blender (Open Source)",
    "Adobe After Effects",
    "Adobe Animate",
    "Cinema 4D",
    "Toon Boom Harmony",
    "ZBrush (Sculpting)"
  ];

  const industryDomains = [
    { domain: "Film & Entertainment", role: "Movies, web series, and entertainment content" },
    { domain: "Gaming Industry", role: "Character animation and game cinematics" },
    { domain: "Advertising & Marketing", role: "Commercial ads and promotional content" },
    { domain: "Educational Content", role: "E-learning and training materials" },
    { domain: "Architecture Visualization", role: "3D architectural walkthroughs" },
    { domain: "Medical Animation", role: "Scientific and medical visualizations" }
  ];

  const animationTypes = [
    "2D Traditional Animation",
    "3D Computer Animation",
    "Motion Graphics",
    "Visual Effects (VFX)",
    "Stop Motion Animation",
    "Character Animation",
    "Architectural Visualization",
    "Product Visualization"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaVideo className="mx-auto text-6xl mb-6 text-purple-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-purple-300"> 2D-3D Animator</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to a creative career in animation, bringing imagination to life through digital artistry
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Animator Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a 2D-3D Animator?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A 2D-3D Animator is a digital artist who creates moving images and visual effects using computer software. They bring characters, objects, and scenes to life through the illusion of movement, working in various industries from entertainment to education.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Animators combine artistic creativity with technical skills to create everything from cartoon characters to realistic visual effects, working on movies, games, advertisements, and digital media content.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Creating animated characters and objects
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Developing storyboards and concepts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Working with lighting and texturing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Collaborating with creative teams
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-purple-500 mr-3" />
                    Meeting project deadlines and quality standards
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
              <FaClipboardCheck className="text-3xl text-purple-600 mr-4" />
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Essential Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillsRequired.map((skill, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <FaCheckCircle className="text-yellow-600 mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Entry Schemes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Learning Paths & Training</h2>
            </div>
            <div className="space-y-6">
              {entrySchemes.map((scheme, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{scheme.scheme}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">{scheme.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{scheme.qualification}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-indigo-700">{scheme.age}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{scheme.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software Tools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaDesktop className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Software Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softwareTools.map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Animation Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMagic className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Animation Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {animationTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4 border border-pink-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-pink-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Animation Institutes</h2>
            </div>
            <div className="space-y-4">
              {trainingInstitutes.map((institute, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{institute.academy}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.location}</span>
                    </div>
                    <div>
                      <span className="bg-teal-200 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                        {institute.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.duration}</span>
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
              <FaChartLine className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="flex items-center">
                      <FaMedal className="text-yellow-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-indigo-600 mr-2" />
                      <span className="text-gray-700">{position.years}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{position.salary}</span>
                    </div>
                    <div>
                      {index === 0 && <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Leadership</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Domains */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaStar className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Industry Applications</h2>
            </div>
            <div className="space-y-4">
              {industryDomains.map((domain, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{domain.domain}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{domain.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Development Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development Path</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Learn Fundamentals</h3>
                  <p className="text-gray-600">Master drawing, design principles, and basic animation concepts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Software Training</h3>
                  <p className="text-gray-600">Gain proficiency in industry-standard animation software</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Portfolio</h3>
                  <p className="text-gray-600">Create impressive demo reels and showcase your best work</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Industry Experience</h3>
                  <p className="text-gray-600">Start with internships and entry-level positions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Specialize & Advance</h3>
                  <p className="text-gray-600">Choose specialization and advance to senior roles</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Career Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Learning Platforms</h3>
                <div className="space-y-3">
                  <a href="https://www.autodesk.com/education/home" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Autodesk Learning</div>
                      <div className="text-sm text-gray-600">Free software and tutorials for students</div>
                    </div>
                  </a>
                  <a href="https://www.blender.org/support/tutorials/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-orange-600 mr-3 group-hover:text-orange-800" />
                    <div>
                      <div className="font-medium text-gray-800">Blender Tutorials</div>
                      <div className="text-sm text-gray-600">Free 3D animation software and learning</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a strong online portfolio and demo reel</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest software and techniques</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with industry professionals</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice daily and experiment with new styles</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Understand storytelling and character development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            <Link href="/careers">Back to Careers</Link>
          </button>
        </div>
      </div>
    </main>
  );
}