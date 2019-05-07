from django.core.validators import validate_email
from django.core.files.storage import FileSystemStorage
from rest_framework.exceptions import APIException
from django.conf import settings
from .base import Base

from basic.models.scripts import Scripts

class Script_Details(Base):
    def __init__(self, request):
        super().__init__(request)

    def get(self, in_url):
        self.log.debug(in_url)
        script_unique_id = in_url.strip('/details')
        script_obj = Scripts()
        data = script_obj.get_by_unique_id(script_unique_id)
        r = {"dialog_ratio":40, "avg_scene_length": "100 lines", "pages":data['page_count']}
        return self.response(r)