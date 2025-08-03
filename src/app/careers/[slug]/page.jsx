import React from 'react';
import Link from 'next/link';
import { FaRegClock, FaArrowLeft } from 'react-icons/fa';

export default function page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 flex flex-col items-center">
        <FaRegClock className="text-6xl text-blue-400 mb-6 animate-pulse" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Page Coming Soon</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
          The career page you are looking for is under development and will be available soon. Please check back later or explore other career options.
        </p>
        <Link href="/careers" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-lg">
          <FaArrowLeft className="mr-2" />
          Back to Careers
        </Link>
      </div>
    </main>
  );
}
