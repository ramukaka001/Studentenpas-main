import React from 'react';
import { Users, Laptop, Network, HandHelping, LightbulbIcon, BarChart2 } from 'lucide-react';
import { Play } from 'lucide-react';
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

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role }) => {
  return (
    <div className="relative group">
      <img src={image} alt={name} className="w-full h-96 object-cover rounded-lg" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
        <p className="text-blue-400 text-sm mb-1">{role}</p>
        <h3 className="text-white text-xl font-semibold">{name}</h3>
      </div>
    </div>
  );
};

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <Users size={24} className="text-white" />,
      title: 'Expert Guidance',
 description: 'Receive personalized guidance from seasoned professionals.',
    },
    {
      icon: <Laptop size={24} className="text-white" />,
      title: 'Mentorship',
 description: 'Connect with mentors who have walked the path before you.',
    },
    {
      icon: <Network size={24} className="text-white" />,
      title: 'Consultation',
 description: 'Get in-depth consultations to clarify your academic goals.',
    },
    {
      icon: <HandHelping size={24} className="text-white" />,
      title: 'Admission Support',
 description: 'Navigate the complexities of college admissions with ease.',
    },
    {
      icon: <LightbulbIcon size={24} className="text-white" />,
      title: 'New Opportunity',
 description: 'Discover hidden opportunities that align with your aspirations.',
    },
    {
      icon: <BarChart2 size={24} className="text-white" />,
      title: 'Career Advancement',
      description: 'Lorem ipsum dolor sit amet consectetur. Donec quis.',
    },
  ];

  const teamMembers = [
    {
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      name: 'Rajiv Dixit',
      role: 'CEO',
    },
    {
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      name: 'Rajiv Dixit',
      role: 'CTO',
    },
    {
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg',
      name: 'Riya Dixit',
      role: 'Founder',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">About us</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
 At {SITE.name} {SITE.sub}, we are passionate about empowering students to achieve their academic
 and career dreams. We provide comprehensive college counseling services.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center uppercase mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* Our Startup Journey Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            Our Startup Journey
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
 From a small idea to a thriving community, our journey has been fueled by a
 commitment to helping students navigate the complex world of higher education.
          </p>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Startup Journey"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition">
                <Play className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            Our Team Member
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
 Meet the dedicated individuals behind {SITE.name} {SITE.sub}, committed to providing
 the best possible support for your academic journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;