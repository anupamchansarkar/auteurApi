from django.db import models
from django.db import connection
import time, os, binascii

import logging
log = logging.getLogger(__name__)

class Prices(models.Model):
    class Meta:
        db_table = 'price'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    user_id = models.BigIntegerField(max_length=20)
    option = models.CharField(max_length=40)
    created = models.IntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.user_id = kwargs['user_id']
        self.option = kwargs['option']

    def save(self, *args, **kwargs):
        self.user_id = self.user_id
        self.option = self.option
        self.created = int(time.time())
        super(Prices, self).save(*args, **kwargs)