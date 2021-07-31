from django.shortcuts import render
from django.http import HttpResponseRedirect
from rest_framework.views import APIView
from rest_framework import viewsets
from django.conf import settings

def react(request):
    # SERVER_ADDR = settings.SERVER_ADDR
    return render(request, 'build/index.html')