import React from 'react';
import { Globe, Rocket } from 'lucide-react';
import StatCounter from './StatCounter';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-900 pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white italic leading-tight mb-6">
              Lorem ipsum dolor sit <br />
              amet Imperdiet cursus <br />
              at eget purus
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Eleifend molestie eu arcu consequat at
              vestibulum. Etiam elementum nullam quis nulla diam ac.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md transition transform hover:-translate-y-1 hover:shadow-lg">
              Book Now
            </button>
          </div>

          {/* Right Content - Student Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
            <div className="bg-blue-500 rounded-full w-64 h-64 md:w-96 md:h-96 absolute right-0 z-0"></div>
            <img 
              src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg" 
              alt="Student" 
              className="relative z-10 rounded-3xl"
            />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-1/4 opacity-70 animate-pulse">
          <Globe size={60} className="text-blue-400" />
        </div>
        <div className="absolute bottom-40 left-10 opacity-70 animate-bounce">
          <Rocket size={50} className="text-purple-400" />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 border border-gray-800 rounded-lg p-4 bg-gray-900 bg-opacity-50">
          <StatCounter value={98} label="Admission Success Rate" suffix="%" />
          <StatCounter value={98} label="Career Counselling" suffix="%" />
          <StatCounter value={30000} label="Happy Students" />
          <StatCounter value={75} label="Top Health-Corps" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;