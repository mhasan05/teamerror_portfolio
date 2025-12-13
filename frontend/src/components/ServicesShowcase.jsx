import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  SparklesIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesShowcase = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for scalability and performance.',
      link: '/services'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      link: '/services'
    },
    {
      icon: PaintBrushIcon,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love and convert visitors into customers.',
      link: '/services'
    },
    {
      icon: SparklesIcon,
      title: 'AI Solutions',
      description: 'Intelligent chatbots and AI-powered automation to streamline your business.',
      link: '/services'
    },
    {
      icon: BoltIcon,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with cutting-edge AI technology.',
      link: '/services'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Support & Maintenance',
      description: '24/7 technical support and ongoing maintenance for your digital products.',
      link: '/services'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgb(0, 100, 92)'}}></span>
            <span className="text-sm font-medium text-gray-700">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We <span style={{color: 'rgb(0, 100, 92)'}}>Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development services to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors" style={{backgroundColor: 'rgba(0, 100, 92, 0.1)'}}>
                  <Icon className="h-7 w-7" style={{color: 'rgb(0, 100, 92)'}} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-sm font-semibold transition-colors"
                  style={{color: 'rgb(0, 100, 92)'}}
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{backgroundColor: 'rgb(0, 100, 92)'}}
          >
            View All Services
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
