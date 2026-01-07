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
  FaBrush,
  FaPlay,
  FaGamepad,
  FaFilm,
  FaMagic,
  FaCube,
  FaPencilAlt,
  FaLaptop,
  FaPrint,
  FaImage,
  FaFont,
  FaMousePointer,
  FaLayerGroup,
  FaCameraRetro,
  FaVectorSquare,
  FaShapes
} from 'react-icons/fa';

export default function GraphicDesignerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "10+2 or Bachelor's in Design/Arts" },
    { icon: FaBrush, title: "Creativity", detail: "Strong artistic and visual design sense" },
    { icon: FaDesktop, title: "Technical Skills", detail: "Proficiency in design software" },
    { icon: FaEye, title: "Visual Sense", detail: "Understanding of color, typography, layout" }
  ];

  const entrySchemes = [
    { 
      scheme: "Bachelor in Graphic Design", 
      duration: "3-4 years", 
      qualification: "10+2 any stream",
      age: "17-25 years",
      description: "Comprehensive degree in visual design and communication"
    },
    { 
      scheme: "Diploma in Graphic Design", 
      duration: "1-2 years", 
      qualification: "10+2 pass",
      age: "18-30 years",
      description: "Focused design skills and software training"
    },
    { 
      scheme: "Certificate Courses", 
      duration: "3-12 months", 
      qualification: "Basic computer knowledge",
      age: "16+ years",
      description: "Specialized software and technique training"
    },
    { 
      scheme: "Online Design Courses", 
      duration: "Self-paced", 
      qualification: "Interest in design",
      age: "Any age",
      description: "Flexible online learning from industry experts"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Graphic Designer", years: "0-2 years", salary: "₹12,000 - ₹25,000" },
    { rank: "Graphic Designer", years: "2-4 years", salary: "₹25,000 - ₹45,000" },
    { rank: "Senior Graphic Designer", years: "4-7 years", salary: "₹45,000 - ₹70,000" },
    { rank: "Lead Designer", years: "7-10 years", salary: "₹70,000 - ₹1,20,000" },
    { rank: "Design Manager", years: "10-12 years", salary: "₹1,20,000 - ₹2,00,000" },
    { rank: "Art Director", years: "12-15 years", salary: "₹2,00,000 - ₹3,50,000" },
    { rank: "Creative Director", years: "15+ years", salary: "₹3,50,000 - ₹5,00,000" },
    { rank: "Design Consultant", years: "12+ years", salary: "₹2,50,000 - ₹6,00,000" }
  ];

  const skillsRequired = [
    "Color theory and composition",
    "Typography and font selection",
    "Layout design principles",
    "Brand identity development",
    "Creative problem-solving abilities",
    "Attention to detail and precision",
    "Understanding of print and digital media",
    "Client communication skills"
  ];

  const trainingInstitutes = [
    { academy: "National Institute of Design", location: "Ahmedabad", type: "Premier Institute", duration: "4-5 years" },
    { academy: "Pearl Academy", location: "Multiple Cities", type: "Design School", duration: "3-4 years" },
    { academy: "MIT Institute of Design", location: "Pune", type: "Design Institute", duration: "4 years" },
    { academy: "Arena Animation", location: "Pan India", type: "Training Chain", duration: "6-18 months" },
    { academy: "MAAC", location: "Multiple Cities", type: "Professional Training", duration: "12-18 months" },
    { academy: "Frameboxx Animation", location: "Multiple Cities", type: "Creative Training", duration: "6-24 months" }
  ];

  const softwareTools = [
    "Adobe Photoshop",
    "Adobe Illustrator", 
    "Adobe InDesign",
    "CorelDRAW",
    "Figma",
    "Sketch",
    "Canva Pro",
    "Adobe After Effects"
  ];

  const industryDomains = [
    { domain: "Advertising & Marketing", role: "Brand campaigns, promotional materials, advertisements" },
    { domain: "Digital Media & Web", role: "Website design, social media graphics, UI elements" },
    { domain: "Print & Publishing", role: "Books, magazines, brochures, packaging design" },
    { domain: "Corporate Identity", role: "Logo design, brand guidelines, business materials" },
    { domain: "Entertainment & Gaming", role: "Movie posters, game graphics, merchandise design" },
    { domain: "Fashion & Lifestyle", role: "Fashion graphics, lifestyle branding, product catalogs" }
  ];

  const designSpecializations = [
    "Brand Identity Design",
    "Web & UI Design",
    "Print Design",
    "Package Design",
    "Logo Design",
    "Illustration",
    "Motion Graphics",
    "Environmental Design"
  ];

  const designTypes = [
    "Logo & Brand Identity",
    "Print Design (Brochures, Flyers)",
    "Web & Digital Graphics",
    "Social Media Design",
    "Packaging Design",
    "Poster & Advertisement Design",
    "Book & Magazine Layout",
    "Infographic Design"
  ];

  const softwareCategories = [
    { category: "Vector Graphics", tools: ["Adobe Illustrator", "CorelDRAW", "Inkscape"] },
    { category: "Photo Editing", tools: ["Adobe Photoshop", "GIMP", "Affinity Photo"] },
    { category: "Layout Design", tools: ["Adobe InDesign", "QuarkXPress", "Scribus"] },
    { category: "UI/UX Design", tools: ["Figma", "Sketch", "Adobe XD"] }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-orange-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-900 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPalette className="mx-auto text-6xl mb-6 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-pink-300"> Graphic Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to a creative career in graphic design, bringing visual stories to life through art and technology
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Graphic Designer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Graphic Designer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Graphic Designer is a creative professional who uses visual elements like typography, images, colors, and layouts to communicate messages and solve problems through design. They create visual content for print and digital media across various industries.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Graphic Designers work on everything from logos and branding to websites, advertisements, and packaging, combining artistic creativity with strategic thinking to create compelling visual communications.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Creating visual concepts and designs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Developing brand identities and logos
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Designing marketing materials and advertisements
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Collaborating with clients and creative teams
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-pink-500 mr-3" />
                    Managing multiple projects and deadlines
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
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-6 border border-indigo-100">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {softwareTools.map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softwareCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-purple-500 mr-2 flex-shrink-0" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaImage className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Design Types & Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {designTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Specializations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMagic className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Design Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {designSpecializations.map((specialization, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-3 flex-shrink-0" />
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
              <h2 className="text-3xl font-bold text-gray-800">Top Design Institutes</h2>
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
                  <p className="text-gray-600">Master color theory, typography, composition, and design principles</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Master Design Software</h3>
                  <p className="text-gray-600">Gain proficiency in Adobe Creative Suite and other design tools</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Design Portfolio</h3>
                  <p className="text-gray-600">Create diverse projects showcasing your design skills and creativity</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Gain Industry Experience</h3>
                  <p className="text-gray-600">Start with internships, freelance projects, or entry-level positions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Specialize & Advance</h3>
                  <p className="text-gray-600">Choose specialization area and advance to senior creative roles</p>
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
                  <a href="https://www.adobe.com/creativecloud/learn.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-red-600 mr-3 group-hover:text-red-800" />
                    <div>
                      <div className="font-medium text-gray-800">Adobe Creative Cloud</div>
                      <div className="text-sm text-gray-600">Official tutorials and design resources</div>
                    </div>
                  </a>
                  <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-purple-600 mr-3 group-hover:text-purple-800" />
                    <div>
                      <div className="font-medium text-gray-800">Dribbble</div>
                      <div className="text-sm text-gray-600">Design inspiration and community</div>
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
                      <span className="text-gray-700">Build a strong online portfolio website</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with design trends and technologies</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with other designers and creative professionals</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice daily and experiment with new techniques</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Understand client needs and business objectives</span>
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