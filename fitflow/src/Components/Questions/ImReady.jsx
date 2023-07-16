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
            <img className="object-scale-down m-4 h-24"
            src="https://static-00.iconduck.com/assets.00/note-taking-illustration-512x471-nivizkgy.png"/>
            <p className='text-2xl mb-5'>Let's personalize your plan!</p>
            <p className='text-1xl mb-5'>We'll guide you through simple steps to set you up for success.</p>
            <button onClick={handleContinue}>I'm Ready!</button>
        </>
    );
}
