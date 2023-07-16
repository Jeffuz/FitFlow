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
            <img className="object-scale-down my-4 h-52"
            src="https://static.tuasaude.com/media/article/rl/xg/body-type_38055.webp"/>
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

