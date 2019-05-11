from rest_framework import exceptions
from django.db import models
from django.db import connection
import bcrypt, time, os, binascii
from getpass import getpass

import logging
log = logging.getLogger(__name__)

class Users(models.Model):
    class Meta:
        db_table = 'users'
        managed = False
    id = models.BigIntegerField(max_length=20, primary_key=True)
    unique_id = models.CharField(max_length=32, unique=True)
    active = models.SmallIntegerField(max_length=1)
    first_name = models.CharField(max_length=64, blank=True)
    last_name = models.CharField(max_length=64, blank=True)
    password = models.CharField(max_length=64)
    salt = models.CharField(max_length=64)
    created = models.IntegerField(max_length=10)
    updated = models.IntegerField(max_length=10)
    application_id = models.BigIntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.first_name = kwargs['first_name']
        if len(self.first_name) > 64:
            raise exceptions.ValidationError('first_name cannot be longer than 64 chars')
        self.last_name = kwargs['last_name']
        if len(self.last_name) > 64:
            raise exceptions.ValidationError('last_name cannot be longer than 64 chars')
        self.password = kwargs['password']
        self.application_id = kwargs['application_id']

    def save(self, *args, **kwargs):
        self.active = 1
        self.first_name = self.first_name
        self.last_name = self.last_name
        self.created = int(time.time())
        self.updated = int(time.time())
        self.unique_id = self.generate_unique_id()
        salt = self.get_salt()
        self.salt = salt.decode('utf-8')
        password = self.get_password(salt, self.password)
        self.password = password.decode('utf-8')
        super(Users, self).save(*args, **kwargs)
        return self.unique_id

    def generate_unique_id(self):
        unique_id = binascii.b2a_hex(os.urandom(20)).decode('utf-8')
        with connection.cursor() as cursor:
            cursor.execute("SELECT unique_id FROM users WHERE unique_id = %s", [unique_id])
            row = cursor.fetchone()
            if row:
                return self.generate_unique_id()
        return unique_id

    def get_salt(self):
        salt = bcrypt.gensalt()
        return salt
    
    def get_password(self, salt, in_password):
        raw_password = raw_password = bytes(in_password, 'utf-8')
        combo_password = raw_password + salt
        hashed_password = bcrypt.hashpw(combo_password, salt)
        return hashed_password

    def get_by_unique_id(self, unique_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT id FROM users WHERE unique_id = %s", [unique_id])
            row = cursor.fetchone()
        return row[0]

    def get_by_id(self, id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT u.unique_id, u.first_name, u.last_name, u.created, e.email FROM users as u join emails as e on e.user_id = u.id WHERE u.id = %s and u.active = 1", [id])
            row = cursor.fetchone()
            if not row:
                return False
        return {"id":row[0], "first_name":row[1], "last_name":row[2], "created":row[3], "email":row[4]}

    def validate_password(self, email, password):
        with connection.cursor() as cursor:
            cursor.execute("SELECT e.email, u.id, u.password, u.salt FROM users as u join emails as e on e.user_id = u.id WHERE e.email = %s", [email])
            row = cursor.fetchone()
            if row:
                salt = row[3].encode('utf-8')
                in_password = password.encode('utf-8')
                combo_password = in_password + salt
                hashed_password = bcrypt.hashpw(combo_password, salt)
                db_password = row[2].encode('utf-8')
                if hashed_password == db_password:
                    return row[1]
        return False