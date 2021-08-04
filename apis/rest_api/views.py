from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from apis.models import Movie, UserProfile, Category
from apis.serializer import MovieSerializer
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from django.http import HttpResponse

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
            return Response({'message': 'Your account is disabled.', 'status': 'failed'},
                            status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response({'message': 'Account or password error.', 'status': 'failed'},
                        status=status.HTTP_401_UNAUTHORIZED)


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

    return Response({'message': 'Signup success!', 'status': 200}, status=status.HTTP_200_OK)


class LogoutView(APIView):

    def get(self, request):
        return Response({'message': 'Logout success!', 'status': 200}, status=status.HTTP_200_OK)

class MovieListView(APIView):

    def get(self, request):
        movie_list = Movie.objects.all()
        serializer = MovieSerializer(movie_list, many=True)
        return JsonResponse(serializer.data, status=200, safe=False)

class TopFiveMovies(APIView):

    def get(self, request):
        top_five = Movie.objects.order_by('-rating')[:5]
        serializer = MovieSerializer(top_five, many=True)
        return JsonResponse(serializer.data, status=200, safe=False)


class MovieDetail(APIView):

    def get(self, request, movie_name_slug):
        movie = Movie.objects.get(slug=movie_name_slug)
        serializer = MovieSerializer(movie)
        return JsonResponse(serializer.data, status=200, safe=False)

class CategoryList(APIView):

    def get(self, request, category_name_slug):

        try:
            category = Category.objects.get(slug=category_name_slug)
        except Category.DoesNotExist:
            category = None

        if category is None:
            return Response({'message': 'There are no movies in this category.', 'status': 200}, status=status.HTTP_200_OK)

        movie_list = Movie.objects.filter(category=category)
        serializer = MovieSerializer(movie_list, many=True)
        return JsonResponse(serializer.data, status=200, safe=False)