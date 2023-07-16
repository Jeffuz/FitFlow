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
            <img className="object-scale-down m-4 h-24"
            src="https://static-00.iconduck.com/assets.00/dream-illustration-512x393-vx80d12g.png"/>
            <p className='text-2xl mb-5'>How much sleep do you get?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'less than 5 hours')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedSleep === 'less than 5 hours'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Less Than 5 Hours</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, '5-6 hours')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedSleep === '5-6 hours'}
                    onChange={() => { }}
                />
                <label>
                    <strong>5-6 Hours</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, '7-8 hours')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedSleep === '7-8 hours'}
                    onChange={() => { }}
                />
                <label>
                    <strong>7-8 hours</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'more than 8 hours')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedSleep === 'more than 8 hours'}
                    onChange={() => { }}
                />
                <label>
                    <strong>More Than 8 Hours</strong>
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

