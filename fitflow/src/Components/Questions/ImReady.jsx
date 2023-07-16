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
            <img
                className="object-scale-down m-4 h-24"
                src="https://static-00.iconduck.com/assets.00/note-taking-illustration-512x471-nivizkgy.png"
                alt="Fitness app"
            />
            <p className="text-2xl mb-5">Let's personalize your plan!</p>
            <p className="text-1xl mb-5">We'll guide you through simple steps to set you up for success.</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
                onClick={handleContinue}
            >
                I'm Ready!
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
