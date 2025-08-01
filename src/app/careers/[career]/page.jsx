import React from 'react';

import { careersList } from '../../career';
import { FaRegClock, FaArrowLeft } from 'react-icons/fa';

export default function CareerDetailPage({ params }) {
  const { career } = params;
  const careerData = careersList.find(c => c.link === `/careers/${career}`);

  if (!careerData) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 flex flex-col items-center">
          <FaRegClock className="text-6xl text-blue-400 mb-6 animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Page Coming Soon</h1>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
            The career page you are looking for is under development and will be available soon. Please check back later or explore other career options.
          </p>
          <a href="/careers" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            Back to Careers
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {careerData.title}
        </h1>
        <div className="text-lg text-gray-600 mb-8">
          <p>Detailed information about <b>{careerData.title}</b> will be available here soon.</p>
        </div>
        <div className="mt-8">
          <a href="/careers" className="text-blue-600 hover:underline font-semibold">← Back to Careers</a>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  // Use 'link' property and filter only valid career links
  return careersList
    .filter(career => career.link && career.link.startsWith('/careers/'))
    .map(career => ({ career: career.link.replace('/careers/', '') }));
}
