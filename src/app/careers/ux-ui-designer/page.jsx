import Link from 'next/link';
import React from 'react';
import {
  FaPencilAlt,
  FaGraduationCap,
  FaCalendarAlt,
  FaClipboardCheck,
  FaBookOpen,
  FaTrophy,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUsers,
  FaHeart,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaEye,
  FaUserTie
} from 'react-icons/fa';

export const metadata = {
  title: "UX/UI Designer Career Guide 2025 | Complete Design Training, Portfolio & Salary | Zero2Career",
  description: "Comprehensive UX/UI designer career guide covering design principles, tools like Figma & Adobe XD, portfolio building, salary expectations, and complete roadmap for design careers in India.",
  keywords: "UX UI designer career, user experience design, user interface design, Figma design, Adobe XD, design jobs India, UI UX salary, design portfolio, web design career",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/ux-ui-designer"
  },
  openGraph: {
    title: "Become a UX/UI Designer - Complete Design Career Guide 2025",
    description: "Discover everything about UX/UI design career: design principles, tools, portfolio building, salary expectations, and design career opportunities in India.",
    url: "https://zero2career.in/careers/ux-ui-designer",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "UX/UI Designer Career Guide - Zero2Career"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a UX/UI Designer - Complete Design Career Guide 2025",
    description: "Comprehensive guide to UX/UI design career: design tools, portfolio building, salary expectations & design opportunities in India.",
    images: ["https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=1200&h=630&fit=crop"],
  }
};

export default function UxUiDesignerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Background", detail: "No specific nationality requirements, strong portfolio matters most" },
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in Design, HCI, Fine Arts, or related field preferred" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "No age restrictions, creativity and skill are key" },
    { icon: FaEye, title: "Visual Acuity", detail: "Good color vision and attention to detail" }
  ];

  const programTypes = [
    { 
      license: "Diploma in UI/UX Design", 
      duration: "6-12 months", 
      requirement: "Portfolio-based admission",
      cost: "₹50k-2 lakhs",
      description: "Short-term, skill-focused design programs"
    },
    { 
      license: "Bachelor's in Design (B.Des)", 
      duration: "3-4 years", 
      requirement: "12th with any stream",
      cost: "₹2-8 lakhs/year",
      description: "Comprehensive undergraduate design education"
    },
    { 
      license: "Master's in Design (M.Des)", 
      duration: "2 years", 
      requirement: "B.Des or equivalent",
      cost: "₹2-6 lakhs/year",
      description: "Advanced specialization in design and research"
    },
    { 
      license: "Certification Courses", 
      duration: "1-6 months", 
      requirement: "Open to all",
      cost: "₹10k-1 lakh",
      description: "Online or offline, focused on specific tools/skills"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Designer", years: "0-2 years", salary: "₹3-6 lakhs/year" },
    { rank: "UI/UX Designer", years: "2-5 years", salary: "₹6-12 lakhs/year" },
    { rank: "Senior Designer", years: "5-8 years", salary: "₹12-20 lakhs/year" },
    { rank: "Lead Designer", years: "8-12 years", salary: "₹20-35 lakhs/year" },
    { rank: "Design Manager", years: "12-18 years", salary: "₹35-60 lakhs/year" },
    { rank: "Head of Design/Director", years: "18+ years", salary: "₹60 lakhs-1.2 Cr/year" }
  ];

  const keySkills = [
    "User Research & Empathy Mapping",
    "Wireframing & Prototyping",
    "Visual Design & Typography",
    "Interaction Design",
    "Usability Testing",
    "Design Systems",
    "Information Architecture",
    "Accessibility & Inclusive Design",
    "Design Thinking",
    "Collaboration & Communication"
  ];

  const topInstitutes = [
    { school: "NID Ahmedabad", location: "Ahmedabad", type: "Government", duration: "4 years" },
    { school: "IDC IIT Bombay", location: "Mumbai", type: "Government", duration: "4 years" },
    { school: "NIFT Delhi", location: "Delhi", type: "Government", duration: "4 years" },
    { school: "Srishti Institute", location: "Bangalore", type: "Private", duration: "4 years" },
    { school: "MIT Institute of Design", location: "Pune", type: "Private", duration: "4 years" },
    { school: "Pearl Academy", location: "Delhi/Mumbai", type: "Private", duration: "3-4 years" }
  ];

  const subjectAreas = [
    "Design Principles",
    "User Psychology",
    "Color Theory",
    "Typography",
    "Interaction Design",
    "Prototyping Tools",
    "Usability Testing",
    "Information Architecture",
    "Accessibility",
    "Design Systems"
  ];

  const processTimeline = [
    { step: "Portfolio Preparation", desc: "Build a strong portfolio with diverse design projects" },
    { step: "Entrance Exam/Interview", desc: "Qualify for top institutes via entrance tests or interviews" },
    { step: "Design Education", desc: "Complete degree/diploma/certification in design" },
    { step: "Internships", desc: "Gain practical experience through internships" },
    { step: "Full-time Role", desc: "Join as a designer in a company or agency" }
  ];

  const resources = [
    { name: "Interaction Design Foundation", url: "https://www.interaction-design.org/", desc: "Comprehensive UX/UI learning platform" },
    { name: "Nielsen Norman Group", url: "https://www.nngroup.com/", desc: "Leading authority on usability and UX research" },
    { name: "Adobe XD Ideas", url: "https://xd.adobe.com/ideas/", desc: "Design inspiration and best practices" },
    { name: "UX Collective", url: "https://uxdesign.cc/", desc: "Popular UX design publication" }
  ];

  const careerTips = [
    "Build a diverse portfolio with real-world projects",
    "Master both UX (research, testing) and UI (visual design) skills",
    "Stay updated with latest design tools and trends",
    "Network with designers and join design communities",
    "Focus on accessibility and inclusive design"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPencilAlt className="mx-auto text-6xl mb-6 text-pink-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a
              <span className="text-pink-300"> UI/UX Designer</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Your roadmap to a creative and impactful career in user experience and interface design
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* What is UI/UX Designer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a UI/UX Designer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A UI/UX Designer crafts digital experiences that are both visually appealing and user-friendly. They blend creativity, psychology, and technology to design interfaces that solve real user problems and delight audiences across web, mobile, and software platforms.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  UI/UX Designers work in tech, e-commerce, finance, healthcare, and more, collaborating with developers, product managers, and stakeholders to create seamless, accessible, and engaging digital products.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    User research and persona creation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Wireframing and prototyping
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Visual and interaction design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Usability testing and iteration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaboration with cross-functional teams
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Portfolio:</span> Strong portfolio of design projects
                </div>
                <div className="text-black">
                  <span className="font-medium">Design Tools:</span> Proficiency in Figma, Adobe XD, Sketch, etc.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Design Education & Training</h2>
            </div>
            <div className="space-y-6">
              {programTypes.map((program, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{program.license}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{program.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{program.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{program.cost}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{program.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Core UI/UX Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Top Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Design Institutes in India</h2>
            </div>
            <div className="space-y-4">
              {topInstitutes.map((school, index) => (
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
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-pink-50 border-indigo-200'}`}>
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

        {/* Selection Process Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Roadmap Timeline</h2>
            </div>
            <div className="space-y-6">
              {processTimeline.map((step, idx) => (
                <div key={idx} className="flex items-start">
                  <div className={`bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1`}>{idx+1}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{step.step}</h3>
                    <p className="text-gray-600">{step.desc}</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Links</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Learning Platforms</h3>
                <div className="space-y-3">
                  {resources.map((res, idx) => (
                    <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-indigo-50 rounded-lg border border-pink-200 hover:shadow-md transition-shadow group">
                      <FaExternalLinkAlt className="text-pink-600 mr-3 group-hover:text-pink-800" />
                      <div>
                        <div className="font-medium text-gray-800">{res.name}</div>
                        <div className="text-sm text-gray-600">{res.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    {careerTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
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
