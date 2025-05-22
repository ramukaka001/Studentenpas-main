import React from 'react';
import { Link } from 'react-router-dom';

interface CareerPathProps {
  title: string;
  description: string;
  image: string;
  isReversed?: boolean;
}

const CareerPath: React.FC<CareerPathProps> = ({ title, description, image, isReversed = false }) => {
  return (
    <div className={`bg-gray-900 ${isReversed ? '' : 'bg-blue-600'} py-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
          {/* Image */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img src={image} alt={title} className="w-full h-auto rounded-lg" />
          </div>
          
          {/* Content */}
          <div className={`lg:w-2/3 ${isReversed ? 'lg:pr-12' : 'lg:pl-12'}`}>
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-gray-200 mb-6">{description}</p>
            <Link to="/career-counselling#book-now" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CareerPathSection: React.FC = () => {
  return (
    <>
      <CareerPath 
        title="Aviation" 
        description="Explore careers in the exciting field of aviation, including piloting, air traffic control, and aircraft maintenance. Reach for the skies with expert guidance." 
        image="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg"
        isReversed={true} 
      />
      <CareerPath 
        title="Engineering" 
        description="Discover the diverse world of engineering – from civil and mechanical to electrical and software. Build your future with insights into these innovative fields." 
        image="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg"
      />
      <CareerPath 
        title="Merchant Navy" 
        description="Set sail on a fulfilling career in the Merchant Navy, encompassing roles in navigation, engineering, and crew management. Navigate your path to success at sea." 
        image="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg"
        isReversed={true} 
      />
    </>
  );
};

export default CareerPathSection;