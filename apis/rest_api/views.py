from django.http import HttpResponse
from django.shortcuts import render

def get_message(request):
    html = 'This message is from rest_api view'
    return HttpResponse(html)