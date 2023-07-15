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
 
            <p className='text-2xl mb-5'>Let's personalize your plan!</p>
            <p className='text-1xl mb-5'>We'll guide you through simple steps to set you up for success.</p>
            <button onClick={handleContinue}>I'm Ready!</button>
        </>
    );
}
