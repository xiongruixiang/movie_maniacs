from django.conf.urls import include
from apis import views
from django.urls import path

urlpatterns = [
    path('', views.react),
    path('api/', include('apis.rest_api.urls')),
]