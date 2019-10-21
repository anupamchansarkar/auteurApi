from django.db import models
from django.db import connection
import time

import logging
log = logging.getLogger(__name__)

class Sentiment_Counts(models.Model):
    class Meta:
        db_table = 'sentiment_counts'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    user_id = models.BigIntegerField(max_length=20)
    created = models.BigIntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.user_id = kwargs['user_id']

    def save(self, *args, **kwargs):
        self.user_id = self.user_id
        self.created = int(time.time())
        super(Sentiment_Counts, self).save(*args, **kwargs)

    def check_if_exceed_limit(self, user_id): 
        end_time = int(time.time())
        start_time = end_time - (3600*24)
        count = 0
        limit = 1
        with connection.cursor() as cursor:
            cursor.execute("SELECT count(*) FROM sentiment_counts WHERE user_id = %s and created between %s and %s", [user_id, start_time, end_time])
            row = cursor.fetchone()
            count = row[0]
        
        with connection.cursor() as cursor:
            cursor.execute("SELECT s.sentiment_limit FROM sentiment_count_limits as s WHERE user_id = %s", [user_id])
            row = cursor.fetchone()
            limit = row[0]
        return count >= limit    

