from flask import Flask, request
import pymongo
from pymongo import MongoClient
from bson import json_util, ObjectId
import openai

from flask_cors import CORS

import config
app = Flask(__name__)
cors = CORS(app)

#app.config['MONGO_URI'] =  'mongodb+srv://fitFlowUser:loginUser@fitflowusers.gmag4je.mongodb.net/' # Initializer Sever link
app.config['CORS_HEADERS'] = 'Content-Type'

cluster = MongoClient('mongodb+srv://fitFlowUser:loginUser@fitflowusers.gmag4je.mongodb.net/')
db = cluster["FitFlow"]

collection = db["Users"]
#print(collection)

openai.api_key = config.API_KEY
model = config.MODEL

@app.route("/getPlan/<token>")
def getToken(token):
    user = collection.find({ "_id": ObjectId(token)})

    try:
        userData = user.next()
    except Exception as e:
        return {"error": "User not found in system"}, 900  # Return an error message if an exception occurs
    

    return {"Error": '',
            "Result": "Success",
            "WorkoutPrompt": userData["WorkoutPrompt"]
            }

@app.route("/getPlan", methods=("GET", "POST"))
def gernerateWorkoutPlan():
    # Check if user exists and already generated a workout plan from AI
    if request.method == "POST":
        json = request.get_json();


        print(json['token'])
        user = collection.find({ "_id": ObjectId(json['token'])})

        try:
            userData = user.next()
        except Exception as e:
            return {"error": "User not found in system"}, 900  # Return an error message if an exception occurs
        
        # Check if AI PLAN is made
        if userData['AiPrompt'] == '':
            print("User has not generated AI plan yet Generating")

            response = openai.ChatCompletion.create(model = model, messages = [
                {"role": "system", "content": config.CHATMODELROLE},
                {"role": "user", "content": json['message']}
            ], max_tokens= 1000)

            generated_text = response["choices"][0]["message"]["content"]

            print(generated_text)
            # Add Generated Text to user Account
            filter = {"_id": ObjectId(json['token'])}
            newKey = {"$set": {"AiPrompt": generated_text}}

            collection.update_one(filter, newKey)

            return {
                "Error": '',
                "Result": "Success",
                "Response": generated_text
                }

        else:
            print("User already has an AI Plan")
            return {
                "Error": '',
                "Result": "Success",
                "Response": userData['AiPrompt']
            }
        
    return {"Response": "Called"}

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
    isValid = False
    validUserToken = None
    try:  
        if request.method == 'POST':
            json = request.get_json()
            print(json)
            if doesUserExist(json["email"]):
                return {"Result": "Fail",
                        "Error": "User exists for email"}

            collection.insert_one({
                    "Name": json["name"],
                    "Email": json["email"],
                    "Password": json["password"],
                    "WorkoutPrompt": json["workoutPrompt"],
                    'AiPrompt': '',
                })
            
            user = list(collection.find({ "Email": json["email"]}))

            for x in user:
                if x["Password"] == json["password"]:
                    isValid = True
                    validUserToken = x["_id"]

    except Exception as e:
        return {"Result": "Fail",
                "Error": str(e) }, 100
    
    if isValid:
        idString = str(validUserToken)
        return {
            "Result": "Success",
            "Id": idString,
            "Token": "Valid",
            "Error": ""
        }
    

if __name__ == "__main__":
    app.run(debug=True)  # Run the Flask application in debug mode