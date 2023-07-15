import React, { useState } from 'react';

export default function WhatHeight({ onContinue, onGoBack }) {
    const [unit, setUnit] = useState('inches');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');

    const handleUnitChange = (event) => {
        setUnit(event.target.value);
    };

    const handleFeetChange = (event) => {
        setFeet(event.target.value);
    };

    const handleInchesChange = (event) => {
        setInches(event.target.value);
    };

    const handleContinue = () => {
        if (unit === 'inches') {
            if (!feet || !inches) {
                alert('Please enter your height in feet and inches');
                return;
            }
        } else if (unit === 'cm') {
            if (!feet) {
                alert('Please enter your height in centimeters');
                return;
            }
        }

        onContinue(feet, inches, unit);
    };

    const handleGoBack = () => {
        onGoBack();
    };

    return (
        <>
            <button onClick={handleGoBack}>&#8592;</button>
            <h2>Enter Your Height</h2>
            <div>
                <label>
                    Unit of Measurement:
                    <select value={unit} onChange={handleUnitChange}>
                        <option value="inches">Inches</option>
                        <option value="cm">Centimeters</option>
                    </select>
                </label>
            </div>
            {unit === 'inches' && (
                <div>
                    <label>
                        Feet:
                        <select value={feet} onChange={handleFeetChange}>
                            <option value="">Select</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </label>
                    <label>
                        Inches:
                        <select value={inches} onChange={handleInchesChange}>
                            <option value="">Select</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                    </label>
                </div>
            )}
            {unit === 'cm' && (
                <div>
                    <label>
                        cm:
                        <input
                            type="number"
                            value={feet}
                            onChange={handleFeetChange}
                            placeholder="Centimeters"
                        />
                    </label>
                </div>
            )}
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
