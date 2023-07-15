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
            <p className='text-2xl mb-5'>What are you interested in?</p>
            <div className='mb-2' onClick={() => handleOptionToggle('meal-plans')}>
                
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoals.includes('meal-plans')}
                    onChange={() => { }}
                />
                <label>
                    <strong>Meal Plans:</strong> I want to have a set menu to achieve faster results
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('calorie-counting')}>
                
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoals.includes('calorie-counting')}
                    onChange={() => { }}
                />
                <label>
                    <strong>Calorie Counting:</strong> I like to be precise and know the exact macros I consume
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('workout-plans')}>
                
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoals.includes('workout-plans')}
                    onChange={() => { }}
                />
                <label>
                    <strong>Workout Plans:</strong> I'd like to get in shape and define my muscles
                </label>
            </div>
            <div className='mb-5' onClick={() => handleOptionToggle('fasting')}>
                
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoals.includes('fasting')}
                    onChange={() => { }}
                />
                <label>
                    <strong>Fasting:</strong> I want to lose weight and improve digestion
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
