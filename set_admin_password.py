#!/usr/bin/env python
"""
Script to set admin password
Run: python set_admin_password.py
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

try:
    admin = User.objects.get(username='admin')
    admin.set_password('admin123')  # Change this password after first login!
    admin.save()
    print("✓ Admin password set successfully!")
    print("Username: admin")
    print("Password: admin123")
    print("\n⚠️  IMPORTANT: Change this password after first login!")
except User.DoesNotExist:
    print("Admin user not found. Please create one first.")
