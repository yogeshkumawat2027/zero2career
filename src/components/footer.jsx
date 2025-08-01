import React from 'react';
import { 
  HiEnvelope, 
  HiPhone, 
  HiMapPin, 
  HiArrowRight,
  HiStar,
  HiAcademicCap,
  HiBriefcase,
  HiUsers,
  HiGlobeAlt
} from 'react-icons/hi2';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaTelegramPlane
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import z2clogo from './z2clogo.jpg';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Careers', href: '/careers' },
    { name: 'Career Assessment', href: '/assessment' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Blog & Resources', href: '/blog' },
    { name: 'About Us', href: '/aboutus' }
  ];

  const services = [
    { name: 'Career Counseling', href: '/services/counseling' },
    { name: 'Resume Building', href: '/services/resume' },
    { name: 'Interview Preparation', href: '/services/interview' },
    { name: 'Skill Development', href: '/services/skills' },
    // { name: 'Job Placement', href: '/services/placement' },
    { name: 'Mentorship Program', href: '/services/mentorship' }
  ];

  const socialLinks = [
    { Icon: FaFacebookF, href: '#', color: 'hover:text-blue-500' },
    { Icon: FaTwitter, href: '#', color: 'hover:text-sky-400' },
    { Icon: FaInstagram, href: '#', color: 'hover:text-pink-500' },
    { Icon: FaLinkedinIn, href: '#', color: 'hover:text-blue-600' },
    { Icon: FaYoutube, href: '#', color: 'hover:text-red-500' },
    { Icon: FaTelegramPlane, href: '#', color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Newsletter/Contact Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Career Insights
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get weekly career tips, job alerts, and exclusive resources delivered to you. Connect with us instantly!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-green-500 font-semibold text-white hover:bg-green-600 transition-all duration-300 shadow-lg text-sm sm:text-base whitespace-nowrap"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor"><path d="M16.003 3.18c-7.145 0-12.952 5.799-12.952 12.924 0 2.282.602 4.519 1.74 6.478l-1.82 6.654 6.847-1.797a12.869 12.869 0 0 0 6.185 1.568h.001c7.146 0 12.952-5.8 12.952-12.925 0-3.457-1.344-6.708-3.785-9.15a12.892 12.892 0 0 0-9.168-3.752zm0 23.694c-1.933 0-3.83-.51-5.53-1.47l-.395-.23-4.073 1.07 1.096-3.969-.255-.407a10.968 10.968 0 0 1-1.715-5.905c0-6.077 4.947-11.025 11.027-11.025 2.946 0 5.718 1.15 7.806 3.236a10.888 10.888 0 0 1 3.222 7.795c0 6.078-4.947 11.024-11.027 11.024zm6.033-8.284c-.329-.164-1.947-.96-2.248-1.071-.3-.112-.52-.164-.74.164-.216.322-.847 1.07-1.04 1.292-.191.216-.396.242-.73.082-.331-.158-1.401-.515-2.672-1.64-.987-.884-1.653-1.973-1.849-2.305-.193-.33-.021-.509.146-.67.15-.146.333-.382.498-.579.167-.198.22-.338.332-.562.111-.225.056-.42-.028-.583-.083-.164-.74-1.783-1.012-2.443-.267-.656-.54-.569-.735-.574l-.625-.01a1.1 1.1 0 0 0-.797.372c-.272.296-1.03.982-1.03 2.393 0 1.409 1.055 2.768 1.203 2.962.148.193 2.076 3.18 5.141 4.327.719.246 1.278.393 1.715.504a4.128 4.128 0 0 0 1.793.113c.547-.082 1.947-.796 2.221-1.566.277-.775.277-1.438.194-1.573-.079-.134-.299-.215-.627-.378z"/></svg>
                <span>WhatsApp</span>
              </a>
              {/* Call */}
              <a
                href="tel:+919876543210"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-blue-500 font-semibold text-white hover:bg-blue-600 transition-all duration-300 shadow-lg text-sm sm:text-base whitespace-nowrap"
              >
                <HiPhone className="text-lg flex-shrink-0" />
                <span>Call Us</span>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-pink-500 font-semibold text-white hover:bg-pink-600 transition-all duration-300 shadow-lg text-sm sm:text-base whitespace-nowrap"
              >
                <FaInstagram className="text-lg flex-shrink-0" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Adjusted grid: only 3 columns now */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Link href="/" className="flex items-center gap-2">
                  <span className="relative w-10 h-10 block">
                    <Image
                      src={z2clogo}
                      alt="Zero2Career Logo"
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
                <a href="mailto:support@zero2career.com" className="hover:text-white transition-colors">
                  support@zero2career.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <HiPhone className="text-xl text-blue-400" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <HiMapPin className="text-xl text-blue-400" />
                <span>New Delhi, India</span>
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
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-white hover:translate-x-1 transform transition-all duration-200 flex items-center gap-2 group"
                  >
                    <HiArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
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
                  <a 
                    href={service.href}
                    className="text-blue-100 hover:text-white hover:translate-x-1 transform transition-all duration-200 flex items-center gap-2 group"
                  >
                    <HiArrowRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Premium CTA */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <HiStar className="text-yellow-400" />
                <h4 className="font-semibold">Premium Career Help</h4>
              </div>
              <p className="text-sm text-blue-100 mb-3">
                Get personalized guidance from industry experts
              </p>
              <Link href="/premium">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-2 rounded-lg font-semibold text-sm hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                  Upgrade Now
                </button>
              </Link>
            </div>
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
              {/* <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6 mt-2 text-xs sm:text-sm">
                <a href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-blue-200 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div> */}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
              <span className="text-blue-100 text-xs sm:text-sm mr-1 sm:mr-2 w-full text-center md:w-auto md:text-left">Follow us:</span>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white/80 ${social.color} transform hover:scale-110 transition-all duration-300 backdrop-blur-sm hover:bg-white/20`}
                  >
                    <social.Icon className="text-sm sm:text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-blue-100 text-xs sm:text-sm">
              <HiUsers className="text-base sm:text-xl text-blue-400 flex-shrink-0" />
              <span>5,000+ Students</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-xs sm:text-sm">
              <HiStar className="text-base sm:text-xl text-yellow-400 flex-shrink-0" />
              <span>4.8/5 Success</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-xs sm:text-sm">
              <HiAcademicCap className="text-base sm:text-xl text-green-400 flex-shrink-0" />
              <span>100+ Careers</span>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
