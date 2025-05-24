// Suggested code may be subject to a license. Learn more: ~LicenseLog:3264637771.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3298962115.
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CareerCard from './CareerCard';

const categories = [
  { id: 1, name: 'Engineering & Technology', icon: '🔧' },
  { id: 2, name: 'Management & Marketing', icon: '📊' },
  { id: 3, name: 'Healthcare', icon: '🏥' },
  { id: 4, name: 'Art', icon: '🎨' },
  { id: 5, name: 'Science', icon: '🔬' },
  { id: 6, name: 'Business Management', icon: '💼' },
  { id: 7, name: 'Aerospace & Aviation', icon: '✈️' },
  { id: 8, name: 'Healthcare', icon: '⚕️' },
  { id: 9, name: 'Law', icon: '⚖️' },
  { id: 10, name: 'Agriculture', icon: '🌾' },
];

const careerFields = [
  {
    id: 1,
    title: 'Engineering',
    description: 'Engineering deals with the design, building, and use of engines, machines, and structures. It is the application of science and math to solve problems.',
    image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg',
    color: 'bg-purple-500',
  },
  {
    id: 2,
    title: 'CUET',
    description: 'CUET (Common University Entrance Test) is an all-India test conducted by the National Testing Agency (NTA) for admission to various undergraduate, postgraduate, and research programs in universities across India.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    color: 'bg-pink-500',
  },
  {
    id: 3,
    title: 'IISER',
    description: 'IISER (Indian Institutes of Science Education and Research) are a group of premier autonomous public universities in India that offer integrated undergraduate and postgraduate programs in science and research.',
    image: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg',
    color: 'bg-green-500',
  },
];

const CategorySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center italic mb-10">
          Top Category Of Career Counselling
        </h2>

        {/* Search Bar */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-gray-800 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center space-x-2 transition"
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Career Field Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerFields.map((field) => (
            <CareerCard 
              key={field.id}
              title={field.title}
              description={field.description}
              image={field.image}
              color={field.color}
            />
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-10 rounded-md transition">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;