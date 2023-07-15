import React, { useState } from 'react';

export default function WhatTypicalDay({ onContinue }) {
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
            <h2>What does your typical day look like?</h2>
            <div onClick={(event) => handleOptionClick(event, 'at_the_office')}>
                <label>
                    <strong>At the Office</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'at_the_office'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'walking_daily')}>
                <label>
                    <strong>Walking Daily</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'walking_daily'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'working_physically')}>
                <label>
                    <strong>Working Physically</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'working_physically'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'mostly_at_home')}>
                <label>
                    <strong>Mostly at Home</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'mostly_at_home'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}


