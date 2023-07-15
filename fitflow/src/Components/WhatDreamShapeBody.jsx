import React, { useState } from 'react';

export default function WhatDreamShapeBody({ onContinue, onGoBack }) {
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

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <h2>What's your dream body shape?</h2>
            <div onClick={(event) => handleOptionClick(event, 'cut')}>
                <label>
                    <strong>Cut</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'cut'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'bulk')}>
                <label>
                    <strong>Bulk</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'bulk'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'extra_bulk')}>
                <label>
                    <strong>Extra Bulk</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'extra_bulk'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

