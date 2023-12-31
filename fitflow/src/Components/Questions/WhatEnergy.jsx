import React, { useState } from 'react';

export default function WhatEnergy({ onContinue, onGoBack }) {
    const [selectedEnergy, setSelectedEnergy] = useState(null);

    const handleOptionClick = (event, Energy) => {
        setSelectedEnergy(Energy);
    };

    const handleContinue = () => {
        if (selectedEnergy) {
            onContinue({energy_level: selectedEnergy});
        } else {
            alert('Please select a gender');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <p className='text-2xl mb-5'>How are your energy levels during the day?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'even throughout the day')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedEnergy === 'even throughout the day'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Even Throughout the Day</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'i feel a dip around lunchtime')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedEnergy === 'i feel a dip around lunchtime'}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Feel a Dip Around Lunchtime</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'i need a nap after meals')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedEnergy === 'i need a nap after meals'}
                    onChange={() => { }}
                />
                <label>
                    <strong>I Need a Nap After Meals</strong>
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

