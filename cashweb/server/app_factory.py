import os

from flask import Flask
from celery import Celery

from .config import DevelopmentConfig
from .errorhandlers import add_defualt_handlers
from .extentions import register_extentions, register_security


CELERY_TASK_LIST = [

]


def create_app(settings_override=None):
    """
    Create a test application.

    :param settings_override: Override settings
    :type settings_override: dict
    :return: Flask app
    """
    app = Flask(
        __name__,
        static_folder='../client/static',
        template_folder='../client/templates'
    )

    app_settings = os.getenv('APP_SETTINGS', DevelopmentConfig)

    app.config.from_object(app_settings)

    if settings_override:
        app.config.update(settings_override)

    register_extentions(app)
    register_security(app)
    register_bluprints(app)

    return app




def create_celery_app(app=None):
    """
    Create a new Celery object and tie together the Celery config to the app's
    config. Wrap all tasks in the context of the application.
    :param app: Flask app
    :return: Celery app
    """
    app = app or create_app()

    celery = Celery(app.import_name, broker=app.config['CELERY_BROKER_URL'],
                    include=CELERY_TASK_LIST)
    celery.conf.update(app.config)
    TaskBase = celery.Task

    class ContextTask(TaskBase):
        abstract = True

        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)

    celery.Task = ContextTask
    return celery


###################
### blueprints ####
###################
def register_bluprints(app):
    from .user.views import user_blueprint
    from .main.views import main_blueprint
    app.register_blueprint(user_blueprint)
    app.register_blueprint(main_blueprint)
    add_defualt_handlers(app)
