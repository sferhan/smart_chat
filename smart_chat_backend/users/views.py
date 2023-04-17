from rest_framework.viewsets import ModelViewSet

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


class UserViewSet(ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = ChatUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
