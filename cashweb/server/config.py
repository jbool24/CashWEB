# @Author: justin
# @Date:   07-25-2016
# @Email:  j.bellero@dreamrocksmarttech.com
# @Project: CashWeb
# @Last modified by:   justin
# @Last modified time: 07-27-2016
# @License: MIT


import os


# Main site directory
ROOT_PATH = os.path.dirname(os.path.abspath('__file__'))
SITE_NAME = "CashWeb"


# ADD INIT USERNAME FOR ADMIN FOR FIRST_TIME USE
ADMIN = {
    'ADMIN_USER': 'admin',
    'ADMIN_PW': 'admin24'
}

DBG_TOOLBAR = [
    'flask_debugtoolbar.panels.versions.VersionDebugPanel',
    'flask_debugtoolbar.panels.timer.TimerDebugPanel',
    'flask_debugtoolbar.panels.headers.HeaderDebugPanel',
    'flask_debugtoolbar.panels.request_vars.RequestVarsDebugPanel',
    'flask_debugtoolbar.panels.config_vars.ConfigVarsDebugPanel',
    'flask_debugtoolbar.panels.logger.LoggingPanel',
    'flask_debugtoolbar.panels.route_list.RouteListDebugPanel',
]

class BaseConfig(object):
    """Base configuration."""
    SECRET_KEY = '{{ secret_key }}'
    DEBUG = False
    BCRYPT_LOG_ROUNDS = 13
    WTF_CSRF_ENABLED = True
    DEBUG_TB_ENABLED = False
    DEBUG_TB_INTERCEPT_REDIRECTS = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(BaseConfig):
    """Development configuration."""
    DEBUG = True
    HOST = 'localhost'
    PORT = 9000
    BCRYPT_LOG_ROUNDS = 1
    DEBUG_TB_ENABLED = True
    DEBUG_TB_PANELS = DBG_TOOLBAR
    WTF_CSRF_ENABLED = False
    WEBPACK_MANIFEST_PATH = os.path.join(ROOT_PATH, 'manifest.json')
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(ROOT_PATH, 'dev.db')


class TestingConfig(BaseConfig):
    """Testing configuration."""
    DEBUG = True
    TESTING = True
    BCRYPT_LOG_ROUNDS = 1
    WTF_CSRF_ENABLED = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///'
    DEBUG_TB_ENABLED = False


class ProductionConfig(BaseConfig):
    """Production configuration."""
    SECRET_KEY = '{{ secret_key }}'
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://localhost/example'
    DEBUG_TB_ENABLED = False
