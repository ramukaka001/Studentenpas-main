import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <div className="bg-gray-900 py-20 relative">
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white opacity-20"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white italic mb-4">
          ACCESS THE FIRST LESSON <br />
          AND BUILD CAREER
        </h2>
        
        <p className="text-gray-400 mb-10">
          Sign up now to receive your first lesson absolutely free. Dive into the world
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/#pricing" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md transition">
            View Plans
          </a>
          <Link to="/contact" className="border border-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-500 hover:bg-opacity-10 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;