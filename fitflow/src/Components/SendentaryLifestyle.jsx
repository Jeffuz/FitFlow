import React, { useState } from 'react';

export default function SendentaryLifestyle({ onContinue, onGoBack }) {
    const [selectedStyle, setSelectedStyle] = useState(null);

    const handleOptionClick = (event, Style) => {
        setSelectedStyle(Style);
    };

    const handleContinue = () => {
        if (selectedStyle) {
            onContinue();
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
            <h2>Do you have a sedentary lifestyle?</h2>
            <div onClick={(event) => handleOptionClick(event, 'yes')}>
                <label>
                    <strong>Yes</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedStyle === 'yes'}
                    onChange={() => { }}
                />
            </div>
            <div onClick={(event) => handleOptionClick(event, 'no')}>
                <label>
                    <strong>No</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedStyle === 'no'}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
