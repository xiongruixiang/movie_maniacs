from django.conf.urls import include
from apis import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.react),
    path('login/', views.react),
    path('signup/', views.react),
    path('api/', include('apis.rest_api.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)