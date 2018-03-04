# ./server/__init__.py
import os
import sys
import click
import unittest
import coverage
import subprocess

from flask_cors import CORS
from .app_factory import create_app

app = create_app()
CORS(app)

from .extentions import db

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
@click.option('--host', '-h', default='127.0.0.1', help='Hostname/IP to bind to.')
@click.option('--port', '-p', default=5000, help='The port to bind to.')
@click.option('--debug', '-d', default=True, help='Turn debugger on')
def dev(host, port, debug):
    """Starts webpack server and dev http server."""

    click.echo('Node Webpack Starting...')

    try:
        proc = subprocess.Popen(["npm", "run", "start:dev"],
                                stderr=subprocess.PIPE,
                                stdout=subprocess.PIPE,
                                close_fds=True, universal_newlines=True)
        print('Process started with Pid {0}'.format(proc.pid))

        # out,err = proc.communicate()
        #
        # if err:
        #     raise subprocess.SubprocessError(err)
        #
        # print('Ouoot {0}'.format(out))

    except subprocess.SubprocessError as e:
        sys.exit('Failed to start {0}, reason: \n\n{1}'.format("npm", e))
    else:
        try: # wait for the child process to finish
            # proc.poll()
            app.run(host=host, port=port, debug=debug, use_reloader=True)
        except KeyboardInterrupt: # on Ctrl+C (SIGINT)
            #NOTE: the shell sends SIGINT (on CtrL+C) to the executable itself if
            #  the child process is in the same foreground process group as its parent
            print('Called Ctrl+c')
            proc.kill()
            sys.exit()
        # else:



@app.cli.command()
def create_db():
    """Creates the db tables."""
    db.create_all()

@app.cli.command()
def drop_db():
    """Drops the db tables."""
    db.drop_all()


@app.cli.command()
def create_admin():
    from cashweb.server.extentions import user_datastore
    from .config import ADMIN
    """Creates the admin user."""
    role = user_datastore.create_role(name='admin',
                                      description='Application Administrator')
    user = user_datastore.create_user(email='admin@email.com',
                                      password=ADMIN['ADMIN_PW'],
                                      active=1)
    user_datastore.add_role_to_user(user, role)
    db.session.commit()


@app.cli.command()
def create_data():
    """Creates sample data."""
    pass


if __name__ == '__main__':
    app.cli.run()
