from django.conf.global_settings import LANGUAGES
from django.contrib.auth.models import AbstractUser
from django.db.models import CharField


class ChatUser(AbstractUser):
    preferred_language = CharField(max_length=10, choices=[l for l in LANGUAGES])
