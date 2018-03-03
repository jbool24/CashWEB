#! /usr/bin/python3

import os
import sys
import click
import unittest
import coverage
import subprocess

# from cashweb.config import ADMIN
from cashweb.server import app
# from cashweb.server.extentions import add_migrate_scripts

COV = coverage.coverage(
    branch=True,
    include='./*',
    omit=[
        './tests/*',
        './cashweb/config.py',
        # './cashweb/server/*/__init__.py'
    ]
)
COV.start()


# app.cli = Manager(app)

# migrate = add_migrate_scripts(app.cli, app)


@app.cli.command()
def test():
    """Runs the unit tests without test coverage."""
    tests = unittest.TestLoader().discover('./tests', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1


@app.cli.command()
def cov():
    """Runs the unit tests with coverage."""
    tests = unittest.TestLoader().discover('./tests')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        COV.stop()
        COV.save()
        print('Coverage Summary:')
        COV.report()
        basedir = os.path.abspath(os.path.dirname(__file__))
        covdir = os.path.join(basedir, 'tmp/coverage')
        COV.html_report(directory=covdir)
        print('HTML version: file://%s/index.html' % covdir)
        COV.erase()
        return 0
    return 1


@app.cli.command()
def start_dev():
    try:
        click.echo('Node Webpack Starting...')
        proc = subprocess.run(["npm", "run", "start:dev"],
                              shell=False,
                              check=True,
                              stdout=subprocess.PIPE
                              )
        # proc.communicate()
        print('process id --> {0}'.format(proc.pid))
    except subprocess.CalledProcessError as e:
        sys.exit('Failed to start %r, reason: %s' % ("npm", e))
    else:
        try: # wait for the child process to finish
            proc.wait()
        except KeyboardInterrupt: # on Ctrl+C (SIGINT)
            #NOTE: the shell sends SIGINT (on CtrL+C) to the executable itself if
            #  the child process is in the same foreground process group as its parent
            proc.kill()
            sys.exit("interrupted")


#
# @app.cli.command
# def create_db():
#     """Creates the db tables."""
#     db.create_all()
#
#
# @app.cli.command
# def drop_db():
#     """Drops the db tables."""
#     db.drop_all()
#
#
# @app.cli.command
# def create_admin():
#     from cashweb.server.extentions import user_datastore
#
#     """Creates the admin user."""
#     role = user_datastore.create_role(name='admin',
#                                       description='Application Administrator')
#     user = user_datastore.create_user(email='admin@email.com',
#                                       password=ADMIN['ADMIN_PW'],
#                                       active=1)
#     user_datastore.add_role_to_user(user, role)
#     db.session.commit()
#
#
# @app.cli.command
# def create_data():
#     """Creates sample data."""
#     pass
#
#
# if __name__ == '__main__':
#     app.cli.run()
