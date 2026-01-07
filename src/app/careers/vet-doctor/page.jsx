import React from 'react';

export default function VetDoctorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Veterinary Doctor</h1>
            <p className="text-xl text-blue-100">Healthcare & Animal Welfare</p>
          </div>
          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Career</h2>
              <p className="text-gray-600 leading-relaxed">Veterinary doctors diagnose and treat diseases, injuries, and disorders in animals, promoting animal health and welfare.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Education Required</h2>
              <p className="text-gray-600">Bachelor of Veterinary Science (B.V.Sc)</p>
              <p className="text-gray-600 mt-2">Duration: 5-5.5 years</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Salary Range</h2>
              <p className="text-gray-600">₹3-7 LPA (Entry), ₹7-15 LPA (Mid), ₹15+ LPA (Senior)</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
