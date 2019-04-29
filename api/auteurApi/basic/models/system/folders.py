from rest_framework.exceptions import APIException
from django.db import models
from django.db import connection
import time, os, binascii

import logging
log = logging.getLogger(__name__)

class System_folders(models.Model):
    class Meta:
        db_table = 'system_folders'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    name = models.CharField(max_length=255)


    def get_system_folders(self):
        with connection.cursor() as cursor:
            cursor.execute("SELECT id, name FROM system_folders where name != 'Root'")
            row = cursor.fetchone()
            folder_dict = {}
            while(row):
                folder_dict[row[0]] = row[1]
                row = cursor.fetchone()
        return folder_dict

                
    