from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from apis.models import Movie, UserProfile
from apis.serializer import MovieSerializer
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

class LoginView(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user:
            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                return Response({'message': 'Login success!', 'status': 200, 'token': token.key}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Your account is disabled.', 'status': 'failed'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'message': 'Account or password error.', 'status': 'failed'},status=status.HTTP_401_UNAUTHORIZED)


class SignupView(APIView):

    def post(self, request):

        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        user = User.objects.filter(username=username)

        if len(user) != 0:
            return Response({'message': 'Account already exists', 'status': 'failed'}, status=status.HTTP_401_UNAUTHORIZED)

        # Create User instance
        User.objects.create_user(username, email, password)

        return Response({'message': 'Signup success!', 'status': 200}, status=status.HTTP_200_OK)


class LogoutView(APIView):

    def post(self, request):

        # logout
        password = request.data.get('Token')

        return Response({'message': 'Logout success!', 'status': 200}, status=status.HTTP_200_OK)

class MovieListView(APIView):

    def get(self, request):

        movie_list = Movie.objects.all()

        serializer = MovieSerializer(movie_list, many=True)

        return JsonResponse(serializer.data, status=200, safe=False)

class CategoryMovieListView(APIView):

    def post(self, request):

        category = request.data.get('category')

        return Response({'message': 'Request category success!', 'status': 200}, status=status.HTTP_200_OK)

class MovieDetail(APIView):

    def post(self, request, movie_name_slug):

        print(movie_name_slug)

        # movie = Movie.objects.get(slug=movie_name_slug)

        # serializer = MovieSerializer(movie, many=True)

        movie_list = Movie.objects.all()

        serializer = MovieSerializer(movie_list, many=True)

        return JsonResponse(serializer.data, status=200, safe=False)


class TopFiveMovies(APIView):

    def get(self, request):

        top_five = Movie.objects.order_by('-rating')[:5]

        print(top_five)

        serializer = MovieSerializer(top_five, many=True)

        return JsonResponse(serializer.data, status=200, safe=False)