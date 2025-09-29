import Link from 'next/link';
import React from 'react';
import { 
  FaCode, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaLaptopCode, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaTools,
  FaBrain,
  FaRocket
} from 'react-icons/fa';

export default function SoftwareEngineerPage() {
  const eligibilityData = [
    { icon: FaGraduationCap, title: "Education", detail: "Bachelor's in Computer Science/IT or related field" },
    { icon: FaCode, title: "Programming", detail: "Proficiency in at least 2-3 programming languages" },
    { icon: FaBrain, title: "Problem Solving", detail: "Strong analytical and logical thinking skills" },
    { icon: FaUsers, title: "Communication", detail: "Good verbal and written communication abilities" }
  ];

  const careerLevels = [
    { 
      phase: "Junior Developer", 
      duration: "0-2 years", 
      skills: "Basic programming, debugging, version control",
      salary: "₹3-8 LPA",
      nature: "Learning fundamentals, guided development"
    },
    { 
      phase: "Mid-Level Developer", 
      duration: "2-5 years", 
      skills: "Framework expertise, system design, testing",
      salary: "₹8-18 LPA",
      nature: "Independent development, mentoring juniors"
    },
    { 
      phase: "Senior Developer/Lead", 
      duration: "5-8 years", 
      skills: "Architecture, team leadership, code reviews",
      salary: "₹18-35 LPA",
      nature: "Technical leadership, project ownership"
    }
  ];

  const careerHierarchy = [
    { rank: "Junior Software Developer", years: "0-2 years", salary: "₹3-8 LPA" },
    { rank: "Software Developer", years: "2-4 years", salary: "₹8-15 LPA" },
    { rank: "Senior Software Developer", years: "4-7 years", salary: "₹15-25 LPA" },
    { rank: "Technical Lead", years: "6-10 years", salary: "₹25-40 LPA" },
    { rank: "Engineering Manager", years: "8-12 years", salary: "₹35-60 LPA" },
    { rank: "Principal Engineer/Director", years: "10+ years", salary: "₹50-1 Cr+" }
  ];

  const keySkills = [
    "Programming Languages (Java, Python, JavaScript)",
    "Data Structures & Algorithms", 
    "Database Management (SQL/NoSQL)",
    "Web Development (Frontend/Backend)",
    "Cloud Computing (AWS, Azure, GCP)",
    "DevOps & CI/CD",
    "Software Testing & QA",
    "System Design & Architecture"
  ];

  const learningPath = [
    { module: "Programming Fundamentals", duration: "3-6 months", focus: "Learn core programming concepts and at least one language" },
    { module: "Data Structures & Algorithms", duration: "4-6 months", focus: "Master problem-solving and coding interview preparation" },
    { module: "Web Development", duration: "6-8 months", focus: "Frontend and backend development skills" },
    { module: "Databases & Backend", duration: "3-4 months", focus: "Database design, APIs, and server-side development" },
    { module: "Advanced Topics", duration: "Ongoing", focus: "Cloud, DevOps, system design, and specialization areas" }
  ];

  const specializationAreas = [
    { area: "Frontend Development", tech: "React, Vue, Angular", demand: "High", salary: "₹6-30 LPA" },
    { area: "Backend Development", tech: "Node.js, Java, Python", demand: "Very High", salary: "₹8-35 LPA" },
    { area: "Full Stack Development", tech: "MEAN/MERN Stack", demand: "Very High", salary: "₹10-40 LPA" },
    { area: "Mobile Development", tech: "React Native, Flutter", demand: "High", salary: "₹8-32 LPA" },
    { area: "DevOps Engineering", tech: "Docker, Kubernetes, AWS", demand: "Very High", salary: "₹12-45 LPA" },
    { area: "Data Engineering", tech: "Spark, Kafka, Airflow", demand: "Very High", salary: "₹15-50 LPA" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaLaptopCode className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-blue-300"> Software Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to building a successful career in software development and technology innovation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Software Engineering Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is Software Engineering?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Software Engineering is the systematic approach to designing, developing, testing, and maintaining software applications and systems. It combines technical expertise with problem-solving skills to create digital solutions that power everything from mobile apps to enterprise systems.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Software engineers work across diverse industries including technology, finance, healthcare, e-commerce, and entertainment, building the digital infrastructure that drives modern business and innovation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Writing clean, efficient code
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Designing software architecture
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Testing and debugging applications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborating with cross-functional teams
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Maintaining and upgrading systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Qualifications */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Qualifications</h2>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Alternative Pathways</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className='text-black'>
                  <span className="font-medium">Bootcamps:</span> 3-6 months intensive training
                </div>
                <div className='text-black'>
                  <span className="font-medium">Self-taught:</span> Online courses & projects
                </div>
                <div className='text-black'>
                  <span className="font-medium">Certifications:</span> Industry-recognized credentials
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Development Stages */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development Stages</h2>
            </div>
            <div className="space-y-6">
              {careerLevels.map((level, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{level.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{level.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{level.skills}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{level.salary}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{level.nature}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Technical Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTools className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Technical Skills</h2>
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

        {/* Learning Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaRocket className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Recommended Learning Path</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A structured approach to learning software engineering, designed to take you from beginner to job-ready developer. Each phase builds upon the previous one, ensuring solid foundation and practical skills.
            </p>
            <div className="space-y-4">
              {learningPath.map((module, index) => (
                <div key={index} className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{module.module}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-teal-600 mr-2" />
                      <span className="text-gray-700 font-medium">{module.duration}</span>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700">{module.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaCode className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Specialization Areas & Market Demand</h2>
            </div>
            <div className="space-y-4">
              {specializationAreas.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{spec.area}</h3>
                    </div>
                    <div>
                      <span className="text-gray-700">{spec.tech}</span>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        spec.demand === 'Very High' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'
                      }`}>{spec.demand}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{spec.salary}</span>
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
                <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index === careerHierarchy.length - 1 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200'}`}>
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
                      {index === 0 && <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Entry Level</span>}
                      {index === careerHierarchy.length - 1 && <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Senior Leadership</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Getting Started Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Learn Programming Basics (Month 1-3)</h3>
                  <p className="text-gray-600">Choose a programming language and master fundamentals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Build Projects (Month 3-6)</h3>
                  <p className="text-gray-600">Create portfolio projects to demonstrate your skills</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Learn Data Structures & Algorithms (Month 4-8)</h3>
                  <p className="text-gray-600">Prepare for technical interviews and improve problem-solving</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Apply for Jobs (Month 6-12)</h3>
                  <p className="text-gray-600">Start applying for entry-level positions while continuing to learn</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Continuous Learning (Ongoing)</h3>
                  <p className="text-gray-600">Stay updated with new technologies and advance your career</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Learning Resources</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Online Learning Platforms</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <FaCode className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">FreeCodeCamp</div>
                      <div className="text-sm text-gray-600">Free comprehensive web development curriculum</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <FaGraduationCap className="text-green-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">Coursera & edX</div>
                      <div className="text-sm text-gray-600">University-level computer science courses</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <FaBrain className="text-purple-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">LeetCode & HackerRank</div>
                      <div className="text-sm text-gray-600">Coding practice and interview preparation</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Success Tips</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Focus on building real projects over tutorials</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Join developer communities and contribute to open source</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice coding problems daily</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a strong portfolio on GitHub</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with other developers and attend tech meetups</span>
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