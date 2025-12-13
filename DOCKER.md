# TeamError Website - Docker Documentation

This document explains how to run the TeamError website using Docker containers. Dockerizing the application provides consistent environments across development, testing, and production.

## 🐳 Docker Architecture

The project uses a multi-container setup:
1. **Frontend Container** - React application served by Nginx
2. **Backend Container** - Django application with Gunicorn
3. **Database Container** - PostgreSQL database
4. **Nginx Container** - Reverse proxy and static file serving

## 📁 Project Structure with Docker Files

```
AI Project/
├── backend/                 # Django backend
├── core/                    # Main Django app
├── frontend/                # React frontend
├── docker/                  # Docker configuration
│   ├── nginx/              # Nginx configuration
│   │   ├── Dockerfile
│   │   └── nginx.conf
│   ├── postgres/           # PostgreSQL configuration
│   │   └── init-scripts/
│   ├── docker-compose.yml  # Docker Compose configuration
│   ├── docker-compose.prod.yml  # Production configuration
│   └── .dockerignore
├── manage.py
├── requirements.txt
├── .env.example
└── Documentation Files
```

## 🐳 Docker Compose Configuration

### Development Environment (docker-compose.yml)

```yaml
version: '3.8'

services:
  db:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    environment:
      - POSTGRES_DB=teamerror_dev
      - POSTGRES_USER=teamerror_user
      - POSTGRES_PASSWORD=teamerror_pass
    ports:
      - "5432:5432"

  backend:
    build:
      context: .
      dockerfile: docker/backend/Dockerfile
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/app
    ports:
      - "8000:8000"
    environment:
      - DEBUG=True
      - DATABASE_URL=postgresql://teamerror_user:teamerror_pass@db:5432/teamerror_dev
      - CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000
    depends_on:
      - db

  frontend:
    build:
      context: ./frontend
      dockerfile: ../docker/frontend/Dockerfile.dev
    volumes:
      - ./frontend:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - CHOKIDAR_USEPOLLING=true
    depends_on:
      - backend

volumes:
  postgres_data:
```

### Production Environment (docker-compose.prod.yml)

```yaml
version: '3.8'

services:
  db:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    environment:
      - POSTGRES_DB=teamerror_prod
      - POSTGRES_USER=${DB_USER}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    env_file:
      - .env.prod.db

  backend:
    build:
      context: .
      dockerfile: docker/backend/Dockerfile.prod
    command: gunicorn backend.wsgi:application --bind 0.0.0.0:8000
    volumes:
      - static_volume:/app/staticfiles
      - media_volume:/app/media
    expose:
      - "8000"
    environment:
      - DEBUG=False
      - DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@db:5432/teamerror_prod
      - CORS_ALLOWED_ORIGINS=${FRONTEND_URL}
    env_file:
      - .env.prod
    depends_on:
      - db

  frontend:
    build:
      context: ./frontend
      dockerfile: ../docker/frontend/Dockerfile.prod
    volumes:
      - frontend_build:/app/dist
    expose:
      - "80"

  nginx:
    build: ./docker/nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - static_volume:/app/staticfiles
      - media_volume:/app/media
      - frontend_build:/var/www/frontend
      - ./docker/nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./docker/nginx/ssl:/etc/nginx/ssl
    depends_on:
      - backend
      - frontend
    env_file:
      - .env.prod

volumes:
  postgres_data:
  static_volume:
  media_volume:
  frontend_build:
```

## 📦 Dockerfiles

### Backend Development Dockerfile (docker/backend/Dockerfile)

```dockerfile
# Use Python 3.11 slim image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app/

# Create a non-root user
RUN adduser --disabled-password --gecos '' appuser
RUN chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8000

# Run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

### Backend Production Dockerfile (docker/backend/Dockerfile.prod)

```dockerfile
# Use Python 3.11 slim image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app/

# Collect static files
RUN python manage.py collectstatic --noinput

# Create a non-root user
RUN adduser --disabled-password --gecos '' appuser
RUN chown -R appuser:appuser /app
USER appuser

# Expose port
EXPOSE 8000

# Run the application with Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "backend.wsgi:application"]
```

### Frontend Development Dockerfile (docker/frontend/Dockerfile.dev)

```dockerfile
# Use Node 18 alpine image
FROM node:18-alpine

# Set work directory
WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY frontend/ ./

# Expose port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

### Frontend Production Dockerfile (docker/frontend/Dockerfile.prod)

```dockerfile
# Use Node 18 alpine image for building
FROM node:18-alpine as build

# Set work directory
WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy project files
COPY frontend/ ./

# Build for production
RUN npm run build

# Use Nginx alpine for serving
FROM nginx:alpine

# Copy build files to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy Nginx configuration
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
```

## 🌐 Nginx Configuration

### Nginx Dockerfile (docker/nginx/Dockerfile)

```dockerfile
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80
EXPOSE 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

### Nginx Configuration (docker/nginx/nginx.conf)

```nginx
events {
    worker_connections 1024;
}

http {
    upstream backend {
        server backend:8000;
    }

    upstream frontend {
        server frontend:80;
    }

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

    server {
        listen 80;
        server_name localhost;

        # Frontend static files
        location / {
            root /var/www/frontend;
            try_files $uri $uri/ /index.html;
        }

        # Backend API
        location /api/ {
            limit_req zone=api burst=20 nodelay;
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Admin panel
        location /admin/ {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Static files
        location /static/ {
            alias /app/staticfiles/;
        }

        # Media files
        location /media/ {
            alias /app/media/;
        }
    }

    # HTTPS server (if SSL certificates are provided)
    server {
        listen 443 ssl;
        server_name localhost;

        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/key.pem;

        # Frontend static files
        location / {
            root /var/www/frontend;
            try_files $uri $uri/ /index.html;
        }

        # Backend API
        location /api/ {
            limit_req zone=api burst=20 nodelay;
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Admin panel
        location /admin/ {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Static files
        location /static/ {
            alias /app/staticfiles/;
        }

        # Media files
        location /media/ {
            alias /app/media/;
        }
    }
}
```

## ⚙️ Environment Configuration

### Development Environment Files

**.env.dev.db**
```env
POSTGRES_DB=teamerror_dev
POSTGRES_USER=teamerror_user
POSTGRES_PASSWORD=teamerror_pass
```

**.env.dev**
```env
DEBUG=True
SECRET_KEY=your-development-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=postgresql://teamerror_user:teamerror_pass@db:5432/teamerror_dev
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:8000
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
```

### Production Environment Files

**.env.prod.db**
```env
POSTGRES_DB=teamerror_prod
POSTGRES_USER=teamerror_user_prod
POSTGRES_PASSWORD=your-secure-db-password
```

**.env.prod**
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

## ▶️ Running with Docker

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-project
   ```

2. **Create environment files**
   ```bash
   cp .env.example .env.dev
   cp .env.example .env.dev.db
   # Edit these files with your settings
   ```

3. **Build and run containers**
   ```bash
   docker-compose up --build
   ```

4. **Run migrations**
   ```bash
   docker-compose exec backend python manage.py migrate
   ```

5. **Create superuser**
   ```bash
   docker-compose exec backend python manage.py createsuperuser
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api/
   - Admin Panel: http://localhost:8000/admin/

### Production Setup

1. **Prepare environment files**
   ```bash
   cp .env.example .env.prod
   cp .env.example .env.prod.db
   # Edit these files with production settings
   ```

2. **Build and run production containers**
   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

3. **Run migrations**
   ```bash
   docker-compose -f docker-compose.prod.yml exec backend python manage.py migrate
   ```

4. **Create superuser**
   ```bash
   docker-compose -f docker-compose.prod.yml exec backend python manage.py createsuperuser
   ```

5. **Collect static files**
   ```bash
   docker-compose -f docker-compose.prod.yml exec backend python manage.py collectstatic --noinput
   ```

6. **Access the application at your domain**

## 🛠️ Management Commands

### Common Docker Commands

```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs

# Execute commands in containers
docker-compose exec backend python manage.py shell
docker-compose exec db psql -U teamerror_user -d teamerror_dev

# Stop containers
docker-compose down

# Remove containers and volumes
docker-compose down -v

# Rebuild containers
docker-compose up --build --force-recreate
```

### Database Management

```bash
# Create database backup
docker-compose exec db pg_dump -U teamerror_user teamerror_dev > backup.sql

# Restore database from backup
docker-compose exec -T db psql -U teamerror_user teamerror_dev < backup.sql
```

## 🔒 Security Considerations

### Docker Security Best Practices

1. **Use non-root users** in containers
2. **Minimize attack surface** by using slim images
3. **Scan images** for vulnerabilities regularly
4. **Update dependencies** frequently
5. **Use secrets management** for sensitive data
6. **Implement network segmentation** between services
7. **Enable rate limiting** for API endpoints
8. **Use HTTPS** in production

### Environment Variables Security

1. **Never commit secrets** to version control
2. **Use Docker secrets** for sensitive data
3. **Rotate credentials** regularly
4. **Limit permissions** for database users
5. **Use strong passwords** for all services

## 🚀 Scaling Considerations

### Horizontal Scaling

1. **Multiple backend instances**
   ```yaml
   backend:
     # ... other config
     deploy:
       replicas: 3
   ```

2. **Load balancing** with Nginx
3. **Database read replicas**
4. **CDN for static assets**
5. **Caching layers** (Redis/Memcached)

### Resource Management

```yaml
services:
  backend:
    # ... other config
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
```

## 🧪 Testing in Docker

### Running Tests

```bash
# Run backend tests
docker-compose exec backend python manage.py test

# Run frontend tests
docker-compose exec frontend npm test

# Run integration tests
docker-compose -f docker-compose.test.yml up --abort-on-container-exit
```

## 🔄 CI/CD Integration

### GitHub Actions Example

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

## 📊 Monitoring and Logging

### Docker Logging

```yaml
services:
  backend:
    # ... other config
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

### Health Checks

```yaml
services:
  backend:
    # ... other config
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health/"]
      interval: 30s
      timeout: 10s
      retries: 3
```

## 🆘 Troubleshooting

### Common Issues

1. **Database connection errors**
   - Check database service is running
   - Verify database credentials
   - Ensure network connectivity between services

2. **Permission denied errors**
   - Check file ownership in containers
   - Verify volume mount permissions
   - Use appropriate user IDs

3. **Port conflicts**
   - Check host port availability
   - Modify port mappings in compose file
   - Stop conflicting services

4. **Build failures**
   - Check Dockerfile syntax
   - Verify dependency versions
   - Clear Docker build cache

### Debugging Commands

```bash
# View container logs
docker-compose logs backend

# Execute shell in container
docker-compose exec backend sh

# Inspect container configuration
docker inspect <container_name>

# Check network connectivity
docker-compose exec backend ping db
```

---

*Dockerizing the TeamError website ensures consistent environments and simplifies deployment across different platforms.*