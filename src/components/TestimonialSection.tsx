import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { SITE } from '../constants';

// Define the structure of a testimonial object
interface Testimonial {
  id: number;
  name: string;
  occupation: string;
  image: string;
  rating: number; // e.g. 4.8
}

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Meena Kumari',
    occupation: 'IT Developer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Rajesh Singh',
    occupation: 'Software Engineer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Anita Sharma',
    occupation: 'UX Designer',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    rating: 4.9,
  },
];

// Helper to render stars with half star support
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center space-x-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

      {hasHalfStar && (
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className="w-5 h-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  // Component to display an individual testimonial card
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-800 to-blue-900 rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={testimonial.image}
          alt={`Portrait of ${testimonial.name}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <button
            aria-label={`Play testimonial video of ${testimonial.name}`}
            className="bg-red-600 rounded-full p-3 hover:bg-red-700 transition"
          >
            <Play size={20} className="text-white" />
          </button>
        </div>
      </div>
      <div className="p-6 text-center text-white">
        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
        <p className="text-gray-300 text-sm mb-3">{testimonial.occupation}</p>
        <StarRating rating={testimonial.rating} />
        {/* Placeholder quote - replace with actual testimonial text */}
        <p className="mt-4 text-gray-200 italic">
          "{SITE.name} {SITE.sub} helped me navigate the complex college application process with ease and confidence. Highly recommended!"
        </p>
      </div>
    </div>
  );
};

const testimonialsPerPage = 3; // Number of testimonials to display per page

const TestimonialSection: React.FC = () => {
  // State to manage the current set of testimonials being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation handlers for previous and next sets of testimonials
  const goPrev = () =>
    setCurrentIndex((i) => (i === 0 ? testimonials.length - testimonialsPerPage : i - testimonialsPerPage));

  // Slice the testimonials array to show the current set
  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);
  // Handle wrap-around case if the slice goes beyond the end
  if (currentTestimonials.length < testimonialsPerPage && currentIndex !== 0) {
    currentTestimonials.push(...testimonials.slice(0, testimonialsPerPage - currentTestimonials.length));
  }

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> {/* Added relative positioning for absolute buttons */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mx-auto text-center">
          What Our Students Say
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl text-center mx-auto">
          Hear from people from diverse backgrounds sharing their experiences.
        </p>

        {/* Grid layout for displaying multiple testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"> {/* Added relative for internal positioning if needed */}
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
          {/* Navigation buttons for the carousel */}
          <button onClick={goPrev} aria-label="Previous testimonial" className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full focus:outline-none z-10">
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button onClick={() => setCurrentIndex((i) => (i + testimonialsPerPage) % testimonials.length)} aria-label="Next testimonial" className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full focus:outline-none z-10">
            <ChevronRight className="text-white" size={24} />
          </button>

        </div>

        {/* Pagination/Navigation Below Cards */}
        {/* <div className="mt-8 text-center">
          <button
            onClick={goNext}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Next Testimonials
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialSection;