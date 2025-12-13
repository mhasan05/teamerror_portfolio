import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Services API
export const servicesAPI = {
  getAll: () => api.get('/services/'),
  getBySlug: (slug) => api.get(`/services/${slug}/`),
};

// Portfolio API
export const portfolioAPI = {
  getAll: (params) => api.get('/portfolio/', { params }),
  getBySlug: (slug) => api.get(`/portfolio/${slug}/`),
  getFeatured: () => api.get('/portfolio/featured/'),
};

// Testimonials API
export const testimonialsAPI = {
  getAll: (params) => api.get('/testimonials/', { params }),
  getFeatured: () => api.get('/testimonials/featured/'),
};

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact/', data),
};

// Company Info API
export const companyAPI = {
  get: () => api.get('/company-info/'),
};

// Team API
export const teamAPI = {
  getAll: () => api.get('/team/'),
};

export default api;
