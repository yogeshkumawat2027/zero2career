import Link from 'next/link';
import React from 'react';
import { 
  FaMusic, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaClipboardCheck, 
  FaBookOpen, 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaMoneyBillWave, 
  FaUsers, 
  FaMicrophone, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaChartLine,
  FaGuitar,
  FaHeadphones,
  FaHandshake,
  FaUserTie,
  FaCrown,
  FaRecordVinyl,
  FaVolumeUp,
  FaStar,
  FaLightbulb,
  FaVideo,
  FaInstagram,
  FaYoutube,
  FaSpotify
} from 'react-icons/fa';

export const metadata = {
  title: "Singer & Musician Career Guide 2025 | Music Industry, Skills & Income | Zero2Career",
  description: "Complete Singer & Musician career guide covering music education, skill development, performance opportunities, recording industry, income streams, and career growth in music industry.",
  keywords: "Singer career, Musician career, music industry jobs, vocal training, musical instruments, recording artist, live performance, music production, entertainment industry, music education",
  authors: [{ name: "Zero2Career" }],
  creator: "Zero2Career",
  publisher: "Zero2Career",
  alternates: {
    canonical: "https://zero2career.in/careers/singer-musician"
  },
  openGraph: {
    title: "Become a Singer & Musician - Complete Music Career Guide 2025",
    description: "Discover everything about Singer & Musician career: music education, skill development, performance opportunities, recording industry insights, and income potential in music.",
    url: "https://zero2career.in/careers/singer-musician",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Singer & Musician Career Guide - Zero2Career"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Singer & Musician - Complete Music Career Guide 2025",
    description: "Comprehensive guide to Singer & Musician career: music education, performance skills, recording opportunities & income streams in entertainment industry.",
    images: ["https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"],
  }
};

export default function SingerMusicianPage() {
  const skillRequirements = [
    { icon: FaMicrophone, title: "Vocal Skills", detail: "Strong singing voice, breath control, pitch accuracy" },
    { icon: FaGuitar, title: "Musical Instruments", detail: "Proficiency in one or more instruments" },
    { icon: FaBookOpen, title: "Music Theory", detail: "Understanding of scales, chords, composition" },
    { icon: FaUsers, title: "Performance Skills", detail: "Stage presence, audience engagement, confidence" }
  ];

  const musicGenres = [
    { 
      genre: "Classical Music", 
      duration: "8-12 years training", 
      skills: "Formal training, music theory",
      venues: "Concert halls, Opera houses",
      difficulty: "Advanced Technical Skills",
      income: "₹50K - ₹5L per performance"
    },
    { 
      genre: "Bollywood Playback", 
      duration: "5-10 years experience", 
      skills: "Versatile voice, Hindi proficiency",
      venues: "Recording studios, Film industry",
      difficulty: "High Competition",
      income: "₹25K - ₹10L per song"
    },
    { 
      genre: "Popular Music (Pop/Rock)", 
      duration: "3-7 years development", 
      skills: "Contemporary style, songwriting",
      venues: "Concerts, Clubs, Festivals",
      difficulty: "Creative & Commercial",
      income: "₹20K - ₹2L per show"
    },
    { 
      genre: "Folk & Regional", 
      duration: "Cultural immersion", 
      skills: "Traditional knowledge, authenticity",
      venues: "Cultural events, Folk festivals",
      difficulty: "Cultural Expertise",
      income: "₹15K - ₹1L per event"
    }
  ];

  const careerHierarchy = [
    { rank: "Amateur Performer", years: "0-2 years", salary: "₹5,000 - ₹25,000/month", level: "Entry Level" },
    { rank: "Professional Artist", years: "2-5 years", salary: "₹25,000 - ₹75,000/month", level: "Professional Level" },
    { rank: "Established Performer", years: "5-8 years", salary: "₹75,000 - ₹2,00,000/month", level: "Established Level" },
    { rank: "Recording Artist", years: "8-12 years", salary: "₹2,00,000 - ₹5,00,000/month", level: "Recording Level" },
    { rank: "Popular Artist", years: "12-15 years", salary: "₹5,00,000 - ₹15,00,000/month", level: "Popular Level" },
    { rank: "Celebrity Musician", years: "15-20 years", salary: "₹15,00,000 - ₹50,00,000/month", level: "Celebrity Level" },
    { rank: "Legendary Artist", years: "20+ years", salary: "₹50,00,000+ /month", level: "Legendary Status" }
  ];

  const essentialSkills = [
    "Vocal Training & Technique",
    "Musical Instrument Mastery", 
    "Music Theory & Composition",
    "Stage Performance & Presence",
    "Recording Studio Experience",
    "Music Production Basics",
    "Songwriting & Lyrics",
    "Audience Engagement",
    "Music Business Knowledge",
    "Digital Marketing & Social Media",
    "Collaboration & Networking",
    "Live Performance Management"
  ];

  const learningPhases = [
    { phase: "Foundation Training", duration: "1-2 years", location: "Music School/Private Tutor", focus: "Basic vocal training, instrument learning, music theory fundamentals" },
    { phase: "Skill Development", duration: "2-3 years", location: "Advanced Classes/Workshops", focus: "Advanced techniques, performance skills, repertoire building" },
    { phase: "Performance Experience", duration: "1-2 years", location: "Local Venues/Events", focus: "Live performances, stage confidence, audience interaction" },
    { phase: "Recording & Production", duration: "6-12 months", location: "Recording Studios", focus: "Studio recording, music production, professional sound quality" },
    { phase: "Industry Networking", duration: "Ongoing", location: "Music Industry Events", focus: "Building connections, collaboration opportunities, career advancement" },
    { phase: "Professional Growth", duration: "Lifetime", location: "Various Platforms", focus: "Continuous learning, style evolution, business development" }
  ];

  const incomeStreams = [
    { stream: "Live Performances", responsibility: "Concerts, festivals, private events, club performances" },
    { stream: "Recording & Streaming", responsibility: "Album sales, streaming royalties, digital distribution" },
    { stream: "Music Licensing", responsibility: "Film soundtracks, TV commercials, brand partnerships" },
    { stream: "Teaching & Workshops", responsibility: "Music lessons, masterclasses, educational content" },
    { stream: "Session Work", responsibility: "Studio recordings, backup vocals, instrumental sessions" },
    { stream: "Brand Endorsements", responsibility: "Product partnerships, sponsored content, collaborations" }
  ];

  const musicEducation = [
    "Bachelor of Music (B.Mus)",
    "Master of Music (M.Mus)", 
    "Diploma in Music",
    "Certificate Courses in Vocals",
    "Classical Music Training",
    "Contemporary Music Programs",
    "Music Production Courses",
    "Sound Engineering",
    "Music Business & Management",
    "Digital Music Marketing"
  ];

  const performanceVenues = [
    { venue: "Concert Halls & Auditoriums", description: "Large-scale performances, classical concerts, formal presentations" },
    { venue: "Music Festivals", description: "Multi-day events, diverse audiences, networking opportunities" },
    { venue: "Clubs & Bars", description: "Intimate settings, regular gigs, building local fanbase" },
    { venue: "Recording Studios", description: "Professional recordings, collaborations, session work" },
    { venue: "Digital Platforms", description: "YouTube, Spotify, social media, online concerts" },
    { venue: "Private Events", description: "Weddings, corporate events, parties, high-paying opportunities" }
  ];

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-rose-50 to-orange-100 mt-[100px] sm:mt-0">
      {/* Mobile Spacing */}
      <div className="block lg:hidden h-4"></div>
      
      {/* Hero Section */}
      <div className="w-full relative bg-gradient-to-r from-rose-900 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaMusic className="mx-auto text-6xl mb-6 text-rose-300" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Complete Guide to Becoming a 
              <span className="text-rose-300"> Singer & Musician</span>
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive roadmap to building a successful music career and touching hearts through the power of melody and rhythm
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What is Singer & Musician Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FaInfoCircle className="text-3xl text-rose-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">What is a Singer & Musician?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A Singer & Musician is a creative professional who expresses emotions, stories, and ideas through music and vocal performance. They create, interpret, and perform musical compositions across various genres, connecting with audiences through the universal language of music.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Musicians combine technical skill, artistic expression, and business acumen to build sustainable careers in the entertainment industry, whether as solo artists, band members, or collaborative performers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Create and perform original music
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Engage and entertain audiences
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Record albums and singles
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Collaborate with other artists
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    Build and maintain fanbase
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Skills & Requirements */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaClipboardCheck className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Skills & Requirements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillRequirements.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-rose-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <item.icon className="text-4xl text-rose-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Getting Started Tips</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-black">
                  <span className="font-medium">Practice:</span> Daily vocal and instrumental practice
                </div>
                <div className="text-black">
                  <span className="font-medium">Education:</span> Formal or informal music training
                </div>
                <div className="text-black">
                  <span className="font-medium">Performance:</span> Regular live performance experience
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Music Genres & Opportunities */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-purple-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Music Genres & Career Paths</h2>
            </div>
            <div className="space-y-6">
              {musicGenres.map((genre, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{genre.genre}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{genre.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm">{genre.skills}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-700 text-sm">{genre.venues}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{genre.difficulty}</span>
                    </div>
                    <div>
                      <span className="text-xs text-green-600 font-medium">{genre.income}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Musical Skills */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-3xl text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Musical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {essentialSkills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Music Education Options */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaBookOpen className="text-3xl text-teal-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Music Education & Training Options</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {musicEducation.map((education, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-3 border border-teal-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <FaCheckCircle className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{education}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Development Path */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaUsers className="text-3xl text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Development & Learning Path</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Follow this comprehensive learning path to develop your musical career. The journey combines formal education, practical experience, and continuous skill development to build a sustainable music career.
            </p>
            <div className="space-y-4">
              {learningPhases.map((phase, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-2" />
                      <span className="text-gray-700 font-medium">{phase.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-blue-600 mr-2" />
                      <span className="text-gray-700 text-sm">{phase.location}</span>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">{phase.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Venues */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaVolumeUp className="text-3xl text-indigo-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Performance Venues & Opportunities</h2>
            </div>
            <div className="space-y-4">
              {performanceVenues.map((venue, index) => (
                <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaCrown className="text-indigo-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{venue.venue}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{venue.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Income Streams */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaMoneyBillWave className="text-3xl text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Multiple Income Streams</h2>
            </div>
            <div className="space-y-4">
              {incomeStreams.map((stream, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
                  <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex items-center">
                      <FaRecordVinyl className="text-emerald-600 mr-3" />
                      <h3 className="text-lg font-bold text-gray-800">{stream.stream}</h3>
                    </div>
                    <div>
                      <p className="text-gray-700">{stream.responsibility}</p>
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
              <FaChartLine className="text-3xl text-pink-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Career Progression & Income Potential</h2>
            </div>
            <div className="overflow-x-auto">
              <div className="space-y-4">
                {careerHierarchy.map((position, index) => (
                  <div key={index} className={`rounded-xl p-6 border ${index === 0 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' : index === careerHierarchy.length - 1 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200'}`}>
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{position.rank}</h3>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="text-pink-600 mr-2" />
                        <span className="text-gray-700">{position.years}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMoneyBillWave className="text-green-600 mr-2" />
                        <span className="text-gray-700 font-medium">{position.salary}</span>
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          position.level === 'Entry Level' ? 'bg-green-200 text-green-800' :
                          position.level === 'Legendary Status' ? 'bg-purple-200 text-purple-800' :
                          'bg-blue-200 text-blue-800'
                        }`}>
                          {position.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaTrophy className="text-3xl text-yellow-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Musical Career Development Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Foundation Building (Years 1-2)</h3>
                  <p className="text-gray-600">Learn basic musical skills, vocal training, instrument proficiency, music theory</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Skill Development (Years 2-4)</h3>
                  <p className="text-gray-600">Advanced training, performance experience, repertoire building, style development</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Professional Entry (Years 4-6)</h3>
                  <p className="text-gray-600">Regular performances, recording experience, industry networking, fanbase building</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Career Establishment (Years 6-10)</h3>
                  <p className="text-gray-600">Brand building, multiple income streams, collaborations, industry recognition</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Success & Legacy (10+ Years)</h3>
                  <p className="text-gray-600">Artistic excellence, commercial success, mentorship, lasting impact on music industry</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <FaExternalLinkAlt className="text-3xl text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Essential Resources & Platforms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Digital Platforms</h3>
                <div className="space-y-3">
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200 hover:shadow-md transition-shadow group">
                    <FaYoutube className="text-red-600 mr-3 group-hover:text-red-800" />
                    <div>
                      <div className="font-medium text-gray-800">YouTube</div>
                      <div className="text-sm text-gray-600">Video content, music videos, tutorials, audience building</div>
                    </div>
                  </a>
                  <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow group">
                    <FaSpotify className="text-green-600 mr-3 group-hover:text-green-800" />
                    <div>
                      <div className="font-medium text-gray-800">Spotify</div>
                      <div className="text-sm text-gray-600">Music streaming, playlist placement, royalties</div>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:shadow-md transition-shadow group">
                    <FaInstagram className="text-purple-600 mr-3 group-hover:text-purple-800" />
                    <div>
                      <div className="font-medium text-gray-800">Instagram</div>
                      <div className="text-sm text-gray-600">Visual content, fan engagement, behind-the-scenes</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Success Strategy</h3>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Practice consistently and develop your unique style</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Perform regularly to build confidence and experience</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Network with industry professionals and other musicians</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Learn the business side of music industry</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Build strong online presence and engage with fans</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors shadow-lg">
            <FaArrowLeft className="mr-2" />
            <Link href="/careers">
              Back to Careers
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
