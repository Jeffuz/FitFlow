import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../Pages/styles.css'; // Import the CSS file

export default function DoesUserHaveAccount({ onContinue }) {
    const [hasAccount, setHasAccount] = useState(null);
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        setHasAccount(event.target.value === 'yes');
    };

    const handleContinue = () => {
        if (hasAccount === null) {
            alert('Please select an option');
            return;
        }
        if (hasAccount) {
            navigate('/login');
        } else {
            onContinue();
        }
    };

    return (
        <>
            <img className="object-scale-down m-4 h-24"
            src="https://static-00.iconduck.com/assets.00/diversity-illustration-512x173-qkdeqbov.png"/>
            <p className='text-2xl mb-5'>Welcome to our fitness community! <br/> 
            Are you already part of our journey?</p>
            <div className='mb-2'>
                <label>
                   
                    <input
                        className='mr-1'
                        type="radio"
                        value="not-yet"
                        checked={hasAccount === false}
                        onChange={handleCheckboxChange}
                    />
                    <strong>Not Yet</strong>
                </label>
            </div>
            <div className='mb-5'>
                <label>
                    <input
                        className='mr-1'
                        type="radio"
                        value="yes"
                        checked={hasAccount === true}
                        onChange={handleCheckboxChange}
                    />
                    <strong>Yes, I'm already part of the community</strong>
                </label>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
                onClick={handleContinue}
            >
                Continue
            </button>
        </>
    );
}
