from rest_framework import serializers

from smart_chat_backend.models import Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'title', 'description',
                  'image', 'category', 'credit', 'date_taken')


class ListRetrieveImageSerializer(serializers.Serializer):
    id = serializers.CharField()
    title = serializers.CharField()
    description = serializers.CharField()
    category = serializers.CharField()
    image = serializers.SerializerMethodField()
    credit = serializers.CharField()
    date_taken = serializers.DateField()

    def get_image(self, obj: Image):
        return {
            'src': obj.image.url,
            'title': obj.file_name
        }