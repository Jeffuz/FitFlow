import React, { useState } from 'react';

export default function HowMuchSleep({ onContinue }) {
    const [selectedSleep, setSelectedSleep] = useState(null);

    const handleOptionClick = (event, Sleep) => {
        setSelectedSleep(Sleep);
    };

    const handleContinue = () => {
        if (selectedSleep) {
            onContinue();
        } else {
            alert('Please select an option');
        }
    };

    return (
        <>
            <h2>How much sleep do you get?</h2>
            <div onClick={(event) => handleOptionClick(event, 'less_than_5_hours')}>
                <label>
                    <strong>Less Than 5 Hours</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedSleep === 'less_than_5_hours'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, '5-6_hours')}>
                <label>
                    <strong>5-6 Hours</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedSleep === '5-6_hours'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, '7-8_hours')}>
                <label>
                    <strong>7-8 hours</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedSleep === '7-8_hours'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'more_than_8_hours')}>
                <label>
                    <strong>More Than 8 Hours</strong> 
                </label>
                <input
                    type="radio"
                    checked={selectedSleep === 'more_than_8_hours'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

