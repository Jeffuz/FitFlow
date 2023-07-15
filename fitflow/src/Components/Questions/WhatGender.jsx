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
            <p className='text-2xl mb-5'>What's your gender?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'male')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'male'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Male</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'female')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'female'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Female</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'non_binary')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'non_binary'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Non-Binary</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

