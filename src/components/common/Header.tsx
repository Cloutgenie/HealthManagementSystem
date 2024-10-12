import React from 'react';
import { Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  const userName = "John Doe"; // This should come from authentication context

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, {userName}!
        </h1>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              3
            </span>
          </button>
          <button className="flex items-center space-x-2">
            <User className="h-6 w-6 text-gray-600" />
            <span className="text-gray-600">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;