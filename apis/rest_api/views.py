from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from apis.models import Movie, Category, Review
from apis.serializer import MovieSerializer, ReviewSerializer
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        if user.is_active:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'message': 'Login success!', 'status': 200, 'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Your account is disabled.', 'status': 'failed'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Account or password error.', 'status': 'failed'}, status=status.HTTP_200_OK)


@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    user = User.objects.filter(username=username)

    if len(user) != 0:
        return Response({'message': 'Account already exists', 'status': 'failed'}, status=status.HTTP_200_OK)

    # Create User instance
    User.objects.create_user(username, email, password)

    user = authenticate(username=username, password=password)

    token, created = Token.objects.get_or_create(user=user)

    return Response({'message': 'Signup success!', 'status': 200, 'token': token.key}, status=status.HTTP_200_OK)

@api_view(['GET'])
def movie_list(request):
    movie_list = Movie.objects.all()
    serializer = MovieSerializer(movie_list, many=True)
    return Response({'data': serializer.data, 'status': 200}, status=status.HTTP_200_OK)

@api_view(['GET'])
def top_five_movies(request):
    top_five = Movie.objects.order_by('-rating')[:5]
    serializer = MovieSerializer(top_five, many=True)
    return Response({'data': serializer.data, 'status': 200}, status=status.HTTP_200_OK)

@api_view(['GET'])
def movie_detail(request, movie_name_slug):

    try:
        movie = Movie.objects.get(slug=movie_name_slug)
    except Movie.DoesNotExist:
        movie = None

    if movie is None:
        return Response({'message': "Sorry, we can't find any information about this movie.", 'status': 'failed'}, status=status.HTTP_200_OK)

    serializer = MovieSerializer(movie)

    review = Review.objects.filter(movie_name=movie.movie_name)
    r_serializer = ReviewSerializer(review, many=True)

    user = []

    for r in review:
        user.append(r.user.username)

    return Response({'data': serializer.data, 'review': r_serializer.data, 'status': 200, 'user': user}, status=status.HTTP_200_OK)

@api_view(['GET'])
def category_movie_list(request, category_name_slug):
    try:
        category = Category.objects.get(slug=category_name_slug)
    except Category.DoesNotExist:
        category = None

    if category is None:
        return Response({'message': 'There are no movies in this category.', 'status': 'failed'}, status=status.HTTP_200_OK)

    movie_list = Movie.objects.filter(category=category)
    serializer = MovieSerializer(movie_list, many=True)
    return Response({'data': serializer.data, 'status': 200}, status=status.HTTP_200_OK)

@api_view(['POST'])
def write_review(request, movie_name_slug):
    movie = Movie.objects.get(slug=movie_name_slug)

    content = request.data.get('content')
    username = request.data.get('username')
    rating = request.data.get('rating')

    user = User.objects.filter(username=username)[0]

    Review.objects.create(user=user, movie_name=movie.movie_name, rating=rating, content=content)

    return Response({'message': 'Add review success!', 'status': 200}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_all_review(request):
    review = Review.objects.all()
    r_serializer = ReviewSerializer(review, many=True)
    return Response({'review': r_serializer.data, 'status': 200}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_latest_five_movies(request):
    top_five = Movie.objects.order_by('-release_date')[:5]
    serializer = MovieSerializer(top_five, many=True)
    return Response({'data': serializer.data, 'status': 200}, status=status.HTTP_200_OK)

@api_view(['POST'])
def add_likes(request, movie_name_slug):
    movie_name = request.data.get('movie_name')
    new_likes = int(request.data.get('new_likes'))
    review_index = int(request.data.get('review_index'))
    review = Review.objects.filter(movie_name=movie_name)[review_index]
    review.likes = new_likes
    review.save()
    return Response({'message': 'success', 'status': 200}, status=status.HTTP_200_OK)