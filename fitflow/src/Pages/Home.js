import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function getToken()
{
    const tokenString = sessionStorage.getItem('token');
    return tokenString;
}
export default function Home() {
    const [backgroundImage, setBackgroundImage] = useState('');

    const token = getToken();

    if(token) {
        console.log("logged in as", token);
    }
    else {
        console.log("Need to log in");
    }

    useEffect(() => {
        // Array of image URLs
        const imageUrls = [
            'https://wallpaperaccess.com/full/1244792.jpg',
            'https://wallpaperaccess.com/full/1244858.jpg',
            'https://wallpaperaccess.com/full/1897060.jpg',
            'https://wallpaperaccess.com/full/804834.jpg',
            'https://wallpaperaccess.com/full/5274380.jpg',
        ];

        // Get the current date
        const currentDate = new Date(); // Example for testing data new Date(2023, 5, 26); 
        // Use the date to determine the index of the image to display
        const imageIndex = currentDate.getDate() % imageUrls.length;
        // Set the background image URL
        setBackgroundImage(imageUrls[imageIndex]);
    }, []);
    return (
        <div className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* <div class="h-screen flex items-center justify-center">
                <div  class="font-mono text-8xl text-gray-50  absolute top-60 text-left">
                    Welcome to FitFlow
                </div>
            </div> */}
            <div class="absolute top-6 ml-20">
            
                <p class="font-mono text-4xl text-gray-200 mt-60 text-left">
                    FitFlow
                </p>
                <p  class="font-mono text-6xl text-gray-200 mt-5 text-left">
                    Transform <br/>
                    Your Body, Mind, <br/>
                    and Soul.
                </p>
                <p class="font-mono text-2xl text-gray-100 mt-5 text-left">
                    Empowering You to Embrace a Healthier  <br/> Lifestyle, 
                    Achieve Your Fitness Goals, <br/> and Unleash Your Full Potential.
                </p>
                <Link to="/questionnaire"> 
                    <button class="mt-10 drop-shadow-2xl
                    transition duration-200 delay-100
                    bg-white hover:bg-zinc-600 text-zinc-700 hover:text-white 
                    font-bold py-2 px-4 rounded-full">
                        GET STARTED 
                    </button>
                </Link>
            </div>
            <h4>
                By tapping GET STARTED, you agree to our&nbsp;
                <a href="/">Terms of Use</a>&nbsp;and&nbsp;
                <a href="/">Privacy Policy</a>.
                Please review them before continuing.
            </h4>
        </div>
    )
}
