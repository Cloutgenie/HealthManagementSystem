import React from 'react';
import Header from '../common/Header';
import KeyMetrics from './KeyMetrics';
import UserManagement from './UserManagement';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KeyMetrics />
          <UserManagement />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;