from django.contrib import admin
from .models import Service, Portfolio, Testimonial, Contact, CompanyInfo, TeamMember


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'order', 'is_active', 'pricing_info', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['title', 'short_description', 'technologies']
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ['order', 'is_active']
    ordering = ['order', 'title']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'icon', 'image', 'short_description', 'full_description')
        }),
        ('Technical Details', {
            'fields': ('technologies', 'process_steps', 'pricing_info')
        }),
        ('SEO & Display', {
            'fields': ('meta_description', 'order', 'is_active')
        }),
    )


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ['title', 'client_company', 'status', 'project_date', 'featured', 'order', 'is_active']
    list_filter = ['status', 'featured', 'is_active', 'project_date']
    search_fields = ['title', 'client_name', 'client_company', 'technologies']
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ['featured', 'order', 'is_active']
    date_hierarchy = 'project_date'
    ordering = ['-featured', 'order', '-project_date']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'client_name', 'client_company', 'short_description')
        }),
        ('Case Study Details', {
            'fields': ('challenge', 'solution', 'result')
        }),
        ('Media', {
            'fields': ('thumbnail', 'image1', 'image2', 'image3')
        }),
        ('Technical & Links', {
            'fields': ('technologies', 'live_url', 'github_url')
        }),
        ('Status & Display', {
            'fields': ('status', 'project_date', 'featured', 'order', 'is_active')
        }),
    )


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['client_name', 'client_company', 'rating', 'source', 'featured', 'order', 'is_active']
    list_filter = ['rating', 'source', 'featured', 'is_active', 'created_at']
    search_fields = ['client_name', 'client_company', 'review']
    list_editable = ['featured', 'order', 'is_active']
    ordering = ['-featured', 'order', '-created_at']
    
    fieldsets = (
        ('Client Information', {
            'fields': ('client_name', 'client_position', 'client_company', 'client_country', 'client_photo')
        }),
        ('Review', {
            'fields': ('review', 'rating', 'project')
        }),
        ('Media & Source', {
            'fields': ('video_url', 'source', 'source_url')
        }),
        ('Display', {
            'fields': ('featured', 'order', 'is_active')
        }),
    )


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'company', 'inquiry_type', 'status', 'submitted_at']
    list_filter = ['inquiry_type', 'status', 'submitted_at']
    search_fields = ['name', 'email', 'company', 'subject', 'message']
    list_editable = ['status']
    readonly_fields = ['submitted_at', 'updated_at']
    date_hierarchy = 'submitted_at'
    ordering = ['-submitted_at']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'phone', 'company')
        }),
        ('Inquiry Details', {
            'fields': ('inquiry_type', 'subject', 'message', 'budget', 'timeline')
        }),
        ('Status & Notes', {
            'fields': ('status', 'admin_notes', 'submitted_at', 'updated_at')
        }),
    )
    
    def has_add_permission(self, request):
        # Prevent adding contacts from admin (they come from frontend)
        return False


@admin.register(CompanyInfo)
class CompanyInfoAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Company Information', {
            'fields': ('company_name', 'tagline', 'about_short', 'about_full')
        }),
        ('Mission & Vision', {
            'fields': ('mission', 'vision', 'values')
        }),
        ('Contact Details', {
            'fields': ('email', 'phone', 'address')
        }),
        ('Social Media', {
            'fields': ('facebook_url', 'twitter_url', 'linkedin_url', 'github_url', 'instagram_url')
        }),
        ('Messaging & Booking', {
            'fields': ('whatsapp_number', 'telegram_username', 'calendly_url')
        }),
        ('Map & SEO', {
            'fields': ('google_maps_embed', 'meta_description', 'meta_keywords')
        }),
    )
    
    def has_add_permission(self, request):
        # Only allow one instance
        return not CompanyInfo.objects.exists()
    
    def has_delete_permission(self, request, obj=None):
        # Prevent deletion of company info
        return False


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'position', 'order', 'is_active']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'position', 'bio', 'skills']
    list_editable = ['order', 'is_active']
    ordering = ['order', 'name']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'position', 'bio', 'photo')
        }),
        ('Social Links', {
            'fields': ('linkedin_url', 'github_url', 'twitter_url')
        }),
        ('Skills & Display', {
            'fields': ('skills', 'order', 'is_active')
        }),
    )


# Customize admin site
admin.site.site_header = "Software Company Admin"
admin.site.site_title = "Admin Portal"
admin.site.index_title = "Welcome to Software Company Admin Portal"
