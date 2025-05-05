import React from 'react';

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
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition">
              Book Now
            </button>
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
        title="Astronaut" 
        description="Lorem ipsum dolor sit amet consectetur. Tempus diam sit vitae pellentesque proin quis, felis morbi pulvinar rhoncus aliquam." 
        image="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg"
        isReversed={true} 
      />
      <CareerPath 
        title="Pilot" 
        description="Lorem ipsum dolor sit amet consectetur. Tempus diam sit vitae pellentesque proin quis, felis morbi pulvinar rhoncus aliquam." 
        image="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg"
      />
      <CareerPath 
        title="Merchant Navy" 
        description="Lorem ipsum dolor sit amet consectetur. Tempus diam sit vitae pellentesque proin quis. Sed convallis pulvinar commodo aliquam." 
        image="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg"
        isReversed={true} 
      />
    </>
  );
};

export default CareerPathSection;