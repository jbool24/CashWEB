# @Author: justin
# @Date:   07-26-2016
# @Email:  j.bellero@dreamrocksmarttech.com
# @Project: CashWeb
# @Last modified by:   justin
# @Last modified time: 07-27-2016
# @License: MIT

import os
import sys

from cshwb.server.main import app


def parse_args(args):
    for a in args:
        pass
    return pargs


def main():
    args = sys.argv[1:]
    host = None
    port = None
    debug = False

    # check if host is specified as cli args
    if len(args) > 0:
        if args[0].startswith('-h'):
            host = args[1]
        elif args[0].startswith('-p'):
            port = args[1]
    elif len(args) > 2:
        if args[0].startswith('-h'):
            host = args[1]
        elif args[0].startswith('-p'):
            port = args[1]
    else:
        host = app.config['HOST']
        port = app.config['PORT']

    if app.config['DEBUG']:
        debug = app.config['DEBUG']

    # START THE APPLICATION
    app.run(host=host, port=port, debug=debug)


if __name__ == "__main__":
    main()
