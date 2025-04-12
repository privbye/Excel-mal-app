import React from 'react';
import { Database } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Database className="h-8 w-8 mr-3" />
          <h1 className="text-2xl font-bold">Excel Column Mapper</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-indigo-200 transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-200 transition-colors">Documentation</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-200 transition-colors">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
