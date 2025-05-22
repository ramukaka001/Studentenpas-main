import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

const ConsultationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    <section id="counsultation" className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-white bg-opacity-10 rounded-full blur-2xl animate-ping" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-white bg-opacity-10 rounded-full blur-2xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Text Section */}
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl font-bold italic leading-tight mb-6">
              Unlock Your College Dreams <br /> with Expert Guidance
            </h2>
            <p className="text-blue-100 mb-3 text-lg">
              Feeling uncertain about your future? Need help finding your ideal college or career path?
            </p>
            <p className="text-blue-100 mb-6">
              Our counselors are here to guide you — from goal setting to choosing the best institutions and opportunities that match your vision.
            </p>
          </div>

          {/* Right Form Section */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Book a Free Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;