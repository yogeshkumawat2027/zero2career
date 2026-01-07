"use client";
import { useState, useEffect } from 'react';
import { HiFilter, HiCalendar, HiExternalLink } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ProfessionalUpdatesPage() {
  const [updates, setUpdates] = useState([]);
  const [filteredUpdates, setFilteredUpdates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const categories = [
    { value: 'all', label: 'All Updates' },
    { value: 'job', label: 'Jobs' },
    { value: 'internship', label: 'Internships' },
    { value: 'other', label: 'Others' }
  ];

  useEffect(() => {
    fetchUpdates();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredUpdates(updates);
    } else {
      setFilteredUpdates(updates.filter(update => update.category === selectedCategory));
    }
  }, [selectedCategory, updates]);

  const fetchUpdates = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/v1/professional-updates`);
      if (!response.ok) throw new Error('Failed to fetch updates');
      const data = await response.json();
      setUpdates(data.data || []);
      setFilteredUpdates(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const truncateLink = (link, maxLength = 30) => {
    if (!link || link.length <= maxLength) return link;
    return link.substring(0, maxLength) + '...';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'job': return 'bg-green-100 text-green-800 border-green-300';
      case 'internship': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'other': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
            Professional Updates
          </h1>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <HiFilter className="text-xl md:text-2xl text-blue-600" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm md:text-base ${
                  selectedCategory === cat.value
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="mt-4 text-xs md:text-sm text-gray-600">
            Showing {filteredUpdates.length} update{filteredUpdates.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading updates...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-medium">Error: {error}</p>
            <button
              onClick={fetchUpdates}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Updates Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredUpdates.length > 0 ? (
              filteredUpdates.map((update) => (
                <div
                  key={update._id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
                >
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(update.category)} w-fit`}>
                        {update.category.toUpperCase()}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs md:text-sm">
                        <span className="mr-1">Created:</span>
                        <HiCalendar className="mr-1" />
                        {formatDate(update.createdAt)}
                      </div>
                    </div>

                    {/* Title - Clickable */}
                    <h3 
                      onClick={() => update.slug && router.push(`/professional-updates/${update.slug}`)}
                      className={`text-lg md:text-xl font-bold mb-3 line-clamp-2 ${
                        update.slug 
                          ? 'text-blue-600 cursor-pointer hover:underline' 
                          : 'text-gray-800'
                      }`}
                    >
                      {update.title}
                    </h3>

                    {/* Description - Flexible */}
                    {update.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 overflow-hidden flex-grow">
                        {update.description}
                      </p>
                    )}

                    {/* Links and Button Section - Fixed at Bottom */}
                    <div className="mt-auto">
                      {/* Links - Clickable */}
                      <div className="space-y-2 mb-3">
                        {update.applyLink && (
                          <div className="flex items-start gap-2">
                            <span className="text-xs font-semibold text-gray-600 min-w-fit">Apply:</span>
                            <a
                              href={update.applyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-800 hover:underline break-all"
                              title={update.applyLink}
                            >
                              {truncateLink(update.applyLink, 35)}
                            </a>
                          </div>
                        )}
                        {update.viewMoreLink && (
                          <div className="flex items-start gap-2">
                            <span className="text-xs font-semibold text-gray-600 min-w-fit">Know More:</span>
                            <a
                              href={update.viewMoreLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-800 hover:underline break-all"
                              title={update.viewMoreLink}
                            >
                              {truncateLink(update.viewMoreLink, 35)}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* View Details Button */}
                      {update.slug ? (
                        <button
                          onClick={() => router.push(`/professional-updates/${update.slug}`)}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-sm"
                        >
                          View Details
                          <HiExternalLink />
                        </button>
                      ) : (
                        <div className="w-full text-center text-xs text-gray-500 italic py-2">
                          Slug not available - please update this record
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No updates found for this category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
