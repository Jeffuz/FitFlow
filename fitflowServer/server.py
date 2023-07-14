from flask import Flask, request
from flask_pymongo import PyMongo
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

#app.config['MONGO_URI']; # Initializer Sever link
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/login", methods=("GET", "POST"))
def login():
    json = request.get_json();
    print(json)
    return {"Message": "LOGIN PAGE"}

@app.route("/signup", methods=("GET", "POST"))
def signup():
    return {"Message": "SIGNUP PAGE"}