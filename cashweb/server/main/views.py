# ./server/main/views.py


#################
#### imports ####
#################

from flask import render_template, Blueprint
from flask_security import login_required
################
#### config ####
################

main_blueprint = Blueprint('main', __name__)


################
#### routes ####
################


@main_blueprint.route('/')
def home():
    return render_template('main/home.html')


@main_blueprint.route('/about')
def about():
    return render_template('main/about.html')


@main_blueprint.route('/members')
@login_required
def members():
    return render_template('app_shell/members.html')


@main_blueprint.route('/cash')
@login_required
def shell():
    return render_template('app_shell/shell.html')
