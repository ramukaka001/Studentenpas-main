import React from 'react';
import { Building2, ExternalLink } from 'lucide-react';

interface University {
  id: number;
  name: string;
  location: string;
  image: string;
  link?: string;
}

interface UniversityCardProps extends Omit<University, 'id'> {}

const UniversityCard: React.FC<UniversityCardProps> = ({ name, location, image, link }) => {
  return (
    <div className="bg-gray-800/60 border border-gray-700 hover:border-blue-500 rounded-2xl overflow-hidden shadow transition duration-300 ease-in-out">
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={`Campus of ${name}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-inner mr-3">
            <Building2 size={22} className="text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <p className="text-sm text-gray-400">{location}</p>
          </div>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg mt-4 transition"
          >
            <span>Know More</span>
            <ExternalLink size={16} className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

const universities: University[] = [
  {
    id: 1,
    name: 'IISc Bangalore',
    location: 'Bangalore, Karnataka',
    image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
    link: 'https://www.iisc.ac.in/',
  },
  {
    id: 2,
    name: 'University of Delhi',
    location: 'Delhi, India',
    image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg',
    link: 'https://www.du.ac.in/',
  },
  {
    id: 3,
    name: 'Jawaharlal Nehru University',
    location: 'New Delhi, India',
    image: 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg',
    link: 'https://www.jnu.ac.in/',
  },
];

const UniversitySection: React.FC = () => {
  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center italic mb-14">
          Explore Top Career Opportunities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {universities.map(({ id, ...props }) => (
            <UniversityCard key={id} {...props} />
          ))}
        </div>

        {/* <div className="flex justify-center mt-14">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 px-8 rounded-lg shadow-md transition"
            onClick={() => alert('Redirect to full list or external page')}
          >
            See More Universities
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default UniversitySection;