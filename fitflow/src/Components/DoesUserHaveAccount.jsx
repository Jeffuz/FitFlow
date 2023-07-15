import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
            <h2>Welcome to our fitness community! Are you already part of our journey?</h2>
            <div>
                <label>
                    <strong>Not Yet</strong>
                    <input
                        type="radio"
                        value="not-yet"
                        checked={hasAccount === false}
                        onChange={handleCheckboxChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <strong>Yes, I'm already part of the community</strong>
                    <input
                        type="radio"
                        value="yes"
                        checked={hasAccount === true}
                        onChange={handleCheckboxChange}
                    />
                </label>
            </div>
            <button onClick={handleContinue}>Continue</button>
        </>
    );
}
