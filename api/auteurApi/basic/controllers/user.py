from django.core.validators import validate_email
from rest_framework.exceptions import APIException
from .base import Base
from basic.models.users import Users
from basic.models.emails import Emails
from basic.models.user.folders import User_folders
from basic.models.system.folders import System_folders


class User(Base):
    def __init__(self, request):
        super().__init__(request)

    def validate_payload(self):
        self.first_name = self.payload.get('first_name')
        if not self.first_name:
            raise APIException('first_name cannot be empty')
        self.last_name = self.payload.get('last_name')
        if not self.last_name:
            raise APIException('last_name cannot be empty')
        self.password = self.payload.get('password')
        if not self.password:
            raise APIException('password cannot be empty')
        self.email = self.payload.get('email')
        try:
            validate_email(self.email)
        except:
            raise APIException('Invalid email')
        if not self.email:
            raise APIException('email cannot be empty')
        emails = Emails()
        if emails.get_by_email(self.email):
            raise APIException('Email already registered')

    def post(self):
        # If it is valid, save the data (creates a user).
        self.validate_payload()

        # save user info
        users_obj = Users()
        users_obj.set_params(first_name=self.first_name,last_name=self.last_name,password=self.password,application_id=self.application_id)
        self.unique_id = users_obj.save()

        if not self.unique_id:
            raise APIException("unable to save data")

        self.user_id = users_obj.get_by_unique_id(self.unique_id)

        # create root folder for the user
        user_folder_obj = User_folders()
        user_folder_obj.set_params(name='Root', user_id=self.user_id, application_id=self.application_id, is_system=1, parent_id=None, permissions=7)
        user_folder_obj.save()
        root_folder_id = user_folder_obj.get_id_by_unique_id(user_folder_obj.unique_id)

        # get system folders
        sysfolder_obj = System_folders()
        system_folders_dict = sysfolder_obj.get_system_folders()
        for id, name in system_folders_dict.items():
            user_folder_obj.set_params(name=name, user_id=self.user_id, application_id=self.application_id, is_system=1, parent_id=root_folder_id, permissions=7)
            user_folder_obj.save()

        # post email in the end, in case the folders are not created we do not want to register the user

        # POSTING EMAIL ADDRESSES SHOULD NOT VERIFY THE EMAIL AUTOMATICALLY
        # THIS WILL CHANGE ONCE WE IMPLEMENT EMAIL VERIFICATION
        emails = Emails()
        emails.set_params(user_id=self.user_id, email=self.email)
        emails.save()
        r = {"id":self.unique_id}
        return self.response(r)

    def get(self):
        user_obj = Users()
        user_details = user_obj.get_by_id(self.user_id)
        if not user_details:
            raise APIException("User not found")

        # folder details
        user_folder_obj = User_folders()
        folder_details = user_folder_obj.get_user_folders_by_user_id(self.user_id)

        res = {"user_details":user_details, "folder_details":folder_details}
        return self.response(res)