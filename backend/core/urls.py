from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ServiceViewSet, PortfolioViewSet, TestimonialViewSet,
    ContactViewSet, CompanyInfoViewSet, TeamMemberViewSet,
    JobOpeningViewSet, BlogPostViewSet
)

router = DefaultRouter()
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'portfolio', PortfolioViewSet, basename='portfolio')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'contact', ContactViewSet, basename='contact')
router.register(r'company-info', CompanyInfoViewSet, basename='company-info')
router.register(r'team', TeamMemberViewSet, basename='team')
router.register(r'jobs', JobOpeningViewSet, basename='job')
router.register(r'posts', BlogPostViewSet, basename='post')

urlpatterns = [
    path('', include(router.urls)),
]
