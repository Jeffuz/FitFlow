import React, { useState } from 'react';

export default function WhereWorkout({ onContinue }) {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleOptionClick = (event, goal) => {
        setSelectedGoal(goal);
    };

    const handleContinue = () => {
        if (selectedGoal) {
            onContinue();
        } else {
            alert('Please select an option');
        }
    };

    return (
        <>
            <h2>What's your main goal?</h2>
            <div onClick={(event) => handleOptionClick(event, 'gym')}>
                <label>
                    <strong>Gym</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'gym'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'home')}>
                <label>
                    <strong>Home</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'home'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

