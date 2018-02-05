import os
from flask_restful import Resource
from flask_security import current_user
from piecash import Book, create_book, open_book
from cshwb import app
from cshwb import api


class Books(Resource):
    def get():
        return {"text": "Here is your book"}

    def put():
        pass

api.add_resource(Book, "/book")


class Shelf(object):

    def __init__(self, user):
        self.bookList = []
        self.load_shelf()

    def load_shelf(self):
        userfiles = [f for f in os.listdir(current_user.get_user_files) if os.path.isfile(f)]
        for f in userfiles:
            self.bookList.append({'name': f})
        self.sort_shelf()

    def add_book(self, name):
        if name not in self.bookList:
            # TODO: create_book()
            self.bookList.append({'name': name})
        else:
            pass

    def get_book(self):
        book = open_book(os.path.join(current_user.user_files_url, 'PersonalAccounts.gnucash')
        return book

    def get_books(self):
        return self.bookList

    def remove_book(self, book):
        pass

    def sort_shelf(self, book):
        return self.bookList.sort()
