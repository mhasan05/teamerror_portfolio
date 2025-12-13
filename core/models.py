from django.db import models
from django.utils.text import slugify


class Service(models.Model):
    """Services offered by the company"""
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    short_description = models.TextField(max_length=500)
    full_description = models.TextField()
    icon = models.CharField(max_length=100, help_text="Icon class name (e.g., 'fas fa-laptop-code')")
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    
    # Technologies used
    technologies = models.TextField(help_text="Comma-separated list of technologies")
    
    # Process steps (JSON or text)
    process_steps = models.TextField(
        help_text="Process steps, one per line",
        blank=True
    )
    
    # Pricing
    pricing_info = models.CharField(
        max_length=200,
        default="Request Quote",
        help_text="e.g., 'Starting at $999' or 'Request Quote'"
    )
    
    # SEO
    meta_description = models.CharField(max_length=160, blank=True)
    
    # Order and status
    order = models.IntegerField(default=0, help_text="Display order")
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', 'title']
        verbose_name = 'Service'
        verbose_name_plural = 'Services'
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title


class Portfolio(models.Model):
    """Portfolio/Case Studies"""
    PROJECT_STATUS = [
        ('completed', 'Completed'),
        ('ongoing', 'Ongoing'),
        ('maintenance', 'Maintenance'),
    ]
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    client_name = models.CharField(max_length=200, blank=True)
    client_company = models.CharField(max_length=200, blank=True)
    
    # Project details
    short_description = models.TextField(max_length=500)
    challenge = models.TextField(help_text="Problem the client faced")
    solution = models.TextField(help_text="How you solved it")
    result = models.TextField(help_text="Results achieved")
    
    # Media
    thumbnail = models.ImageField(upload_to='portfolio/thumbnails/')
    image1 = models.ImageField(upload_to='portfolio/images/', blank=True, null=True)
    image2 = models.ImageField(upload_to='portfolio/images/', blank=True, null=True)
    image3 = models.ImageField(upload_to='portfolio/images/', blank=True, null=True)
    
    # Tech stack
    technologies = models.TextField(help_text="Comma-separated list of technologies")
    
    # Links
    live_url = models.URLField(blank=True, help_text="Live demo URL")
    github_url = models.URLField(blank=True, help_text="GitHub repository URL")
    
    # Status
    status = models.CharField(max_length=20, choices=PROJECT_STATUS, default='completed')
    project_date = models.DateField(help_text="Project completion/start date")
    
    # Display
    featured = models.BooleanField(default=False, help_text="Show on homepage")
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-featured', 'order', '-project_date']
        verbose_name = 'Portfolio Item'
        verbose_name_plural = 'Portfolio Items'
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title


class Testimonial(models.Model):
    """Client testimonials and reviews"""
    RATING_CHOICES = [(i, str(i)) for i in range(1, 6)]
    
    client_name = models.CharField(max_length=200)
    client_position = models.CharField(max_length=200, help_text="e.g., CEO, Founder")
    client_company = models.CharField(max_length=200)
    client_country = models.CharField(max_length=100, blank=True)
    client_photo = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    
    # Review content
    review = models.TextField()
    rating = models.IntegerField(choices=RATING_CHOICES, default=5)
    
    # Project reference
    project = models.ForeignKey(
        Portfolio,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='testimonials'
    )
    
    # Media
    video_url = models.URLField(blank=True, help_text="Optional video testimonial URL")
    
    # Source
    SOURCE_CHOICES = [
        ('fiverr', 'Fiverr'),
        ('upwork', 'Upwork'),
        ('direct', 'Direct Client'),
        ('other', 'Other'),
    ]
    source = models.CharField(max_length=20, choices=SOURCE_CHOICES, default='direct')
    source_url = models.URLField(blank=True, help_text="Link to review on platform")
    
    # Display
    featured = models.BooleanField(default=False, help_text="Show on homepage")
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-featured', 'order', '-created_at']
        verbose_name = 'Testimonial'
        verbose_name_plural = 'Testimonials'
    
    def __str__(self):
        return f"{self.client_name} - {self.client_company}"


class Contact(models.Model):
    """Contact form submissions"""
    INQUIRY_TYPE = [
        ('consultation', 'Free Consultation'),
        ('quote', 'Request Quote'),
        ('support', 'Support'),
        ('general', 'General Inquiry'),
    ]
    
    # Contact info
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=200, blank=True)
    
    # Inquiry details
    inquiry_type = models.CharField(max_length=20, choices=INQUIRY_TYPE, default='general')
    subject = models.CharField(max_length=200)
    message = models.TextField()
    
    # Project details (optional)
    budget = models.CharField(max_length=100, blank=True)
    timeline = models.CharField(max_length=100, blank=True)
    
    # Status
    STATUS_CHOICES = [
        ('new', 'New'),
        ('in_progress', 'In Progress'),
        ('responded', 'Responded'),
        ('closed', 'Closed'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    
    # Timestamps
    submitted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Notes (for admin)
    admin_notes = models.TextField(blank=True)
    
    class Meta:
        ordering = ['-submitted_at']
        verbose_name = 'Contact Submission'
        verbose_name_plural = 'Contact Submissions'
    
    def __str__(self):
        return f"{self.name} - {self.inquiry_type} - {self.submitted_at.strftime('%Y-%m-%d')}"


class CompanyInfo(models.Model):
    """Company information (singleton model)"""
    # About
    company_name = models.CharField(max_length=200, default="Your Company Name")
    tagline = models.CharField(max_length=500, default="We build scalable web, mobile & AI-powered solutions")
    about_short = models.TextField(help_text="Short description for homepage")
    about_full = models.TextField(help_text="Full about us content")
    
    # Mission & Vision
    mission = models.TextField(blank=True)
    vision = models.TextField(blank=True)
    values = models.TextField(blank=True, help_text="Company values, one per line")
    
    # Contact details
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField()
    
    # Social media
    facebook_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    instagram_url = models.URLField(blank=True)
    
    # Messaging platforms
    whatsapp_number = models.CharField(max_length=20, blank=True, help_text="With country code, e.g., +1234567890")
    telegram_username = models.CharField(max_length=100, blank=True)
    
    # Booking
    calendly_url = models.URLField(blank=True, help_text="Calendly booking link")
    
    # Map
    google_maps_embed = models.TextField(blank=True, help_text="Google Maps embed iframe code")
    
    # SEO
    meta_description = models.CharField(max_length=160, blank=True)
    meta_keywords = models.TextField(blank=True)
    
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Company Information'
        verbose_name_plural = 'Company Information'
    
    def save(self, *args, **kwargs):
        # Ensure only one instance exists
        self.pk = 1
        super().save(*args, **kwargs)
    
    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        return obj
    
    def __str__(self):
        return self.company_name


class TeamMember(models.Model):
    """Team members"""
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    bio = models.TextField(blank=True)
    photo = models.ImageField(upload_to='team/')
    
    # Social links
    linkedin_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    
    # Skills
    skills = models.TextField(help_text="Comma-separated list of skills", blank=True)
    
    # Display
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', 'name']
        verbose_name = 'Team Member'
        verbose_name_plural = 'Team Members'
    
    def __str__(self):
        return f"{self.name} - {self.position}"
