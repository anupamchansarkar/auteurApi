from django.db import models
from django.db import connection
import time, os, binascii

import logging
log = logging.getLogger(__name__)

class Oauths(models.Model):
    class Meta:
        db_table = 'oauths'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    application_id = models.BigIntegerField(max_length=10)
    user_id = models.BigIntegerField(max_length=20)
    access_code = models.CharField(max_length=64, blank=True)
    access_token = models.CharField(max_length=64, blank=True)
    refresh_token = models.CharField(max_length=64, blank=True)
    scope = models.CharField(max_length=5000, blank=True)
    expires_on = models.IntegerField(max_length=10)
    created = models.IntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.user_id = kwargs['user_id']
        self.application_id = kwargs['application_id']
        self.scope = kwargs['scope']
        self.expiration_time = kwargs['expiration_time']

    def save(self, *args, **kwargs):
        self.application_id = self.application_id
        self.user_id = self.user_id
        self.scope = self.scope
        self.created = int(time.time())
        self.expires_on = int(time.time()) + int(self.expiration_time)
        self.access_token = self.generate_access_token()
        self.refresh_token = self.generate_refresh_token()
        self.access_code = self.generate_access_code()
        super(Oauths, self).save(*args, **kwargs)
        return


    def generate_access_token(self):
        access_token = binascii.b2a_hex(os.urandom(32)).decode('utf-8')
        with connection.cursor() as cursor:
            cursor.execute("SELECT access_token FROM oauths WHERE access_token = %s", [access_token])
            row = cursor.fetchone()
            if row:
                return self.generate_access_token()
        return access_token

    def generate_refresh_token(self):
        refresh_token = binascii.b2a_hex(os.urandom(32)).decode('utf-8')
        with connection.cursor() as cursor:
            cursor.execute("SELECT refresh_token FROM oauths WHERE refresh_token = %s", [refresh_token])
            row = cursor.fetchone()
            if row:
                return self.generate_refresh_token()
        return refresh_token

    def generate_access_code(self):
        access_code = binascii.b2a_hex(os.urandom(32)).decode('utf-8')
        with connection.cursor() as cursor:
            cursor.execute("SELECT access_code FROM oauths WHERE access_code = %s", [access_code])
            row = cursor.fetchone()
            if row:
                return self.generate_access_code()
        return access_code

    def check_refresh_token(self, refresh_token):
        with connection.cursor() as cursor:
            cursor.execute("SELECT refresh_token FROM oauths WHERE refresh_token = %s", [refresh_token])
            row = cursor.fetchone()
            if not row:
                return False
        return True

    def check_access_token(self, access_token):
        expiration_time = int(time.time())
        with connection.cursor() as cursor:
            cursor.execute("SELECT application_id, user_id, scope FROM oauths WHERE access_token = %s and expires_on > %s", [access_token, expiration_time])
            row = cursor.fetchone()
            if not row:
                return False
        return {'app_id':row[0], 'user_id':row[1], 'scope':row[2]}