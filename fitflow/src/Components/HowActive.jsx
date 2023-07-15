import React, { useState } from 'react';

export default function HowActive({ onContinue, onGoBack }) {
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const handleOptionClick = (event, Workout) => {
        setSelectedWorkout(Workout);
    };

    const handleContinue = () => {
        if (selectedWorkout) {
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
            <h2>How active are you?</h2>
            <div onClick={(event) => handleOptionClick(event, 'not_much')}>
                <label>
                    <strong>Not Much</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedWorkout === 'not_much'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, '1-2_workouts_a_week')}>
                <label>
                    <strong>1-2 Workouts a Week</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedWorkout === '1-2_workouts_a_week'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, '3-5_workouts_a_week')}>
                <label>
                    <strong>3-5 Workouts a Week</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedWorkout === '3-5_workouts_a_week'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, '5-7_workouts_a_week')}>
                <label>
                    <strong>5-7 Workouts a Week</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedWorkout === '5-7_workouts_a_week'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}


