// Suggested code may be subject to a license. Learn more: ~LicenseLog:2198173977.
import React from 'react';
import { Users, GraduationCap, Search, HandHelping, Lightbulb, TrendingUp } from 'lucide-react';
import { SITE } from '../constants';

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
      icon: <GraduationCap size={24} className="text-white" />,
      title: 'Expert Guidance that Matters',
      description: 'Tap into the wisdom of top mentors and industry veterans. We don’t just advise — we empower you with clarity and confidence.',
    },
    {
      id: 2,
      icon: <Users size={24} className="text-white" />,
      title: 'Mentorship That’s Made for You',
      description: 'Every student is unique. That’s why our mentors walk with you, step by step, turning confusion into clarity and dreams into action plans.',
    },
    {
      id: 3,
      icon: <Search size={24} className="text-white" />,
      title: 'Tailored Consultation',
      description: 'Course? Country? Career path? We decode every option and help you make choices that align with your future, not just your present.',
    },
    {
      id: 4,
      icon: <HandHelping size={24} className="text-white" />, // Keep HandHelping for Admission Support
      title: 'Admission Support',
      description: 'From form-filling to follow-ups, we handle the stress so you can focus on success. Your dream college is now just a process away.',
    },
    {
      id: 5,
      icon: <Lightbulb size={24} className="text-white" />, // Keep Lightbulb for New Opportunity
      title: 'New Opportunity',
      description: 'Lorem ipsum dolor sit amet consectetur. Donec quis.',
    },
    {
      id: 6,
      icon: <TrendingUp size={24} className="text-white" />,
      title: 'Career Acceleration, Not Just Admission', // Keep BarChart2 or consider TrendingUp
      description: 'We go beyond the classroom. With skill-building insights and future-proof strategies, we prepare you to thrive in a changing world.',
    },
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center ">
          Your Dream. Our Mission.
        </h2>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
            Why Thousands Trust {SITE.name} {SITE.sub}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            At {SITE.name} {SITE.sub}, we’re not just an admission provider — we’re your academic allies, your
            career compass, and your go-to growth partners. Whether you’re chasing a top university
            seat or exploring future career paths, we make the journey smoother, smarter, and
            successful.</p>
        </div>
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