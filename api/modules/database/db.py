import yaml

class Database:

    def __init__(self):
        self.config = yaml.load('config.database.ini')
        print(self.config)

