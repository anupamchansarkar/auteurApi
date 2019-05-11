from rest_framework.response import Response
from rest_framework import exceptions

import logging
import base64

from basic.models.applications import Applications
from basic.models.oauths import Oauths

class Base:
    def __init__(self, request):
        self.log = logging.getLogger(__name__)
        self.request = request
        self.basic_token = None
        self.bearer_token = None
        self.application_id = None
        self.user_id = None
        self.scope = None

        # check authorization
        self.auth = self.request.headers.get('Authorization')
        if not self.auth:
            raise exceptions.AuthenticationFailed('Invalid auth headers')
        if 'Basic' in self.auth and not self.check_basic_auth():
            raise exceptions.AuthenticationFailed('Invalid auth headers')
        elif 'Bearer' in self.auth and not self.check_bearer_auth():
            raise exceptions.AuthenticationFailed('Invalid auth headers')

        self.request_method = request.method
        self.payload = request.data

    def check_basic_auth(self):
        try:
            self.basic_token = self.auth.split('Basic ')[1]
            decoded_token = base64.b64decode(self.basic_token)
            token_parts = decoded_token.decode('utf8').split(':')
            app = Applications()
            self.application_id = app.get_by_client_id(token_parts[0])
            if not self.application_id:
                return False
            return True
        except:
            return False
    
    def check_bearer_auth(self):
        try:
            self.bearer_token = self.auth.split('Bearer ')[1]
            oauths_obj = Oauths()
            res = oauths_obj.check_access_token(self.bearer_token)
            if not res:
                return False
            self.application_id = res['app_id']
            self.user_id = res['user_id']
            self.scope = res['scope']
            return True
        except:
            return False

    def response(self, res):
        return Response(res)