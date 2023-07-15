from flask import Flask, request
import pymongo
from pymongo import MongoClient

from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

#app.config['MONGO_URI'] =  'mongodb+srv://fitFlowUser:loginUser@fitflowusers.gmag4je.mongodb.net/' # Initializer Sever link
app.config['CORS_HEADERS'] = 'Content-Type'

cluster = MongoClient('mongodb+srv://fitFlowUser:loginUser@fitflowusers.gmag4je.mongodb.net/')
db = cluster["FitFlow"]

collection = db["Users"]
#print(collection)

@app.route("/login", methods=("GET", "POST"))
def login():
    json = request.get_json();
    print(json)
    return {"Message": "LOGIN PAGE"}


@app.route("/signup", methods=("GET", "POST"))
def signup():
    isDuplicate = False
    try:  
        if request.method == 'POST':
            json = request.get_json()

            user = list(collection.find({ "Email": json["email"]}))
            
            if len(user) > 0:
                return {"error": "Account for email already exists."}
            
            collection.insert_one({
                    "Email": json["email"],
                    "Password": json["password"],
                })
            
    except Exception as e:
        return str(e), 100
    
    return {"Result": "Success",
            "Error": "None" }

if __name__ == "__main__":
    app.run(debug=True)  # Run the Flask application in debug mode