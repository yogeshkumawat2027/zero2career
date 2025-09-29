import Link from 'next/link';
import React from 'react';
import { 
  FaUtensils, 
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
  FaFire,
  FaEye,
  FaHeart,
  FaUserTie,
  FaCertificate,
  FaAward,
  FaHotel
} from 'react-icons/fa';

export default function ChefPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Age", detail: "18+ years for professional culinary programs" },
    { icon: FaGraduationCap, title: "Education", detail: "10+2 (any stream) for diploma courses" },
    { icon: FaFire, title: "Passion", detail: "Love for cooking and food innovation" },
    { icon: FaEye, title: "Skills", detail: "Creativity, attention to detail, stamina" }
  ];

  const courseTypes = [
    { 
      course: "Certificate in Food Production", 
      duration: "6 months", 
      requirement: "10th pass",
      cost: "₹50,000-1 lakh",
      description: "Basic culinary skills and kitchen fundamentals"
    },
    { 
      course: "Diploma in Culinary Arts", 
      duration: "1-2 years", 
      requirement: "12th pass",
      cost: "₹2-5 lakhs",
      description: "Comprehensive culinary training program"
    },
    { 
      course: "Bachelor in Hotel Management & Catering", 
      duration: "3-4 years", 
      requirement: "12th pass (50%)",
      cost: "₹3-8 lakhs",
      description: "Complete hospitality and culinary education"
    },
    { 
      course: "Advanced Culinary Arts Program", 
      duration: "6 months-1 year", 
      requirement: "Basic culinary experience",
      cost: "₹5-12 lakhs",
      description: "Specialized training in international cuisines"
    }
  ];

  const careerHierarchy = [
    { rank: "Trainee Chef/Commis", years: "0-1 year", salary: "₹15,000-25,000/month" },
    { rank: "Demi Chef de Partie", years: "1-2 years", salary: "₹25,000-40,000/month" },
    { rank: "Chef de Partie", years: "2-4 years", salary: "₹40,000-60,000/month" },
    { rank: "Sous Chef", years: "4-8 years", salary: "₹60,000-1.2 lakhs/month" },
    { rank: "Head Chef/Executive Chef", years: "8-15 years", salary: "₹1.2-3 lakhs/month" },
    { rank: "Culinary Director/Celebrity Chef", years: "15+ years", salary: "₹3-10+ lakhs/month" }
  ];

  const skillsRequired = [
    "Knife skills and food preparation techniques",
    "Understanding of flavors and seasoning",
    "Food safety and hygiene standards",
    "Time management under pressure",
    "Leadership and team coordination",
    "Menu planning and cost control",
    "International cuisine knowledge",
    "Food presentation and plating"
  ];

  const topCulinarySchools = [
    { school: "Institute of Hotel Management (IHM)", location: "Multiple cities", type: "Government", duration: "3-4 years" },
    { school: "Welcomgroup Graduate School of Hotel Administration", location: "Manipal", type: "Private", duration: "4 years" },
    { school: "Academy of Culinary Education", location: "Mumbai", type: "Private", duration: "1-2 years" },
    { school: "International Institute of Culinary Arts", location: "Delhi, Mumbai", type: "Private", duration: "6 months-2 years" },
    { school: "Culinary Academy of India", location: "Hyderabad", type: "Private", duration: "1-2 years" },
    { school: "JRE School of Culinary Arts", location: "Multiple cities", type: "Private", duration: "1 year" }
  ];

  const specializationAreas = [
    "Continental Cuisine",
    "Indian Regional Cuisines", 
    "Asian Cuisine (Chinese, Thai, Japanese)",
    "Bakery & Confectionery",
    "Pastry & Desserts",
    "Mediterranean Cuisine",
    "Molecular Gastronomy",
    "Vegan & Health Food"
  ];

  const workEnvironments = [
    { type: "5-Star Hotels", description: "Luxury hospitality with high standards", salary: "₹40,000-2 lakhs/month" },
    { type: "Fine Dining Restaurants", description: "Gourmet cuisine and presentation", salary: "₹35,000-1.5 lakhs/month" },
    { type: "Cruise Ships", description: "International exposure with travel", salary: "₹60,000-1.8 lakhs/month" },
    { type: "Catering Companies", description: "Large-scale event catering", salary: "₹25,000-80,000/month" },
    { type: "Restaurant Chains", description: "Standardized menu execution", salary: "₹30,000-1 lakh/month" },
    { type: "Food TV/Media", description: "Celebrity chef and content creation", salary: "₹1-10+ lakhs/month" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaUtensils className="mx-auto text-6xl mb-6 text-orange-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-orange-300"> Professional Chef</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to mastering culinary arts and building a successful career in the food industry
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is a Professional Chef Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Professional Chef?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Professional Chef is a trained culinary expert who creates, prepares, and presents food in commercial kitchens. They combine creativity with technical skills to deliver exceptional dining experiences in hotels, restaurants, catering companies, and other food establishments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Professional chefs must master various cooking techniques, understand nutrition and food safety, manage kitchen operations, and often lead culinary teams to deliver consistent, high-quality meals.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Menu planning and recipe development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Food preparation and cooking
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Kitchen management and staff supervision
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Quality control and presentation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Food safety and hygiene compliance
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
              <h2 className="text-3xl font-bold text-gray-800">Eligibility & Basic Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Physical Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Physical Stamina:</span> Ability to stand for long hours
                </div>
                <div className="text-black">
                  <span className="font-medium">Heat Tolerance:</span> Comfortable working in hot kitchen environments
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Types & Training */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Culinary Education & Training Programs</h2>
            </div>
            <div className="space-y-6">
              {courseTypes.map((course, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{course.course}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700">{course.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">{course.requirement}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{course.cost}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{course.description}</span>
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
              <FaHeart className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Chef Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillsRequired.map((skill, index) => (
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

        {/* Specialization Areas */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAward className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Culinary Specializations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specializationAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Culinary Schools */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Top Culinary Schools in India</h2>
            </div>
            <div className="space-y-4">
              {topCulinarySchools.map((school, index) => (
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

        {/* Work Environments */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHotel className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Opportunities & Work Environments</h2>
            </div>
            <div className="space-y-4">
              {workEnvironments.map((env, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{env.type}</h3>
                      <p className="text-gray-600 text-sm mt-1">{env.description}</p>
                    </div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-green-600 mr-2" />
                      <span className="text-gray-700 font-medium">{env.salary}</span>
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

        {/* Career Path Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Chef Career Development Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Culinary Education</h3>
                  <p className="text-gray-600">Complete diploma or degree in culinary arts from recognized institute</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Internship & Training</h3>
                  <p className="text-gray-600">Gain practical experience through internships in hotels or restaurants</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Entry Level Position</h3>
                  <p className="text-gray-600">Start as Commis or Trainee Chef to learn kitchen operations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Skill Development</h3>
                  <p className="text-gray-600">Master various cuisines and develop leadership skills</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Senior Positions & Specialization</h3>
                  <p className="text-gray-600">Progress to Head Chef or specialize in particular cuisine type</p>
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
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Professional Organizations</h3>
                <div className="space-y-3">
                  <a href="https://ihmindia.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-blue-600 mr-3 group-hover:text-blue-800" />
                    <div>
                      <div className="font-medium text-gray-800">IHM Association</div>
                      <div className="text-sm text-gray-600">Professional hotel management network</div>
                    </div>
                  </a>
                  <a href="https://www.indianculinary.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaExternalLinkAlt className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Indian Culinary Forum</div>
                      <div className="text-sm text-gray-600">Community for culinary professionals</div>
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
                      <span className="text-gray-700">Practice cooking regularly and experiment with recipes</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Learn from experienced chefs and mentors</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stay updated with food trends and techniques</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Develop strong leadership and communication skills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build a portfolio and consider social media presence</span>
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