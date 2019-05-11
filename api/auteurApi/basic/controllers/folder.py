from django.core.validators import validate_email
from rest_framework import exceptions
from .base import Base

from basic.models.user.folders import User_folders
from basic.models.user.script.folders import User_script_folders

class Folder(Base):
    def __init__(self, request):
        super().__init__(request)

    def get(self, folder_unique_id):
        if not folder_unique_id:
            raise exceptions.SuspiciousOperation('Invalid request, folder id cannot be empty')
        self.folder_unique_id = folder_unique_id

        # check access to the folder based on user_id and folder_unique_id
        user_folder_obj = User_folders()
        self.folder_id = user_folder_obj.check_folder_access(self.user_id, self.folder_unique_id)
        if not self.folder_id:
            raise exceptions.PermissionDenied('Invalid request, folder not accessible')

        # get documents from the folder
        user_script_folders_obj = User_script_folders()
        scripts = user_script_folders_obj.get_scripts(self.user_id, self.folder_id)

        return self.response({"scripts":scripts})