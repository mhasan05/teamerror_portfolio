import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';
import ConsultationModal from '../components/ConsultationModal';

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      date: 'December 10, 2024',
      author: 'John Doe',
      category: 'Web Development',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Scalable Mobile Applications with Flutter',
      excerpt: 'Learn how to architect and build scalable mobile applications using Flutter and best practices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
      date: 'December 5, 2024',
      author: 'Jane Smith',
      category: 'Mobile Development',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'AI-Powered User Experiences: Transforming Digital Products',
      excerpt: 'Discover how artificial intelligence is revolutionizing user experiences in modern applications.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      date: 'November 28, 2024',
      author: 'Mike Johnson',
      category: 'Artificial Intelligence',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for Modern Web Applications',
      excerpt: 'Essential security measures every developer should implement to protect their web applications.',
      image: 'https://images.unsplash.com/photo-156301727-70c1-4a8d-8d4c-8c0c0a5bfc0a?w=800&h=400&fit=crop',
      date: 'November 20, 2024',
      author: 'Sarah Williams',
      category: 'Security',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Optimizing React Performance: Tips and Tricks',
      excerpt: 'Advanced techniques to optimize your React applications for better performance and user experience.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop',
      date: 'November 15, 2024',
      author: 'David Brown',
      category: 'Frontend Development',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'The Rise of Headless CMS in Modern Development',
      excerpt: 'Understanding the benefits and use cases of headless CMS architectures in today\'s digital landscape.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      date: 'November 10, 2024',
      author: 'Emily Davis',
      category: 'Content Management',
      readTime: '6 min read'
    },
    {
      id: 7,
      title: 'DevOps Culture: Bridging Development and Operations',
      excerpt: 'How implementing DevOps practices can streamline your development workflow and improve deployment.',
      image: 'https://images.unsplash.com/photo-1558369908-43b7e0cb29d1?w=800&h=400&fit=crop',
      date: 'October 28, 2024',
      author: 'Robert Wilson',
      category: 'DevOps',
      readTime: '8 min read'
    },
    {
      id: 8,
      title: 'Design Systems: Creating Consistent User Interfaces',
      excerpt: 'The importance of design systems in maintaining consistency and efficiency across your product suite.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop',
      date: 'October 20, 2024',
      author: 'Lisa Anderson',
      category: 'UI/UX Design',
      readTime: '7 min read'
    }
  ];

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgb(0, 100, 92)'}}></span>
            <span className="text-sm font-medium text-gray-700">Insights & News</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span style={{color: 'rgb(0, 100, 92)'}}>Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and news in software development, AI, and technology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-2.5 rounded-lg font-medium transition-all text-white" style={{backgroundColor: 'rgb(0, 100, 92)'}}>
            All Posts
          </button>
          <button className="px-6 py-2.5 rounded-lg font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
            Web Development
          </button>
          <button className="px-6 py-2.5 rounded-lg font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
            Mobile Development
          </button>
          <button className="px-6 py-2.5 rounded-lg font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
            AI & Machine Learning
          </button>
          <button className="px-6 py-2.5 rounded-lg font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
            UI/UX Design
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <div key={post.id} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-sm font-semibold transition-colors"
                    style={{color: 'rgb(0, 100, 92)'}}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                currentPage === index + 1
                  ? 'text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={currentPage === index + 1 ? {backgroundColor: 'rgb(0, 100, 92)'} : {}}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl p-12 text-center" style={{background: 'linear-gradient(to right, rgb(0, 100, 92), rgb(0, 80, 74)'}}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Want to Stay Updated?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles directly in your inbox.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{color: 'rgb(0, 100, 92)'}}
          >
            <TagIcon className="h-5 w-5 mr-2" />
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Blog;
