from flask import Flask, render_template, url_for
application = Flask(__name__)

@application.route("/")
@application.route("/home")
def home():
    return render_template('home.html')
    
@application.route("/about")
def about():
    return render_template('about.html', title='About')

if __name__ == "__main__":
    application.run(host='0.0.0.0')
