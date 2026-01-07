"use client";
import AdminAuthWrapper from '@/components/AdminAuthWrapper';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiArrowLeft, HiPlus, HiPencil, HiTrash, HiSearch } from 'react-icons/hi';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

function ProfessionalUpdatesManagement() {
  const router = useRouter();
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingUpdate, setEditingUpdate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    category: 'job',
    title: '',
    description: '',
    applyLink: '',
    viewMoreLink: ''
  });

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/professional-updates`);
      const data = await response.json();
      setUpdates(data.data || []);
    } catch (error) {
      console.error('Error fetching updates:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');

    try {
      const url = editingUpdate
        ? `${API_BASE_URL}/api/v1/professional-updates/${editingUpdate.slug}`
        : `${API_BASE_URL}/api/v1/professional-updates`;
      
      const method = editingUpdate ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        fetchUpdates();
        closeModal();
      }
    } catch (error) {
      console.error('Error saving update:', error);
    }
  };

  const handleDelete = async (slug) => {
    if (!confirm('Are you sure you want to delete this update?')) return;

    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/professional-updates/${slug}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        fetchUpdates();
      }
    } catch (error) {
      console.error('Error deleting update:', error);
    }
  };

  const openAddModal = () => {
    setEditingUpdate(null);
    setFormData({
      category: 'job',
      title: '',
      description: '',
      applyLink: '',
      viewMoreLink: ''
    });
    setShowModal(true);
  };

  const openEditModal = (update) => {
    setEditingUpdate(update);
    setFormData({
      category: update.category,
      title: update.title,
      description: update.description || '',
      applyLink: update.applyLink || '',
      viewMoreLink: update.viewMoreLink || ''
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingUpdate(null);
  };

  const filteredUpdates = updates.filter(update =>
    update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    update.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
       <div className="block lg:hidden h-[100px]">
          {/* top margin for small screen */}
          </div>

      {/* Header */}
      <div className="bg-white shadow lg:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => router.push('/master-admin')}
                className="text-blue-600 hover:text-blue-800 flex-shrink-0"
              >
                <HiArrowLeft className="text-xl sm:text-2xl" />
              </button>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Professional Updates Management</h1>
                <p className="text-gray-600 text-xs sm:text-sm">Manage professional job updates</p>
              </div>
            </div>
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base flex-shrink-0 w-full sm:w-auto justify-center"
            >
              <HiPlus className="text-lg sm:text-xl" />
              Add Update
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search updates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Updates List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Title</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Category</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Created</th>
                  <th className="px-3 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUpdates.map((update) => (
                  <tr key={update._id} className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 max-w-xs">{update.title}</div>
                      <div className="text-sm text-gray-500 line-clamp-1 max-w-xs">{update.description}</div>
                    </td>
                    <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                        {update.category}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {new Date(update.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-3 sm:px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                      <button
                        onClick={() => openEditModal(update)}
                        className="text-indigo-600 hover:text-indigo-900 mr-3 sm:mr-4"
                      >
                        <HiPencil className="inline text-lg sm:text-xl" />
                      </button>
                      <button
                        onClick={() => handleDelete(update.slug)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <HiTrash className="inline text-lg sm:text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-5">
              <h2 className="text-xl font-bold mb-3">
                {editingUpdate ? 'Edit Update' : 'Add New Update'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    required
                  >
                    <option value="job">Job</option>
                    <option value="internship">Internship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="Enter update title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="Enter detailed description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Apply Link</label>
                  <input
                    type="url"
                    value={formData.applyLink}
                    onChange={(e) => setFormData({ ...formData, applyLink: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="https://example.com/apply"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">View More Link</label>
                  <input
                    type="url"
                    value={formData.viewMoreLink}
                    onChange={(e) => setFormData({ ...formData, viewMoreLink: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="https://example.com/details"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingUpdate ? 'Update' : 'Create'}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProfessionalUpdatesPage() {
  return (
    <AdminAuthWrapper>
      <ProfessionalUpdatesManagement />
    </AdminAuthWrapper>
  );
}
