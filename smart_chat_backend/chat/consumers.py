import base64
import json
import secrets
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.core.files.base import ContentFile
from .models import Message, Conversation
from .serializers import MessageSerializer
import logging
LOG = logging.getLogger(__name__)


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        print("here")
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"chat_{self.room_name}"

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

    def _save_message(self, message_data):
        sender = self.scope['user']
        text_data_json = message_data.copy()
        message, attachment = (
            text_data_json["message"],
            text_data_json.get("attachment"),
        )

        conversation = Conversation.objects.get(id=self.room_name)

        # Attachment
        if attachment:
            file_str, file_ext = attachment["data"], attachment["format"]

            file_data = ContentFile(
                base64.b64decode(file_str), name=f"{secrets.token_hex(8)}.{file_ext}"
            )
            _message = Message.objects.create(
                sender=sender,
                attachment=file_data,
                text=message,
                conversation_id=conversation,
            )
        else:
            _message = Message.objects.create(
                sender=sender,
                text=message,
                conversation_id=conversation,
            )
        return _message

    # Receive message from WebSocket
    def receive(self, text_data=None, bytes_data=None):
        LOG.info(f"Received Web Socket Message: {text_data}")
        # parse the json data into dictionary object
        text_data_json = json.loads(text_data)

        message = self._save_message(message_data=text_data_json)
        # Send message to room group
        chat_type = {"type": "chat_message"}
        return_dict = {"message": message, **chat_type}
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            return_dict,
        )

    # Receive message from room group
    def chat_message(self, event):
        serializer = MessageSerializer(instance=event["message"])
        # Send message to WebSocket
        self.send(
            text_data=json.dumps(
                serializer.data
            )
        )
