from flask import Flask, request
application = Flask(__name__)

from controllers.login import Login
from modules.database.db import Database

@application.route("/")
@application.route("/login", methods=['GET', 'POST'])
def login():
	loginObj = Login()
	loginObj.post(request.data)
	return "TEST PASSED"

@application.route("/register", methods=['GET','POST'])
def register():
	return "TEST"

if __name__ == "__main__":
    application.run(host='0.0.0.0')
