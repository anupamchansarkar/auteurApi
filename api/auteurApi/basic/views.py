from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.conf import settings
from basic.controllers.register import Register
from basic.controllers.user import User
from basic.controllers.oauth import Oauth
from basic.controllers.folder import Folder
from basic.controllers.script import Script
from basic.controllers.script_details import Script_Details
from basic.controllers.script_sentiments import Script_Sentiments
from basic.controllers.genre import Genre
import requests
import logging
log = logging.getLogger(__name__)


@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    register_obj = Register(request)
    return register_obj.post()

@api_view(['POST'])
@permission_classes([AllowAny])
def token(request):
    token_obj = Oauth(request)
    return token_obj.post()

@api_view(['POST', 'GET'])
@permission_classes([AllowAny])
def user(request, user_id=None):
    user_obj = User(request)
    if request.method.upper() == 'POST':
        return user_obj.post()
    elif request.method.upper() == 'GET':
        return user_obj.get()

@api_view(['GET'])
@permission_classes([AllowAny])
def folder(request, folder_id=None):
    folder_obj = Folder(request)
    return folder_obj.get(folder_id)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def script(request, script_id=None):
    script_obj = Script(request)
    if request.method.upper() == 'POST':
        return script_obj.post()
    elif request.method.upper() == 'GET':
        return script_obj.get(script_id)

@api_view(['GET'])
@permission_classes([AllowAny])
def script_details(request, script_id):
    script_details_obj = Script_Details(request)
    return script_details_obj.get(script_id)

@api_view(['GET'])
@permission_classes([AllowAny])
def genre(request):
    genre_obj = Genre(request)
    return genre_obj.get()

@api_view(['GET'])
@permission_classes([AllowAny])
def script_sentiments(request, script_id):
    script_sentiments_obj = Script_Sentiments(request)
    return script_sentiments_obj.get(script_id)