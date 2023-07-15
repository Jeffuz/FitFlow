import React, { useState } from 'react';

export default function WhereAttention({ onContinue, onGoBack }) {
    const [selectedAttention, setselectedAttention] = useState([]);

    const handleOptionToggle = (attention) => {
        const updateAttention = [...selectedAttention];
        const attentionIndex = updateAttention.indexOf(attention);

        if (attentionIndex === -1) {
            updateAttention.push(attention);
        } else {
            updateAttention.splice(attentionIndex, 1);
        }

        setselectedAttention(updateAttention);
    };

    const handleContinue = () => {
        if (selectedAttention.length > 0) {
            // console.log('Selected area:', selectedAttention);
            onContinue(selectedAttention);
        } else {
            alert('Please select at least one interest');
        }
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <p className='text-2xl mb-5'>Which area needs the most attention?</p>
            <div className='mb-2' onClick={() => handleOptionToggle('chest')}>
                <input
                    type="radio"
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
                    type="radio"
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
                    type="radio"
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
                    type="radio"
                    className='mr-1'
                    checked={selectedAttention.includes('legs')}
                    onChange={() => { }}
                />
                <label>
                    <strong>Legs</strong>
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

