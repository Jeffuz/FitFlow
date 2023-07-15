import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import './styles.css'; // Import the CSS file
import Questionnaire from './Questionnaire';

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  return tokenString;
}

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = getToken();

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
            <Questionnaire />
            <button className='pl-1' onClick={closeModal}>| Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
