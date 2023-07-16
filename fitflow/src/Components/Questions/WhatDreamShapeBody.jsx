import React, { useState } from 'react';

export default function WhatDreamShapeBody({ onContinue, onGoBack }) {
    const [selectedBodyShape, setSelectedBodyShape] = useState(null);

    const handleOptionClick = (event, BodyShape) => {
        setSelectedBodyShape(BodyShape);
    };

    const handleContinue = () => {
        if (selectedBodyShape) {
            onContinue({body_shape: selectedBodyShape});
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
            <img className="object-scale-down m-4 h-24"
            src="https://static-00.iconduck.com/assets.00/chestpress-icon-445x512-jb6x2arf.png"/>
            <p className='text-2xl mb-5'>What's your dream body shape?</p>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'cut')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedBodyShape === 'cut'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Cut</strong>
                </label>
            </div>
            <div className='mb-2' onClick={(event) => handleOptionClick(event, 'bulk')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedBodyShape === 'bulk'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Bulk</strong>
                </label>
            </div>
            <div className='mb-5' onClick={(event) => handleOptionClick(event, 'extra_bulk')}>
                <input
                    type="radio"
                    className='mr-1'
                    checked={selectedBodyShape === 'extra_bulk'}
                    onChange={() => { }}
                />
                <label>
                    <strong>Extra Bulk</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

