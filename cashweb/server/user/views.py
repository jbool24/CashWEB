# ./server/user/views.py


import os

from flask import render_template, Blueprint, url_for, redirect, flash, request
# from flask_login import login_user, logout_user, login_required
# from cashweb.server import bcrypt
from flask_security import login_required, login_user, logout_user
from flask_security import LoginForm, RegisterForm
from cashweb.server import db, app, user_datastore
# from cashweb.server.user.forms import LoginForm, RegisterForm
from cashweb.server.models import User
from cashweb.server import security

################
#### config ####
################

user_blueprint = Blueprint('app_shell', __name__,)


################
#### routes ####
################

@user_blueprint.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm(request.form)
    if form.validate_on_submit():
        user = user_datastore.create_user(
            email=request.form['email'],
            password=request.form['password'],
            active=True
        )
        db.session.commit()

        login_user(user)

        flash('Thank you for registering.', 'success')
        return redirect(url_for("app_shell.members"))

    return render_template('security/register_user.html',
                           register_user_form=form)


@user_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm(request.form)
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and security.verify_and_update_password(
                request.form['password'], user.password):
            login_user(user)
            flash('You are logged in. Welcome!', 'success')
            return redirect(url_for('user.members'))
        else:
            flash('Invalid email and/or password.', 'danger')
            return render_template('security/login_user.html',
                                   login_user_form=form)
    return render_template('security/login_user.html',
                           title='Please Login',
                           login_user_form=form)


@user_blueprint.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You were logged out. Bye!', 'success')
    return redirect(url_for('main.home'))


@user_blueprint.route('/members')
@login_required
def members():
    return render_template('app_shell/members.html')


@user_blueprint.route('/members/main')
@login_required
def app_page():
    return render_template('app_shell/main.html')
