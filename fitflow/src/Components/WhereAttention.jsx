import React, { useState } from 'react';

export default function WhereAttention({ onContinue }) {
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

    return (
        <>
            <h2>What are you interested in?</h2>
            <div onClick={() => handleOptionToggle('chest')}>
                <label>
                    <strong>Chest</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoals.includes('chest')}
                    onChange={() => { }}
                />
            </div>
            <div onClick={() => handleOptionToggle('arms')}>
                <label>
                    <strong>Arms</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedGoals.includes('arms')}
                    onChange={() => { }}
                />
            </div>
            <div onClick={() => handleOptionToggle('abs')}>
                <label>
                    <strong>Abs</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedGoals.includes('abs')}
                    onChange={() => { }}
                />
            </div>
            <div onClick={() => handleOptionToggle('legs')}>
                <label>
                    <strong>Legs</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedGoals.includes('legs')}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

