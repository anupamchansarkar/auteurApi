from django.core.validators import validate_email
from django.core.files.storage import FileSystemStorage
from rest_framework.exceptions import APIException
from django.conf import settings
from .base import Base

import mimetypes, json, os, binascii, re, subprocess
from PyPDF2 import PdfFileReader

from basic.models.user.folders import User_folders
from basic.models.scripts import Scripts
from basic.models.user.script.folders import User_script_folders

class Script(Base):
    def __init__(self, request):
        super().__init__(request)
        self.MAX_FILE_SIZE = 52428800
        self.ALLOWED_FILE_TYPES = ['pdf']

    def get(self, script_id):
        return self.response("success")

    def post(self):
        file_path, file_name = self.process_document_upload()
        processed_file_name, text_file_name = self.check_file_contents(file_path, file_name)
        id = self.save_file(file_path, file_name, text_file_name, processed_file_name)
        r = {"id":id}
        return self.response(r)

    def get(self, script_unique_id):
        script_obj = Scripts()
        data = script_obj.get_by_unique_id(script_unique_id)
        return self.response(data)

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
        file_name = self.save_uploaded_file()
        return file_name

    def save_uploaded_file(self):
        fs = FileSystemStorage(location=settings.UPLOADS_FOLDER)
        unique_id = binascii.b2a_hex(os.urandom(20)).decode('utf-8')
        in_name = self.request.FILES['file'].name
        file_name = "%s_%s.pdf" % (unique_id, re.sub(r'\W+', '', in_name))
        file_path = "%s/%s" % (settings.UPLOADS_FOLDER, file_name)
        
        fs.save(file_name, self.request.FILES['file'])
        return file_path, file_name

    def check_file_contents(self, file_path, file_name):
        unique_id = file_name.split('_')[0]
        in_name = self.request.FILES['file'].name
        text_file_name = "%s/%s_%s.txt" % (settings.UPLOADS_FOLDER, unique_id, re.sub(r'\W+', '', in_name))
        self.log.debug(text_file_name)
        
        subprocess.call(['pdftotext', '-layout', file_path, text_file_name])
        file_size = os.path.getsize(text_file_name)
        if file_size < 300:
            raise APIException('Cannot process scanned documents')

        processed_file_name = "%s/%s_%s_processed.txt" % (settings.UPLOADS_FOLDER, unique_id, re.sub(r'\W+', '', in_name))
        subprocess.call(['/usr/bin/python3.6', '/root/auteurApi/py_scripts/text_parser.py', '--input', text_file_name, '--output', processed_file_name])
        return processed_file_name, text_file_name

    def get_page_count(self, file_path):
        try:
            f = open(file_path, "rb")
            file_obj = PdfFileReader(f, strict=False)
            return file_obj.getNumPages()
        except:
            return 0

    def save_file(self, file_path, file_name, text_file_name, processed_file_name):

        # save details to scripts table
        page_count = self.get_page_count(file_path)
        in_name = self.request.FILES['file'].name
        clean_name = re.sub(r'\W+', '', in_name)
        script_obj = Scripts()
        script_obj.set_params(script_name=clean_name,user_id=self.user_id,application_id=self.application_id,page_count=page_count, file_type=1)
        script_unique_id = script_obj.save()

        # script id
        script_id = script_obj.get_id_by_unique_id(script_unique_id)

        # save details to user_script_folders table
        user_folder_obj = User_folders()
        folder_id = user_folder_obj.get_script_folder_id(self.user_id)
        user_script_folder_obj = User_script_folders()
        user_script_folder_obj.set_params(user_id=self.user_id, folder_id=folder_id, script_id=script_id, application_id=self.application_id, permissions=7)
        user_script_folder_obj.save()
        
        # save files to correct location
        # save original file
        saved_file_name = '%s/%s/%s.pdf' % (settings.SCRIPTS_FOLDER, 'originals', script_unique_id)
        os.rename(file_path, saved_file_name)

        # save text_file
        saved_file_name = '%s/%s/%s.txt' % (settings.SCRIPTS_FOLDER, 'parsed', script_unique_id)
        os.rename(text_file_name, saved_file_name)

        # save processed_file
        saved_file_name = '%s/%s/%s.data' % (settings.SCRIPTS_FOLDER, 'extracted', script_unique_id)
        os.rename(processed_file_name, saved_file_name)

        return script_unique_id
        
        
        