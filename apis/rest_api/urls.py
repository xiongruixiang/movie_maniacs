from django.urls import path
from apis.rest_api import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('movie_list/', views.movie_list, name='movie_list'),
    path('movie/top_five_movies/', views.top_five_movies, name='top_five_movies'),
    path('movie/<slug:movie_name_slug>/', views.movie_detail, name='movie_detail'),
    path('category/<slug:category_name_slug>/', views.category_movie_list, name='get_category_movies'),
]