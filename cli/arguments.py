import sys

args = sys.argv[1:]

if len(args) > 0:
    if len(args) > 0 and args[0].startswith('host='):
        print(args[0][5:])
    else:
        for a in args:
            print(a)
else:
    print("no args")
