import React from 'react';
import { notFound } from 'next/navigation';
import { careersList } from '../careers-data';
import { FaArrowLeft } from 'react-icons/fa';

export default function CareerDetailPage({ params }) {
  const { career } = params;
  const careerData = careersList.find(c =>
    c.link.replace(/\/$/, '').toLowerCase() === `/careers/${career}`.replace(/\/$/, '').toLowerCase()
  );

  if (!careerData) {
    notFound(); // triggers 404 on Vercel or local
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {careerData.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed information about <b>{careerData.title}</b> will be available here soon.
        </p>
        <div className="mt-8">
          <a href="/careers" className="text-blue-600 hover:underline font-semibold">← Back to Careers</a>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return careersList
    .filter(career => career.link && career.link.startsWith('/careers/'))
    .map(career => ({
      career: career.link.replace('/careers/', '').replace(/\/$/, ''),
    }));
}
