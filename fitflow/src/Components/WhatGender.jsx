import React from 'react';

export default function WhatGender({ onContinue }) {

    const handleContinue = () => {
        onContinue();
    };

    return (
        <>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
