import React from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from '../Components/LoginComponent';

export default function Login() {
    return (
        <div>
            <Link to="/questionnaire">
                <button>&#8592;</button>
            </Link>
            <LoginComponent/>         
        </div>

    )
}