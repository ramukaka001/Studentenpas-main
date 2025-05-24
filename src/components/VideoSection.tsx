// Suggested code may be subject to a license. Learn more: ~LicenseLog:1169724233.
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center italic mb-12">
          Get The Success With Over Counsellors
        </h2>

        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg"
            alt="Career guidance video"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-4 transition">
              <Play size={40} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;