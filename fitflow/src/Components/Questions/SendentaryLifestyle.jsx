import React, { useState } from 'react';

export default function SendentaryLifestyle({ onContinue, onGoBack }) {
    const [selectedStyle, setSelectedStyle] = useState(null);

    const handleOptionClick = (event, Style) => {
        setSelectedStyle(Style);
    };

    const handleContinue = () => {
        if (selectedStyle) {
            onContinue({sendentary: selectedStyle});
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
            <p className='text-2xl mb-5'>Do you have a sedentary lifestyle?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'yes')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedStyle === 'yes'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Yes</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'no')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedStyle === 'no'}
                    onChange={() => { }}
                />
                <label>
                    <strong>No</strong>
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
