# @Author: justin
# @Date:   07-24-2016
# @Email:  j.bellero@dreamrocksmarttech.com
# @Project: CashWeb
# @Last modified by:   justin
# @Last modified time: 07-27-2016
# @License: MIT

import os
import datetime
from flask_security import UserMixin, RoleMixin, AnonymousUser
from flask_security.utils import encrypt_password
from cashweb.server import app, db
from ..models.roles import roles_users


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())
    created_on = db.Column(db.DateTime())
    last_login_at = db.Column(db.DateTime())
    current_login_at = db.Column(db.DateTime())
    last_login_ip = db.Column(db.String(45))
    current_login_ip = db.Column(db.String(45))
    login_count = db.Column(db.Integer)
    roles = db.relationship('Role', secondary=roles_users,
                            backref=db.backref('users', lazy='dynamic'))

    def __init__(self, email, password, user_files_url=None, **kwargs):
        self.email = email
        self.password = encrypt_password(password)

    def __repr__(self):
        return '<User id: {0} username: {1} >'.format(self.id, self.email)


class Anonymous(AnonymousUser):
    def __init__(self):
        self.username = 'Guest'
