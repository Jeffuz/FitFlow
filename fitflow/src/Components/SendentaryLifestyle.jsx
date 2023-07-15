import React from 'react';

export default function SendentaryLifestyle({ onContinue }) {

    const handleContinue = () => {
        onContinue();
    };

    return (
        <>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
