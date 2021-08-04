from django.conf.urls import include
from apis import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    path('', views.react),
    path('login/', views.react),
    path('signup/', views.react),
    path('api/', include('apis.rest_api.urls')),
    path('admin/', admin.site.urls),
    path('movie/<slug:movie_name_slug>/', views.react),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)