import React from 'react';

export default function MarineBiologistPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Marine Biologist</h1>
            <p className="text-xl text-blue-100">Science & Marine Life</p>
          </div>
          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Career</h2>
              <p className="text-gray-600 leading-relaxed">Marine Biologists study ocean ecosystems, marine organisms, and their interactions, contributing to conservation and sustainable use of marine resources.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Education Required</h2>
              <p className="text-gray-600">B.Sc in Marine Biology or related field + M.Sc for research positions</p>
              <p className="text-gray-600 mt-2">Duration: 3 years (B.Sc) + 2 years (M.Sc)</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Salary Range</h2>
              <p className="text-gray-600">₹3-6 LPA (Entry), ₹6-12 LPA (Mid), ₹12+ LPA (Senior/Researcher)</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
