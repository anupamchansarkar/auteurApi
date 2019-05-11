from urllib import request, parse

from rest_framework import exceptions
from django.core.validators import validate_email
from django.conf import settings
from .base import Base
from basic.models.users import Users
from basic.models.emails import Emails


class Register(Base):
    def __init__(self, request):
        super().__init__(request)

    def validate_payload(self):
        self.first_name = self.payload.get('first_name')
        if not self.first_name:
            raise exceptions.ValidationError('first_name cannot be empty')
        self.last_name = self.payload.get('last_name')
        if not self.last_name:
            raise exceptions.ValidationError('last_name cannot be empty')
        self.password = self.payload.get('password')
        if not self.password:
            raise exceptions.ValidationError('password cannot be empty')
        self.email = self.payload.get('email')
        try:
            validate_email(self.email)
        except:
            raise exceptions.ValidationError('Invalid email')
        if not self.email:
            raise exceptions.ValidationError('email cannot be empty')
        emails = Emails()
        if emails.get_by_email(self.email):
            raise exceptions.ValidationError('Email already registered')

    def post(self):
        # If it is valid, save the data (creates a user).
        self.validate_payload()

        # post user
        data = {'first_name':self.first_name, 'last_name':self.last_name, 'email':self.email, 'password':self.password}
        data = parse.urlencode(data).encode()
        url = settings.SITE_HOST + '/user'
        headers = {'Authorization': self.auth}
        req = request.Request(url, data=data, headers=headers)
        try:
            response = request.urlopen(req)
            if response.code == 200:
                res = response.read()
                self.log.debug(res)
                output = res.decode('utf-8')
                output = eval(output)
                output = {"id":output['id']}
                return self.response(output)
            else:
                self.log.error(res)
                raise exceptions.APIException("Unable to register user")
        except:
            self.log.error("Failed to register user")
            raise exceptions.APIException("Unable to register user")

        #FOR FUTURE, ADD EMAIL VERIFICATION