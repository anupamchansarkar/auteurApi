from django.db import models
from django.db import connection
import time, uuid

import logging
log = logging.getLogger(__name__)

class Emails(models.Model):
    class Meta:
        db_table = 'emails'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    user_id = models.BigIntegerField(max_length=20)
    email = models.CharField(max_length=255, unique=True)
    verified = models.SmallIntegerField(max_length=1)
    created = models.IntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.email = kwargs['email']
        self.user_id = kwargs['user_id']

    def save(self, *args, **kwargs):
        self.email = self.email
        self.created = int(time.time())
        self.user_id = self.user_id
        self.verified = 1
        super(Emails, self).save(*args, **kwargs)

    def get_by_email(self, email):
        with connection.cursor() as cursor:
            cursor.execute("SELECT user_id, email FROM emails WHERE email = %s", [email])
            row = cursor.fetchone()
            if row:
                return True
        return False