# @Author: justin
# @Date:   07-24-2016
# @Email:  j.bellero@dreamrocksmarttech.com
# @Project: CashWeb
# @Last modified by:   justin
# @Last modified time: 07-27-2016
# @License: MIT
from flask_login import LoginManager


login_manager = LoginManager()


@login_manager.user_loader
def load_user(user_id):
    from .db.models import User

    return User.get(user_id)
