import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CalendarIcon, UserIcon, TagIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import ConsultationModal from '../components/ConsultationModal';

const BlogPost = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample blog post data (in real app, this would come from an API)
  const blogPost = {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    content: `
      <p>The landscape of web development continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. As we move further into 2024, several key trends are shaping the way developers build and deploy web applications.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Artificial Intelligence Integration</h2>
      <p>AI is no longer just a buzzword—it's becoming an integral part of web development. From AI-powered chatbots to personalized user experiences, developers are leveraging machine learning algorithms to create smarter applications. Tools like GitHub Copilot and Tabnine are revolutionizing how we write code, offering intelligent suggestions and automating repetitive tasks.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications. With improved performance, offline capabilities, and push notifications, PWAs offer users an app-like experience directly through the browser. Major companies like Twitter and Starbucks have successfully implemented PWAs, seeing significant improvements in user engagement and conversion rates.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">3. Serverless Architecture</h2>
      <p>Serverless computing is gaining traction as organizations seek to reduce infrastructure costs and improve scalability. Platforms like AWS Lambda, Azure Functions, and Google Cloud Functions allow developers to focus solely on writing code without worrying about server management. This approach enables faster deployment cycles and automatic scaling based on demand.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">4. WebAssembly (Wasm)</h2>
      <p>WebAssembly is transforming web performance by enabling near-native execution speeds in browsers. Languages like Rust, C++, and Go can now compile to Wasm, allowing developers to bring compute-intensive applications to the web. This opens up possibilities for gaming, video editing, and CAD applications directly in the browser.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">5. Enhanced Security Measures</h2>
      <p>With increasing cyber threats, security has become paramount in web development. Techniques like Content Security Policy (CSP), SameSite cookies, and stricter CORS policies are being implemented to protect user data. Additionally, zero-trust architecture and end-to-end encryption are becoming standard practices in modern web applications.</p>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p>As we progress through 2024, web development continues to be driven by performance, user experience, and security. Developers who stay abreast of these trends and continuously upskill will be well-positioned to build the next generation of web applications. The convergence of AI, cloud computing, and edge technologies promises an exciting future for web development.</p>
    `,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    date: 'December 10, 2024',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      bio: 'Senior Web Developer with 10+ years of experience in modern web technologies.'
    },
    category: 'Web Development',
    readTime: '5 min read',
    tags: ['Web Development', 'JavaScript', 'AI', 'PWA', 'Security']
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center text-sm font-medium mb-6 transition-colors"
            style={{color: 'rgb(0, 100, 92)'}}
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Blog
          </button>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{blogPost.date}</span>
            <span className="mx-2">•</span>
            <span>{blogPost.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center">
            <img 
              src={blogPost.author.avatar} 
              alt={blogPost.author.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-gray-900">{blogPost.author.name}</p>
              <p className="text-sm text-gray-600">{blogPost.author.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          <TagIcon className="h-5 w-5 text-gray-400 mt-1" />
          {blogPost.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div className="flex items-center justify-between border-t border-b border-gray-200 py-6 mb-12">
          <div className="flex items-center">
            <ShareIcon className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-gray-700 font-medium">Share this article</span>
          </div>
          <div className="flex space-x-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
              <span className="sr-only">Share on Twitter</span>
              <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
              <span className="sr-only">Share on LinkedIn</span>
              <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
              <span className="sr-only">Share on Facebook</span>
              <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start">
            <img 
              src={blogPost.author.avatar} 
              alt={blogPost.author.name}
              className="w-16 h-16 rounded-full mr-6"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Written by {blogPost.author.name}</h3>
              <p className="text-gray-600 mb-4">{blogPost.author.bio}</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all"
                style={{backgroundColor: 'rgb(0, 100, 92)', color: 'white'}}
              >
                <UserIcon className="h-4 w-4 mr-2" />
                Connect with Author
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-12 text-center" style={{background: 'linear-gradient(to right, rgb(0, 100, 92), rgb(0, 80, 74)'}}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Like what you read?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for more insights and stay updated with our latest articles.
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

export default BlogPost;
