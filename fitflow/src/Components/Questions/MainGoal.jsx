import React, { useState } from 'react';

export default function MainGoal({ onContinue, onGoBack }) {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleOptionClick = (event, goal) => {
        setSelectedGoal(goal);
    };

    const handleContinue = () => {
        if (selectedGoal) {
            onContinue({ mainGoal: selectedGoal });
        } else {
            alert('Please select a main goal');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <img className="object-scale-down m-3 h-24"
            src="https://static-00.iconduck.com/assets.00/target-illustration-512x423-1hf6t7pi.png"/>
            <p className='text-2xl mb-5'>What's your main goal?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'lose weight')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'lose weight'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Lose Weight:</strong> Drop extra pounds with ease
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'find self-love')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'find self-love'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Find Self-Love:</strong> Embrace your changing body
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'build muscle')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'build muscle'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Build Muscle:</strong> Get lean and strong
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'keep fit')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'keep fit'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Keep Fit:</strong> Stay in shape and feel great
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
