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
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'at_the_office')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedTypicalDay === 'at_the_office'}
                    onChange={() => { }}
                />
                <label>
                    <strong>At the Office</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'walking_daily')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedTypicalDay === 'walking_daily'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Walking Daily</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'working_physically')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedTypicalDay === 'working_physically'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Working Physically</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'mostly_at_home')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedTypicalDay === 'mostly_at_home'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Mostly at Home</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}


