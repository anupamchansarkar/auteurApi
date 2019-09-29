from django.db import models
from django.db import connection
import time, os, binascii

import logging
log = logging.getLogger(__name__)

class Script_details(models.Model):
    class Meta:
        db_table = 'script_details'
        managed = False

    id = models.BigIntegerField(max_length=20, primary_key=True)
    script_id = models.BigIntegerField(max_length=20)
    genre_id = models.BigIntegerField(max_length=10)

    def set_params(self, *args, **kwargs):
        self.script_id = kwargs['script_id']
        self.genre_id = kwargs['genre_id']

    def save(self, *args, **kwargs):
        self.script_id = self.script_id
        self.genre_id = self.genre_id
        super(Script_details, self).save(*args, **kwargs)

    def get_script_details(self, script_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT g.genre, g.avg_scenes, g.average_scene_descriptions, g.avg_dialog_scene_ratio, \
                            g.avg_scene_description_length, g.avg_dialog_length, g.avg_page_count, \
                            g.avg_location_count FROM script_details as sd join genres as g on sd.genre_id = g.id WHERE \
                            sd.script_id = %s ", [script_id])
            script_details = []
            row = cursor.fetchone()
            while row:
                script_details.append({"genre":row[0], "avg_scenes":row[1], "average_scene_descriptions":row[2], 
                                       "avg_dialog_scene_ratio": row[3], 
                                       "avg_scene_description_length": row[4], "avg_dialog_length": row[5],
                                       "avg_page_count": row[6], "avg_location_count": row[7]})
                row = cursor.fetchone()
        return script_details
