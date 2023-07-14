import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainGoal() {
    const [selectedGoal, setSelectedGoal] = useState(null);
    const navigate = useNavigate();

    const handleOptionClick = (event, goal) => {
        setSelectedGoal(goal);
    };

    const handleNextClick = () => {
        if (selectedGoal) {
            // Navigate to the next component (replace `/next` with the actual route)
            navigate('/next');
        } else {
            alert('Please select a main goal');
        }
    };

    return (
        <>
            <h2>What's your main goal?</h2>
            <div onClick={(event) => handleOptionClick(event, 'lose-weight')}>
                <label>
                    <strong>Lose Weight:</strong> Drop extra pounds with ease
                </label>
                <input
                    type="radio"
                    value="lose-weight"
                    checked={selectedGoal === 'lose-weight'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'find-self-love')}>
                <label>
                    <strong>Find Self-Love:</strong> Embrace your changing body
                </label>
                <input
                    type="radio"
                    value="find-self-love"
                    checked={selectedGoal === 'find-self-love'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'build-muscle')}>
                <label>
                    <strong>Build Muscle:</strong> Get lean and strong
                </label>
                <input
                    type="radio"
                    value="build-muscle"
                    checked={selectedGoal === 'build-muscle'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'keep-fit')}>
                <label>
                    <strong>Keep Fit:</strong> Stay in shape and feel great
                </label>
                <input
                    type="radio"
                    value="keep-fit"
                    checked={selectedGoal === 'keep-fit'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleNextClick}>Next</button>
        </>
    );
}
