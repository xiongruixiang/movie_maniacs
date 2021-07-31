from django.conf.urls import url
from django.conf.urls import include
from rest_framework import routers
from django.urls import path

from apis.rest_api import views

urlpatterns = [
    path('message/', views.get_message, name='get_message'),
]