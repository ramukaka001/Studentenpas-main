import React from 'react';
import { Users, Laptop, Network, HandHelping, BarChart2, LightbulbIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 border border-blue-900 rounded-lg p-6 hover:border-blue-500 transition">
      <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white uppercase text-center mb-3">{title}</h3>
      <p className="text-gray-400 text-center text-sm">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <Users size={24} className="text-white" />,
      title: 'Expert Guidance',
      description: 'entrepreneur and AI expert, Jonathan Richardson',
    },
    {
      id: 2,
      icon: <Laptop size={24} className="text-white" />,
      title: 'Mentorship',
      description: 'Lorem ipsum dolor sit amet consectetur. Donec quis.',
    },
    {
      id: 3,
      icon: <Network size={24} className="text-white" />,
      title: 'Consultation',
      description: 'Lorem ipsum dolor sit amet consectetur. Donec quis.',
    },
    {
      id: 4,
      icon: <HandHelping size={24} className="text-white" />,
      title: 'Admission Support',
      description: 'Lorem ipsum dolor sit amet consectetur. Donec quis.',
    },
    {
      id: 5,
      icon: <LightbulbIcon size={24} className="text-white" />,
      title: 'New Opportunity',
      description: 'Lorem ipsum dolor sit amet consectetur. Donec quis.',
    },
    {
      id: 6,
      icon: <BarChart2 size={24} className="text-white" />,
      title: 'Career Advancement',
      description: 'Lorem ipsum dolor sit amet consectetur. Donec quis.',
    },
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center uppercase mb-16">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;