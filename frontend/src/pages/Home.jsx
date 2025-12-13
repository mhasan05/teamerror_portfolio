import Hero from '../components/Hero';
import ServicesShowcase from '../components/ServicesShowcase';
import ServicesOverview from '../components/ServicesOverview';
import PortfolioPreview from '../components/PortfolioPreview';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { CalendarIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesShowcase />
      <PortfolioPreview />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20" style={{background: 'linear-gradient(to right, rgb(0, 100, 92), rgb(0, 80, 74)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help transform your business with cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.dispatchEvent(new Event('openConsultation'))}
              className="inline-flex items-center px-8 py-4 bg-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              style={{color: 'rgb(0, 100, 92)'}}
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Book Free Consultation
            </button>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white transition-colors duration-200 font-semibold text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
