import React, { useState } from 'react';

export default function WhatTypicalDay({ onContinue, onGoBack }) {
    const [selectedTypicalDay, setSelectedTypicalDay] = useState(null);

    const handleOptionClick = (event, TypicalDay) => {
        setSelectedTypicalDay(TypicalDay);
    };

    const handleContinue = () => {
        if (selectedTypicalDay) {
            onContinue({typical_day: selectedTypicalDay});
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
            <p className='text-2xl mb-5'>What does your typical day look like?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'at the office')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedTypicalDay === 'at the office'}
                    onChange={() => { }}
                />
                <label>
                    <strong>At the Office</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'walking daily')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedTypicalDay === 'walking daily'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Walking Daily</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'working physically')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedTypicalDay === 'working physically'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Working Physically</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'mostly at home')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedTypicalDay === 'mostly at home'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Mostly at Home</strong>
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


