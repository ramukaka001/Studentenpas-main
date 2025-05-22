import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SITE } from '../constants';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Feel free to reach out to us with any questions, inquiries, or to schedule
              a consultation. We're here to help you navigate your academic
              journey.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get In Touch</h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/2">
              <p className="text-gray-400 mb-8">
                Our team of experienced counselors is ready to provide personalized guidance
                and support. Connect with us today to discuss your goals and
                how we can help you achieve them.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Address</h3>
                    <p className="text-gray-400">
                      Address Flat NO-2, Ground Floor,<br />
                      Lakeside Residency Rukmani Colony<br />
                      Arecavenny Mandal Road, Udoor
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Phone No</h3>
                    <p className="text-gray-400">--</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email Id</h3>
                    <p className="text-gray-400">support@{(SITE.name + SITE.sub).toLowerCase()}.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact" className="lg:w-1/2">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Book A Consultation!</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <button className="flex items-center justify-between w-full">
                <span className="text-white font-medium">Do I need any prior knowledge of University to enroll in this course?</span>
                <span className="text-blue-500">+</span>
              </button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <button className="flex items-center justify-between w-full">
                <span className="text-white font-medium">How long does it take to complete the Admission?</span>
                <span className="text-blue-500">+</span>
              </button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <button className="flex items-center justify-between w-full">
                <span className="text-white font-medium">What format is the Counselling content delivered in?</span>
                <span className="text-blue-500">+</span>
              </button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <button className="flex items-center justify-between w-full">
                <span className="text-white font-medium">How do I access this?</span>
                <span className="text-blue-500">+</span>
              </button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <button className="flex items-center justify-between w-full">
                <span className="text-white font-medium">How is this counselling relevant to different industries?</span>
                <span className="text-blue-500">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to shape Your Future?</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of students who have transformed their careers with
            our expert guidance.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/#pricing" className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition">
              View Plans
            </a>
            <a href="#contact" className="border border-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-500 hover:bg-opacity-10 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;