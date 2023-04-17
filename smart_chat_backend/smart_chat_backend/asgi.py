"""
ASGI config for smart_chat_backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smart_chat_backend.settings')
asgi_app = get_asgi_application()

from chat import routing
from tokenauth_middleware import TokenAuthMiddleware

application = ProtocolTypeRouter({
    "http": asgi_app,
    "websocket": TokenAuthMiddleware(URLRouter(routing.websocket_urlpatterns))
})
