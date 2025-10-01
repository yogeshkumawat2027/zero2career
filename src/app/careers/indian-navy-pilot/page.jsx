import Link from 'next/link';
import React from 'react';
import { 
  FaAnchor, 
  FaPlane, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaShieldAlt, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaHelicopter,
  FaRocket,
  FaMedal,
  FaFlag,
  FaWater,
  FaEye,
  FaUserTie,
  FaShip
} from 'react-icons/fa';

export const metadata = {
  title: "Indian Navy Pilot Career 2025 | Naval Aviation Training, Salary & Selection | Zero2Career",
  description: "Complete guide to becoming an Indian Navy Pilot - NDA, CDS selection process, naval aviation training, salary structure, eligibility criteria, and career progression in Indian Navy.",
  keywords: "Indian Navy pilot, naval aviation, NDA selection, CDS exam, navy pilot training, naval aircraft, aircraft carrier, helicopter pilot, fighter pilot, navy officer, maritime operations",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/indian-navy-pilot"
  },
  openGraph: {
    title: "Indian Navy Pilot Career Guide 2025 | Complete Training & Selection Process",
    description: "Comprehensive guide to Indian Navy Pilot career - from NDA/CDS selection to naval aviation training and career progression",
    url: "https://zero2career.in/careers/indian-navy-pilot",
    siteName: "Zero2Career",
    images: [
      {
        url: "https://c.ndtvimg.com/2025-07/mor7n73_sub-lieutenant-astha-poonia_625x300_04_July_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
        width: 1200,
        height: 738,
        alt: "Indian Navy Pilot Career Guide"
      }
    ],
    locale: "en_IN",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Navy Pilot Career Guide 2025 | Naval Aviation Training",
    description: "Complete roadmap to becoming an Indian Navy Pilot - selection process, training, salary and career opportunities",
    images: ["https://c.ndtvimg.com/2025-07/mor7n73_sub-lieutenant-astha-poonia_625x300_04_July_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function IndianNavyPilotPage() {
  const eligibilityData = [
    { icon: FaUserTie, title: "Nationality", detail: "Indian Citizenship required" },
    { icon: FaGraduationCap, title: "Education", detail: "12th PCM for NDA, Graduate for CDS" },
    { icon: FaCalendarAlt, title: "Age Limit", detail: "16.5-19.5 years (NDA), 19-24 years (CDS)" },
    { icon: FaEye, title: "Medical Standards", detail: "Stringent aviation medical fitness required" }
  ];

  const selectionProcess = [
    { 
      phase: "Written Examination", 
      duration: "1-2 Days", 
      papers: "NDA: Math + GAT, CDS: English + GK + Elementary Math",
      marks: "NDA: 900, CDS: 300",
      nature: "Objective Type (MCQ)",
      qualifying: "Merit based cutoff"
    },
    { 
      phase: "SSB Interview", 
      duration: "5 Days", 
      papers: "Psychological Tests + GTO + Interview + Conference",
      marks: "Not disclosed",
      nature: "Comprehensive Assessment",
      qualifying: "Recommended/Not Recommended"
    },
    { 
      phase: "Medical Examination", 
      duration: "3-4 Days", 
      papers: "Aviation Medical Standards",
      marks: "Fit/Unfit",
      nature: "Medical & Psychological fitness",
      qualifying: "Must clear all parameters"
    }
  ];

  const trainingPhases = [
    { phase: "Naval Academy", duration: "4 years", location: "Indian Naval Academy, Ezhimala", focus: "Basic naval training, academics, leadership development, seamanship" },
    { phase: "Basic Flying Training", duration: "1.5 years", location: "Air Force Academy, Dundigal", focus: "Elementary flying, aerobatics, instrument flying on Pilatus PC-7" },
    { phase: "Advanced Flying Training", duration: "1 year", location: "Flying Training Schools", focus: "Advanced flying, formation flying, navigation, weapon training" },
    { phase: "Naval Flying Training", duration: "6-8 months", location: "INS Garuda, Kochi", focus: "Maritime operations, deck landing, carrier operations, naval warfare" },
    { phase: "Operational Training", duration: "6 months", location: "Naval Air Squadrons", focus: "Aircraft-specific training, squadron operations, combat readiness" },
    { phase: "Specialized Courses", duration: "Ongoing", location: "Various Naval Institutes", focus: "Advanced weapons, tactics, leadership, staff courses" }
  ];

  const careerProgression = [
    { rank: "Sub Lieutenant", years: "0-2 years", salary: "₹56,100 - ₹1,77,500", responsibilities: "Under training, junior pilot duties" },
    { rank: "Lieutenant", years: "2-6 years", salary: "₹61,300 - ₹1,93,900", responsibilities: "Operational pilot, flight operations, basic leadership" },
    { rank: "Lt. Commander", years: "6-13 years", salary: "₹69,400 - ₹2,07,200", responsibilities: "Flight leader, instructor, squadron second-in-command" },
    { rank: "Commander", years: "13-20 years", salary: "₹1,21,200 - ₹2,67,000", responsibilities: "Squadron commander, air station department heads" },
    { rank: "Captain", years: "20-26 years", salary: "₹1,44,200 - ₹2,18,200", responsibilities: "Air station commander, senior staff appointments" },
    { rank: "Commodore", years: "26+ years", salary: "₹1,82,200 - ₹2,24,100", responsibilities: "Naval aviation commands, flag appointments" },
    { rank: "Rear Admiral", years: "30+ years", salary: "₹2,05,400 - ₹2,24,400", responsibilities: "Senior naval aviation leadership, theater commands" }
  ];

  const aircraftTypes = [
    { type: "Fighter Aircraft", examples: "MiG-29K Sea Harrier", role: "Air superiority, fleet defense, ground attack operations" },
    { type: "Maritime Patrol", examples: "P-8I Neptune, Tu-142M", role: "Long-range maritime surveillance, anti-submarine warfare" },
    { type: "Helicopters", examples: "Sea King, Chetak, Dhruv, Kamov Ka-28", role: "Anti-submarine warfare, search & rescue, transport" },
    { type: "Transport Aircraft", examples: "Dornier Do-228, Islander BN-2", role: "Personnel transport, logistics, coastal surveillance" },
    { type: "Training Aircraft", examples: "Hawk AJT, Pilatus PC-7", role: "Advanced flying training, aerobatic training" },
    { type: "Reconnaissance", examples: "Heron UAV, Searcher UAV", role: "Intelligence gathering, border surveillance, reconnaissance" }
  ];

  const navalAirStations = [
    { name: "INS Hansa", location: "Dabolim, Goa", role: "Fighter operations, MiG-29K squadron, carrier operations training" },
    { name: "INS Garuda", location: "Kochi, Kerala", role: "Maritime patrol aircraft, P-8I operations, flying training" },
    { name: "INS Dega", location: "Visakhapatnam, Andhra Pradesh", role: "Fleet support, helicopter operations, UAV operations" },
    { name: "INS Shikra", location: "Mumbai, Maharashtra", role: "Helicopter operations, Seaking squadron, coastal security" },
    { name: "INS Rajali", location: "Arakkonam, Tamil Nadu", role: "Flying training school, basic and advanced pilot training" },
    { name: "INS Utkrosh", location: "Port Blair, Andaman", role: "Island territory operations, maritime surveillance, SAR" }
  ];

  const keySkills = [
    "Excellent hand-eye coordination and spatial awareness",
    "Strong analytical and quick decision-making abilities",
    "Leadership qualities and team management skills",
    "Physical fitness and mental resilience",
    "Mathematics and physics aptitude",
    "Communication skills in English and regional languages",
    "Stress management under pressure situations",
    "Technical understanding of aircraft systems",
    "Navigation and meteorology knowledge",
    "Maritime awareness and naval procedures"
  ];

  const specializations = [
    { stream: "Fighter Pilot", aircraft: "MiG-29K", role: "Aircraft carrier operations, air defense, strike missions" },
    { stream: "Maritime Pilot", aircraft: "P-8I Neptune", role: "Long-range patrol, anti-submarine warfare, surveillance" },
    { stream: "Helicopter Pilot", aircraft: "Sea King/Kamov", role: "Anti-submarine ops, search & rescue, ship-based operations" },
    { stream: "Transport Pilot", aircraft: "Dornier/Islander", role: "Logistics support, personnel transport, coastal patrol" },
    { stream: "UAV Pilot", aircraft: "Heron/Searcher", role: "Unmanned operations, intelligence gathering, remote piloting" },
    { stream: "Test Pilot", aircraft: "Various", role: "Flight testing, aircraft evaluation, experimental flying" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-[100px] sm:mt-0">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaPlane className="mx-auto text-6xl mb-6 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming an 
              <span className="text-blue-300"> Indian Navy Pilot</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to joining Naval Aviation and serving as the guardian of India's maritime frontiers from the skies
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Indian Navy Pilot Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is an Indian Navy Pilot?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  An Indian Navy Pilot is an officer in the Indian Navy who operates various aircraft including fighter jets, helicopters, maritime patrol aircraft, and transport planes. They are responsible for naval aviation operations, protecting India's maritime interests, and conducting operations from aircraft carriers and naval air stations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Navy pilots undergo rigorous training to master carrier-based operations, maritime warfare, anti-submarine operations, and search & rescue missions while serving as commissioned officers in the Indian Navy.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Aircraft carrier operations and deck landing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Maritime patrol and surveillance missions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Anti-submarine warfare operations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Search and rescue operations at sea
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Naval air defense and strike missions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Leadership and training of junior personnel
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Eligibility Criteria</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityData.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Entry Routes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">NDA:</span> After 12th standard, 4-year training at NDA + INA
                </div>
                <div className="text-black">
                  <span className="font-medium">CDS:</span> After graduation, direct entry to INA for 4 terms
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Selection Process</h2>
            </div>
            <div className="space-y-6">
              {selectionProcess.map((exam, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exam.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{exam.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{exam.papers}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700">{exam.marks}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{exam.nature}</span>
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-medium">{exam.qualifying}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Phases */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Training Journey</h2>
            </div>
            <div className="space-y-6">
              {trainingPhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{phase.phase}</h3>
                      <div className="flex items-center text-orange-600">
                        <FaClock className="mr-2" />
                        <span className="text-sm font-medium">{phase.duration}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <FaMapMarkerAlt className="mr-2 text-red-500" />
                        <span className="text-sm">{phase.location}</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700 text-sm">{phase.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aircraft Types */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaPlane className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Aircraft & Platforms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {aircraftTypes.map((aircraft, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{aircraft.type}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FaRocket className="text-teal-600 mr-3" />
                      <span className="text-sm text-gray-700"><strong>Aircraft:</strong> {aircraft.examples}</span>
                    </div>
                    <div className="flex items-start">
                      <FaShieldAlt className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Role:</strong> {aircraft.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Progression */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaChartLine className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Salary</h2>
            </div>
            <div className="space-y-4">
              {careerProgression.map((career, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{career.rank}</h3>
                    </div>
                    <div>
                      <div className="flex items-center text-indigo-600">
                        <FaClock className="mr-2" />
                        <span className="text-sm font-medium">{career.years}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center text-green-600">
                        <FaMoneyBillWave className="mr-2" />
                        <span className="text-sm font-bold">{career.salary}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-700">{career.responsibilities}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Naval Air Stations */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaAnchor className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Major Naval Air Stations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {navalAirStations.map((station, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{station.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-red-500 mr-3" />
                      <span className="text-sm text-gray-700">{station.location}</span>
                    </div>
                    <div className="flex items-start">
                      <FaShip className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{station.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Qualities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {keySkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-100">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-yellow-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialization Streams */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaHelicopter className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Pilot Specialization Streams</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{spec.stream}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FaPlane className="text-purple-600 mr-3" />
                      <span className="text-sm text-gray-700"><strong>Platform:</strong> {spec.aircraft}</span>
                    </div>
                    <div className="flex items-start">
                      <FaMedal className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700"><strong>Operations:</strong> {spec.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-center">
          <FaFlag className="mx-auto text-4xl text-white mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Serve the Nation from the Skies?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the elite fraternity of Indian Navy Pilots and protect India's maritime interests with honor, courage, and commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Explore More Careers
            </Link>
            <a 
              href="https://www.joinindiannavy.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-xl font-semibold hover:bg-blue-900 transition-colors"
            >
              Apply Now
              <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
