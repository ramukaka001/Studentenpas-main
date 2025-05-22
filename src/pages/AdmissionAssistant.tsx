import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PricingSection from '../components/PricingSection';
import axios from 'axios';
import { API_URL, SITE } from '../constants';

interface ServiceCardProps {
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, color }) => (
  <div className="relative">
    <div className={`${color} w-12 h-12 rounded-full absolute -left-6 top-1/2 transform -translate-y-1/2`}></div>
    <div className="bg-gray-800 rounded-lg p-6 ml-8">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const AdmissionAssistant: React.FC = () => {
  const services = [
    {
      title: 'Personalized Career Assessment',
      description: 'Leverage our AI-powered tools to discover the best-fit career paths aligned with your interests, skills, and aptitude.',
      color: 'bg-red-500',
    },
    {
      title: 'University & Course Matching',
      description: 'Navigate the vast landscape of universities and courses with our expert guidance, finding the perfect academic home for your aspirations.',
      color: 'bg-yellow-500',
    },
    {
      title: 'Application & Admission Support',
      description: 'Receive comprehensive assistance with crafting compelling applications, essays, and preparing for interviews to maximize your chances of acceptance.',
      color: 'bg-purple-500',
    },
    {
      title: 'Expert Mentorship',
      description: 'Connect with experienced professionals and mentors who provide invaluable insights and guidance on your chosen career path.',
      color: 'bg-blue-500',
    },
  ];

  const universities = [
    {
      name: 'IISc (Bangalore)',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg',
      logo: '🏛️',
    },
    {
      name: 'Delhi University',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg',
      logo: '🎓',
    },
    {
      name: 'JNU (New Delhi)',
      image: 'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg',
      logo: '🏫',
    },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });


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
      {/* Breadcrumb */}
      <div className="bg-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">All Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Guiding You to the Right Future
              </h1>
              <p className="text-gray-300 mb-8">
                Book a Personalized Career Session with Experts*
              </p>
              <p className="text-gray-400 mb-8">
                At {SITE.name} {SITE.sub}, we understand that navigating your academic and career future can feel daunting. Our personalized counselling services provide expert guidance, empowering you to make informed decisions and achieve your full potential. From choosing the right courses to securing admission in your dream university, we are with you every step of the way.
              </p>
              <div className="flex space-x-4">
                <Link to="/career-counselling" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition">
                  Book a Session
                </Link>
                <Link to="/career-counselling" className="border border-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-500 hover:bg-opacity-10 transition">
                  View Session Type
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <img
                src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg"
                alt="Students discussing"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white rounded-full p-8">
                <h2 className="text-2xl font-bold text-blue-600">Our Services</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            EXPLORE Our Counselling Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-48 relative">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                    {university.logo}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{university.name}</h3>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition">
                    Know More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md transition">
              See More
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="bg-blue-600 py-16">
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    placeholder="Mobile number"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  <textarea
                    placeholder="Message"
                    name="message"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <PricingSection />

      {/* Benefits Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">OUR BENEFITS</h2>
              <p className="text-blue-100">
                We're Here To Simplify Your Career Journey From AI-Powered Insights To Real Human Support – We Guide You Every Step Of The Way.
              </p>
              <Link to="/#pricing" className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
                View Plans
              </Link>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Students celebrating"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionAssistant;