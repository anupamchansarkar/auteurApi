from rest_framework.exceptions import APIException
from django.db import models
from django.db import connection
import time, os, binascii

import logging
log = logging.getLogger(__name__)

class User_folders(models.Model):
    class Meta:
        db_table = 'user_folders'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    unique_id = models.CharField(max_length=32, unique=True)
    name = models.CharField(max_length=255)
    user_id = models.BigIntegerField(max_length=20)
    created = models.IntegerField(max_length=10)
    updated = models.IntegerField(max_length=10)
    application_id = models.BigIntegerField(max_length=10)
    parent_id = models.BigIntegerField(max_length=20)
    is_system = models.SmallIntegerField(max_length=1)
    permissions = models.SmallIntegerField(max_length=3)

    def set_params(self, *args, **kwargs):
        self.name = kwargs['name']
        self.user_id = kwargs['user_id']
        self.application_id = kwargs['application_id']
        self.is_system = kwargs['is_system']
        self.permissions = kwargs['permissions']
        self.parent_id = kwargs['parent_id']

    def save(self, *args, **kwargs):
        self.unique_id = self.generate_unique_id()
        self.name = self.name
        self.user_id = self.user_id
        self.application_id = self.application_id
        self.is_system = self.is_system
        self.permissions = self.permissions
        self.parent_id = self.parent_id
        self.created = int(time.time())
        self.updated = 0
        super(User_folders, self).save(*args, **kwargs)


    def generate_unique_id(self):
        unique_id = binascii.b2a_hex(os.urandom(20)).decode('utf-8')
        with connection.cursor() as cursor:
            cursor.execute("SELECT unique_id FROM user_folders WHERE unique_id = %s", [unique_id])
            row = cursor.fetchone()
            if row:
                return self.generate_unique_id()
        return unique_id

    def get_id_by_unique_id(self, unique_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT id FROM user_folders WHERE unique_id = %s", [unique_id])
            row = cursor.fetchone()
        return row[0]

    def get_user_folders_by_user_id(self, user_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT unique_id, name FROM user_folders WHERE user_id = %s and parent_id is not NULL and permissions != 0 and name != 'Deleted'", [user_id])
            row = cursor.fetchone()
            folders = []
            while row:
                folders.append({"unique_id":row[0], "name":row[1]})
                row = cursor.fetchone()
        return folders