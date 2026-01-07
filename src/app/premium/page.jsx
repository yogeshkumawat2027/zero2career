import React from 'react';
import { HiStar, HiPhone, HiOutlineChatAlt2 } from 'react-icons/hi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function PremiumCareerHelp() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex flex-col items-center justify-center py-16 px-4 mt-10">
      <section className="max-w-3xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-6">
          <HiStar className="text-4xl text-orange-500" />
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Premium Career Help</h1>
        </div>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl">
          Unlock exclusive benefits with our Premium Career Guidance & Counselling! 
          Get personalized mentorship, expert advice, and priority support to accelerate your career journey.
          
        </p>
        <ul className="mb-10 w-full max-w-xl text-left space-y-4">
          <li className="flex items-start gap-3">
            <HiOutlineChatAlt2 className="text-xl text-purple-500 mt-1" />
            <span className="text-gray-800 font-medium">1-on-1 Career Counselling & Guidance</span>
          </li>
          <li className="flex items-start gap-3">
            <HiStar className="text-xl text-orange-500 mt-1" />
            <span className="text-gray-800 font-medium">Personalized Roadmap & Success Strategies</span>
          </li>
          <li className="flex items-start gap-3">
            <HiPhone className="text-xl text-blue-500 mt-1" />
            <span className="text-gray-800 font-medium">Direct Call Support with Career Experts</span>
          </li>
          <li className="flex items-start gap-3">
            <FaWhatsapp className="text-xl text-green-500 mt-1" />
            <span className="text-gray-800 font-medium">Priority WhatsApp Chat for Quick Queries</span>
          </li>
          <li className="flex items-start gap-3">
            <FaInstagram className="text-xl text-pink-500 mt-1" />
            <span className="text-gray-800 font-medium">Connect via Instagram for Updates & Support</span>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transition-all duration-300">
            <FaWhatsapp className="text-xl" /> WhatsApp Us
          </a>
          <a href="tel:+919999999999" className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300">
            <HiPhone className="text-xl" /> Call Us
          </a>
          
        </div>
      </section>
    </main>
  );
}
