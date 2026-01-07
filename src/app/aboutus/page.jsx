'use client'
import React, { useState, useEffect } from 'react';
import { HiUsers, HiAcademicCap, HiStar, HiArrowTrendingUp, HiHeart, HiLightBulb, HiShieldCheck, HiRocketLaunch } from 'react-icons/hi2';
import { FaLinkedin, FaInstagram, FaCode, FaLaptopCode } from 'react-icons/fa';

export default function AboutUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Founder & Career Counselor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years experience in career guidance with PhD in Educational Psychology",
      specialization: "IAS/IPS Preparation"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Aviation Career Expert",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Former Commercial Pilot with 12 years of flying experience",
      specialization: "Pilot Training & Aviation"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Tech Career Mentor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Senior Software Engineer at Google with 10+ years experience",
      specialization: "Engineering & Data Science"
    },
    {
      id: 4,
      name: "Dr. Meera Singh",
      role: "Medical Career Advisor",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      bio: "MBBS, MD with expertise in medical entrance preparation",
      specialization: "NEET & Medical Careers"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rahul Verma",
      role: "IAS Officer, 2023 Batch",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      content: "The guidance I received was exceptional. The structured approach and personalized mentorship helped me crack UPSC in my second attempt. Forever grateful!",
      rating: 5
    },
    {
      id: 2,
      name: "Sneha Gupta",
      role: "Commercial Pilot",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      content: "From choosing the right flying school to getting my CPL, every step was guided perfectly. Now I'm flying with IndiGo. Thank you for making my dreams come true!",
      rating: 5
    },
    {
      id: 3,
      name: "Vikash Kumar",
      role: "Software Engineer at Microsoft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content: "The career roadmap and interview preparation were spot-on. Got placed in Microsoft with a great package. Highly recommend their tech career guidance!",
      rating: 5
    }
  ];

  // Values data
  const values = [
    {
      icon: HiHeart,
      title: "Passion for Success",
      description: "We are genuinely invested in your success and celebrate every achievement with you."
    },
    {
      icon: HiLightBulb,
      title: "Innovation in Guidance",
      description: "We use cutting-edge methods and personalized approaches to career counseling."
    },
    {
      icon: HiShieldCheck,
      title: "Trust & Integrity",
      description: "We provide honest, transparent advice based on your individual strengths and goals."
    },
    {
      icon: HiRocketLaunch,
      title: "Growth Mindset",
      description: "We believe in continuous learning and adapting to the evolving career landscape."
    }
  ];

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
           <div className="block lg:hidden h-[100px]">
          
          </div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-orange-400">Our Mission</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Empowering students and professionals to make informed career decisions through expert guidance, 
            personalized mentorship, and comprehensive resources.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: HiUsers, value: "500+", label: "Students Guided" },
              { icon: HiAcademicCap, value: "200+", label: "Career Paths" },
              { icon: HiStar, value: "4.8/5", label: "Success Rate" },
              { icon: HiArrowTrendingUp, value: "95%", label: "Success" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-3">
                  <stat.icon className="text-2xl text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our platform began with a simple yet powerful vision: to bridge the gap between 
                  student aspirations and career realities. We noticed that many talented individuals were making 
                  career choices without proper guidance, leading to dissatisfaction and unfulfilled potential.
                </p>
                <p>
                  What started as a small counseling center in Kota, Rajasthan, has now grown into a comprehensive 
                  online platform serving students across India. We've helped  students achieve their dream.
                </p>
                <p>
                  Our success lies in our personalized approach. We don&apos;t believe in one-size-fits-all solutions. 
                  Every student is unique, and so should be their career path. That's why we invest time in 
                  understanding your strengths, interests, and circumstances before crafting a personalized roadmap.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Our team working together" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our students and community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
                  <value.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Meet Our <span className="text-blue-600">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experienced professionals brings together decades of expertise 
              across various career domains to guide you toward success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                      {member.specialization}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Success Stories Section */}
   
      {/* Meet Our Career Advisor Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Meet Our <span className="text-blue-600">Career Advisor</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding students with years of expertise and deep understanding of career pathways
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Profile Image Section */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-block mb-8">
                    <div className="w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border-8 border-white/20 shadow-2xl">
                      <img 
                        src="/Rakesh-yadav.jpeg" 
                        alt="Rakesh Yadav - Career Advisor"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-4 shadow-lg">
                      <HiAcademicCap className="text-blue-600 text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-12 lg:p-16">
                <div className="space-y-8">
                  {/* Name and Title */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                      Mr. Rakesh Yadav
                    </h3>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                        <HiAcademicCap className="text-lg" />
                        <span className="font-semibold">Career Advisor</span>
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                        Expert Mentor
                      </div>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With extensive experience in career counseling and student mentorship, Mr. Rakesh Yadav brings 
                      a wealth of knowledge in guiding students towards their dream careers. His personalized approach 
                      and deep understanding of various career paths have helped countless students make informed decisions.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      As a dedicated career advisor at Zero2Career, he specializes in understanding each student's 
                      unique strengths and aspirations, providing tailored guidance that aligns with their goals and 
                      the ever-evolving job market demands.
                    </p>
                  </div>
                  
                  {/* Vision Quote */}
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      "Success is not just about choosing a career; it's about understanding yourself, your passion, 
                      and creating a roadmap that transforms your dreams into achievable milestones."
                    </p>
                    <div className="text-blue-600 font-semibold mt-3">- Mr. Rakesh Yadav, Career Advisor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Meet Our <span className="text-blue-600">Founder</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by passion for empowering careers and backed by technical expertise
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Profile Image Section */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-block mb-8">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                      <img 
                        src="/YogeshImg.png" 
                        alt="Yogesh - Founder Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-4 shadow-lg">
                      <FaLaptopCode className="text-blue-600 text-2xl" />
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://www.linkedin.com/in/yogesh-kumawat-8052b12a0/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300 group"
                    >
                      <FaLinkedin className="text-white text-xl group-hover:text-blue-200" />
                    </a>
                    <a 
                      href="https://www.instagram.com/__yogesh___prajapat__/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm border border-white/30 p-4 rounded-full hover:bg-white/30 transform hover:scale-110 transition-all duration-300 group"
                    >
                      <FaInstagram className="text-white text-xl group-hover:text-pink-200" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-12 lg:p-16">
                <div className="space-y-8">
                  {/* Name and Title */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                      Yogesh Kumawat
                    </h3>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                        <FaCode className="text-lg" />
                        <span className="font-semibold">Software Engineer</span>
                      </div>
                      <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                        Founder & CEO
                      </div>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      With over <span className="font-semibold text-blue-600">3+ years</span> of experience in software engineering 
                      and a deep passion for career development, Yogesh founded Zero2Career to bridge the gap between 
                      student aspirations and industry requirements.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      His technical background combined with extensive mentoring experience enables him to provide 
                      practical, industry-relevant career guidance to thousands of students across India.
                    </p>
                  </div>
                  
                  {/* Achievements */}
                  {/* <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                      <div className="text-gray-600 font-medium">Students Mentored</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                      <div className="text-gray-600 font-medium">Success Rate</div>
                    </div>
                  </div> */}
                  
                  {/* Vision Quote */}
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      "Every student has the potential to achieve greatness. Our role is to provide the right guidance, 
                      tools, and support to help them discover and pursue their ideal career path."
                    </p>
                    <div className="text-blue-600 font-semibold mt-3">- Mr. Yogesh Kumawat, Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their dream careers with our expert guidance. 
            Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Your Journey Today
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}