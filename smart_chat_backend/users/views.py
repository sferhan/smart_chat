from .serializers import UserSerializer
from .models import ChatUser
from rest_framework.response import Response
from rest_framework.decorators import api_view


# Create your views here.

@api_view(['GET'])
def user_list(request, ):
    users = ChatUser.objects.all().order_by('username')
    serializer = UserSerializer(instance=users, many=True)
    return Response(serializer.data)
