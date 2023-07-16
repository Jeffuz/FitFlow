import React from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from '../Components/UserAuthentication/LoginComponent';

export default function Login() {
    return (
        <div className="h-screen bg-cover bg-center bg-gray-200 flex justify-center">
            <Link to="/" className="absolute top-4 left-4">
                <button className="transition delay-1000 duration-1000 
                hover:text-gray-800 hover:text-lg text-gray-700 
                font-bold py-2 px-1">
                    &#8592; Back
                </button>
            </Link>
            <div className="mt-36">
                <LoginComponent/>
            </div>
           
        </div>
    );
}