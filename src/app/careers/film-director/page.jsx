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
  FaShieldAlt, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaCloud,
  FaEye,
  FaHeart,
  FaUserTie,
  FaCamera,
  FaFilm,
  FaMicrophone,
  FaLightbulb,
  FaPalette,
  FaTheaterMasks,
  FaAward,
  FaStar
} from 'react-icons/fa';

export default function FilmDirectorPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in Film Studies/Mass Communication preferred" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No specific age limit - creativity matters most" },
    { icon: FaEye, title: "Vision", detail: "Strong visual storytelling and artistic vision" },
    { icon: FaUsers, title: "Leadership", detail: "Excellent communication and team management skills" }
  ];

  const careerTypes = [
    { 
      type: "Independent Filmmaker", 
      duration: "2-5 years", 
      requirement: "Personal projects & short films",
      cost: "₹5-15 lakhs",
      description: "Create independent films with limited budgets"
    },
    { 
      type: "Assistant Director", 
      duration: "1-3 years", 
      requirement: "Film school or industry experience",
      cost: "₹2-8 lakhs",
      description: "Work under established directors to learn the craft"
    },
    { 
      type: "Commercial Director", 
      duration: "3-7 years", 
      requirement: "Portfolio of commercials/music videos",
      cost: "₹10-25 lakhs",
      description: "Direct advertisements and promotional content"
    },
    { 
      type: "Feature Film Director", 
      duration: "5-10 years", 
      requirement: "Proven track record and industry connections",
      cost: "₹25-100 lakhs",
      description: "Direct full-length theatrical releases"
    }
  ];

  const careerHierarchy = [
    { rank: "Film School Graduate/Intern", years: "0-1 year", salary: "₹15,000-30,000/month" },
    { rank: "Assistant Director", years: "1-3 years", salary: "₹30,000-80,000/month" },
    { rank: "Second Unit Director", years: "3-5 years", salary: "₹80,000-2 lakhs/month" },
    { rank: "Independent/Short Film Director", years: "2-6 years", salary: "₹1-5 lakhs/project" },
    { rank: "Commercial/Music Video Director", years: "4-8 years", salary: "₹2-10 lakhs/project" },
    { rank: "Feature Film Director", years: "8-15 years", salary: "₹10-50 lakhs/film" },
    { rank: "Established Director", years: "15+ years", salary: "₹1-10 crores/film" }
  ];

  const skillRequirements = [
    "Strong visual storytelling ability",
    "Excellent communication skills",
    "Leadership and team management",
    "Creative problem-solving",
    "Understanding of cinematography",
    "Script analysis and development",
    "Budget management skills",
    "Knowledge of editing and post-production"
  ];

  const topFilmSchools = [
    { school: "Film and Television Institute of India (FTII)", location: "Pune", type: "Government", duration: "3 years" },
    { school: "Satyajit Ray Film & Television Institute", location: "Kolkata", type: "Government", duration: "3 years" },
    { school: "Whistling Woods International", location: "Mumbai", type: "Private", duration: "2-3 years" },
    { school: "Asian Academy of Film & Television", location: "Noida", type: "Private", duration: "1-3 years" },
    { school: "Zee Institute of Creative Art", location: "Mumbai", type: "Private", duration: "2 years" },
    { school: "LV Prasad Film & TV Academy", location: "Chennai", type: "Private", duration: "1-2 years" }
  ];

  const subjectAreas = [
    "Screenplay Writing",
    "Cinematography", 
    "Film Editing",
    "Sound Design",
    "Production Management",
    "Film History & Theory",
    "Acting Direction",
    "Visual Effects"
  ];

  const filmGenres = [
    { genre: "Drama", description: "Character-driven narratives with emotional depth" },
    { genre: "Thriller/Suspense", description: "High-tension stories with mystery elements" },
    { genre: "Comedy", description: "Entertainment focused on humor and wit" },
    { genre: "Action", description: "Fast-paced films with physical sequences" },
    { genre: "Documentary", description: "Non-fiction storytelling and real-world subjects" },
    { genre: "Horror", description: "Fear-inducing narratives and supernatural elements" },
    { genre: "Romance", description: "Love stories and relationship dynamics" },
    { genre: "Sci-Fi/Fantasy", description: "Imaginative worlds and futuristic concepts" }
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
              <span className="text-purple-300"> Film Director</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering the art of filmmaking and creating compelling visual stories
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Film Director Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Film Director?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Film Director is the creative visionary who guides the artistic and dramatic aspects of a film. They are responsible for overseeing the creative aspects of a film, from pre-production planning to post-production editing, ensuring the story is told effectively on screen.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Directors work with actors, cinematographers, editors, and other crew members to bring scripts to life, making crucial decisions about visual style, pacing, and performance to create compelling cinematic experiences.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Script development and interpretation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Casting actors and directing performances
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Visual storytelling and shot composition
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborating with cinematographers and editors
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Managing production timeline and budget
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Qualifications & Skills</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Skills</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Technical Knowledge:</span> Camera, lighting, sound basics
                </div>
                <div className="text-black">
                  <span className="font-medium">Software Skills:</span> Editing software, storyboarding tools
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Paths & Investment</h2>
            </div>
            <div className="space-y-6">
              {careerTypes.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{career.type}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{career.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{career.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{career.cost}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{career.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHeart className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Abilities</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillRequirements.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border border-red-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-red-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Study Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjectAreas.map((subject, index) => (
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

        {/* Film Genres Specialization */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTheaterMasks className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Film Genre Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filmGenres.map((genre, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-100 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{genre.genre}</h3>
                  <p className="text-gray-600 text-sm">{genre.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Film Schools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Film Schools in India</h2>
            </div>
            <div className="space-y-4">
              {topFilmSchools.map((school, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{school.school}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{school.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${school.type === 'Government' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
                        {school.type}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{school.duration}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Earning Potential</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200'}`}>
                  <div className="grid md:grid-cols-3 gap-4 items-center">
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
              <h2 className="text-3xl font-bold text-gray-800">Career Development Pathway</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Education & Foundation</h3>
                  <p className="text-gray-600">Complete film school or relevant degree, learn technical basics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Portfolio</h3>
                  <p className="text-gray-600">Create short films, music videos, and personal projects</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Industry Experience</h3>
                  <p className="text-gray-600">Work as assistant director or in other film crew positions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Independent Projects</h3>
                  <p className="text-gray-600">Direct your own projects and build professional network</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Professional Recognition</h3>
                  <p className="text-gray-600">Secure funding and direct commercial or feature films</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Industry Links</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Important Organizations</h3>
                <div className="space-y-3">
                  <a href="https://www.ffiindia.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Film Federation of India</div>
                      <div className="text-sm text-gray-600">Industry standards and regulations</div>
                    </div>
                  </a>
                  <a href="https://www.ftiindia.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">FTII</div>
                      <div className="text-sm text-gray-600">Premier film education institute</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop your unique visual style and voice</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network actively within the film industry</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest filmmaking technology</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Submit to film festivals for exposure</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Learn business aspects of filmmaking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-colors shadow-lg">
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
