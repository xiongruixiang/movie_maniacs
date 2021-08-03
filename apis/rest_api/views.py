from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from apis.models import Movie
from apis.serializer import MovieSerializer
from django.http import JsonResponse

class LoginView(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # user = authenticate(username=username, password=password)
        # token = Token.objects.create(user=user)

        # try:
        #     user = User.objects.filter(username=username)
        # except User.DoseNotExist:
        #     return Response({'message': '用户名错误'}, status=status.HTTP_401_UNAUTHORIZED)
        # password = User.check_password(password)
        # if not password:
        #     return Response({'message': '密码错误'}, status=status.HTTP_401_UNAUTHORIZED)

        return Response({'message':'login success!', 'status': 200}, status=status.HTTP_200_OK)

class SignupView(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # username是唯一的

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