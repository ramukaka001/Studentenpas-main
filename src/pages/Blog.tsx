import React, { useState } from 'react';
import { MoreHorizontal, Play } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '../constants';

interface BlogPostProps {
  image: string;
  author: string;
  date?: string;
  rating?: number;
  isVideo?: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({ image, author, date, rating, isVideo }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-lg transition">
    <div className="relative h-48">
      <img src={image} alt={author} className="w-full h-full object-cover" />
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-red-600 rounded-full p-2 hover:bg-red-700 transition">
            <Play className="w-6 h-6 text-white" />
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
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <span className="text-sm text-white">{author}</span>
        {rating && (
          <div className="ml-auto flex items-center text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="text-xs ml-1">{rating}</span>
          </div>
        )}
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded transition">
        {isVideo ? 'Watch Now' : 'Read More'}
      </button>
    </div>
  </div>
);

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Latest');
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    title: '',
    category: '',
    video: null as File | null,
  });

  const categories = ['Latest', 'Health', 'Nutri', 'Tech', 'Lifestyle'];

  const blogPosts = [
    {
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      author: 'Radhika Rao',
      rating: 4.7,
      isVideo: true,
    },
    {
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
      author: 'Radhika Rao',
      rating: 4.7,
      isVideo: true,
    },
    {
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      author: 'Daily Post Fintech',
      date: '28 Nov 2024',
    },
    {
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      author: 'Daily Post Fintech',
      date: '28 Nov 2024',
    },
  ];

  const allPosts = [...blogPosts, ...blogPosts, ...blogPosts];



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('date', formData.date);
    form.append('title', formData.title);
    form.append('category', formData.category);
    if (formData.video) {
      form.append('video', formData.video);
    }

    try {
      const response = await axios.post(`${API_URL}/blog/uploadBlog`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        alert('Blog uploaded successfully!');
        setShowForm(false); // Close the form after successful submission
      } else {
        alert('Error uploading blog');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Error uploading blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
          alt="Blog hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">BLOG</h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Enim fermentum rhoncus augue tellus ipsum commodo. Tristique vulputate dui viverra eu lorem turpis. Diam velit arcu magna eu. Vel viverra nibh diam auctor adipiscing dui eget.
            </p>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Upload Blog/Video</h3>
            <form
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Author Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="title"
                placeholder="Post Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
              <input
                type="file"
                name="video"
                accept="video/*"
                onChange={(e) => setFormData({ ...formData, video: e.target.files?.[0] || null })}
                className="w-full"
                required
              />
              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" disabled={loading}>
                {loading ? 'Uploading...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center">Latest Update</h2>
        <p className="text-gray-400 text-center mt-4 mb-8">
          Lorem ipsum dolor sit amet consectetur. Cursus sit magna elementum nunc. Hendrerit dolor vel neque eros elit at volutpat ultricies quis. Et aliquet nec in tellus magna. Leo tellus amet eros cursus.
        </p>

     
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-md transition"
            onClick={() => setShowForm(true)}
          >
            Upload
          </button>
        </div>


    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md transition">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
