import React from 'react';
import { Link } from 'react-router-dom';

interface CareerCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

const CareerCard: React.FC<CareerCardProps> = ({ title, description, image, color }) => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-gray-700 bg-gray-800 transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className={`${color} h-40 overflow-hidden`}>
        <img src={image} alt={title} className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <Link to="/career-counselling#book-now" className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1.5 px-3 rounded flex items-center gap-2 transition">
          Book Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;