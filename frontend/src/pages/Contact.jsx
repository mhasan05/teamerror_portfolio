import { useState } from 'react';
import ConsultationModal from '../components/ConsultationModal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Have a project in mind? Let's discuss how we can help transform your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@teamerror.dev</p>
              </div>
              <div>
                <h3 className="font-semibold">Office</h3>
                <p className="text-gray-600">
                  House-83, Level-8<br />
                  Mirpur-10, Dhaka<br />
                  Bangladesh
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+880 1XXX-XXXXXX</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-semibold mb-4">Book a Free Consultation</h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-teal-800 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Schedule Meeting
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-teal-800 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Contact;