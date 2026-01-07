'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { HiArrowRight, HiStar, HiUsers, HiAcademicCap, HiArrowTrendingUp } from 'react-icons/hi2';
import { careersList } from './careers/careers-data';
import StructuredData from '@/components/structured-data';

// This will be handled by layout.js metadata for homepage

export default function MainBody() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured career slides
  const slides = [
    {
      id: 1,
      title: "Become a Pilot",
      subtitle: "Take Your Career to New Heights",
      image: "https://aerocadet.com/blog/wp-content/uploads/2024/09/health-criteria-for-becoming-a-pilot.jpg",
      link: "/careers/pilot"
    },
    {
      id: 2,
      title: "IAS Officer",
      subtitle: "Serve the Nation with Pride",
      image: "https://iikd.in/wp-content/uploads/2024/02/Blog-Banner-for-Website-Content-2.png",
      link: "/careers/ias"
    },
    {
      id: 3,
      title: "Software Engineer",
      subtitle: "Build the Digital Future",
      image: "https://www.dice.com/binaries/large/content/gallery/dice/insights/2022/09/shutterstock_2079730714.jpg",
      link: "/careers/engineer"
    },
    {
      id: 4,
      title: "Medical Doctor",
      subtitle: "Heal Lives, Make a Difference",
      image: "https://www.healthathomes.com/wp-content/uploads/2024/02/DOCTOR-AT-HOME-1.png",
      link: "/careers/doctor"
    }
  ];

  // Use centralized careers data
  const careers = careersList;

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Government': 'bg-blue-100 text-blue-800',
      'Aviation': 'bg-sky-100 text-sky-800',
      'Technology': 'bg-purple-100 text-purple-800',
      'Healthcare': 'bg-green-100 text-green-800',
      'Finance': 'bg-orange-100 text-orange-800',
      'Defense': 'bg-red-100 text-red-800',
      'Legal': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };


  return (
    <main className="min-h-screen bg-white mt-[100px] sm:mt-0">

      {/* Hero Swiper Section */}
      <section className="relative mt-16 h-[38vh] sm:h-[46vh] md:h-[60vh] lg:h-[80vh] xl:h-[80vh] overflow-hidden select-none">
        <div className="absolute inset-0 w-full h-full flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative w-full h-full flex-shrink-0"
            >
              <div 
                className="w-full h-full  bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>
              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight truncate max-w-[90vw] md:max-w-none">
                      {slide.title}
                    </h1>
                    <p className="text-xs xs:text-sm sm:text-base md:text-2xl text-white/90 mb-4 md:mb-8 truncate max-w-[90vw] md:max-w-none">
                      {slide.subtitle}
                    </p>
                  <Link href={slide.link} suppressHydrationWarning>
                    <button className="group bg-blue-600 text-white px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-4 rounded-full font-semibold text-xs xs:text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-1 xs:gap-2 md:gap-3 min-w-[120px]">
                      <span className="truncate">Explore Career Path</span>
                      <HiArrowRight className="text-base xs:text-lg md:text-xl group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-110 sm:scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Job Updates Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-8 hidden md:block">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-3">
              Latest <span className="text-blue-600">Job Updates</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">Stay updated with the latest opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Government Updates Button */}
            <Link href="/govt-updates">
              <div className="group relative overflow-hidden bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500 p-6 md:p-8">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                    Government Updates
                  </h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                    Jobs, Admit Cards, Results & More
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm md:text-base">
                    View Updates
                    <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Professional Updates Button */}
            <Link href="/professional-updates">
              <div className="group relative overflow-hidden bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500 p-6 md:p-8">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                    Professional Updates
                  </h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                    Jobs, Internships & Career Resources
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm md:text-base">
                    View Updates
                    <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

     

      {/* Career Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6">
              Explore <span className="text-blue-600">Career Paths</span>
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover detailed guides for top career options. From preparation strategies to success stories, 
              we&apos;ve got everything you need to make informed decisions about your future.
            </p> */}
          </div>

          {/* Career Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careers.map((career) => (
              <div key={career.id} className="group">
                <div
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 cursor-pointer"
                  onClick={() => window.location.href = career.link}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.location.href = career.link; }}
                >
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={career.image}
                      alt={career.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(career.category)}`}>
                      {career.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {career.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {career.description}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(career.difficulty)}`}>
                        {career.difficulty}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {career.duration}
                      </span>
                    </div>

                    {/* Read More Button */}
                    <button
                      className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transform group-hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      onClick={e => { e.stopPropagation(); window.location.href = career.link; }}
                    >
                      Explore More
                      <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 flex justify-center items-center">
            <Link href="/careers" suppressHydrationWarning>
              <button className="px-10 py-4 bg-blue-600 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer">
                Load More Careers
                <HiArrowRight className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>

       {/* Stats Section */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: HiUsers, value: 500, label: 'Students Guided', suffix: '+' },
              { icon: HiAcademicCap, value: 200, label: 'Career Paths', suffix: '+' },
              { icon: HiStar, value: 4.8, label: 'Success Rate', suffix: '' },
              { icon: HiArrowTrendingUp, value: 95, label: 'Success', suffix: '%' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="text-2xl text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.label === 'Success Rate' ? stat.value.toFixed(1) : Math.floor(stat.value)}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized career guidance, expert mentorship, and exclusive resources to accelerate your success.
          </p>
        {/* <Link href="/premium" suppressHydrationWarning>
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            Get Premium Career Help
          </button>
        </Link> */}
        </div>
      </section>

      {/* Structured Data for SEO */}
      <StructuredData type="Organization" />
      <StructuredData type="WebSite" />
    </main>
  );
}