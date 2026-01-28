# 🚀 TeamError Website - Deployment Guide

## 📋 Prerequisites

Before deploying the TeamError website, ensure you have:
1. A server/VPS with Docker and Docker Compose installed
2. A domain name (teamerror.dev) pointed to your server
3. SSL certificates for HTTPS (can be obtained via Let's Encrypt)
4. Email service credentials for transactional emails

## 🐳 Docker Deployment Options

### Option 1: Docker Compose (Recommended)

#### Development Deployment
```bash
# Clone the repository
git clone <repository-url>
cd ai-project

# Create environment files
cp .env.example .env.dev
cp .env.example .env.dev.db
# Edit these files with your settings

# Build and run containers
docker-compose up --build

# Run migrations
docker-compose exec backend python manage.py migrate

# Create superuser
docker-compose exec backend python manage.py createsuperuser

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000/api/
# Admin Panel: http://localhost:8000/admin/
```

#### Production Deployment
```bash
# Prepare environment files
cp .env.example .env.prod
cp .env.example .env.prod.db
# Edit these files with production settings

# Build and run production containers
docker-compose -f docker-compose.prod.yml up --build -d

# Run migrations
docker-compose -f docker-compose.prod.yml exec backend python manage.py migrate

# Create superuser
docker-compose -f docker-compose.prod.yml exec backend python manage.py createsuperuser

# Collect static files
docker-compose -f docker-compose.prod.yml exec backend python manage.py collectstatic --noinput

# Access the application at your domain
```

### Option 2: Manual Docker Deployment

#### Backend Container
```bash
# Build backend image
docker build -t teamerror-backend -f docker/backend/Dockerfile.prod .

# Run backend container
docker run -d \
  --name teamerror-backend \
  -p 8000:8000 \
  -e DEBUG=False \
  -e DATABASE_URL=postgresql://user:pass@db:5432/teamerror_prod \
  teamerror-backend
```

#### Frontend Container
```bash
# Build frontend image
docker build -t teamerror-frontend -f docker/frontend/Dockerfile.prod .

# Run frontend container
docker run -d \
  --name teamerror-frontend \
  -p 3000:80 \
  teamerror-frontend
```

## 🔧 Environment Configuration

### Production Environment Variables (.env.prod)
```env
DEBUG=False
SECRET_KEY=your-very-secure-production-secret-key
ALLOWED_HOSTS=teamerror.dev,www.teamerror.dev
DATABASE_URL=postgresql://teamerror_user_prod:your-secure-db-password@db:5432/teamerror_prod
CORS_ALLOWED_ORIGINS=https://teamerror.dev
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-business@email.com
EMAIL_HOST_PASSWORD=your-app-password
```

### Database Environment Variables (.env.prod.db)
```env
POSTGRES_DB=teamerror_prod
POSTGRES_USER=teamerror_user_prod
POSTGRES_PASSWORD=your-secure-db-password
```

## 🔐 SSL Configuration

To enable HTTPS, you'll need SSL certificates. You can obtain free certificates using Let's Encrypt:

```bash
# Install Certbot
sudo apt-get install certbot

# Obtain certificates
sudo certbot certonly --standalone -d teamerror.dev -d www.teamerror.dev

# Copy certificates to nginx SSL directory
sudo cp /etc/letsencrypt/live/teamerror.dev/fullchain.pem ./docker/nginx/ssl/cert.pem
sudo cp /etc/letsencrypt/live/teamerror.dev/privkey.pem ./docker/nginx/ssl/key.pem
```

Then uncomment the HTTPS server block in `docker/nginx/nginx.conf`.

## 🌐 DNS Configuration

Point your domain records to your server:
```
@   A   YOUR_SERVER_IP
www A   YOUR_SERVER_IP
```

## 🗃️ Database Migration

After initial deployment:
```bash
# Run database migrations
docker-compose -f docker-compose.prod.yml exec backend python manage.py migrate

# Create superuser for admin access
docker-compose -f docker-compose.prod.yml exec backend python manage.py createsuperuser

# Load initial data (if applicable)
docker-compose -f docker-compose.prod.yml exec backend python manage.py loaddata initial_data.json
```

## 📁 Data Management

### Backup Database
```bash
# Create database backup
docker-compose -f docker-compose.prod.yml exec db pg_dump -U teamerror_user_prod teamerror_prod > backup.sql

# Restore database from backup
docker-compose -f docker-compose.prod.yml exec -T db psql -U teamerror_user_prod teamerror_prod < backup.sql
```

### Media Files
Media files are stored in a Docker volume. To backup:
```bash
# Create backup of media files
docker run --rm -v teamerror_media_volume:/source -v $(pwd):/backup alpine tar czf /backup/media_backup.tar.gz -C /source .
```

## 📊 Monitoring

### Container Monitoring
```bash
# View running containers
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Monitor resource usage
docker stats
```

### Application Health Checks
The application includes health check endpoints:
- Backend: `GET /health/`
- Database: Automatic connection pooling
- Frontend: Nginx status

## 🔧 Maintenance Procedures

### Updating the Application
```bash
# Pull latest code
git pull origin main

# Rebuild and restart containers
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up --build -d

# Run migrations if needed
docker-compose -f docker-compose.prod.yml exec backend python manage.py migrate
```

### Scaling Containers
```bash
# Scale backend workers
docker-compose -f docker-compose.prod.yml up --scale backend=3 -d
```

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Check database service status
   - Verify database credentials in environment files
   - Ensure network connectivity between containers

2. **Permission Denied Errors**
   - Check file ownership in containers
   - Verify volume mount permissions
   - Use appropriate user IDs

3. **Nginx Configuration Issues**
   - Validate nginx.conf syntax
   - Check file paths in volume mounts
   - Verify SSL certificate paths

4. **Docker Build Failures**
   - Check Dockerfile syntax
   - Verify dependency versions
   - Clear Docker build cache if needed

### Diagnostic Commands
```bash
# Check container logs
docker-compose -f docker-compose.prod.yml logs backend

# Execute shell in container
docker-compose -f docker-compose.prod.yml exec backend sh

# Inspect container configuration
docker inspect teamerror_backend_1

# Check network connectivity
docker-compose -f docker-compose.prod.yml exec backend ping db
```

## 🔒 Security Best Practices

1. **Environment Variables**
   - Never commit secrets to version control
   - Use Docker secrets for sensitive data
   - Rotate credentials regularly

2. **Container Security**
   - Run containers as non-root users
   - Use minimal base images
   - Scan images for vulnerabilities

3. **Network Security**
   - Limit exposed ports
   - Use internal networks for container communication
   - Implement rate limiting

4. **Application Security**
   - Keep dependencies updated
   - Enable CSRF protection
   - Validate all user inputs

## 🔄 CI/CD Integration

Example GitHub Actions workflow for automated deployment:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to server
      run: |
        ssh ${{ secrets.SERVER_USER }}@${{ secrets.SERVER_IP }} "
          cd /path/to/project &&
          git pull origin main &&
          docker-compose -f docker-compose.prod.yml down &&
          docker-compose -f docker-compose.prod.yml up --build -d
        "
```

## 📈 Performance Optimization

1. **Caching Strategy**
   - Redis for session storage
   - CDN for static assets
   - Browser caching headers

2. **Database Optimization**
   - Proper indexing
   - Query optimization
   - Connection pooling

3. **Frontend Optimization**
   - Code splitting
   - Image compression
   - Lazy loading

---

*Following this deployment guide will ensure your TeamError website is securely and efficiently deployed for production use.*