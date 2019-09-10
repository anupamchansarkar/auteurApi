from django.core.validators import validate_email
from django.core.files.storage import FileSystemStorage
from django.conf import settings
from .base import Base

import json

from basic.models.scripts import Scripts
from basic.models.script.details import Script_details

class Script_Details(Base):
    def __init__(self, request):
        super().__init__(request)

    def get(self, in_url):
        self.log.debug(in_url)
        script_unique_id = in_url.split("/")[0]
        self.log.debug(script_unique_id)

        # open processed file
        saved_file_name = '%s/%s/%s.data' % (settings.SCRIPTS_FOLDER, 'extracted', script_unique_id)
        f = open(saved_file_name)
        line = f.readline()
        f.close()
        text = json.loads(line)
        script_obj = Scripts()
        data = script_obj.get_by_unique_id(script_unique_id)

        # get averages
        script_details_obj = Script_details()
        averages = script_details_obj.get_script_details(script_obj.get_id_by_unique_id(script_unique_id))

        # lines by char
        lines_by_char = text['lines_by_char']
        if len(text['lines_by_char']) > 5:
            lines_by_char = text['lines_by_char'][:5]

        # scenes by char
        scenes_by_char = text['scenes_by_char']
        if len(text['scenes_by_char']) > 5:
            scenes_by_char = text['scenes_by_char'][:5]

        # overly used words
        overly_used_words = text['overly_used_words']
        if len(text['overly_used_words']) > 20:
            overly_used_words = text['overly_used_words'][:20]

        r = {"dialog_scene_ratio": round(text['dialog_scene_ratio'], 2), 
             "total_scenes": text['total_scenes'],
             "pages": round(data['page_count'],2),
             "avg_scene_length": round(text['avg_scene_desc_length'],2),
             "avg_dialog_length": round(text['avg_dialog_length'],2),
             "lines_by_char": lines_by_char,
             "scenes_by_char": scenes_by_char,
             "longest_scene": text['longest_scene'],
             "longest_monolog": text['longest_monolog'],
             "overly_used_words": overly_used_words,
             "averages": averages}
        return self.response(r)