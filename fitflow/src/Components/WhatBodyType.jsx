import React, { useState } from 'react';

export default function WhatBodyType({ onContinue }) {
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
            <h2>What's your body type?</h2>
            <div onClick={(event) => handleOptionClick(event, 'ectomorph')}>
                <label>
                    <strong>Ectomorph</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'ectomorph'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'mesomorph')}>
                <label>
                    <strong>Mesomorph</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'mesomorph'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'endomorph')}>
                <label>
                    <strong>Endomorph</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'endomorph'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

