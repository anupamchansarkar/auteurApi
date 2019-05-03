from django.core.validators import validate_email
from rest_framework.exceptions import APIException
from .base import Base

import mimetypes, json

from basic.models.user.folders import User_folders
from basic.models.user.script.folders import User_script_folders

class Script(Base):
    def __init__(self, request):
        super().__init__(request)
        self.MAX_FILE_SIZE = 52428800
        self.ALLOWED_FILE_TYPES = ['pdf']

    def get(self, script_id):
        return self.response("success")

    def post(self):
        file_field = self.request.FILES['file']
        self.process_document_upload()
        
        return self.response("success")


    def process_document_upload(self):
        if len(self.request.FILES) != 1:
            raise APIException('Must upload one file')

        infile = self.request.FILES['file']
        if infile.size > self.MAX_FILE_SIZE:
            raise APIException('Exceeded max file size of 50MB')

        file_name = infile.name
        parts = file_name.split('.')
        if parts[-1].lower() not in self.ALLOWED_FILE_TYPES:
            raise APIException('Must upload pdf document')

        message = {"application": self.application_id,
                   "FILE": infile.name,
                   "content_type": infile.content_type,
                   "file_size": infile.size}
        self.log.debug(json.dumps(message))

        