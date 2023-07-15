import React, { useState } from 'react';

export default function WhatHeight({ onContinue }) {
    const [weight, setWeight] = useState('');
    const [measurementUnit, setMeasurementUnit] = useState('kg');

    const handleInputChange = (event) => {
        setWeight(event.target.value);
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
