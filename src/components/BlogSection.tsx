import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface BlogPostCardProps {
  image: string;
  date: string;
  title: string;
  author: string;
  isVideo?: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ image, date, title, author, isVideo = false }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-lg transition">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-red-600 rounded-full p-2 hover:bg-red-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
        <div className="absolute top-2 right-2 space-x-1">
          <button className="bg-white bg-opacity-20 p-1 rounded hover:bg-opacity-30 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <button className="bg-white bg-opacity-20 p-1 rounded hover:bg-opacity-30 transition">
            <MoreHorizontal size={16} className="text-white" />
          </button>
        </div>
        {date && (
          <div className="absolute bottom-2 left-2 bg-gray-900 bg-opacity-60 px-2 py-1 rounded text-xs text-white">
            {date}
          </div>
        )}
      </div>
      <div className="p-4 bg-gradient-to-b from-blue-600 to-blue-800">
        <div className="flex items-center mb-2">
          <div className="w-7 h-7 rounded-full bg-indigo-100 mr-2 overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-white">{author}</span>
          <div className="ml-auto flex items-center text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="text-xs ml-1">4.7</span>
          </div>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded transition">
          {isVideo ? 'Watch Now' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      date: '',
      title: 'Career Guidance Tips',
      author: 'Radhika Rao',
      isVideo: true,
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      date: '',
      title: 'How to Choose Your Major',
      author: 'Radhika Rao',
      isVideo: true,
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      date: '28 Nov 2024',
      title: 'Daily Post Fintech - Trial PXL',
      author: '',
      isVideo: false,
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      date: '28 Nov 2024',
      title: 'Daily Post Fintech - Trial PXL',
      author: '',
      isVideo: false,
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center italic mb-12">
          Our Blog
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard 
              key={post.id}
              image={post.image}
              date={post.date}
              title={post.title}
              author={post.author}
              isVideo={post.isVideo}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-10 rounded-md transition">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;