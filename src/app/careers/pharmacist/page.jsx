import React from 'react';

export default function PharmacistPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pharmacist</h1>
            <p className="text-xl text-blue-100">Healthcare & Pharmaceuticals</p>
          </div>
          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Career</h2>
              <p className="text-gray-600 leading-relaxed">Pharmacists dispense medications, advise patients on proper drug usage, and ensure safe and effective use of pharmaceutical products.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Education Required</h2>
              <p className="text-gray-600">D.Pharma (2 years) or B.Pharma (4 years) + State Pharmacy Council Registration</p>
              <p className="text-gray-600 mt-2">Duration: 2-4 years</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Salary Range</h2>
              <p className="text-gray-600">₹2.5-5 LPA (Entry), ₹5-10 LPA (Mid), ₹10+ LPA (Senior)</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
