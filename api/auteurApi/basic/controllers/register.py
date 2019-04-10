from rest_framework.response import Response
from rest_framework.exceptions import APIException
from basic.models import Users, Emails

import logging
log = logging.getLogger(__name__)

class Register:
    def __init__(self, payload):
        self.payload = payload

    def validate_payload(self):
        self.first_name = self.payload.get('first_name')
        if not self.first_name or len(self.first_name)>64:
            raise APIException('first_name cannot be empty or cannot be longer than 64 chars')
        self.last_name = self.payload.get('last_name')
        if not self.last_name or len(self.last_name)>64:
            raise APIException('last_name cannot be empty or cannot be longer than 64 chars')
        self.password = self.payload.get('password')
        if not self.password:
            raise APIException('password cannot be empty')
        self.email = self.payload.get('email')
        if not self.email or len(self.email)>255:
            raise APIException('email cannot be empty or cannot be longer than 255 chars')
        emails = Emails()
        if emails.get_by_email(self.email):
            raise APIException('Email already registered')

    def post(self):
        # If it is valid, save the data (creates a user).
        self.validate_payload()

        # save info
        users = Users()
        users.set_params(first_name=self.first_name,last_name=self.last_name,password=self.password)
        unique_id = users.save()
        if not unique_id:
            raise APIException("unable to save data")
        user_id = users.get_by_unique_id(unique_id)
        emails = Emails()
        emails.set_params(user_id=user_id, email=self.email)
        emails.save()
        r = {"user_id":unique_id}
        return Response(r)

