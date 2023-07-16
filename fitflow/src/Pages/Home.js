import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import the CSS file
import Questionnaire from './Questionnaire';

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  return tokenString;
}

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const token = getToken();

  if (token) {
    console.log('logged in as', token);
  } else {
    console.log('Need to log in');
  }

  const navigate = useNavigate();

  useEffect(() => {
    const imageUrls = [
      'https://wallpaperaccess.com/full/1244792.jpg',
      'https://wallpaperaccess.com/full/1244858.jpg',
      'https://wallpaperaccess.com/full/1897060.jpg',
      'https://wallpaperaccess.com/full/804834.jpg',
      'https://wallpaperaccess.com/full/5274380.jpg',
    ];

    const currentDate = new Date();
    const imageIndex = currentDate.getDate() % imageUrls.length;
    setBackgroundImage(imageUrls[imageIndex]);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log(userData);
    setIsModalOpen(false);
  };

  //#region Routing after questionnaire
  const finishQuestionnaire = () => {
    console.log(userData)
    navigate("/signup", {state: {workoutString: userData}})
  }
  //#endregion
  //#region OpenAI call
  async function handleSendData(inputData){
    return( fetch(`http://127.0.0.1:5000/getPlan`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputData)
    })     
 )
  }
  function parseUserData(uData) {
    let height = null;
    let whereWorkOut = null;
    let sedentaryString = null;

    (userData.unit === 'cm' ? height = uData.centimeters + uData.unit : height = uData.feet + "." + uData.inches + uData.unit);
    (userData.whereWorkOut === 'gym'? whereWorkOut = "the gym" : whereWorkOut = "home");
    (userData.sedentary === 'yes'? sedentaryString = "sedentary" : sedentaryString = '');

    let inputString = "Can you create a " + uData.goals + " for me? Currently, I workout " + uData.active + " and I want to focus on my";
    inputString += createStringForArray(uData.attention) + ".  My current body shape is " + uData.body_type + " and my dream is to have a ";
    inputString += uData.body_shape + " body shape. I currently weigh " + uData.current_weight + uData.unit + " and my diet type is " + uData.diet_type + ". ";
    inputString += "My energy levels throughout the day are " + uData.energy_level + ". I am " + height + " tall and identify as " + uData.gender + ". ";
    inputString += "My goal is to weight " + uData.goal_weight + uData.unit + " and my bad habits are that " + createStringForArray(uData.habits) + ".";
    inputString +=  "I prefer to work out at " + whereWorkOut + " and my main goal is to " + uData.mainGoal + ". If asked about excluding any specific nutrition from my diet, ";
    inputString += "I would say " + uData.nutrition + ". If asked about leading a sedentary lifestyle, I would say " + sedentaryString + ". I usually sleep " + uData.sleep + " per day, ";
    inputString += "and if there were any special programs available, I would be interested in " + createStringForArray(uData.specialPrograms) + " . In a typical day, I am ";
    inputString += uData.typical_day + " . So, with this information, please create a " + createStringForArray(uData.goals) + " plan for me."

    console.log(inputString);

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
    console.log(returnString);
    return returnString;
  }
  const sendDataToBackend = async() => {
    let inputString = parseUserData(userData);

    try {
      let result = await handleSendData(inputString)
      console.log(result);
    } catch {
      console.log("Failed to fetch");
    }
  }
  //#endregion
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute top-6 ml-20">
        <p className="font-mono text-4xl text-gray-200 mt-60 text-left">
          FitFlow
        </p>
        <p className="font-mono text-6xl text-gray-200 mt-5 text-left">
          Transform <br />
          Your Body, Mind, <br />
          and Soul.
        </p>
        <p className="font-mono text-1xl text-gray-100 mt-5 text-left">
          Empowering You to Embrace a Healthier <br /> Lifestyle,
          Achieve Your Fitness Goals, <br /> and Unleash Your Full Potential.
        </p>
        {/* <Link to="/questionnaire"> 
            <button class="mt-10 drop-shadow-2xl
            transition duration-200 delay-100
            bg-white hover:bg-zinc-600 text-zinc-700 hover:text-white 
            font-bold py-2 px-4 rounded-full">
                GET STARTED
            </button>
        </Link> */}
        <button
          className="mt-10 drop-shadow-2xl transition duration-200 delay-100 
          bg-white hover:bg-zinc-600 text-zinc-700 hover:text-white font-bold py-2 px-4 rounded-full"
          onClick={openModal}>
          GET STARTED
        </button>
      </div>
      <h4>
        By tapping GET STARTED, you agree to our&nbsp;
        <a href="/">Terms of Use</a>&nbsp;and&nbsp;
        <a href="/">Privacy Policy</a>.
        Please review them before continuing.
      </h4>

      {isModalOpen && (
        <div className="modal">
          {/* <div className="modal-overlay" onClick={closeModal}></div> */}
          <div className="py-10 px-12 bg-zinc-200 opacity-90 rounded-3xl">
            {/* <h2>Modal Window</h2>
            <p>This is the content of the modal.</p> */}
            <Questionnaire setUserData={setUserData} finishQuestionnaire={finishQuestionnaire}/>
            {}
            <button className='pl-1' onClick={closeModal}>| Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
