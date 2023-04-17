from django.http import HttpResponse, HttpRequest, JsonResponse
from rest_framework.decorators import api_view

from smart_chat_backend.utils import translate_text, text_to_wav


@api_view(['POST'])
def translate(request: HttpRequest):
    try:
        to_translate = request.data["text_to_translate"]
    except KeyError as e:
        return JsonResponse(data={
            "error": "Please provide the 'text' that requires translation"
        }, status=400)
    detected_language, translated = translate_text(request.user.preferred_language, to_translate)
    return JsonResponse(data={
        "detected_language": detected_language,
        "translated": translated
    })


@api_view(['POST'])
def text_to_speect(request: HttpRequest):
    try:
        to_speak = request.data["text_to_speak"]
    except KeyError as e:
        return JsonResponse(data={
            "error": "Please provide the 'text' that requires conversion to speech"
        }, status=400)
    audio_content = text_to_wav(to_speak)
    response = HttpResponse()
    response.write(audio_content)
    response['Content-Type'] = 'audio/mp3'
    response['Content-Length'] = audio_content.__len__()
    return response
