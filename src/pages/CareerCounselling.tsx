import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '../constants';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color }) => (
  <div className={`${color} rounded-lg p-6 text-white`}>
    <div className="flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
    <p className="text-sm text-center">{description}</p>
  </div>
);

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image, color }) => (
  <div className={`rounded-xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-blue-500 transition`}>
    <div className={`${color} h-48 relative`}>
      <img src={image} alt={title} className="w-full h-full object-cover mix-blend-overlay" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <Link to="#counsel" className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded transition">
        Book Now →
      </Link>
    </div>
  </div>
);

const CareerCounselling: React.FC = () => {
  const services = [
    {
      title: 'Initial Assessment',
      description: 'Complete a comprehensive assessment to help us understand your interests, strengths, and career aspirations.',
      icon: <Rocket size={32} />,
      color: 'bg-red-400',
    },
    {
      title: 'Personalized Consultation',
      description: 'Meet with our expert counselors who will analyze your assessment and provide tailored recommendations.',
      icon: <Rocket size={32} />,
      color: 'bg-purple-500',
    },
    {
      title: 'Admission Support',
      description: 'Receive comprehensive assistance with applications and interview prep for your chosen institutions.',
      icon: <Rocket size={32} />,
      color: 'bg-green-500',
    },
  ];

  const categories = [
    {
      title: 'Engineering',
      description: 'Lorem ipsum dolor sit amet consectetur. Eleifend molestie eu arcu consequat.',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg',
      color: 'bg-blue-500',
    },
    {
      title: 'Arts',
      description: 'Lorem ipsum dolor sit amet consectetur. Eleifend molestie eu arcu consequat.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
      color: 'bg-yellow-500',
    },
    {
      title: 'Business',
      description: 'Lorem ipsum dolor sit amet consectetur. Eleifend molestie eu arcu consequat.',
      image: 'https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg',
      color: 'bg-red-500',
    },
    {
      title: 'Computer',
      description: 'Lorem ipsum dolor sit amet consectetur. Eleifend molestie eu arcu consequat.',
      image: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg',
      color: 'bg-purple-500',
    },
    {
      title: 'Humanities',
      description: 'Lorem ipsum dolor sit amet consectetur. Eleifend molestie eu arcu consequat.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      color: 'bg-pink-500',
    },
    {
      title: 'Medical',
      description: 'Lorem ipsum dolor sit amet consectetur. Eleifend molestie eu arcu consequat.',
      image: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg',
      color: 'bg-green-500',
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/consult/bookConsult`, formData);
      if (response.data.success) {
        alert('Thanks! We will contact you soon.');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        alert(response.data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error booking consultation:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            ELEVATE YOUR LEARNING EXPERIENCE
          </h1>
          <div className="text-center">
            <h2 className="text-3xl text-white mb-4">All Counseling Services</h2>
            <p className="text-green-300 text-xl mb-8">Q & A Session</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
              Book Slot
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          EXPLORE Our Counselling Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md transition">
            See More
          </button>
        </div>
      </div>

      {/* Consultation Form Section */}
      <div id="counseltation" className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">
                Empowering Your Future,<br />One Decision at a Time
              </h2>
              <p className="text-blue-100">
                Are you looking for career guidance? Do you have trouble getting placement?
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Book A Consultation!</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCounselling;
