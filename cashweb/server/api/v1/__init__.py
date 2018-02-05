# ./server/api/__init__.py


from flask import Blueprint
from flask import jsonify


################
#### config ####
################

api_blueprint = Blueprint('api', __name__)


@api_blueprint.route("/api/{version}")
def info():
    pass
