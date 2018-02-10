# ./server/app/views.py

from flask import render_template, Blueprint
from flask_security import login_required


shell_blueprint = Blueprint('app_shell', __name__)

@shell_blueprint.route('/members')
@login_required
def members():
    return render_template('app_shell/members.html')


@shell_blueprint.route('/cash')
@login_required
def shell():
    return render_template('app_shell/shell.html')
