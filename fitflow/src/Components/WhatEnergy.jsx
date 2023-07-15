import React, { useState } from 'react';

export default function WhatEnergy({ onContinue, onGoBack }) {
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
            <h2>How are your energy levels during the day?</h2>
            <div onClick={(event) => handleOptionClick(event, 'even_throughout_the_day')}>
                <label>
                    <strong>Even Throughout the Day</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'even_throughout_the_day'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'i_feel_a_dip_around_lunchtime')}>
                <label>
                    <strong>I Feel a Dip Around Lunchtime</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'i_feel_a_dip_around_lunchtime'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'i_need_a_nap_after_meals')}>
                <label>
                    <strong>I Need a Nap After Meals</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'i_need_a_nap_after_meals'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

