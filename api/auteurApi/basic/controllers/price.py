from django.core.validators import validate_email
from django.core.files.storage import FileSystemStorage
from rest_framework import exceptions
from django.conf import settings
from .base import Base

from basic.models.price import Prices

class Price(Base):
    def __init__(self, request):
        super().__init__(request)

    def post(self):
        price_obj = Prices()
        price_obj.set_params(user_id=self.user_id, option=self.payload.get('option'))
        price_obj.save()
        r = {"status":"success"}
        return self.response(r)