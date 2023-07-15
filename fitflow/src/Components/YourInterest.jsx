import React, { useState } from 'react';

export default function YourInterest({ onContinue, onGoBack }) {
    const [selectedGoals, setSelectedGoals] = useState([]);

    const handleOptionToggle = (goal) => {
        const updatedGoals = [...selectedGoals];
        const goalIndex = updatedGoals.indexOf(goal);

        if (goalIndex === -1) {
            updatedGoals.push(goal);
        } else {
            updatedGoals.splice(goalIndex, 1);
        }

        setSelectedGoals(updatedGoals);
    };

    const handleContinue = () => {
        if (selectedGoals.length > 0) {
            // console.log('Selected Goals:', selectedGoals);
            onContinue(selectedGoals);
        } else {
            alert('Please select at least one interest');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <h2>What are you interested in?</h2>
            <div onClick={() => handleOptionToggle('meal-plans')}>
                <label>
                    <strong>Meal Plans:</strong> I want to have a set menu to achieve faster results
                </label>
                <input
                    type="radio"
                    checked={selectedGoals.includes('meal-plans')}
                    onChange={() => { }}
                />
            </div>
            <div onClick={() => handleOptionToggle('calorie-counting')}>
                <label>
                    <strong>Calorie Counting:</strong> I like to be precise and know the exact macros I consume
                </label>
                <input
                    type="radio"
                    checked={selectedGoals.includes('calorie-counting')}
                    onChange={() => { }}
                />
            </div>
            <div onClick={() => handleOptionToggle('workout-plans')}>
                <label>
                    <strong>Workout Plans:</strong> I'd like to get in shape and define my muscles
                </label>
                <input
                    type="radio"
                    checked={selectedGoals.includes('workout-plans')}
                    onChange={() => { }}
                />
            </div>
            <div onClick={() => handleOptionToggle('fasting')}>
                <label>
                    <strong>Fasting:</strong> I want to lose weight and improve digestion
                </label>
                <input
                    type="radio"
                    checked={selectedGoals.includes('fasting')}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
