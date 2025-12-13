import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, GlobeAltIcon, CodeBracketIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import ConsultationModal from '../components/ConsultationModal';

const Portfolio = () => {
  const { slug } = useParams();
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // If we're on a specific portfolio item page
  if (slug) {
    const projects = {
      'ecommerce-platform-techmart': {
        id: 1,
        title: 'E-Commerce Platform - TechMart',
        category: 'ecommerce',
        client: 'TechMart Inc.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
        challenge: 'Client needed a scalable e-commerce platform to handle 10,000+ daily users with real-time inventory management.',
        solution: 'Built a modern e-commerce platform using React, Django, and PostgreSQL with Redis caching and Stripe payment integration.',
        result: '300% increase in sales, 99.9% uptime, and reduced page load time by 60%.',
        technologies: ['React.js', 'Django', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
        duration: '4 months',
        testimonial: 'Working with TeamError was a game-changer for our business. Their expertise and dedication delivered results beyond our expectations.',
        liveUrl: '#',
        features: [
          'Real-time inventory management',
          'Secure payment processing',
          'Advanced search and filtering',
          'User reviews and ratings',
          'Order tracking system',
          'Admin dashboard'
        ],
        metrics: [
          { label: 'Sales Increase', value: '300%' },
          { label: 'Load Time', value: '-60%' },
          { label: 'Uptime', value: '99.9%' },
          { label: 'Users', value: '10K+/day' }
        ]
      },
      'ai-customer-service-chatbot': {
        id: 2,
        title: 'AI Customer Service Chatbot',
        category: 'ai',
        client: 'StartupXYZ',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop',
        challenge: 'Customer service team overwhelmed with 500+ daily inquiries, leading to slow response times.',
        solution: 'Developed an intelligent chatbot using GPT-4 with custom training on company data, integrated with existing CRM.',
        result: 'Handled 80% of inquiries automatically, reduced response time from 2 hours to 30 seconds.',
        technologies: ['GPT-4', 'Python', 'TensorFlow', 'Node.js', 'MongoDB'],
        duration: '3 months',
        testimonial: 'The AI chatbot has transformed our customer service operations. Response times are lightning-fast and customer satisfaction has never been higher.',
        liveUrl: '#',
        features: [
          'Natural language processing',
          'Multi-language support',
          'CRM integration',
          'Analytics dashboard',
          'Custom training',
          '24/7 availability'
        ],
        metrics: [
          { label: 'Automation Rate', value: '80%' },
          { label: 'Response Time', value: '30 sec' },
          { label: 'Satisfaction', value: '95%' },
          { label: 'Cost Savings', value: '$50K/year' }
        ]
      }
    };

    const project = projects[slug] || projects['ecommerce-platform-techmart'];

    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link to="/portfolio" className="inline-flex items-center text-white/90 hover:text-white mb-4">
                ← Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                {project.client}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className="text-3xl font-bold mb-2" style={{color: 'rgb(0, 100, 92)'}}>{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg">
                    This project was completed in {project.duration} for {project.client}. 
                    The solution has been successfully deployed and is actively serving their customers.
                  </p>
                </div>
              </section>

              {/* Challenge */}
              <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">!</span>
                  The Challenge
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </section>

              {/* Solution */}
              <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">💡</span>
                  Our Solution
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {project.solution}
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" style={{color: 'rgb(0, 100, 92)'}} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Result */}
              <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">🚀</span>
                  The Result
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {project.result}
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 italic">"{project.testimonial}"</p>
                  <p className="text-sm text-gray-600 mt-2">- {project.client}</p>
                </div>
              </section>

              {/* Technologies */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Project Info */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Category</p>
                      <p className="font-medium capitalize">{project.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    style={{background: 'rgb(0, 100, 92)'}}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Book Consultation
                  </button>
                  
                  <a
                    href={project.liveUrl}
                    className="w-full inline-flex items-center justify-center px-6 py-4 border-2 rounded-lg font-semibold transition-colors"
                    style={{borderColor: 'rgb(0, 100, 92)', color: 'rgb(0, 100, 92)'}}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 100, 92, 0.05)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <GlobeAltIcon className="mr-2 h-5 w-5" />
                    View Live Project
                  </a>
                </div>

                {/* Related Projects */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Projects</h3>
                  <div className="space-y-4">
                    <Link to="/portfolio/ai-customer-service-chatbot" className="block group">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                          <img 
                            src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=200&h=200&fit=crop" 
                            alt="AI Customer Service Chatbot"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-primary-600 transition-colors">AI Chatbot</p>
                          <p className="text-sm text-gray-600">StartupXYZ</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Modal */}
        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    );
  }

  // Portfolio overview page
  const categories = ['all', 'web', 'mobile', 'ai', 'ecommerce'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform - TechMart',
      category: 'ecommerce',
      client: 'TechMart Inc.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
      challenge: 'Client needed a scalable e-commerce platform to handle 10,000+ daily users with real-time inventory management.',
      solution: 'Built a modern e-commerce platform using React, Django, and PostgreSQL with Redis caching and Stripe payment integration.',
      result: '300% increase in sales, 99.9% uptime, and reduced page load time by 60%.',
      technologies: ['React.js', 'Django', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
      metrics: [
        { label: 'Revenue Increase', value: '300%' },
        { label: 'Load Time', value: '-60%' },
        { label: 'Uptime', value: '99.9%' }
      ],
      slug: 'ecommerce-platform-techmart'
    },
    {
      id: 2,
      title: 'AI Customer Service Chatbot',
      category: 'ai',
      client: 'StartupXYZ',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop',
      challenge: 'Customer service team overwhelmed with 500+ daily inquiries, leading to slow response times.',
      solution: 'Developed an intelligent chatbot using GPT-4 with custom training on company data, integrated with existing CRM.',
      result: 'Handled 80% of inquiries automatically, reduced response time from 2 hours to 30 seconds.',
      technologies: ['GPT-4', 'Python', 'TensorFlow', 'Node.js', 'MongoDB'],
      metrics: [
        { label: 'Automation Rate', value: '80%' },
        { label: 'Response Time', value: '30sec' },
        { label: 'Satisfaction', value: '95%' }
      ],
      slug: 'ai-customer-service-chatbot'
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      category: 'mobile',
      client: 'FitLife Pro',
      image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=1200&h=600&fit=crop',
      challenge: 'Need cross-platform app for iOS and Android with offline functionality and real-time syncing.',
      solution: 'Built with Flutter for cross-platform development, Firebase for backend, and implemented offline-first architecture.',
      result: '50K+ downloads in first month, 4.8-star rating, featured by App Store.',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'PostgreSQL'],
      metrics: [
        { label: 'Downloads', value: '50K+' },
        { label: 'Rating', value: '4.8★' },
        { label: 'Active Users', value: '25K' }
      ],
      slug: 'fitness-tracking-mobile-app'
    },
    {
      id: 4,
      title: 'SaaS Project Management Tool',
      category: 'web',
      client: 'TaskFlow Solutions',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',
      challenge: 'Teams needed collaborative project management tool with real-time updates and integrations.',
      solution: 'Created a full-featured SaaS platform with Next.js, real-time collaboration, and third-party integrations.',
      result: '1,000+ paying customers, $50K MRR in 6 months, 95% customer retention.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
      metrics: [
        { label: 'Paying Customers', value: '1,000+' },
        { label: 'MRR', value: '$50K' },
        { label: 'Retention', value: '95%' }
      ],
      slug: 'saas-project-management-tool'
    },
    {
      id: 5,
      title: 'Real Estate Listing Platform',
      category: 'web',
      client: 'PropertyHub',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
      challenge: 'Real estate agency needed modern platform with advanced search, virtual tours, and lead management.',
      solution: 'Developed comprehensive platform with map integration, virtual tour support, and CRM for lead tracking.',
      result: '200% increase in qualified leads, 40% reduction in time-to-sale.',
      technologies: ['React.js', 'Django', 'PostgreSQL', 'AWS S3'],
      metrics: [
        { label: 'Lead Increase', value: '200%' },
        { label: 'Time to Sale', value: '-40%' },
        { label: 'Listings', value: '5,000+' }
      ],
      slug: 'real-estate-listing-platform'
    },
    {
      id: 6,
      title: 'AI Document Processing System',
      category: 'ai',
      client: 'LegalTech Corp',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
      challenge: 'Law firm processing 1000+ documents daily manually, leading to errors and delays.',
      solution: 'Built AI-powered system using OCR, NLP, and custom ML models to extract and categorize information.',
      result: '90% reduction in processing time, 99% accuracy, saved 20 hours/week.',
      technologies: ['Python', 'TensorFlow', 'OCR', 'NLP', 'PostgreSQL'],
      metrics: [
        { label: 'Processing Time', value: '-90%' },
        { label: 'Accuracy', value: '99%' },
        { label: 'Time Saved', value: '20hr/week' }
      ],
      slug: 'ai-document-processing-system'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgb(0, 100, 92)'}}></span>
            <span className="text-sm font-medium text-gray-700">Our Work</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Portfolio & <span style={{color: 'rgb(0, 100, 92)'}}>Case Studies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories from businesses we've helped transform. Explore our detailed case studies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                filter === category
                  ? 'text-white shadow-lg'
                  : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
              }`}
              style={filter === category ? {backgroundColor: 'rgb(0, 100, 92)'} : {}}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-2">
                    {project.category.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.client}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{project.challenge}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold mb-1" style={{color: 'rgb(0, 100, 92)'}}>{metric.value}</div>
                      <div className="text-xs text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    style={{background: 'rgb(0, 100, 92)'}}
                  >
                    View Case Study
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 rounded-lg font-semibold transition-colors"
                    style={{borderColor: 'rgb(0, 100, 92)', color: 'rgb(0, 100, 92)'}}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 100, 92, 0.05)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <CalendarIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl p-12 text-center" style={{background: 'linear-gradient(to right, rgb(0, 100, 92), rgb(0, 80, 74)'}}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{color: 'rgb(0, 100, 92)'}}
          >
            Start Your Project Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Portfolio;
