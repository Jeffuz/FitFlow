import React, { useState } from 'react';

export default function WhatGender({ onContinue, onGoBack }) {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleOptionClick = (event, goal) => {
        setSelectedGoal(goal);
    };

    const handleContinue = () => {
        if (selectedGoal) {
            onContinue();
        } else {
            alert('Please select a gender');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <h2>What's your gender?</h2>
            <div onClick={(event) => handleOptionClick(event, 'male')}>
                <label>
                    <strong>Male</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'male'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'female')}>
                <label>
                    <strong>Female</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'female'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'non_binary')}>
                <label>
                    <strong>Non-Binary</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'non_binary'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

