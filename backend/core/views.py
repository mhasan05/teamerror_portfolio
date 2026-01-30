from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from .models import Service, Portfolio, Testimonial, Contact, CompanyInfo, TeamMember
from .serializers import (
    ServiceSerializer, PortfolioSerializer, PortfolioListSerializer,
    TestimonialSerializer, ContactSerializer, CompanyInfoSerializer, TeamMemberSerializer
)
from .models import JobOpening, BlogPost
from .serializers import JobOpeningSerializer, BlogPostSerializer


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for services
    list: Get all active services
    retrieve: Get a specific service by slug or id
    """
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    lookup_field = 'slug'
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['title', 'short_description', 'technologies']
    ordering_fields = ['order', 'title', 'created_at']
    ordering = ['order']


class PortfolioViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for portfolio items
    list: Get all active portfolio items
    retrieve: Get a specific portfolio item by slug or id
    featured: Get featured portfolio items for homepage
    """
    queryset = Portfolio.objects.filter(is_active=True)
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['status', 'featured']
    search_fields = ['title', 'client_company', 'technologies', 'short_description']
    ordering_fields = ['project_date', 'order']
    ordering = ['-featured', 'order', '-project_date']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return PortfolioListSerializer
        return PortfolioSerializer
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured portfolio items for homepage"""
        featured_items = self.queryset.filter(featured=True)[:6]
        serializer = PortfolioListSerializer(featured_items, many=True)
        return Response(serializer.data)


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for testimonials
    list: Get all active testimonials
    retrieve: Get a specific testimonial
    featured: Get featured testimonials for homepage
    """
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['rating', 'featured', 'source']
    ordering_fields = ['rating', 'created_at', 'order']
    ordering = ['-featured', 'order', '-created_at']
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured testimonials for homepage"""
        featured_testimonials = self.queryset.filter(featured=True)[:6]
        serializer = self.serializer_class(featured_testimonials, many=True)
        return Response(serializer.data)


class ContactViewSet(viewsets.ModelViewSet):
    """
    API endpoint for contact submissions
    list: Get all contact submissions (admin only in production)
    create: Submit a contact form
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    
    def get_queryset(self):
        # In production, add authentication check here
        # For now, return all for admin access
        return self.queryset
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        return Response(
            {
                'message': 'Thank you for contacting us! We will get back to you soon.',
                'data': serializer.data
            },
            status=status.HTTP_201_CREATED
        )


class CompanyInfoViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for company information
    """
    queryset = CompanyInfo.objects.all()
    serializer_class = CompanyInfoSerializer
    
    def list(self, request, *args, **kwargs):
        """Return the singleton company info"""
        company_info = CompanyInfo.load()
        serializer = self.serializer_class(company_info)
        return Response(serializer.data)


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for team members
    """
    queryset = TeamMember.objects.filter(is_active=True)
    serializer_class = TeamMemberSerializer
    ordering = ['order', 'name']


class JobOpeningViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for job openings"""
    queryset = JobOpening.objects.filter(is_active=True)
    serializer_class = JobOpeningSerializer
    lookup_field = 'slug'
    ordering = ['-posted_at']


class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for blog posts"""
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['title', 'excerpt', 'content', 'category']
    ordering_fields = ['published_at']
