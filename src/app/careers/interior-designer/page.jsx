import React from 'react';

export default function InteriorDesignerPage() {
  const career = {
    id: 'interior-designer',
    title: 'Interior Designer',
    category: 'Design & Arts',
    description: 'Interior designers create functional and aesthetically pleasing interior spaces for residential, commercial, and institutional buildings. They combine creativity with technical knowledge to transform spaces.',
    education: 'Bachelor\'s in Interior Design, Architecture, or related field',
    salary: '₹3-8 LPA (Entry Level), ₹8-20 LPA (Mid Level), ₹20+ LPA (Senior Level)',
    skills: ['Space Planning', 'AutoCAD', '3D Visualization', 'Color Theory', 'Material Knowledge', 'Client Communication'],
    duration: '3-4 years for Bachelor\'s degree',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{career.title}</h1>
            <p className="text-xl text-blue-100">{career.category}</p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Career</h2>
              <p className="text-gray-600 leading-relaxed">{career.description}</p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Education Required</h2>
              <p className="text-gray-600">{career.education}</p>
              <p className="text-gray-600 mt-2">Duration: {career.duration}</p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {career.skills.map((skill, index) => (
                  <div key={index} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Salary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Salary Range</h2>
              <p className="text-gray-600">{career.salary}</p>
            </section>

            {/* Career Path */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Path</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Junior Interior Designer</h3>
                    <p className="text-gray-600">Entry-level position working under senior designers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Interior Designer</h3>
                    <p className="text-gray-600">Handle independent projects and client interactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Senior Interior Designer / Design Head</h3>
                    <p className="text-gray-600">Lead projects, manage teams, and make strategic design decisions</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
