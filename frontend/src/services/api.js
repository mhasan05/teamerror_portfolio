import axios from 'axios';

// Use Vite env var when provided. For production builds hosted at `teamerror.net`
// we prefer the API at `https://api.teamerror.net/api`. During local dev fall
// back to the local Django backend.
const DEFAULT_LOCAL_API = 'http://localhost:8000/api';
const PRODUCTION_API = 'https://api.teamerror.net/api';

function resolveApiUrl() {
  // Vite-provided env at build time (e.g. VITE_API_URL="https://...")
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;

  // If running in a browser, map the frontend host to the production API.
  if (typeof window !== 'undefined' && window.location && window.location.hostname) {
    const host = window.location.hostname;
    // When frontend is served from teamerror.net (or subdomains) use the API subdomain.
    if (host === 'teamerror.net' || host.endsWith('.teamerror.net')) {
      return PRODUCTION_API;
    }
  }

  // Default (local development)
  return DEFAULT_LOCAL_API;
}

const API_URL = resolveApiUrl();

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
