import React, { useState } from 'react';

export default function WhatWeight({ onContinue }) {
    const [weight, setWeight] = useState('');
    const [measurementUnit, setMeasurementUnit] = useState('kg');

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value >= 0 && value <= 660) {
            setWeight(value);
        }
    };

    const handleUnitChange = (event) => {
        setMeasurementUnit(event.target.value);
    };

    const handleContinue = () => {
        onContinue(weight, measurementUnit);
    };

    return (
        <>
            <h2>Enter Your Weight</h2>
            <div>
                <label>
                    <input
                        type="number"
                        value={weight}
                        onChange={handleInputChange}
                        placeholder={`Enter your weight in ${measurementUnit}`}
                        min={0}
                        max={660}
                    />
                    {measurementUnit}
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="kg"
                        checked={measurementUnit === 'kg'}
                        onChange={handleUnitChange}
                    />
                    kg
                </label>
                <label>
                    <input
                        type="radio"
                        value="lb"
                        checked={measurementUnit === 'lb'}
                        onChange={handleUnitChange}
                    />
                    lb
                </label>
            </div>
            <button onClick={handleContinue}>Next</button>
        </>
    );
}
