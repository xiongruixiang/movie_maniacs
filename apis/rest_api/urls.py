from django.urls import path
from apis.rest_api import views

urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('movie_list/', views.MovieListView.as_view(), name='movie_list'),
    # path('movie/<slug:movie_name_slug>/', views.MovieDetail.as_view(), name='movie_detail'),
    path('category/movie_list/', views.CategoryMovieListView.as_view(), name='category_movie_list'),
    path('movie/top_five_movies/', views.TopFiveMovies.as_view(), name='top_five_movies')
]