from flask import Flask, request
from flask_pymongo import PyMongo
from flask_cors import CORS


app = Flask(__name__)

@app.route("/")
def test():
    return "<p>Hello World</p>"