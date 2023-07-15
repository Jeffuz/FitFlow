import React, { useState } from 'react';

export default function HowMuchSleep({ onContinue, onGoBack }) {
    const [selectedSleep, setSelectedSleep] = useState(null);

    const handleOptionClick = (event, Sleep) => {
        setSelectedSleep(Sleep);
    };

    const handleContinue = () => {
        if (selectedSleep) {
            onContinue({sleep: selectedSleep});
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
            <p className='text-2xl mb-5'>How much sleep do you get?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'less_than_5_hours')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedSleep === 'less_than_5_hours'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Less Than 5 Hours</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, '5-6_hours')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedSleep === '5-6_hours'}
                    onChange={() => { }}
                />
                <label>
                    <strong>5-6 Hours</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, '7-8_hours')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedSleep === '7-8_hours'}
                    onChange={() => { }}
                />
                <label>
                    <strong>7-8 hours</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'more_than_8_hours')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedSleep === 'more_than_8_hours'}
                    onChange={() => { }}
                />
                <label>
                    <strong>More Than 8 Hours</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

