"use client";
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import AdminAuthWrapper from '@/components/AdminAuthWrapper';
import { useRouter } from 'next/navigation';
import { HiNewspaper, HiBriefcase, HiUserGroup, HiLogout, HiChartBar } from 'react-icons/hi';
import { useState, useEffect } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

function MasterAdminDashboard() {
  const { admin, logout } = useAdminAuth();
  const router = useRouter();
  const [stats, setStats] = useState({
    govtUpdates: 0,
    professionalUpdates: 0,
    totalAdmins: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      const [govtRes, profRes, adminsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/v1/govt-updates`),
        fetch(`${API_BASE_URL}/api/v1/professional-updates`),
        fetch(`${API_BASE_URL}/api/v1/admins`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      const [govtData, profData, adminsData] = await Promise.all([
        govtRes.json(),
        profRes.json(),
        adminsRes.json()
      ]);

      setStats({
        govtUpdates: govtData.count || 0,
        professionalUpdates: profData.count || 0,
        totalAdmins: adminsData.count || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const menuItems = [
    {
      title: 'Govt Updates',
      description: 'Manage government job updates',
      icon: HiNewspaper,
      path: '/master-admin/govt-updates',
      color: 'blue',
      count: stats.govtUpdates
    },
    {
      title: 'Professional Updates',
      description: 'Manage professional job updates',
      icon: HiBriefcase,
      path: '/master-admin/professional-updates',
      color: 'indigo',
      count: stats.professionalUpdates
    },
    {
      title: 'Admin Management',
      description: 'Manage admin accounts',
      icon: HiUserGroup,
      path: '/master-admin/admins',
      color: 'purple',
      count: stats.totalAdmins
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-600',
        text: 'text-blue-600',
        hover: 'hover:bg-blue-100'
      },
      indigo: {
        bg: 'bg-indigo-50',
        icon: 'bg-indigo-600',
        text: 'text-indigo-600',
        hover: 'hover:bg-indigo-100'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-600',
        text: 'text-purple-600',
        hover: 'hover:bg-purple-100'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
       <div className="block lg:hidden h-[120px]">
          {/* top margin for small screen */}
          </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg lg:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Master Admin Dashboard</h1>
              <p className="text-blue-100 mt-1 text-sm sm:text-base">Welcome back, {admin?.username}</p>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <HiLogout className="text-lg sm:text-xl" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Stats Overview */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
            <HiChartBar className="text-xl sm:text-2xl" />
            Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {menuItems.map((item, index) => {
              const colors = getColorClasses(item.color);
              return (
                <div key={index} className={`${colors.bg} rounded-xl p-4 sm:p-6 border-2 border-transparent hover:border-${item.color}-300 transition-all`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-xs sm:text-sm font-medium">{item.title}</p>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">{item.count}</p>
                    </div>
                    <div className={`${colors.icon} rounded-full p-2 sm:p-3`}>
                      <item.icon className="text-xl sm:text-2xl text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Management Cards */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Management</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {menuItems.map((item, index) => {
              const colors = getColorClasses(item.color);
              return (
                <button
                  key={index}
                  onClick={() => router.push(item.path)}
                  className={`${colors.bg} ${colors.hover} rounded-xl p-4 sm:p-6 text-left transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200`}
                >
                  <div className={`${colors.icon} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
                    <item.icon className="text-xl sm:text-2xl text-white" />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-bold ${colors.text} mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MasterAdminPage() {
  return (
    <AdminAuthWrapper>
      <MasterAdminDashboard />
    </AdminAuthWrapper>
  );
}
