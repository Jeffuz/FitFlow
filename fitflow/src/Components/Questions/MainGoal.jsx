import React, { useState } from 'react';

export default function MainGoal({ onContinue, onGoBack }) {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleOptionClick = (event, goal) => {
        setSelectedGoal(goal);
    };

    const handleContinue = () => {
        if (selectedGoal) {
            onContinue();
        } else {
            alert('Please select a main goal');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <p className='text-2xl mb-5'>What's your main goal?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'lose-weight')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'lose-weight'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Lose Weight:</strong> Drop extra pounds with ease
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'find-self-love')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'find-self-love'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Find Self-Love:</strong> Embrace your changing body
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'build-muscle')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'build-muscle'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Build Muscle:</strong> Get lean and strong
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'keep-fit')}>
                <input
                    className='mr-1'
                    type="radio"
                    checked={selectedGoal === 'keep-fit'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Keep Fit:</strong> Stay in shape and feel great
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
