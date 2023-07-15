import React, { useState } from 'react';

export default function WhatBodyType({ onContinue, onGoBack }) {
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
            <p className='text-2xl mb-5'>What's your body type?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'ectomorph')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'ectomorph'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Ectomorph</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'mesomorph')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'mesomorph'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Mesomorph</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'endomorph')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedGoal === 'endomorph'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Endomorph</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

