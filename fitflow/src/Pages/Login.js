import React from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from '../Components/UserAuthentication/LoginComponent';

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Link to="/" className="absolute top-4 left-4">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                    &#8592; Back
                </button>
            </Link>
            <LoginComponent />
        </div>
    );
}