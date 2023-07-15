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
            <p className='text-2xl mb-5'>How active are you?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'not_much')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedWorkout === 'not_much'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Not Much</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, '1-2_workouts_a_week')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedWorkout === '1-2_workouts_a_week'}
                    onChange={() => { }}
                />
                <label>
                    <strong>1-2 Workouts a Week</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, '3-5_workouts_a_week')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedWorkout === '3-5_workouts_a_week'}
                    onChange={() => { }}
                />
                <label>
                    <strong>3-5 Workouts a Week</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, '5-7_workouts_a_week')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedWorkout === '5-7_workouts_a_week'}
                    onChange={() => { }}
                />
                <label>
                    <strong>5-7 Workouts a Week</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}


