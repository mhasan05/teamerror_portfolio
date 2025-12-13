from rest_framework import serializers
from .models import Service, Portfolio, Testimonial, Contact, CompanyInfo, TeamMember


class ServiceSerializer(serializers.ModelSerializer):
    technologies_list = serializers.SerializerMethodField()
    process_steps_list = serializers.SerializerMethodField()
    
    class Meta:
        model = Service
        fields = [
            'id', 'title', 'slug', 'short_description', 'full_description',
            'icon', 'image', 'technologies', 'technologies_list',
            'process_steps', 'process_steps_list', 'pricing_info',
            'order', 'is_active', 'created_at', 'updated_at'
        ]
        read_only_fields = ['slug', 'created_at', 'updated_at']
    
    def get_technologies_list(self, obj):
        if obj.technologies:
            return [tech.strip() for tech in obj.technologies.split(',')]
        return []
    
    def get_process_steps_list(self, obj):
        if obj.process_steps:
            return [step.strip() for step in obj.process_steps.split('\n') if step.strip()]
        return []


class PortfolioSerializer(serializers.ModelSerializer):
    technologies_list = serializers.SerializerMethodField()
    testimonials = serializers.SerializerMethodField()
    
    class Meta:
        model = Portfolio
        fields = [
            'id', 'title', 'slug', 'client_name', 'client_company',
            'short_description', 'challenge', 'solution', 'result',
            'thumbnail', 'image1', 'image2', 'image3',
            'technologies', 'technologies_list', 'live_url', 'github_url',
            'status', 'project_date', 'featured', 'order', 'is_active',
            'testimonials', 'created_at', 'updated_at'
        ]
        read_only_fields = ['slug', 'created_at', 'updated_at']
    
    def get_technologies_list(self, obj):
        if obj.technologies:
            return [tech.strip() for tech in obj.technologies.split(',')]
        return []
    
    def get_testimonials(self, obj):
        testimonials = obj.testimonials.filter(is_active=True)
        return TestimonialSerializer(testimonials, many=True).data


class PortfolioListSerializer(serializers.ModelSerializer):
    """Simplified serializer for portfolio list view"""
    technologies_list = serializers.SerializerMethodField()
    
    class Meta:
        model = Portfolio
        fields = [
            'id', 'title', 'slug', 'client_company', 'short_description',
            'thumbnail', 'technologies', 'technologies_list', 'live_url',
            'status', 'project_date', 'featured'
        ]
    
    def get_technologies_list(self, obj):
        if obj.technologies:
            return [tech.strip() for tech in obj.technologies.split(',')]
        return []


class TestimonialSerializer(serializers.ModelSerializer):
    project_title = serializers.CharField(source='project.title', read_only=True)
    
    class Meta:
        model = Testimonial
        fields = [
            'id', 'client_name', 'client_position', 'client_company',
            'client_country', 'client_photo', 'review', 'rating',
            'project', 'project_title', 'video_url', 'source', 'source_url',
            'featured', 'order', 'is_active', 'created_at'
        ]
        read_only_fields = ['created_at']


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = [
            'id', 'name', 'email', 'phone', 'company',
            'inquiry_type', 'subject', 'message', 'budget', 'timeline',
            'status', 'submitted_at'
        ]
        read_only_fields = ['status', 'submitted_at']
    
    def create(self, validated_data):
        # Here you can add email notification logic
        contact = Contact.objects.create(**validated_data)
        # TODO: Send email notification to admin
        return contact


class CompanyInfoSerializer(serializers.ModelSerializer):
    values_list = serializers.SerializerMethodField()
    
    class Meta:
        model = CompanyInfo
        fields = [
            'id', 'company_name', 'tagline', 'about_short', 'about_full',
            'mission', 'vision', 'values', 'values_list',
            'email', 'phone', 'address',
            'facebook_url', 'twitter_url', 'linkedin_url', 'github_url', 'instagram_url',
            'whatsapp_number', 'telegram_username', 'calendly_url',
            'google_maps_embed', 'meta_description', 'meta_keywords'
        ]
    
    def get_values_list(self, obj):
        if obj.values:
            return [value.strip() for value in obj.values.split('\n') if value.strip()]
        return []


class TeamMemberSerializer(serializers.ModelSerializer):
    skills_list = serializers.SerializerMethodField()
    
    class Meta:
        model = TeamMember
        fields = [
            'id', 'name', 'position', 'bio', 'photo',
            'linkedin_url', 'github_url', 'twitter_url',
            'skills', 'skills_list', 'order', 'is_active'
        ]
    
    def get_skills_list(self, obj):
        if obj.skills:
            return [skill.strip() for skill in obj.skills.split(',')]
        return []
