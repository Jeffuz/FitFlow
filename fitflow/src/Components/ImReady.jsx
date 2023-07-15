import React from 'react';

export default function ImReady({ onContinue, onGoBack }) {

    const handleContinue = () => {
        onContinue();
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <h2>Let's personalize your plan</h2>
            <p>We'll guide you through simple steps to set you up for success</p>
            <button onClick={handleContinue}>I'm Ready</button>
        </>
    );
}
