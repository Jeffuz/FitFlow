import React, { useState } from 'react';

export default function WhatBodyType({ onContinue, onGoBack }) {
    const [selectedBodyType, setSelectedBodyType] = useState(null);

    const handleOptionClick = (event, BodyType) => {
        setSelectedBodyType(BodyType);
    };

    const handleContinue = () => {
        if (selectedBodyType) {
            onContinue({body_type: selectedBodyType});
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
            <p className='text-2xl mb-5'>What's your body type?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'ectomorph')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedBodyType === 'ectomorph'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Ectomorph</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'mesomorph')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedBodyType === 'mesomorph'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Mesomorph</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'endomorph')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedBodyType === 'endomorph'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Endomorph</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

