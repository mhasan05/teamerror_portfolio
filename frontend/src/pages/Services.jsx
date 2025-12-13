import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  SparklesIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CalendarIcon,
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import ConsultationModal from '../components/ConsultationModal';

const Services = () => {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // If we're on a specific service page
  if (slug) {
    const services = {
      'web-development': {
        id: 1,
        icon: CodeBracketIcon,
        title: 'Web Application Development',
        subtitle: 'Build Scalable, High-Performance Web Applications',
        description: 'Transform your business with custom web applications built using cutting-edge technologies. We create responsive, scalable, and secure web solutions tailored to your needs.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
        problem: 'Many businesses struggle with outdated websites that don\'t convert visitors into customers, lack mobile responsiveness, or can\'t handle growing user traffic.',
        solution: 'We build modern, scalable web applications using React, Next.js, and Django that are fast, secure, and optimized for conversions. Our applications are built to grow with your business.',
        features: [
          'Responsive & Mobile-First Design',
          'Progressive Web Apps (PWA)',
          'RESTful & GraphQL APIs',
          'Real-time Features with WebSockets',
          'E-commerce Solutions',
          'Custom CMS & Admin Dashboards',
          'Third-party Integrations',
          'Cloud Deployment & DevOps'
        ],
        process: [
          {
            step: '1. Discovery & Planning',
            description: 'We analyze your requirements, define project scope, and create detailed wireframes and technical specifications.'
          },
          {
            step: '2. Design & Prototyping',
            description: 'Our designers create beautiful, user-friendly interfaces and interactive prototypes for your approval.'
          },
          {
            step: '3. Development',
            description: 'Our developers build your application using agile methodology with regular updates and demos.'
          },
          {
            step: '4. Testing & QA',
            description: 'Comprehensive testing ensures your application works flawlessly across all devices and browsers.'
          },
          {
            step: '5. Deployment & Launch',
            description: 'We deploy your application to production with proper monitoring and backup systems in place.'
          },
          {
            step: '6. Support & Maintenance',
            description: 'Ongoing support, updates, and optimization to keep your application running smoothly.'
          }
        ],
        technologies: ['React.js', 'Next.js', 'Django', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker'],
        pricing: '$3,000 - $50,000',
        timeline: '4-12 weeks',
        deliverables: [
          'Fully functional web application',
          'Source code & documentation',
          'Admin panel for content management',
          'Deployment on your server/cloud',
          '3 months free support',
          'Training sessions for your team'
        ],
        stats: [
          { label: 'Average Load Time', value: '<2 sec' },
          { label: 'Uptime Guarantee', value: '99.9%' },
          { label: 'Mobile Responsive', value: '100%' },
          { label: 'SEO Optimized', value: 'Yes' }
        ]
      },
      'mobile-development': {
        id: 2,
        icon: DevicePhoneMobileIcon,
        title: 'Mobile App Development',
        subtitle: 'iOS & Android Apps That Users Love',
        description: 'Create powerful mobile applications for iOS and Android with seamless user experiences and robust functionality.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
        problem: 'Businesses need to reach customers on mobile devices but struggle with the cost and complexity of building separate apps for iOS and Android.',
        solution: 'We develop cross-platform mobile apps using Flutter and React Native, allowing you to reach both iOS and Android users with a single codebase, reducing costs and development time.',
        features: [
          'Cross-platform Development (iOS & Android)',
          'Native Performance & Feel',
          'Offline-First Architecture',
          'Push Notifications',
          'In-App Purchases',
          'Social Media Integration',
          'App Store Optimization',
          'Analytics & Crash Reporting'
        ],
        process: [
          { step: '1. App Strategy', description: 'Define your app\'s purpose, target audience, and key features' },
          { step: '2. UX/UI Design', description: 'Create intuitive designs that follow platform guidelines' },
          { step: '3. Development', description: 'Build your app with clean, maintainable code' },
          { step: '4. Testing', description: 'Rigorous testing on real devices and simulators' },
          { step: '5. App Store Submission', description: 'Handle submission to App Store and Google Play' },
          { step: '6. Post-Launch Support', description: 'Monitor performance and release updates' }
        ],
        technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
        pricing: '$5,000 - $100,000',
        timeline: '8-16 weeks',
        deliverables: [
          'iOS & Android applications',
          'Backend API & database',
          'Admin dashboard',
          'App Store listings',
          'Source code & documentation',
          '6 months support'
        ],
        stats: [
          { label: 'App Performance', value: '60 FPS' },
          { label: 'Crash Rate', value: '<0.1%' },
          { label: 'User Rating', value: '4.5+★' },
          { label: 'Download Speed', value: 'Fast' }
        ]
      },
      'ui-ux-design': {
        id: 3,
        icon: PaintBrushIcon,
        title: 'UI/UX Design Services',
        subtitle: 'Beautiful Interfaces That Convert',
        description: 'Design stunning user experiences that engage your audience and drive conversions with data-driven design decisions.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
        problem: 'Poor user experience leads to high bounce rates, low engagement, and lost revenue. Many products fail because they\'re difficult to use.',
        solution: 'Our UX designers create intuitive, beautiful interfaces based on user research and best practices. We focus on usability, accessibility, and conversion optimization.',
        features: [
          'User Research & Analysis',
          'Wireframing & Prototyping',
          'High-Fidelity Mockups',
          'Interactive Prototypes',
          'Design Systems & Style Guides',
          'Usability Testing',
          'Responsive Design',
          'Accessibility Compliance (WCAG)'
        ],
        process: [
          { step: '1. Research', description: 'Understand your users, competitors, and market' },
          { step: '2. Information Architecture', description: 'Organize content and features logically' },
          { step: '3. Wireframing', description: 'Create low-fidelity layouts and user flows' },
          { step: '4. Visual Design', description: 'Design beautiful, on-brand interfaces' },
          { step: '5. Prototyping', description: 'Build clickable prototypes for testing' },
          { step: '6. Handoff', description: 'Deliver design files and specifications to developers' }
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Principle'],
        pricing: '$1,500 - $25,000',
        timeline: '2-8 weeks',
        deliverables: [
          'Design system & style guide',
          'High-fidelity mockups',
          'Interactive prototypes',
          'Design specifications',
          'Icon & illustration sets',
          'Developer handoff files'
        ],
        stats: [
          { label: 'User Satisfaction', value: '95%' },
          { label: 'Conversion Boost', value: '+40%' },
          { label: 'Design Revisions', value: 'Unlimited' },
          { label: 'Delivery', value: 'On Time' }
        ]
      }
    };

    const service = services[slug] || services['web-development'];
    const Icon = service.icon;

    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white mb-4">
                ← Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                {service.subtitle}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </section>

              {/* Problem & Solution */}
              <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">!</span>
                      The Problem
                    </h3>
                    <p className="text-gray-700">{service.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">✓</span>
                      Our Solution
                    </h3>
                    <p className="text-gray-700">{service.solution}</p>
                  </div>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" style={{color: 'rgb(0, 100, 92)'}} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      <h3 className="text-lg font-bold mb-2" style={{color: 'rgb(0, 100, 92)'}}>{item.step}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technologies */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <span key={index} className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Stats */}
              <section className="bg-gradient-to-r rounded-2xl p-8" style={{background: 'linear-gradient(to right, rgb(0, 100, 92), rgb(0, 80, 74)'}}>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Performance Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {service.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary-500">
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-600 mb-2">Starting from</div>
                    <div className="text-4xl font-bold mb-2" style={{color: 'rgb(0, 100, 92)'}}>{service.pricing}</div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {service.timeline}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full inline-flex items-center justify-center px-6 py-4 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4"
                    style={{background: 'rgb(0, 100, 92)'}}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </button>

                  <Link
                    to="/contact"
                    className="block w-full text-center border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors py-3"
                    style={{borderColor: 'rgb(0, 100, 92)', color: 'rgb(0, 100, 92)'}}
                  >
                    Get Custom Quote
                  </Link>
                </div>

                {/* Deliverables */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Get</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: 'rgb(0, 100, 92)'}} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help Deciding?</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Our experts are here to help you choose the right solution for your needs.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <UserGroupIcon className="h-5 w-5 mr-2" style={{color: 'rgb(0, 100, 92)'}} />
                      Talk to an Expert
                    </div>
                    <div className="flex items-center text-gray-700">
                      <SparklesIcon className="h-5 w-5 mr-2" style={{color: 'rgb(0, 100, 92)'}} />
                      Free Project Analysis
                    </div>
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

  // Services overview page
  const services = [
    {
      id: 1,
      icon: CodeBracketIcon,
      title: 'Web Application Development',
      description: 'Build scalable, high-performance web applications with modern technologies',
      features: [
        'Responsive & Mobile-First Design',
        'Progressive Web Apps (PWA)',
        'RESTful & GraphQL APIs',
        'Real-time Features',
        'E-commerce Solutions',
        'Custom CMS & Admin Dashboards'
      ],
      technologies: ['React.js', 'Next.js', 'Django', 'Node.js', 'PostgreSQL'],
      pricing: 'Starting at $3,000',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      slug: 'web-development'
    },
    {
      id: 2,
      icon: DevicePhoneMobileIcon,
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications for iOS and Android platforms',
      features: [
        'Cross-platform Development',
        'Native Performance',
        'Offline-First Architecture',
        'Push Notifications',
        'In-App Purchases',
        'Social Media Integration'
      ],
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
      pricing: 'Starting at $5,000',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      slug: 'mobile-development'
    },
    {
      id: 3,
      icon: PaintBrushIcon,
      title: 'UI/UX Design',
      description: 'Design beautiful, intuitive interfaces that users love',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'High-Fidelity Mockups',
        'Design Systems & Style Guides',
        'Usability Testing',
        'Responsive Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro'],
      pricing: 'Starting at $1,500',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      slug: 'ui-ux-design'
    },
    {
      id: 4,
      icon: SparklesIcon,
      title: 'AI Chatbots & Agents',
      description: 'Intelligent chatbots that understand and respond naturally',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        '24/7 Customer Support',
        'CRM Integration',
        'Custom Training',
        'Analytics Dashboard'
      ],
      technologies: ['OpenAI', 'Python', 'TensorFlow', 'Dialogflow', 'Rasa'],
      pricing: 'Starting at $2,500',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      slug: 'ai-chatbots'
    },
    {
      id: 5,
      icon: BoltIcon,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and streamline your workflows',
      features: [
        'Workflow Automation',
        'Data Processing',
        'Email Automation',
        'Report Generation',
        'API Integrations',
        'Custom AI Models'
      ],
      technologies: ['Python', 'Zapier', 'Make', 'n8n', 'Apache Airflow'],
      pricing: 'Starting at $2,000',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      slug: 'ai-automation'
    },
    {
      id: 6,
      icon: WrenchScrewdriverIcon,
      title: 'Maintenance & Support',
      description: '24/7 technical support and ongoing maintenance services',
      features: [
        'Bug Fixes & Updates',
        'Performance Optimization',
        'Security Patches',
        'Backup & Recovery',
        'Server Monitoring',
        'Technical Support'
      ],
      technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Monitoring Tools'],
      pricing: 'Starting at $500/month',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      slug: 'maintenance-support'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgb(0, 100, 92)'}}></span>
            <span className="text-sm font-medium text-gray-700">What We Do</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span style={{color: 'rgb(0, 100, 92)'}}>Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development services to transform your business and accelerate digital growth
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircleIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" style={{color: 'rgb(0, 100, 92)'}} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Starting from</p>
                        <p className="text-lg font-bold" style={{color: 'rgb(0, 100, 92)'}}>{service.pricing}</p>
                      </div>
                    </div>
                    <Link
                      to={`/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-center px-6 py-3 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-3"
                      style={{background: 'rgb(0, 100, 92)'}}
                    >
                      Learn More
                    </Link>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors border-2"
                      style={{borderColor: 'rgb(0, 100, 92)', color: 'rgb(0, 100, 92)'}}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5" />
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-2xl p-12 text-center" style={{background: 'linear-gradient(to right, rgb(0, 100, 92), rgb(0, 80, 74)'}}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't See What You Need?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We offer custom solutions tailored to your specific requirements. Let's discuss your project!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{color: 'rgb(0, 100, 92)'}}
          >
            Contact Us for Custom Solutions
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Services;
