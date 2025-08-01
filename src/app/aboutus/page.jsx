'use client'
import React, { useState, useEffect } from 'react';
import { HiUsers, HiAcademicCap, HiStar, HiArrowTrendingUp, HiHeart, HiLightBulb, HiShieldCheck, HiRocketLaunch } from 'react-icons/hi2';

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
                  Founded in 2018, our platform began with a simple yet powerful vision: to bridge the gap between 
                  student aspirations and career realities. We noticed that many talented individuals were making 
                  career choices without proper guidance, leading to dissatisfaction and unfulfilled potential.
                </p>
                <p>
                  What started as a small counseling center in Kota, Rajasthan, has now grown into a comprehensive 
                  online platform serving students across India. We've helped over 500 students achieve their dream 
                  careers, from IAS officers to commercial pilots, doctors to software engineers.
                </p>
                <p>
                  Our success lies in our personalized approach. We don't believe in one-size-fits-all solutions. 
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
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Success <span className="text-orange-400">Stories</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hear from our students who have achieved their dream careers with our guidance and support.
            </p>
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-4">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                          <p className="text-blue-200">{testimonial.role}</p>
                        </div>
                        <div className="ml-auto flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <HiStar key={i} className="text-xl" />
                          ))}
                        </div>
                      </div>
                      <p className="text-lg text-blue-100 leading-relaxed">"{testimonial.content}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-orange-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
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