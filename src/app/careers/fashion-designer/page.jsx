import Link from 'next/link';
import React from 'react';
import { 
  FaPalette, 
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
  FaCut,
  FaTshirt,
  FaRulerCombined,
  FaSketch,
  FaCamera,
  FaMagic,
  FaBrush,
  FaGem
} from 'react-icons/fa';

export default function FashionDesignerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "10+2 or Bachelor's in Design/Arts" },
    { icon: FaPalette, title: "Creativity", detail: "Strong artistic and aesthetic sense" },
    { icon: FaEye, title: "Fashion Sense", detail: "Keen eye for trends and colors" },
    { icon: FaSketch, title: "Drawing Skills", detail: "Ability to sketch and visualize designs" }
  ];

  const entrySchemes = [
    { 
      scheme: "Bachelor in Fashion Design", 
      duration: "3-4 years", 
      qualification: "10+2 any stream",
      age: "17-25 years",
      description: "Comprehensive fashion design and textile knowledge"
    },
    { 
      scheme: "Diploma in Fashion Design", 
      duration: "1-2 years", 
      qualification: "10+2 pass",
      age: "18-30 years",
      description: "Focused fashion design and garment construction"
    },
    { 
      scheme: "Fashion Designing Courses", 
      duration: "6-18 months", 
      qualification: "Basic design interest",
      age: "16+ years",
      description: "Specialized courses in pattern making, draping"
    },
    { 
      scheme: "Online Fashion Courses", 
      duration: "Self-paced", 
      qualification: "Interest in fashion",
      age: "Any age",
      description: "Flexible learning from fashion industry experts"
    }
  ];

  const careerHierarchy = [
    { rank: "Fashion Design Intern", years: "0-1 years", salary: "₹10,000 - ₹20,000" },
    { rank: "Assistant Fashion Designer", years: "1-3 years", salary: "₹20,000 - ₹35,000" },
    { rank: "Fashion Designer", years: "3-5 years", salary: "₹35,000 - ₹60,000" },
    { rank: "Senior Fashion Designer", years: "5-8 years", salary: "₹60,000 - ₹1,00,000" },
    { rank: "Lead Designer", years: "8-12 years", salary: "₹1,00,000 - ₹1,50,000" },
    { rank: "Creative Director", years: "10-15 years", salary: "₹1,50,000 - ₹2,50,000" },
    { rank: "Fashion Brand Owner", years: "12+ years", salary: "₹2,00,000 - ₹5,00,000" },
    { rank: "Fashion House Director", years: "15+ years", salary: "₹3,00,000 - ₹8,00,000" }
  ];

  const skillsRequired = [
    "Fashion sketching and illustration",
    "Color theory and fabric knowledge",
    "Pattern making and draping",
    "Trend analysis and forecasting",
    "Garment construction techniques",
    "Fashion history and culture",
    "Computer-aided design (CAD)",
    "Business and marketing acumen"
  ];

  const trainingInstitutes = [
    { academy: "National Institute of Fashion Technology (NIFT)", location: "Multiple Cities", type: "Premier Institute", duration: "2-4 years" },
    { academy: "Pearl Academy", location: "Delhi, Mumbai, Jaipur", type: "Fashion Institute", duration: "1-4 years" },
    { academy: "National Institute of Design (NID)", location: "Ahmedabad", type: "Design Institute", duration: "4 years" },
    { academy: "Symbiosis Institute of Design", location: "Pune", type: "Private Institute", duration: "4 years" },
    { academy: "Indian Institute of Art & Design", location: "New Delhi", type: "Art & Design", duration: "4 years" },
    { academy: "Amity School of Fashion Technology", location: "Multiple Cities", type: "Private University", duration: "3-4 years" }
  ];

  const softwareTools = [
    "Adobe Illustrator",
    "Adobe Photoshop", 
    "CorelDRAW",
    "CLO 3D (3D Fashion Design)",
    "Gerber AccuMark",
    "Browzwear VStitcher",
    "Fashion CAD",
    "TUKAcad"
  ];

  const industryDomains = [
    { domain: "Apparel Manufacturing", role: "Design for clothing brands and manufacturers" },
    { domain: "Fashion Houses", role: "High-end couture and luxury fashion" },
    { domain: "Retail Chains", role: "Ready-to-wear and fast fashion" },
    { domain: "Costume Design", role: "Film, theater, and entertainment industry" },
    { domain: "Textile Industry", role: "Fabric design and textile development" },
    { domain: "Fashion Merchandising", role: "Styling and fashion marketing" }
  ];

  const fashionSpecializations = [
    "Women's Wear Design",
    "Men's Wear Design",
    "Children's Wear",
    "Accessories Design",
    "Footwear Design",
    "Lingerie Design",
    "Bridal Wear",
    "Sustainable Fashion"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-rose-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-900 to-rose-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaTshirt className="mx-auto text-6xl mb-6 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-pink-300"> Fashion Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to a creative career in fashion design, transforming ideas into wearable art
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Fashion Designer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Fashion Designer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Fashion Designer is a creative professional who conceptualizes, designs, and creates clothing, accessories, and footwear. They combine artistic vision with technical knowledge to create functional and aesthetically pleasing garments that reflect current trends and cultural influences.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fashion designers work across various segments from haute couture to ready-to-wear, creating designs for runway shows, retail brands, and individual clients while considering factors like functionality, comfort, and market demand.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Creating fashion sketches and design concepts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Selecting fabrics, colors, and trims
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Pattern making and garment fitting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Trend research and market analysis
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Collaborating with production teams
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
              <FaClipboardCheck className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Skills & Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-pink-600 mx-auto mb-4" />
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Design Software</h2>
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

        {/* Fashion Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGem className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Fashion Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {fashionSpecializations.map((specialization, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{specialization}</span>
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
              <h2 className="text-3xl font-bold text-gray-800">Top Fashion Design Institutes</h2>
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
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Learn Design Fundamentals</h3>
                  <p className="text-gray-600">Master drawing, color theory, and basic fashion design principles</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Technical Skills Training</h3>
                  <p className="text-gray-600">Learn pattern making, draping, and garment construction</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Design Portfolio</h3>
                  <p className="text-gray-600">Create impressive fashion collections and showcase your designs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Industry Experience</h3>
                  <p className="text-gray-600">Start with internships at fashion houses or design studios</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Specialize & Brand Building</h3>
                  <p className="text-gray-600">Choose specialization and build your fashion brand or advance in companies</p>
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
                  <a href="https://www.nift.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">NIFT Official</div>
                      <div className="text-sm text-gray-600">National Institute of Fashion Technology</div>
                    </div>
                  </a>
                  <a href="https://www.fashiondesigncourse.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-pink-600 mr-3 group-hover:text-pink-800" />
                    <div>
                      <div className="font-medium text-gray-800">Fashion Design Courses</div>
                      <div className="text-sm text-gray-600">Online fashion design learning platform</div>
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
                      <span className="text-gray-700">Develop a unique design aesthetic and signature style</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with fashion trends and cultural influences</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with industry professionals and fashion media</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Understand sustainable fashion and ethical practices</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Learn business aspects of fashion industry</span>
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