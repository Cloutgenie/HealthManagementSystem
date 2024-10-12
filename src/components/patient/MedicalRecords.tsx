import React from 'react';
import { FileText, Download } from 'lucide-react';

const MedicalRecords: React.FC = () => {
  const records = [
    { date: '2023-03-15', doctor: 'Dr. Jane Smith', type: 'Annual Checkup' },
    { date: '2023-02-01', doctor: 'Dr. John Doe', type: 'Blood Test Results' },
    { date: '2022-11-20', doctor: 'Dr. Emily Brown', type: 'X-Ray Report' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Medical Records</h2>
      <div className="space-y-4">
        {records.map((record, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center">
              <FileText className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <p className="font-medium">{record.type}</p>
                <p className="text-sm text-gray-600">{record.date} - {record.doctor}</p>
              </div>
            </div>
            <button className="flex items-center text-blue-500 hover:text-blue-700">
              <Download className="w-4 h-4 mr-1" />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecords;