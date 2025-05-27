import React from "react";
import heroImage from "../assets/hero-girl.png"; // use your real image path

export default function Hero() {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Lorem ipsum dolor sit amet <br />
          Imperdiet cursus at eget purus
        </h1>
        <p className="text-gray-300 mb-6">
        Lorem ipsum dolor sit amet consectetur. Eleifend molestie eu arcu consequat at vestibulum. Etiam elementum nullam quis nulla diam ac
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>

      {/* Hero Image */}
      <div className="md:w-1/2">
        <img src={heroImage} alt="Girl holding books" className="w-full max-w-md mx-auto" />
      </div>
    </section>
  );
}
