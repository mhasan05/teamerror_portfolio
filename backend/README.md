# Software Company Website

A complete, professional, and responsive website for a software company built with **Django** (backend) and **React** (frontend).

## 🚀 Features

### Core Pages
- **Home Page** - Hero section, services overview, portfolio preview, testimonials, and CTAs
- **About Us** - Company story, mission, vision, and team
- **Services** - Detailed service pages with technologies, process, and pricing
- **Portfolio/Case Studies** - Project showcases with screenshots, tech stack, and results
- **Testimonials** - Client reviews with ratings and sources (Fiverr, Upwork, etc.)
- **Contact Page** - Contact form with email, phone, WhatsApp, and Telegram integration

### Technologies Used

#### Backend (Django)
- Django 4.2.7
- Django REST Framework
- Django CORS Headers
- Python Decouple (environment variables)
- SQLite (development) / PostgreSQL (production ready)

#### Frontend (React)
- React 18
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Heroicons

## 📦 Installation & Setup

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Navigate to project directory**
   ```bash
   cd "/Users/mehedidev/Desktop/AI Project"
   ```

2. **Create and activate virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

5. **Run migrations**
   ```bash
   python manage.py migrate
   ```

6. **Create superuser (admin)**
   ```bash
   python set_admin_password.py
   ```
   - **Username:** admin
   - **Password:** admin123 (Change after first login!)

7. **Run development server**
   ```bash
   python manage.py runserver
   ```
   Backend will be available at: `http://localhost:8000`
   Admin panel at: `http://localhost:8000/admin`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Frontend will be available at: `http://localhost:5173`

## 🎨 Using the Admin Panel

1. Access admin panel at `http://localhost:8000/admin`
2. Login with:
   - Username: `admin`
   - Password: `admin123`
3. Add content:
   - **Company Information** - Update company details, contact info, social media
   - **Services** - Add/edit services with descriptions, technologies, pricing
   - **Portfolio** - Add projects with screenshots, tech stack, case studies
   - **Testimonials** - Add client reviews with ratings
   - **Team Members** - Add team members with photos and skills
   - **Contact Submissions** - View and manage contact form submissions

## 📁 Project Structure

```
AI Project/
├── backend/                 # Django backend
│   ├── settings.py         # Django settings
│   ├── urls.py             # Main URL configuration
│   └── wsgi.py
├── core/                    # Main Django app
│   ├── models.py           # Database models
│   ├── views.py            # API views
│   ├── serializers.py      # DRF serializers
│   ├── admin.py            # Admin configuration
│   └── urls.py             # App URLs
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/
│   └── package.json
├── manage.py
├── requirements.txt
├── .env.example
└── README.md
```

## 🔧 API Endpoints

### Base URL: `http://localhost:8000/api/`

- **GET** `/services/` - List all services
- **GET** `/services/{slug}/` - Get service details
- **GET** `/portfolio/` - List portfolio items
- **GET** `/portfolio/featured/` - Get featured portfolio
- **GET** `/portfolio/{slug}/` - Get portfolio details
- **GET** `/testimonials/` - List testimonials
- **GET** `/testimonials/featured/` - Get featured testimonials
- **POST** `/contact/` - Submit contact form
- **GET** `/company-info/` - Get company information
- **GET** `/team/` - List team members

## 🎯 Customization

### Change Company Name & Branding
1. Update Company Info in Django admin
2. Edit `frontend/src/components/Navbar.jsx` - Update logo
3. Edit `frontend/src/components/Footer.jsx` - Update company name
4. Edit `frontend/tailwind.config.js` - Customize colors

### Add New Service
1. Go to Django admin → Services → Add Service
2. Fill in title, description, technologies, pricing
3. Service will automatically appear on frontend

### Add Portfolio Project
1. Go to Django admin → Portfolio → Add Portfolio Item
2. Upload screenshots, add description
3. Set as "featured" to show on homepage

### Customize Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Change these values
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  }
}
```

## 🚀 Deployment

### Backend (Django)

**Option 1: Heroku**
```bash
# Add Procfile, runtime.txt, and configure for Heroku
heroku create your-app-name
git push heroku main
```

**Option 2: DigitalOcean / AWS / VPS**
- Set up Gunicorn
- Configure Nginx
- Set DEBUG=False
- Use PostgreSQL instead of SQLite

### Frontend (React)

**Option 1: Vercel**
```bash
cd frontend
npm run build
# Deploy to Vercel
```

**Option 2: Netlify**
```bash
cd frontend
npm run build
# Deploy dist/ folder to Netlify
```

**Option 3: Same Server as Backend**
```bash
cd frontend
npm run build
# Serve static files with Django/Nginx
```

## 📧 Email Configuration

To enable email notifications for contact forms, update `.env`:

```env
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

## 🔒 Security Notes

1. **Change default admin password immediately**
2. **Never commit .env file to git**
3. **Set DEBUG=False in production**
4. **Use strong SECRET_KEY in production**
5. **Configure ALLOWED_HOSTS properly**
6. **Enable HTTPS in production**

## 📝 License

This project is provided as-is for your use.

## 🤝 Support

For questions or issues, please contact your development team.

---

**Built with ❤️ using Django & React**
