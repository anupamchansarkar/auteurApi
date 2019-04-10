from django.db import models
from django.db import connection
from rest_framework.validators import UniqueValidator
import time, uuid

import logging
log = logging.getLogger(__name__)

class Users(models.Model):
    class Meta:
        db_table = 'users'
    id = models.BigIntegerField(max_length=20, primary_key=True)
    unique_id = models.CharField(max_length=32, unique=True)
    active = models.SmallIntegerField(max_length=1)
    first_name = models.CharField(max_length=64, blank=True)
    last_name = models.CharField(max_length=64, blank=True)
    password = models.CharField(max_length=64)
    salt = models.CharField(max_length=64)
    created = models.IntegerField(max_length=10)
    updated = models.IntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.first_name = kwargs['first_name']
        self.last_name = kwargs['last_name']
        self.password = kwargs['password']

    def save(self, *args, **kwargs):
        self.active = 1
        self.first_name = self.first_name
        self.last_name = self.last_name
        self.created = int(time.time())
        self.updated = int(time.time())
        self.unique_id = self.generate_unique_id()
        self.salt = self.get_salt()
        self.password = self.get_password(self.salt, self.password)
        super(Users, self).save(*args, **kwargs)
        return self.unique_id


    def generate_unique_id(self):
        unique_id = uuid.uuid4().hex
        with connection.cursor() as cursor:
            cursor.execute("SELECT unique_id FROM users WHERE unique_id = %s", [unique_id])
            row = cursor.fetchone()
            if row:
                return self.generate_unique_id()
        return unique_id

    def get_salt(self):
        return hash(str(time.time()) + uuid.uuid4().hex)
    
    def get_password(self, salt, password):
        return hash(str(salt)+str(password))

    def get_by_unique_id(self, unique_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT id FROM users WHERE unique_id = %s", [unique_id])
            row = cursor.fetchone()
        return row[0]

class Emails(models.Model):
    class Meta:
        db_table = 'emails'

    id = models.BigIntegerField(max_length=20, primary_key=True)
    user_id = models.BigIntegerField(max_length=20)
    email = models.CharField(max_length=255, unique=True)
    created = models.IntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.email = kwargs['email']
        self.user_id = kwargs['user_id']

    def save(self, *args, **kwargs):
        self.email = self.email
        self.created = int(time.time())
        self.user_id = self.user_id
        super(Emails, self).save(*args, **kwargs)

    def get_by_email(self, email):
        with connection.cursor() as cursor:
            cursor.execute("SELECT user_id, email FROM emails WHERE email = %s", [email])
            row = cursor.fetchone()
            if row:
                return True
        return False
