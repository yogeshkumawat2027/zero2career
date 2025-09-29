import React from 'react';
import Link from 'next/link';
import { 
  HiAcademicCap,
  HiDocumentText, 
  HiChatBubbleLeftRight,
  HiCog8Tooth,
  HiUsers,
  HiArrowRight,
  HiCheckCircle,
  HiStar,
  HiPhoneArrowUpRight
} from 'react-icons/hi2';
import { 
  FaUserTie,
  FaFileAlt,
  FaComments,
  FaTools,
  FaHandsHelping
} from 'react-icons/fa';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Career Counseling",
      icon: FaUserTie,
      hiIcon: HiAcademicCap,
      description: "Get personalized career guidance from industry experts to discover your ideal career path.",
      features: [
        "One-on-one career consultation",
        "Personality & interest assessment", 
        "Industry insights & trends",
        "Customized career roadmap"
      ],
      price: "₹2,999",
      duration: "2 Sessions",
      popular: true
    },
    {
      id: 2, 
      title: "Resume Building",
      icon: FaFileAlt,
      hiIcon: HiDocumentText,
      description: "Create professional, ATS-optimized resumes that get you noticed by recruiters.",
      features: [
        "Professional resume design",
        "ATS optimization",
        "Industry-specific templates",
        "LinkedIn profile optimization"
      ],
      price: "₹1,999",
      duration: "3-5 Days",
      popular: false
    },
    {
      id: 3,
      title: "Interview Preparation", 
      icon: FaComments,
      hiIcon: HiChatBubbleLeftRight,
      description: "Master interview skills with mock interviews and expert feedback from industry professionals.",
      features: [
        "Mock interview sessions",
        "Technical & HR preparation",
        "Behavioral question training",
        "Body language coaching"
      ],
      price: "₹3,999",
      duration: "5 Sessions",
      popular: true
    },
    {
      id: 4,
      title: "Skill Development",
      icon: FaTools, 
      hiIcon: HiCog8Tooth,
      description: "Enhance your technical and soft skills with industry-relevant training programs.",
      features: [
        "Technical skill training",
        "Soft skills development",
        "Certification guidance",
        "Project-based learning"
      ],
      price: "₹5,999",
      duration: "1-3 Months",
      popular: false
    },
    {
      id: 5,
      title: "Mentorship Program",
      icon: FaHandsHelping,
      hiIcon: HiUsers,
      description: "Get ongoing support and guidance from experienced mentors in your field of interest.",
      features: [
        "Personal mentor assignment",
        "Weekly guidance sessions",
        "Goal tracking & progress",
        "Industry networking opportunities"
      ],
      price: "₹7,999",
      duration: "3 Months",
      popular: true
    }
  ];

  const stats = [
    { number: "500+", label: "Students Helped" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Industry Experts" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
         <div className="block lg:hidden h-[100px]">
          
          </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-blue-200">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive career development solutions designed to accelerate your professional journey
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
                <HiStar className="text-yellow-400" />
                <span className="text-sm font-medium">Trusted by 500+ Students</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
                <HiCheckCircle className="text-green-400" />
                <span className="text-sm font-medium">95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your <span className="text-blue-600">Career Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our expertly designed services to fast-track your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              const HiIconComponent = service.hiIcon;
              
              return (
                <div 
                  key={service.id}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-blue-100 p-4 rounded-xl">
                        <IconComponent className="text-2xl text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-600">
                          <span className="font-semibold">{service.price}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-500">{service.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <HiCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeuNRsE_fDpoUVBw2FL1VjVcIf93tnufwhW7h3J9EkBVP3O4A/viewform?usp=header" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Get Started
                      <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose <span className="text-blue-600">Zero2Career?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <HiAcademicCap className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Get personalized advice from industry professionals with 10+ years of experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <HiCheckCircle className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Results</h3>
                    <p className="text-gray-600">95% of our students successfully land their dream jobs within 6 months.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <HiUsers className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">Every service is customized to match your unique goals and career aspirations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
                <p className="text-blue-100 mb-6">
                  Join thousands of successful professionals who have accelerated their careers with our expert guidance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <HiCheckCircle className="text-green-400" />
                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiCheckCircle className="text-green-400" />
                    <span>Money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiCheckCircle className="text-green-400" />
                    <span>Lifetime career support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Career Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fill out our registration form and get personalized career guidance from our expert team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeuNRsE_fDpoUVBw2FL1VjVcIf93tnufwhW7h3J9EkBVP3O4A/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <HiPhoneArrowUpRight className="text-xl" />
              Fill Registration Form
            </Link>
            <div className="text-blue-200 text-sm">
              ✓ Free consultation • ✓ No commitment required
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
