from flask_mail import Mail
from flask_restful import Api
from flask_webpack import Webpack
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_debugtoolbar import DebugToolbarExtension
from flask_security import Security, SQLAlchemyUserDatastore


# SQLAlchemy db
db = SQLAlchemy()
# Debugging Toolbar
toolbar = DebugToolbarExtension()
# Mail
mail = Mail()
# API
api = Api()
# Webpack
webpack = Webpack()

security = ""

user_datastore = ""


EXTENTIONS = {
    'db': db,
    'mail': mail,
    'api': api,
    'toolbar': toolbar,
    'webpack': webpack
}

####################
#### extensions ####
####################
def register_extentions(app):
    for ext in EXTENTIONS:
        # print(EXTENTIONS[ext])
        EXTENTIONS[ext].init_app(app)
    return None


#####################
### flask-security ##
#####################
# Uncomment to use flask-security
def register_security(app):
    global user_datastore
    global security
    from .models import User, Role, Anonymous
    user_datastore = SQLAlchemyUserDatastore(db, User, Role)
    security = Security(app, user_datastore, anonymous_user=Anonymous)
    return security


####################
### flask-migrate ##
####################
def add_migrate_scripts(manager, app):
    migrate = Migrate(app, db)
    manager.add_command('db', MigrateCommand)
    return migrate


####################
### flask-login ####
####################
# Uncoment if not using flask_security

# from cashweb.server.models import User
#
# login_manager.login_view = "user.login"
# login_manager.login_message_category = 'danger'


# @login_manager.user_loader
# def load_user(user_id):
#     return User.query.filter(User.id == int(user_id)).first()
