import React, { useState } from 'react';

export default function MainGoal({ onContinue, onGoBack }) {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleOptionClick = (event, goal) => {
        setSelectedGoal(goal);
    };

    const handleContinue = () => {
        if (selectedGoal) {
            onContinue();
        } else {
            alert('Please select a main goal');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <h2>What's your main goal?</h2>
            <div onClick={(event) => handleOptionClick(event, 'lose-weight')}>
                <label>
                    <strong>Lose Weight:</strong> Drop extra pounds with ease
                </label>
                <input
                    type="radio"
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
                    checked={selectedGoal === 'keep-fit'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
