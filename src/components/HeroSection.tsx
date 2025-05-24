import React from 'react';
import { Globe, Rocket } from 'lucide-react';
import StatCounter from './StatCounter';
import { SITE } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-900 pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Your Admission <span className="text-blue-500">,</span><br />
              Now Over Resposibility
            </h1>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Skip the confusion. {SITE.name} {SITE.sub} helps you discover your ideal path, choose the right college, and launch a future built on clarity, confidence, and opportunity.
            </p>
            <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 font-semibold text-white py-3 px-8 rounded-md text-lg transition transform hover:-translate-y-1 hover:shadow-xl">
              Get Your Admission Now
            </a>
          </div>

          {/* Right Content - Student Image */}
          <div className="lg:w-1/2 relative min-h-[490px]">
            <div className="absolute right-0 top-0 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-blue-600 via-blue-400 to-purple-500 rounded-full z-0 blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="/image.webp"
              alt="Smiling student with books"
              className="relative z-10 rounded-3xl shadow-lg max-h-[500px] mx-auto"
            />
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 right-1/4 opacity-70 animate-pulse">
          <Globe size={60} className="text-blue-400" />
        </div>
        <div className="absolute bottom-36 left-10 opacity-70 animate-bounce z-10">
          <Rocket size={50} className="text-purple-400" />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 border border-gray-800 rounded-xl p-6 bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-inner">
          <StatCounter value={99.99} label="Admission Success Rate" suffix="%" />
          <StatCounter value={100} label="Career Satisfaction Rate" suffix="%" />
          <StatCounter value={100000} suffix="+" label="Students Counselled" />
          <StatCounter value={100} suffix='+' label="Top Universities Covered" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;