import React from 'react';

export default function MusicProducerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Music Producer</h1>
            <p className="text-xl text-blue-100">Music & Entertainment</p>
          </div>
          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Career</h2>
              <p className="text-gray-600 leading-relaxed">Music Producers oversee recording sessions, guide artists, mix tracks, and create commercial music for films, albums, and digital platforms.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Education Required</h2>
              <p className="text-gray-600">Diploma/Degree in Music Production, Sound Engineering, or related field (Optional but beneficial)</p>
              <p className="text-gray-600 mt-2">Duration: 1-3 years formal training</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Salary Range</h2>
              <p className="text-gray-600">₹2-6 LPA (Entry), ₹6-15 LPA (Mid), ₹15+ LPA (Senior/Independent)</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
