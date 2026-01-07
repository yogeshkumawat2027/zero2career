
'use client'
import React from 'react';
// Utility functions for badge colors
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
import Link from 'next/link';
import { careersList } from '../career';
import { HiArrowRight } from 'react-icons/hi2';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16 ">
      <style jsx>{`
        @media (min-width: 880px) {
          .custom880\:mt-32 {
            margin-top: 8rem !important;
          }
        }
      `}</style>
       <div className="block lg:hidden h-[100px]">
          
          </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            All <span className="text-blue-600">Careers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore detailed guides for every major career in India. Click any career to see the full path, eligibility, and success tips.
          </p>
        </div>
        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {careersList.map((career) => (
            <Link
              key={career.id + '-' + career.link}
              href={career.link}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={career.image}
                  alt={career.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow ${getCategoryColor(career.category)}`}>
                  {career.category}
                </div>
              </div>
              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {career.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{career.description}</p>
                {/* Meta Information */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(career.difficulty)}`}>
                    {career.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {career.duration}
                  </span>
                </div>
                {/* Explore More Button */}
                <span className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transform group-hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Explore More
                  <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
