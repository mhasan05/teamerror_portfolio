import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { portfolioAPI } from '../services/api';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const PortfolioPreview = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await portfolioAPI.getFeatured();
        setPortfolio(response.data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // Default portfolio items
  const defaultPortfolio = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      client_company: 'TechCorp',
      short_description: 'Full-stack e-commerce solution with payment integration',
      technologies: 'React, Django, Stripe, AWS',
      slug: 'ecommerce-platform'
    },
    {
      id: 2,
      title: 'AI Chatbot Platform',
      client_company: 'StartupXYZ',
      short_description: 'Intelligent customer service chatbot using GPT-4',
      technologies: 'Next.js, Python, OpenAI, PostgreSQL',
      slug: 'ai-chatbot'
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      client_company: 'FitLife',
      short_description: 'Cross-platform fitness tracking application',
      technologies: 'Flutter, Firebase, REST API',
      slug: 'fitness-app'
    }
  ];

  const displayPortfolio = portfolio.length > 0 ? portfolio : defaultPortfolio;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Successful projects we've delivered for our clients
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPortfolio.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-20">
                  {project.title.substring(0, 2).toUpperCase()}
                </span>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  {project.client_company}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.short_description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(',').slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  View Case Study
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Portfolio Button */}
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="btn-primary inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
