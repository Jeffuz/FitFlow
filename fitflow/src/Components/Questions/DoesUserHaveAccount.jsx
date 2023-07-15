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
            <Link to="/">
                <button>&#8592;</button>
            </Link>
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
            <button onClick={handleContinue}>Continue</button>
        </>
    );
}
