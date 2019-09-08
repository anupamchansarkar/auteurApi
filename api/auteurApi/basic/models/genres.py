from django.db import models
from django.db import connection
import time, os, binascii

import logging
log = logging.getLogger(__name__)

class Genres(models.Model):
    class Meta:
        db_table = 'genres'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    genre = models.CharField(max_length=255)
    avg_scenes = models.FloatField(max_length=8)
    avg_dialog_scene_ratio = models.FloatField(max_length=8)
    avg_scene_description_length = models.FloatField(max_length=8)
    avg_dialog_length = models.FloatField(max_length=8)
    avg_page_count = models.FloatField(max_length=8)
    avg_location_count = models.FloatField(max_length=8)

    def get_id_by_name(self, genre):
        with connection.cursor() as cursor:
            cursor.execute("SELECT id FROM genres WHERE genre = %s", [genre])
            row = cursor.fetchone()
        return row[0]

    def get_list(self):
        with connection.cursor() as cursor:
            cursor.execute("SELECT genre FROM genres")
            genre_list = []
            row = cursor.fetchone()
            while row:
                genre_list.append(row[0])
                row = cursor.fetchone()
        return genre_list