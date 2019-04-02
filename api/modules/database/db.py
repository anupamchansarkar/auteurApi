import yaml

class Database:

    def __init__(self):
        x = 1
        self.config = yaml.load('config.database.ini')
        print(self.config)

