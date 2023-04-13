from django.apps.config import AppConfig
import logging

LOG = logging.getLogger(__name__)


class StudentManagementSystemConfig(AppConfig):
    name = 'smart_chat_backend'
    label = 'smart_chat_backend'

    def ready(self):
        LOG.info('Image Gallery system is up and ready')
