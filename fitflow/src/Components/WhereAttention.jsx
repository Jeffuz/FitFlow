import React from 'react';

export default function WhereAttention({ onContinue }) {

    const handleContinue = () => {
        onContinue();
    };

    return (
        <>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
