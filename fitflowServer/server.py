from flask import Flask, request
import pymongo
from pymongo import MongoClient

import openai

from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

#app.config['MONGO_URI'] =  'mongodb+srv://fitFlowUser:loginUser@fitflowusers.gmag4je.mongodb.net/' # Initializer Sever link
app.config['CORS_HEADERS'] = 'Content-Type'

cluster = MongoClient('mongodb+srv://fitFlowUser:loginUser@fitflowusers.gmag4je.mongodb.net/')
db = cluster["FitFlow"]

collection = db["Users"]
#print(collection)

openai.api_key = "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"
model = "gpt-3.5-turbo"

CHATMODELROLE = 'You are a gym planner who helps clients achieve their goals with short and concise plans.'

def gernerateWorkoutPlan(userPlanMessage):
    print(userPlanMessage)

    # response = openai.ChatCompletion.create(model = model, messages = [
    #     {"role": "system", "content": CHATMODELROLE},
    #     {"role": "user", "content": userPlanMessage}
    # ], max_tokens=50)

    # generated_text = response["choices"][0]["message"]["content"]

    # print(generated_text)


def doesUserExist(userEmail):      
    user = list(collection.find({ "Email": userEmail}))
    print("Called")
    if len(user) > 0:
        return True
    
    return False


@app.route("/login", methods=("GET", "POST"))
def login():

    isValid = False
    validUserToken = None

    try:
        if request.method == "POST":
            json = request.get_json()

        user = list(collection.find({ "Email": json["email"]}))

        for x in user:
            if x["Password"] == json["password"]:
                isValid = True
                validUserToken = x["_id"]

    except Exception as e:
        return {"Result": "Fail",
                "Error": str(e)}, 300 
    # User found
    if isValid:
        idString = str(validUserToken)
        return {
            "Result": "Success",
            "Id": idString,
            "Token": "Valid",
            "Error": ""
        }
        
    # No user found
    return {
        "Result": "Fail",
        "Id": "",
        "Token": "Invalid",
        "Error": "Email or Password does not match"
    }


@app.route("/signup", methods=("GET", "POST"))
def signup():
    try:  
        if request.method == 'POST':
            json = request.get_json()

            if doesUserExist(json["email"]):
                return {"Result": "Fail",
                        "Error": "User exists for email"}

            collection.insert_one({
                    "Email": json["email"],
                    "Password": json["password"],
                })
            
    except Exception as e:
        return {"Result": "Fail",
                "Error": str(e) }, 100
    
    return {"Result": "Success",
            "Error": "None" }

if __name__ == "__main__":
    app.run(debug=True)  # Run the Flask application in debug mode