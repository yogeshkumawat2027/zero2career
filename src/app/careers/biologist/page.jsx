import Link from 'next/link';
import React from 'react';
import { 
  FaMicroscope, 
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
  FaLeaf,
  FaEye,
  FaHeart,
  FaUserTie,
  FaFlask,
  FaDna,
  FaTree,
  FaBug
} from 'react-icons/fa';

export default function BiologistPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "Bachelor's in Biology/Life Sciences (minimum 55%)" },
    { icon: FaGraduationCap, title: "Higher Studies", detail: "Master's/PhD for research positions" },
    { icon: FaCalendarAlt, title: "Age Requirement", detail: "18+ years (varies by specialization)" },
    { icon: FaFlask, title: "Skills", detail: "Strong analytical and research abilities" }
  ];

  const specializationTypes = [
    { 
      specialization: "Marine Biologist", 
      duration: "4-6 years", 
      requirement: "BSc + MSc in Marine Biology",
      salary: "₹3-8 lakhs/year",
      description: "Study ocean life and marine ecosystems"
    },
    { 
      specialization: "Wildlife Biologist", 
      duration: "4-6 years", 
      requirement: "BSc + MSc in Zoology/Wildlife Biology",
      salary: "₹4-10 lakhs/year",
      description: "Research and conserve wildlife populations"
    },
    { 
      specialization: "Molecular Biologist", 
      duration: "6-8 years", 
      requirement: "BSc + MSc/PhD in Molecular Biology",
      salary: "₹6-15 lakhs/year",
      description: "Study biological processes at molecular level"
    },
    { 
      specialization: "Environmental Biologist", 
      duration: "4-6 years", 
      requirement: "BSc + MSc in Environmental Science",
      salary: "₹5-12 lakhs/year",
      description: "Study environmental impact on living organisms"
    },
    { 
      specialization: "Biotechnologist", 
      duration: "4-6 years", 
      requirement: "BSc + MSc in Biotechnology",
      salary: "₹7-20 lakhs/year",
      description: "Apply biological processes to technology"
    },
    { 
      specialization: "Microbiologist", 
      duration: "4-6 years", 
      requirement: "BSc + MSc in Microbiology",
      salary: "₹4-12 lakhs/year",
      description: "Study microscopic organisms and their effects"
    }
  ];

  const careerHierarchy = [
    { rank: "Research Assistant", years: "0-2 years", salary: "₹2-4 lakhs/year" },
    { rank: "Junior Biologist", years: "2-5 years", salary: "₹4-8 lakhs/year" },
    { rank: "Biologist", years: "5-8 years", salary: "₹8-15 lakhs/year" },
    { rank: "Senior Biologist", years: "8-12 years", salary: "₹15-25 lakhs/year" },
    { rank: "Principal Scientist", years: "12-18 years", salary: "₹25-40 lakhs/year" },
    { rank: "Research Director/Chief Scientist", years: "18+ years", salary: "₹40-60 lakhs/year" }
  ];

  const skillRequirements = [
    "Strong foundation in life sciences",
    "Research methodology and data analysis",
    "Laboratory techniques and equipment handling",
    "Scientific writing and documentation",
    "Statistical analysis and interpretation",
    "Computer skills (bioinformatics tools)",
    "Field work and sample collection",
    "Critical thinking and problem-solving"
  ];

  const topInstitutions = [
    { institution: "Indian Institute of Science (IISc)", location: "Bangalore", type: "Premier Institute", programs: "All Biology specializations" },
    { institution: "Jawaharlal Nehru University", location: "New Delhi", type: "Central University", programs: "Life Sciences, Biotechnology" },
    { institution: "University of Delhi", location: "New Delhi", type: "Central University", programs: "Biology, Zoology, Botany" },
    { institution: "Indian Agricultural Research Institute", location: "New Delhi", type: "Research Institute", programs: "Agricultural Biology" },
    { institution: "National Centre for Biological Sciences", location: "Bangalore", type: "Research Center", programs: "Biological Sciences" },
    { institution: "Banaras Hindu University", location: "Varanasi", type: "Central University", programs: "Life Sciences, Biotechnology" }
  ];

  const subjectAreas = [
    "Cell Biology",
    "Genetics & Molecular Biology", 
    "Ecology & Evolution",
    "Biochemistry",
    "Microbiology",
    "Botany",
    "Zoology",
    "Bioinformatics",
    "Immunology",
    "Physiology",
    "Environmental Biology",
    "Marine Biology"
  ];

  const workEnvironments = [
    { environment: "Research Laboratories", description: "Conduct experiments and analyze samples" },
    { environment: "Universities & Colleges", description: "Teaching and academic research" },
    { environment: "Pharmaceutical Companies", description: "Drug development and testing" },
    { environment: "Government Agencies", description: "Wildlife conservation and environmental protection" },
    { environment: "Biotechnology Firms", description: "Product development and innovation" },
    { environment: "Field Locations", description: "Data collection and environmental studies" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaMicroscope className="mx-auto text-6xl mb-6 text-green-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-green-300"> Professional Biologist</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to exploring life sciences and building a rewarding career in biological research and conservation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is a Biologist Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Biologist?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Biologist is a scientist who studies living organisms and their interactions with the environment. They conduct research to understand life processes, from molecular mechanisms to entire ecosystems, contributing to medical breakthroughs, conservation efforts, and biotechnological innovations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Biologists work across diverse fields including healthcare, environmental conservation, agriculture, pharmaceuticals, and biotechnology, making crucial discoveries that benefit society and our understanding of life itself.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Design and conduct scientific experiments
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collect and analyze biological data
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Write research papers and reports
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Present findings to scientific community
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborate with interdisciplinary teams
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
              <FaClipboardCheck className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
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
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Subject Requirements (12th)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Mandatory:</span> Biology, Chemistry, Physics
                </div>
                <div className="text-black">
                  <span className="font-medium">Recommended:</span> Mathematics, English
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaDna className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Biology Specializations & Career Paths</h2>
            </div>
            <div className="space-y-6">
              {specializationTypes.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{spec.specialization}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{spec.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{spec.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{spec.salary}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{spec.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaFlask className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Requirements</h2>
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
              <FaBookOpen className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjectAreas.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaLeaf className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
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
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Biology Institutions in India</h2>
            </div>
            <div className="space-y-4">
              {topInstitutions.map((institution, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{institution.institution}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institution.location}</span>
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-200 text-teal-800">
                        {institution.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{institution.programs}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Environments */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTree className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Work Environments</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workEnvironments.map((work, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{work.environment}</h3>
                  <p className="text-gray-600">{work.description}</p>
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

        {/* Education Process Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Education Process Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Bachelor's Degree (3-4 years)</h3>
                  <p className="text-gray-600">Complete BSc in Biology, Biotechnology, or related life science field</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Master's Degree (2 years)</h3>
                  <p className="text-gray-600">Specialize in chosen field like Marine Biology, Molecular Biology, etc.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Research Experience</h3>
                  <p className="text-gray-600">Gain hands-on experience through internships and research projects</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">PhD (Optional - 3-5 years)</h3>
                  <p className="text-gray-600">Pursue doctorate for advanced research and academic positions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Career Development</h3>
                  <p className="text-gray-600">Build professional network and apply for positions in chosen specialization</p>
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
                <h3 className="text-xl font-semibold text-gray-800">Professional Organizations</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <FaFlask className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Indian National Science Academy</div>
                      <div className="text-sm text-gray-600">Premier scientific organization in India</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <FaBug className="text-green-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Association of Microbiologists of India</div>
                      <div className="text-sm text-gray-600">Professional body for microbiologists</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Career Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong laboratory and field research skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Learn bioinformatics and data analysis tools</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build networks with researchers and professionals</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest scientific discoveries</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Consider interdisciplinary specializations</span>
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