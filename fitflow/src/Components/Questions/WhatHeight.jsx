import React, { useState } from 'react';

export default function WhatHeight({ onContinue, onGoBack }) {
    const [unit, setUnit] = useState('inches');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');

    const handleUnitChange = (event) => {
        setUnit(event.target.value);
    };

    const handleFeetChange = (event) => {
        const value = event.target.value;
        if (value >= 3 && value <= 9) {
            setFeet(value);
        }
    };

    const handleInchesChange = (event) => {
        const value = event.target.value;
        if (value >= 0 && value <= 11) {
            setInches(value);
        }
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
                        <input
                            type="number"
                            value={feet}
                            onChange={handleFeetChange}
                            placeholder="Feet"
                            min={3}
                            max={9}
                        />
                    </label>
                    <label>
                        Inches:
                        <input
                            type="number"
                            value={inches}
                            onChange={handleInchesChange}
                            placeholder="Inches"
                            min={0}
                            max={11}
                        />
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
