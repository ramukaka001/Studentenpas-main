import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 bg-opacity-95 py-4 px-6 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-blue-400 text-2xl font-semibold">{SITE.name}</span>
            <div className="bg-blue-500 px-2 py-1 rounded-md transform rotate-2">
              <span className="text-white text-2xl font-semibold">{SITE.sub}</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-blue-400 transition">Home</Link>
          <Link to="/career-counselling" className="text-white hover:text-blue-400 transition">Career Counselling</Link>
          <Link to="/admission-assistant" className="text-white hover:text-blue-400 transition">Admission Assistant</Link>
          {/* <Link to="/blog" className="text-white hover:text-blue-400 transition">Blog</Link> */}
          <Link to="/about-us" className="text-white hover:text-blue-400 transition">About Us</Link>
          <Link to="/contact" className="text-white hover:text-blue-400 transition">Contact Us</Link>
          <Link to="/signin" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition">
            Sign In
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 mt-4 rounded-lg py-4 px-6 absolute left-4 right-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-blue-400 transition">Home</Link>
            <Link to="/career-counselling" className="text-white hover:text-blue-400 transition">Career Counselling</Link>
            <Link to="/admission-assistant" className="text-white hover:text-blue-400 transition">Admission Assistant</Link>
            <Link to="/blog" className="text-white hover:text-blue-400 transition">Blog</Link>
            <Link to="/about-us" className="text-white hover:text-blue-400 transition">About Us</Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition">Contact Us</Link>
            <Link to="/signin" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition text-center">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;