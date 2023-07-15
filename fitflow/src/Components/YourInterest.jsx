import React, { useState } from 'react';

export default function YourInterest({ onContinue }) {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleOptionClick = (event, goal) => {
        setSelectedGoal(goal);
    };

    const handleContinue = () => {
        if (selectedGoal) {
            onContinue();
        } else {
            alert('Please select an interest');
        }
    };

    return (
        <>
            <h2>What are you interested in?</h2>
            <div onClick={(event) => handleOptionClick(event, 'meal-plans')}>
                <label>
                    <strong>Meal Plans:</strong> I want to have a set menu to achieve faster results
                </label>
                <input
                    type="radio"
                    value="meal-plans"
                    checked={selectedGoal === 'meal-plans'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'calorie-counting')}>
                <label>
                    <strong>Calorie Counting:</strong> I like to be precise and know the exact macros I consume
                </label>
                <input
                    type="radio"
                    value="calorie-counting"
                    checked={selectedGoal === 'calorie-counting'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'workout-plans')}>
                <label>
                    <strong>Workout Plans:</strong> I'd like to get in shape and define my muscles
                </label>
                <input
                    type="radio"
                    value="workout-plans"
                    checked={selectedGoal === 'workout-plans'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'fasting')}>
                <label>
                    <strong>Fasting:</strong> I want to lose weight and improve digestion
                </label>
                <input
                    type="radio"
                    value="fasting"
                    checked={selectedGoal === 'fasting'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
