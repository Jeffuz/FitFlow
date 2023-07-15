import React, { useState } from 'react';

export default function WhereAttention({ onContinue }) {
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

    return (
        <>
            <h2>What area needs the most attention?</h2>
            <div onClick={() => handleOptionToggle('chest')}>
                <label>
                    <strong>Chest</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedAttention.includes('chest')}
                    onChange={() => { }}
                />
            </div>
            <div onClick={() => handleOptionToggle('arms')}>
                <label>
                    <strong>Arms</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedAttention.includes('arms')}
                    onChange={() => { }}
                />
            </div>
            <div onClick={() => handleOptionToggle('abs')}>
                <label>
                    <strong>Abs</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedAttention.includes('abs')}
                    onChange={() => { }}
                />
            </div>
            <div onClick={() => handleOptionToggle('legs')}>
                <label>
                    <strong>Legs</strong>
                </label>
                <input
                    type="radio"
                    checked={selectedAttention.includes('legs')}
                    onChange={() => { }}
                />
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}

