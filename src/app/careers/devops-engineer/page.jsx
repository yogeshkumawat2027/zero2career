import Link from 'next/link';
import React from 'react';
import { 
  FaLaptopCode, 
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
  FaCogs,
  FaSearch,
  FaPalette,
  FaMobile,
  FaEnvelope,
  FaVideo,
  FaShareAlt,
  FaMousePointer,
  FaServer,
  FaCode,
  FaDatabase,
  FaNetworkWired
} from 'react-icons/fa';

export default function DevOpsEngineerPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in Computer Science/IT (preferred)" },
    { icon: FaLaptopCode, title: "Technical Skills", detail: "Programming knowledge and system administration" },
    { icon: FaCalendarAlt, title: "Age", detail: "No specific age limit - suitable for tech professionals" },
    { icon: FaUserTie, title: "Background", detail: "Software development or system administration experience" }
  ];

  const specializationAreas = [
    { 
      specialization: "Cloud Infrastructure (AWS/Azure/GCP)", 
      duration: "4-8 months", 
      requirement: "Cloud certification (AWS/Azure/GCP)",
      cost: "₹50,000-1,20,000",
      description: "Design and manage cloud-based infrastructure and services"
    },
    { 
      specialization: "Container Orchestration (Docker/Kubernetes)", 
      duration: "3-6 months", 
      requirement: "CKA/CKS certification",
      cost: "₹40,000-90,000",
      description: "Manage containerized applications and orchestration platforms"
    },
    { 
      specialization: "CI/CD Pipeline Engineering", 
      duration: "2-4 months", 
      requirement: "Jenkins/GitLab CI certification",
      cost: "₹25,000-60,000",
      description: "Build and maintain continuous integration/deployment pipelines"
    },
    { 
      specialization: "Infrastructure as Code (IaC)", 
      duration: "3-5 months", 
      requirement: "Terraform/Ansible certification",
      cost: "₹35,000-80,000",
      description: "Automate infrastructure provisioning and configuration management"
    },
    { 
      specialization: "Monitoring & Observability", 
      duration: "2-4 months", 
      requirement: "Prometheus/Grafana expertise",
      cost: "₹30,000-70,000",
      description: "Implement comprehensive monitoring and logging solutions"
    },
    { 
      specialization: "Security & Compliance (DevSecOps)", 
      duration: "4-6 months", 
      requirement: "Security certifications (CISSP/CEH)",
      cost: "₹60,000-1,50,000",
      description: "Integrate security practices into DevOps workflows"
    }
  ];

  const careerHierarchy = [
    { rank: "DevOps Intern/Trainee", years: "0-6 months", salary: "₹15,000-25,000/month" },
    { rank: "Junior DevOps Engineer", years: "6 months-2 years", salary: "₹25,000-50,000/month" },
    { rank: "DevOps Engineer", years: "2-4 years", salary: "₹50,000-1,00,000/month" },
    { rank: "Senior DevOps Engineer", years: "4-6 years", salary: "₹1,00,000-1,80,000/month" },
    { rank: "DevOps Team Lead/Manager", years: "6-10 years", salary: "₹1,80,000-3,00,000/month" },
    { rank: "DevOps Architect/Director", years: "10+ years", salary: "₹3,00,000-8,00,000/month" }
  ];

  const skillsRequired = [
    "Linux/Unix System Administration",
    "Cloud Platforms (AWS/Azure/GCP)",
    "Containerization (Docker/Kubernetes)",
    "CI/CD Tools (Jenkins/GitLab)",
    "Infrastructure as Code (Terraform/Ansible)",
    "Monitoring Tools (Prometheus/Grafana)",
    "Scripting Languages (Python/Bash/PowerShell)",
    "Version Control (Git/GitHub/GitLab)"
  ];

  const topInstitutes = [
    { school: "Linux Academy/A Cloud Guru", location: "Online", type: "E-learning Platform", duration: "3-12 months" },
    { school: "AWS Training", location: "Multiple Cities", type: "Official Training", duration: "2-6 months" },
    { school: "Simplilearn DevOps", location: "Online", type: "Certification Program", duration: "4-8 months" },
    { school: "Edureka DevOps", location: "Online", type: "Training Institute", duration: "6-8 months" },
    { school: "Red Hat Training", location: "Pan India", type: "Official Training", duration: "1-4 months" },
    { school: "Docker Training", location: "Online/Offline", type: "Official Training", duration: "1-3 months" }
  ];

  const toolsAndPlatforms = [
    "AWS/Azure/GCP",
    "Docker & Kubernetes", 
    "Jenkins/GitLab CI",
    "Terraform/Ansible",
    "Prometheus/Grafana",
    "Git/GitHub/GitLab",
    "Linux/Windows Server",
    "Python/Bash/PowerShell"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaCogs className="mx-auto text-6xl mb-6 text-cyan-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-cyan-300"> DevOps Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering DevOps practices and building a successful career in modern software delivery
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is DevOps Engineering Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is DevOps Engineering?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  DevOps Engineering is the practice of combining software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery with high software quality. DevOps engineers bridge the gap between development and operations teams.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  DevOps engineers automate and streamline processes, manage infrastructure, implement CI/CD pipelines, and ensure reliable, scalable, and secure software deployment and operations across various environments.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Design and maintain CI/CD pipelines
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Manage cloud infrastructure and services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Automate deployment and monitoring processes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Implement security and compliance measures
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Optimize system performance and reliability
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Ideal Candidate Profile</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Problem-Solving Skills:</span> Strong analytical and troubleshooting abilities
                </div>
                <div className="text-black">
                  <span className="font-medium">Automation Mindset:</span> Passion for automating repetitive tasks
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">DevOps Specializations</h2>
            </div>
            <div className="space-y-6">
              {specializationAreas.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{spec.specialization}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-2" />
                      <span className="text-gray-700">{spec.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{spec.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-700">{spec.cost}</span>
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

        {/* Essential Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaLaptopCode className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Tools</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Skills Required</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {skillsRequired.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-800 font-medium text-sm">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Tools & Platforms</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {toolsAndPlatforms.map((tool, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <FaMousePointer className="text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-800 font-medium text-sm">{tool}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Training Institutes */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top DevOps Training Institutes</h2>
            </div>
            <div className="space-y-4">
              {topInstitutes.map((institute, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{institute.school}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-teal-600 mr-2" />
                      <span className="text-gray-700">{institute.location}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${institute.type === 'Official Training' ? 'bg-green-200 text-green-800' : institute.type === 'E-learning Platform' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
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
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary Structure</h2>
            </div>
            <div className="space-y-4">
              {careerHierarchy.map((position, index) => (
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
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

        {/* Learning Process Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Learning Process Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Foundation & Prerequisites</h3>
                  <p className="text-gray-600">Learn Linux fundamentals, networking basics, and programming concepts (Python/Bash)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Core DevOps Tools</h3>
                  <p className="text-gray-600">Master version control (Git), CI/CD tools (Jenkins), and containerization (Docker)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Cloud & Infrastructure</h3>
                  <p className="text-gray-600">Learn cloud platforms (AWS/Azure), Infrastructure as Code (Terraform), and orchestration (Kubernetes)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Monitoring & Security</h3>
                  <p className="text-gray-600">Implement monitoring solutions (Prometheus/Grafana) and learn DevSecOps practices</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Real-world Projects & Certification</h3>
                  <p className="text-gray-600">Build end-to-end projects, obtain certifications, and apply for DevOps positions</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Popular Certifications</h3>
                <div className="space-y-3">
                  <a href="https://aws.amazon.com/certification/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-orange-600 mr-3 group-hover:text-orange-800" />
                    <div>
                      <div className="font-medium text-gray-800">AWS Certifications</div>
                      <div className="text-sm text-gray-600">Solutions Architect, DevOps Engineer, SysOps Administrator</div>
                    </div>
                  </a>
                  <a href="https://learn.microsoft.com/en-us/certifications/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">Microsoft Azure Certifications</div>
                      <div className="text-sm text-gray-600">Azure DevOps Engineer, Azure Administrator, Azure Architect</div>
                    </div>
                  </a>
                  <a href="https://cloud.google.com/certification" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Google Cloud Certifications</div>
                      <div className="text-sm text-gray-600">Professional Cloud DevOps Engineer, Cloud Engineer</div>
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
                      <span className="text-gray-700">Build a strong GitHub portfolio with DevOps projects</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice with real-world scenarios and automation</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with latest DevOps tools and practices</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Join DevOps communities and contribute to open source</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop both technical and communication skills</span>
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
