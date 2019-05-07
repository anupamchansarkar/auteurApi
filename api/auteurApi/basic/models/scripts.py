from rest_framework.exceptions import APIException
from django.db import models
from django.db import connection
import bcrypt, time, os, binascii
from getpass import getpass

import logging
log = logging.getLogger(__name__)

class Scripts(models.Model):
    class Meta:
        db_table = 'scripts'
        managed = False
    id = models.BigIntegerField(max_length=20, primary_key=True)
    unique_id = models.CharField(max_length=32, unique=True)
    user_id = models.BigIntegerField(max_length=20)
    script_name = models.CharField(max_length=255)
    filename = models.CharField(max_length=255)
    file_type = models.SmallIntegerField(max_length=3)
    page_count = models.SmallIntegerField(max_length=5)
    updated = models.IntegerField(max_length=10)
    created = models.IntegerField(max_length=10)
    application_id = models.BigIntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.script_name = kwargs['script_name']
        self.user_id = kwargs['user_id']
        self.application_id = kwargs['application_id']
        self.page_count = kwargs['page_count']
        self.file_type = kwargs['file_type']

    def save(self, *args, **kwargs):
        self.unique_id = self.generate_unique_id()
        self.user_id = self.user_id
        self.script_name = self.script_name
        self.filename = "%s.pdf" % (self.unique_id)
        self.file_type = self.file_type
        self.page_count = self.page_count
        self.created = int(time.time())
        self.updated = 0
        self.application_id = self.application_id        
        super(Scripts, self).save(*args, **kwargs)
        return self.unique_id

    def generate_unique_id(self):
        unique_id = binascii.b2a_hex(os.urandom(20)).decode('utf-8')
        with connection.cursor() as cursor:
            cursor.execute("SELECT unique_id FROM scripts WHERE unique_id = %s", [unique_id])
            row = cursor.fetchone()
            if row:
                return self.generate_unique_id()
        return unique_id

    def get_id_by_unique_id(self, unique_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT id FROM scripts WHERE unique_id = %s", [unique_id])
            row = cursor.fetchone()
        return row[0]

    def get_by_unique_id(self, script_unique_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT unique_id, script_name, page_count, created, updated FROM scripts WHERE unique_id = %s", [script_unique_id])
            row = cursor.fetchone()
        return {"id":row[0], "name":row[1], "page_count":row[2], "created":row[3], "updated":row[4]}