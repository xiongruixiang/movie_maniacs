from django.shortcuts import render
from django.conf import settings

def react(request):
    # SERVER_ADDR = settings.SERVER_ADDR
    return render(request, 'build/index.html')
