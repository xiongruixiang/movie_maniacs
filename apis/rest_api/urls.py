from django.urls import path
from apis.rest_api import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('movie_list/', views.MovieListView.as_view(), name='movie_list'),
    path('movie/top_five_movies/', views.TopFiveMovies.as_view(), name='top_five_movies'),
    path('movie/<slug:movie_name_slug>/', views.MovieDetail.as_view(), name='movie_detail'),
    path('category/<slug:category_name_slug>/', views.CategoryList.as_view(), name='get_category_movies'),
]