import React from 'react';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-blue-300 text-2xl font-semibold">{SITE.name}</span>
              <div className="bg-blue-500 px-2 py-1 rounded-md transform rotate-2">
                <span className="text-white text-2xl font-semibold">{SITE.sub}</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm mb-4">
            {SITE.name} {SITE.sub} is a college counselling website dedicated to helping students find the right educational path.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-blue-300 hover:text-white transition">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-blue-300 hover:text-white transition">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-blue-300 hover:text-white transition">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-4">Shop All</h4>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li><Link to="/about" className="text-blue-200 hover:text-white transition">About Us</Link></li>
                  <li><Link to="#" className="text-blue-200 hover:text-white transition">Course</Link></li>
                  <li><Link to="#" className="text-blue-200 hover:text-white transition">Counselor</Link></li>
                  <li><Link to="#" className="text-blue-200 hover:text-white transition">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/career-counselling" className="text-blue-200 hover:text-white transition">Counselor</Link></li>
                  <li><Link to="#" className="text-blue-200 hover:text-white transition">Terms & Condition</Link></li>
                  <li><Link to="#" className="text-blue-200 hover:text-white transition">FAQ</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3 - Links */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/contact" className="text-blue-200 hover:text-white transition">Contact</Link></li>
                  <li><Link to="/blog" className="text-blue-200 hover:text-white transition">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">New Updates In Our Newsletters!</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-blue-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 flex-grow"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-blue-700 border-dashed"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-blue-200 text-sm">
          © {new Date().getFullYear()} {SITE.name}{SITE.sub}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;