import React, { useState } from 'react';

export default function HowActive({ onContinue, onGoBack }) {
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const handleOptionClick = (event, Workout) => {
        setSelectedWorkout(Workout);
    };

    const handleContinue = () => {
        if (selectedWorkout) {
            onContinue({active: selectedWorkout});
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
            <img className="object-scale-down m-3 h-24"
            src="https://static-00.iconduck.com/assets.00/calendar-illustration-512x410-bk201cbg.png"/>
            <p className='text-2xl mb-5'>How active are you?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'not much')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedWorkout === 'not much'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Not Much</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, '1-2 workouts a week')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedWorkout === '1-2 workouts a week'}
                    onChange={() => { }}
                />
                <label>
                    <strong>1-2 Workouts a Week</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, '3-5 workouts a week')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedWorkout === '3-5 workouts a week'}
                    onChange={() => { }}
                />
                <label>
                    <strong>3-5 Workouts a Week</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, '5-7 workouts a week')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedWorkout === '5-7 workouts a week'}
                    onChange={() => { }}
                />
                <label>
                    <strong>5-7 Workouts a Week</strong>
                </label>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
                onClick={handleContinue}
            >
                Next
            </button>
            <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={handleGoBack}
            >
                Back
            </button>
        </>
    );
}


