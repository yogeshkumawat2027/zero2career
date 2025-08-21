import Link from 'next/link';
import React from 'react';
import { 
  FaCloud, 
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
  FaServer,
  FaEye,
  FaHeart,
  FaUserTie,
  FaCode,
  FaDatabase,
  FaLock,
  FaCog,
  FaNetworkWired,
  FaRocket,
  FaAws
} from 'react-icons/fa';

export default function CloudEngineerPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Education", detail: "BTech/BCA/MCA in Computer Science or related field" },
    { icon: FaGraduationCap, title: "Skills Required", detail: "Programming, networking, and system administration" },
    { icon: FaCalendarAlt, title: "Experience", detail: "0-2 years for entry-level positions" },
    { icon: FaCode, title: "Technical Skills", detail: "Linux, scripting, and cloud platforms knowledge" }
  ];

  const specializationTypes = [
    { 
      specialization: "Cloud Solutions Architect", 
      duration: "3-5 years experience", 
      requirement: "AWS/Azure/GCP certifications",
      salary: "₹15-35 lakhs/year",
      description: "Design scalable cloud infrastructure and solutions"
    },
    { 
      specialization: "DevOps Engineer", 
      duration: "2-4 years experience", 
      requirement: "CI/CD, containerization skills",
      salary: "₹8-25 lakhs/year",
      description: "Automate deployment and manage infrastructure as code"
    },
    { 
      specialization: "Cloud Security Engineer", 
      duration: "3-6 years experience", 
      requirement: "Security certifications + cloud knowledge",
      salary: "₹12-30 lakhs/year",
      description: "Secure cloud environments and implement compliance"
    },
    { 
      specialization: "Site Reliability Engineer (SRE)", 
      duration: "3-5 years experience", 
      requirement: "Strong programming and system skills",
      salary: "₹15-40 lakhs/year",
      description: "Ensure system reliability and performance at scale"
    },
    { 
      specialization: "Cloud Data Engineer", 
      duration: "2-4 years experience", 
      requirement: "Big data tools + cloud platforms",
      salary: "₹10-28 lakhs/year",
      description: "Build and manage data pipelines in cloud environments"
    },
    { 
      specialization: "Kubernetes Engineer", 
      duration: "2-5 years experience", 
      requirement: "Container orchestration expertise",
      salary: "₹12-32 lakhs/year",
      description: "Manage containerized applications and microservices"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Cloud Engineer", years: "0-2 years", salary: "₹4-8 lakhs/year" },
    { rank: "Cloud Engineer", years: "2-4 years", salary: "₹8-15 lakhs/year" },
    { rank: "Senior Cloud Engineer", years: "4-7 years", salary: "₹15-25 lakhs/year" },
    { rank: "Lead Cloud Engineer", years: "7-10 years", salary: "₹25-40 lakhs/year" },
    { rank: "Cloud Architect", years: "10-15 years", salary: "₹40-60 lakhs/year" },
    { rank: "Principal Engineer/CTO", years: "15+ years", salary: "₹60-100+ lakhs/year" }
  ];

  const skillRequirements = [
    "Cloud platforms (AWS, Azure, Google Cloud)",
    "Linux/Unix system administration",
    "Programming languages (Python, Go, Java)",
    "Infrastructure as Code (Terraform, CloudFormation)",
    "Containerization (Docker, Kubernetes)",
    "CI/CD pipelines and automation",
    "Networking and security fundamentals",
    "Monitoring and logging tools"
  ];

  const cloudPlatforms = [
    { platform: "Amazon Web Services (AWS)", market: "32% global market share", certs: "AWS Certified Solutions Architect", entry: "₹6-12 lakhs/year" },
    { platform: "Microsoft Azure", market: "23% global market share", certs: "Azure Fundamentals, Azure Administrator", entry: "₹5-10 lakhs/year" },
    { platform: "Google Cloud Platform (GCP)", market: "10% global market share", certs: "Google Cloud Associate Engineer", entry: "₹6-11 lakhs/year" },
    { platform: "IBM Cloud", market: "4% global market share", certs: "IBM Cloud Certified", entry: "₹5-9 lakhs/year" },
    { platform: "Oracle Cloud", market: "2% global market share", certs: "Oracle Cloud Infrastructure", entry: "₹6-10 lakhs/year" },
    { platform: "Alibaba Cloud", market: "5% global market share", certs: "Alibaba Cloud Certified", entry: "₹5-8 lakhs/year" }
  ];

  const subjectAreas = [
    "Cloud Computing Fundamentals",
    "Infrastructure as a Service (IaaS)", 
    "Platform as a Service (PaaS)",
    "Software as a Service (SaaS)",
    "Microservices Architecture",
    "Container Orchestration",
    "Cloud Security",
    "DevOps and CI/CD",
    "Serverless Computing",
    "Cloud Networking",
    "Cost Optimization",
    "Disaster Recovery"
  ];

  const topCompanies = [
    { company: "Amazon", location: "Bangalore/Hyderabad", type: "Product Company", focus: "AWS Services" },
    { company: "Microsoft", location: "Bangalore/Hyderabad", type: "Product Company", focus: "Azure Platform" },
    { company: "Google", location: "Bangalore/Mumbai", type: "Product Company", focus: "Google Cloud Platform" },
    { company: "Accenture", location: "Multiple Cities", type: "Service Company", focus: "Cloud Consulting" },
    { company: "TCS", location: "Multiple Cities", type: "Service Company", focus: "Cloud Migration Services" },
    { company: "Infosys", location: "Bangalore/Pune", type: "Service Company", focus: "Cloud Transformation" }
  ];

  const certifications = [
    { cert: "AWS Certified Solutions Architect", level: "Associate", validity: "3 years", cost: "$150" },
    { cert: "Microsoft Azure Fundamentals", level: "Foundational", validity: "Lifetime", cost: "$99" },
    { cert: "Google Cloud Associate Engineer", level: "Associate", validity: "2 years", cost: "$125" },
    { cert: "Certified Kubernetes Administrator", level: "Professional", validity: "3 years", cost: "$375" },
    { cert: "AWS Certified DevOps Engineer", level: "Professional", validity: "3 years", cost: "$300" },
    { cert: "Azure DevOps Engineer Expert", level: "Expert", validity: "2 years", cost: "$165" }
  ];

  const learningPath = [
    { phase: "Foundation", duration: "2-3 months", topics: "Networking, Linux, Programming basics" },
    { phase: "Cloud Fundamentals", duration: "3-4 months", topics: "Choose primary cloud platform, basic services" },
    { phase: "Hands-on Projects", duration: "4-6 months", topics: "Build real projects, deploy applications" },
    { phase: "Specialization", duration: "6-12 months", topics: "DevOps, Security, Data Engineering, or Architecture" },
    { phase: "Certification", duration: "1-2 months", topics: "Prepare for and pass relevant certifications" },
    { phase: "Professional Experience", duration: "Ongoing", topics: "Apply skills in real-world projects" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCloud className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-blue-300"> Cloud Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering cloud technologies and building scalable, secure infrastructure in the digital era
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Cloud Engineer Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Cloud Engineer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Cloud Engineer is a technology professional who designs, implements, and manages cloud-based infrastructure and services. They work with platforms like AWS, Azure, and Google Cloud to build scalable, reliable, and cost-effective solutions that enable businesses to operate efficiently in the digital age.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cloud Engineers are at the forefront of digital transformation, helping organizations migrate from traditional on-premises infrastructure to flexible, scalable cloud environments that can adapt to changing business needs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Design and deploy cloud infrastructure
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Automate deployment and scaling processes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Monitor system performance and reliability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Implement security and compliance measures
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-500 mr-3" />
                    Optimize costs and resource utilization
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
              <h2 className="text-3xl font-bold text-gray-800">Getting Started Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Career Transition Friendly</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">From IT:</span> System Admins, Network Engineers
                </div>
                <div className="text-black">
                  <span className="font-medium">From Development:</span> Software Engineers, DevOps Engineers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRocket className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Cloud Engineering Specializations</h2>
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

        {/* Cloud Platforms */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaServer className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Major Cloud Platforms</h2>
            </div>
            <div className="space-y-4">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{platform.platform}</h3>
                    </div>
                    <div>
                      <span className="text-gray-700">{platform.market}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{platform.certs}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{platform.entry}</span>
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
              <FaCog className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technical Skills</h2>
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

        {/* Learning Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Cloud Engineer Learning Path</h2>
            </div>
            <div className="space-y-6">
              {learningPath.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="flex items-center">
                      <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-yellow-600 mr-2" />
                      <span className="text-gray-700">{phase.duration}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-600">{phase.topics}</span>
                    </div>
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
              <FaBookOpen className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Key Study Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjectAreas.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCloud className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Companies */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Companies Hiring Cloud Engineers</h2>
            </div>
            <div className="space-y-4">
              {topCompanies.map((company, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{company.company}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{company.location}</span>
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-teal-200 text-teal-800">
                        {company.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{company.focus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaShieldAlt className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Popular Cloud Certifications</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{cert.cert}</h3>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        cert.level === 'Professional' ? 'bg-purple-200 text-purple-800' :
                        cert.level === 'Expert' ? 'bg-red-200 text-red-800' :
                        'bg-green-200 text-green-800'
                      }`}>
                        {cert.level}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-orange-600 mr-2" />
                      <span className="text-gray-700">{cert.validity}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium">{cert.cost}</span>
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
              <FaChartLine className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200' : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'}`}>
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
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

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Career Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Learning Resources</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <FaCloud className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">AWS Free Tier</div>
                      <div className="text-sm text-gray-600">Hands-on practice with AWS services</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <FaDatabase className="text-green-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Kubernetes Documentation</div>
                      <div className="text-sm text-gray-600">Official K8s learning resources</div>
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
                      <span className="text-gray-700">Build projects and maintain a GitHub portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Get hands-on experience with multiple cloud platforms</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Focus on automation and Infrastructure as Code</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with cloud security best practices</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Join cloud communities and attend meetups</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-colors shadow-lg">
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