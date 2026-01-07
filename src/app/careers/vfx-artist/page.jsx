import React from 'react';

export default function VFXArtistPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">VFX Artist</h1>
            <p className="text-xl text-blue-100">Visual Effects & Animation</p>
          </div>
          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Career</h2>
              <p className="text-gray-600 leading-relaxed">VFX Artists create stunning visual effects for movies, TV shows, games, and advertisements using advanced software and creative skills.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Education Required</h2>
              <p className="text-gray-600">Bachelor's in Animation, VFX, or related field</p>
              <p className="text-gray-600 mt-2">Duration: 3-4 years</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Salary Range</h2>
              <p className="text-gray-600">₹3-8 LPA (Entry), ₹8-20 LPA (Mid), ₹20+ LPA (Senior)</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
