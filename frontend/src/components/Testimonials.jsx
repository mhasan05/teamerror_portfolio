import { useState, useEffect } from 'react';
import { testimonialsAPI } from '../services/api';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await testimonialsAPI.getFeatured();
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Default testimonials
  const displayTestimonials = testimonials;

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          index < rating ? (
            <StarIcon key={index} className="h-5 w-5 text-yellow-400" />
          ) : (
            <StarOutlineIcon key={index} className="h-5 w-5 text-gray-300" />
          )
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Rating */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold mr-4">
                  {testimonial.client_name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.client_name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.client_position} at {testimonial.client_company}
                  </div>
                  {testimonial.client_country && (
                    <div className="text-xs text-gray-500">
                      {testimonial.client_country}
                    </div>
                  )}
                </div>
              </div>

              {/* Source Badge */}
              {testimonial.source && (
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full font-medium">
                    {testimonial.source === 'fiverr' && 'Fiverr'}
                    {testimonial.source === 'upwork' && 'Upwork'}
                    {testimonial.source === 'direct' && 'Direct Client'}
                    {testimonial.source === 'other' && 'Client'}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-20">
          <h3 className="text-center text-gray-600 font-semibold mb-8">
            TRUSTED BY LEADING COMPANIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-16 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400 font-semibold">LOGO {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
