from django.core.validators import validate_email
from django.core.files.storage import FileSystemStorage
from rest_framework.exceptions import APIException
from django.conf import settings
from .base import Base

from basic.models.scripts import Scripts

class Script_Details(Base):
    def __init__(self, request):
        super().__init__(request)

    def get(self, script_unique_id):
        r = {"dialog_ratio":50}
        return self.response(r)