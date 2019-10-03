from django.core.validators import validate_email
from django.core.files.storage import FileSystemStorage
from django.conf import settings
from .base import Base
from requests.auth import HTTPBasicAuth

import json
import os
import requests

from basic.models.scripts import Scripts
from basic.models.script.details import Script_details

class Script_Sentiments(Base):
    def __init__(self, request):
        super().__init__(request)

    def get(self, in_url):
        script_unique_id = in_url.split("/")[0]
        output_csv_file = '%s/%s/%s_%s.data' % (settings.SCRIPTS_FOLDER, 'extracted', script_unique_id, 'scene_sentiment_score')

        # check if the sentiment analysis was done on this file or not
        if (os.path.exists(output_csv_file)):
            results = self.load_results_from_file(output_csv_file)
            return self.response(results)

        # open processed file
        saved_file_name = '%s/%s/%s.data' % (settings.SCRIPTS_FOLDER, 'extracted', script_unique_id)
        f = open(saved_file_name)
        # ignore the 1st line as it has stats
        line = f.readline()
        line = f.readline()
        f.close()
        scenes = json.loads(line)

        scene_desc_array = []
        scores = []
        for scene in scenes:
            # get score from the IBM API
            scene_data = scene['scene_text']
            score = 0
            try:
                response = self.make_curl_call(scene_data)
                score = response['sentiment']['document']['score']
                scene_desc = scene['scene_desc'].replace(',',':')
                scene_desc = scene_desc.replace('\n','')
                scene_desc = scene_desc.replace('\r','')
                scene_desc_array.append(scene_desc)
                scores.append(score)
            except:
                self.log.error('failed to process current scene data...trying the next one')
                self.log.error('scene data: %s' % scene_data)

        f = open(output_csv_file, 'w')
        r = json.dumps({"scenes":scene_desc_array, "scores":scores})
        f.write(r)
        f.close()

        # return file here
        return self.response(json.loads(r))

    def make_curl_call(self, data):
        username = 'apikey'
        password = 'vzJZvM_1sDIgavpH87yIrJJ5CBsBVuF1E5Ck46CuD78c'
        url = "https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2019-07-12"
        payload = json.dumps({"text": data, "features" : { "sentiment": {}}})
        headers = {'content-type': 'application/json'}
        response = requests.post(url, data=payload, headers=headers, auth=HTTPBasicAuth(username, password))
        self.log.debug(response)
        if response.status_code == 200:
            return response.json()
        else:
            self.log.error("failed to get response from IBM API")
            self.log.error("response status: %s" % response.status_code)
            self.log.error("response is: %s" % response.text)
            raise exceptions.APIException("Unable to process request")

    def load_results_from_file(self, output_csv_file):
        f = open(output_csv_file)
        data = f.read()
        data = json.loads(data)
        return data