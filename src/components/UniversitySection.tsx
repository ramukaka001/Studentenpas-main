import React from 'react';
import { Building2, ExternalLink } from 'lucide-react';

interface UniversityCardProps {
  name: string;
  location: string;
  image: string;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ name, location, image }) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-500 transition">
      <div className="h-40 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
            <Building2 size={20} className="text-gray-600" />
          </div>
          <div>
            <h3 className="text-white font-semibold">{name}</h3>
            <p className="text-gray-400 text-sm">{location}</p>
          </div>
        </div>
        <button className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 mt-4 rounded transition">
          <span>Know More</span>
          <ExternalLink size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const UniversitySection: React.FC = () => {
  const universities = [
    {
      id: 1,
      name: 'IISc (Bangalore)',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
    },
    {
      id: 2,
      name: 'Delhi University',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg',
    },
    {
      id: 3,
      name: 'JNU (New Delhi)',
      location: 'New Delhi',
      image: 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg',
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center italic mb-12">
          Top Career Opportunity
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university) => (
            <UniversityCard 
              key={university.id}
              name={university.name}
              location={university.location}
              image={university.image}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-10 rounded-md transition">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniversitySection;