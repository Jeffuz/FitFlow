import React, { useState } from 'react';

export default function NutritionToExclude({ onContinue }) {
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

    return (
        <>
            <h2>What do you want to exclude?</h2>
            <div onClick={(event) => handleOptionClick(event, 'dairy')}>
                <label>
                    <strong>Dairy</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'dairy'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'gluten')}>
                <label>
                    <strong>Gluten</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'gluten'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'eggs')}>
                <label>
                    <strong>Eggs</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'eggs'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'fish')}>
                <label>
                    <strong>Fish</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'fish'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'i_eat_everything')}>
                <label>
                    <strong>I eat everything</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedGoal === 'i_eat_everything'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}