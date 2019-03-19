from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm
application = Flask(__name__)

application.config['SECRET_KEY'] = '5f0c6f9efd1fe89814a4006f24e9f732'

@application.route("/")
@application.route("/register", methods=['POST'])
def register():
	return
	
@application.route("/login", methods=['POST'])
def login():
	return

if __name__ == "__main__":
    application.run(host='0.0.0.0')
