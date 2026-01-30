import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, GlobeAltIcon, CodeBracketIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import ConsultationModal from '../components/ConsultationModal';
import { portfolioAPI } from '../services/api';

const Portfolio = () => {
  const { slug } = useParams();
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectDetail, setProjectDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (slug) {
      portfolioAPI.getBySlug(slug)
        .then((res) => setProjectDetail(res.data))
        .catch((err) => {
          console.error('Error fetching project detail:', err);
          setProjectDetail(null);
        })
        .finally(() => setLoading(false));
    } else {
      portfolioAPI.getAll()
        .then((res) => setProjects(res.data))
        .catch((err) => {
          console.error('Error fetching projects:', err);
          setProjects([]);
        })
        .finally(() => setLoading(false));
    }
  }, [slug]);

  // If we're on a specific portfolio item page
  if (slug) {
    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading project…</div>;
    if (!projectDetail) return <div className="min-h-screen flex items-center justify-center">Project not found.</div>;

    const project = projectDetail;

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

  // Derive categories from loaded projects (first technology or category-like field)
  const categories = ['all', ...Array.from(new Set(projects.flatMap(p => {
    const techs = p.technologies_list || (p.technologies ? p.technologies.split(',') : []);
    return techs.slice(0, 1).map(t => t.trim().toLowerCase());
  }).filter(Boolean)))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => {
        const techs = project.technologies_list || (project.technologies ? project.technologies.split(',') : []);
        return techs.map(t => t.trim().toLowerCase()).includes(filter);
      });

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
