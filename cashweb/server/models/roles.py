# @Author: justin
# @Date:   07-24-2016
# @Email:  j.bellero@dreamrocksmarttech.com
# @Project: CashWeb
# @Last modified by:   justin
# @Last modified time: 07-27-2016
# @License: MIT

from flask_security import RoleMixin
from ..extentions import db


roles_users = db.Table(
        'roles_users',
        db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
        db.Column('role_id', db.Integer(), db.ForeignKey('role.id'))
)


class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

    def __repr__(self):
        return '<Role id: {0} mame: {1} description: {2} >'.format(self.id, self.name, self.description)
