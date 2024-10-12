import React from 'react';
import Header from '../common/Header';
import TodaysAppointments from './TodaysAppointments';
import PatientManagement from './PatientManagement';

const DoctorDashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctor Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TodaysAppointments />
          <PatientManagement />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;