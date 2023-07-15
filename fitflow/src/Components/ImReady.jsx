import React from 'react';

export default function ImReady({ onContinue }) {

    const handleContinue = () => {
        onContinue();
    };

    return (
        <>
            <h2>Let's personalize your plan</h2>
            <p>We'll guide you through simple steps to set you up for success</p>
            <button onClick={handleContinue}>I'm Ready</button>
        </>
    );
}
