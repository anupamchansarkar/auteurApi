from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.conf import settings
from basic.controllers.register import Register
from basic.controllers.user import User
from basic.controllers.oauth import Oauth
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
def user(request):
    user_obj = User(request)
    if request.method.upper() == 'POST':
        return user_obj.post()
    elif request.method.upper() == 'GET':
        return user_obj.get()
