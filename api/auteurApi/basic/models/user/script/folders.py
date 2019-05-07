from rest_framework.exceptions import APIException
from django.db import models
from django.db import connection
import time, os, binascii

import logging
log = logging.getLogger(__name__)

class User_script_folders(models.Model):
    class Meta:
        db_table = 'user_script_folders'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    user_id = models.BigIntegerField(max_length=20)
    user_folder_id = models.BigIntegerField(max_length=20)
    script_id = models.BigIntegerField(max_length=20)
    application_id = models.BigIntegerField(max_length=10)
    permissions = models.SmallIntegerField(max_length=3)
    created = models.IntegerField(max_length=10)
    updated = models.IntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.user_id = kwargs['user_id']
        self.user_folder_id = kwargs['folder_id']
        self.script_id = kwargs['script_id']
        self.application_id = kwargs['application_id']
        self.permissions = kwargs['permissions']

    def save(self, *args, **kwargs):
        self.user_id = self.user_id
        self.user_folder_id = self.user_folder_id
        self.script_id = self.script_id
        self.application_id = self.application_id
        self.permissions = self.permissions
        self.created = int(time.time())
        self.updated = 0
        super(User_script_folders, self).save(*args, **kwargs)

    def get_scripts(self, user_id, folder_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT s.unique_id, s.script_name, s.created, s.updated, s.page_count FROM scripts as s join user_script_folders as usf on usf.user_id = s.user_id WHERE usf.user_id = %s and \
                           usf.user_folder_id = %s and usf.permissions != 0 order by s.created desc", [user_id, folder_id])
            scripts = []
            row = cursor.fetchone()
            while row:
                scripts.append({"id":row[0], "name":row[1], "created": row[2], "updated": row[3], "page_count": row[4]})
                row = cursor.fetchone()
        return scripts