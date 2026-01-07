import React from 'react';

export default function LICAAOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">LIC AAO (Assistant Administrative Officer)</h1>
            <p className="text-xl text-blue-100">Insurance & Administration</p>
          </div>
          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Career</h2>
              <p className="text-gray-600 leading-relaxed">LIC AAOs handle administrative operations, policy management, and customer service in Life Insurance Corporation of India.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Education Required</h2>
              <p className="text-gray-600">Bachelor's degree in any discipline with minimum 60% marks</p>
              <p className="text-gray-600 mt-2">Age: 21-30 years</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Salary Range</h2>
              <p className="text-gray-600">₹6-8 LPA (Entry), ₹8-12 LPA (Mid), ₹12+ LPA (Senior)</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
