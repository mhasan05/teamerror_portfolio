import { useState, useEffect } from 'react';
import { ArrowRightIcon, PlayCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import ConsultationModal from './ConsultationModal';



const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenConsultation = () => setIsModalOpen(true);
    window.addEventListener('openConsultation', handleOpenConsultation);
    return () => window.removeEventListener('openConsultation', handleOpenConsultation);
  }, []);

  return (
    <section className="relative bg-white text-gray-900 overflow-hidden pt-20 pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'rgb(0, 100, 92)'}}></span>
              <span className="text-sm font-medium text-gray-700">#1 Software Development Partner</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                We Build
                <span className="block" style={{color: 'rgb(0, 100, 92)'}}>Digital Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Innovative web & mobile applications, AI solutions, and custom software that drive business growth and digital transformation.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-6 w-6" style={{color: 'rgb(0, 100, 92)'}} />
                <span className="text-gray-700 font-medium">150+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-6 w-6" style={{color: 'rgb(0, 100, 92)'}} />
                <span className="text-gray-700 font-medium">99% Client Satisfaction</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{background: 'rgb(0, 100, 92)'}}
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                className="inline-flex items-center justify-center px-8 py-4 border-2 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg"
                style={{borderColor: 'rgb(0, 100, 92)'}}
              >
                <PlayCircleIcon className="mr-2 h-6 w-6" style={{color: 'rgb(0, 100, 92)'}} />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold" style={{color: 'rgb(0, 100, 92)'}}>7+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{color: 'rgb(0, 100, 92)'}}>80+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{color: 'rgb(0, 100, 92)'}}>150+</div>
                <div className="text-sm text-gray-600">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(0, 100, 92, 0.1)'}}>
                    <CheckCircleIcon className="h-6 w-6" style={{color: 'rgb(0, 100, 92)'}} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{color: 'rgb(0, 100, 92)'}}>99.9%</div>
                    <div className="text-sm text-gray-600">Project Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full opacity-20" style={{backgroundColor: 'rgb(0, 100, 92)'}}></div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
