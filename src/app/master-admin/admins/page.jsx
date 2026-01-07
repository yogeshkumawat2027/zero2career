"use client";
import AdminAuthWrapper from '@/components/AdminAuthWrapper';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { HiArrowLeft, HiPlus, HiTrash, HiUser } from 'react-icons/hi';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

function AdminManagement() {
  const router = useRouter();
  const { admin: currentAdmin } = useAdminAuth();
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/v1/admins`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setAdmins(data.data || []);
    } catch (error) {
      console.error('Error fetching admins:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const token = localStorage.getItem('adminToken');

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admin-register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Admin added successfully!');
        fetchAdmins();
        setFormData({ username: '', password: '' });
        setTimeout(() => {
          closeModal();
          setSuccess('');
        }, 1500);
      } else {
        setError(data.message || 'Failed to add admin');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    }
  };

  const handleDelete = async (id, username) => {
    if (currentAdmin?.id === id) {
      alert('You cannot delete your own account!');
      return;
    }

    if (!confirm(`Are you sure you want to delete admin "${username}"?`)) return;

    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/admins/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        fetchAdmins();
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to delete admin');
      }
    } catch (error) {
      alert('Error deleting admin');
    }
  };

  const openAddModal = () => {
    setFormData({ username: '', password: '' });
    setError('');
    setSuccess('');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setError('');
    setSuccess('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
         <div className="block lg:hidden h-[120px]">
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
                <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Admin Management</h1>
                <p className="text-gray-600 text-xs sm:text-sm">Manage administrator accounts</p>
              </div>
            </div>
            <button
              onClick={openAddModal}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base flex-shrink-0 w-full sm:w-auto justify-center"
            >
              <HiPlus className="text-lg sm:text-xl" />
              Add Admin
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {admins.map((adminUser) => (
              <div
                key={adminUser._id}
                className={`bg-white rounded-lg shadow-md p-4 sm:p-6 border-2 ${
                  currentAdmin?.id === adminUser._id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <HiUser className="text-xl sm:text-2xl text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">{adminUser.username}</h3>
                      {currentAdmin?.id === adminUser._id && (
                        <span className="text-xs text-purple-600 font-semibold">You</span>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        Created: {new Date(adminUser.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  {currentAdmin?.id !== adminUser._id && (
                    <button
                      onClick={() => handleDelete(adminUser._id, adminUser.username)}
                      className="text-red-600 hover:text-red-900 flex-shrink-0"
                    >
                      <HiTrash className="text-lg sm:text-xl" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && admins.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No admins found</p>
          </div>
        )}
      </div>

      {/* Add Admin Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-sm w-full">
            <div className="p-4 sm:p-5">
              <h2 className="text-xl font-bold mb-3">Add New Admin</h2>
              
              {error && (
                <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {success && (
                <div className="mb-3 p-2 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-600 text-sm">{success}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Add Admin
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

export default function AdminsPage() {
  return (
    <AdminAuthWrapper>
      <AdminManagement />
    </AdminAuthWrapper>
  );
}
