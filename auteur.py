from flask import Flask, render_template, url_for, flash, redirect
from forms import RegistrationForm, LoginForm
application = Flask(__name__)

application.config['SECRET_KEY'] = '5f0c6f9efd1fe89814a4006f24e9f732'

@application.route("/")
@application.route("/home")
def home():
    return render_template('home.html')
    
@application.route("/about")
def about():
    return render_template('about.html', title='About')
    
@application.route("/register", methods=['GET','POST'])
def register():
	form = RegistrationForm()
	if form.validate_on_submit():
		flash(f'Account created for {form.username.data}!', 'success')
		return redirect(url_for('home'))
	return render_template('register.html', title='Register', form=form)
	
@application.route("/login", methods=['GET','POST'])
def login():
	form = LoginForm()
	if form.validate_on_submit():
		if form.email.data == 'admin@blog.com' and form.password.data == 'password':
			flash(f'You have been logged in!', 'success')
			return redirect(url_for('home'))
		else:
			flash(f'Login Unsuccessful. Please check username and password', 'danger')
	return render_template('login.html', title='Login', form=form)

if __name__ == "__main__":
    application.run(host='0.0.0.0')
