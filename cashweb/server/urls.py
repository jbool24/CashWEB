from flask import Blueprint
from flask import render_template
from flask import request

from cashweb.config import SITE_NAME

urls = Blueprint('urls', __name__)


@urls.route("/")
def index():
    # TODO: Change this to route to Main Landing Page
    return render_template("main.html", title="CashWeb")


@urls.route("/login", methods=['GET', 'POST'])
@urls.route("/user/<user>")
def login():
    # form = LoginForm()
    # if form.validate_on_submit():
    #     user = user.query.get(request.form['email'])
    #     if user:
    #         if bcrypt.check_password_hash(user.password, form.password.data):
    #             user.authenticated = True
    #             db.session.add(user)
    #             db.session.commit()
    #             login_user(user, remember=True)
    #             return redirect("main.html",
    #                             title='Welcome {}'.format(user),
    #                             sitename=SITE_NAME)
    return render_template("login.html", title="Login")


@urls.route('/flot')
def flot():
    return render_template("flot.html", title='Flot Charts')
