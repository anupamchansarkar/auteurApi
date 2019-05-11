from django.db import models
from django.db import connection

import logging
log = logging.getLogger(__name__)

class Applications(models.Model):
    class Meta:
        db_table = 'applications'
        managed = False

    def get_by_client_id(self, client_id):
        with connection.cursor() as cursor:
            cursor.execute("SELECT id FROM applications WHERE client_id = %s", [client_id])
            row = cursor.fetchone()
            if row:
                return row[0]
        return False
