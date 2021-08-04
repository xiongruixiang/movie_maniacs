from django.contrib import admin
from apis.models import UserProfile, Category, Movie

admin.site.register(Category)
admin.site.register(Movie)
admin.site.register(UserProfile)
