from rest_framework import exceptions
from .base import Base

from basic.models.emails import Emails
from basic.models.users import Users
from basic.models.oauths import Oauths

class Oauth(Base):

    def __init__(self, request):
        super().__init__(request)
        self.default_expiration = 2592000
        self.valid_grant_types = ['password', 'refresh_token', 'authorization_code']

    def post(self):
        self.validate_payload()

        oauth_obj = Oauths()
        oauth_obj.set_params(user_id=self.user_id, application_id=self.application_id, scope = self.scope, expiration_time=self.expiration_time)

        if self.grant_type == 'password' or self.grant_type == 'refresh_token':
            oauth_obj.save()

        res = {'access_token': oauth_obj.access_token, 'refresh_token': oauth_obj.refresh_token, 'expires_on': oauth_obj.expires_on, "token_type":"bearer", "scope":oauth_obj.scope}
        return self.response(res)

    def validate_payload(self):

        self.email = self.payload.get('email')
        emails = Emails()
        if not emails.get_by_email(self.email):
            raise exceptions.AuthenticationFailed('Invalid Email/Password')
        
        self.password = self.payload.get('password')
        users = Users()
        self.user_id = users.validate_password(self.email, self.password)
        if not self.user_id:
            raise exceptions.AuthenticationFailed

        self.grant_type = self.payload.get('grant_type')
        if self.grant_type not in self.valid_grant_types:
            raise exceptions.AuthenticationFailed('Invalid grant_type')

        if self.grant_type == 'refesh_token':
            refresh_token = self.payload.get('refresh_token', None)
            if not refresh_token:
                raise exceptions.AuthenticationFailed('Invalid refresh_token')
            oauth_obj = Oauths()
            if not oauth_obj.check_refresh_token(refresh_token):
                raise exceptions.AuthenticationFailed('Invalid refresh_token')

        self.scope = self.payload.get('scope')

        self.expiration_time = self.payload.get('expiration_time', None)
        if self.expiration_time and (int(self.expiration_time) > self.default_expiration or int(self.expiration_time) == 0):
            raise exceptions.AuthenticationFailed('Invalid expiration time')
        
        self.expiration_time = self.expiration_time if self.expiration_time else self.default_expiration