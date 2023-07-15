import React from 'react';

export default function WhereWorkout({ onContinue }) {

    const handleContinue = () => {
        onContinue();
    };

    return (
        <>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
