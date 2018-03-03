# ./server/errorhandlers.py


#################
#### imports ####
#################

from flask import render_template


########################
#### error handlers ####
########################
def add_defualt_handlers(app):

    @app.errorhandler(401)
    def forbidden_page(error):
        return render_template("errors/401.html"), 401


    @app.errorhandler(403)
    def forbidden_page(error):
        return render_template("errors/403.html"), 403


    @app.errorhandler(404)
    def page_not_found(error):
        return render_template("errors/404.html"), 404


    @app.errorhandler(500)
    def server_error_page(error):
        return render_template("errors/500.html"), 500
