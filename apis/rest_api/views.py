from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LoginView(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # try:
        #     user = User.objects.filter(username=username)
        # except User.DoseNotExist:
        #     return Response({'message': '用户名错误'}, status=status.HTTP_401_UNAUTHORIZED)
        # password = User.check_password(password)
        # if not password:
        #     return Response({'message': '密码错误'}, status=status.HTTP_401_UNAUTHORIZED)

        return Response({'message':'login success!', 'status': 200}, status=status.HTTP_200_OK)
