import React, { useEffect, useState } from 'react';
import './styles.css'; // Import the CSS file
import Questionnaire from './Questionnaire';
import { useNavigate } from 'react-router-dom';

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  return tokenString;
}

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const token = getToken();
  const navigate = useNavigate();

  if (token) {
    console.log('logged in as', token);
  } else {
    console.log('Need to log in');
  }

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
    setIsModalOpen(false);
  };

  const finishQuestionnaire = () => {
    console.log(userData)
    navigate("/signup", {state: {workoutString: userData}})
  }

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute ml-20">
        <div className="mt-48 text-left fitflow-container">
          {/* <p className="fitflow-heading"> 
            FitFlow
          </p> */}
          <p className="fitflow-heading-fit font-thin text-gray-200">Fit</p>
          <p className="fitflow-heading-flow font-bold text-gray-200">Flow</p>
        </div>
        <p className="transform-heading text-6xl text-gray-200 mt-5 text-left">
          Transform <br />
          Your Body, Mind, <br />
          and Soul.
        </p>
        <p className="empower-heading text-lg font-thin text-gray-100 mt-8 text-left">
          Empowering you to achieve your fitness goals, 
          <br /> embrace a healthier lifestyle, and unleash your 
          <br /> full potential.
        </p>
        <button
          className="mt-8 drop-shadow-2xl transition delay-30 duration-200 ease-in-out
          bg-white hover:bg-zinc-600 text-zinc-700 hover:text-white font-bold py-3 px-5 rounded-full"
          onClick={openModal}
        >
          GET STARTED
        </button>
      </div>
      {/* <h4>
        By tapping GET STARTED, you agree to our&nbsp;
        <a href="/">Terms of Use</a>&nbsp;and&nbsp;
        <a href="/">Privacy Policy</a>.
        Please review them before continuing.
      </h4> */}

      {isModalOpen && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="py-10 px-12 w-150 bg-zinc-200 opacity-90 rounded-3xl relative">
            <div className="flex justify-end">
              <button className="pl-1" onClick={closeModal}>
                &#x2715;
              </button>
            </div>
            <Questionnaire setUserData={setUserData} finishQuestionnaire={finishQuestionnaire}/>
          </div>
        </div>
      )}
    </div>
  );
}




