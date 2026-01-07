"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { HiArrowLeft, HiCalendar, HiExternalLink, HiTag } from 'react-icons/hi';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ProfessionalUpdateDetailPage() {
  const [update, setUpdate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  useEffect(() => {
    if (slug) {
      fetchUpdateBySlug();
    }
  }, [slug]);

  const fetchUpdateBySlug = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/v1/professional-updates/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Update not found');
        }
        throw new Error('Failed to fetch update');
      }
      const data = await response.json();
      setUpdate(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'job': return 'bg-green-100 text-green-800 border-green-300';
      case 'internship': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'other': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-medium text-lg mb-4">Error: {error}</p>
            <button
              onClick={() => router.push('/professional-updates')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Updates
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!update) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Update not found</p>
            <button
              onClick={() => router.push('/professional-updates')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Updates
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push('/professional-updates')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-4 transition-all"
        >
          <HiArrowLeft className="text-lg" />
          Back to All Updates
        </button>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getCategoryColor(update.category)}`}>
                {update.category}
              </span>
              <div className="flex items-center text-blue-100 text-xs">
                <HiCalendar className="mr-1" />
                {formatDate(update.createdAt)}
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              {update.title}
            </h1>
          </div>

          {/* Content */}
          <div className="px-5 py-4">
            {/* Links */}
            {(update.applyLink || update.viewMoreLink) && (
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h2 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-blue-600 rounded"></span>
                  Important Links
                </h2>
                <div className="space-y-3">
                  {update.applyLink && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Apply Link:</p>
                      <a
                        href={update.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline block mb-2 break-all"
                      >
                        {update.applyLink}
                      </a>
                      <a
                        href={update.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-semibold"
                      >
                        Apply Now <HiExternalLink />
                      </a>
                    </div>
                  )}
                  {update.viewMoreLink && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">More Info:</p>
                      <a
                        href={update.viewMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline block mb-2 break-all"
                      >
                        {update.viewMoreLink}
                      </a>
                      <a
                        href={update.viewMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm font-semibold"
                      >
                        Know More <HiExternalLink />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Description */}
            {update.description && (
              <div className="mb-4">
                <h2 className="text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-blue-600 rounded"></span>
                  Description
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {update.description}
                </p>
              </div>
            )}

            {/* Footer */}
            {update.updatedAt && (
              <div className="pt-3 border-t text-xs text-gray-500">
                Last Updated: {formatDate(update.updatedAt)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
