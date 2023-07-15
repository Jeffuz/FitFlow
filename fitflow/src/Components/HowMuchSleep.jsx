import React from 'react';

export default function HowMuchSleep({ onContinue }) {

    const handleContinue = () => {
        onContinue();
    };

    return (
        <>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
