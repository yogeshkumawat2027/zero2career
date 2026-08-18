import React from 'react';
import { 
  HiEnvelope, 
  HiPhone, 
  HiMapPin, 
  HiArrowRight,
  HiAcademicCap,
  HiBriefcase,
  HiGlobeAlt
} from 'react-icons/hi2';
import Link from 'next/link';
import Image from 'next/image';
import z2clogo from '../../public/z2clogo.png';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Careers', href: '/careers' },
    { name: 'Career Assessment', href: '/careers' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' },
    { name: 'Disclaimer', href: '/disclaimer' }
  ];

  const services = [
    { name: 'Career Counseling', href: '/services' },
    { name: 'Resume Building', href: '/services' },
    { name: 'Interview Preparation', href: '/services' },
    { name: 'Skill Development', href: '/services' },
    // { name: 'Job Placement', href: '/services/placement' },
    { name: 'Mentorship Program', href: '/services' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Newsletter/Contact Section */}
      <div className="border-b border-white/10">
      
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Adjusted grid: only 3 columns now */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Link href="/" className="flex items-center gap-2" suppressHydrationWarning>
                  <span className="relative w-10 h-10 block">
                    <Image
                      src={z2clogo}
                      alt="Zero2Career Logo - Career Guidance"
                      width={40}
                      height={40}
                      className="rounded-xl shadow-lg object-cover"
                      priority
                    />
                  </span>
                </Link>
              </div>
              <h2 className="text-2xl font-bold">Zero2Career</h2>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Empowering students and professionals with comprehensive career guidance, 
              expert mentorship, and practical resources to build successful careers.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-100">
                <HiEnvelope className="text-xl text-blue-400" />
                <a href="mailto:zero2careerofficial@gmail.com" className="hover:text-white transition-colors">
                  zero2careerofficial@gmail.com
                </a>
              </div>
              {/* <div className="flex items-center gap-3 text-blue-100">
                <HiPhone className="text-xl text-blue-400" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div> */}
              <div className="flex items-center gap-3 text-blue-100">
                <HiMapPin className="text-xl text-blue-400" />
                <span>Kota, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <HiGlobeAlt className="text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white hover:translate-x-1 transform transition-all duration-200 flex items-center gap-2 group"
                  >
                    <HiArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <HiBriefcase className="text-blue-400" />
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-blue-100 hover:text-white hover:translate-x-1 transform transition-all duration-200 flex items-center gap-2 group"
                    >
                      <HiArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <HiAcademicCap className="text-blue-400" />
              Our Services
            </h3>
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-blue-100 hover:text-white hover:translate-x-1 transform transition-all duration-200 flex items-center gap-2 group"
                  >
                    <HiArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Premium CTA */}
            {/* <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <HiStar className="text-yellow-400" />
                <h4 className="font-semibold">Premium Career Help</h4>
              </div>
              <p className="text-sm text-blue-100 mb-3">
                Get personalized guidance from industry experts
              </p>
              <Link href="/premium" suppressHydrationWarning>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-2 rounded-lg font-semibold text-sm hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                  Upgrade Now
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-blue-100 text-sm">
                © {currentYear} Zero2Career. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6 mt-2 text-xs sm:text-sm">
                {legalLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
