from django.db import models
from django.db import connection
import time
import logging

log = logging.getLogger(__name__)

class Sentiment_Count_Limits(models.Model):
    class Meta:
        db_table = 'sentiment_count_limits'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    user_id = models.BigIntegerField(max_length=20)
    sentiment_limit = models.SmallIntegerField(max_length=3)

    def set_params(self, *args, **kwargs):
        self.user_id = kwargs['user_id']
        self.sentiment_limit = kwargs['sentiment_limit']

    def save(self, *args, **kwargs):
        self.user_id = self.user_id
        self.sentiment_limit = self.sentiment_limit
        super(Sentiment_Count_Limits, self).save(*args, **kwargs)

    def get_limit(self, user_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT s.sentiment_limit FROM sentiment_count_limits as s WHERE user_id = %s", [user_id])
            row = cursor.fetchone()
        return row[0]
