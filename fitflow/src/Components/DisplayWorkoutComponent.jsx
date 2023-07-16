import React, { useEffect, useState } from "react";

export default function DisplayWorkoutComponent() {
  
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    let storedToken = localStorage.getItem('token');
    let uData = null;
    async function getWorkoutPlan(token) {
      return fetch(`http://127.0.0.1:5000/getPlan/${token}`);
    }

    async function runEffect() {
      let result = await getWorkoutPlan(storedToken);
      let convert = await result.json();      

      uData = convert.WorkoutPrompt;
      sendDataToBackend(uData);
    }
    
    runEffect();

  }, []);

  //#region OpenAI call
  async function handleSendData(inputData){
    let token = localStorage.getItem('token');

    return( fetch(`http://127.0.0.1:5000/getPlan`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({'token': token, 'message': inputData })
    })     
  )
  }
  function parseUserData(uData) {
    let height = null;
    let whereWorkOut = null;
    let sedentaryString = null;

    (uData.unit === 'cm' ? height = uData.centimeters + uData.unit : height = uData.feet + "." + uData.inches + uData.unit);
    (uData.whereWorkOut === 'gym'? whereWorkOut = "the gym" : whereWorkOut = "home");
    (uData.sedentary === 'yes'? sedentaryString = "sedentary" : sedentaryString = '');

    let inputString = "Can you create a " + uData.goals + " for me? Currently, I workout " + uData.active + " and I want to focus on my";
    inputString += createStringForArray(uData.attention) + ".  My current body shape is " + uData.body_type + " and my dream is to have a ";
    inputString += uData.body_shape + " body shape. I currently weigh " + uData.current_weight + uData.unit + " and my diet type is " + uData.diet_type + ". ";
    inputString += "My energy levels throughout the day are " + uData.energy_level + ". I am " + height + " tall and identify as " + uData.gender + ". ";
    inputString += "My goal is to weight " + uData.goal_weight + uData.unit + " and my bad habits are that " + createStringForArray(uData.habits) + ".";
    inputString +=  "I prefer to work out at " + whereWorkOut + " and my main goal is to " + uData.mainGoal + ". If asked about excluding any specific nutrition from my diet, ";
    inputString += "I would say " + uData.nutrition + ". If asked about leading a sedentary lifestyle, I would say " + sedentaryString + ". I usually sleep " + uData.sleep + " per day, ";
    inputString += "and if there were any special programs available, I would be interested in " + createStringForArray(uData.specialPrograms) + " . In a typical day, I am ";
    inputString += uData.typical_day + " . So, with this information, please create a " + createStringForArray(uData.goals) + " plan for me."


    return inputString;

  }
  function createStringForArray(array){
    let returnString = '';
    for (let i = 0; i<array.length; i++) {
      if (i === 0)
        returnString += ' ' + array[i];
      else if(i === array.length-1)
        returnString += ', and ' + array[i];
      else
        returnString += ', ' + array[i];
    }
    return returnString;
  }
  async function sendDataToBackend(userData) {
    let inputString = parseUserData(userData);

    try {
      let result = await handleSendData(inputString)
      let convert = await result.json();

      console.log(convert);
      displayPlan(convert.Response);

    } catch {
      console.log("Failed to fetch");
    }
  }
  function displayPlan(planString) {
    for (let i = 0; i < planString.length; i++) {
      if(planString[i] == '\n')
        planString = planString.slice(0, i) + "&#10;" + planString.slice(i);
    }
    setPlan(planString);
  }
  //#endregion

  return(
    <div>
      <p>Workout Stuff</p>
      <p>{plan}</p>
    </div>
  );
}