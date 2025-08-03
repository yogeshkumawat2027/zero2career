"use client";
import '../styles/navbar.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiHome, HiBriefcase, HiInformationCircle, HiPhone, HiStar, HiMagnifyingGlass } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';
import { careersList } from '../app/careers/careers-data';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search suggestions
  useEffect(() => {
    if (search.trim().length === 0) {
      setSuggestions([]);
      return;
    }
    const filtered = careersList.filter(career =>
      career.title && career.title.toLowerCase().includes(search.trim().toLowerCase())
    );
    setSuggestions(filtered);
  }, [search]);

  // Keyboard navigation for search
  const handleKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      setActiveIndex(prev => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      setActiveIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        const selected = suggestions[activeIndex];
        setSearch('');
        setSuggestions([]);
        setActiveIndex(-1);
        router.push(selected.path);
      }
    }
  };

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out navbar-section
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900'
      }
    `} suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning={true}>
        <div className="flex justify-between items-center h-16" suppressHydrationWarning={true}>
          {/* Logo Section */}
          <div className="flex items-center gap-3 group">
            <Link href="/" className="flex items-center gap-2">
              <span className="relative w-10 h-10 block">
                <Image
                  src={require('./z2clogo.jpg')}
                  alt="Zero2Career Logo"
                  width={40}
                  height={40}
                  className="rounded-xl shadow-lg object-cover"
                  priority
                />
              </span>
              <span className={`no-underline text-xl font-bold tracking-tight transition-colors duration-200 ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Zero2Career</span>
            </Link>
          </div>

      {/* Desktop Navigation */}
      <div className="hidden custom885:flex items-center w-full">
        {/* Nav links to the right of logo with good gap */}
        <div className="flex items-center gap-6 ml-10">
          {[ 
            { href: '/', label: 'Home' },
            { href: '/careers', label: 'Careers' },
            { href: '/aboutus', label: 'About' },
            { href: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                px-3 py-2 rounded-lg font-medium transition-all duration-200 relative overflow-hidden group
                ${isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-lg"></div>
            </Link>
          ))}
        </div>
        {/* Centered Search Bar (desktop only) */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md ">
            <input
              type="text"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setActiveIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search careers..."
              className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-800 shadow-sm bg-white"
              autoComplete="off"
            />
            <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
            {suggestions.length > 0 && (
              <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto border border-gray-200">
                {suggestions.map((career, idx) => (
                  <div
                    key={career.path || career.link || career.id || idx}
                    className={`px-4 py-2 cursor-pointer border-b border-gray-100 transition-colors duration-200 ${activeIndex === idx ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 text-gray-900'}`}
                    onClick={() => {
                      setSearch('');
                      setSuggestions([]);
                      setActiveIndex(-1);
                      router.push(career.path || career.link || `/careers/${career.id}`);
                    }}
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    {career.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Premium Button */}
        <Link
          href="/premium"
          className="ml-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 relative overflow-hidden group flex items-center gap-2"
        >
          <HiStar className="text-lg relative z-10" />
          <span className="relative z-10">Premium</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-0"></div>
        </Link>
      </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`
              custom885:hidden p-2 rounded-lg transition-colors duration-200
              ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}
            `}
          >
            <div className="w-6 h-6 relative">
              <span className={`
                absolute h-0.5 w-6 bg-current transform transition-all duration-300
                ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}
              `}></span>
              <span className={`
                absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
              `}></span>
              <span className={`
                absolute h-0.5 w-6 bg-current transform transition-all duration-300
                ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}
              `}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        custom885:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {/* Mobile Nav Links */}
            {[
              { href: '/', label: 'Home', icon: HiHome },
              { href: '/careers', label: 'Careers', icon: HiBriefcase },
              { href: '/aboutus', label: 'About', icon: HiInformationCircle },
              { href: '/contact', label: 'Contact', icon: HiPhone }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 
                    transition-all duration-200 transform hover:translate-x-1
                    ${isMenuOpen ? 'animate-slideIn' : ''}
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="text-lg" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}

            {/* Mobile Premium Button */}
            <Link
              href="/premium"
              onClick={() => setIsMenuOpen(false)}
              className={`
                flex items-center gap-3 px-4 py-3 mx-2 mt-4 mb-2 bg-gradient-to-r from-orange-500 to-red-500 
                text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 
                transition-all duration-200
                ${isMenuOpen ? 'animate-slideIn' : ''}
              `}
              style={{ animationDelay: '400ms' }}
            >
              <HiStar className="text-lg" />
              <span>Premium Career Help</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Search Bar always visible below navbar */}
      <div className="block custom885:hidden w-full bg-white py-2 px-4 shadow z-[999]">
        <div className="relative w-full max-w-xs mx-auto">
          <input
            type="text"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search careers..."
            className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-800 shadow-sm bg-white"
            autoComplete="off"
          />
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
          {suggestions.length > 0 && (
            <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto border border-gray-200">
              {suggestions.map((career, idx) => (
                <div
                  key={career.path || career.link || career.id || idx}
                  className={`px-4 py-2 cursor-pointer border-b border-gray-100 transition-colors duration-200 ${activeIndex === idx ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 text-gray-900'}`}
                  onClick={() => {
                    setSearch('');
                    setSuggestions([]);
                    setActiveIndex(-1);
                    router.push(career.path || career.link || `/careers/${career.id}`);
                  }}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  {career.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 885px) {
          .custom885\:flex { display: flex !important; }
          .custom885\:hidden { display: none !important; }
        }
        @media (max-width: 884px) {
          .custom885\:flex { display: none !important; }
          .custom885\:hidden { display: block !important; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
