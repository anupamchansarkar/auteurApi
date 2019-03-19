from base import base

class Login(base):

    def __init__(self):
        self.var = 20

    def post(self, params):
        print(params)