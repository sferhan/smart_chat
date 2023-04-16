from django.http import HttpResponse

from users.models import ChatUser


def hello(request):
    a = ChatUser.objects.all().count()
    print(f"\n\n\na\n\n\n")
    return HttpResponse("Hello World")
