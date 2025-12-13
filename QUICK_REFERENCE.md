# Quick Reference Guide

## 🚀 Quick Start Commands

### Start Both Servers (Easiest)
```bash
cd "/Users/mehedidev/Desktop/AI Project"
./start.sh
```

### Or Start Manually

**Backend:**
```bash
cd "/Users/mehedidev/Desktop/AI Project"
source venv/bin/activate
python manage.py runserver 8000
```

**Frontend:**
```bash
cd "/Users/mehedidev/Desktop/AI Project/frontend"
npm run dev
```

## 🔗 URLs

| Service | URL |
|---------|-----|
| Frontend Website | http://localhost:5173 or :5174 |
| Backend API | http://localhost:8000/api/ |
| Admin Panel | http://localhost:8000/admin/ |
| API Documentation | http://localhost:8000/api/ |

## 🔑 Admin Login

- **Username:** `admin`
- **Password:** `admin123`
- **⚠️ Change password after first login!**

## 📁 Project Structure Quick Reference

```
AI Project/
├── backend/              # Django config
├── core/                 # Main app (models, views, API)
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── services/    # API services
│   └── public/
├── venv/                # Python virtual environment
├── manage.py            # Django management
├── requirements.txt     # Python packages
└── start.sh            # Startup script
```

## 🛠️ Common Commands

### Backend (Django)

```bash
# Activate virtual environment
source venv/bin/activate

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Collect static files (production)
python manage.py collectstatic

# Run server
python manage.py runserver

# Reset admin password
python set_admin_password.py
```

### Frontend (React)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management Workflow

1. **Login to Admin:** http://localhost:8000/admin/
2. **Add Company Info:** Update company details first
3. **Add Services:** Create 4-6 core services
4. **Add Portfolio:** Add 3-6 projects, mark best as "featured"
5. **Add Testimonials:** Add client reviews, mark best as "featured"
6. **Add Team Members:** (Optional) Add team bios

## 🎨 Customization Quick Tips

### Change Company Name
1. Admin → Company Information
2. `frontend/src/components/Navbar.jsx` (line 28)
3. `frontend/src/components/Footer.jsx` (line 17)

### Change Primary Color
Edit `frontend/tailwind.config.js`:
```javascript
primary: {
  600: '#YOUR_COLOR',  // Main color
  700: '#DARKER_SHADE', // Hover color
}
```

### Add Logo
1. Place logo in `frontend/src/assets/logo.png`
2. Update `frontend/src/components/Navbar.jsx`:
```jsx
<img src="/src/assets/logo.png" alt="Logo" className="h-8" />
```

## 🌐 API Endpoints Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/services/` | List all services |
| GET | `/api/services/{slug}/` | Get service details |
| GET | `/api/portfolio/` | List portfolio items |
| GET | `/api/portfolio/featured/` | Featured projects |
| GET | `/api/testimonials/` | List testimonials |
| GET | `/api/testimonials/featured/` | Featured testimonials |
| POST | `/api/contact/` | Submit contact form |
| GET | `/api/company-info/` | Company information |
| GET | `/api/team/` | Team members |

## 🐛 Troubleshooting

### Backend won't start
```bash
# Make sure virtual environment is activated
source venv/bin/activate

# Check if migrations are applied
python manage.py migrate
```

### Frontend won't start
```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# Clear cache and restart
npm run dev
```

### CORS errors
- Check `.env` file has correct CORS_ALLOWED_ORIGINS
- Restart Django server after changing .env

### Port already in use
```bash
# Backend (kill port 8000)
lsof -ti:8000 | xargs kill -9

# Frontend (kill port 5173)
lsof -ti:5173 | xargs kill -9
```

## 📧 Email Setup (Optional)

Update `.env` file:
```env
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

Then restart Django server.

## 🚀 Deployment Checklist

### Before Deploying

- [ ] Change admin password
- [ ] Update company information
- [ ] Add all services
- [ ] Add portfolio projects
- [ ] Add testimonials
- [ ] Test contact form
- [ ] Update social media links
- [ ] Add real logo
- [ ] Customize colors/branding
- [ ] Test on mobile devices

### Environment Variables for Production

```env
DEBUG=False
SECRET_KEY=your-new-secret-key-here
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
CORS_ALLOWED_ORIGINS=https://yourdomain.com
```

## 🎓 Learning Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Django REST Framework](https://www.django-rest-framework.org/)

## 💡 Tips

1. **Regular Backups:** Backup your database regularly
2. **Version Control:** Use Git for version control
3. **Environment Files:** Never commit `.env` to version control
4. **Testing:** Test on different devices and browsers
5. **Performance:** Optimize images before uploading

---

**Need more help?** Check `README.md` or `PROJECT_COMPLETE.md` for detailed documentation.
