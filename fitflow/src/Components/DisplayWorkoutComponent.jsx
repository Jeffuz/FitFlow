import React, { useEffect, useState } from "react";

export default function DisplayWorkoutComponent() {
  const [planArray, setPlanArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let storedToken = localStorage.getItem('token');
    let uData = null;

    async function getWorkoutPlan(token) {
      return fetch(`http://127.0.0.1:5000/getPlan/${token}`);
    }

    async function runEffect() {
      setIsLoading(true); 
      let result = await getWorkoutPlan(storedToken);
      let convert = await result.json();

      uData = convert.WorkoutPrompt;
      sendDataToBackend(uData);
    }

    runEffect();
  }, []);

  //#region OpenAI call
  async function handleSendData(inputData) {
    let token = localStorage.getItem('token');

    return (fetch(`http://127.0.0.1:5000/getPlan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'token': token, 'message': inputData })
    })
    )
  }
  function parseUserData(uData) {
    let height = null;
    let whereWorkOut = null;
    let sedentaryString = null;

    (uData.unit === 'cm' ? height = uData.centimeters + uData.unit : height = uData.feet + "." + uData.inches + uData.unit);
    (uData.whereWorkOut === 'gym' ? whereWorkOut = "the gym" : whereWorkOut = "home");
    (uData.sedentary === 'yes' ? sedentaryString = "sedentary" : sedentaryString = '');

    let inputString = "Can you create a " + uData.goals + " for me? Currently, I workout " + uData.active + " and I want to focus on my";
    inputString += createStringForArray(uData.attention) + ".  My current body shape is " + uData.body_type + " and my dream is to have a ";
    inputString += uData.body_shape + " body shape. I currently weigh " + uData.current_weight + uData.unit + " and my diet type is " + uData.diet_type + ". ";
    inputString += "My energy levels throughout the day are " + uData.energy_level + ". I am " + height + " tall and identify as " + uData.gender + ". ";
    inputString += "My goal is to weight " + uData.goal_weight + uData.unit + " and my bad habits are that " + createStringForArray(uData.habits) + ".";
    inputString += "I prefer to work out at " + whereWorkOut + " and my main goal is to " + uData.mainGoal + ". If asked about excluding any specific nutrition from my diet, ";
    inputString += "I would say " + uData.nutrition + ". If asked about leading a sedentary lifestyle, I would say " + sedentaryString + ". I usually sleep " + uData.sleep + " per day, ";
    inputString += "and if there were any special programs available, I would be interested in " + createStringForArray(uData.specialPrograms) + " . In a typical day, I am ";
    inputString += uData.typical_day + " . So, with this information, please create a " + createStringForArray(uData.goals) + " plan for me."


    return inputString;

  }
  function createStringForArray(array) {
    let returnString = '';
    for (let i = 0; i < array.length; i++) {
      if (i === 0)
        returnString += ' ' + array[i];
      else if (i === array.length - 1)
        returnString += ', and ' + array[i];
      else
        returnString += ', ' + array[i];
    }
    return returnString;
  }
  async function sendDataToBackend(userData) {
    let inputString = parseUserData(userData);

    try {
      let result = await handleSendData(inputString);
      let convert = await result.json();

      displayPlan(convert.Response);
      setIsLoading(false);

    } catch {
      console.log("Failed to fetch");
    }
  }

  function displayPlan(planString) {
    let array = [];
    let str = '';

    for (let i = 0; i < planString.length; i++) {
      str += planString[i];

      if (planString[i] === '\n') {
        array.push(str);
        str = '';
      }
    }

    setPlanArray(array);
  }
  //#endregion
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-4">
        <div>
          <div className="container mx-auto px-4 flex items-center justify-center">
            <h1 className="fitflow-heading-fit font-thin text-black">Fit</h1>
            <h1 className="fitflow-heading-flow font-bold text-black">Flow</h1>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="text-gray-600 text-lg">Generating workout prompt...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Your Workout Plan</h2>
              {planArray.map((str, index) => (
                <p key={index} className="my-2">{str}</p>
              ))}
            </div>
            <p className="text-gray-600 mt-8 text-center">
              Start your fitness journey today and achieve your goals with our customized workout plans.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
              Create
            </button>
          </div>
        )}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Benefits of Our Workout Plans</h3>
          <ul className="list-disc list-inside">
            <li>Customized plans tailored to your goals</li>
            <li>Expertly designed exercises for maximum effectiveness</li>
            <li>Flexible options for home or gym workouts</li>
            <li>Track your progress and stay motivated</li>
          </ul>
        </div>
      </main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300">&copy; 2023 FitFlow Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}