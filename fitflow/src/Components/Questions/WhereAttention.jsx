import React, { useState } from 'react';

export default function WhereAttention({ onContinue, onGoBack }) {
    const [selectedAttention, setSelectedAttention] = useState([]);

    const handleOptionToggle = (attention) => {
        const updatedAttention = [...selectedAttention];
        const attentionIndex = updatedAttention.indexOf(attention);

        if (attentionIndex === -1) {
            updatedAttention.push(attention);
        } else {
            updatedAttention.splice(attentionIndex, 1);
        }

        setSelectedAttention(updatedAttention);
    };

    const handleContinue = () => {
        if (selectedAttention.length > 0) {
            onContinue({attention: selectedAttention}); 
        } else {
            alert('Please select at least one area');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <img className="object-scale-down m-4 h-24"
            src="https://static-00.iconduck.com/assets.00/diet-icon-512x512-plqvqqlx.png"/>
            <p className='text-2xl mb-5'>Which area needs the most attention?</p>
            <div className='mb-2' onClick={() => handleOptionToggle('chest')}>
                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedAttention.includes('chest')}
                    onChange={() => { }}
                />
                <label>
                    <strong>Chest</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('arms')}>
                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedAttention.includes('arms')}
                    onChange={() => { }}
                />
                <label>
                    <strong>Arms</strong>
                </label>
            </div>
            <div className='mb-2' onClick={() => handleOptionToggle('abs')}>
                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedAttention.includes('abs')}
                    onChange={() => { }}
                />
                <label>
                    <strong>Abs</strong>
                </label>
            </div>
            <div className='mb-5' onClick={() => handleOptionToggle('legs')}>
                <input
                    type="checkbox"
                    className='mr-1'
                    checked={selectedAttention.includes('legs')}
                    onChange={() => { }}
                />
                <label>
                    <strong>Legs</strong>
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

