import Link from 'next/link';
import React from 'react';
import {
  FaUniversity,
  FaGraduationCap,
  FaCalendarAlt,
  FaClipboardCheck,
  FaBookOpen,
  FaTrophy,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUsers,
  FaGavel,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaLandmark,
  FaBalanceScale,
  FaHandshake,
  FaUserTie,
  FaCrown,
  FaBalanceScaleLeft,
  FaBuilding,
  FaSitemap,
  FaLeaf,
  FaPalette,
  FaVideo,
  FaFilm,
  FaGamepad,
  FaMagic,
  FaPencilAlt,
  FaDesktop,
  FaPlay
} from 'react-icons/fa';

export default function AnimatorPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Background", detail: "No specific nationality requirements, portfolio matters most" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in Animation, Fine Arts, or related field preferred" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No age restrictions, creativity and skill are key factors" },
    { icon: FaLandmark, title: "Portfolio", detail: "Strong demo reel and portfolio essential for employment" }
  ];

  const examStructure = [
    {
      phase: "Animation Fundamentals Course",
      duration: "6-12 Months",
      papers: "Project-based assessment",
      marks: "Portfolio evaluation",
      nature: "Practical assignments and projects",
      qualifying: "12th grade or equivalent"
    },
    {
      phase: "Bachelor's in Animation/VFX",
      duration: "3-4 Years",
      papers: "Semester-wise projects",
      marks: "CGPA system + Portfolio",
      nature: "Theory + Practical + Industry projects",
      qualifying: "12th with good marks in any stream"
    },
    {
      phase: "Specialized Certification Programs",
      duration: "3-18 Months",
      papers: "Software-specific certifications",
      marks: "Certificate of completion",
      nature: "Hands-on software training",
      qualifying: "Basic computer knowledge"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Animator", years: "0-2 years", salary: "₹2.5 - ₹5 Lakhs/annum", level: "Entry Level" },
    { rank: "2D/3D Artist", years: "1-3 years", salary: "₹3 - ₹7 Lakhs/annum", level: "Specialist" },
    { rank: "Senior Animator", years: "3-6 years", salary: "₹6 - ₹12 Lakhs/annum", level: "Intermediate" },
    { rank: "Lead Animator", years: "5-8 years", salary: "₹10 - ₹20 Lakhs/annum", level: "Team Lead" },
    { rank: "Animation Supervisor", years: "7-12 years", salary: "₹15 - ₹30 Lakhs/annum", level: "Management" },
    { rank: "Animation Director", years: "10+ years", salary: "₹25 - ₹60 Lakhs/annum", level: "Creative Head" },
    { rank: "Studio Owner/Freelancer", years: "5+ years", salary: "₹10 Lakhs - 1+ Crore/annum", level: "Independent" }
  ];

  const keySubjects = [
    "Drawing and Sketching",
    "Character Design",
    "Storyboarding",
    "2D Animation Principles",
    "3D Modeling and Animation",
    "Visual Effects (VFX)",
    "Motion Graphics",
    "Digital Art and Illustration",
    "Film Theory and Cinematography",
    "Sound Design and Editing"
  ];

  const specializations = [
    "2D Traditional Animation",
    "3D Computer Animation",
    "Visual Effects (VFX)",
    "Motion Graphics",
    "Game Animation",
    "Character Animation",
    "Stop Motion Animation",
    "Architectural Visualization",
    "Medical Animation",
    "Educational Animation"
  ];

  const animatorRoles = [
    { role: "2D Animator", responsibility: "Creating traditional hand-drawn or digital 2D animations" },
    { role: "3D Animator", responsibility: "Developing 3D models, rigging, and animating characters and objects" },
    { role: "VFX Artist", responsibility: "Creating visual effects for films, TV shows, and advertisements" },
    { role: "Game Animator", responsibility: "Designing animations for video games and interactive media" },
    { role: "Motion Graphics Designer", responsibility: "Creating animated graphics for advertising and marketing" },
    { role: "Freelance Animator", responsibility: "Working independently on various animation projects for clients" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-orange-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPalette className="mx-auto text-6xl mb-6 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete Guide to Becoming an
              <span className="text-pink-300"> Animator</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Bring stories to life through the magic of animation - from 2D classics to cutting-edge 3D worlds
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What is an Animator Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Animator?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An animator is a creative professional who brings characters, objects, and stories to life through the art of animation. They create the illusion of movement by designing and sequencing images, whether through traditional hand-drawn techniques, computer-generated imagery (CGI), or stop-motion animation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Animators work across various industries including entertainment (films, TV shows, web series), gaming, advertising, education, and corporate communications. They combine artistic creativity with technical skills to create engaging visual narratives that captivate audiences worldwide.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Character design and development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Storyboarding and sequence planning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Creating smooth and believable motion
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborating with directors and creative teams
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Using animation software and tools effectively
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria & Educational Path</h2>
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

            <div className="mt-8 bg-pink-50 border-l-4 border-pink-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Educational Options</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Formal Education:</span> BFA Animation, B.Des, Diploma in Animation & VFX
                </div>
                <div className="text-black">
                  <span className="font-medium">Alternative Paths:</span> Online courses, bootcamps, self-learning with strong portfolio
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examination Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Animation Education & Training Structure</h2>
            </div>
            <div className="space-y-6">
              {examStructure.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{exam.marks}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{exam.nature}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{exam.qualifying}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Note:</span> Animation industry highly values portfolio and practical skills over formal qualifications. Many successful animators are self-taught or learn through online platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Key Subjects */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core Animation Subjects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keySubjects.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMagic className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Animation Specializations</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {specializations.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Animator Roles */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaPlay className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Paths for Animators</h2>
            </div>
            <div className="space-y-4">
              {animatorRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaCrown className="text-blue-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{role.role}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{role.responsibility}</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index >= 5 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
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
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        position.level === 'Entry Level' ? 'bg-green-200 text-green-800' :
                        position.level === 'Creative Head' || position.level === 'Independent' ? 'bg-purple-200 text-purple-800' :
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
        </section>

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Software</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Industry Software</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <FaDesktop className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">3D Animation</div>
                      <div className="text-sm text-gray-600">Maya, 3ds Max, Blender, Cinema 4D</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                    <FaFilm className="text-teal-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">2D Animation</div>
                      <div className="text-sm text-gray-600">Toon Boom Harmony, Adobe Animate, TVPaint</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                    <FaVideo className="text-orange-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">VFX & Compositing</div>
                      <div className="text-sm text-gray-600">After Effects, Nuke, Fusion, Houdini</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Development Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a strong demo reel showcasing your best work</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Master the principles of animation (timing, spacing, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest software and industry trends</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with industry professionals and join animation communities</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Consider specializing in high-demand areas like game animation or VFX</span>
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
            <Link href='/careers'> Back to Careers</Link>
          </button>
        </div>
      </div>
    </main>
  );
}